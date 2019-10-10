import { Component, OnInit } from '@angular/core';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from 'src/app/services/urlConstant';
import { DataSharingService } from 'src/app/services/dataSharing.service';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';

@Component({
  selector: 'app-admin-generation-user-mapping',
  templateUrl: './admin-generation-user-mapping.component.html',
  styleUrls: ['./admin-generation-user-mapping.component.scss']
})
export class AdminGenerationUserMappingComponent implements OnInit {
  public getUserListURL = UrlConstant.getUserListApi;
  public getDepartmentsURL = UrlConstant.departmentlistApi;
  public saveTempEmployeesURL = UrlConstant.saveTempEmployeesApi;
  usersList: any;
  departmentsList: any;
  selectedDepartment: any;
  employeeList: any[];
  selectedEmployee: any;
  managersList: any;
  selectedManager: any;
  isAllUsers: boolean = false;
  orgData: any;
  isData: boolean = false;
  public preloader: boolean = false;
  orgId: any;

  constructor(public generiService: Genericservice, public dataSharingService: DataSharingService, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) { 
    
  }

  ngOnInit() {
    this.orgId = this.encryptdecryptlocalstorage.getLocalStorage('organisationId');
    this.employeeList = [];
    this.selectedDepartment = '';
    this.selectedManager = '';
    this.dataSharingService.getNextCompObs.subscribe(data => {
      debugger;
      console.log('called..........')
      if (data == 'true') {
          // console.log('called..........')
      this.getUserList();
      this.getDepartments();
      }
  })
    // this.getUserList();
    this.getDepartments();
  }

  getUserList() {
    this.preloader = true;
    this.usersList = [];

    let reqPayload = {
      "gemsOrganisation": {
        "gemsOrgId": parseInt(this.orgId)
      }
    }
    this.generiService.postWithOutHeaders(this.getUserListURL, reqPayload, false).subscribe(res => {
      this.preloader = false;
      this.usersList = res.data;
      for (var i = 0; i < this.usersList.length; i++) {
        for (var j = 0; j < this.usersList.length; j++) {
          if (this.usersList[i].gemsReportingManagerId === this.usersList[j].gemsEmployeeMasterId) {
            this.usersList[i].reportingManager = this.usersList[j];
          }
        }
      }
      console.log(this.usersList);
      this.orgData = res.data[0].gemsOrganisation;
      this.managersList = res.data;
    }, error => {
      this.preloader = false;
      this.dataSharingService.failureMessage('Oops! Something went wrong.')
    })
  }
  getDepartments() {
    let reqPayload = {
      "gemsOrganisation": {
        "gemsOrgId": parseInt(this.orgId)
      }
    }
    this.generiService.postWithOutHeaders(this.getDepartmentsURL, reqPayload, false).subscribe(res => {
      this.departmentsList = res.data;
    })
  }

  selectAll(event) {
    if (event.target.checked) {
      for (var i = 0; i < this.usersList.length; i++) {
        $('#customCheck2' + i).prop("checked", true);
        this.employeeList.push(this.usersList[i]);
        this.isData = true;
      }
      this.isAllUsers = true;
    } else {
      for (var i = 0; i < this.usersList.length; i++) {
        $('#customCheck2' + i).prop("checked", false);
        this.employeeList = [];
        this.isData = false;
        this.isAllUsers = false;
      }
    }
  }
  selectDepartment(event) {
    console.log(event);
  }
  selectManager(event) {
    console.log(event);
  }
  selectSingle(event, user) {
    this.isAllUsers = false;
    if (event.target.checked) {
      this.isData = true;
      this.selectedEmployee = user;
      this.employeeList.push(user);
    } else {
      $('#customCheck1').prop("checked", false);
      this.employeeList.forEach(temp => {
        if (temp.employeeCode == user.employeeCode) {
          this.employeeList.splice(this.employeeList.indexOf(temp), 1);
        }
      })
      if (this.employeeList.length == 0) {
        this.isData = false;
      }
    }
  }
  addDepartment() {
    this.onSubmit('department');
  }
  addManager() {
    this.onSubmit('manager');
  }

  resetDetails() {
    this.employeeList = [];
    this.isData = false;
    this.selectedManager = '';
    this.selectedDepartment = '';
    this.getUserList();
  }
  tabNext(event) {
    $('#nav-policy').addClass('active show');
    $('#nav-mapping').removeClass('active show');
    $('#nav-policy-tab').addClass('active show');
    $('#nav-mapping-tab').removeClass('active show');
  }
  tabPrev() {
    $('#nav-import').addClass('active show');
    $('#nav-mapping').removeClass('active show');
    $('#nav-import-tab').addClass('active show');
    $('#nav-mapping-tab').removeClass('active show');
  }

  onSubmit(event) {
    debugger;
    this.preloader = true;
    let UserMappingObj = [];
    let reqPayloadDept = null;
    let reqPayloadManager = null;
    if (event === 'department') {
      if (this.selectedDepartment == null || this.selectedDepartment == '' || this.selectedDepartment == undefined) {
        return null;
      } else {
        reqPayloadDept = {
          // "gemsDepartment": (this.selectedDepartment == null || this.selectedDepartment == '' || this.selectedDepartment == undefined) ? null : {
          "departmentName": this.selectedDepartment.departmentName,
          "gemsDepartmentId": this.selectedDepartment.gemsDepartmentId,
          "gemsOrganisation": this.orgData,
          "isActive": true,
          "createdBy": 1,
          "createdOn": new Date(),
          "updatedBy": 1,
          "updatedOn": new Date()
          // }
        }
      }
    }
    if (event === 'manager') {
      if (this.selectedManager == null || this.selectedManager == '' || this.selectedManager == undefined) {
        return null;
      } else {
        reqPayloadManager = {
          "gemsEmployeeMasterId": this.selectedManager.gemsEmployeeMasterId,
          "employeeCode": this.selectedManager.employeeCode,
          //"employeeName": empEMail,
          "firstName": this.selectedManager.employeeFirstName,
          "lastName": this.selectedManager.employeeLastName,
          "employeeEmailid": this.selectedManager.employeeEmailid,
          // "reportingManager": reportingManager,
          "gemsDepartment": (this.selectedManager.gemsDepartment == null || this.selectedManager.gemsDepartment == '' || this.selectedManager.gemsDepartment == undefined) ? null : {
            "departmentName": this.selectedManager.gemsDepartment.departmentName,
            "gemsDepartmentId": this.selectedManager.gemsDepartment.gemsDepartmentId,
            "gemsOrganisation": this.orgData,
            "isActive": true,
            "createdBy": 1,
            "createdOn": new Date(),
            "updatedBy": 1,
            "updatedOn": new Date()
          },
          "gemsOrganisation": this.orgData
        }
      }

    }
    for (var i = 0; i < this.employeeList.length; i++) {
      UserMappingObj.push({
        "gemsOrganisation": this.orgData,
        "gemsEmployeeMasterId": this.employeeList[i].gemsEmployeeMasterId,
        "employeeCode": this.employeeList[i].employeeCode,
        //"employeeName":this.employeesList[Y].employeeName,
        "employeeFirstName": this.employeeList[i].employeeFirstName,
        "employeeLastName": this.employeeList[i].employeeLastName,
        "reportingManager": (event === 'manager') ? reqPayloadManager : (this.employeeList[i].reportingManager == null) ? null : {
          "gemsEmployeeMasterId": this.employeeList[i].reportingManager.gemsEmployeeMasterId,
          "employeeCode": this.employeeList[i].reportingManager.employeeCode,
          //"employeeName": empEMail,
          "firstName": this.employeeList[i].reportingManager.employeeFirstName,
          "lastName": this.employeeList[i].reportingManager.employeeLastName,
          "employeeEmailid": this.employeeList[i].reportingManager.employeeEmailid,
          // "reportingManager": reportingManager,
          "gemsDepartment": (this.employeeList[i].reportingManager.gemsDepartment == null || this.employeeList[i].reportingManager.gemsDepartment == '' || this.employeeList[i].reportingManagergemsDepartment == undefined) ? null : {
            "departmentName": this.employeeList[i].reportingManager.gemsDepartment.departmentName,
            "gemsDepartmentId": this.employeeList[i].reportingManager.gemsDepartment.gemsDepartmentId,
            "gemsOrganisation": this.orgData,
            "isActive": this.employeeList[i].reportingManager.isActive,
            "createdBy": this.employeeList[i].reportingManager.createdBy,
            "createdOn": this.employeeList[i].reportingManager,
            "updatedBy": this.employeeList[i].reportingManager,
            "updatedOn": this.employeeList[i].reportingManager
          },
          "gemsOrganisation": this.orgData

        },
        "employeeEmailid": this.employeeList[i].employeeEmailid,
        "gemsDepartment": (event === 'department') ? reqPayloadDept : (this.employeeList[i].gemsDepartment == null) ? null : {
          "departmentName": this.employeeList[i].gemsDepartment.departmentName,
          "gemsDepartmentId": this.employeeList[i].gemsDepartment.gemsDepartmentId,
          "gemsOrganisation": this.orgData,
          "isActive": this.employeeList[i].gemsDepartment.isActive,
          "createdBy": this.employeeList[i].gemsDepartment.createdBy,
          "createdOn": this.employeeList[i].gemsDepartment.createdOn,
          "updatedBy": this.employeeList[i].gemsDepartment.updatedBy,
          "updatedOn": this.employeeList[i].gemsDepartment.updatedOn
        },

      });

    }
    debugger;
    this.generiService.postWithOutHeaders(this.saveTempEmployeesURL, UserMappingObj, false).subscribe(res => {
      this.preloader = false;
      if (res.status.success === 'Success') {
        this.dataSharingService.successMessage('Employee List has been updated.')
      }
      for (var i = 0; i < this.usersList.length; i++) {
        $('#customCheck2' + i).prop("checked", false);
      }
      $('#customCheck1').prop("checked", false);
      this.resetDetails();
    }, error => {
      this.preloader = false;
      this.dataSharingService.failureMessage('Oops! Something went wrong.')
    })
  }
}
