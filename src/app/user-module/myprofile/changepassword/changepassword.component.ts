import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UrlConstant } from 'src/app/services/urlConstant';
import { Genericservice } from 'src/app/services/genericservices';
import { commonService } from '../../../services/commonMethodService';
import { Router } from '@angular/router';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  changepassword: FormGroup;
  showOldPassword: boolean;
  showNewPassword: boolean;
  //public findUserObjURL = UrlConstant.reSetpasswordApi;
  public changePasswordUrl = UrlConstant.changePasswordApi;
  public saveUserObjURL = UrlConstant.saveUserApi;
  public userByIdURL = UrlConstant.userByIdApi;
  userObj: any;
  inValidpassword: boolean;
  pwdmismatch: boolean;
  userMaster: any;
  imageProfile: boolean;
  ProfileImage: string;
  employeeFirstName: any;
  designation: any;
  public preloader:boolean=false;
  constructor(private commonservice:commonService,  private genericservice: Genericservice, public router: Router,private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) {
   
  }

  ngOnInit() {

    this.changepassword = new FormGroup({
      oldpassword: new FormControl('', [Validators.required]),
      newpassword: new FormControl('', [Validators.required]),
      renewpassword: new FormControl('', [Validators.required])
    });
    this.showOldPassword = false;
    this.showNewPassword = false;
    this.inValidpassword = false;
    this.employeeFirstName = localStorage.employeeFirstname;
    this.designation = localStorage.designation;
    this.getUserById();
  }

  getUserById() {
    let userObj =
    {
      "gemsUserMasterId": this.encryptdecryptlocalstorage.getLocalStorage("userId")
    }
    return this.genericservice.post(this.userByIdURL, userObj,false).subscribe(employeedata => {
      this.userMaster = employeedata.data;
      this.ProfileImage = "data:image/png;base64," + this.userMaster.profileImgData;
      if (this.userMaster.profileImgData == null) {
        this.imageProfile = true;
        // this.value = 20;
      }
      else {
        this.imageProfile = false;
        // this.value = 30;
      }
    });

  }


  Submitpassword() {
    this.preloader=true;
    var encryptedNewPassword = this.commonservice.reverseString(this.changepassword.value.newpassword);
    var encryptedOldPassword = this.commonservice.reverseString(this.changepassword.value.oldpassword);
    var userId = this.encryptdecryptlocalstorage.getLocalStorage('userId')
    let userObj = {
      "userPassword": encryptedNewPassword,
      "oldPassword": encryptedOldPassword,
      "gemsUserMasterId": userId
    }

    this.genericservice.post(this.changePasswordUrl, userObj, true).subscribe(response => {
      this.preloader=false;
    })

    // let userObj = {
    //   "userName": "ramki.d@cloudnowtech.com",
    //   "userPassword": this.changepassword.value.oldpassword
    // }

    // return this.genericservice.post(this.findUserObjURL, userObj,true).subscribe(userdata => {
    //   this.userObj = userdata;
    //   if (this.userObj.gemsUserMasterId != null) {
    //     this.inValidpassword = false;
    //     this.userObj.userPassword = this.changepassword.value.newpassword;
    //     this.genericservice.post(this.saveUserObjURL, this.userObj,true).subscribe(response => {

    //     })
    //   } else {
    //     this.inValidpassword = true;
    //   }
    // })
  }

  cancelChangePassword() {
    this.router.navigateByUrl('/user/myprofile');
  }

  First_ConformPwdMatch(event) {

    if (event) {

      if (this.changepassword.value.newpassword == "" && this.changepassword.value.renewpassword == "") {
        this.pwdmismatch = false;
      } else {
        if (event == this.changepassword.value.renewpassword) {
          this.pwdmismatch = false;
        } else {
          if (event != "" && this.changepassword.value.renewpassword != "") {
            this.pwdmismatch = (event == this.changepassword.value.renewpassword) ? false : true;
          }
        }
      }
    } else {
      this.pwdmismatch = false;
    }
  }

  Sec_ConformPwdMatch(event) {
    if (event) {
      if (this.changepassword.value.newpassword == "" && this.changepassword.value.renewpassword == "") {
        this.pwdmismatch = false;
      } else {
        if (this.changepassword.value.newpassword == event) {
          this.pwdmismatch = false;
        } else {
          if (this.changepassword.value.newpassword != "" && event != "") {
            this.pwdmismatch = (event == this.changepassword.value.newpassword) ? false : true;
          }
        }
      }
    } else {
      this.pwdmismatch = false;
    }
  }



  omit_space(event) {
    var k;
    k = event.charCode;
    if (k == 32) {
      return false;
    }
  }


}
