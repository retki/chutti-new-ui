import { Component, OnInit } from '@angular/core';
import { UrlConstant } from '../../../services/urlConstant';
import { Genericservice } from '../../../services/genericservices';
import { EncryptDecryptLocalStorageService } from '../../../services/encrypt-decrypt-localstorage.service';
@Component({
  selector: 'app-dashboard-attendance',
  templateUrl: './dashboard-attendance.component.html',
  styleUrls: ['./dashboard-attendance.component.scss']
})
export class DashboardAttendanceComponent implements OnInit {
  public attendanceUrl = UrlConstant.attendsnceApi
  public attendanceList: any = [];
  public temp: any;
  public ToDate: string;
  public FromDate: string;
  public employeemasterid: any;
  public attendanceListLength: any;
  public dateObj: Date;
  public empLateRequest: any=[];
  totalAttendanceDays=0;
  totalAttendanceDaysStr: string;
  totalLateInStatusDays=0;
  totalLateInStatusDaysStr: string;
  todayDate = new Date();
  PreLoader: boolean;

  constructor(private gernericservice: Genericservice, private urlconstant: UrlConstant, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService
  ) { }

  ngOnInit() {

    this.attendance();
  }
  isLate(intime, maxtime) {
    var a = intime.split(":");
    var b = maxtime.split(":");
    if (parseInt(a[0]) > parseInt(b[0])) {
      return true;
    }
    if (parseInt(a[0]) == parseInt(b[0])) {
      if (parseInt(a[1]) > parseInt(b[1])) {
        return true;
      }
    }
    if (parseInt(a[0]) == parseInt(b[0]) && parseInt(a[1]) == parseInt(b[1])) {
      if (parseInt(a[2]) > parseInt(b[2])) {
        return true;
      }
    }
    return false;
  }
  getTimeByTimeStamp(timeStamp: any): any {
    if (timeStamp != null) {
      var date_to_convert = new Date(timeStamp);
      var local_date = new Date();
      date_to_convert.setMinutes(date_to_convert.getMinutes() + local_date.getTimezoneOffset());
      let DateValue = date_to_convert.toString().split(' ');
      return DateValue[4];
    } else { return '--'; }
  }
  attendance() {

    this.employeemasterid = this.encryptdecryptlocalstorage.getLocalStorage('employeeId');
    var date: Date = new Date();
    this.temp = new Date();
    this.ToDate = this.temp.getFullYear() + '-' +
      (this.temp.getMonth() + 1) + '-' +
      this.temp.getDate();

        this.FromDate = this.temp.getFullYear() + '-' + (this.temp.getMonth() + 1) + '-' + '01';
        date.setDate(new Date().getDate() - 1);
        var dateformat = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    return this.gernericservice.get(this.attendanceUrl + "?gemsEmployeeMasterId=" + this.employeemasterid + "&fromDate=" + this.FromDate + "&toDate=" + this.ToDate,).subscribe(response => {
      if(response.status.success === 'Fail') {
        this.totalAttendanceDaysStr = '0';
        this.totalLateInStatusDaysStr = '0';
      } else {
      this.attendanceList=response.data;
    this.attendanceListLength = response.data.length;
    for (let i = 0; i < response.data.length; i++) {
      let inTimeCheckWithDate = response.data[i].attendanceInTime;
      this.dateObj = new Date(inTimeCheckWithDate);
      if (response.data[i].attendanceInTime != null) {
          if (this.isLate(this.getTimeByTimeStamp(response.data[i].attendanceInTime), '09:30:00')) {
            this.empLateRequest.push(response.data[i]);


          }
        }
      }
      this.totalAttendanceDays = this.attendanceListLength == undefined ? 0 : this.attendanceListLength;
      // this.totalAttendanceDays = this.attendanceListLength;
      if (this.totalAttendanceDays < 10) { this.totalAttendanceDaysStr = "0" + this.totalAttendanceDays; }
      else { this.totalAttendanceDaysStr = this.totalAttendanceDays + "" 
}
     
      this.totalLateInStatusDays = this.empLateRequest == undefined ? 0 : this.empLateRequest.length;
      // this.totalLateInStatusDays = this.empLateRequest.length;
      if (this.totalLateInStatusDays < 10) { this.totalLateInStatusDaysStr = "0" + this.totalLateInStatusDays; }
      else { this.totalLateInStatusDaysStr = this.totalLateInStatusDays + "" 
    };
    }
    }
    )
  }
}
