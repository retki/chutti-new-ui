import { Component, OnInit, Input } from '@angular/core';

import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Genericservice } from '../../../services/genericservices';
import { UrlConstant } from '../../../services/urlConstant';
import { EncryptDecryptLocalStorageService } from '../../../services/encrypt-decrypt-localstorage.service';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import { DatePipe } from '@angular/common';
import { LoadingBarService } from '@ngx-loading-bar/core';
import * as moment from 'moment';


@Component({
  selector: 'app-employeestatus',
  templateUrl: './employeestatus.component.html',
  styleUrls: ['./employeestatus.component.scss']
})

export class EmployeestatusComponent implements OnInit {
  public whoIsOnUrl = UrlConstant.whoisonleaveApi;
  public commonUrl
  public commonPayload
  public employeeStatusType = 'Leave'
  whoisonLeaveList: any = [];
  nextOfNextWeekList: any = [];
  nextWeekList: any = [];
  todayList: any = [];
  thisweekList: any = [];
  getOverTimeWorkersCountURL = UrlConstant.getOverTimeWorkersCount;
  getYesterdayWhosOnLate = UrlConstant.getYesterdayWhosOnLate;
  getYesterdayWhosOnLeaveURL = UrlConstant.getYesterdayWhosOnLeave;
  public whoISonLeaveExpansionURL = UrlConstant.whoISonLeaveExpansionAPI;
  public totalOverTimeWorkersList = [];
  public totalLateList = [];
  public totalLeaveList = [];
  @Input('showdashwhoseonleavepagination') showdashwhoseonleavepagination: boolean;
  expandCard: boolean = true;





  selectedItemsPerPage = 3;
  displayHide = false;
  public leavestausList: any = [];
  totalCount: any;
  currentPage = 1;
  totalPages = 1;
  public PaginationObject;
  public start: number;
  public limit = 3;
  public perpageOption = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];

  public status = "";
  public temp: any;
  public ToDate: any;
  public FromDate: any;
  showHide: boolean;
  // date range picker
  public daterange: any = {};
  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
  };

  fromdate: any;
  todate: any;
  public currentMonth: any;
  index: number;
  newDate: Date;
  Nextmonths: any;
  firstDays: string;
  lastDays: string;
  isToday: boolean;
  public monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  nextOfNextWeekStartDate: any;
  isData: boolean = true;
  nextOfNextWeekEndDate: any;
  isTodayActive;
  isWeekActive;
  //daterangepicker
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  today: NgbDate;
  finalDateFrom: string;
  finalDateTo: string;
  startLeaveDate: any;
  EndLeaveDate: any;
  constructor(private loadingBar: LoadingBarService, private urlconstant: UrlConstant, private genericservice: Genericservice,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private daterangepickerOptions: DaterangepickerConfig, public datepipe: DatePipe, calendar: NgbCalendar) {
    this.daterangepickerOptions.settings = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false,
    };
    this.daterangepickerOptions.skipCSS = false;
    this.fromDate = calendar.getToday();
    this.today = calendar.getToday();
    this.toDate = calendar.getToday();
    this.finalDateFrom = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day;
    this.finalDateTo = this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day;
    this.startLeaveDate = this.formatDate(this.finalDateFrom);
    this.EndLeaveDate = this.formatDate(this.finalDateTo);

  }
  ngOnInit() {
    //this.loadingBar.start();
    this.getWhosOnLeaveList();
    this.showHide = false;
    this.leavestatus();


    this.isToday = true;
    this.currentMonth = (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();
  }


  expandwhoseonleave() {
    $('#employee_status').toggleClass('col-lg-12 col-md-12 col-12 h-100 w-100');
    $(".row-2").toggleClass('col-xl-12');
    $('.hide__elements, #leavestatus').toggleClass('d-none');
    $('#employee_status .expand').toggleClass('d-none');
    $('#employee_status .compress').toggleClass('d-none');
    this.showdashwhoseonleavepagination = !this.showdashwhoseonleavepagination;
    this.selectedItemsPerPage = 10;
    this.currentPage = 1;
  }
  onexpand() {
    this.expandwhoseonleave();
    // $('.filterToday').toggleClass('active');
    this.leavestatus();
  }
  leavestatus() {
    this.selectedItemsPerPage = 10;
    $('.filterToday').addClass('active');
    $('.filterWeek').removeClass('active');
    $('.filterMonth').removeClass('active');

    this.showHide = false;

    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    let todayDate = new Date()

    this.fromdate = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
    this.todate = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();

    if (this.employeeStatusType == 'Leave') {

      let payloadReqObj = {
        "transactionType":"LEA","status":"APPROVED",
        "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = this.whoISonLeaveExpansionURL
    } else if (this.employeeStatusType == 'LateComers') {

      let payloadReqObj = {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = UrlConstant.getLateComersByRange


    } else if (this.employeeStatusType == 'OverTimeWorker') {

      let payloadReqObj = {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = UrlConstant.getOverTimeWorkersByRange

    }
    this.loadingBar.start()
    return this.genericservice.post(this.commonUrl + "?fromDate=" + this.fromdate + '&toDate=' + this.todate + "&start=" + this.start + '&limit=' + this.limit, this.commonPayload, false).subscribe(response => {

      this.isData = true;
      this.leavestausList = response.data;
      this.loadingBar.complete()

      this.totalCount = response.totalResult;
      this.findItemsPerPage();

    }, error => {
      console.log(error)
    })

  }
  findItemsPerPage() {
    this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);
  }
  goToPageNo(event) {
    console.log('on page change')
  }
  goToNext(): void {
    this.currentPage++;
    this.start = this.start + this.limit;
    this.limit = this.selectedItemsPerPage;
    this.refreshPagination();
  }
  goToPrev(): void {
    this.currentPage--;
    this.start = this.start - this.limit;
    this.limit = this.selectedItemsPerPage;
    this.refreshPagination();
  }
  changeItemPerPage(event) {

    // tslint:disable-next-line:radix
    this.selectedItemsPerPage = parseInt(event);
    this.currentPage = 1;
    this.refreshList();

  }
  refreshList() {
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    if (this.employeeStatusType == 'Leave') {

      let payloadReqObj = {
        "transactionType":"LEA","status":"APPROVED",
        "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = this.whoISonLeaveExpansionURL
    } else if (this.employeeStatusType == 'LateComers') {

      let payloadReqObj = {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = UrlConstant.getLateComersByRange


    } else if (this.employeeStatusType == 'OverTimeWorker') {

      let payloadReqObj = {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = UrlConstant.getOverTimeWorkersByRange

    }
    this.loadingBar.start();
    return this.genericservice.post(this.commonUrl + "?fromDate=" + this.fromdate + '&toDate=' + this.todate + "&start=" + this.start + '&limit=' + this.limit, this.commonPayload, false).subscribe(response => {

      this.isData = true;
      this.leavestausList = response.data;
      this.loadingBar.complete()
      this.totalCount = response.totalResult;
      this.findItemsPerPage();

    }
    );
  }
  refreshPagination() {
    if (this.employeeStatusType == 'Leave') {

      let payloadReqObj = {
        "transactionType":"LEA","status":"APPROVED",
        "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = this.whoISonLeaveExpansionURL
    } else if (this.employeeStatusType == 'LateComers') {

      let payloadReqObj = {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = UrlConstant.getLateComersByRange


    } else if (this.employeeStatusType == 'OverTimeWorker') {

      let payloadReqObj = {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = UrlConstant.getOverTimeWorkersByRange

    }
    this.loadingBar.start();

    return this.genericservice.post(this.commonUrl + '?fromDate=' + this.fromdate +
      '&toDate=' + this.todate + '&start=' + this.start + '&limit=' + this.limit,
      this.commonPayload, false).subscribe(response => {

        this.isData = true;
        this.leavestausList = response.data;
        this.loadingBar.complete()
        this.totalCount = response.totalResult;
        this.findItemsPerPage();

      }
      );
  }
  getWhosOnLeaveList() {
    // var payLoad = {
    //   "gemsEmployeeMaster":
    //   {
    //     "gemsOrganisation": {
    //       "gemsOrgId": this.encryptdecryptlocalstorage
    //         .getLocalStorage('organizationId')
    //     }, "gemsDepartment": null,
    //   }
    // }
    var payLoad = {
      "transactionType":"LEA","status":"APPROVED",
      "organisationId": this.encryptdecryptlocalstorage
        .getLocalStorage('organizationId')
    }
    this.genericservice.
      post(this.getYesterdayWhosOnLeaveURL, payLoad, false).subscribe(response => {
        this.totalLeaveList = response.data;
        if (response) {
          this.getWhosOnLateList();
        }
      }, error => {
        this.getWhosOnLateList();
      });
  }


  getWhosOnLateList() {
    // var payLoad = {
    //   "gemsEmployeeMaster":
    //   {
    //     "gemsOrganisation": {
    //       "gemsOrgId": this.encryptdecryptlocalstorage
    //         .getLocalStorage('organizationId')
    //     }, "gemsDepartment": null
    //   }
    // }
    var payLoad = {
      "gemsOrgId": this.encryptdecryptlocalstorage
        .getLocalStorage('organizationId')
    }

    this.genericservice.post(this.getYesterdayWhosOnLate, payLoad, false).subscribe(response => {
      this.totalLateList = response.data

      if (response) {
        this.getOverTimeWorkers();
      }
      var objKey = Object.keys(response.data);
      var objValue = Object.values(response.data);
      let count = 0;
      var arr = [];
      for (let key of objKey) {
        let obj = {
          'key': key,
          'value': objValue[count]
        };
        arr.push(obj);
        count++;
      }
      this.totalLateList = arr;
      console.log(this.totalLateList)
    }, error => {
      this.getOverTimeWorkers();
    });
  }

  getOverTimeWorkers() {

    var payLoad = {
      "gemsOrgId": this.encryptdecryptlocalstorage
        .getLocalStorage('organizationId')
    }
    this.genericservice.
      post(this.getOverTimeWorkersCountURL, payLoad, false).subscribe(response => {
        var objKey = Object.keys(response.data);
        var objValue = Object.values(response.data);
        let count = 0;
        var arr = [];
        for (let key of objKey) {
          let obj = {
            'key': key,
            'value': objValue[count]
          };
          arr.push(obj);
          count++;
        }
        this.totalOverTimeWorkersList = arr;
      }, error => {

      });
  }
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.finalDateFrom = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.finalDateTo = this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day;

    } else {
      this.toDate = null;
      this.fromDate = date;
      this.finalDateFrom = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day;
      this.finalDateTo = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day;

    }
    this.startLeaveDate = this.formatDate(this.finalDateFrom);
    this.EndLeaveDate = this.formatDate(this.finalDateTo);
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }
  onSelectedDate(e) {
    var date = e.year + '-' + e.month + '-' + e.day
  }
  setValues() {
    this.showHide = false;
    this.selectedItemsPerPage = 10;
    this.calendarApplied(this.finalDateFrom, this.finalDateTo);
  }
  resetFormInDatePicker() {
    this.fromDate = this.today;
    this.toDate = this.today;
    this.finalDateFrom = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day;
    this.finalDateTo = this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day;
    this.startLeaveDate = this.formatDate(this.finalDateFrom);
    this.EndLeaveDate = this.formatDate(this.finalDateTo);
  }
  formatDate(paramdate) {
    var date = new Date(paramdate);
    var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY',
      'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var day = date.getDate();
    var year = date.getFullYear();
    var month = months[date.getMonth()];
    return day + " " + month + " " + year;
  }

  //DaterangePicker ends
  selectedDate(value: any, datepicker?: any) {

    this.FromDate = value.start.format('YYYY-MM-DD');
    this.fromdate = this.FromDate;

    this.ToDate = value.end.format('YYYY-MM-DD');
    this.todate = this.ToDate;


  }
  public calendarCanceled(e: any) {

  }
  public calendarApplied(fromdate, todate) {
    $('.filterWeek').addClass('active');
    $('.filterToday').removeClass('active');
    $('.filterMonth').removeClass('active');


    this.fromdate = fromdate;
    this.todate = todate;

    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    if (this.employeeStatusType == 'Leave') {

      let payloadReqObj = {
        "transactionType":"LEA","status":"APPROVED",
        "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = this.whoISonLeaveExpansionURL
    } else if (this.employeeStatusType == 'LateComers') {

      let payloadReqObj = {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }

      this.commonPayload = payloadReqObj
      this.commonUrl = UrlConstant.getLateComersByRange


    } else if (this.employeeStatusType == 'OverTimeWorker') {

      let payloadReqObj = {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = UrlConstant.getOverTimeWorkersByRange

    }
    this.loadingBar.start();
    return this.genericservice.post(this.commonUrl + "?fromDate=" + this.fromdate + '&toDate=' + this.todate + "&start=" + this.start + '&limit=' + this.limit, this.commonPayload, false).subscribe(response => {
          
      this.isData = true;
      this.leavestausList = response.data;
      this.loadingBar.complete()
      this.currentPage = 1;
      this.totalCount = response.totalResult;
      this.findItemsPerPage();
    }

    )
  }

  monthclick() {
    this.selectedItemsPerPage = 10;
    $('.filterMonth').addClass('active');
    $('.filterToday').removeClass('active');
    $('.filterWeek').removeClass('active');
    this.showHide = true;
    this.index = 0;
    this.addMonth();
  }
  nextmonths() {

    this.currentPage = 1;
    this.addMonth();
  }
  addMonth() {
    // let curDate = new Date();
    this.index++;
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = 0;
    const latestDate = new Date(year, month, day);
    var firstDay = new Date(latestDate.getFullYear(), (latestDate.getMonth() + 1) + this.index - 1, 1);
    var lastDay = new Date(latestDate.getFullYear(), latestDate.getMonth() + this.index + 1, 0);
    const formattedMonth = this.monthsList[firstDay.getMonth()];
    this.currentMonth = formattedMonth + '-' + firstDay.getFullYear();
    this.firstDays = this.datepipe.transform(firstDay, 'yyyy-MM-dd');
    this.lastDays = this.datepipe.transform(lastDay, 'yyyy-MM-dd');
    this.fromdate = this.firstDays;
    this.todate = this.lastDays;
    // this.newDate = new Date(curDate.setMonth(curDate.getMonth() + this.index));
    // this.currentMonth = curDate.getMonth() + '-' + curDate.getFullYear();
    // // this.Nextmonths = this.currentMonth;
    // // this.Nextmonths = new Date();
    // // var firstDay = new Date(this.Nextmonths.getFullYear(), this.Nextmonths.getMonth(), 1);
    // // var lastDay = new Date(this.Nextmonths.getFullYear(), this.Nextmonths.getMonth() + 1, 0);
    // const firstDay = new Date(this.newDate.getFullYear(), this.newDate.getMonth()-1, 1);
    // const lastDay = new Date(this.newDate.getFullYear(), this.newDate.getMonth(), 0);
    // this.firstDays = this.datepipe.transform(firstDay, 'yyyy-MM-dd');
    // this.lastDays = this.datepipe.transform(lastDay, 'yyyy-MM-dd');


    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    if (this.employeeStatusType == 'Leave') {

      let payloadReqObj = {
        "transactionType":"LEA","status":"APPROVED",
        "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = this.whoISonLeaveExpansionURL
    } else if (this.employeeStatusType == 'LateComers') {

      let payloadReqObj = {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = UrlConstant.getLateComersByRange


    } else if (this.employeeStatusType == 'OverTimeWorker') {

      let payloadReqObj = {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = UrlConstant.getOverTimeWorkersByRange

    }
    this.loadingBar.start();
    return this.genericservice.post(this.commonUrl + "?fromDate=" + this.firstDays + '&toDate=' + this.lastDays + "&start=" + this.start + '&limit=' + this.limit, this.commonPayload, false).subscribe(response => {

      this.isData = true;
      this.leavestausList = response.data;
      this.loadingBar.complete()
      this.totalCount = response.totalResult;
      this.findItemsPerPage();

    }
    )
  }
  decreaseMonth() {
    this.currentPage = 1;
    this.index--;

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = 0;
    const latestDate = new Date(year, month, day);
    var firstDay = new Date(latestDate.getFullYear(), (latestDate.getMonth() + 1) + this.index - 1, 1);
    var lastDay = new Date(latestDate.getFullYear(), latestDate.getMonth() + this.index + 1, 0);
    const formattedMonth = this.monthsList[firstDay.getMonth()];
    this.currentMonth = formattedMonth + '-' + firstDay.getFullYear();
    this.firstDays = this.datepipe.transform(firstDay, 'yyyy-MM-dd');
    this.lastDays = this.datepipe.transform(lastDay, 'yyyy-MM-dd');
    this.fromdate = this.firstDays;
    this.todate = this.lastDays;


    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    if (this.employeeStatusType == 'Leave') {

      let payloadReqObj = {
        "transactionType":"LEA","status":"APPROVED",
        "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = this.whoISonLeaveExpansionURL
    } else if (this.employeeStatusType == 'LateComers') {

      let payloadReqObj = {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = UrlConstant.getLateComersByRange


    } else if (this.employeeStatusType == 'OverTimeWorker') {

      let payloadReqObj = {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }
      this.commonPayload = payloadReqObj
      this.commonUrl = UrlConstant.getOverTimeWorkersByRange

    }
    this.loadingBar.start();

    return this.genericservice.post(this.commonUrl + '?fromDate=' + this.firstDays + '&toDate=' + this.lastDays + '&start=' + this.start + '&limit=' + this.limit, this.commonPayload, false).subscribe(response => {

      this.isData = true;
      this.leavestausList = response.data;
      this.loadingBar.complete()
      this.totalCount = response.totalResult;
      this.findItemsPerPage();

    }
    );
  }
  week() {
    this.showHide = false;
    this.selectedItemsPerPage = 10;
  }


  onSelectType(e) {

    this.employeeStatusType = e.target.value
    this.leavestatus()


  }

  Unix_timestamp(t) {
    var dt = new Date(t)
    var hr = dt.getHours()
    var m = '0' + dt.getMinutes()
    var time = hr + ':' + m

    // moment(time).format('HH:mm')

    if (hr < 12) {
      time = hr + ':' + m.substr(-2) + 'AM'
    } else if (hr == 12) {
      time = hr + ':' + m.substr(-2) + 'PM'
    } else {
      time = hr - 12 + ':' + m.substr(-2) + 'PM'
    }
    return time
  }
  getTimeDifference(start, end) {
    var start_date = moment(start);
    var end_date = moment(end);

    var duration = moment.duration(end_date.diff(start_date));
    var time = duration.get("hours") + " hrs " + duration.get("minutes") + "min"


    return time

  }
  //  Duration For Leave Types 
  duration(responseObject) {
    if (responseObject.leaveTypeCode == "PER") {
      return responseObject.permissionDuration + " hrs";
    } else {
      var noOfDays = responseObject.permissionDuration;
      var noOfWeek = Math.trunc(noOfDays / 7);
      var remainder = noOfDays % 7;

      var days;
      if (noOfWeek >= 1) {
        if (remainder > 0) {
          days = remainder == 1 ? remainder + " day" : remainder + " days";
        } else {
          days = "";
        }

        return noOfWeek > 1 ? noOfWeek + " weeks " + days : noOfWeek + " week " + days;

      } else if (responseObject.leaveDescription != "Permission" && noOfDays > 1) {
        return noOfDays + " days"

      } else {
        return noOfDays + " day";
      }
    }
  }

}

