import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from 'src/app/services/urlConstant';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { AttendanceLeave } from 'src/app/model/attendanceDetail.model';
import { TimeSheet } from 'src/app/model/timesheet.model';
import { TimeSheetWrapper } from 'src/app/model/timeSheetWrapper.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-time-sheet',
  templateUrl: './add-time-sheet.component.html',
  styleUrls: ['./add-time-sheet.component.scss']
})
export class AddTimeSheetComponent implements OnInit {

  public mask = [/\d/, /\d/, ':', /\d/, /\d/]
  sunvalue: string;
  monvalue: string;
  tuevalue: string;
  wedvalue: string;
  thuvalue: string;
  frivalue: string;
  satvalue: string;
  sunDuration: string;
  exceedsun: boolean;
  fieldsun: boolean;
  monDuration: string;
  exceedmon: boolean;
  fieldmon: boolean;
  tueDuration: string;
  exceedtue: boolean;
  fieldtue: boolean;
  wedDuration: string;
  exceedwed: boolean;
  fieldwed: boolean;
  thuDuration: string;
  exceedthu: boolean;
  fieldthu: boolean;
  friDuration: string;
  exceedfri: boolean;
  fieldfri: boolean;
  satDuration: string;
  exceedsat: boolean;
  fieldsat: boolean;
  sum: any;
  sumstatus: boolean;
  sunValue: string;
  monValue: string;
  tueValue: string;
  wedValue: string;
  thuValue: string;
  friValue: string;
  satValue: string;
  newtimesheet: FormGroup;
  public getProjectListApi = UrlConstant.getProjectApi;
  public getAttendanceLeaveApi = UrlConstant.getAttendanceLeaveApi;
  public saveTimeSheetApi = UrlConstant.saveTimeSheetApi;
  public getEmployeeApi = UrlConstant.getEmployeeApi;
  projectList: any;
  selectedproject: any;
  today: Date;
  fromdate: Date;
  todate: Date;
  weekdurationList: any[] = [];
  listofWeekDays: any[] = [];
  attendanceLeave = new AttendanceLeave();
  attendanceMasterlist: any;
  weeklist: any[] = [false, false, false, false, false, false, false];
  isSunday: boolean;
  isMonday: boolean;
  isTuesday: boolean;
  isWednesday: boolean;
  isThrusday: boolean;
  isFirday: boolean;
  isSaturday: boolean;
  leavecodemon: any;
  leavecodetue: any;
  leavecodewed: any;
  leavecodethu: any;
  leavecodefri: any;
  leavecodesat: any;
  leavecodesun: any;
  selectedweek: any;
  weeklyTimeSheet = new TimeSheet();
  weekdayList: any[] = [];
  temp: Date;
  timeSheetWrapper = new TimeSheetWrapper();
  employeeDetails: any;
  gemsTimeSheetDetailId: any;
  getTimeSheetById = UrlConstant.getTimeSheetApi;
  timeSheetLineId: any[];
  constructor(public router: Router, private activatedRoute: ActivatedRoute, public genericservice: Genericservice, public encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['gemsEmployeeTimeSheetId'] !== null && params['gemsEmployeeTimeSheetId'] !== undefined) {
        this.gemsTimeSheetDetailId = params['gemsEmployeeTimeSheetId'];
        console.log(this.gemsTimeSheetDetailId)
      }
    });
  }

  ngOnInit() {

    this.sunvalue = '00:00';
    this.monvalue = '00:00';
    this.tuevalue = '00:00';
    this.wedvalue = '00:00';
    this.thuvalue = '00:00';
    this.frivalue = '00:00';
    this.satvalue = '00:00';
    this.sum = '00:00';
    this.formChanges();
    this.getEmployeedetails();
   
    if (this.gemsTimeSheetDetailId == undefined || this.gemsTimeSheetDetailId == null) {
      this.getFromDate();
      this.getTodate(this.fromdate);
      this.getAttendanceByWeek(this.fromdate, this.todate);
      this.getWeekDurationList();
      this.getAssignedProjectList();
    } else {
      let payload = {
        "gemsEmployeeTimeSheetId": this.gemsTimeSheetDetailId
      }
      this.genericservice.post(this.getTimeSheetById, payload, '').subscribe(response => {
        if (response.data != null) {
          let timesheetdetail = response.data;
          // this.timeSheetId = this.editGemsProjectMaster.gemsEmployeeTimeSheetId;
          this.timeSheetWrapper = timesheetdetail;
          // this.edittimesheetform.value.timeSheetId = this.editGemsProjectMaster.gemsEmployeeTimeSheetId;
          // this.edittimesheetform.value.week = this.editGemsProjectMaster.weekDuration;
          let date = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheet.weekDuration.split(' ');
          let date1 = date[0].split('/');
          let date2 = date[2].split('/');
          let formdate = date1[2] + '/' + date1[1] + '/' + date1[0];
          let todate = date2[2] + '/' + date2[1] + '/' + date2[0];
          this.monValue = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[1].hours + '';
          this.tueValue = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[2].hours + '';
          this.wedValue = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[3].hours + '';
          this.thuValue = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[4].hours + '';
          this.friValue = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[5].hours + '';
          this.satValue = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[6].hours + '';
          this.sunValue = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[0].hours + '';
          this.monvalue = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[1].hours + '';
          this.tuevalue = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[2].hours + '';
          this.wedvalue = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[3].hours + '';
          this.thuvalue = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[4].hours + '';
          this.frivalue = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[5].hours + '';
          this.satvalue = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[6].hours + '';
          this.sunvalue = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[0].hours + '';
          this.sum = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheet.totalHours;
          this.timeSheetLineId = [];

          for (let id = 0; id < 7; id++) {
              this.timeSheetLineId.push(this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine[id].gemsEmployeeWeeklyTimeSheetLineId);
          }
          this.timeSheetLineId.sort();

          this.getAssignedProjectList();
          this.fromdate = new Date(formdate);
          this.todate = new Date(todate);
          this.getWeekDurationList();
          this.getAttendanceByWeek(this.fromdate, this.todate);
          this.selectedproject = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheet.gemsProjectMaster;

        }
      })
    }
  }

  getEmployeedetails() {
    let payload = {
      "gemsUserMasterId": this.encryptdecryptlocalstorage.getLocalStorage('userId')
    }
    this.genericservice.post(this.getEmployeeApi, payload, '').subscribe(response => {
      this.employeeDetails = response.data;
    })
  }


  getAttendanceByWeek(fromdate, todate) {
    if (this.gemsTimeSheetDetailId == null && this.gemsTimeSheetDetailId == undefined) {
      this.sunvalue = '00:00';
      this.monvalue = '00:00';
      this.tuevalue = '00:00';
      this.wedvalue = '00:00';
      this.thuvalue = '00:00';
      this.frivalue = '00:00';
      this.satvalue = '00:00';
    }
    this.weeklist[0] = false;
    this.weeklist[1] = false;
    this.weeklist[2] = false;
    this.weeklist[3] = false;
    this.weeklist[4] = false;
    this.weeklist[5] = false;
    this.weeklist[6] = false;
    this.sunDuration = '';
    this.monDuration = '';
    this.tueDuration = '';
    this.wedDuration = '';
    this.thuDuration = '';
    this.friDuration = '';
    this.satDuration = '';
    this.leavecodesun = '';
    this.leavecodemon = '';
    this.leavecodetue = '';
    this.leavecodewed = '';
    this.leavecodethu = '';
    this.leavecodefri = '';
    this.leavecodesat = '';
    this.exceedsun = false;
    this.exceedmon = false;
    this.exceedtue = false;
    this.exceedwed = false;
    this.exceedthu = false;
    this.exceedfri = false;
    this.exceedsat = false;
    this.fieldsun = true;
    this.fieldmon = true;
    this.fieldtue = true;
    this.fieldwed = true;
    this.fieldthu = true;
    this.fieldfri = true;
    this.fieldsat = true;

    let starDate = this.getDateStringformDate(fromdate);
    let endDate = this.getDateStringformDate(todate);
    this.listofWeekDays = this.getDateArray(new Date(starDate), new Date(endDate));
    let gemsEmployeeMasterId = this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
    this.attendanceLeave.fromDate = fromdate;
    this.attendanceLeave.toDate = todate;
    this.attendanceLeave.gemsEmployeeMasterId = gemsEmployeeMasterId;
    this.genericservice.post(this.getAttendanceLeaveApi + '?start=0&limit=0&attendanceType=0', this.attendanceLeave, '').subscribe(attendanceMaster => {
      if (attendanceMaster.data != null) {
        this.attendanceMasterlist = attendanceMaster.data;
        for (let i = 0; i < this.attendanceMasterlist.length; i++) {
          if (this.attendanceMasterlist[i].attendanceInTime == null && this.attendanceMasterlist[i].attendanceOutTime == null) {
            if (this.attendanceMasterlist[i].leaveCode != 'OnDuty') {
              if (this.listofWeekDays[0].getDate() === new Date(this.attendanceMasterlist[i].attendanceDate).getDate()) {
                this.weeklist[0] = true;
                this.leavecodesun = this.attendanceMasterlist[i].leaveCode;
              } else {
                this.isSunday = false;
              }
              if (this.listofWeekDays[1].getDate() === new Date(this.attendanceMasterlist[i].attendanceDate).getDate()) {
                this.weeklist[1] = true;
                this.leavecodemon = this.attendanceMasterlist[i].leaveCode;
              } else {
                this.isMonday = false;
              }
              if (this.listofWeekDays[2].getDate() === new Date(this.attendanceMasterlist[i].attendanceDate).getDate()) {
                this.weeklist[2] = true;
                this.leavecodetue = this.attendanceMasterlist[i].leaveCode;
              } else {
                this.isTuesday = false;
              }
              if (this.listofWeekDays[3].getDate() === new Date(this.attendanceMasterlist[i].attendanceDate).getDate()) {
                this.weeklist[3] = true;
                this.leavecodewed = this.attendanceMasterlist[i].leaveCode;
              } else {
                this.isWednesday = false;
              }
              if (this.listofWeekDays[4].getDate() === new Date(this.attendanceMasterlist[i].attendanceDate).getDate()) {
                this.weeklist[4] = true;
                this.leavecodethu = this.attendanceMasterlist[i].leaveCode;
              } else {
                this.isThrusday = false;
              }
              if (this.listofWeekDays[5].getDate() === new Date(this.attendanceMasterlist[i].attendanceDate).getDate()) {
                this.weeklist[5] = true;
                this.leavecodefri = this.attendanceMasterlist[i].leaveCode;
              } else {
                this.isFirday = false;
              }
              if (this.listofWeekDays[6].getDate() === new Date(this.attendanceMasterlist[i].attendanceDate).getDate()) {
                this.weeklist[6] = true;
                this.leavecodesat = this.attendanceMasterlist[i].leaveCode;
              } else {
                this.isSaturday = false;
              }
            }
          } else {
            if (this.attendanceMasterlist[i].durationBtwInOut != '') {
              switch (new Date(this.attendanceMasterlist[i].attendanceDate).getDay()) {
                case 0: this.sunDuration = this.attendanceMasterlist[i].durationBtwInOut;
                  break;
                case 1: this.monDuration = this.attendanceMasterlist[i].durationBtwInOut;
                  break;
                case 2: this.tueDuration = this.attendanceMasterlist[i].durationBtwInOut;
                  break;
                case 3: this.wedDuration = this.attendanceMasterlist[i].durationBtwInOut;
                  break;
                case 4: this.thuDuration = this.attendanceMasterlist[i].durationBtwInOut;
                  break;
                case 5: this.friDuration = this.attendanceMasterlist[i].durationBtwInOut;
                  break;
                case 6: this.satDuration = this.attendanceMasterlist[i].durationBtwInOut;
                  break;
              }
            }
          }
        }
      }

      let todaydate = new Date();
      (this.listofWeekDays[0].getDate() >= todaydate.getDate()) && (this.listofWeekDays[0].getMonth() + 1 == todaydate.getMonth() + 1) || (this.listofWeekDays[0].getMonth() + 1 > todaydate.getMonth() + 1)
        ? this.weeklist[0] = true : this.isSunday = false;
      (this.listofWeekDays[1].getDate() >= todaydate.getDate()) && (this.listofWeekDays[1].getMonth() + 1 == todaydate.getMonth() + 1) || (this.listofWeekDays[1].getMonth() + 1 > todaydate.getMonth() + 1)
        ? this.weeklist[1] = true : this.isMonday = false;
      (this.listofWeekDays[2].getDate() >= todaydate.getDate()) && (this.listofWeekDays[2].getMonth() + 1 == todaydate.getMonth() + 1) || (this.listofWeekDays[2].getMonth() + 1 > todaydate.getMonth() + 1)
        ? this.weeklist[2] = true : this.isTuesday = false;
      (this.listofWeekDays[3].getDate() >= todaydate.getDate()) && (this.listofWeekDays[3].getMonth() + 1 == todaydate.getMonth() + 1) || (this.listofWeekDays[3].getMonth() + 1 > todaydate.getMonth() + 1)
        ? this.weeklist[3] = true : this.isWednesday = false;
      (this.listofWeekDays[4].getDate() >= todaydate.getDate()) && (this.listofWeekDays[4].getMonth() + 1 == todaydate.getMonth() + 1) || (this.listofWeekDays[4].getMonth() + 1 > todaydate.getMonth() + 1)
        ? this.weeklist[4] = true : this.isThrusday = false;
      (this.listofWeekDays[5].getDate() >= todaydate.getDate()) && (this.listofWeekDays[5].getMonth() + 1 == todaydate.getMonth() + 1) || (this.listofWeekDays[5].getMonth() + 1 > todaydate.getMonth() + 1)
        ? this.weeklist[5] = true : this.isFirday = false;
      (this.listofWeekDays[6].getDate() >= todaydate.getDate()) && (this.listofWeekDays[6].getMonth() + 1 == todaydate.getMonth() + 1) || (this.listofWeekDays[6].getMonth() + 1 > todaydate.getMonth() + 1)
        ? this.weeklist[6] = true : this.isSaturday = false;

    });

  }

  getAttendanceByWeekDetails() {
    let weekduration = this.selectedweek.split('-');
    let fDate = weekduration[0].split('/');
    let eDate = weekduration[1].split('/');
    this.fromdate = new Date(fDate[1] + '/' + fDate[0] + '/' + fDate[2]);
    this.todate = new Date(eDate[1] + '/' + eDate[0] + '/' + eDate[2]);
    this.fromdate.setHours(9);
    this.fromdate.setMinutes(30);
    this.todate.setHours(18);
    this.todate.setMinutes(30);
    this.getAttendanceByWeek(this.fromdate, this.todate);
  }

  getDateStringformDate(date) {
    let month = date.getMonth() + 1;
    return date.getFullYear() + '-' + month + '-' + date.getDate();
  }

  getDateArray(start, end) {
    var arr = new Array();
    var dt = new Date(start);
    while (dt <= end) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  }


  getFromDate() {
    let date = new Date();
    this.today = new Date(date);
    //console.log(this.today + ' today')
    var day;
    //console.log(this.today.getDay());
    switch (this.today.getDay()) {

      case 0:
        day = 'Sunday';
        //console.log('date in switch: ' + this.today.getDate());

        return this.fromdate = addDays(new Date(date), 0);
      // break;
      case 1:
        day = 'Monday';
        //console.log('date in switch: ' + this.today.getDate());

        return this.fromdate = addDays(new Date(date), -1);
      //  break;
      case 2:
        day = 'Tuesday';
        return this.fromdate = addDays(new Date(date), -2);
      // break;
      case 3:
        day = 'Wednesday';
        return this.fromdate = addDays(new Date(date), -3);
      //  break;
      case 4:
        day = 'Thursday';
        return this.fromdate = addDays(new Date(date), -4)
      //  break;
      case 5:
        day = 'Friday';
        return this.fromdate = addDays(new Date(date), -5)
      //  break;
      case 6:
        day = 'Saturday';
        return this.fromdate = addDays(new Date(date), -6)
    }
  }

  getTodate(fromdate) {
    return this.todate = addDays(this.fromdate, 6);
  }

  getFormatedDate(date: Date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (day < 10 && month < 10) {
      return '0' + day + '/' + '0' + month + '/' + year;
    }
    if (day < 10) {
      return '0' + day + '/' + month + '/' + year;
    }
    if (month < 10) {
      return day + '/' + '0' + month + '/' + year;
    }
  }

  getWeekDurationList() {
    let week = this.getFormatedDate(this.fromdate) + ' - ' + this.getFormatedDate(this.todate);
    this.selectedweek = week;
    for (let i = 0; i < 5; i++) {
      this.weekdurationList.push(week);
      this.fromdate = addDays(this.fromdate, -7);
      this.todate = addDays(this.fromdate, 6);
      week = this.getFormatedDate(this.fromdate) + ' - ' + this.getFormatedDate(this.todate);
    }
    if(this.gemsTimeSheetDetailId != null || this.gemsTimeSheetDetailId != undefined){
      this.selectedweek  = this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheet.weekDuration;
    }

  }

  getAssignedProjectList() {
    let payLoad = {
      "gemsEmployeeMaster": {
        "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      },
      "gemsOrganisation": {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }
    }
    return this.genericservice.post(this.getProjectListApi, payLoad, '').subscribe(response => {
      this.projectList = response.data;
     
      if (this.gemsTimeSheetDetailId != null && this.gemsTimeSheetDetailId != undefined) {
        for(let project of  this.projectList){
          if(project.gemsProjectMaster.gemsProjectMasterId == this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheet.gemsProjectMaster.gemsProjectMasterId){ 
            this.selectedproject = project.gemsProjectMaster;
          }
        }
       
      } else {
        this.selectedproject = this.projectList != null ? this.projectList[0].gemsProjectMaster : null;
      }
    })
  }

  formChanges() {
    this.newtimesheet = new FormGroup({});
    this.newtimesheet.valueChanges.subscribe(value => {
      this.add(1);
    });
  }

  add(e) {
    this.sunValue = ((document.getElementById('sun') as HTMLTextAreaElement).value === undefined || (document.getElementById('sun') as HTMLTextAreaElement).value === '' || this.fieldsun == false)
      ? '00:00' : (document.getElementById('sun') as HTMLTextAreaElement).value;
    this.monValue = ((document.getElementById('mon') as HTMLTextAreaElement).value === undefined || (document.getElementById('mon') as HTMLTextAreaElement).value === '' || this.fieldmon == false)
      ? '00:00' : (document.getElementById('mon') as HTMLTextAreaElement).value;
    this.tueValue = ((document.getElementById('tue') as HTMLTextAreaElement).value === undefined || (document.getElementById('tue') as HTMLTextAreaElement).value === '' || this.fieldtue == false)
      ? '00:00' : (document.getElementById('tue') as HTMLTextAreaElement).value;
    this.wedValue = ((document.getElementById('wed') as HTMLTextAreaElement).value === undefined || (document.getElementById('wed') as HTMLTextAreaElement).value === '' || this.fieldwed == false)
      ? '00:00' : (document.getElementById('wed') as HTMLTextAreaElement).value;
    this.thuValue = ((document.getElementById('thu') as HTMLTextAreaElement).value === undefined || (document.getElementById('thu') as HTMLTextAreaElement).value === '' || this.fieldthu == false)
      ? '00:00' : (document.getElementById('thu') as HTMLTextAreaElement).value;
    this.friValue = ((document.getElementById('fri') as HTMLTextAreaElement).value === undefined || (document.getElementById('fri') as HTMLTextAreaElement).value === '' || this.fieldfri == false)
      ? '00:00' : (document.getElementById('fri') as HTMLTextAreaElement).value;
    this.satValue = ((document.getElementById('sat') as HTMLTextAreaElement).value === undefined || (document.getElementById('sat') as HTMLTextAreaElement).value === '' || this.fieldsat == false)
      ? '00:00' : (document.getElementById('sat') as HTMLTextAreaElement).value;


    // alert(this.monValue +' '+this.tueValue+ ' '+' '+this.wedValue+' '+this.thuValue+ ' '+' '+this.friValue+ ' '+' '+this.satValue);
    let SVALUE = this.getTimeTotal(this.sunValue, this.monValue);
    let FValue = this.getTimeTotal(SVALUE, this.tueValue);
    let SecValue = this.getTimeTotal(FValue, this.wedValue);
    let threeValue = this.getTimeTotal(SecValue, this.thuValue);
    let fourValue = this.getTimeTotal(threeValue, this.friValue);
    let LastValue = this.getTimeTotal(fourValue, this.satValue);
    //alert(LastValue);
    this.sum = LastValue;
    let sumValue = LastValue.split(':');
    this.sumstatus = (this.sum == null || this.sum == '' || this.sum == '0:0' || this.sum == '00:0' || this.sum == '00:00' || isNaN(+sumValue[0]) || isNaN(+sumValue[1])) ? false : true;
    if (isNaN(+sumValue[0]) || isNaN(+sumValue[1])) {
      this.sum = '00:00';
    }
  }
  getTimeTotal(time1, time2) {
    let time1_hr: any;
    let time1_min: any;
    let time2_hr: any;
    let time2_min: any;
    let total_hrtime: any;
    let total_mintime: any;
    let generated_Hour = 0;

    time1_hr = time1.split(':')[0];
    time1_min = time1.split(':')[1];
    time2_hr = time2.split(':')[0];
    time2_min = time2.split(':')[1];

    total_hrtime = 1 * time1_hr + 1 * time2_hr;
    total_mintime = 1 * time1_min + 1 * time2_min;
    if (total_mintime >= 60) {
      total_mintime = total_mintime - 60;
      total_hrtime = total_hrtime + 1;
    }

    return total_hrtime + ':' + total_mintime;
  }

  onSearchsun(e) {
    let sun;
    if (e.srcElement != undefined) {
      sun = e.srcElement.value;
    } else {
      sun = e.target.value;
    }
    // mon.replaceAll('_', '0');
    let slpitmon = sun.split(':');
    this.sunDuration != '' && this.sunDuration != undefined ? this.sunDuration : this.sunDuration = '08:00';
    let mondur = this.sunDuration.split(':');
    if (isNaN(+slpitmon[0]) || isNaN(+slpitmon[1])) {
      this.exceedsun = false;
      return this.fieldsun = false;
    } else {
      if (parseInt(slpitmon[0]) <= parseInt(mondur[0])) {
        if (parseInt(slpitmon[0]) == parseInt(mondur[0])) {
          if (parseInt(slpitmon[1]) > parseInt(mondur[1])) {
            this.fieldsun = false;
            this.exceedsun = true;
            return
          } else {
            this.fieldsun = true;
            this.exceedsun = false;
            this.add(e);
            return
          }
        } else if (parseInt(slpitmon[1]) > 59) {
          this.fieldsun = false;
          // this.exceedsun = true;
          return
        } else {
          this.fieldsun = true;
          this.exceedsun = false;
          this.add(e);
        }
      } else {
        this.fieldsun = false;
        this.exceedsun = true;
        return
      }
    }
  }
  onSearchmon(e) {
    let mon
    if (e.srcElement != undefined) {
      mon = e.srcElement.value;
    } else {
      mon = e.target.value;
    }
    // mon.replaceAll('_', '0');
    let slpitmon = mon.split(':');
    this.monDuration != '' && this.monDuration != undefined ? this.monDuration : this.monDuration = '08:00';
    let mondur = this.monDuration.split(':');
    if (isNaN(+slpitmon[0]) || isNaN(+slpitmon[1])) {
      this.exceedmon = false;
      return this.fieldmon = false;
    } else {
      if (parseInt(slpitmon[0]) <= parseInt(mondur[0])) {
        if (parseInt(slpitmon[0]) == parseInt(mondur[0])) {
          if (parseInt(slpitmon[1]) > parseInt(mondur[1])) {
            this.fieldmon = false;
            this.exceedmon = true;
            return;
          } else {
            this.fieldmon = true;
            this.exceedmon = false;
            this.add(e);
            return;
          }
        } else if (parseInt(slpitmon[1]) > 59) {
          this.fieldmon = false;
          // this.exceedsun = true;
          return;
        } else {
          this.fieldmon = true;
          this.exceedmon = false;
          this.add(e);
        }
      } else {
        this.fieldmon = false;
        this.exceedmon = true;
        return;
      }
    }
    // if (parseInt(slpitmon[0]) > parseInt(mondur[0]) || (parseInt(slpitmon[0]) == parseInt(mondur[0]) && parseInt(slpitmon[1]) > parseInt(mondur[1]))) {
    //     this.fieldmon = false;
    //     this.exceedmon = true;
    //     return
    // }
    // if (parseInt(slpitmon[0]) > 8 || parseInt(slpitmon[1]) > 59 || isNaN(+slpitmon[0]) || isNaN(+slpitmon[1])) {
    //     this.fieldmon = false;
    //     this.exceedmon = false;
    // } else {
    //     this.fieldmon = true;
    //     this.exceedmon = false;
    //     this.add(e);
    // }
    //e.target.validity.valid == false  ? this.fieldmon = false : this.fieldmon = true;
  }
  onSearchtue(e) {
    let tue
    if (e.srcElement != undefined) {
      tue = e.srcElement.value;
    } else {
      tue = e.target.value;
    }
    let slpitmon = tue.split(':');
    this.tueDuration != '' && this.tueDuration != undefined ? this.tueDuration : this.tueDuration = '08:00';
    let mondur = this.tueDuration.split(':');
    if (isNaN(+slpitmon[0]) || isNaN(+slpitmon[1])) {
      this.exceedtue = false;
      return this.fieldtue = false;
    } else {
      if (parseInt(slpitmon[0]) <= parseInt(mondur[0])) {
        if (parseInt(slpitmon[0]) == parseInt(mondur[0])) {
          if (parseInt(slpitmon[1]) > parseInt(mondur[1])) {
            this.fieldtue = false;
            this.exceedtue = true;
            return;
          } else {
            this.fieldtue = true;
            this.exceedtue = false;
            this.add(e);
            return;
          }
        } else if (parseInt(slpitmon[1]) > 59) {
          this.fieldtue = false;
          // this.exceedsun = true;
          return;
        } else {
          this.fieldtue = true;
          this.exceedtue = false;
          this.add(e);
        }
      } else {
        this.fieldtue = false;
        this.exceedtue = true;
        return;
      }
    }
    // if (parseInt(slpitmon[0]) > parseInt(mondur[0]) || (parseInt(slpitmon[0]) == parseInt(mondur[0]) && parseInt(slpitmon[1]) > parseInt(mondur[1]))) {
    //     this.fieldtue = false;
    //     this.exceedtue = true;
    //     return
    // }
    // if (parseInt(slpitmon[0]) > 8 || parseInt(slpitmon[1]) > 59 || isNaN(+slpitmon[0]) || isNaN(+slpitmon[1])) {
    //     this.fieldtue = false;
    //     this.exceedtue = false;
    // } else {
    //     this.fieldtue = true;
    //     this.exceedtue = false;
    //     this.add(e);
    // }
  }
  onSearchwed(e) {
    let wed
    if (e.srcElement != undefined) {
      wed = e.srcElement.value;
    } else {
      wed = e.target.value;
    }
    let slpitmon = wed.split(':');
    this.wedDuration != '' && this.wedDuration != undefined ? this.wedDuration : this.wedDuration = '08:00';
    let mondur = this.wedDuration.split(':');
    if (isNaN(+slpitmon[0]) || isNaN(+slpitmon[1])) {
      this.exceedwed = false;
      return this.fieldwed = false;
    } else {
      if (parseInt(slpitmon[0]) <= parseInt(mondur[0])) {
        if (parseInt(slpitmon[0]) == parseInt(mondur[0])) {
          if (parseInt(slpitmon[1]) > parseInt(mondur[1])) {
            this.fieldwed = false;
            this.exceedwed = true;
            return;
          } else {
            this.fieldwed = true;
            this.exceedwed = false;
            this.add(e);
            return;
          }
        } else if (parseInt(slpitmon[1]) > 59) {
          this.fieldwed = false;
          // this.exceedsun = true;
          return;
        } else {
          this.fieldwed = true;
          this.exceedwed = false;
          this.add(e);
        }
      } else {
        this.fieldwed = false;
        this.exceedwed = true;
        return;
      }
    }
    // if (parseInt(slpitmon[0]) > parseInt(mondur[0]) || (parseInt(slpitmon[0]) == parseInt(mondur[0]) && parseInt(slpitmon[1]) > parseInt(mondur[1]))) {
    //     this.fieldwed = false;
    //     this.exceedwed = true;
    //     return
    // }
    // if (parseInt(slpitmon[0]) > 23 || parseInt(slpitmon[1]) > 59 || isNaN(+slpitmon[0]) || isNaN(+slpitmon[1])) {
    //     this.fieldwed = false;
    //     this.exceedwed = false;
    // } else {
    //     this.fieldwed = true;
    //     this.exceedwed = false;
    //     this.add(e);
    // }
  }
  onSearchthu(e) {
    let thu;
    if (e.srcElement != undefined) {
      thu = e.srcElement.value;
    } else {
      thu = e.target.value;
    }
    let slpitmon = thu.split(':');
    this.thuDuration != '' && this.thuDuration != undefined ? this.thuDuration : this.thuDuration = '08:00';
    let mondur = this.thuDuration.split(':');
    if (isNaN(+slpitmon[0]) || isNaN(+slpitmon[1])) {
      this.exceedthu = false;
      return this.fieldthu = false;
    } else {
      if (parseInt(slpitmon[0]) <= parseInt(mondur[0])) {
        if (parseInt(slpitmon[0]) == parseInt(mondur[0])) {
          if (parseInt(slpitmon[1]) > parseInt(mondur[1])) {
            this.fieldthu = false;
            this.exceedthu = true;
            return;
          } else {
            this.fieldthu = true;
            this.exceedthu = false;
            this.add(e);
            return;
          }
        } else if (parseInt(slpitmon[1]) > 59) {
          this.fieldthu = false;
          // this.exceedsun = true;
          return;
        } else {
          this.fieldthu = true;
          this.exceedthu = false;
          this.add(e);
        }
      } else {
        this.fieldthu = false;
        this.exceedthu = true;
        return;
      }
    }
    // if (parseInt(slpitmon[0]) > parseInt(mondur[0]) || (parseInt(slpitmon[0]) == parseInt(mondur[0]) && parseInt(slpitmon[1]) > parseInt(mondur[1]))) {
    //     this.fieldthu = false;
    //     this.exceedthu = true;
    //     return
    // }
    // if (parseInt(slpitmon[0]) > 23 || parseInt(slpitmon[1]) > 59 || isNaN(+slpitmon[0]) || isNaN(+slpitmon[1])) {
    //     this.fieldthu = false;
    //     this.exceedthu = false;
    // } else {
    //     this.fieldthu = true;
    //     this.exceedthu = false;
    //     this.add(e);
    // }
  }
  onSearchfri(e) {
    let fri;
    if (e.srcElement != undefined) {
      fri = e.srcElement.value;
    } else {
      fri = e.target.value;
    }
    let slpitmon = fri.split(':');
    this.friDuration != '' && this.friDuration != undefined ? this.friDuration : this.friDuration = '08:00';
    let mondur = this.friDuration.split(':');
    if (isNaN(+slpitmon[0]) || isNaN(+slpitmon[1])) {
      this.exceedfri = false;
      return this.fieldfri = false;
    } else {
      if (parseInt(slpitmon[0]) <= parseInt(mondur[0])) {
        if (parseInt(slpitmon[0]) == parseInt(mondur[0])) {
          if (parseInt(slpitmon[1]) > parseInt(mondur[1])) {
            this.fieldfri = false;
            this.exceedfri = true;
            return;
          } else {
            this.fieldfri = true;
            this.exceedfri = false;
            this.add(e);
            return;
          }
        } else if (parseInt(slpitmon[1]) > 59) {
          this.fieldfri = false;
          // this.exceedsun = true;
          return;
        } else {
          this.fieldfri = true;
          this.exceedfri = false;
          this.add(e);
        }
      } else {
        this.fieldfri = false;
        this.exceedfri = true;
        return;
      }
    }
    // if (parseInt(slpitmon[0]) > parseInt(mondur[0]) || (parseInt(slpitmon[0]) == parseInt(mondur[0]) && parseInt(slpitmon[1]) > parseInt(mondur[1]))) {
    //     this.fieldfri = false;
    //     this.exceedfri = true;
    //     return
    // }
    // if (parseInt(slpitmon[0]) > 23 || parseInt(slpitmon[1]) > 59 || isNaN(+slpitmon[0]) || isNaN(+slpitmon[1])) {
    //     this.fieldfri = false;
    //     this.exceedfri = false;
    // } else {
    //     this.fieldfri = true;
    //     this.exceedfri = false;
    //     this.add(e);
    // }
  }
  onSearchsat(e) {
    let sat;
    if (e.srcElement != undefined) {
      sat = e.srcElement.value;
    } else {
      sat = e.target.value;
    }
    let slpitmon = sat.split(':');
    this.satDuration != '' && this.satDuration != undefined ? this.satDuration : this.satDuration = '08:00';
    let mondur = this.satDuration.split(':');
    if (isNaN(+slpitmon[0]) || isNaN(+slpitmon[1])) {
      this.exceedsat = false;
      return this.fieldsat = false;
    } else {
      if (parseInt(slpitmon[0]) <= parseInt(mondur[0])) {
        if (parseInt(slpitmon[0]) == parseInt(mondur[0])) {
          if (parseInt(slpitmon[1]) > parseInt(mondur[1])) {
            this.fieldsat = false;
            this.exceedsat = true;
            return;
          } else {
            this.fieldsat = true;
            this.exceedsat = false;
            // this.add(e);
            return;
          }
        } else if (parseInt(slpitmon[1]) > 59) {
          this.fieldsat = false;
          // this.exceedsun = true;
          return;
        } else {
          this.fieldsat = true;
          this.exceedsat = false;
          // this.add(e);
        }
      } else {
        this.fieldsat = false;
        this.exceedsat = true;
        return;
      }
    }
    // if (parseInt(slpitmon[0]) > parseInt(mondur[0]) || (parseInt(slpitmon[0]) == parseInt(mondur[0]) && parseInt(slpitmon[1]) > parseInt(mondur[1]))) {
    //     this.fieldsat = false;
    //     this.exceedsat = true;
    //     return
    // }
    // if (parseInt(slpitmon[0]) > 23 || parseInt(slpitmon[1]) > 59 || isNaN(+slpitmon[0]) || isNaN(+slpitmon[1])) {
    //     this.fieldsat = false;
    //     this.exceedsat = false;
    // } else {
    //     this.fieldsat = true;
    //     this.exceedsat = false;
    //     this.add(e);
    // }
  }


  savetimeSheet(status : string) {

    this.newtimesheet.value.week = this.selectedweek;
    this.newtimesheet.value.mon = this.monValue;
    this.newtimesheet.value.tue = this.tueValue;
    this.newtimesheet.value.wed = this.wedValue;
    this.newtimesheet.value.thu = this.thuValue;
    this.newtimesheet.value.fri = this.friValue;
    this.newtimesheet.value.sat = this.satValue;
    this.newtimesheet.value.sun = this.sunValue;
    this.weeklyTimeSheet;
    this.weekdayList = [];

    this.weekdayList.push((this.newtimesheet.value.sun === null || this.newtimesheet.value.sun === undefined)
      ? '00:00' : this.newtimesheet.value.sun);
    this.weekdayList.push((this.newtimesheet.value.mon === null || this.newtimesheet.value.mon === undefined)
      ? '00:00' : this.newtimesheet.value.mon);
    this.weekdayList.push((this.newtimesheet.value.tue === null || this.newtimesheet.value.tue === undefined)
      ? '00:00' : this.newtimesheet.value.tue);
    this.weekdayList.push((this.newtimesheet.value.wed === null || this.newtimesheet.value.wed === undefined)
      ? '00:00' : this.newtimesheet.value.wed);
    this.weekdayList.push((this.newtimesheet.value.thu === null || this.newtimesheet.value.thu === undefined)
      ? '00:00' : this.newtimesheet.value.thu);
    this.weekdayList.push((this.newtimesheet.value.fri === null || this.newtimesheet.value.fri === undefined)
      ? '00:00' : this.newtimesheet.value.fri);
    this.weekdayList.push((this.newtimesheet.value.sat === null || this.newtimesheet.value.sat === undefined)
      ? '00:00' : this.newtimesheet.value.sat);

    this.weeklyTimeSheet.weekDuration = this.selectedweek;
    this.weeklyTimeSheet.taskDescription = 'demo';
    this.weeklyTimeSheet.status = status;
    this.weeklyTimeSheet.totalHours = this.sum;
    this.weeklyTimeSheet.isActive = true;
    this.weeklyTimeSheet.createdBy = this.employeeDetails;
    this.weeklyTimeSheet.updatedBy = this.encryptdecryptlocalstorage.getLocalStorage('employeeId');
    this.weeklyTimeSheet.createdOn = new Date();
    this.weeklyTimeSheet.updatedOn = new Date();
    this.weeklyTimeSheet.gemsProjectMaster = this.selectedproject;
    let Fobj = [];
    if(this.gemsTimeSheetDetailId != null || this.gemsTimeSheetDetailId != undefined){
      this.weeklyTimeSheet.gemsEmployeeTimeSheetId = this.gemsTimeSheetDetailId;
      for (let hourIndex = 0; hourIndex < 7; hourIndex++) {
        var nextDay = new Date(this.temp);

        Fobj.push({
            'gemsEmployeeWeeklyTimeSheetLineId': this.timeSheetLineId[hourIndex],
            'gemsEmployeeTimeSheet': this.gemsTimeSheetDetailId,
            'date': nextDay,
            'hours': this.weekdayList[hourIndex],
        });
        nextDay.setDate(this.temp.getDate() + hourIndex);
    }
    }else{
      for (let hourIndex = 0; hourIndex < 7; hourIndex++) {
        var nextDay = new Date(this.temp);
        Fobj.push({
          'date': nextDay,
          'hours': this.weekdayList[hourIndex],
        });
        nextDay.setDate(this.temp.getDate() + hourIndex);
      }
    }
    // this.projectObj = this.projectControl.value;

    let stringToSplit = this.newtimesheet.value.week;
    // let x = stringToSplit.split(' ');
    this.temp = this.fromdate;
    var str = this.temp.toLocaleDateString();
    this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheet = this.weeklyTimeSheet;
    this.timeSheetWrapper.gemsEmployeeWeeklyTimeSheetLine = Fobj;
    this.genericservice.post(this.saveTimeSheetApi, this.timeSheetWrapper, '').subscribe(timeSheetData => {
      if(timeSheetData.data != null){
         this.router.navigateByUrl('/user/timesheet');
      }
    })
    // this.timeSheetService.saveorUpdateTimeSheet(this.timeSheetWrapper).subscribe(timeSheetData => {
    //     this.data = timeSheetData;

    //     if (timeSheetData.gemsEmployeeTimeSheetId !== null) {

    //         this.showNotification(this.TIMESHEET_REQUEST_SUCCESS_MESSAGE, 'success');
    //         this.isLoadingResults = false;
    //         this.getTimeSheetbyProject(this.projectObj);

    //     } else {
    //         this.showNotification(this.ERROR_MESSAGE, 'danger');
    //         this.isLoadingResults = false;
    //     }
    // }, error => {
    //     //console.log(error.error.message);
    //     if (error.message === this.DUPLICATE_RECORDS) {
    //         this.showNotification(this.DUPLICATE_MESSAGE, 'danger');
    //         document.getElementsByClassName('load')[0].setAttribute('class', 'loadresult');
    //     }
    //     else {

    //         this.showNotification(this.ERROR_MESSAGE, 'danger');
    //         document.getElementsByClassName('load')[0].setAttribute('class', 'loadresult');
    //         this.isLoadingResults = false;
    //     }

    // });
    // this.isLoadingResults = true;
    // this.totalNoHours = [];

    // this.projectControl.reset();
    // this.router.navigateByUrl('/timesheet/timesheetlist');
    // this.showtimedetailsClicked();
    // this.ngOnInit();
  }

  onChange(newValue) {
    console.log(newValue);
    this.selectedproject = newValue;
  }
  getCSSClasses(flag: boolean) {
    let cssClasses;
    if (flag || flag == undefined) {
      cssClasses = {
        'valid': true,
        'invalid': false
      }
    }
    else {
      cssClasses = {
        'valid': false,
        'invalid': true
      }
    }
    return cssClasses;
  }

}
