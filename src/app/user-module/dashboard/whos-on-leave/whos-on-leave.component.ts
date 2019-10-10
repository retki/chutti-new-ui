import { Component, OnInit, Input } from '@angular/core';
import { Genericservice } from '../../../services/genericservices';
import { UrlConstant } from '../../../services/urlConstant';
import { EncryptDecryptLocalStorageService } from '../../../services/encrypt-decrypt-localstorage.service';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import { DatePipe } from '@angular/common';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { CssServices } from '../../../services/css.service';


@Component({
  selector: 'app-whos-on-leave',
  templateUrl: './whos-on-leave.component.html',
  styleUrls: ['./whos-on-leave.component.scss']
})
export class WhosOnLeaveComponent implements OnInit {
  public whoIsOnUrl = UrlConstant.whoisonleaveApi;
  whoisonLeaveList: any = [];
  nextOfNextWeekList: any=[];
  nextWeekList: any=[];
  todayList: any=[];
  thisweekList: any=[];
  //expansion
  @Input() dashBoardPaginationView: boolean = true;
  @Input('showdashwhoseonleavepagination') showdashwhoseonleavepagination: boolean;
  public whoISonLeaveExpansionURL = UrlConstant.whoISonLeaveExpansionAPI;
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
  selectedItemsPerPage = 3;
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
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
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
  
  constructor(private urlconstant: UrlConstant, private genericservice: Genericservice,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private daterangepickerOptions: DaterangepickerConfig, public datepipe: DatePipe,calendar: NgbCalendar,private cssservice:CssServices) {
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
    console.log(this.showdashwhoseonleavepagination);
    this.cssservice.isExpandFlagObs.subscribe(data=>{
      console.log('css notification')
      this.showdashwhoseonleavepagination=data
      if(data==true){

        console.log('css notification trigger.....')
        if($('.nav-item.active.test').length == 0) {} else {
          console.log('css notification trigger.....')
        this.expandwhoseonleave(true);
        $('.nav-item.active').removeClass('test');
        }
      }

    })
  }

  ngOnInit() {
    this.whoisonLeave();
    this.leavestatus();
    // this.diffBtwDays();
    this.showHide = false;
    this.isToday = true;
    this.currentMonth = (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();
    // this.addMonth(0);
  }
  //Week DateRangePicker Options
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
  onSelectedDate(e){
    var date = e.year+'-'+e.month+'-'+e.day    
}
setValues() {
    this.showHide = false;
    this.selectedItemsPerPage = 10;
    this.calendarApplied(this.finalDateFrom , this.finalDateTo);
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
    console.log("in RangePicker", value);
    console.log(value);
    this.FromDate = value.start.format('YYYY-MM-DD');
    this.fromdate = this.FromDate;
    console.log(this.FromDate);
    this.ToDate = value.end.format('YYYY-MM-DD');
    this.todate = this.ToDate;
    console.log(this.ToDate);

  }
  whoisonLeave() {

    let payloadReqObj = {
      transactionType: "LEA",
      status: "APPROVED",
      organisationId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
    };

    this.genericservice.post(this.whoIsOnUrl, payloadReqObj, false).subscribe(response => {
      if ( response.status.success === 'Success') {
      this.isData = true;
      this.whoisonLeaveList = response.data;
      this.nextOfNextWeekList = this.modifiedList(response.data.nextOfNextWeek);
      this.nextWeekList = this.modifiedList(response.data.nextWeek);
      this.todayList = this.modifiedList(response.data.today);
      this.thisweekList = this.modifiedList(response.data.thisWeek);
      this.nextOfNextWeekStartDate = this.whoisonLeaveList.nextOfNextWeekDateRange.split('to')[0].trim();
      this.nextOfNextWeekEndDate = this.whoisonLeaveList.nextOfNextWeekDateRange.split('to')[1].trim();
      } else {
        this.isData = false;
      }
    });
  }
  //Today Filter
  leavestatus() {
    this.selectedItemsPerPage = 10;
    $('.filterToday').addClass('active');
    $('.filterWeek').removeClass('active');
    $('.filterMonth').removeClass('active');

    this.showHide = false;
    let payloadReqObj = {
      "transactionType": "LEA",
      "status": "APPROVED",
      "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
    }

    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.fromdate = "";
    this.todate = "";
    return this.genericservice.post(this.whoISonLeaveExpansionURL + "?fromDate=" + this.fromdate + '&toDate=' + this.todate + "&start=" + this.start + '&limit=' + this.limit, payloadReqObj,false).subscribe(response => {
      if(response.status.success === 'Fail') {
        this.isData = false;
      } else {
        this.isData = true;
        this.leavestausList = this.updateList(response);
        this.totalCount = response.totalResult;
        this.findItemsPerPage();
      }
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
    console.log('event printed' + event)
    // tslint:disable-next-line:radix
    this.selectedItemsPerPage = parseInt(event);
    this.currentPage = 1;
    this.refreshList();

  }
  refreshList() {
    let payloadReqObj = {
      transactionType: "LEA",
      status: "APPROVED",
      organisationId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
    };
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.whoISonLeaveExpansionURL + "?fromDate=" + this.fromdate + '&toDate=' + this.todate + "&start=" + this.start + '&limit=' + this.limit, payloadReqObj,false).subscribe(response => {
      if(response.status.success === 'Fail') {
        this.isData = false;
      } else {
      this.isData = true;
      this.leavestausList = this.updateList(response);
      this.totalCount = response.totalResult;
      this.findItemsPerPage();
      }
    }
    );
  }

  public calendarCanceled(e: any) {
    console.log(e);
    // e.event
    // e.picker
  }

  public calendarApplied(fromdate,todate) {
    $('.filterWeek').addClass('active');
    $('.filterToday').removeClass('active');
    $('.filterMonth').removeClass('active');

    console.log(fromdate);
    console.log(todate);
    this.fromdate = fromdate;
    this.todate = todate;
    let payloadReqObj = {
      transactionType: "LEA",
      status: "APPROVED",
      organisationId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
    }
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.whoISonLeaveExpansionURL + "?fromDate=" + this.fromdate + '&toDate=' + this.todate + "&start=" + this.start + '&limit=' + this.limit, payloadReqObj,false).subscribe(response => {
      if(response.status.success === 'Fail') {
        this.isData = false;
      } else {
        this.isData = true;
        this.leavestausList = this.updateList(response);
        this.currentPage = 1;
        this.totalCount = response.totalResult;
        this.findItemsPerPage();
      }
    }
    )
  }
  // month started
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
    console.log(this.currentMonth);
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
    var firstDay = new Date(latestDate.getFullYear(),(latestDate.getMonth()+1)+this.index -1,1);
    var lastDay = new Date(latestDate.getFullYear(),latestDate.getMonth()+this.index+1,0);
    const formattedMonth = this.monthsList[firstDay.getMonth()];
    this.currentMonth = formattedMonth +'-'+firstDay.getFullYear();
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

    let payloadReqObj = {
      transactionType: "LEA",
      status: "APPROVED",
      organisationId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
    }
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.whoISonLeaveExpansionURL + "?fromDate=" + this.firstDays + '&toDate=' + this.lastDays + "&start=" + this.start + '&limit=' + this.limit, payloadReqObj,false).subscribe(response => {
      if(response.status.success === 'Fail') {
      this.isData = false;
      } else {
      this.isData = true;
      this.leavestausList = this.updateList(response);
      this.totalCount = response.totalResult;
      this.findItemsPerPage();
      }
    }
    )
  }
  decreaseMonth() {
    this.currentPage = 1;
    this.index--;
    // var curDate = new Date();
    // this.index--;
    // this.newDate = new Date(curDate.setMonth(curDate.getMonth() + this.index));
    // this.currentMonth = curDate.getMonth() + '-' + curDate.getFullYear();
    // // this.Nextmonths = this.currentMonth;
    // // this.Nextmonths = new Date();
    // var firstDay = new Date(this.newDate.getFullYear(), this.newDate.getMonth() -1, 1);
    // var lastDay = new Date(this.newDate.getFullYear(), this.newDate.getMonth(), 0);
    // this.firstDays = this.datepipe.transform(firstDay, 'yyyy-MM-dd');
    // this.lastDays = this.datepipe.transform(lastDay, 'yyyy-MM-dd');
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = 0;
    const latestDate = new Date(year, month, day);
    var firstDay = new Date(latestDate.getFullYear(),(latestDate.getMonth()+1)+this.index -1,1);
    var lastDay = new Date(latestDate.getFullYear(),latestDate.getMonth()+this.index+1,0);
    const formattedMonth = this.monthsList[firstDay.getMonth()];
    this.currentMonth = formattedMonth +'-'+firstDay.getFullYear();
    this.firstDays = this.datepipe.transform(firstDay, 'yyyy-MM-dd');
    this.lastDays = this.datepipe.transform(lastDay, 'yyyy-MM-dd');
    this.fromdate = this.firstDays;
    this.todate = this.lastDays;
    // var lastDay = new Date(this.newDate.getFullYear(), this.newDate.getMonth(), 0);
    // const newMonth = date.getMonth() + 1;
    // const formattedDate = (newMonth + this.index) + '-' + date.getFullYear();
    // this.currentMonth = formattedDate;



    // date.setMonth(date.getMonth + this.index);
    // date.add(2,'days');
    const payloadReqObj = {
      transactionType: 'LEA',
      status: 'APPROVED',
      organisationId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
    };
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.whoISonLeaveExpansionURL + '?fromDate=' + this.firstDays + '&toDate=' + this.lastDays + '&start=' + this.start + '&limit=' + this.limit, payloadReqObj,false).subscribe(response => {
      if (response.status.success === 'Fail') {
      this.isData = false;
      } else {
      this.isData = true;
      this.leavestausList = this.updateList(response);
      this.totalCount = response.totalResult;
      this.findItemsPerPage();
      }
    }
    );
  }
  week() {
    this.showHide = false;
    this.selectedItemsPerPage = 10;
  }
  //View More Referesh List
  expansionRefresh() {
    // const payloadReqObj = {
    //   transactionType: 'LEA',
    //   status: 'APPROVED',
    //   organisationId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
    // };
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.refreshPagination();
    // return this.genericservice.post(this.whoISonLeaveExpansionURL + '?fromDate=' + this.fromdate + 
    // '&toDate=' + this.todate + '&start=' + this.start + '&limit=' + this.limit,
    //  payloadReqObj, false).subscribe(response => {
    //   if ( response.status.success === 'Fail') {
    //     this.isData = false;
    //   } else {
    //   this.isData = true;
    //   this.leavestausList = response.data;
    //   this.totalCount = response.totalResult;
    //   this.findItemsPerPage();
    //   }
    // }
    // );
  }
  viewMoreDetails(type) {
    this.showHide = false;
    if( type === 'nextOfNextWeek' && this.nextOfNextWeekList.length != '') {
      this.fromdate = this.whoisonLeaveList.nextOfNextWeekDateRange.split('to')[0].trim();
      this.todate = this.whoisonLeaveList.nextOfNextWeekDateRange.split('to')[1].trim();
    }
    if( type === 'nextWeek' && this.nextWeekList.length != '') {
      this.fromdate = this.whoisonLeaveList.nextWeekDateRange.split('to')[0].trim();
      this.todate = this.whoisonLeaveList.nextWeekDateRange.split('to')[1].trim();
    }
    if( type === 'thisWeek' && this.thisweekList.length != '') {
      this.fromdate = this.whoisonLeaveList.thisWeekDateRange.split('to')[0].trim();
      this.todate = this.whoisonLeaveList.thisWeekDateRange.split('to')[1].trim();
    }
    if( type === 'today' && this.todayList.length != '') {
      this.fromdate = "";
      this.todate = "";
    }
    this.showdashwhoseonleavepagination = true;
    this.expandwhoseonleave(false);
    this.expansionRefresh();
    // this.dashBoardComponent.expandwhoseonleave();
  }
  expandwhoseonleave(expand) {
    $('#whosisonleave').toggleClass('col-lg-12 col-md-12 col-12 h-100 w-100');
    //$(".row-2").toggleClass('col-xl-12');
    $('.hide__elements, #leavestatus').toggleClass('d-none');
    $('#whosisonleave .expand').toggleClass('d-none');
    $('#whosisonleave .compress').toggleClass('d-none');
    $('.nav-item.active').toggleClass('test');
    this.showdashwhoseonleavepagination =expand;
    this.selectedItemsPerPage = 10;
    this.currentPage = 1;
  }
  onexpand() {
    this.expandwhoseonleave(false);
    // $('.filterToday').toggleClass('active');
    this.leavestatus();
  }
  diffBtwDays( start, end ) {
    start = '2019-08-01';
    end = '2019-08-31';
    const date1 = new Date(start);
    const date2 = new Date(end);
    console.log(date1);
    console.log(date2);
  }
  //Refresh Pagination
  refreshPagination() {
    const payloadReqObj = {
      transactionType: 'LEA',
      status: 'APPROVED',
      organisationId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
    };
    return this.genericservice.post(this.whoISonLeaveExpansionURL + '?fromDate=' + this.fromdate + 
    '&toDate=' + this.todate + '&start=' + this.start + '&limit=' + this.limit,
     payloadReqObj, false).subscribe(response => {
      if ( response.status.success === 'Fail') {
        this.isData = false;
      } else {
      this.isData = true;
      this.leavestausList = this.updateList(response);
      this.totalCount = response.totalResult;
      this.findItemsPerPage();
      }
    }
    );
  }

  updateList(response) {
    var i;
    var list=[];
    for (i = 0; i < response.data.length; i++) {
      var responseObj = response.data[i];
      responseObj.permissionDuration = this.duration(responseObj);
      list.push(responseObj);
    }
    return list;

  }

  modifiedList(response) {
    var i;
    var list=[];
    for (i = 0; i < response.length; i++) {
      var responseObj = response[i];
      responseObj.permissionDuration = this.duration(responseObj);
      list.push(responseObj);
    }
    return list;

  }

  duration(responseObject) {
    if (responseObject.leaveTypeCode == "PER") {
      responseObject.permissionDuration = responseObject.permissionDuration.toString();
      if (responseObject.permissionDuration.includes('.')){
      let hour = responseObject.permissionDuration.split('.')[0];
      let minutes = responseObject.permissionDuration.split('.')[1];
      if (hour.length > 0) {
        if( minutes.length > 0) {
          if( hour === '0' || hour === 0 ) {
            minutes = minutes.length == 1 ? minutes + '0' +' ' +'mins' : minutes === '01' ?minutes+' '+'min' : minutes;
            return minutes;
          } else {
           hour = hour === '1' || hour === 1 ? hour +' '+'hr' : hour +' '+'hrs'; 
           minutes = minutes.length == 1 ? minutes + '0' +' ' +'mins' : minutes === '01' ?minutes+' '+'min' : minutes;
            return hour + ' '+ minutes;
          }
        }
      }
    } else {
      responseObject.permissionDuration = responseObject.permissionDuration === '1' || responseObject.permissionDuration === 1 ? responseObject.permissionDuration + ' '+ 'hr' : responseObject.permissionDuration +' '+ 'hrs'; 
      return responseObject.permissionDuration;
    }
    
      // hour = hour.length > 1 : hour !== '0' ?  
      // return responseObject.permissionDuration + " hrs";
    } else if(responseObject.leaveTypeCode == "OD" && (responseObject.isForenoon || responseObject.isAfternoon)) {
      responseObject.permissionDuration = responseObject.permissionDuration.toString();
      if (responseObject.permissionDuration.includes('.')){
        let hour = responseObject.permissionDuration.split('.')[0];
        let minutes = responseObject.permissionDuration.split('.')[1];
        if (hour.length > 0) {
          if( minutes.length > 0) {
            if( hour === '0' || hour === 0 ) {
              minutes = minutes.length == 1 ? minutes + '0' +' ' +'mins' : minutes === '01' ?minutes+' '+'min' : minutes + ' '+'mins';
              return minutes;
            } else {
             hour = hour === '1' || hour === 1 ? hour +' '+'hr' : hour +' '+'hrs'; 
             minutes = minutes.length == 1 ? minutes + '0' +' ' +'mins' : minutes === '01' ?minutes+' '+'min' : minutes+ ' '+'mins';
              return hour + ' '+ minutes;
            }
          }
        }
      } else {
        responseObject.permissionDuration = responseObject.permissionDuration === '1' || responseObject.permissionDuration === 1 ? responseObject.permissionDuration + ' '+ 'hr' : responseObject.permissionDuration +' '+ 'hrs'; 
        return responseObject.permissionDuration;
      }
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
        return noOfDays + " days";

      } else {
        return noOfDays + " day";
      }
    }
  }
}
