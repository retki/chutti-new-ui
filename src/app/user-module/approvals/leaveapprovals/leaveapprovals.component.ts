import { Component, OnInit, Input } from '@angular/core';
import { UrlConstant } from '../../../services/urlConstant';
import { Genericservice } from '../../../services/genericservices';
import { EncryptDecryptLocalStorageService } from '../../../services/encrypt-decrypt-localstorage.service';
import { DataSharingService } from '../../../services/dataSharing.service';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { commonService } from 'src/app/services/commonMethodService';

@Component({
  selector: 'app-leaveapprovals',
  templateUrl: './leaveapprovals.component.html',
  styleUrls: ['./leaveapprovals.component.scss']
})
export class LeaveapprovalsComponent implements OnInit {
  rejectionform: FormGroup;
  @Input('dashBoardPaginationView') dashBoardPaginationView: boolean = true;
  @Input('showdashwhoseonleavepagination') showdashwhoseonleavepagination: boolean;
  public leavestatusUrl = UrlConstant.leavestatusApi;
  public leaverequestUrl = UrlConstant.leaverequestApi;
  public applyLeaveUrl = UrlConstant.applyLeaveAPi
  public getuserUrl = UrlConstant.getUserAPi;
  public googleSyncUrlapi = UrlConstant.googleSyncUrl;
  public eventIdUrl = UrlConstant.getEventIdApi;
  public saveNotificationURL = UrlConstant.saveNotificationApi;

  public leaveObject;

  displayHide = false;
  public leavestausList: any = [];
  //public list: any = [];
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
  employeeleaveHistory: { "gemsEmployeeLeaveMasterId": any; };
  employeeId: any;
  gemsEmployeeMasterId: any;
  tempdata: any;
  public preloader:boolean=false;

  constructor(private router: Router, private urlconstant: UrlConstant, private genericservice: Genericservice, private route: ActivatedRoute,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private loadingBar: LoadingBarService
    , private dataSharingService: DataSharingService, private commonService: commonService) {
    this.dataSharingService.appliedFlagObs.subscribe(data => {
      console.log('called..........')
      if (data == 'true') {
        console.log('called..........')
        this.leaveapprovals();
      }
    })
  }

  ngOnInit() {
    this.createForm();
    this.leaveapprovals();
  }

  createForm() {
    this.rejectionform = new FormGroup({
      reason: new FormControl('', [Validators.required]),
    });
  }

  leaveapprovals() {
    let payload = {
      "gemsUserMasterId": this.encryptdecryptlocalstorage.getLocalStorage('userId'),
    }
    this.genericservice.post(this.getuserUrl, payload, false).subscribe(response => {
      this.employeeId = response.data.gemsEmployeeMasterId;
      let payloadReqObj = {
        "reportingTo": this.employeeId,
      }
      this.start = 0;
      this.limit = this.selectedItemsPerPage;
      return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
        if (response.status.success === 'Success') {
          this.isData = true;
          //this.leavestausList = response.data;
          this.leavestausList = this.leaveList(response);
          this.totalCount = response.totalResult;
          this.findItemsPerPage();
        }
        else {
          this.isData = false;
        }
      }, error => {
        console.log(error)
      })
    })
  }

  //  To View Leave Details Pages from Leave Request Page
  viewLeavePage(leaveObj) {
    localStorage.setItem('LeaveId', leaveObj.gemsEmployeeLeaveMasterId + '');
    this.router.navigateByUrl('user/approvals/leavedetails');
  }
  approvedLeaveReject(gemsLeaveRequest) {
    var fromDate = new Date(gemsLeaveRequest.fromDate);
    var fromDateValue = fromDate.getFullYear() + "-" + (fromDate.getMonth() + 1) + "-" + fromDate.getDate();
    if (gemsLeaveRequest.status == 'APPROVED' && (new Date(fromDateValue) > new Date())) {
      return true;
    }
  }


  //leave approved
  leaverequest(leavestatusobj) {

    
   

   
    //this.preloader=true;
    let payloadReqObj =
    {
      "gemsEmployeeLeaveMasterId": leavestatusobj.gemsEmployeeLeaveMasterId
    }
    this.genericservice.post(this.leaverequestUrl, payloadReqObj, false).subscribe(response => {
      this.rejectionform.reset();

      console.log(response)
      leavestatusobj = response.data;
      leavestatusobj.status = "APPROVED";
      leavestatusobj.isFlag = true;
      leavestatusobj.updatedBy = this.gemsEmployeeMasterId;
//roja
      var userName= leavestatusobj.createdBy.gemsUserMaster.userName
      var userObj = {
        userName: userName
    }
    leavestatusobj.createdBy.gemsUserMaster=userObj
    var repotingUserName = leavestatusobj.createdBy.currentReportingTo.gemsUserMaster.userName;
    var reportingUserObj = {
        userName: repotingUserName
    }
    leavestatusobj.createdBy.currentReportingTo.gemsUserMaster = reportingUserObj;
    //roja
      // this.employeeleaveHistory.updatedOn = new Date();

      this.employeeleaveHistory = leavestatusobj;
      console.log(this.employeeleaveHistory)
      this.genericservice.post(this.applyLeaveUrl, this.employeeleaveHistory, true).subscribe(response => {
       // 
        console.log(response)
        this.leaveapprovals();
        // Save Notification
        let reqPayload = {
          "notification": response.data.notification,
          "gemsEmployeeMasterId": response.data.gemsEmplyeeLeaveSummary.gemsEmployeeMaster.gemsEmployeeMasterId
      }
      this.genericservice.post(this.saveNotificationURL,reqPayload,false).subscribe(res => {

      });
        this.preloader=false;

      })

    })

  }
  //leave rejected
  leaverejected(leavestatusobj) {
    this.preloader=true;

    let payloadReqObj =
    {
      "gemsEmployeeLeaveMasterId": leavestatusobj.gemsEmployeeLeaveMasterId,
    }
    this.genericservice.post(this.leaverequestUrl, payloadReqObj, false).subscribe(response => {


      console.log(response)
      leavestatusobj = response.data;
      leavestatusobj.status = "REJECTED";
      leavestatusobj.isFlag = true;
      leavestatusobj.updatedBy = this.gemsEmployeeMasterId;
      leavestatusobj.remarks = this.rejectionform.value.reason
      //roja
      var userName= leavestatusobj.createdBy.gemsUserMaster.userName
      var userObj = {
        userName: userName
    }
    leavestatusobj.createdBy.gemsUserMaster=userObj
    var repotingUserName = leavestatusobj.createdBy.currentReportingTo.gemsUserMaster.userName;
    var reportingUserObj = {
        userName: repotingUserName
    }
    leavestatusobj.createdBy.currentReportingTo.gemsUserMaster = reportingUserObj;
    //roja
      // this.employeeleaveHistory.updatedOn = new Date();

      this.employeeleaveHistory = leavestatusobj;
      this.genericservice.post(this.applyLeaveUrl, this.employeeleaveHistory, true).subscribe(response => {
        console.log(response)
       // 
        this.leaveapprovals();
                // Save Notification
                let reqPayload = {
                  "notification": response.data.notification,
                  "gemsEmployeeMasterId": response.data.gemsEmplyeeLeaveSummary.gemsEmployeeMaster.gemsEmployeeMasterId
              }
              this.genericservice.post(this.saveNotificationURL,reqPayload,false).subscribe(res => {
        
              });
        
        this.rejectionform.reset();

      })
      this.rejectionform.reset();

    })
    this.preloader=false;

  }

  //get user for rejected
  reject(leavestatusobj) {
    this.rejectionform.reset();
    console.log(leavestatusobj)
    this.leaveObject = leavestatusobj;
  }
  //leave onhold

  leaveonhold(leavestatusobj) {
    this.preloader=true;

    let payloadReqObj =
    {
      "gemsEmployeeLeaveMasterId": leavestatusobj.gemsEmployeeLeaveMasterId
    }
    this.genericservice.post(this.leaverequestUrl, payloadReqObj, false).subscribe(response => {

      console.log(response)
      leavestatusobj = response.data;
      leavestatusobj.status = "ONHOLD";
      leavestatusobj.isFlag = true;
      leavestatusobj.updatedBy = this.gemsEmployeeMasterId;
      // this.employeeleaveHistory.updatedOn = new Date();
      
//roja
var userName= leavestatusobj.createdBy.gemsUserMaster.userName
var userObj = {
  userName: userName
}
leavestatusobj.createdBy.gemsUserMaster=userObj
var repotingUserName = leavestatusobj.createdBy.currentReportingTo.gemsUserMaster.userName;
var reportingUserObj = {
  userName: repotingUserName
}
leavestatusobj.createdBy.currentReportingTo.gemsUserMaster = reportingUserObj;
//roja
      this.employeeleaveHistory = leavestatusobj;
      this.genericservice.post(this.applyLeaveUrl, this.employeeleaveHistory, true).subscribe(response => {
        console.log(response);
       // 
       // this.getEventId(response);
        this.leaveapprovals();
                // Save Notification
                let reqPayload = {
                  "notification": response.data.notification,
                  "gemsEmployeeMasterId": response.data.gemsEmplyeeLeaveSummary.gemsEmployeeMaster.gemsEmployeeMasterId
              }
              this.genericservice.post(this.saveNotificationURL,reqPayload,false).subscribe(res => {
        
              });
        

      })

    })
    this.preloader=false;

  }
  leaveList(response) {
    var i;
    var list = [];
    for (i = 0; i < response.data.length; i++) {
      var responseObj = response.data[i];
      responseObj.permissionDuration = this.duration(responseObj);
      list.push(responseObj);
    }
    return list;

  }

  findItemsPerPage() {
    this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);

  }
  goToPageNo(event) {
    console.log('on page change')
  }
  goToNext(event) {
    this.currentPage++;
    let payloadReqObj = {
      "reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
    }
    this.start = this.start + this.limit;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
      if (response.status.success === 'Success') {
        this.isData = true;
        this.leavestausList = this.leaveList(response);
        this.totalCount = response.totalResult;
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

      "reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),

    }
    this.start = this.start - this.limit;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {

      if (response.status.success === 'Success') {
        this.isData = true;
        this.leavestausList = this.leaveList(response);
        this.totalCount = response.totalResult;
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
    console.log('event printed' + event)
    this.selectedItemsPerPage = parseInt(event);
    this.refreshList();

  }
  refreshList() {

    let payloadReqObj = {
      "reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),

    }
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
      if (response.status.success === 'Success') {
        this.isData = true;
        this.leavestausList = this.leaveList(response);
        this.totalCount = response.totalResult;
        this.findItemsPerPage();
      }
      else {
        this.isData = false;
      }
    }
    )

  }

  duration(responseObject) {
    if (responseObject.leaveTypeCode == "PER") {
      responseObject.permissionDuration = responseObject.permissionDuration.toString();
      if (responseObject.permissionDuration.includes('.')){
      let hour = responseObject.permissionDuration.split('.')[0];
      let minutes = responseObject.permissionDuration.split('.')[1];
      if (hour.length > 0) {
        if( minutes.length > 0) {
          if( hour === '0' || hour === 0 ) {
            minutes = minutes.length == 1 ? minutes + '0' +' ' +'mins' : minutes === '01' ?minutes+' '+'min' : minutes  + ' '+'mins';;
            return minutes;
          } else {
           hour = hour === '1' || hour === 1 ? hour +' '+'hr' : hour +' '+'hrs'; 
           minutes = minutes.length == 1 ? minutes + '0' +' ' +'mins' : minutes === '01' ?minutes+' '+'min' : minutes  + ' '+'mins';;
            return hour + ' '+ minutes;
          }
        }
      }
    } else {
      responseObject.permissionDuration = responseObject.permissionDuration === '1' || responseObject.permissionDuration === 1 ? responseObject.permissionDuration + ' '+ 'hr' : responseObject.permissionDuration +' '+ 'hrs'; 
      return responseObject.permissionDuration;
    }
    
      // hour = hour.length > 1 : hour !== '0' ?  
      // return responseObject.permissionDuration + " hrs";
    } else if(responseObject.leaveTypeCode == "OD" && (responseObject.fromDate == responseObject.toDate)) {
      responseObject.permissionDuration = responseObject.permissionDuration.toString();
     
      if (responseObject.permissionDuration.includes('.')){
        let hour = responseObject.permissionDuration.split('.')[0];
        let minutes = responseObject.permissionDuration.split('.')[1];
       
        if (hour.length > 0) {
          if( minutes.length > 0) {
            if( hour === '0' || hour === 0 ) {
              minutes = minutes.length == 1 ? minutes + '0' +' ' +'mins' : minutes === '01' ?minutes+' '+'min' : minutes + ' '+'mins';
              return minutes;
            } else {
             hour = hour === '1' || hour === 1 ? hour +' '+'hr' : hour +' '+'hrs'; 
             minutes = minutes.length == 1 ? minutes + '0' +' ' +'mins' : minutes === '01' ?minutes+' '+'min' : minutes+ ' '+'mins';
              return hour + ' '+ minutes;
            }
          }
        }
      } else {
         if(responseObject.isFullDay){
          return responseObject.permissionDuration + ' '+ 'day';
        } else {
        responseObject.permissionDuration = responseObject.permissionDuration === '1' || responseObject.permissionDuration === 1 ? responseObject.permissionDuration + ' '+ 'hr' : responseObject.permissionDuration +' '+ 'hrs'; 
        return responseObject.permissionDuration;
        }
      }
      // return responseObject.permissionDuration + " hrs";
      } else {
      var noOfDays = responseObject.permissionDuration;
      var noOfWeek = Math.trunc(noOfDays / 7);
      var remainder = noOfDays % 7;

      var days;
      if (noOfWeek >= 1) {
        if (remainder > 0) {
          days = remainder == 1 ? remainder + " day" : remainder + " days";
        } else {
          days = "";
        }

        return noOfWeek > 1 ? noOfWeek + " weeks " + days : noOfWeek + " week " + days;
      } else if (responseObject.leaveDescription != "Permission" && noOfDays > 1) {
        return noOfDays + " days";

      } else {
        return noOfDays + " day";
      }
    }
  }
  close() {
    this.rejectionform.reset()
    // this.rejectionform.value.reason = "";
  };
 getEventId(res) {
   console.log("before call service")
    this.genericservice.get(this.eventIdUrl + "/" + res.data.gemsEmployeeLeaveMasterId).subscribe(response => {
      if (res.status.success == 'Success') {
        console.log(" service Success")
        let event = {
          'end': { 'date': this.commonService.getToByTime(res.data.toDate) },
          'start': { 'date': this.commonService.getDateByTime(res.data.fromDate) },
          'summary': res.data.leaveCode + ' - ' + res.data.status,
          'description': res.data.reason
        }
        let eventId = response.data.eventId;
        this.genericservice.updateCalendarEvents(this.googleSyncUrlapi + eventId, event).subscribe(response => {
          console.log("new leave status is synced successfully with google calendar");
        }, error => {
          console.log("error while syncing with google calendar");
        })
      }
    })
  }

}
