import { Component, OnInit } from '@angular/core';
import { Genericservice } from 'src/app/services/genericservices';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { UrlConstant } from 'src/app/services/urlConstant';
import { PaginatePipe } from 'src/app/commons/chutti-filters/paginate/paginate.pipe';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/dataSharing.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [PaginatePipe]
})
export class EmployeeListComponent implements OnInit {
  getEmployeeListURL = UrlConstant.getEmployeeListApi;
  getEmployeeByIdURL = UrlConstant.getEmployeeByIdApi;
  saveEmployeeURL = UrlConstant.saveEmployeeApi;
  suspendOrActiveURL = UrlConstant.suspendOrActiveApi;
  employeeList: any;
  public perpageOption = [

    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];
  selectedItemsPerPage: number = 10;
  totalEmployeeList: any=[];
  totalCount: any;
  start: any;
  limit: any;
  totalPages: number;
  currentPage = 1;
  filterkey;
  status: any = "Active";
  selectedStatus: any;
  order: any;
  orderBy: any;
  public orderBoolean = false;
  employeeMaster: any;
  userMaster: any;
  modalRef:NgbModalRef;
  deleteEmployeeName:any = '';
  deleteEmpId:any='';

  constructor(private genericservice: Genericservice,
     private modalService:NgbModal,
     private dataSharingService: DataSharingService,
     private router: Router,
     private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
     private loadingBar: LoadingBarService) { }

  ngOnInit() {
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.selectedStatus = this.status;
    this.getEmployeeList();
  }

  // Employee Directory list
  getEmployeeList() {
    let requestPayload = {
      "gemsOrganisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId') ,
      "isActive": this.selectedStatus === "Active" ? true : false
    }
    this.genericservice.post(this.getEmployeeListURL, requestPayload, false).subscribe(response => {
      this.totalEmployeeList = response.data;
      this.totalCount = response.data.length;
      this.paginatedEmployeeList();
      this.findItemsPerPage();
    });
  }

  paginatedEmployeeList() {
    this.employeeList = this.totalEmployeeList.slice(this.start, this.limit);
  }
  goToNext() {
    this.currentPage++;
    this.start = this.start + this.selectedItemsPerPage;
    this.limit = this.limit + this.selectedItemsPerPage;
    this.employeeList = this.totalEmployeeList.slice(this.start, this.limit);
  }
  goToPrev() {
    this.currentPage--;
    this.start = this.start - this.selectedItemsPerPage;
    this.limit = this.limit - this.selectedItemsPerPage;
    this.employeeList = this.totalEmployeeList.slice(this.start, this.limit);
  }
  findItemsPerPage() {
    this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);
  }
  changeItemPerPage(event) {
    this.currentPage = 1;
    this.selectedItemsPerPage = parseInt(event);
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.paginatedEmployeeList();
    this.findItemsPerPage();
  }

  //STATUS CHANGE (ACTIVE \ SUSPEND)
  changeStatus() {
    this.getEmployeeList();
  }
  reset() {

  }
  setOrder(value: string, orderBy) {
    if (this.order === value) {
      // this.reverse = !this.reverse;
      this.orderBoolean = !this.orderBoolean;
      this.orderBy = orderBy;
      // this.orderBy = this.orderBoolean === true ? 'asc' : 'desc';
    }
    this.order = value;
  }

  goToEmployeeEdit(id) {
    this.encryptdecryptlocalstorage.setToLocalStorage("editEmpId", id);
    this.router.navigate(['/admin/employee/edit']);
  }
  suspendEmployee(id) {
    this.getEmployeeById(this.deleteEmpId);
  }
  getEmployeeById(id) {
    let employeePayload = {
      "gemsEmployeeMasterId": id
    }
    this.genericservice.post(this.getEmployeeByIdURL, employeePayload, false).subscribe(res => {
      console.log(res.data);
      this.employeeMaster = res.data;
      this.saveEmployee(this.employeeMaster);
    });
  }
  saveEmployee(empObj) {
    empObj.isActive = false;
    this.genericservice.post(this.saveEmployeeURL, empObj, false).subscribe(response => {
      this.userMaster = response.data.gemsUserMaster;
      this.suspendOrActiveUser(this.userMaster);
    })
  }
  suspendOrActiveUser(userMaster) {
    this.genericservice.post(this.suspendOrActiveURL, userMaster, false).subscribe(response => {
      if (response.status.success == 'Success') {
        this.onCloseModal();
        this.dataSharingService.successMessage('Employee Suspended successfully.')
      }
      console.log(response.data);
    })
  }

  openDeleteModal(content,employee){
    const modalConfig: any = {
      backdrop: 'static',
      size: 'md'
    };
    this.modalRef = this.modalService.open(content, modalConfig);
    this.modalRef.result
      .then((result) => {
        this.getEmployeeList();
      }, (onDismiss) => {
      });

      this.deleteEmployeeName =employee.employeeFirstName;
      this.deleteEmpId = employee.gemsEmployeeMasterId;
  }

  public dismissModal() {
    this.deleteEmpId =''
    this.deleteEmployeeName = '';
    this.modalRef.dismiss('Delete Canceled');
  }

  public onCloseModal(){
    this.modalRef.close();
    this.deleteEmpId =''
    this.deleteEmployeeName = '';
  }

}
