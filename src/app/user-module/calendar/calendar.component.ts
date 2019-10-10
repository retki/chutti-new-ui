import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, ViewEncapsulation, OnInit, NgZone, Input } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarMonthViewDay } from 'angular-calendar';
import { RequestOptions, Headers, Http } from '@angular/http';
import { error } from 'selenium-webdriver';
import { HttpClient } from '@angular/common/http';
// import { EmployeeLeaveMaster } from '../../model/employeeleavemaster.model';
// import { GemsHolidayMaster } from '../../holiday/holidaylist/holidaylist.component';
import { WeekView } from 'calendar-utils';
// import { EmployeeMasterService } from '../../services/employeemaster.service';
// import { LeaveService } from '../../services/leave.Service';
// import { LeaveMaster } from '../../leave/history/history.component';
// import { HttpClientInterceptor } from '../../services/httpClientInterceptor';
import { GoogleAuthService, GoogleApiService } from 'ng-gapi';
// import { Globals } from '../../commonutil/globals';
import { UrlConstant } from '../../services/urlConstant';
import { Genericservice } from '../../services/genericservices';
import { EncryptDecryptLocalStorageService } from '../../services/encrypt-decrypt-localstorage.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { DataSharingService } from 'src/app/services/dataSharing.service';
import { EncryptDecryptService } from 'src/app/services/encrypt-decrypt.service';
declare const $: any;
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#1e90ff'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
  green: {
    primary: '#268121',
    secondary: '#268121'
  }
};
declare const gapi: any;

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [],
  templateUrl: './calendar.component.html',
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit {
  public holidaysUrl = UrlConstant.holidays;
  public allEventsUrl = UrlConstant.allEvents;
  public saveEventurl = UrlConstant.saveEvent;
  public teamCalendarUrl = UrlConstant.saveEvent;
  public googleSyncUrlapi = UrlConstant.googleSyncUrl;

  public myCalendarUrl = UrlConstant.myCalendar;

  accessToken: any;
  eventList: any;

  isLoadingResults: boolean;
  // @ViewChild('modalContent') modalContent: TemplateRef<any>;
  view: string = 'month';
  viewDate: Date = new Date();
  isTeamCalendar: boolean;
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  holidayList: any[];
  eventdata: any[] = [];
  events: CalendarEvent[];
  leaveMastersList: any[];
  teamleaveMastersList: any[];
  // actions: CalendarEventAction[] = [
  //   {
  //     label: '<i class="fa fa-fw fa-pencil"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.handleEvent('Edited', event);
  //     }
  //   },
  //   {
  //     label: '<i class="fa fa-fw fa-times"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.events = this.events.filter(iEvent => iEvent !== event);
  //       this.handleEvent('Deleted', event);
  //     }
  //   }
  // ];

  refresh: Subject<any> = new Subject();




  //  data = [
  //     {
  //       start: subDays(startOfDay(new Date()), 0),
  //       end: addDays(new Date(),0),
  //       title: 'test event 1',
  //       color: colors.red,
  //     //  actions: this.actions
  //     }
  // ,{
  //   start: subDays(startOfDay(new Date()), 1),
  //   end: addDays(new Date(), 1),
  //   title: 'test event 2',
  //   color: colors.red,
  //   actions: this.actions
  // }
  ///   ]



  // events: CalendarEvent[] = [
  //   {
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: 'A 3 day event',
  //     color: colors.red,
  //     actions: this.actions
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'An event with no end date',
  //     color: colors.yellow,
  //     actions: this.actions
  //   },
  //   {
  //     start: subDays(endOfMonth(new Date()), 3),
  //     end: addDays(endOfMonth(new Date()), 3),
  //     title: 'A long event that spans 2 months',
  //     color: colors.blue
  //   },
  //   {
  //     start: addHours(startOfDay(new Date()), 2),
  //     end: new Date(),
  //     title: 'A draggable and resizable event',
  //     color: colors.yellow,
  //     actions: this.actions,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   }
  // ];

  activeDayIsOpen: boolean;
  PreLoader: boolean = false;
  public auth2: any; 
  successMessage: string = '';

  constructor(private modal: NgbModal, private http: Http, private httpClient: HttpClient,
    private urlconstant: UrlConstant, private genericservice: Genericservice, private googleAuth: GoogleAuthService,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private loadingBar: LoadingBarService,
    private dataSharingService: DataSharingService, private encryptdecryptsessionStorage: EncryptDecryptService, private ngZone: NgZone, private gapiService: GoogleApiService) {

    this.isTeamCalendar = false;
    this.googleAuth.getAuth()
      .subscribe((auth) => {
      });
  }

  ngOnInit() {

    this.eventdata = [];
    this.displayEvent();
    // this.events = this.eventdata;

  }

  // showNotification(message: string, type: string) {
  //   this.globals.showNotification(message, type)
  // }


  displayEvent() {
    this.loadingBar.start();
    this.isLoadingResults = true;
    this.isTeamCalendar = false;
    this.eventdata = [];
    this.events = [];

    let obj = {
      "createdBy": {
        "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),

      }

    };

    return this.genericservice.post(this.myCalendarUrl, obj, false).subscribe(leaveMastersListData => {

      this.leaveMastersList = leaveMastersListData.data;
      console.log(this.leaveMastersList)
      for (let i = 0; i < this.leaveMastersList.length; i++) {
        let sdate = this.leaveMastersList[i].fromDate;
        let edate = this.leaveMastersList[i].toDate;

        let listEvent = {
          start: subDays(startOfDay(new Date(sdate)), 0),
          end: addDays(new Date(edate), 0),
          title: 'Leave Type: <b>' + this.leaveMastersList[i].leaveCode + '</b> ' + ' - Status:  <b>' + this.leaveMastersList[i].status + '</b>',
          summary: this.leaveMastersList[i].reasonForLeave,

          color: colors.blue,
        }
        this.eventdata.push(listEvent);

        if (i == this.leaveMastersList.length - 1) {
          document.getElementById('triggerEvent').click();
        }

      }
      document.getElementById('triggerEvent').click();
      this.syncHolidayList();
      this.loadingBar.complete();

    });

  }

  displayTeamEvent() {
    this.loadingBar.start();
    this.isLoadingResults = true;
    this.isTeamCalendar = true;
    this.events = [];
    this.eventdata = [];
    document.getElementById('triggerEvent').click();
    let obj = {
      "createdBy": {
        "currentReportingTo": {
          "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
        }
      }
    }

    return this.genericservice.post(this.myCalendarUrl, obj, false).subscribe(leaveMastersListData => {
      // return this.httpClient.post<EmployeeLeaveMaster[]>(Ur, obj).subscribe(leaveMastersListData => {
      this.teamleaveMastersList = leaveMastersListData.data;
      if (this.teamleaveMastersList != null) {
        for (let i = 0; i < this.teamleaveMastersList.length; i++) {
          let sdate = this.teamleaveMastersList[i].fromDate;
          let edate = this.teamleaveMastersList[i].toDate;
          let listEvent = {
            start: subDays(startOfDay(new Date(sdate)), 0),
            end: addDays(new Date(edate), 0),
            title: ' Name: <b>' + this.teamleaveMastersList[i].gemsEmplyeeLeaveSummary.gemsEmployeeMaster.employeeFirstName + '</b> - Leave Type: <b>' + this.teamleaveMastersList[i].leaveCode + '</b> ' + ' - Status:  <b>' + this.teamleaveMastersList[i].status + '</b>',
            summary: this.teamleaveMastersList[i].reason,

            color: colors.blue,
          }
          this.eventdata.push(listEvent);


        }

      }

      this.events = this.eventdata;
      this.isLoadingResults = false;

      this.loadingBar.complete();
    });
  }



  //   displayEvent(){
  //     let token =localStorage.getItem('accessToken');
  //     if(token != undefined){
  //     let myHeaders = new Headers();
  //     myHeaders.append('Content-Type', 'application/json');
  //     let myParams = new URLSearchParams();
  //     myHeaders.append('authorization', 'Bearer ' + localStorage.getItem('accessToken'));
  //     let options = new RequestOptions({ headers: myHeaders });
  //     this.http.get('https://www.googleapis.com/calendar/v3/calendars/primary/events', options).subscribe(data =>
  //     {
  //       this.syncEvent(data);
  //     },error=>{
  //       //this.getUserEvent();
  //       this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //       .then((userData) => {
  //          this.userCalendar(userData);

  //         });
  //     }
  //   ) 
  // }else{
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //       .then((userData) => {
  //          this.userCalendar(userData);
  //         });
  // }

  //   }

  //   userCalendar(res){

  //     let myHeaders = new Headers();
  //     myHeaders.append('Content-Type', 'application/json');
  //     let myParams = new URLSearchParams();
  //     myHeaders.append('authorization', 'Bearer ' + res.authToken);
  //     let options = new RequestOptions({ headers: myHeaders });
  //     this.http.get('https://www.googleapis.com/calendar/v3/calendars/primary/events', options).subscribe(data =>
  //     {
  //       this.syncEvent(data);
  //     });
  //   }
  //   syncEvent(data){
  //   let eventList = JSON.parse(data._body);
  //     for(let i=0;i<eventList.items.length;i++){
  //       if( eventList.items[i].status != 'cancelled'){
  //       let sdate = eventList.items[i].start.dateTime != undefined? eventList.items[i].start.dateTime.substring(0,10):eventList.items[i].start.date;
  //       let edate = eventList.items[i].end.dateTime != undefined?eventList.items[i].end.dateTime.substring(0,10):eventList.items[i].end.date;
  //       let listEvent = {
  //         start: subDays(startOfDay(new Date(sdate)), 0),
  //         end: addDays(new Date(edate),0),
  //         title: eventList.items[i].summary,
  //         color: colors.blue,
  //       }
  //       this.eventdata.push(listEvent);
  //     }
  //     }
  //     this.syncHolidayList();
  //   }



  syncHolidayList() {
    const holidayObj = {
      'gemsOrganisation': {
        'gemsOrgId': this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      }
    };
    return this.genericservice.post(this.holidaysUrl + '?isUpcomingHolidays=false', holidayObj, false)
      .subscribe(holidaylist => {
        for (let i = 0; i < holidaylist.data.length; i++) {
          let sdate = holidaylist.data[i].gemsHolidayOn;
          let edate = holidaylist.data[i].gemsHolidayOn;
          let listEvent = {
            start: subDays(startOfDay(new Date(sdate)), 0),
            end: addDays(new Date(edate), 0),
            title: holidaylist.data[i].gemsHolidayName,
            color: colors.green,
          }
          this.eventdata.push(listEvent);
        }
        this.events = this.eventdata;
        document.getElementById('triggerEvent').click();
        this.isLoadingResults = false;
      })



  }


  ngAfterViewInit() {
    this.events = this.eventdata;
    this.signInWithGoogle(false);
  }



  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  // eventTimesChanged({
  //     event,
  //   newStart,
  //   newEnd
  //   }: CalendarEventTimesChangedEvent): void {
  //   event.start = newStart;
  //   event.end = newEnd;
  //   this.handleEvent('Dropped or resized', event);
  //   this.refresh.next();
  // }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }



  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if (day.date.getDay() === 0 || day.date.getDay() === 6) {
        day.cssClass = 'odd-cell';
      }
    });
  }





  getDateByTimes(time: any): any {
    var date = new Date(time);
    var dateFormate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return dateFormate;
  }


  signInWithGoogle(isNotify) {

    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    //   .then((userData) => {
    //     return this.sociallogin(userData);
    //   });
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '588196439072-a5i7ln42re6r0uu9a3588fqagt0o5t82.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        redirect_uri: 'http://qa-chutti.cloudnowtech.net',
        scope: 'profile email https://www.googleapis.com/auth/calendar.events'
      });
      // localStorage.setItem('auth2',this.auth2);

      // this.PreLoader = true;
      if(this.auth2 != null){
      this.sociallogin(document.getElementById('googleBtn'), isNotify);
      }
      // this.PreLoader = false;
      // this.dataSharingService.successMessage('Events synced with calendar successfully');

    });
  }

  openInfo() {
    document.getElementById('calendarLabelDetails').classList.add('open');
  }
  closeInfo() {
    document.getElementById('calendarLabelDetails').classList.remove('open');
  }

  sociallogin(element, isNotify) {
    // this.auth2 = localStorage.getItem('auth2');
    this.auth2.attachClickHandler(element, {},
      (userData) => {
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
                    'end': { 'date': this.getToByTime(this.eventList[i].gemsEmployeeLeaveMaster.toDate) },
                    'start': { 'date': this.getDateByTime(this.eventList[i].gemsEmployeeLeaveMaster.fromDate) },
                    'summary': this.eventList[i].gemsEmployeeLeaveMaster.leaveCode + ' - ' + this.eventList[i].gemsEmployeeLeaveMaster.status,
                    'description': this.eventList[i].gemsEmployeeLeaveMaster.reason
                  }
                  let email = this.encryptdecryptlocalstorage.getLocalStorage('userName');
                  //  let email = localStorage.getItem('email');
                  this.genericservice.saveCalendarEvents(this.googleSyncUrlapi, event).subscribe(response => {

                    let eventId = this.saveEventId(response);

                    let eventObj = {
                      'calenderEventId': this.eventList[i].calenderEventId,
                      'gemsEmployeeLeaveMaster': this.eventList[i].gemsEmployeeLeaveMaster,
                      'eventId': eventId,
                      'flag': 1,
                      'createdBy': this.eventList[i].gemsEmployeeMasterId
                    }
                    this.genericservice.post(this.saveEventurl, eventObj, false).subscribe(response => {

                    })

                  })
                }
                else if (this.eventList[i].flag == 1) {
                  let event = {
                    'end': { 'date': this.getToByTime(this.eventList[i].gemsEmployeeLeaveMaster.toDate) },
                    'start': { 'date': this.getDateByTime(this.eventList[i].gemsEmployeeLeaveMaster.fromDate) },
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
            // if (isNotify) {
            
            // this.successMessage = "Events synced with calendar successfully";
            this.dataSharingService.successMessage('Events synced with calendar successfully');
            // }
            // this.showNotification('Yours leaves has been updated successfully', 'success');
            // alert("events synced with calendar successfully");
          });

        } else {
          this.dataSharingService.failureMessage('Error,Cannot sync with this account. Please select the logged in account to sync your inforamtion!');
        }
      });
  }


  saveEventId(data) {
    // let EventCode = JSON.parse(data._body).htmlLink.split("eid=")[1]
    let EventCode = data.htmlLink.split("eid=")[1]
    let Event = this.base64ToString(EventCode);
    let eventId = Event[0];
    return eventId;
  }


  base64ToString(EventCode) {
    var Base64 = {
      _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      encode: function (e) {
        var t = ""; var n, r, i, s, o, u, a; var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
          n = e.charCodeAt(f++);
          r = e.charCodeAt(f++);
          i = e.charCodeAt(f++);
          s = n >> 2; o = (n & 3) << 4 | r >> 4;
          u = (r & 15) << 2 | i >> 6;
          a = i & 63;
          if (isNaN(r)) {
            u = a = 64
          } else if (isNaN(i)) {
            a = 64
          }
          t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
      }, decode: function (e) {
        var t = "";
        var n, r, i; var s, o, u, a;
        var f = 0; e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
          s = this._keyStr.indexOf(e.charAt(f++));
          o = this._keyStr.indexOf(e.charAt(f++));
          u = this._keyStr.indexOf(e.charAt(f++));
          a = this._keyStr.indexOf(e.charAt(f++));
          n = s << 2 | o >> 4;
          r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a;
          t = t + String.fromCharCode(n);
          if (u != 64) {
            t = t + String.fromCharCode(r)
          }
          if (a != 64) {
            t = t + String.fromCharCode(i)
          }
        }
        t = Base64._utf8_decode(t);
        return t
      }, _utf8_encode: function (e) {
        e = e.replace(/rn/g, "n"); var t = "";
        for (var n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          if (r < 128) {
            t += String.fromCharCode(r)
          } else if (r > 127 && r < 2048) {
            t += String.fromCharCode(r >> 6 | 192);
            t += String.fromCharCode(r & 63 | 128)
          } else {
            t += String.fromCharCode(r >> 12 | 224);
            t += String.fromCharCode(r >> 6 & 63 | 128);
            t += String.fromCharCode(r & 63 | 128)
          }
        } return t
      }, _utf8_decode: function (e) {
        var t = "";
        var n = 0;
        var r = 0, c1 = 0, c2 = 0, c3 = 0;
        while (n < e.length) {
          r = e.charCodeAt(n);
          if (r < 128) {
            t += String.fromCharCode(r); n++
          } else if (r > 191 && r < 224) {
            c2 = e.charCodeAt(n + 1);
            t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2
          } else {
            c2 = e.charCodeAt(n + 1);
            c3 = e.charCodeAt(n + 2);
            t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63)
              ; n += 3
          }
        }
        return t
      }
    }

    var decodedString = Base64.decode(EventCode);
    return decodedString.split(" ");

  }


  getToByTime(time: any): any {
    this.loadingBar.start();

    var date = new Date(time);
    let date1 = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateFormate;
    if (date1 == 31) {
      if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) {
        return dateFormate = date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + '01';
      }
      if (month == 12) {
        return dateFormate = date.getFullYear() + 1 + "-" + "01" + "-" + '01';
      }
    }
    if (date1 == 30) {
      if (month == 4 || month == 6 || month == 9 || month == 11) {
        return dateFormate = date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + '01';
      }
    }
    if (year % 4 == 0) {
      if (month == 2) {
        if (date1 == 29) {
          return dateFormate = date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + '01';
        }
      }
    } else {
      if (month == 2) {
        if (date1 == 28) {
          return dateFormate = date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + '01';

        }
      }
    }

    return dateFormate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1);


    //   return dateFormate;

  }

  getDateByTime(time: any): any {

    var date = new Date(time);
    var dateFormate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return dateFormate;

  }


  showFailNotification(message: string) {
    // $.notify(
    //   {
    //     icon: "notifications",
    //     message: message
    //   }, {
    //     type: 'danger',
    //     timer: 3000,
    //     placement: {
    //       from: 'top',
    //       align: 'right'
    //     }
    //   });
    this.dataSharingService.failureMessage(message);
  }




}