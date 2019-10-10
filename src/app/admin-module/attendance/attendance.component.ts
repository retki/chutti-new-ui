import { Component, OnInit } from '@angular/core';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
// import { AttendanceLeave } from 'src/app/model/attendanceDetail.model';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from 'src/app/services/urlConstant';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataSharingService } from '../../services/dataSharing.service';

declare var $: any

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  uploadImportAttendanceForm: FormGroup;
  attendanceFilterForm: FormGroup;
  departmentslist: any;
  isData: boolean = false;
  selectedItemsPerPage = 10;
  selectedImportUsing: string;
  totalCount: any;
  start: any;
  limit: any;
  totalPages: number;
  currentPage = 1;
  filterkey;
  status: any = "Active";
  selectedStatus: any;
  order: any;
  orderBy: any;
  public importOption = [
    { value: 'attendanceID', label: 'Attendance Id' },
    { value: 'employeeCode', label: 'Employee Id' },
  ];
  public perpageOption = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];
  employeeAttendanceDataList: any  = [];
  employeeAttendanceData: any;
  uploadFileName: string = 'Upload .xls /.xlxs /.csv file';
  public showFromDate: any;
  public showToDate: any;
  public showDateToModel: any = 'Date';
  public methodChangeFromDate: boolean;
  public filterEmployeeList: any;
  public attendanceSwipeList: any;
  public showAttendanceSwipeEmployeeName:string;
  public showAttendanceSwipeProfileImage:any;
  public showAttendanceSwipeDate: any;
  public preloader: boolean  = false;
  constructor(private genericservice: Genericservice, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private dataSharingService: DataSharingService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.getEmployeeAttendanceByMonth();
    this.inputActive();
    this.createForm();

  }
  createForm() {
    this.attendanceFilterForm = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      departments: ['',Validators.required],
      employee: ['']
    });
    this.uploadImportAttendanceForm = this.formBuilder.group({
      file: ['', Validators.required],
      selectedImportUsing: ['', Validators.required],
    })
  }
  changeItemPerPage(event: any) {
    // this.selectedItemsPerPage = event;
    // this.getEmployeeAttendanceByMonth();
    this.currentPage = 1;
    this.selectedItemsPerPage = parseInt(event);
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.paginatedEemployeeAttendanceDataList();
    this.findItemsPerPage();
  }

  findItemsPerPage() {
    this.totalPages = Math.ceil(this.totalCount / +this.selectedItemsPerPage);
  }

  public getEmployeeAttendanceByMonth() {
    var yesterday = new Date(Date.now() - 864e5); // 864e5 == 86400000 == 24*60*60*1000
    var getMonth = yesterday.getMonth() < 12 ? yesterday.getMonth() + 1 : 1;
    let yesterDay = yesterday.getFullYear()+'-'+getMonth+'-'+yesterday.getDate();
    let payload = { "gemsEmployeeMaster": { "gemsOrganisation": { "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId') }, "gemsDepartment": null } }
    this.preloader = true;
    this.genericservice.post(UrlConstant.getEmployeeAttendanceApi + '?fromDate='+yesterDay+'&toDate='+yesterDay+'&reportType=attendance', payload, false).subscribe(response => {
      if (response !== null) {
        if (response.data !== null) {
          this.isData = true;
          this.employeeAttendanceDataList = response.data
          this.totalCount = response.totalResult;
          this.paginatedEemployeeAttendanceDataList();
          this.findItemsPerPage();
        } else {
          this.isData = false;
        }
      }
      this.preloader = false;
    })
  }

  paginatedEemployeeAttendanceDataList() {
    this.employeeAttendanceData = this.employeeAttendanceDataList.slice(this.start, this.limit);
  }

  goToNext() {
    this.currentPage++;
    this.start = this.start + this.selectedItemsPerPage;
    this.limit = this.limit + this.selectedItemsPerPage;
    this.employeeAttendanceData = this.employeeAttendanceDataList.slice(this.start, this.limit);
  }

  goToPrev() {
    this.currentPage--;
    this.start = this.start - this.selectedItemsPerPage;
    this.limit = this.limit - this.selectedItemsPerPage;
    this.employeeAttendanceData = this.employeeAttendanceDataList.slice(this.start, this.limit);
  }

  formateDateAndTime(dateParam: string | number | Date, type: String): any {
    var date = new Date(dateParam);
    if (type === 'date') {
      var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY',
        'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      var day = date.getDate();
      var year = date.getFullYear();
      var month = months[date.getMonth()];
      return day + " " + month + " " + year;
    } else {
      return date.toLocaleTimeString();
    }
  }

  getDuration(duration: any) {
    if (duration != '' && duration != null && duration != undefined) {
      let d = duration.split(':');
      return d[0] + 'h ' + d[1] + 'm';
    } else {
      return '--';
    }
  }

  inputActive() {
    $(function () {
      const inputValueCheck = $(this).val();
      if (inputValueCheck === '') {
        $('.form-group').addClass('focused');
      }
    });

    $('.form-control').focus(function () {
      $(this)
        .parents('.form-group')
        .addClass('focused');
    });

    $('.form-control').blur(function () {
      const inputValue = $(this).val();
      if (inputValue === '') {
        $(this).removeClass('filled');
        $(this)
          .parents('.form-group')
          .removeClass('focused');
      } else {
        $(this).addClass('filled');
      }
    });
  }

  public changeItemImportUsing(event: any) {
    this.selectedImportUsing = event;
  }

  public onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadFileName = file.name;
      this.uploadImportAttendanceForm.get('file').setValue(file);
    }
    event.target.value = null;

  }

  public uploadEmployeeAttendance() {
    if (this.uploadImportAttendanceForm.valid) {
      this.genericservice.uploadEmployeeAttendance(UrlConstant.importAttendanceApi + '?field=' + this.selectedImportUsing + '&orgId='
       + this.encryptdecryptlocalstorage.getLocalStorage('organizationId'), this.uploadImportAttendanceForm.get('file').value, false).subscribe(response => {
          //five lines are below
          document.getElementById('upload_dismiss_modal_employee_attendance').click();
          this.uploadFileName = 'Upload .xls /.xlxs /.csv file';
          this.dataSharingService.successMessage('Imported Successfully')
          this.getEmployeeAttendanceByMonth();
          this.resetForm();
        //after seting the back end response enable below if and remove above 5 lines. thanks 
        // if(response.type==4) {
        //   console.log(response['body'])
        //   if(response['body'].status.success == 'Fail'){
        //     this.dataSharingService.failureMessage(response['body'].data !== undefined||null?response['body'].data.JsonErrorResponse[0]:'Fail')
        //   }
        //  else if(response['body'].status.success =='Success'){
        //   this.dataSharingService.successMessage(response['body'].data !== undefined||null?response['body'].data.JsonErrorResponse[0]:'Fail')
       
        //   //this.dataSharingService.successMessage('Imported Successfully')
        //   this.getEmployeeAttendanceByMonth();
        //   this.resetForm();
        // }
        // }
      })
    }

  }

  filterByClicked(event: any) {
    this.getDepartmentLists();
    this.getEmployeeList()
    $("#flter").addClass("active");
    $("#tableReSize").removeClass("scroll-2");
    $("#tableReSize").addClass("scroll-1");


  }

  closeFilterForm() {
    $("#flter").removeClass("active");
    $("#tableReSize").removeClass("scroll-1");
    $("#tableReSize").addClass("scroll-2");
    this.attendanceFilterForm.reset();
  }
  sampleDownloadFile() {
    location.href = UrlConstant.downloadAttendanceApi;
  }

  resetForm() {
    this.uploadImportAttendanceForm.reset();
    this.uploadFileName = 'Upload .xls /.xlxs /.csv file';
  }

  getDepartmentLists() {
    let payload = { "gemsOrganisation": { "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'), } }
    this.genericservice.post(UrlConstant.leavereportsApi, payload, false).subscribe(departmentresponse => {
      this.departmentslist = departmentresponse.data;
    })
  }

  getEmployeeList() {
    let payload = { "gemsOrganisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId') }
    this.genericservice.post(UrlConstant.leavereportsemployeeApi, payload, false).subscribe(employeelistresponse => {
      this.filterEmployeeList = employeelistresponse.data;
    })
  }

  submitFilter() {
    if (this.attendanceFilterForm.valid) {
      var gemsEmployeeMaster = this.attendanceFilterForm.controls['employee'].value;
      let payload = {
        "gemsEmployeeMaster": {
          "gemsEmployeeMasterId": gemsEmployeeMaster.gemsEmployeeMasterId != undefined?gemsEmployeeMaster.gemsEmployeeMasterId:null,
          "gemsOrganisation": {
            "gemsOrgId": +this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
          },
          "gemsDepartment": this.attendanceFilterForm.controls['departments'].value != null? this.attendanceFilterForm.controls['departments'].value:''
        },
      }
      this.genericservice.post(UrlConstant.getEmployeeAttendanceApi + '?fromDate=' + this.attendanceFilterForm.controls['fromDate'].value + '&toDate=' + this.attendanceFilterForm.controls['toDate'].value + '&reportType=attendance', payload, false).subscribe(response => {
        if (response !== null) {
          this.employeeAttendanceDataList = response.data
          this.totalCount = response.totalResult;
          if (response.data !== null) {
            this.isData = true;
            this.paginatedEemployeeAttendanceDataList();
            this.findItemsPerPage();
          }
          else {
            this.isData = false;
          }
        }
      })

    }

  }

  onFilterFormDatechange(event: any) {
    this.methodChangeFromDate = true;
    if (event !== undefined) {
      var date = event.year + '-' + event.month + '-' + event.day;
      this.attendanceFilterForm.get('fromDate').setValue(date)
      this.showFromDate = date;
    }
  }
  onFilterToDatechange(event: any) {
    this.methodChangeFromDate = false;
    if (event !== undefined) {
      var date = event.year + '-' + event.month + '-' + event.day;
      this.showToDate = date;
      this.attendanceFilterForm.get('toDate').setValue(date);
    }
  }
  resetFilterFormDate() {
    this.attendanceFilterForm.get('fromDate').setValue('')
    this.showFromDate = '';
  }
  resetFilterToDate() {
    this.showToDate = '';
    this.attendanceFilterForm.get('toDate').setValue('');
  }

  getAttendanceSwipes(attendance: any) {
    if(attendance !== null) {
      this.showAttendanceSwipeDate = attendance.attendanceDate;
      this.showAttendanceSwipeEmployeeName = attendance.gemsEmployeeMaster.employeeFirstName;
      this.showAttendanceSwipeProfileImage ='data:image/png;base64,'+ attendance.gemsEmployeeMaster.gemsUserMaster.profileImgData;
      let payload = {}
      this.genericservice.post(UrlConstant.getAttendanceSwipesApi, payload, false).subscribe(response => {
        if(response !== null) {
          this.attendanceSwipeList = response.data;
        }
      })
    }

  }

}

