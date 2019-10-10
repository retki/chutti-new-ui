import { Component, OnInit } from '@angular/core';
import { Genericservice } from 'src/app/services/genericservices';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { UrlConstant } from 'src/app/services/urlConstant';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WindowRef } from 'src/app/services/WindowRefservices';
@Component({
  selector: 'app-leavereports',
  templateUrl: './leavereports.component.html',
  styleUrls: ['./leavereports.component.scss'],
  providers: [WindowRef]
})
export class LeavereportsComponent implements OnInit {
  leavereportlist;
  leaveTypeControl: FormControl;
  showfilters: boolean;
  leavedepartmentslist: any;
  Leavereportemployeelist: any;
  leavetypelist: { value: string; viewValue: string; }[];
  departmentlist: { value: string; viewValue: string; }[];
  leavetypelists: any;
  leavereportForm: FormGroup;
  FromDate: string;
  ToDate: string;
  employeeMaster: any;
  employeeControl: any;
  dept: any;
  departmentControl: any;
  leaveType: any;
  Leavereportemplist = [];
  getallreportlist: any = [];
  gemsEmployeeMasterId;
  isLeaveReportView: boolean;
  totalCount: any;
  start = 0;
  limit = 10;
  totalPages: number;
  currentPage = 1;
  selectedItemsPerPage = 10;
  paginateSummaryList: any;
  public pageOptions = [

    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];
  isData:boolean = true;
  constructor(private genericservice: Genericservice,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private winRef: WindowRef) {
    this.showfilters = false;
  }
  public leavereportsUrl = UrlConstant.leavereportsApi;
  public LeavereportlistUrl = UrlConstant.leavereportslistApi;
  public LeavereportemployeeUrl = UrlConstant.leavereportsemployeeApi;
  public employeelistUrl = UrlConstant.getemployeeApi;
  ngOnInit() {
    this.getallreports();
    this.getleavetypelist();
    this.getdepartmentlists();
    this.getemployeelist();


    this.leavereportForm = new FormGroup({
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      leavetypes: new FormControl('', Validators.required),
      departments: new FormControl('', Validators.required),
      employee: new FormControl('', Validators.required),


    });


  }



  clickfilter() {


    this.showfilters = !this.showfilters;
  }

  // GET LEAVE TYPE LIST
  getleavetypelist() {
    let payload = {
      "gemsOrganisation": {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
        "isActive": true,
      }
    }
    this.genericservice.post(this.LeavereportlistUrl, payload, false).subscribe(leavetypesresponse => {
      this.leavetypelists = leavetypesresponse.data;
      console.log(this.leavetypelists)

    })

  }


  // GET DEPARTMENT LIST

  getdepartmentlists() {
    let payload = { "gemsOrganisation": { "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'), } }
    this.genericservice.post(this.leavereportsUrl, payload, false).subscribe(departmentresponse => {
      this.leavedepartmentslist = departmentresponse.data;
      console.log(this.leavedepartmentslist)

    })


  }



  // GET EMPLOYEE LIST
  getemployeelist() {
    let payload = { "gemsOrganisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId') }
    this.genericservice.post(this.LeavereportemployeeUrl, payload, false).subscribe(employeelistresponse => {
      this.Leavereportemployeelist = employeelistresponse.data;
      console.log(this.Leavereportemployeelist)



    })

  }


  clear() {
    this.leavereportForm.reset();
  }


  // FILTER
  clicksubmit() {
    this.getallreportlist = [];
    // console.log(this.leavereportForm.value)
    // this.FromDate = this.leavereportForm.value.from.getFullYear() + '-' +
    //   (this.leavereportForm.value.from.getMonth() + 1) + '-' +
    //   this.leavereportForm.value.from.getDate();
    // this.ToDate = this.leavereportForm.value.to.getFullYear() + '-' +
    //   (this.leavereportForm.value.to.getMonth() + 1) + '-' +
    //   this.leavereportForm.value.to.getDate();

    this.employeeMaster = this.leavereportForm.value.employee;
    this.dept = this.leavereportForm.value.departments;
    this.leaveType = this.leavereportForm.value.leavetypes;
    let gemsEmployeeMasterId = '';

    (this.leavereportForm.value.employee != null && this.leavereportForm.value.employee !== "") ?
      gemsEmployeeMasterId = this.leavereportForm.value.employee.gemsEmployeeMasterId : gemsEmployeeMasterId = null;

    (this.leavereportForm.value.departments != null && this.leavereportForm.value.departments !== "") ?
      this.dept = this.leavereportForm.value.departments : this.dept = null;

    (this.leavereportForm.value.leavetypes != null && this.leavereportForm.value.leavetypes !== "") ?
      this.leaveType = this.leavereportForm.value.leavetypes : this.leaveType = null;

    let reportObj = {
      "createdBy": {
        "gemsEmployeeMasterId": gemsEmployeeMasterId,
        "gemsOrganisation": {
          "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
        },
        "gemsDepartment": this.dept
      },
      "gemsEmplyeeLeaveSummary": {
        "gemsLeaveTypeMaster": this.leaveType
      }
    }

    this.genericservice.post(this.employeelistUrl + this.leavereportForm.value.from + "&toDate=" + this.leavereportForm.value.to, reportObj, false).subscribe(employeeresponse => {
      this.getallreportlist = employeeresponse.data;
      console.log(this.getallreportlist)
      if (this.getallreportlist == null || this.getallreportlist.length == 0) {
        this.isLeaveReportView = false;
      } else {
        this.isLeaveReportView = true;
      }

    })
  }

  // DOWNLOAD

  exportAttendanceReport(event) {
   

    let gemsEmployeeMasterId;
    let gemsDepartmentId;
    let gemsLeaveTypeMasterId;

    this.leavereportForm.value.dept != null ? gemsDepartmentId = this.dept.gemsDepartmentId + '' :
      gemsDepartmentId = '';

    (this.leavereportForm.value.employee != null && this.leavereportForm.value.employee != '') ?
      gemsEmployeeMasterId = this.employeeMaster.gemsEmployeeMasterId + '' : gemsEmployeeMasterId = '';



    if (this.leavereportForm.value.leavetypes == null || this.leavereportForm.value.leavetypes == '' || this.leavereportForm.value.leavetypes == undefined) {
      gemsLeaveTypeMasterId = '';
    }
    else {
      gemsLeaveTypeMasterId = this.leavereportForm.value.leavetypes.gemsLeaveTypeMasterId + ''
    }

    if (gemsEmployeeMasterId == "" || gemsEmployeeMasterId == undefined || gemsEmployeeMasterId == 'undefined') {
      gemsEmployeeMasterId = '';
    }
    if (gemsLeaveTypeMasterId == undefined || gemsLeaveTypeMasterId == "" || gemsLeaveTypeMasterId == 'undefined') {
      gemsLeaveTypeMasterId = '';
    }
    if (gemsDepartmentId == "" || gemsDepartmentId == null || gemsDepartmentId == undefined || gemsDepartmentId == 'undefined') {
      gemsDepartmentId = '';
    }

    let LEAVE_EXPORT_POST = 'http://test-chutti.cloudnowtech.net/core/api/v1/app-chutti/exportLeaveReport?fromDate='
    let serviceURL = LEAVE_EXPORT_POST + this.leavereportForm.value.from + "" + '&toDate=' + this.leavereportForm.value.to + '&fileType=PDF'
      + '&gemsOrgId=' + this.encryptdecryptlocalstorage.getLocalStorage('organizationId') + '&gemsEmployeeMasterId=' + gemsEmployeeMasterId
      + '&gemsDepartmentId=' + gemsDepartmentId + '&gemsLeaveTypeMasterId=' + gemsLeaveTypeMasterId;
    this.winRef.getNativeWindow().open(serviceURL, '_blank');
    console.log(serviceURL);

    

  }



  // GET ALL REPORTS BEFORE 7DAYS
  getallreports() {
    let ourDate = new Date();
    var pastDate = ourDate.getDate() - 7;
    ourDate.setDate(pastDate);
    console.log(ourDate);
    var prevDate = new Date(ourDate.setDate(pastDate)),
      mnth = ("0" + (prevDate.getMonth() + 1)).slice(-2),
      day = ("0" + prevDate.getDate()).slice(-2);
    this.FromDate = [prevDate.getFullYear(), mnth, day].join("-");
    console.log(this.FromDate);

    let currentDate = new Date();
    var toDate = currentDate.getDate() - 1;
    var date = new Date(ourDate.setDate(toDate)),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    this.ToDate = [date.getFullYear(), mnth, day].join("-");
    console.log(this.ToDate);

    let reportObj =
    {
      "createdBy":
        { "gemsEmployeeMasterId": this.gemsEmployeeMasterId, "gemsOrganisation": { "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId') }, "gemsDepartment": this.dept }, "gemsEmplyeeLeaveSummary": { "gemsLeaveTypeMaster": this.leaveType }
    }
     this.genericservice.post(this.employeelistUrl + this.FromDate + "&toDate=" + this.ToDate, reportObj, false).subscribe(employeeresponse => {
    this.getallreportlist = employeeresponse.data; 
    console.log('getallreportlist', this.getallreportlist)
    });

  }

  /*
   *  TO GET LEAVE DURATION FORMAT BY ITS TYPE
   */

  getLeaveDurationByType(LeaveReportObj) {
    if (LeaveReportObj.transactionType === 'PER') {
      if (LeaveReportObj.permissionDuration < 1) {
        return LeaveReportObj.permissionDuration + ' mins'
      } else if (LeaveReportObj.permissionDuration >= 1) {
        return LeaveReportObj.permissionDuration + ' hrs'
      }
    } else if (LeaveReportObj.transactionType === 'LEA') {
      if (LeaveReportObj.permissionDuration <= 1) {
        return LeaveReportObj.permissionDuration + ' day'
      } else if (LeaveReportObj.permissionDuration > 1) {
        return LeaveReportObj.permissionDuration + ' Days'
      }
    } else if (LeaveReportObj.transactionType === 'OD') {
      if (this.convertDateToDB(new Date(LeaveReportObj.fromDate)) ==
        this.convertDateToDB(new Date(LeaveReportObj.toDate))) {
        if (LeaveReportObj.permissionDuration < 1) {
          return LeaveReportObj.permissionDuration + ' mins'
        } else if (LeaveReportObj.permissionDuration >= 1) {
          return LeaveReportObj.permissionDuration + ' hrs'
        }
      } else {
        if (LeaveReportObj.permissionDuration <= 1) {
          return LeaveReportObj.permissionDuration + ' day'
        } else if (LeaveReportObj.permissionDuration > 1) {
          return LeaveReportObj.permissionDuration + ' Days'
        }
      }
    }
  }

  // TO CONVERT DATE VALUE TO STRING //

  convertDateToDB(dateValue: Date) {
    let date = dateValue;
    return (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
  }
  goToNext() {
    this.currentPage++;
    this.start = this.start + this.selectedItemsPerPage;
    this.limit = this.limit + this.selectedItemsPerPage;
    this.paginateSummaryList = this.getallreportlist.slice(this.start, this.limit);
  }
  goToPrev() {
    this.currentPage--;
    this.start = this.start - this.selectedItemsPerPage;
    this.limit = this.limit - this.selectedItemsPerPage;
    this.paginateSummaryList = this.getallreportlist.slice(this.start, this.limit);
  }
  findItemsPerPage() {
    this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);
  }
  changeItemPerPage(event) {
    this.currentPage = 1;
    this.selectedItemsPerPage = parseInt(event);
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.paginatedSummaryList();
    this.findItemsPerPage();
  }
  goToPageNo(event) {
    console.log('on page change')
  }
  paginatedSummaryList() {
    this.paginateSummaryList = this.getallreportlist.slice(this.start, this.limit);
  }
 
}