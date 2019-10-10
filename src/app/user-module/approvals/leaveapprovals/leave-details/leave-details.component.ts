import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from '../../../../services/urlConstant';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.scss']
})
export class LeaveDetailsComponent implements OnInit {

  employeeId;
  employeeLeaveMasterResponse: any;
  empleaveRequestToken: string;
  dataSource2: any[];
  data: any = [];
  data1: any = [];
  sub;
  id: number;
  empleaveRequestId: string;
  public leaveSummaryList: any = [];
  dataSource1: any[];
  public leaveSummaryWithODPERList: any = [];
  public leaverequestUrl = UrlConstant.leaverequestApi;
  public leaveSummariesUrl = UrlConstant.leaveSummariesApi;
  public applyLeaveUrl = UrlConstant.applyLeaveAPi
  EmployeeLeaveHistory: any;
  leaveDetailForm: FormGroup;
  profileImage: any;
  emailRejection: boolean =  false;
  remarks: any;
  reasonRequired: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private genericservice: Genericservice, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) { }

  ngOnInit() {
   
    this.emailRejection = false;
   this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.empleaveRequestToken = params['leavetoken'];
    });
    //debugger
    if (this.empleaveRequestToken === undefined || this.empleaveRequestToken === null || this.empleaveRequestToken === '') {
      this.empleaveRequestId = localStorage.getItem("LeaveId");
      localStorage.removeItem("LeaveId");
      if (this.empleaveRequestId == undefined && this.empleaveRequestId == null) {
        this.router.navigateByUrl('user/approvals/leaveapprovals');
      } else {
        this.getLeaveObjectById();
      }
    }
    else{
      let leaveObj = {
        "leaveToken": this.empleaveRequestToken,
      }
      this.genericservice.post(this.leaverequestUrl, leaveObj, false).subscribe(response => {
       
       if(response.data){
        this.employeeLeaveMasterResponse = response.data;
        this.emailRejection = true;
        this.profileImage = this.employeeLeaveMasterResponse.profileImage?
        'data:image/jpg;base64,'+this.employeeLeaveMasterResponse.profileImage:'';
        let employeeObj = {
          "gemsEmployeeMasterId": this.employeeLeaveMasterResponse.createdBy.gemsEmployeeMasterId
        }
        this.genericservice.post(this.leaveSummariesUrl, employeeObj, false).subscribe(leaveSummaryListData => {
          this.leaveSummaryWithODPERList = leaveSummaryListData.data;
          this.leaveSummaryWithODPERList.forEach(leaveSummary => {
            if (leaveSummary !== null && (leaveSummary.gemsLeaveTypeMaster.leaveTypeCode !== 'OD'
            && leaveSummary.gemsLeaveTypeMaster.leaveTypeCode !== 'PER')) {
              this.leaveSummaryList.push(leaveSummary);
            }
          });
        });
      }
      }), error => {
        this.router.navigateByUrl('user/approvals/leaveapprovals');
        
        //Redirecting to leave request page
  
      };
    }
    this.leaveDetailForm = new FormGroup({
      remarks: new FormControl('', [Validators.required])
    });
  }

  getLeaveObjectById() {
    this.emailRejection =  false;
    let empLeaveObj = {
      "gemsEmployeeLeaveMasterId": this.empleaveRequestId
    }
    this.genericservice.post(this.leaverequestUrl, empLeaveObj, false).subscribe(response => {
      
      this.employeeLeaveMasterResponse = response.data;
     //
      this.profileImage = this.employeeLeaveMasterResponse.profileImage?
      'data:image/jpg;base64,'+this.employeeLeaveMasterResponse.profileImage:'';
      let employeeObj = {
        "gemsEmployeeMasterId": this.employeeLeaveMasterResponse.createdBy.gemsEmployeeMasterId
      }
      this.genericservice.post(this.leaveSummariesUrl, employeeObj, false).subscribe(leaveSummaryListData => {
        this.leaveSummaryWithODPERList = leaveSummaryListData.data;
        this.leaveSummaryWithODPERList.forEach(leaveSummary => {
          if (leaveSummary !== null && (leaveSummary.gemsLeaveTypeMaster.leaveTypeCode !== 'OD'
            && leaveSummary.gemsLeaveTypeMaster.leaveTypeCode !== 'PER')) {
            this.leaveSummaryList.push(leaveSummary);
          }
        });
      });
    }), error => {
      this.router.navigateByUrl('user/approvals/leaveapprovals');
      
      //Redirecting to leave request page

    };

  }
 
  //Apporove the leave
  approveLeaveRequest(gemsLeaveObj) {
    debugger
   
    gemsLeaveObj.status = "APPROVED";
    gemsLeaveObj.isFlag = true;
    gemsLeaveObj.remarks = this.remarks;
    gemsLeaveObj.updatedBy = this.encryptdecryptlocalstorage.getLocalStorage("employeeId");
   //roja
   var userName= gemsLeaveObj.createdBy.gemsUserMaster.userName
   var userObj = {
     userName: userName
 }
 gemsLeaveObj.createdBy.gemsUserMaster=userObj
 var repotingUserName = gemsLeaveObj.createdBy.currentReportingTo.gemsUserMaster.userName;
 var reportingUserObj = {
     userName: repotingUserName
 }
 gemsLeaveObj.createdBy.currentReportingTo.gemsUserMaster = reportingUserObj;
 //roja


    this.EmployeeLeaveHistory = gemsLeaveObj;
    this.EmployeeLeaveHistory.updatedOn = new Date();
    this.genericservice.post(this.applyLeaveUrl, this.EmployeeLeaveHistory, false).subscribe(LeaveStatusData => {
      this.router.navigateByUrl('user/approvals/leaveapprovals');
    });
  }
  // Hold the leave
  holdLeaveRequest(gemsLeaveObj) {
    gemsLeaveObj.status = "ON HOLD";
    gemsLeaveObj.remarks = this.leaveDetailForm.controls['remarks'].value.trim();
    gemsLeaveObj.updatedBy = this.encryptdecryptlocalstorage.getLocalStorage("employeeId");
   //roja
   var userName= gemsLeaveObj.createdBy.gemsUserMaster.userName
   var userObj = {
     userName: userName
 }
 gemsLeaveObj.createdBy.gemsUserMaster=userObj
 var repotingUserName = gemsLeaveObj.createdBy.currentReportingTo.gemsUserMaster.userName;
 var reportingUserObj = {
     userName: repotingUserName
 }
 gemsLeaveObj.createdBy.currentReportingTo.gemsUserMaster = reportingUserObj;
 //roja
   
    this.EmployeeLeaveHistory = gemsLeaveObj;
    this.EmployeeLeaveHistory.updatedOn = new Date();
    this.genericservice.post(this.applyLeaveUrl, this.EmployeeLeaveHistory, false).subscribe(LeaveStatusData => {
      this.router.navigateByUrl('user/approvals/leaveapprovals');
    });
  }
  // Reject the  Leave
  rejectLeaveRequest(gemsLeaveObj) {
    gemsLeaveObj.status = "REJECTED";
    if (gemsLeaveObj.isFlag) {
      gemsLeaveObj.isFlag = true;
    } else {
      gemsLeaveObj.isFlag = false;
    }
    // gemsLeaveObj.remarks = this.leaveDetailForm.controls['remarks'].value.trim();
    gemsLeaveObj.remarks = this.remarks;
    gemsLeaveObj.updatedBy = this.encryptdecryptlocalstorage.getLocalStorage("employeeId");
    //roja
   var userName= gemsLeaveObj.createdBy.gemsUserMaster.userName
   var userObj = {
     userName: userName
 }
 gemsLeaveObj.createdBy.gemsUserMaster=userObj
 var repotingUserName = gemsLeaveObj.createdBy.currentReportingTo.gemsUserMaster.userName;
 var reportingUserObj = {
     userName: repotingUserName
 }
 gemsLeaveObj.createdBy.currentReportingTo.gemsUserMaster = reportingUserObj;
 //roja
    
    this.EmployeeLeaveHistory = gemsLeaveObj;
    this.EmployeeLeaveHistory.updatedOn = new Date();
    this.genericservice.post(this.applyLeaveUrl, this.EmployeeLeaveHistory, false).subscribe(LeaveStatusData => {
      this.router.navigateByUrl('user/approvals/leaveapprovals');
      
    });
  }



  pendingHoldLeave(gemsLeaveRequest) {
    var fromDate = new Date(gemsLeaveRequest.fromDate);
    var fromDateValue = fromDate.getFullYear() + "-" + (fromDate.getMonth() + 1) + "-" + fromDate.getDate();
     //console.log(new Date(fromDateValue).getTime() < new Date().getTime());
     //console.log(leaveRecord.status);
    if (gemsLeaveRequest.status == 'PENDING' && (new Date(fromDateValue).getTime() > new Date().getTime())) {
      return true;
    }
  }

  approvedLeaveReject(gemsLeaveRequest) {
    var fromDate = new Date(gemsLeaveRequest.fromDate);
    var fromDateValue = fromDate.getFullYear() + "-" + (fromDate.getMonth() + 1) + "-" + fromDate.getDate();
    if (gemsLeaveRequest.status == 'APPROVED' && (new Date(fromDateValue) > new Date())) {
      return true;
    }
  }

  approveRejectLeaveReason(gemsLeaveRequest) {
    var fromDate = new Date(gemsLeaveRequest.fromDate);
    var fromDateValue = fromDate.getFullYear() + "-" + (fromDate.getMonth() + 1) + "-" + fromDate.getDate();
    if (gemsLeaveRequest.status == 'APPROVED' && (new Date(fromDateValue).getTime() > new Date().getTime())) {
      return true;
    }
  }

rejectinvalid(){
  this.leaveDetailForm.invalid;
}
onKeyPress(event) {
 
  console.log(event.target.value);
  if(event.target.value.trim() === "") {
    this.reasonRequired = true;
  } else {
    this.reasonRequired = false;
  }
}
}
