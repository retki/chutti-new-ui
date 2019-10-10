
import { Component } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { DataSharingService } from './services/dataSharing.service';
import { Genericservice } from './services/genericservices';
import { UrlConstant } from './services/urlConstant';
import { NotificationConstants } from './services/NotificationConstant.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public logoutUrl = UrlConstant.logoutUrl;
  title = 'cloudnow-chutti-web2';
  preLoader = false;
  sessionExpireNotification = '';
  successMessage = '';
  showNotification = false;
  showSuccessNotification = false;
  failureMessage ='';
  showFailureNotification = false;
  failureGif;
  slideInRight;
  slideOutRight;
  successFlagMessage: string= '';
  successFlagGif: string;
  constructor( public router: Router,public dataSharingService: DataSharingService,private urlconstant: UrlConstant,
               private genericservice: Genericservice,public NotificationConstants: NotificationConstants) {

    this.getSuccessMessage();
    this.getFailureMessage();
  }


  ngOnInit() {

  }
  // buttonStyles()
  // {
  //  $('.success').addClass('active');
  // }

  getSuccessMessage() {
    this.dataSharingService.successNotificationObs.subscribe(data => {
      this.successMessage = data;
      this.showSuccessNotification = true;
      if (this.successMessage !== '') {
        this.showSuccessNotification = true;
        setTimeout(() => {
          this.successMessage = '';
          this.showSuccessNotification = false;
        }, 6000);
      } else {
        this.showSuccessNotification = false;
      }
    }, error => {
      console.log('error...........');
    }
    );
  }


  getFailureMessage() {
    this.dataSharingService.failureNotificationObs.subscribe(data => {
      this.failureMessage = data;
      this.showFailureNotification = true;
      if (this.failureMessage !== '') {
        this.showFailureNotification = true;

        setTimeout(() => {

          this.showFailureNotification = false;
        }, 6000);
      } else {
        this.showFailureNotification = false;
      }
    }, error => {
      console.log('error...........');
    }
    );
  }

  ngAfterViewInit() {

    this.setupBeforeUnloadListener();
  }
  // Setup the `beforeunload` event listener
  setupBeforeUnloadListener = () => {
    window.addEventListener('beforeunload', (ev) => {
      ev.preventDefault();
      // return this.logout();
    });
  }



  logout() {
    this.preLoader = true;
    this.genericservice.post(this.logoutUrl, '', false).subscribe(response => {
      if (response.status.success === 'Success') {
        this.preLoader = false;
        sessionStorage.clear();
        window.location.reload();
        this.router.navigate(['signIn']);
      } else {
        this.preLoader = false;
        sessionStorage.clear();
        this.router.navigate(['signIn']);
      }
    },
      error => {
        this.preLoader = false;
      });

    setTimeout(() => {
      this.sessionExpireNotification = undefined;
    }, 4000);
  }


}

