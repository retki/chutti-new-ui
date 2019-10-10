import { Component, OnInit } from '@angular/core';
import { UrlConstant } from '../../../services/urlConstant';
import { Genericservice } from '../../../services/genericservices';
import { EncryptDecryptLocalStorageService } from '../../../services/encrypt-decrypt-localstorage.service';

@Component({
  selector: 'app-upcomming-holidays',
  templateUrl: './upcomming-holidays.component.html',
  styleUrls: ['./upcomming-holidays.component.scss']
})
export class UpcommingHolidaysComponent implements OnInit {
  public upcomingholidayUrl = UrlConstant.upcomingholidayApi;
  upcominholidayList: any = [];
  public isUpcomingHolidays: boolean = true;
  headerText: string = 'Upcoming Holidays';
  constructor(private urlconstant: UrlConstant, private genericservice: Genericservice, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) { }

  ngOnInit() {
    this.upcomingholiday();
  }

  upcomingholiday() {
    this.isUpcomingHolidays = true;
    let payloadobj =

    {
      "gemsOrganisation": {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      }
    }

    console.log(payloadobj);
    this.genericservice.post(this.upcomingholidayUrl + "?isUpcomingHolidays=" + this.isUpcomingHolidays, payloadobj, false).subscribe(response => {
      this.upcominholidayList = response.data;
    }
    )
  }
  expandupcomingholiday() {
    $('#upcoming').toggleClass('col-xl-12 h-100 w-100');
    $('#apply, #bank,#leavestatus').toggleClass('d-none');
    $('#upcoming .expand').toggleClass('d-none');
    $('#upcoming .compress').toggleClass('d-none');
    if (this.isUpcomingHolidays) {
      this.headerText = 'Holidays';
    } else {
      this.headerText = 'Upcoming Holidays';
    }
    this.isUpcomingHolidays = !this.isUpcomingHolidays;
    let payloadobj =

    {
      "gemsOrganisation": {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      }
    }

    console.log(payloadobj);
    this.genericservice.post(this.upcomingholidayUrl + "?isUpcomingHolidays=" + this.isUpcomingHolidays, payloadobj, false).subscribe(response => {
      this.upcominholidayList = response.data;
    }
    )
  }
}
