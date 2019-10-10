import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/services/dataSharing.service';
import { Genericservice } from 'src/app/services/genericservices';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UrlConstant } from 'src/app/services/urlConstant';
import { commonService } from 'src/app/services/commonMethodService';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';

@Component({
  selector: 'app-leave-approve',
  templateUrl: './leave-approve.component.html',
  styleUrls: ['./leave-approve.component.scss']
})
export class LeaveApproveComponent implements OnInit {
  public leaverequestUrl = UrlConstant.leaverequestApi;
  public applyLeaveUrl = UrlConstant.applyLeaveAPiWithOutToken;
  public googleSyncUrlapi = UrlConstant.googleSyncUrl;
  public eventIdUrl = UrlConstant.getEventIdApi;
  public saveNotificationURL = UrlConstant.saveNotificationApi;
  leaveRequestToken: any;
  leaveMasterResponse: any;
  message: string;
  leaveEmployeeMasterId: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private genericService: Genericservice,
    private commonService: commonService, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) {
    this.message = '';
    //this.getObjByToken();
  }

  ngOnInit() {
    
   this.getObjByToken();
  }

  getObjByToken() {
    
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.leaveRequestToken = params['leavetoken'];
      this.leaveEmployeeMasterId = params['reportingManagerId'];

    });
    let leaveObj = {
      "leaveToken": this.leaveRequestToken,
    }
    this.genericService.postWithOutHeaders(this.leaverequestUrl, leaveObj, false).subscribe(response => {

      console.log(response);
      this.leaveMasterResponse = response.data;
      if (this.leaveMasterResponse.status != 'PENDING' && this.leaveMasterResponse.status != 'ONHOLD') {
        this.message = response.data.leaveCode + ' ' + 'has been' + ' ' + this.leaveMasterResponse.status + ' ' + 'already.';
      } else {
        console.log(response);
        this.approveLeave();
      }
    })
  }
  approveLeave() {

    this.leaveMasterResponse.status = 'APPROVED';
    this.leaveMasterResponse.isFlag = true;
    this.leaveMasterResponse.updatedBy = this.leaveEmployeeMasterId;
    this.genericService.postWithOutHeaders(this.applyLeaveUrl, this.leaveMasterResponse, false).subscribe(res => {
      console.log(res);

      if (res.status.success == 'Success') {
        this.message = 'Your' + ' ' + res.data.leaveCode + ' ' + 'has been APPROVED successfully';
        // Save Notification
        let reqPayload = {
          "notification": res.data.notification,
          "gemsEmployeeMasterId": res.data.gemsEmplyeeLeaveSummary.gemsEmployeeMaster.gemsEmployeeMasterId
          }
              this.genericService.post(this.saveNotificationURL, reqPayload, false).subscribe(res => {

          });

        }
      })

  }

 

}
