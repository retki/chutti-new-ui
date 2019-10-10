import { Component, OnInit } from '@angular/core';
import { UrlConstant } from '../../services/urlConstant';
import { Genericservice } from '../../services/genericservices';
import { EncryptDecryptLocalStorageService } from '../../services/encrypt-decrypt-localstorage.service'
import { LoadingBarService } from '@ngx-loading-bar/core';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
  public leavepolicyUrl = UrlConstant.leavepolicyApi
  showdashleavestatuspagination: boolean;
  dashBoardPaginationView: boolean = true;

  displayHide = true;
  leavepolicyList: any = [];
  ConfirmedArrayList = [];
  inPropagationArrayList = [];
  PreLoader: boolean;
  leavepolicyshow: boolean = false;
  public isreportingmanager;
  constructor(private gernericservice: Genericservice, private urlconstant: UrlConstant,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,private loadingBar: LoadingBarService) {
    this.showdashleavestatuspagination = true;

  }

  ngOnInit() {
    this.isreportingmanager = localStorage.getItem("isReportingManager");

    this.loadingBar.complete();
    this.leavepolicy();
  }
  leavepolicy() {
    this.loadingBar.start();
    let payloadReqObj = {
      gemsOrganisationId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
    }
    return this.gernericservice.post(this.leavepolicyUrl, payloadReqObj, false).subscribe(response => {
      this.leavepolicyList = response.data;
      this.loadingBar.complete();
      this.leavepolicyList.forEach(element => {
        if (element.statusDescription == 'Confrimed'|| element.statusDescription == 'Confirmed') {
          this.ConfirmedArrayList.push(element);
        }
        if (element.statusDescription == 'In Probation') {
          this.inPropagationArrayList.push(element);

        }
      });

    }
    )
  }
  expandupcomingholiday() {
    $('#upcoming').toggleClass('col-xl-12 h-100 w-100');
    $('#apply, #bank,#leavestatus').toggleClass('d-none');
    $('#upcoming .expand').toggleClass('d-none');
    $('#upcoming .compress').toggleClass('d-none');
  }
  expandleavestatus() {
    $('#leavestatus').toggleClass('col-xl-12 h-100 w-100');
    $('#apply, #bank,#upcoming').toggleClass('d-none');
    $('#leavestatus .expand').toggleClass('d-none');
    $('#leavestatus .compress').toggleClass('d-none');
    this.showdashleavestatuspagination = !this.showdashleavestatuspagination;
  }

}
