import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UrlConstant } from '../../services/urlConstant';
import { Genericservice } from '../../services/genericservices';
import { EncryptDecryptService } from '../../services/encrypt-decrypt.service';
import { EncryptDecryptLocalStorageService } from '../../services/encrypt-decrypt-localstorage.service';
import { commonService } from '../../services/commonMethodService';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { RequestOptions, Headers, Http } from '@angular/http';


import { Session } from 'protractor';
declare const gapi: any;
declare var $;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @ViewChild('someModal', null) someModal: ElementRef;
  public loginForm: FormGroup;
  public loginUrl = UrlConstant.loginApi;
  public googleUrl = UrlConstant.googleApi;
  public allEventsUrl = UrlConstant.allEvents;
  public failSignIn = ""
  public failemailSignIn = "";
  PreLoader = false;
  rememberMe = false;
  show: boolean = false;

  public gapi: any;
  public auth2: any;
  accessToken: any;
  eventList: any;
  public showModal: boolean;

  public googleSyncUrlapi = UrlConstant.googleSyncUrl;
  constructor(private router: Router, private urlconstant: UrlConstant, private ngZone: NgZone, private genericservice: Genericservice, private commonservice: commonService,
    private encryptdecryptservice: EncryptDecryptService, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private loadingBar: LoadingBarService,
    private commonService: commonService) {
    this.createForm();
    if (this.encryptdecryptlocalstorage.getLocalStorage('rememberMe') != "") {
      if (this.encryptdecryptlocalstorage.getLocalStorage('rememberMe') == "true") {
        this.rememberMe = true;
        this.loginForm.controls['userName'].setValue(this.encryptdecryptlocalstorage.getLocalStorage('userName'));
        this.loginForm.controls['userPassword'].setValue(this.encryptdecryptlocalstorage.getLocalStorage('userPassword'));
      }
    }
  }

  ngOnInit() {
    this.showModal = false;
  }

  createForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.email, Validators.required]),
      userPassword: new FormControl('', [Validators.required]),
    });
  }
  //normal sign in
  sigin() {
    var encryptedPassword = this.commonservice.reverseString(this.loginForm.value.userPassword);
    let payloadReqObj = {
      "userName": this.loginForm.value.userName,
      "userPassword": encryptedPassword,
    }
    this.loadingBar.start();
    this.genericservice.login(this.loginUrl, payloadReqObj).subscribe(response => {
      if (response.status.success == "Success") {
        if (response.data.completelyFilled != null) {
          this.encryptdecryptlocalstorage.setToLocalStorage("completelyFilled", response.data.completelyFilled);
        } else {
          this.encryptdecryptlocalstorage.setToLocalStorage("completelyFilled", false);
        }
        if (response.data.isAdmin != null) {
          this.encryptdecryptlocalstorage.setToLocalStorage("isAdmin", response.data.isAdmin);
        } else {
          this.encryptdecryptlocalstorage.setToLocalStorage("isAdmin", false);
        }
        debugger;

        //to check intial setup completed or not
        if (response.data.gemsOrgSetupStatus == false) {
          this.router.navigate(['initialsetupcheck']);
        } else {
          if (this.encryptdecryptlocalstorage.getLocalStorage("completelyFilled") == true || this.encryptdecryptlocalstorage.getLocalStorage("completelyFilled") == 'true') {
            this.router.navigate(['user']);
          } else {
            if (this.encryptdecryptlocalstorage.getLocalStorage("isAdmin") == true || this.encryptdecryptlocalstorage.getLocalStorage("isAdmin") == 'true') {
              this.router.navigate(['admin']);
            } else {
              this.showModal = true;
              setTimeout(() => {
                this.showModal = false;
              }, 2000);
            }
            $(this).attr('data-target', '#signIn');
          }
        }


        this.encryptdecryptlocalstorage.setToLocalStorage("userName", this.loginForm.value.userName);
        this.encryptdecryptlocalstorage.setToLocalStorage("userPassword", this.loginForm.value.userPassword);
        this.encryptdecryptlocalstorage.setToLocalStorage("employeeId", response.data.employeeId);
        this.encryptdecryptlocalstorage.setToLocalStorage("organizationId", response.data.organizationId);
        this.encryptdecryptlocalstorage.setToLocalStorage("userId", response.data.userId);
        this.encryptdecryptlocalstorage.setToLocalStorage("gemsUserMasterId", response.data.userId);
        this.encryptdecryptlocalstorage.setToLocalStorage("organisationId", response.data.organizationId);
        
        localStorage.setItem("isReportingManager", response.data.isReportingManager);
        console.log(response.data.isReportingManager);


        var rememberMe = "false";
        if (this.rememberMe == true) {
          rememberMe = "true";
          this.encryptdecryptlocalstorage.setToLocalStorage("userName", this.loginForm.value.userName);
          this.encryptdecryptlocalstorage.setToLocalStorage("userPassword", this.loginForm.value.userPassword);
        }
        this.encryptdecryptlocalstorage.setToLocalStorage("rememberMe", rememberMe);
        localStorage.setItem("token", response.token);
        sessionStorage.setItem("token", response.token);
        this.loadingBar.complete();
      }
      else {
        this.PreLoader = false
        sessionStorage.setItem("token", "");
        this.failSignIn = response.status.message;
      }
      this.loadingBar.complete();

    }
      ,
      errorHandler => {
        this.PreLoader = false;
        this.loadingBar.complete();
        this.failSignIn = "Incorrect Username or Password"
      })
  }
  //google sign starts
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '588196439072-a5i7ln42re6r0uu9a3588fqagt0o5t82.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        redirect_uri: 'http://qa-chutti.cloudnowtech.net',
        scope: 'profile email https://www.googleapis.com/auth/calendar.events'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        var accessToken = googleUser.Zi.access_token;
        localStorage.setItem('accessToken', accessToken);
        let profile = googleUser.getBasicProfile();

        let email = profile.getEmail();
        let payload = {
          "userName": email
        }
        this.ngZone.run(() => {
          this.loadingBar.start();
          this.genericservice.login(this.googleUrl, payload).subscribe(response => {
            if (response.status.success == "Success") {
              if (response.data.completelyFilled != null) {
                this.encryptdecryptlocalstorage.setToLocalStorage("completelyFilled", response.data.completelyFilled);
              } else {
                this.encryptdecryptlocalstorage.setToLocalStorage("completelyFilled", false);
              }
              if (response.data.isAdmin != null) {
                this.encryptdecryptlocalstorage.setToLocalStorage("isAdmin", response.data.isAdmin);
              } else {
                this.encryptdecryptlocalstorage.setToLocalStorage("isAdmin", false);
              }
              //   // this.router.navigate(['user']);
              //   this.encryptdecryptlocalstorage.setToLocalStorage("userName", this.loginForm.value.userName);
              //   this.encryptdecryptlocalstorage.setToLocalStorage("employeeId", response.data.employeeId);
              //   this.encryptdecryptlocalstorage.setToLocalStorage("organizationId", response.data.organizationId);
              //   this.encryptdecryptlocalstorage.setToLocalStorage("userId", response.data.userId);
              //   sessionStorage.setItem("token", response.token);
              //   localStorage.setItem("token", response.token);
              //   this.PreLoader = false
              if (this.encryptdecryptlocalstorage.getLocalStorage("completelyFilled") == true || this.encryptdecryptlocalstorage.getLocalStorage("completelyFilled") == 'true') {
                this.router.navigate(['user']);
              } else {
                if (this.encryptdecryptlocalstorage.getLocalStorage("isAdmin") == true || this.encryptdecryptlocalstorage.getLocalStorage("isAdmin") == 'true') {
                  this.router.navigate(['admin']);
                } else {
                  this.showModal = true
                  setTimeout(() => {
                    this.showModal = false;
                  }, 2000);
                }
                $(this).attr('data-target', '#signIn');
              }
              // //  window.location.href = 'http://localhost:4200/#/user';
              this.encryptdecryptlocalstorage.setToLocalStorage("userName", email);
              // this.encryptdecryptlocalstorage.setToLocalStorage("userPassword", this.loginForm.value.userPassword);
              this.encryptdecryptlocalstorage.setToLocalStorage("employeeId", response.data.employeeId);
              this.encryptdecryptlocalstorage.setToLocalStorage("organizationId", response.data.organizationId);
              this.encryptdecryptlocalstorage.setToLocalStorage("userId", response.data.userId);
              localStorage.setItem("isReportingManager", response.data.isReportingManager);
              console.log(response.data.isReportingManager);

              localStorage.setItem("token", response.token);
              sessionStorage.setItem("token", response.token);
              this.loadingBar.complete();
              this.googleCalendarSync(googleUser);

            }
            else {
              this.PreLoader = false;
              sessionStorage.setItem("token", "");
              this.failemailSignIn = response.status.message;
              document.getElementById('failemailSignIn').innerHTML = this.failemailSignIn;
            }
          }), errorHandler => {
            this.PreLoader = false;
            this.failemailSignIn = "Incorrect Username or Password";
          }
          this.loadingBar.complete();
        });
      })
  }


  //remember me
  rememberMeCheck(event) {
    this.rememberMe = !this.rememberMe;
  }
  ngAfterViewInit() {
    this.googleInit();
  }

  goToPricing() {
    window.open("https://www.chutti.work/#pricing", "_blank");
  }
  mouseenter() {

    this.failemailSignIn = null;
    this.failSignIn = null;
  }
  googleCalendarSync(userData) {
    this.accessToken = userData.Zi.access_token;
    let email = userData.w3.U3;
    // if (localStorage.getItem('email') == email) {
    console.log(this.encryptdecryptlocalstorage.getLocalStorage('userName'))
    if (this.encryptdecryptlocalstorage.getLocalStorage('userName') == email) {
      localStorage.setItem("accessToken", (this.accessToken));
      let empId = {
        "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      }

      return this.genericservice.post(this.allEventsUrl, empId, false).subscribe(response => {
        this.eventList = response.data;
        if (this.eventList != null) {
          for (let i = 0; i < this.eventList.length; i++) {
            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            let myParams = new URLSearchParams();
            myHeaders.append('authorization', 'Bearer ' + localStorage.getItem('accessToken'));
            let options = new RequestOptions({ headers: myHeaders });
            if (this.eventList[i].flag == 0) {
              let event = {
                'end': { 'date': this.commonService.getToByTime(this.eventList[i].gemsEmployeeLeaveMaster.toDate) },
                'start': { 'date': this.commonService.getDateByTime(this.eventList[i].gemsEmployeeLeaveMaster.fromDate) },
                'summary': this.eventList[i].gemsEmployeeLeaveMaster.leaveCode + ' - ' + this.eventList[i].gemsEmployeeLeaveMaster.status,
                'description': this.eventList[i].gemsEmployeeLeaveMaster.reason
              }
              let email = this.encryptdecryptlocalstorage.getLocalStorage('userName');
              //  let email = localStorage.getItem('email');
              this.genericservice.saveCalendarEvents(this.googleSyncUrlapi, event).subscribe(response => {

                // let eventId = this.saveEventId(response);

                // let eventObj = {
                //   'calenderEventId': this.eventList[i].calenderEventId,
                //   'gemsEmployeeLeaveMaster': this.eventList[i].gemsEmployeeLeaveMaster,
                //   'eventId': eventId,
                //   'flag': 1,
                //   'createdBy': this.eventList[i].gemsEmployeeMasterId
                // }
                // this.genericservice.post(this.saveEventurl, eventObj, false).subscribe(response => {

                // })

              })
            }
            else if (this.eventList[i].flag == 1) {
              let event = {
                'end': { 'date': this.commonService.getToByTime(this.eventList[i].gemsEmployeeLeaveMaster.toDate) },
                'start': { 'date': this.commonService.getDateByTime(this.eventList[i].gemsEmployeeLeaveMaster.fromDate) },
                'summary': this.eventList[i].gemsEmployeeLeaveMaster.leaveCode + ' - ' + this.eventList[i].gemsEmployeeLeaveMaster.status,
                'description': this.eventList[i].gemsEmployeeLeaveMaster.reason
              }
              let eventId = this.eventList[i].eventId;

              // let email = localStorage.getItem('email');
              let email = this.encryptdecryptlocalstorage.getLocalStorage('userName');
              this.genericservice.updateCalendarEvents(this.googleSyncUrlapi + eventId, event).subscribe(response => {

              })
            }
            else if (this.eventList[i].flag == 2 && this.eventList[i].eventId != null) {
              let eventId = this.eventList[i].eventId;
              this.genericservice.deleteCalendarEvents(this.googleSyncUrlapi + eventId).subscribe(response => {
              });

            }
          }
        }

        console.log('events synced with calendar successfully');
      });

    } else {
      console.log('Error,Cannot sync with this account. Please select the logged in account to sync your inforamtion!');
    }
  }
}