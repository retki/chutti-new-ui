import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UrlConstant } from '../../../../services/urlConstant';
import { Genericservice } from '../../../../services/genericservices';
import { EncryptDecryptService } from '../../../../services/encrypt-decrypt.service';
import { EncryptDecryptLocalStorageService } from '../../../../services/encrypt-decrypt-localstorage.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { commonService } from '../../../../services/commonMethodService';

@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.scss']
})
export class DesignationsComponent implements OnInit {
  public adddesignationform: FormGroup;
  public getdesignationlistUrl = UrlConstant.getdesignationlistApi;
  public deparmentlistUrl = UrlConstant.departmentlistApi;
  public savedesignationUrl = UrlConstant.savedesignationApi;
  public deletedesignationByIdurl = UrlConstant.deletedesignationByIdApi;
  public roleList: any = [];
  totalCount: any;
  currentPage = 1;
  totalPages = 1;
  public PaginationObject;
  public start: number;
  public limit = 10;
  public paginationShowLimit: Boolean = false;
  public perpageOption = [
    //{ value: '3', label: '3' },
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];
  selectedItemsPerPage = 10;
  public status = "";
  public pagination: boolean = false;
  public isData: boolean = false;
  getdepartmentlist: any = [];
  designationId: any;
  filterkey;
  deleteDesiganationObj: any;
  departments: any = [];
  departmentlist: any = [];
  deleteDesignationName = '';
  constructor(private router: Router, private urlconstant: UrlConstant, private genericservice: Genericservice, private commonservice: commonService,
    private encryptdecryptservice: EncryptDecryptService,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private loadingBar: LoadingBarService) { }

  ngOnInit() {
    this.validateForm();
    this.subscribeForm();
    this.getrolelist();
    this.inputActive();
    this.getdepartment();
    // this.getdesignationById();
  }
  subscribeForm() {
    this.adddesignationform.valueChanges.subscribe(value => {
    })
  }
  //validation
  validateForm() {
    this.adddesignationform = new FormGroup({
      gemsDesignationDescription: new FormControl('', [Validators.required]),
      designationCode: new FormControl('', [Validators.required]),
      designationname: new FormControl('', [Validators.required]),
      gemsDepartmentId: new FormControl('', [Validators.required]),
      designationId: new FormControl('')
    });
  }
  getrolelist() {
    let payloadReqObj = {
      "gemsOrganisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
    }
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.getdesignationlistUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
      if (response.status.success === 'Success') {
        this.isData = true;
        this.roleList = response.data.data;
        this.totalCount = response.data.totalResults;
        this.findItemsPerPage();
      }
      else {
        this.isData = false;
      }
    }, error => {
      // console.log(error)
    })
  }

  getdepartment() {
    let payloadObj = {
      "gemsOrganisation": { "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId') }
    }
    return this.genericservice.post(this.deparmentlistUrl, payloadObj, false).subscribe(response => {
      this.getdepartmentlist = response.data;
      console.log(this.getdepartmentlist)
    });
  }
  onChange(event) {
    this.departments = event;

  }

  findItemsPerPage() {
    this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);
  }
  goToPageNo(event) {
    // console.log('on page change')
  }
  goToNext(event) {
    this.currentPage++;
    let payloadReqObj = {

      "gemsOrganisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),

    }
    this.start = this.start + this.limit;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.getdesignationlistUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
      if (response.status.success === 'Success') {
        this.isData = true;
        this.roleList = response.data;
        this.totalCount = response.data.totalResults;
        this.findItemsPerPage();
      }
      else {
        this.isData = false;
      }
    }
    )
  }
  goToPrev() {
    this.currentPage--;
    let payloadReqObj = {
      "gemsOrganisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
    }
    this.start = this.start - this.limit;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.getdesignationlistUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {

      if (response.status.success === 'Success') {
        this.isData = true;
        this.roleList = response.data;
        this.totalCount = response.data.totalResults;
        this.findItemsPerPage();
      }
      else {
        this.isData = false;
      }
    }
    )
  }
  changeItemPerPage(event) {
    this.currentPage = 1;
    this.selectedItemsPerPage = parseInt(event);
    this.refreshList();

  }
  refreshList() {

    let payloadReqObj = {
      "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
    }
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.getdesignationlistUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
      if (response.status.success === 'Success') {
        this.isData = true;
        this.roleList = response.data;
        this.totalCount = response.data.totalResults;
        this.findItemsPerPage();
      }
      else {
        this.isData = false;
      }
    }
    )
  }
  //update departments
  upadteobj(designationObject) {
    let payload = {
      "gemsDesignationId": designationObject.gemsDesignationId,
    }
    return this.genericservice.post(this.deletedesignationByIdurl, payload, false).subscribe(response => {
      this.departmentlist = response.data;

      this.adddesignationform.controls.designationId.setValue(this.departmentlist.gemsDesignationId);
      this.adddesignationform.controls.gemsDepartmentId.setValue(this.departmentlist.gemsDepartment.gemsDepartmentId);
      this.adddesignationform.controls.designationCode.setValue(this.departmentlist.gemsDesignationCode);
      this.adddesignationform.controls.designationname.setValue(this.departmentlist.gemsDesignationName);
      this.adddesignationform.controls.gemsDesignationDescription.setValue(this.departmentlist.gemsDesignationDescription);
    });
  }

  getSelecteDepartment(gemsDepartmentId) {
    for (let obj of this.getdepartmentlist) {
      if (obj.gemsDepartmentId == gemsDepartmentId) {
        return obj;
      }
    }
  }
  //save designations 
  saveDesignation() {
    if (this.adddesignationform.valid) {
      let payloadReqObj = {
        "gemsDesignationId": '',
        "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
        "createdOn": new Date(),
        "gemsDepartment": this.getSelecteDepartment(this.adddesignationform.value.gemsDepartmentId),
        "gemsDesignationCode": this.adddesignationform.value.designationCode,
        "gemsDesignationDescription": this.adddesignationform.value.gemsDesignationDescription,
        "gemsDesignationName": this.adddesignationform.value.designationname,
        "gemsOrganisation": { "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId') },
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
        "isActive": true,
        "updatedBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
        "updatedOn": new Date()
      }
      if (this.adddesignationform.value.designationId !== '') {
        payloadReqObj.gemsDesignationId = this.adddesignationform.value.designationId;
      }
      this.genericservice.post(this.savedesignationUrl, payloadReqObj, true).subscribe(response => {
        if (response !== null) {
          this.adddesignationform.reset()
          this.getrolelist();
        }
      });
    }
  }

  deletedesignationObj(object) {
    console.log(object);
    this.deleteDesignationName=object.gemsDesignationName;
    this.deleteDesiganationObj = object;
    this.getdesignationById(object.gemsDesignationId);
  }
  deletedesiganation() {
    this.departmentlist.isActive = false;
    this.departmentlist.updatedBy =this.encryptdecryptlocalstorage.getLocalStorage('employeeId');
    this.departmentlist.gemsOrgId = this.encryptdecryptlocalstorage.getLocalStorage('organizationId');
    return this.genericservice.post(UrlConstant.savedesignationApi, this.departmentlist, true).subscribe(response => {
      this.getrolelist();
    });
  }

  resetFrom() {
    this.adddesignationform.reset()
    this.inputActive();
  }

  getdesignationById(id) {

    let payload = {
      "gemsDesignationId": id,
    }
    return this.genericservice.post(this.deletedesignationByIdurl, payload, false).subscribe(response => {
      this.departmentlist = response.data;
    });
  }

  inputActive() {
    $(function () {
      const inputValueCheck = $(this).val();
      if (inputValueCheck === '') {
        $('.form-group').removeClass('focused');
      }
      else (inputValueCheck === 1)
      {
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

}
