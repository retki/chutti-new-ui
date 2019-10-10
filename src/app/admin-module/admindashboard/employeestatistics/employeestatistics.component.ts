import { Component, OnInit, ViewChild, ElementRef, Renderer2, OnChanges } from '@angular/core';
import { Genericservice } from 'src/app/services/genericservices';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { UrlConstant } from 'src/app/services/urlConstant';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employeestatistics',
  templateUrl: './employeestatistics.component.html',
  styleUrls: ['./employeestatistics.component.scss']
})
export class EmployeestatisticsComponent implements OnInit {
  chartData: Array<any>;
  getEmployeeStatisticsURL = UrlConstant.getEmployeeStatistics;
  currentDate = new Date();
  toDate: any;
  fromDate: any;
  toDay: any;
  @ViewChild('todate', { static: true }) rightArrow: ElementRef;
  constructor(private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private genericService: Genericservice, public datepipe: DatePipe) {
    this.changeWeek('currentWeek');
  }

  ngOnInit() {
    setTimeout(() => {
      //  this.generateData();
      this.geyEmployeeStatisticsData();
    }, 1000)
  }
  generateData() {
    this.chartData = [];
    for (let i = 0; i < (7 + Math.floor(Math.random() * 1)); i++) {
      this.chartData.push({ "date": `0${1 + i} Jun ${i}`, "value": Math.floor(Math.random() * 200) });
    }
  }


  geyEmployeeStatisticsData() {
    this.chartData = [];

    // To set two dates to two variables
    var date1 = new Date(this.fromDate);
    var date2 = new Date(this.toDate);

    // To calculate the time difference of two dates 
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if (Difference_In_Days == 6) {
      var url = this.getEmployeeStatisticsURL + 'start=' + this.fromDate + '&end=' + this.toDate;
      var payLoad = {
        "organisationId": this.encryptdecryptlocalstorage
          .getLocalStorage('organizationId')
      }
      this.genericService.post(url, payLoad, false).subscribe(response => {
        response;
        var objKey = Object.keys(response);
        var objValue = Object.values(response);
        let count = 0;
        var arr = [];
        for (let key of objKey) {
          let obj = {
            'date': this.datepipe.transform(key.split('T')[0], 'dd MMM yy'),
            'value': objValue[count]
          };
          arr.push(obj);
          count++;
        }
        this.chartData = arr;
      })
    }
  }

  changeWeek(type) {

    if (type == 'previousWeek') {
      this.toDate = this.fromDate;
      var pastWeek = new Date(this.fromDate).getTime() - 6 * 24 * 60 * 60 * 1000;
      this.currentDate.setTime(pastWeek);
      var prevDate = new Date(this.currentDate),
        mnth = ("0" + (prevDate.getMonth() + 1)).slice(-2),
        day = ("0" + prevDate.getDate()).slice(-2);
      this.fromDate = [prevDate.getFullYear(), mnth, day].join("-");
      this.geyEmployeeStatisticsData();
      console.log(this.fromDate);
      console.log(this.toDate);

    }
    if (type == 'nextWeek') {
      this.fromDate = this.toDate;
      var nextWeek = new Date(this.toDate).getTime() + 6 * 24 * 60 * 60 * 1000;
      this.currentDate.setTime(nextWeek);
      var nextDate = new Date(this.currentDate),
        mnth = ("0" + (nextDate.getMonth() + 1)).slice(-2),
        day = ("0" + nextDate.getDate()).slice(-2);
      this.toDate = [nextDate.getFullYear(), mnth, day].join("-");
      this.geyEmployeeStatisticsData();


    }
    if (type == 'currentWeek') {

      var pastWeek = this.currentDate.getTime() - 6 * 24 * 60 * 60 * 1000;
      this.currentDate.setTime(pastWeek);
      var prevDate = new Date(this.currentDate),
        mnth = ("0" + (prevDate.getMonth() + 1)).slice(-2),
        day = ("0" + prevDate.getDate()).slice(-2);
      this.fromDate = [prevDate.getFullYear(), mnth, day].join("-");

      var nextWeek = this.currentDate.getTime() + 6 * 24 * 60 * 60 * 1000;
      this.currentDate.setTime(nextWeek);
      var nextDate = new Date(this.currentDate),
        mnth = ("0" + (nextDate.getMonth() + 1)).slice(-2),
        day = ("0" + nextDate.getDate()).slice(-2);
      this.toDate = [nextDate.getFullYear(), mnth, day].join("-");
      this.toDay = this.toDate;
    }


  }


}
