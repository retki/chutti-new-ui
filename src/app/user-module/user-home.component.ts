import { Component, OnInit, } from '@angular/core';
import { EncryptDecryptLocalStorageService } from '../services/encrypt-decrypt-localstorage.service';
import { UrlConstant } from '../services/urlConstant';
import { Genericservice } from '../services/genericservices';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/dataSharing.service';
import { CssServices } from '../services/css.service';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  public notifivationUrl = UrlConstant.notificationAPI
  public getNotificationListURL = UrlConstant.getNotificationAPI;
  notificationList: any = [];
  employeeId: any;
  isNotification: boolean;
  firstName: any;
  lastName: any;
  name: any;
  // name: string;
  public isImage: boolean = false;
  dashBoardName: any;
  public isAdmin: boolean;
  safeUrl: SafeResourceUrl;

  constructor(private router: Router, private gernericservice: Genericservice, private urlconstant: UrlConstant,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private sanitizer: DomSanitizer
    , private dataSharingService: DataSharingService, private cssservice: CssServices) {


    this.dataSharingService.profileFlagObs.subscribe(data => {
      if (data == 'true') {
        this.notification();
        this.getNotificationList();
        this.getUserById();
      }
    })
  }

  ngOnInit() {
    this.sliderBar();
    // this.onexpandatasharing();
    // this.cssservice.trigegerstatusFlag('true');
    this.scrollFixed();
    this.isNotification = false;
    this.employeeId = this.encryptdecryptlocalstorage.getLocalStorage('employeeId');
    this.isAdmin = this.encryptdecryptlocalstorage.getLocalStorage('isAdmin') === "true" ? true : false;
    this.getNotificationList();
    this.getUserById();
    // this.employeeId=6442;
    return this.gernericservice.get(this.notifivationUrl + "?employeeId=" + this.employeeId + "&isNotification=" + this.isNotification).subscribe(response => {
      this.dashBoardName = response.data.firstName
      // if (response.data.profileImage != null && response.data.profileImage != undefined) {
      //   this.isImage = true;
      //   this.name = response.data.profileImage?
      //   'data:image/jpg;base64,'+response.data.profileImage:'';
      // } else {
      //   this.isImage = false;
      //   this.firstName = response.data.firstName.charAt(0);
      //   this.lastName = response.data.lastName.charAt(0);
      //   this.name = this.firstName + this.lastName;
      // }
      // this.notificationList = response.data.leaveList;
    }
    )
  }

  getUserById() {
    let reqPayload = {
      "gemsUserMasterId": this.encryptdecryptlocalstorage.getLocalStorage('userId')
    }
    return this.gernericservice.post(UrlConstant.getEmployeeApi, reqPayload, false).subscribe(response => {
      if (response.data.gemsUserMaster.profileImgData != null && response.data.gemsUserMaster.profileImgData != undefined) {
        this.isImage = true;
        this.name = response.data.profileImage ?
          'data:image/jpg;base64,' + response.data.profileImage : '';
      } else {
        this.isImage = false;
        this.firstName = response.data.employeeFirstName.charAt(0);
        this.lastName = response.data.employeeLastName != null ? response.data.employeeLastName.charAt(0) : '';
        this.name = this.firstName + this.lastName;
      }
    })
  }
  notification() {

    this.employeeId = this.encryptdecryptlocalstorage.getLocalStorage('employeeId');
    // this.employeeId=6442;
    //this.isNotification=true;
    this.isNotification = false;
    return this.gernericservice.get(this.notifivationUrl + "?employeeId=" + this.employeeId + "&isNotification=" + this.isNotification).subscribe(response => {
      this.dashBoardName = response.data.firstName
      // if (response.data.profileImage != null && response.data.profileImage != undefined) {
      //   this.isImage = true;
      //   this.name = response.data.profileImage?
      //   'data:image/jpg;base64,'+response.data.profileImage:'';
      // } else {
      //   this.isImage = false;
      //   this.firstName = response.data.firstName.charAt(0);
      //   this.lastName = response.data.lastName.charAt(0);
      //   this.name = this.firstName + this.lastName;
      // }
      // this.notificationList = response.data.leaveList;
    }
    )
  }

  getNotificationList() {
    return this.gernericservice.get(this.getNotificationListURL + '?employeeId=' + this.employeeId).subscribe(res => {
      this.notificationList = res.data;
    })
  }
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/signIn']);
  }
  myLeave(notificationListobj) {
    if (notificationListobj.gemsEmployeeMasterId == this.encryptdecryptlocalstorage.getLocalStorage('employeeId')) {
      this.router.navigate(['/user/leave/leaveapprovals']);
    } else {
      this.router.navigate(['/user/dashboard/leaveStatus']);
    }
   
    // let payload = { 
    // "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'), 
    // "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organisationId') 
    // } 
    // return this.gernericservice.post("app-chutti/leavesFromViewRange?start=0&limit=3&status=", payload, false).subscribe(response => { 
    // if (notificationListobj.status == "PENDING") { 
    // this.router.navigate(['/user/dashboard/leaveStatus']); 
    // }
    // else { 
    // alert("No Record") 
    // } 
    // });
  }

  scrollFixed() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.header').addClass("sticky");
      } else {
        $('.header').removeClass("sticky");
      }
    });
  }

  sliderBar() {
    // tslint:disable-next-line:only-arrow-functions
    $('.menu, .nav li, .main-overlay').click(function () {
      $('.sidebar').toggleClass('active');
      $('.main-overlay').toggleClass('active');
    });
  }
  onexpandatasharing() {
    this.cssservice.trigegerexpandFlag(true);
  }

}

