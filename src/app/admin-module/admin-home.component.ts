import { Component, OnInit } from '@angular/core';
import { EncryptDecryptLocalStorageService } from '../services/encrypt-decrypt-localstorage.service';
import { UrlConstant } from '../services/urlConstant';
import { Genericservice } from '../services/genericservices';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  notificationList: any = [];
  employeeId: any;
  isNotification: boolean;
  firstName: any;
  lastName ='';
  name: any;
  public isImage: boolean = false;
  adminDashBoardName: any;
  constructor(private gernericservice: Genericservice,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private router:Router) { }

  ngOnInit() {
    this.employeeId = this.encryptdecryptlocalstorage.getLocalStorage('employeeId');
    this.isNotification = false;
      this.getNotificationList();
     this.getUserById()
  }
  getNotificationList() {
    return this.gernericservice.get(UrlConstant.getNotificationAPI + '?employeeId='+this.employeeId).subscribe(res => {
      this.notificationList = res.data;
    })
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
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/signIn']);
  }

  

}
