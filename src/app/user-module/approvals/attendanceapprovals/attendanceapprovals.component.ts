import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from 'src/app/services/urlConstant';
import { AttendanceLeave } from 'src/app/model/attendanceDetail.model';
import { EmployeeLateRequest } from 'src/app/model/attendancelateRequest.model';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { Attendance } from 'src/app/model/attendance.model';


@Component({
  selector: 'app-attendanceapprovals',
  templateUrl: './attendanceapprovals.component.html',
  styleUrls: ['./attendanceapprovals.component.scss']
})
export class AttendanceapprovalsComponent implements OnInit {

  months: { value: string; viewValue: string; }[];
  temp: Date;
  pastYears: number;
  years: number[] = [];
  userObject: { "gemsUserMasterId": any; };
  getattendanceURL;
  public attendanceApprovalListUrl = UrlConstant.attendanceApprovalApi;
  public getEmployeeDetailUrl = UrlConstant.getEmployeeApi;
  public saveAttendanceUrl = UrlConstant.saveAttendance;
  public saveLateRequestUrl = UrlConstant.saveLaterequest;
  addreasonform: FormGroup;
  attendancerecords;
  todayDate: Date;
  selectedmonth: { value: string; viewValue: string; };
  selectedyear: any;
  minDate: Date;
  FromDate: string;
  ToDate: string;
  attendanceObj = new AttendanceLeave();
  gemsEmployeeLateRequest = new EmployeeLateRequest();
  gemsEmployeeMaster: any;
  currentPage = 1;
  totalCount1: any;
  public start: number;
  public limit = 3;
  totalPages = 1;
  gemsEmployeeMasterId:number;
  public perpageOption = [
  
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];
  selectedItemsPerPage = 10;
  public status = "";
  PreLoader: boolean;
  attendanceDetails =new Attendance();
  isData1: boolean = true;
  saveAttendance: any;
  constructor(private genericservice: Genericservice, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) { }

  displayedColumns = ['attendanceDate', 'attendanceInTime', 'attendanceOutTime', 'gemsAttendanceDuration', 'leaveTypeCode',
    'status'];


  ngOnInit() {
    this.PreLoader=true;
    this.todayDate = new Date();
    let currentmonth = this.todayDate.getMonth();
    let currentyear = this.todayDate.getFullYear();
    this.gemsEmployeeMasterId =  localStorage.gemsEmployeeMasterId;
    this.addreasonform = new FormGroup({
      addreason: new FormControl('', Validators.required)
    })

    this.months = [
      { value: '01', viewValue: 'January' },
      { value: '02', viewValue: 'February' },
      { value: '03', viewValue: 'March' },
      { value: '04', viewValue: 'April' },
      { value: '05', viewValue: 'May' },
      { value: '06', viewValue: 'June' },
      { value: '07', viewValue: 'July' },
      { value: '08', viewValue: 'August' },
      { value: '09', viewValue: 'September' },
      { value: '10', viewValue: 'October' },
      { value: '11', viewValue: 'November' },
      { value: '12', viewValue: 'December' }
    ];

    this.selectedmonth = this.months[currentmonth];
    this.selectedyear = currentyear;
    this.temp = new Date();
    let year = this.temp.getFullYear();
    this.pastYears = (this.temp.getFullYear() - 10);
    for (let i = this.pastYears; i <= year; i++) {
      this.years.push(i);
    }
    this.years.reverse();
    this.getEmployee();
    this.getAttendanceByMonth();
  }

  getEmployee() {
    let userObj =
    {
      "gemsUserMasterId": this.encryptdecryptlocalstorage.getLocalStorage('userId')
    }
    return this.genericservice.post(this.getEmployeeDetailUrl, userObj,false).subscribe(employeedata => {
      this.gemsEmployeeMaster = employeedata.data;
    });

  }

  addreasonClicked(attendanceData) {
    this.attendanceObj = attendanceData;
    this.addreasonform.reset();
    
  }
  addReasonForLate() {
    
    this.gemsEmployeeLateRequest.createdBy = this.encryptdecryptlocalstorage.getLocalStorage('employeeId');
    this.gemsEmployeeLateRequest.createdOn = new Date();
    this.gemsEmployeeLateRequest.updatedOn = new Date();
    this.gemsEmployeeLateRequest.isActive = true;
    this.gemsEmployeeLateRequest.updatedBy = 1;
    this.gemsEmployeeLateRequest.updatedOn = new Date();
    this.gemsEmployeeLateRequest.gemsEmployeeMaster = this.gemsEmployeeMaster;
    this.gemsEmployeeLateRequest.remarks = this.addreasonform.controls['addreason'].value;
    this.gemsEmployeeLateRequest.status = 'PENDING';
    this.gemsEmployeeLateRequest.lateRequestDate = this.attendanceObj.attendanceDate;
    this.gemsEmployeeLateRequest.lateDuration = this.attendanceObj.attendanceInTime;
    this.genericservice.post(this.saveLateRequestUrl, this.gemsEmployeeLateRequest,false).subscribe(lateRequestData => {
      this.attendanceDetails.cntEmployeeLateRequest = lateRequestData.data;
      this.attendanceDetails.attendanceDate=this.attendanceObj.attendanceDate;
      this.attendanceDetails.gemsEmployeeMaster=this.gemsEmployeeMaster;
      this.attendanceDetails.cntAttendanceDetailId = this.attendanceObj.cntAttendanceDetailId;
      this.attendanceDetails.attendanceInTime=this.attendanceObj.attendanceInTime;
      this.attendanceDetails.attendanceOutTime=this.attendanceObj.attendanceOutTime;
      this.genericservice.post(this.saveAttendanceUrl, this.attendanceDetails, false).subscribe(attendanceMaster => {
        this.saveAttendance = attendanceMaster.data;
        this.getAttendanceByMonth();

      })
    });
  }



  public getAttendanceByMonth() {
    this.PreLoader=true;
    let attendancemonth = this.selectedmonth.value;
    let attendanceyear = this.selectedyear;
    this.minDate = new Date(this.todayDate);
    let month = this.selectedmonth.value;
    this.FromDate = attendanceyear + '-' +
      attendancemonth + '-' + '01';
    this.ToDate = attendanceyear + '-' +
      attendancemonth + '-' +
      this.getToDate(attendancemonth, attendanceyear);

    const attendanceViewObj = {
      "gemsEmployeeMaster": {
        "currentReportingTo":{
          "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
        }
      }
    };

    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    
    return this.genericservice.post(this.attendanceApprovalListUrl+'?start='+this.start+'&limit='+this.limit, attendanceViewObj,false).subscribe(response => {
      if (response.status.success === 'Success') {
      this.isData1 = true;
      this.attendancerecords = response.data;
      this.totalCount1 = response.totalResult;
      this.PreLoader=false;
      this.findItemsPerPage();
    } else {
      this.isData1 = false;
      this.PreLoader = false;
    }
    }, error => {
      console.log(error)
    })

  }


  goToNext(): void {
    this.currentPage++;
    this.PreLoader=true;
    let attendancemonth = this.selectedmonth.value;
    let attendanceyear = this.selectedyear;
    this.minDate = new Date(this.todayDate);
    let month = this.selectedmonth.value;
    this.FromDate = attendanceyear + '-' +
      attendancemonth + '-' + '01';
    this.ToDate = attendanceyear + '-' +
      attendancemonth + '-' +
      this.getToDate(attendancemonth, attendanceyear);

    const attendanceViewObj = {
      "fromDate": new Date(this.FromDate),
      "toDate": new Date(this.ToDate),
      "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
    };

    this.start =this.start + this.limit;
    this.limit = this.selectedItemsPerPage;
    
     this.genericservice.post(this.attendanceApprovalListUrl+'?start='+this.start+'&limit='+this.limit, attendanceViewObj,false).subscribe(response => {
      if (response.status.success === 'Success') {
      this.isData1 = true;
      this.attendancerecords = response.data;
      this.totalCount1 = response.totalResult;
      this.PreLoader=false;
      this.findItemsPerPage();
    } else {
      this.isData1 = false;
      this.PreLoader = false;
    }
    }, error => {
      console.log(error)
    })

  }
  goToPrev(): void {
    this.currentPage--;
    this.PreLoader=true;
    let attendancemonth = this.selectedmonth.value;
    let attendanceyear = this.selectedyear;
    this.minDate = new Date(this.todayDate);
    let month = this.selectedmonth.value;
    this.FromDate = attendanceyear + '-' +
      attendancemonth + '-' + '01';
    this.ToDate = attendanceyear + '-' +
      attendancemonth + '-' +
      this.getToDate(attendancemonth, attendanceyear);

    const attendanceViewObj = {
      "fromDate": new Date(this.FromDate),
      "toDate": new Date(this.ToDate),
      "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
    };

    this.start =this.start - this.limit;
    this.limit = this.selectedItemsPerPage;
    
     this.genericservice.post(this.attendanceApprovalListUrl+'?start='+this.start+'&limit='+this.limit, attendanceViewObj,false).subscribe(response => {
      if (response.status.success === 'Success') {
      this.isData1 = true;
      this.attendancerecords = response.data;
      this.totalCount1 = response.totalResult;
      this.PreLoader=false;
      this.findItemsPerPage();
    } else {
      this.isData1 = false;
      this.PreLoader = false;
    }
    }, error => {
      console.log(error)
    })
  }

  isLate(intime, maxtime) {
    var a = intime.split(":");
    if (maxtime == null) {
      maxtime = '09:30:00'
    }
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

  getTimeByTimeStampWithReturn(timeStamp: any): any {
    if (timeStamp != null) {
      var date_to_convert = new Date(timeStamp);
      var local_date = new Date();
      date_to_convert.setMinutes(date_to_convert.getMinutes() + local_date.getTimezoneOffset());
      let DateValue = date_to_convert.toString().split(' ');
      return DateValue[4];
    } else { return null; }
  }

  getDateByTime(time: any): any {

    var date = new Date(time);
    var month = date.getMonth() + 1
    var dateFormate = date.getFullYear() + "-" + month + "-" + date.getDate();
    return dateFormate;
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

  getOrganisationWeekOff(attendance) {

    let attendanceDate = new Date(attendance.attendanceDate);
    switch (attendanceDate.getDay()) {
      case 0: if ((!attendance.sunday) && (attendance.sunday != null)) {
        return '(Week Off)'
      }
        break;
      case 1: if ((!attendance.monday) && (attendance.sunday != null)) {
        return '(Week Off)'
      }
        break;
      case 2: if ((!attendance.tuesday) && (attendance.sunday != null)) {
        return '(Week Off)'
      }
        break;
      case 3: if ((!attendance.wednesday) && (attendance.sunday != null)) {
        return '(Week Off)'
      }
        break;
      case 4: if ((!attendance.thursday) && (attendance.sunday != null)) {
        return '(Week Off)'
      }
        break;
      case 5: if ((!attendance.friday) && (attendance.sunday != null)) {
        return '(Week Off)'
      }
        break;
      case 6: if ((!attendance.saturday) && (attendance.sunday != null)) {
        return '(Week Off)'
      }
        break;
    }
  }

  getToDate(month, year): any {

    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
      return 31;
    }
    else if (month == 2) {
      if (year % 4 == 0) {
        return 29;
      } else {
        return 28;
      }
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
      return 30;
    }
  }

  getDuration(duration) {
    if (duration != '' && duration != null && duration != undefined) {
      let d = duration.split(':');
      return d[0] + 'h ' + d[1] + 'm';
    } else {
      return '--';
    }
  }

  changeItemPerPage(event) {
    console.log('event printed' + event)
    this.selectedItemsPerPage = event;
    this.getAttendanceByMonth();
    this.refreshList();
  }

  findItemsPerPage() {
    this.totalPages = Math.ceil(this.totalCount1 / +this.selectedItemsPerPage);
  }
  refreshList()
  {
    this.PreLoader=true;
    let attendancemonth = this.selectedmonth.value;
    let attendanceyear = this.selectedyear;
    this.minDate = new Date(this.todayDate);
    let month = this.selectedmonth.value;
    this.FromDate = attendanceyear + '-' +
      attendancemonth + '-' + '01';
    this.ToDate = attendanceyear + '-' +
      attendancemonth + '-' +
      this.getToDate(attendancemonth, attendanceyear);

    const attendanceViewObj = {
      "fromDate": new Date(this.FromDate),
      "toDate": new Date(this.ToDate),
      "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
    };

    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    
    return this.genericservice.post(this.attendanceApprovalListUrl+'?start='+this.start+'&limit='+this.limit, attendanceViewObj,false).subscribe(response => {
      if (response.status.success === 'Success') {
      this.isData1= true;
      this.attendancerecords = response.data;
      this.totalCount1 = response.totalResult;
      this.PreLoader=false;
      this.findItemsPerPage();
    } else {
      this.isData1 = false;
      this.PreLoader = false;
    }
    }, error => {
      console.log(error)
    })
  }

  actionOnRequest(actionName ,attendanceData) {
    let lateRequestObj = attendanceData.cntEmployeeLateRequest;
    if( actionName === 'approve') {  
    lateRequestObj.status = "APPROVED";
    } else if ( actionName === 'reject') {
    lateRequestObj.status = "REJECTED";
    }
    this.genericservice.post(this.saveLateRequestUrl , lateRequestObj,true).subscribe( response => {
      console.log("Late Request Saved");
      this.attendanceDetails.cntEmployeeLateRequest = response.data;
      this.attendanceDetails.attendanceDate = attendanceData.attendanceDate;
      this.attendanceDetails.gemsEmployeeMaster = this.gemsEmployeeMaster;
      this.attendanceDetails.cntAttendanceDetailId = attendanceData.cntAttendanceDetailId;
      this.attendanceDetails.attendanceInTime = attendanceData.attendanceInTime;
      this.attendanceDetails.attendanceOutTime = attendanceData.attendanceOutTime;
      this.genericservice.post(this.saveAttendanceUrl, this.attendanceDetails, false).subscribe(attendanceMaster => {
        this.saveAttendance = attendanceMaster.data;
        this.getAttendanceByMonth();

      })
    });
    
  }

}
