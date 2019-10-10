import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Genericservice } from 'src/app/services/genericservices';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { UrlConstant } from 'src/app/services/urlConstant';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { DataSharingService } from 'src/app/services/dataSharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  public generalForm: FormGroup;
  isSameAddress: boolean = true;
  // model: NgbDateStruct;
  date: { year: number, month: number };
  departmentListURL = UrlConstant.departmentlistApi;
  designationListURL = UrlConstant.designationlistApi;
  getEmployeeListURL = UrlConstant.getEmployeeListApi;
  saveEmployeeURL = UrlConstant.saveEmployeeApi;
  roleListURL = UrlConstant.rolelistApi;
  shiftListURL = UrlConstant.shiftlistApi;
  employeeStatusListURL = UrlConstant.employeeStatusListApi;
  getEmployeeByIdURL = UrlConstant.getEmployeeByIdApi;
  getEmployeeContactByIdURL = UrlConstant.getEmployeeContactByIdApi;
  saveContactURL = UrlConstant.saveContactApi;
  departmentList: any = [];
  designations: any = [];
  public companyInfoForm: FormGroup;
  selectedDepartment: any = [];
  designationsList: any[] = [];
  roleList: any = [];
  shifts: any = [];
  employees: any = [];
  profileImgData: any;
  currentFileUpload: File;
  reportingManager: any;
  employeeStatusList: any = [];
  orgId: any;
  dobDate = 'DATE';
  dojDate = 'DATE';
  userId: any;
  editEmployeeMasterId: any;
  employeeMaster: any;
  employeeContactMaster: any;
  employeeList: any = [];
  Date = new Date();
  maxDate: any;
  minDate: any;
  submitted: boolean = false;
  submittedBtn2: boolean = false;
  userSettings = {
    'showCurrentLocation': false,
    'inputPlaceholderText': 'Search Your Address',
    'showSearchButton': false
  }
  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$';

  constructor(private calendar: NgbCalendar,
    private domSanitizer: DomSanitizer,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private genericservice: Genericservice,
    private loadingBar: LoadingBarService, private router: Router,
    private dataSharingService: DataSharingService) {
    this.maxDate = { year: this.Date.getFullYear(), "month": this.Date.getMonth() + 1, "day": this.Date.getDate() };
    this.minDate = { year: this.Date.getFullYear()-60, "month": this.Date.getMonth() + 1, "day": this.Date.getDate() };    

    this.editEmployeeMasterId = this.encryptdecryptlocalstorage.getLocalStorage('editEmpId');
    this.orgId = this.encryptdecryptlocalstorage.getLocalStorage('organizationId');
    this.getDesignations();
  }

  ngOnInit() {
    this.createForms();
    this.subcribeForm();
    this.getDepartments();
    // this.getDesignations();
    this.getRoles();
    this.getShifts();
    this.getEmployees();
    this.getEmployeeStatus();
    this.inputActive();
    this.removeclass();
  }

  subcribeForm() {
    this.generalForm.valueChanges.subscribe(value => {
      // console.log(value);

    })
    this.companyInfoForm.valueChanges.subscribe(value => {
      // console.log(value);
    })
  }

  getEmployeeById() {
    let employeePayload = {
      "gemsEmployeeMasterId": this.editEmployeeMasterId
    }
    this.genericservice.post(this.getEmployeeByIdURL, employeePayload, false).subscribe(res => {
      console.log(res.data);
      this.employeeMaster = res.data;
      this.generalForm.controls['firstName'].setValue(this.employeeMaster.employeeFirstName);
      this.generalForm.controls['lastName'].setValue(this.employeeMaster.employeeLastName);
      this.generalForm.controls['dob'].setValue(this.employeeMaster.employeeDob);
      this.generalForm.controls['personalEmailId'].setValue(this.employeeMaster.personalEmailId);
      this.generalForm.controls['emergencyContactNo'].setValue(this.employeeMaster.emergencyContactNumber);
      this.generalForm.controls['bloodGroup'].setValue(this.employeeMaster.bloodGroup);
      this.generalForm.controls['contactNo'].setValue(this.employeeMaster.personalContactNumber);
      this.generalForm.controls['employeeGender'].setValue(this.employeeMaster.employeeGender);
      if (this.employeeMaster.employeeGender) {
        if (this.employeeMaster.employeeGender.toLowerCase() == 'm') {
          document.getElementById('radio-2')['checked'] = 0;
          document.getElementById('radio-1')['checked'] = 1;

        }
        if (this.employeeMaster.employeeGender.toLowerCase() == 'f') {
          document.getElementById('radio-2')['checked'] = 1;
          document.getElementById('radio-1')['checked'] = 0;
        }
      }

      this.companyInfoForm.controls['attendanceId'].setValue(this.employeeMaster.attendanceId);
      this.companyInfoForm.controls['dateofJoining'].setValue(this.employeeMaster.dateOfJoining);
      this.companyInfoForm.controls['workLocation'].setValue(this.employeeMaster.employeeLocation);
      this.companyInfoForm.controls['department'].setValue(this.employeeMaster.gemsDepartment ? this.employeeMaster.gemsDepartment.gemsDepartmentId : '');
      this.companyInfoForm.controls['designation'].setValue(this.employeeMaster.gemsDesignation ? this.employeeMaster.gemsDesignation.gemsDesignationId : '');
      this.companyInfoForm.controls['role'].setValue(this.employeeMaster.gemsUserMaster.gemsRoleMaster ? this.employeeMaster.gemsUserMaster.gemsRoleMaster.gemsRoleMasterId : '');
      this.companyInfoForm.controls['gemsUserMaster'].setValue(this.employeeMaster.gemsUserMaster);
      this.companyInfoForm.controls['reportingManager'].setValue(this.employeeMaster.currentReportingTo ? this.employeeMaster.currentReportingTo.gemsEmployeeMasterId : '');
      this.companyInfoForm.controls['employeeShift'].setValue(this.employeeMaster.gemsEmployeeShiftDetail ? this.employeeMaster.gemsEmployeeShiftDetail.shiftDetailId : '');
      this.companyInfoForm.controls['companyMailId'].setValue(this.employeeMaster.officialEmailid);
      this.companyInfoForm.controls['employeeCode'].setValue(this.employeeMaster.employeeCode);
      this.companyInfoForm.controls['employeeStatus'].setValue(this.employeeMaster.currentEmployeeStatus ? this.employeeMaster.currentEmployeeStatus.gemsEmploymentStatusId : '');
      this.companyInfoForm.controls['gemsEmployeeMasterId'].setValue(this.employeeMaster.gemsEmployeeMasterId);
      this.companyInfoForm.controls['gemsOrganisation'].setValue(this.employeeMaster.gemsOrganisation);

      this.profileImgData = this.employeeMaster.gemsUserMaster.profileImgData ? 'data:image/jpg;base64,' +
        this.employeeMaster.gemsUserMaster.profileImgData :
        '../../../../assets/images/admin/upload-to-cloud.svg';
      $('#upload_img').attr('src', this.profileImgData);
      this.genericservice.post(this.getEmployeeContactByIdURL, this.employeeMaster, false).subscribe(response => {
        this.employeeContactMaster = response.data;
        this.generalForm.controls['curDoorNo'].setValue(this.employeeContactMaster ? this.employeeContactMaster.correspondenseAddressStreet1 : '');
        this.generalForm.controls['curStreet'].setValue(this.employeeContactMaster ? this.employeeContactMaster.correspondenseAddressStreet2 : '');
        this.generalForm.controls['curCity'].setValue(this.employeeContactMaster ? this.employeeContactMaster.correspondenseAddressCity : '');
        this.generalForm.controls['curCountry'].setValue(this.employeeContactMaster ? this.employeeContactMaster.correspondenseAddressCountry : '');
        this.generalForm.controls['curState'].setValue(this.employeeContactMaster ? this.employeeContactMaster.correspondenseAddressState : '');
        this.generalForm.controls['curPincode'].setValue(this.employeeContactMaster ? this.employeeContactMaster.correspondenseAddressZipCode : '');
        this.generalForm.controls['perDoorNo'].setValue(this.employeeContactMaster ? this.employeeContactMaster.permanentAddressStreet1 : '');
        this.generalForm.controls['perStreet'].setValue(this.employeeContactMaster ? this.employeeContactMaster.permanentAddressStreet2 : '');
        this.generalForm.controls['perCity'].setValue(this.employeeContactMaster ? this.employeeContactMaster.permanentAddressCity : '');
        this.generalForm.controls['perCountry'].setValue(this.employeeContactMaster ? this.employeeContactMaster.permanentAddressCountry : '');
        this.generalForm.controls['perState'].setValue(this.employeeContactMaster ? this.employeeContactMaster.permanentAddressState : '');
        this.generalForm.controls['perPincode'].setValue(this.employeeContactMaster ? this.employeeContactMaster.permanentAddressZipCode : '');
        this.generalForm.controls['gemsEmployeeMasterId'].setValue(this.employeeContactMaster ? this.employeeContactMaster.gemsEmployeeMasterId : '');
        console.log(this.generalForm.controls);

      })


    })
  }
  removeclass() {
    $(function () {
      $(".select__date").on("click", function (e) {
        $('.main').addClass("wide");
        $('.daterangepicker').addClass("active");
        e.stopPropagation()
      });
      $(document).on("click", function (e) {
        if ($(e.target).is(".daterangepicker") === false) {
          $(".main").removeClass("wide");
          $(".daterangepicker").removeClass("active");
        }
      });
    });
  }
  createForms() {
    this.generalForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      personalEmailId: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
      emergencyContactNo: new FormControl('', [Validators.required, , Validators.minLength(10)]),
      bloodGroup: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
      employeeGender: new FormControl('', [Validators.required]),
      curDoorNo: new FormControl('', [Validators.required]),
      curStreet: new FormControl('', [Validators.required]),
      curCity: new FormControl('', [Validators.required]),
      curCountry: new FormControl('', [Validators.required]),
      curState: new FormControl('', [Validators.required]),
      curPincode: new FormControl('', [Validators.required, , Validators.minLength(6)]),
      perDoorNo: new FormControl(''),
      perStreet: new FormControl(''),
      perCity: new FormControl(''),
      perCountry: new FormControl(''),
      perState: new FormControl(''),
      perPincode: new FormControl(''),
      gemsEmployeeMasterId: new FormControl(''),


    });
    this.companyInfoForm = new FormGroup({
      attendanceId: new FormControl('', [Validators.required]),
      dateofJoining: new FormControl('', [Validators.required]),
      workLocation: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      reportingManager: new FormControl('', [Validators.required]),
      employeeShift: new FormControl('', [Validators.required]),
      companyMailId: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
      employeeCode: new FormControl('', [Validators.required]),
      employeeStatus: new FormControl('', [Validators.required]),
      gemsEmployeeMasterId: new FormControl(''),
      gemsUserMaster: new FormControl(''),
      gemsOrganisation: new FormControl('')

    })
  }
  checkSameAddress(event) {
    this.isSameAddress = event.target.checked === true ? true : false;
  }

  getDepartments() {
    let requestPayload = {
      "gemsOrganisation": {
        "gemsOrgId": this.orgId
      }
    }
    this.genericservice.post(this.departmentListURL, requestPayload, false).subscribe(response => {
      this.departmentList = response.data;
    });

  }
  getDesignations() {
    let requestPayload = {
      "gemsOrganisation": {
        "gemsOrgId": this.orgId
      }
    }
    this.genericservice.post(this.designationListURL, requestPayload, false).subscribe(response => {
      this.designationsList = response.data;
      this.getEmployeeById();
    }, error => {
      this.getEmployeeById();
    })
  }
  getDesignationByDepartment(department) {
    this.designations = [];
    for (let obj of this.designationsList) {
      if (obj.gemsDepartment.gemsDepartmentId == department) {
        this.designations.push(obj);
      }
    }
    console.log(this.designations);

  }

  getRoles() {
    let requestPayload = {
      "gemsOrganisation": {
        "gemsOrgId": this.orgId
      }
    }
    this.genericservice.post(this.roleListURL, requestPayload, false).subscribe(response => {
      this.roleList = response.data;
    })

  }
  getShifts() {
    let requestPayload = {
      "gemsOrganisation": {
        "gemsOrgId": this.orgId
      }
    }
    this.genericservice.post(this.shiftListURL, requestPayload, false).subscribe(response => {
      this.shifts = response.data;
    })
  }
  getEmployees() {
    let requestPayload = {
      "gemsOrganisationId": this.orgId,
      "isActive": true
    }
    this.genericservice.post(this.getEmployeeListURL, requestPayload, false).subscribe(response => {
      this.employeeList = response.data;
    })
  }
  getEmployeeStatus() {
    let requestPayload = { "gemsOrganisation": { "gemsOrgId": this.orgId } };

    this.genericservice.post(this.employeeStatusListURL, requestPayload, false).subscribe(response => {
      this.employeeStatusList = response.data;
    })

  }

  getSelectedDepartment(event) {
    for (let design of this.departmentList) {
      if (design.gemsDepartmentId == event) {
        return design;
      }
    }
  }


  getSelectedDesignation(event) {
    for (let design of this.designationsList) {
      if (design.gemsDesignationId == event) {
        return design;
      }
    }
  }

  getSelectedRole(event) {
    for (let role of this.roleList) {
      if (role.gemsRoleMasterId == event) {
        return role;
      }
    }
  }



  getSelectedReportingManger(event) {
    for (let emp of this.employeeList) {
      if (emp.gemsEmployeeMasterId == event) {
        return emp;
      }
    }
  }


  getSelecteEmployeeShift(event) {
    for (let empshift of this.shifts) {
      if (empshift.shiftDetailId == event) {
        return empshift;
      }
    }
  }

  getSelectedEmployeeStatus(event) {
    for (let empstatus of this.employeeStatusList) {
      if (empstatus.gemsEmploymentStatusId == event) {
        return empstatus;
      }
    }
  }


  submitGeneralForm() {
    this.submittedBtn2 = true;
    if (this.companyInfoForm.valid) {
      let requestPayload = {
        "attendanceId": this.companyInfoForm.value.attendanceId,
        "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
        'createdOn': new Date(),
        "currentEmployeeStatus": this.getSelectedEmployeeStatus(this.companyInfoForm.value.employeeStatus),
        "currentReportingTo": this.getSelectedReportingManger(this.companyInfoForm.value.reportingManager),
        "dateOfJoining": new Date(this.companyInfoForm.value.dateofJoining),
        "emergencyContactNumber": this.generalForm.value.emergencyContactNo,
        "employeeCode": this.companyInfoForm.value.employeeCode,
        "employeeDob": new Date(this.generalForm.value.dob),
        "employeeFirstName": this.generalForm.value.firstName,
        "employeeGender": this.generalForm.value.employeeGender,
        "employeeLastName": this.generalForm.value.lastName,
        "employeeLocation": this.companyInfoForm.value.workLocation,
        "employeeMiddleName": null,
        "gemsDepartment": this.getSelectedDepartment(this.companyInfoForm.value.department),
        "gemsDesignation": this.getSelectedDesignation(this.companyInfoForm.value.designation),
        "gemsEmployeeContactDetail": null,
        "bloodGroup": this.generalForm.value.bloodGroup,
        "gemsEmployeeMasterId": this.companyInfoForm.value.gemsEmployeeMasterId,
        "gemsEmployeeShiftDetail": this.getSelecteEmployeeShift(this.companyInfoForm.value.employeeShift),
        "gemsOrganisation": this.companyInfoForm.value.gemsOrganisation,
        'gemsUserMaster': {
          "gemsUserMasterId": this.companyInfoForm.value.gemsUserMaster.gemsUserMasterId,
          "gemsRoleMaster": this.getSelectedRole(this.companyInfoForm.value.role),
        },
        'isActive': true,
        'isRequiredLogin': true,
        "leaveAllocationStatus": null,
        "leaveApproveNotification": true,
        'leaveStatusNotification': true,
        "maritalStatus": null,
        "officeContactNumber": this.generalForm.value.contactNo,
        "officialEmailid": this.companyInfoForm.value.companyMailId,
        "panCardNumber": null,
        "personalContactNumber": this.generalForm.value.contactNo,
        "personalEmailId": this.generalForm.value.personalEmailId,
        "pfAccountNumber": null,
        "requiredLogin": 0,
        "roleMasterId": null,
        "selectedUser": "",
        'ssnNumber': null,
        'updatedBy': this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
        "updatedOn": new Date(),
      }
      this.genericservice.post(this.saveEmployeeURL, requestPayload, false).subscribe(response => {
        this.employees = response.data;
        this.userId = response.data.gemsUserMaster.gemsUserMasterId;
        if (this.userId) {
          this.saveContact();
        }
        this.profile();
      })
    }
    else if (this.companyInfoForm.invalid) {

      return;
    }
  }
  saveContact() {
    var reqPayload;
    if (this.isSameAddress) {
      reqPayload = {
        "correspondenseAddressCity": this.generalForm.value.curCity,
        "correspondenseAddressCountry": this.generalForm.value.curCountry,
        "correspondenseAddressState": this.generalForm.value.curState,
        "correspondenseAddressStreet1": this.generalForm.value.curDoorNo,
        "correspondenseAddressStreet2": this.generalForm.value.curStreet,
        "correspondenseAddressZipCode": this.generalForm.value.curPincode,
        "gemsEmployeeMaster": this.employees,
        "gemsEmployeeMasterId": this.generalForm.value.gemsEmployeeMasterId,
        "isActive": true,
        "permanentAddressCity": this.generalForm.value.curCity,
        "permanentAddressCountry": this.generalForm.value.curCountry,
        "permanentAddressState": this.generalForm.value.curState,
        "permanentAddressStreet1": this.generalForm.value.curDoorNo,
        "permanentAddressStreet2": this.generalForm.value.curStreet,
        "permanentAddressZipCode": this.generalForm.value.curPincode,
      }
    }
    if (!this.isSameAddress) {
      reqPayload = {
        "correspondenseAddressCity": this.generalForm.value.curCity,
        "correspondenseAddressCountry": this.generalForm.value.curCountry,
        "correspondenseAddressState": this.generalForm.value.curState,
        "correspondenseAddressStreet1": this.generalForm.value.curDoorNo,
        "correspondenseAddressStreet2": this.generalForm.value.curStreet,
        "correspondenseAddressZipCode": this.generalForm.value.curPincode,
        "gemsEmployeeMaster": this.employees,
        "gemsEmployeeMasterId": this.generalForm.value.gemsEmployeeMasterId,
        "isActive": true,
        "permanentAddressCity": this.generalForm.value.perCity,
        "permanentAddressCountry": this.generalForm.value.perCountry,
        "permanentAddressState": this.generalForm.value.perState,
        "permanentAddressStreet1": this.generalForm.value.perDoorNo,
        "permanentAddressStreet2": this.generalForm.value.perStreet,
        "permanentAddressZipCode": this.generalForm.value.perPincode,
      }
    }
    this.genericservice.post(this.saveContactURL, reqPayload, false).subscribe(res => {
      if (res.status.success) {
        this.dataSharingService.successMessage(res.status.message);
        this.router.navigate(['/admin/employee']);
      }
    })
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].size <= 300000) {
        var fileReader: FileReader = new FileReader();
        this.currentFileUpload = event.target.files[0];
        fileReader.readAsDataURL(event.target.files[0]); // read file as data url
        fileReader.onload = (event: any) => { // called once readAsDataURL is completed
          this.profileImgData = fileReader.result;
          $('#upload_img').attr('src', this.profileImgData)
        }
      }
      else {
        this.dataSharingService.failureMessage('Picture size should not excceed 300KB..');
      }
    }

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

  goToNextTab() {
    this.submitted = true;
    if (this.generalForm.valid) {
      $('#nav-general-tab').removeClass('active');
      $('#nav-general').removeClass('active');
      $('#nav-general').removeClass('show');
      $('#nav-general').removeClass('h-100');
      $('#nav-company-info-tab').addClass('active');
      $('#nav-companyinfo').addClass('active');
      $('#nav-companyinfo').addClass('show');
      $('#nav-companyinfo').addClass('h-100');
    }
    else if (this.generalForm.invalid) {
      return;
    }
  }
  onDateOfBirthDate(e) {
    var date = e.year + '-' + e.month + '-' + e.day
    this.dobDate = this.formatDate(date);
    this.generalForm.controls['dob'].setValue(this.dobDate);
  }

  onDateOfJoiningDate(e) {
    var date = e.year + '-' + e.month + '-' + e.day
    this.dojDate = this.formatDate(date);
    this.companyInfoForm.controls['dateofJoining'].setValue(this.dojDate);
  }

  formatDate(paramdate) {
    var date = new Date(paramdate);
    var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY',
      'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var day = date.getDate();
    var year = date.getFullYear();
    var month = months[date.getMonth()];
    return day + " " + month + " " + year;
  }

  resetDateOfBirth() {
    this.generalForm.controls['dob'].setValue('');
    this.dobDate='';
  }
  resetDateOfJoining() {
    this.companyInfoForm.controls['dateofJoining'].setValue('');
    this.dojDate='';
  }
  profile() {
    this.currentFileUpload = this.currentFileUpload ? this.currentFileUpload : null;
    if (this.currentFileUpload != null) {
      return this.genericservice.imageUpload(this.currentFileUpload, UrlConstant.myprofilepicchange + '/' + this.userId).subscribe(data => {
        // console.log(data);
      }, error => {
        // console.log(error);
      })
    }
  }
  onKeyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  autoCompleteCallback1(EventObject) {
    if (EventObject.data !== undefined) {
      const doc = new DOMParser().parseFromString(EventObject.data.adr_address, 'text/html');
      const taglength = doc.activeElement.querySelectorAll('span').length;
      this.generalForm.controls.curStreet.setValue('');
      this.generalForm.controls.curCity.setValue('');
      this.generalForm.controls.curState.setValue('');
      this.generalForm.controls.curCountry.setValue('');
      this.generalForm.controls.curPincode.setValue('');
      for (let K = 0; K < taglength; K++) {
        const address_object_attribute = doc.activeElement.querySelectorAll('span')[K].getAttribute('class');
        const addressobject = doc.activeElement.querySelectorAll('span')[K].innerText;
        if (address_object_attribute === 'locality') {
          this.generalForm.controls.curCity.setValue(addressobject);
        }
        if (address_object_attribute === 'region') {
          this.generalForm.controls.curState.setValue(addressobject);
        }
        if (address_object_attribute === 'postal-code') {
          this.generalForm.controls.curPincode.setValue(addressobject);
        }
        if (address_object_attribute === 'country-name') {
          this.generalForm.controls.curCountry.setValue(addressobject);
        }
        // if (address_object_attribute === 'extended-address') {
        //   this.generalForm.controls.curStreet.setValue(addressobject);
        // }
        this.generalForm.controls.curStreet.setValue(EventObject.data.formatted_address.split(',')[0]);
        console.log(EventObject.data.formatted_address);
      }
    }
  }
}
