import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { UrlConstant } from 'src/app/services/urlConstant';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { Genericservice } from 'src/app/services/genericservices';
import { DataSharingService } from 'src/app/services/dataSharing.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-leavepolicy',
  templateUrl: './leavepolicy.component.html',
  styleUrls: ['./leavepolicy.component.scss'],
})
export class LeavepolicyComponent implements OnInit {

  leaveTypesURL = UrlConstant.getLeaveTypes;
  EmploymentstatusListURL = UrlConstant.getEmploymentStatusList;
  leaveSummariesURL = UrlConstant.getLeaveSummaries;
  saveOrgLeaveSummariesURL = UrlConstant.saveOrgLeaveSummaries;
  getLeaveSummeryByIdURL = UrlConstant.getLeaveSummerybyId;
  deleteLeaveSummeryURL = UrlConstant.deleteLeaveSummay;
  downloadSampleExcelFileURL = UrlConstant.downloadExcelFile;
  uploadLeavePolicyExcelFileURL = UrlConstant.uploadLeavePolicyExcelFile;


  public leavePolicyForm: FormGroup;
  public leaveTypeList = [];
  public leaveSummariesList: any;
  public employementsStatusList = [];
  public editLeavePolicyObject: any;
  public selectedSourecFile: File;
  public manipulation = 'ADD';
  public filterkey: string;
  public errorMessage = '';

  totalCount: any;
  start = 0;
  limit = 10;
  totalPages: number;
  currentPage = 1;
  selectedItemsPerPage = 10;
  paginateSummaryList: any;
  public pageOptions = [

    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];
  selectExcelFileName: any = '';
  order: any;
  orderBy: any;
  public orderBoolean = false;
  orgId: any;
  public leavePolicyName: any;
  public deletePayload: any;
  public modalRef: NgbModalRef;
  @ViewChild('myInput', { static: true })
  myInputVariable: ElementRef;
  constructor(private formbuilder: FormBuilder,
    private genericService: Genericservice,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private dataSharingService: DataSharingService,
    private modalService: NgbModal) {
      if(this.encryptdecryptlocalstorage.getLocalStorage('organizationId') == "" || this.encryptdecryptlocalstorage.getLocalStorage('organizationId') == undefined 
      || this.encryptdecryptlocalstorage.getLocalStorage('organizationId')== null) {
        this.orgId = parseInt(this.encryptdecryptlocalstorage.getLocalStorage('organisationId'));
      } else {
        this.orgId = parseInt(this.encryptdecryptlocalstorage.getLocalStorage('organizationId'));
      }
    this.createLeavePolicyForm();
    this.subscribeLeavePolicyForm();
  }

  ngOnInit() {
    this.inputActive();
    this.getLeaveSummariesList();
    this.getLeaveTypes();
    this.getEmployementsStatusList();

  }
   getLeaveTypes() {
    var payload = { "gemsOrganisation":
     { "gemsOrgId": this.orgId},
      "isActive":true
   };
    this.genericService.postWithOutHeaders(this.leaveTypesURL, payload, false).subscribe(response => {
      this.leaveTypeList = response.data;
    });
  }
  inputActive() {
    $(function () {
      const inputValueCheck = $(this).val();
      if (inputValueCheck === '') {
        $('.form-group').addClass('focused');
      }
    });

    $('.form-control').focus(function () {
      $(this)
        .parents('.form-group')
        .addClass('focused');
    });

    $('.form-control').blur(function () {
      const inputValue = $(this).val();
      if (inputValue === '') {
        $(this).removeClass('filled');
        $(this)
          .parents('.form-group')
          .removeClass('focused');
      } else {
        $(this).addClass('filled');
      }
    });
  }

  public resetForm() {
    this.selectExcelFileName = '';
    this.leavePolicyForm.reset();
    this.manipulation = 'ADD';
    this.myInputVariable.nativeElement.value = "";
    document.getElementById('dismiss_modal').click();
    this.inputActive();
  }

  setOrder(value: string, orderBy) {
    if (this.order === value) {
      // this.reverse = !this.reverse;
      this.orderBoolean = !this.orderBoolean;
      this.orderBy = orderBy;
    }
    this.order = value;
  }

  public getLeaveSummariesList() {
    var payload = { "gemsOrganisationId":  this.orgId  };
    this.genericService.postWithOutHeaders(this.leaveSummariesURL, payload, false).subscribe(response => {
      this.leaveSummariesList = response.data;
      this.totalCount = response.data.length;
      this.paginatedSummaryList();
      this.findItemsPerPage();
    });
  }

  // method to get Employements StatusList 

  public getEmployementsStatusList() {
    var payload = { "gemsOrganisation": { "gemsOrgId":  this.orgId  } };
    this.genericService.postWithOutHeaders(this.EmploymentstatusListURL, payload, false).subscribe(response => {
      this.employementsStatusList = response.data;
    });
  }


  goToNext() {
    this.currentPage++;
    this.start = this.start + this.selectedItemsPerPage;
    this.limit = this.limit + this.selectedItemsPerPage;
    this.paginateSummaryList = this.leaveSummariesList.slice(this.start, this.limit);
  }
  goToPrev() {
    this.currentPage--;
    this.start = this.start - this.selectedItemsPerPage;
    this.limit = this.limit - this.selectedItemsPerPage;
    this.paginateSummaryList = this.leaveSummariesList.slice(this.start, this.limit);
  }
  findItemsPerPage() {
    this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);
  }
  changeItemPerPage(event) {
    this.currentPage = 1;
    this.selectedItemsPerPage = parseInt(event);
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.paginatedSummaryList();
    this.findItemsPerPage();
  }
  goToPageNo(event) {
    console.log('on page change')
  }
  paginatedSummaryList() {
    this.paginateSummaryList = this.leaveSummariesList.slice(this.start, this.limit);
  }

  // method To subscribe the levepolicy form

  public subscribeLeavePolicyForm() {
    this.leavePolicyForm.valueChanges.subscribe(value => {
      // console.log(value);
    })
  }

  // method To get leave summary object 

  public getLeaveSummary(leaveSummayMasterId) {
    this.errorMessage = '';
    this.manipulation = 'UPDATE';
    var payload = { "leaveSummayMasterId": leaveSummayMasterId };

    this.genericService.postWithOutHeaders(this.getLeaveSummeryByIdURL, payload, false).subscribe(response => {
      var data = response.data;
      this.leavePolicyForm.patchValue({
        leaveSummayMasterId: data.leaveSummayMasterId,
        totalDays: data.totalDays,
        isActive: data.isActive,
        gemsEmployeeAccruvalType: data.gemsEmployeeAccruvalType,
        gemsEmploymentStatus: { gemsEmploymentStatusId: data.gemsEmploymentStatus.gemsEmploymentStatusId },
        gemsLeaveTypeMaster: { gemsLeaveTypeMasterId: data.gemsLeaveTypeMaster.gemsLeaveTypeMasterId },
        gemsOrganisation: { gemsOrgId: data.gemsOrganisation.gemsOrgId }
      })
    });
  }

  // create leave policy form structure
  public createLeavePolicyForm() {
    this.leavePolicyForm = this.formbuilder.group({
      leaveSummayMasterId: [''],
      totalDays: ['', [Validators.required, Validators.min(0), Validators.max(364)]],
      isActive: [true],
      gemsEmployeeAccruvalType: ['', Validators.required],
      gemsEmployeeIsAccruval: [true],
      gemsEmploymentStatus: this.formbuilder.group({
        gemsEmploymentStatusId: ['', Validators.required]
      }),
      gemsLeaveTypeMaster: this.formbuilder.group({
        gemsLeaveTypeMasterId: ['', Validators.required],
      }),
      gemsOrganisation: this.formbuilder.group({
        gemsOrgId: [ this.orgId ]
      }),
    })
  }

  // method to save the leave policy

  public submitPolicyForm() {
    this.errorMessage = '';
    if (this.manipulation == "ADD") {
      delete this.leavePolicyForm.value.leaveSummayMasterId;
      this.leavePolicyForm.patchValue({
        isActive: true,
        gemsEmployeeIsAccruval: true,
        gemsOrganisation: { gemsOrgId:  this.orgId  },

      })
      this.leavePolicyForm.value.createdOn = new Date();
      this.leavePolicyForm.value.createdBy = this.encryptdecryptlocalstorage.getLocalStorage('employeeId');
    }
    if (this.manipulation == "ADD") {
      this.leavePolicyForm.value.updatedOn = new Date();
      this.leavePolicyForm.value.updatedBy = this.encryptdecryptlocalstorage.getLocalStorage('employeeId');
    }
    if (this.leavePolicyForm.valid) {


      this.genericService.postWithOutHeaders(this.saveOrgLeaveSummariesURL, this.leavePolicyForm.value, true).subscribe(response => {
        // console.log(response.data);
        if (response.status.success == "Success") {
          document.getElementById('dismiss_modal').click();
          this.getLeaveSummariesList();
          this.errorMessage = '';
        } else if (response.status.success == 'Fail') {
          this.errorMessage = response.status.message;
        }
      }, (error) => {
        this.errorMessage = error.error.message;
      })
    }
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  // method To open deleteModal
  openDeleteModal(content, leavepolicy) {
    const modalConfig: any = {
      backdrop: 'static',
      size: 'md'
    };
    this.modalRef = this.modalService.open(content, modalConfig);
    this.modalRef.result
      .then((result) => {
        this.getLeaveSummariesList();
      }, (onDismiss) => {
      });

    this.leavePolicyName = leavepolicy.leaveTypeDescription;
    var payload = { "leaveSummayMasterId": leavepolicy.leaveSummayMasterId };

    this.genericService.postWithOutHeaders(this.getLeaveSummeryByIdURL, payload, false).subscribe(response => {
      this.deletePayload = response.data;
      console.log(this.deletePayload);
    });

  }

  // method To delete the Leave Summary 

  deleteLeaveSummary() {
    this.deletePayload.isActive = false;
    if (this.deletePayload.isActive == false) {
      this.genericService.postWithOutHeaders(this.deleteLeaveSummeryURL, this.deletePayload, true).subscribe(response => {
        if (response.status.success == 'Success') {
          this.closeModal();
        }
      });
    }

  }

  dismissModal() {
    this.modalRef.dismiss();
    this.inputActive();
  }
  closeModal() {
    this.modalRef.close();
  }
  // To Download The sample excel file 

  downloadSampleFile() {
    location.href = this.downloadSampleExcelFileURL;
  }

  selectExcelFile(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files[0]) {
      this.errorMessage = '';
      if (event.target.files[0].name.split('.')[1] == 'xlsx'
        || event.target.files[0].name.split('.')[1] == 'xls') {
        this.selectedSourecFile = event.target.files[0];
        this.selectExcelFileName = event.target.files[0].name;
        reader.readAsDataURL(event.target.files[0]); // read file as data url
      }
      else {
        this.errorMessage = 'Please upload file having extensions .xls/.xlsx';

      }

    }
  }

  uploadFile() {
    if (this.selectedSourecFile && this.errorMessage == '') {
      this.genericService.fileUpload(this.uploadLeavePolicyExcelFileURL, this.selectedSourecFile,
        this.orgId , true)
        .subscribe(response => {
          if (response.type == 4) {
            if (response['body'].status.success == 'Fail') {
              this.errorMessage = response['body'].status.message;
              this.myInputVariable.nativeElement.value = "";
            }
            else if (response['body'].status.success == 'Success') {
              this.selectExcelFileName = '';
              this.myInputVariable.nativeElement.value = "";
              this.getLeaveSummariesList();
              document.getElementById('upload_modal').click();
            }
          }
        }, error => {
          this.errorMessage = 'Something went wrong';
        })
    }
  }


  public get totalDays(): AbstractControl {
    return this.leavePolicyForm.get('totalDays');
  }
  public get isActive(): AbstractControl {
    return this.leavePolicyForm.get('isActive');
  }
  public get gemsLeaveTypeMasterId(): AbstractControl {
    return this.leavePolicyForm.get('gemsLeaveTypeMaster').get('gemsLeaveTypeMasterId');
  }

  public get gemsEmployeeIsAccruval(): AbstractControl {
    return this.leavePolicyForm.get('gemsEmployeeIsAccruval');
  }
  public get gemsEmploymentStatusId(): AbstractControl {
    return this.leavePolicyForm.get('gemsEmploymentStatus').get('gemsEmploymentStatusId');
  }
  public get gemsEmployeeAccruvalType(): AbstractControl {
    return this.leavePolicyForm.get('gemsEmployeeAccruvalType');
  }


}
