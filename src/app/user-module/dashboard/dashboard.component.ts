import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { EncryptDecryptLocalStorageService } from '../../services/encrypt-decrypt-localstorage.service';
import { Genericservice } from '../../services/genericservices';
import { UrlConstant } from '../../services/urlConstant';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { CssServices } from '../../services/css.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public notifivationUrl = UrlConstant.notificationAPI
  showdashwhoseonleavepagination : boolean;
  dashBoardPaginationView:boolean=false;
  isNotification: boolean;
  employeeId: any;
  name: any;
  showdashleavestatuspagination:boolean ;
  constructor(private encryptdecryptlocalstorage:EncryptDecryptLocalStorageService,
    private gernericservice:Genericservice,private loadingBar: LoadingBarService,private cssservice:CssServices) { 
    this.showdashwhoseonleavepagination = true;
    this.showdashleavestatuspagination = true;
    // this.cssservice.isExpandFlagObs.subscribe(data=>{
    //   console.log('css notification')
    //   if(data=='true'){
    //     console.log('css notification trigger.....')
    //     if($('.nav-item.active.test').length == 0) {} else {
    //     this.expandleavestatus();
    //     }
    //   }
    // })
  }

  ngOnInit() {
    //this.loadingBar.start();
 
    this.notification();
    //this.loadingBar.complete();
  }
  //expand and express leave status
  expandleavestatus() {
    $('#leavestatus').toggleClass('col-12 col-md-12 col-lg-12 active ');
    $(".hide__elements, #whosisonleave").toggleClass('d-none');
    $('#leavestatus .expand').toggleClass('d-none');
    $('#leavestatus .compress').toggleClass('d-none');
    $('.nav-item.active').toggleClass('test');
    this.showdashleavestatuspagination = !this.showdashleavestatuspagination;

  }
   //expand and express leave status
   expandwhoseonleave() {
    $('#whosisonleave').toggleClass('col-xl-12 h-100 w-100');
    $(".row-2").toggleClass('col-xl-12');
    $('.hide__elements, #leavestatus').toggleClass('d-none');
    $('#whosisonleave .expand').toggleClass('d-none');
    $('#whosisonleave .compress').toggleClass('d-none');
    this.showdashwhoseonleavepagination = !this.showdashwhoseonleavepagination;
  }
  notification() { 
    this.loadingBar.start();
    this.employeeId=this.encryptdecryptlocalstorage.getLocalStorage('employeeId');
    this.isNotification=false;
    return this.gernericservice.get(this.notifivationUrl+"?employeeId=" + this.employeeId + "&isNotification=" + this.isNotification).subscribe(response => {
      this.name=response.data.firstName;
      this.loadingBar.complete();
    }
      )
  }
}
