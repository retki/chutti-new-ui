import {
    Component, OnInit, Renderer, AfterViewInit, ViewChild, ElementRef, Directive,
    Input, Inject, ViewEncapsulation
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { commonService } from '../../../services/commonMethodService';
import { Genericservice } from '../../../services/genericservices';
import { UrlConstant } from '../../../services/urlConstant';
import { ValidatingForm } from '../../../services/ValidatingForm';
import { MessageConstant } from '../../../services/messageConstant'
import { Moment } from 'moment';
import { Injectable } from '@angular/core';
import { EncryptDecryptLocalStorageService } from '../../../services/encrypt-decrypt-localstorage.service';
import { DataSharingService } from 'src/app/services/dataSharing.service';
import { start } from 'repl';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime } from 'rxjs/operators';

declare var $: any;




@Component({
    selector: 'app-quick-apply',
    templateUrl: './quick-apply.component.html',
    styleUrls: ['./quick-apply.component.scss']

})

export class QuickApplyComponent extends ValidatingForm implements OnInit, AfterViewInit {
    @Input('dashBoardPaginationView') dashBoardPaginationView: boolean = true;


    public leaveSummaryList: any[] = [];
    public empLeaveSummaryObj: any;
    public empLeaveEntitled: number;
    NON_WORKINGDAYS_LEAVE_ERROR_MESSAGE: string;
    APPLY_LEAVE_ERROR: string;
    NO_REPORTING_MANAGER: string;
    APPLY_PERMISSION: string;
    APPLY_PERMISSION_ERROR: string;
    APPLY_ONDUTY: string;
    APPLY_ONDUTY_ERROR: string;
    gemsEmployeeMasterId: number;
    public leaveSummaryUrl = UrlConstant.leaveSummaryApi;
    public getUserUrl = UrlConstant.getUserAPi;
    public getLeaveParamUrl = UrlConstant.getLeaveParamAPi;
    public applyLeaveUrl = UrlConstant.applyLeaveAPi
    public getOrgParmUrl = UrlConstant.getOrgParmApi
    public getLeaveStatusUrl = UrlConstant.getLeaveStatusApi;
    public saveNotificationURL = UrlConstant.saveNotificationApi;
    allEventsUrl = UrlConstant.allEvents;

    saveEventUrl = UrlConstant.saveEvent;
    googleSyncUrl = UrlConstant.googleSyncUrl;
    getHolidaysUrl = UrlConstant.holidayList;

    quickLeaveForm: FormGroup;
    quickPermisstionForm: FormGroup;
    quicOnDutyForm: FormGroup;
    leaveTypesControl: FormControl;
    //time:FormControl;
    perInTime;
    perOutTime;
    inTimeControl: FormControl;
    outTimeControl: FormControl;
    perInTimeControl: FormControl;
    perOutTimeControl: FormControl;
    validLeaveType: boolean;
    gemsEmployeeMasterObj: any = null;
    halfLeaveType: any;
    halfdayflog: boolean = true;
    halfdaychkflog: boolean;
    noonFlag: boolean;
    type: string = 'LEA';
    lveParamDetails: any = null;
    orgParamDetails: any = null;
    isLoadingResults: boolean;
    elAvailableAfter: any;
    holidayList: any;
    availableperHour: number;
    max: number;
    employeeLeaveMaster: any[] = [];
    messageStore: MessageConstant;
    public employeeMaster: any[] = [];
    public leaveSummaryWithODPERList: any[] = [];
    isActive: boolean;
    data2: any = null;
    noRecentLeaveRecordsFound: boolean;
    dataSource1: any[] = [];
    lopObject: any;
    inValidOutTime: boolean;
    hoursflog: boolean = true;
    timeFlag: boolean;
    inTime;
    outTime;
    leaveSummary: any;
    meridian = true;
    spinners = false;
    permissionStartTimepicker;
    permissionEndTimepicker;
    permissionDate = 'DATE';
    startTimepickerAM = true;
    startTimepickerPM = false;
    endTimepickerAM = false;
    endTimepickerPM = true;
    leaveType: any;
    leaveReason: string;
    public options1: any = {
        locale: {
            format: 'DD MMM YYYY',
            'applyLabel': 'Done',
            'cancelLabel': 'Cancel',
        },
        opens: 'right',
        autoUpdateInput: false,
    };
    public options2: any = {
        locale: {
            format: 'DD MMM YYYY',
            'applyLabel': 'Done',
            'cancelLabel': 'Cancel',
        },
        // autoUpdateInput: false,
        timePicker: true,
        opens: 'right'
    };
    public options3: any = {
        locale: {
            format: 'DD MMM YYYY',
            'applyLabel': 'Done',
            'cancelLabel': 'Cancel',
        },
        autoUpdateInput: false,
        // timePicker:true,
        opens: 'right'
    };
    data1: any;
    isLop: boolean;
    lopFromDate: Date;
    lopToDate: Date;
    lopDays: number;
    lopLeaveType: any;
    endTimepickerAMOrPM: string;
    startTimePickerAMOrPM: string;
    //daterangepicker
    hoveredDate: NgbDate;
    fromDate: NgbDate;
    toDate: NgbDate;
    finalDateFrom: string;
    finalDateTo: string;
    startLeaveDate: string;
    EndLeaveDate: string;
    //onduty daterangepicker
    hoveredDateOnDuty: NgbDate;
    fromDateOnDuty: NgbDate;
    toDateOnDuty: NgbDate;
    finalDateFromOnDuty: string;
    finalDateToOnDuty: string;
    startLeaveDateOnDuty: string;
    EndLeaveDateOnDuty: string;
    today: NgbDate;
    leaveTypeChecked: boolean = false;
    //ON DUTY
    onDutyChecked: boolean = true;
    inTimeHour;
    inTimeMinute;
    outTimeHour;
    outTimeMinute;
    onDutystartTimepickerAM: boolean;
    onDutystartTimepickerPM: boolean;
    onDutyendTimepickerAM: boolean;
    onDutyendTimepickerPM: boolean;
    onDutyEndAMorPM: any = 'AM';
    onDutyStartAMorPM: any = 'AM';
    isChecked: boolean = true;
    lopBalanceLeave: any;
    leaveDisable: boolean = true;
    public preloader: boolean = false;
    constructor(private urlconstant: UrlConstant, private genericservice: Genericservice, private commonservice: commonService,
        private messageConstant: MessageConstant, private commonService: commonService, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
        private dataSharingService: DataSharingService, calendar: NgbCalendar) {
        super();
        this.isLoadingResults = false;
        this.messageStore = messageConstant
        this.isActive = true;
        this.timeFlag = false;
        this.isLop = true;
        this.NON_WORKINGDAYS_LEAVE_ERROR_MESSAGE = messageConstant.NON_WORKINGDAYS_LEAVE_ERROR_MESSAGE;
        this.APPLY_LEAVE_ERROR = messageConstant.APPLY_LEAVE_ERROR;
        this.NO_REPORTING_MANAGER = messageConstant.NO_REPORTING_MANAGER;
        this.APPLY_PERMISSION = messageConstant.APPLY_PERMISSION;
        this.APPLY_PERMISSION_ERROR = messageConstant.APPLY_PERMISSION_ERROR;
        this.APPLY_ONDUTY = messageConstant.APPLY_ONDUTY;
        this.APPLY_ONDUTY_ERROR = messageConstant.APPLY_ONDUTY_ERROR;
        this.permissionStartTimepicker = { hour: 9, minute: 30, second: 0 };
        this.permissionEndTimepicker = { hour: 10, minute: 0, second: 0 };
        this.fromDate = calendar.getToday();
        this.fromDateOnDuty = calendar.getToday();
        this.today = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        this.toDateOnDuty = calendar.getNext(calendar.getToday(), 'd', 10);

        this.dataSharingService.appliedFlagObs.subscribe(data => {

            console.log('called..........')
            if (data == 'true') {
                console.log('called..........')
                this.fromDate = calendar.getToday();
                this.today = calendar.getToday();
                this.isRange(this.fromDate);
                this.getEmployeeByUserId();
            }
        })
    }

    ngOnInit() {
        this.getEmployeeByUserId();
        this.createQuickLeaveForm();
        this.getUserObj();
        this.removeclass();
        this.getLeaveParam();
        this.getOrganisationParam();
        this.getHolidays();
        this.timeFlag = false;
        this.leaveTypesControl = new FormControl('', [Validators.required]);

    }
    getHolidays() {
        let reqPayload = {
            "gemsOrganisation": {
                "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
            }
        }
        this.genericservice.post(this.getHolidaysUrl, reqPayload, false).subscribe(res => {
            // this.preloader = false;
            this.holidayList = res.data;
        });
    }
    //daterangepicker methods
    onDateSelection(date: NgbDate) {
        this.halfLeaveType = '';
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
            this.finalDateFrom = this.fromDate.month + '-' + this.fromDate.day + '-' + this.fromDate.year;
        } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
            this.finalDateTo = this.toDate.month + '-' + this.toDate.day + '-' + this.toDate.year;

        } else {
            this.toDate = null;
            this.fromDate = date;
            this.finalDateFrom = this.fromDate.month + '-' + this.fromDate.day + '-' + this.fromDate.year;
            this.finalDateTo = this.fromDate.month + '-' + this.fromDate.day + '-' + this.fromDate.year;

        }
        this.startLeaveDate = this.formatDate2(this.finalDateFrom);
        this.EndLeaveDate = this.formatDate2(this.finalDateTo);
        if (this.startLeaveDate == this.EndLeaveDate) {
            this.halfdayflog = true;
            this.leaveTypeChecked = false;
            this.noonFlag = false;
        } else {
            this.halfdayflog = false;
            this.leaveTypeChecked = false;
            this.noonFlag = false;
        }

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
        this.permissionDate = this.formatDate(date);
        this.quickPermisstionForm.controls['daterange'].setValue(this.permissionDate);
    }
    setValues() {

        this.quickLeaveForm.controls['daterange'].setValue(this.startLeaveDate + "-" + this.EndLeaveDate);
    }
    resetFormInDatePicker() {

        this.quickLeaveForm.controls['daterange'].setValue('');
        this.startLeaveDate = this.formatDate(new Date());
        this.EndLeaveDate = this.formatDate(new Date());
        this.fromDate = this.today;
        this.toDate = this.today;
        let obj = { target: { 'checked': false } };
        this.halfdaychkfun(obj);
        this.halfdayflog = true;
        this.leaveTypeChecked = false;
    }
    //daterangepicker ends
    //daterangepicker onduty methods
    onDutyDateSelection(date: NgbDate) {

        if (!this.fromDateOnDuty && !this.toDateOnDuty) {
            this.fromDateOnDuty = date;
            this.finalDateFromOnDuty = this.fromDateOnDuty.month + '-' + this.fromDateOnDuty.day + '-' + this.fromDateOnDuty.year;
        } else if (this.fromDateOnDuty && !this.toDateOnDuty && date.after(this.fromDateOnDuty)) {
            this.toDateOnDuty = date;
            this.finalDateToOnDuty = this.toDateOnDuty.month + '-' + this.toDateOnDuty.day + '-' + this.toDateOnDuty.year;

        } else {
            this.toDateOnDuty = null;
            this.fromDateOnDuty = date;
            this.finalDateFromOnDuty = this.fromDateOnDuty.month + '-' + this.fromDateOnDuty.day + '-' + this.fromDateOnDuty.year;
            this.finalDateToOnDuty = this.fromDateOnDuty.month + '-' + this.fromDateOnDuty.day + '-' + this.fromDateOnDuty.year;

        }
        // if( this.toDate == null ) {
        //   this.toDate = date;
        //   this.finalDateTo = this.toDate.month + '-' + this.toDate.day + '-' + this.toDate.year;  
        // }
        this.startLeaveDateOnDuty = this.formatDate2(this.finalDateFromOnDuty);
        this.EndLeaveDateOnDuty = this.formatDate2(this.finalDateToOnDuty);

        if (this.startLeaveDateOnDuty == this.EndLeaveDateOnDuty) {
            this.hoursflog = true;
        } else {
            this.hoursflog = false;
        }
        this.timeFlag = false;
        this.onDutyChecked = false;

    }

    isOnDutyHovered(date: NgbDate) {
        return this.fromDateOnDuty && !this.toDateOnDuty && this.hoveredDateOnDuty && date.after(this.fromDateOnDuty) && date.before(this.hoveredDateOnDuty);
    }

    isOnDutyInside(date: NgbDate) {
        return date.after(this.fromDateOnDuty) && date.before(this.toDateOnDuty);
    }

    isOnDutyRange(date: NgbDate) {
        return date.equals(this.fromDateOnDuty) || date.equals(this.toDateOnDuty) || this.isOnDutyInside(date) || this.isOnDutyHovered(date);
    }
    onDutySelectedDate(e) {
        var date = e.year + '-' + e.month + '-' + e.day
        this.permissionDate = this.formatDate(date);
        this.quicOnDutyForm.controls['onDutyDate'].setValue(this.permissionDate);
    }
    setOnDutyValues() {
        if (this.inTime == null || this.outTime == null || this.inTime == undefined || this.outTime == undefined) {
            this.quicOnDutyForm.controls['onDutyDate'].setValue(this.startLeaveDateOnDuty + "-" + this.EndLeaveDateOnDuty);
        } else {
            this.inTime.hour = this.inTime.hour == 0 ? 12 : this.inTime.hour > 12 ? this.inTime.hour - 12 : this.inTime.hour;
            this.inTime.hour = this.inTime.hour.toString().length == 1 ? '0' + this.inTime.hour.toString() : this.inTime.hour.toString();
            this.inTime.minute = this.inTime.minute.toString().length == 1 ? '0' + this.inTime.minute : this.inTime.minute;
            this.outTime.hour = this.outTime.hour == 0 ? 12 : this.outTime.hour > 12 ? this.outTime.hour - 12 : this.outTime.hour;
            this.outTime.hour = this.outTime.hour.toString().length == 1 ? '0' + this.outTime.hour.toString() : this.outTime.hour.toString();
            this.outTime.minute = this.outTime.minute.toString().length == 1 ? '0' + this.outTime.minute : this.outTime.minute;

            let timeForOnDuty = '(' + this.inTime.hour + ':' + this.inTime.minute + this.onDutyStartAMorPM + '-'
                + this.outTime.hour + ':' + this.outTime.minute + '' + this.onDutyEndAMorPM + ')';
            this.quicOnDutyForm.controls['onDutyDate'].setValue(this.startLeaveDateOnDuty + "-" + this.EndLeaveDateOnDuty + ' ' + timeForOnDuty);
        }
    }
    resetOnDutyDatePicker() {
        this.quicOnDutyForm.controls['onDutyDate'].setValue('');
        this.startLeaveDateOnDuty = this.formatDate(new Date());
        this.EndLeaveDateOnDuty = this.formatDate(new Date());
        this.fromDateOnDuty = this.today;
        this.toDateOnDuty = this.today;
        this.onDutyChecked = false;
        this.hoursflog = true;
        this.timeFlag = false;
        this.inTime = null;
        this.outTime = null;
        this.onDutyEndAMorPM = "AM";
        this.onDutyStartAMorPM = "AM";
    }
    //daterangepicker ends
    goToConfirmLop(leaveForm) {
    }
    ngAfterViewInit() {
        let obj = { target: { 'value': 'LEA' } };
        this.radioChange(obj);
        // var ctx = document.getElementById("attendance-pie-chart-id");
        // let tsnString = (document.getElementById("attendance-pie-chart-id") as HTMLTextAreaElement).value;
        // tsnString.style.height = 60;

        //document.getElementById('attendance-pie-chart-id').setAttribute("height", '210');
        // this.getAttendance();
    }
    radioChange(event) {
        if (event != undefined) {
            this.type = event.target.value;
            this.quickLeaveForm.controls['daterange'].setValue('');
            this.quickLeaveForm.reset();
            this.quickLeaveForm.controls['daterange'].setValue('');

            this.removeclass();


            this.quickLeaveForm.reset();
            this.quickLeaveForm.controls['daterange'].setValue('');
            this.leaveTypesControl.reset();
            this.quickPermisstionForm.reset();

            this.quicOnDutyForm.reset();
            // this.halfdayflog = false;
            this.noonFlag = false;
            this.timeFlag = false;
            if (this.type == 'LEA') {
                // $('input#resetValue').val('');
                if (this.quickLeaveForm.controls['reason'].disabled == true) {
                    this.quickLeaveForm.controls['reason'].enable();
                }
            }
            this.resetFormInDatePicker();
            this.resetOnDutyDatePicker();
            this.hoursflog = true;
            this.timeFlag = false;
        }
    }

    startTimepickerAMOrPM(event) {
        if (event === 'AM') {
            $('#am').addClass('active');
            $('#pm').removeClass('active');
            this.startTimepickerAM = true;
            this.startTimepickerPM = false;
        } else if (event === 'PM') {
            $('#pm').addClass('active');
            $('#am').removeClass('active');
            this.startTimepickerAM = false;
            this.startTimepickerPM = true;
        }
    }
    endTimepickerAMorPM(event) {
        if (event === 'AM') {
            $('#amEnd').addClass('active');
            $('#pmEnd').removeClass('active');
            this.endTimepickerAM = true;
            this.endTimepickerPM = false;
        } else if (event === 'PM') {
            $('#pmEnd').addClass('active');
            $('#amEnd').removeClass('active');
            this.endTimepickerAM = false;
            this.endTimepickerPM = true;
        }

    }
    resetPermissionForm() {
        this.startTimepickerAM = true;
        this.endTimepickerPM = true;
        this.permissionStartTimepicker = { hour: 9, minute: 30, second: 0 };
        this.permissionEndTimepicker = { hour: 10, minute: 0, second: 0 };
        this.permissionDate = 'DATE';
        this.quickPermisstionForm.controls['onPerDate'].setValue('');
    }
    reset() {
        this.quickPermisstionForm.reset();
    }

    getEmployeeByUserId() {

        this.leaveSummaryList = [];

        console.log(this.encryptdecryptlocalstorage.getLocalStorage('employeeId'))

        let employeeSummaryViewObj = {
            "employeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            "gemsOrganisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
            "isActive": true
        }



        this.genericservice.post(this.leaveSummaryUrl, employeeSummaryViewObj, false)
            .subscribe(leaveSummaryListData => {

                console.log(leaveSummaryListData.data)
                let leavetypeList = []
                this.leaveSummaryWithODPERList = leaveSummaryListData.data;
                leavetypeList = leaveSummaryListData.data;
                this.leaveSummaryList = [];
                leavetypeList.forEach(leaveSummary => {

                    if (leaveSummary !== null && (leaveSummary.leaveTypeCode !== 'OD'
                        && leaveSummary.leaveTypeCode !== 'PER')) {
                        this.leaveSummaryList.push(leaveSummary);

                    }

                });


            })



    }

    createQuickLeaveForm() {
        this.quickLeaveForm = new FormGroup({
            daterange: new FormControl('', [Validators.required]),
            leaveType: new FormControl('', [Validators.required]),
            reason: new FormControl('', [Validators.required, validSpace]),
        });
        this.quickPermisstionForm = new FormGroup({
            onPerDate: new FormControl('', [Validators.required]),
            reason: new FormControl('', [Validators.required, validSpace]),
            // time: new FormControl('', [Validators.required]),
        })
        this.quicOnDutyForm = new FormGroup({
            onDutyDate: new FormControl('', [Validators.required]),
            reason: new FormControl('', [Validators.required, validSpace]),
            inTimeControl: new FormControl(),
            outTimeControl: new FormControl()
        })
    }
    getUserObj() {

        let userObj =
            {

                gemsUserMasterId: this.encryptdecryptlocalstorage.getLocalStorage('userId'),

            }
        this.genericservice.post(this.getUserUrl, userObj, false)
            .subscribe(userdata => {
                this.gemsEmployeeMasterObj = userdata.data
                this.encryptdecryptlocalstorage.setToLocalStorage('reportingManagerId', this.gemsEmployeeMasterObj.currentReportingTo.gemsEmployeeMasterId);
            })
    }
    getLeaveParam() {
        this.preloader = true;
        this.isLoadingResults = true;
        let paramOgj = {
            'gemsOrganisation': {
                'gemsOrgId': this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
            }
        }
        this.genericservice.post(this.getLeaveParamUrl, paramOgj, false).subscribe(response => {
            if (response != null) {

                this.lveParamDetails = response.data;
                this.availableperHour = response.gemsMaxPerHour;
                this.max = this.availableperHour;
                this.elAvailableAfter = response.effectiveAfter;

            }
        })
        this.preloader = false;

    }
    getOrganisationParam() {
        let paramOgj = {
            'gemsOrganisation': {
                'gemsOrgId': this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
            }
        }
        return this.genericservice.post(this.getOrgParmUrl, paramOgj, false).subscribe(response => {
            this.orgParamDetails = response.data;
        });
    }
    ForHalfdayFun(e) {

        // this.quickLeaveForm.controls['daterange'].setValue(e)
        if (e != null && e != undefined) {

            var SDate = new Date(e.start);
            var SDateValue = SDate.getFullYear() + "-" + (SDate.getMonth() + 1) + "-" + SDate.getDate();
            var EDate = new Date(e.end);
            var EDateValue = EDate.getFullYear() + "-" + (EDate.getMonth() + 1) + "-" + EDate.getDate();

            this.quickLeaveForm.controls['daterange'].setValue(this.formatDate(SDateValue) + ' - ' + this.formatDate(EDateValue));

            if (SDateValue == EDateValue) {

                this.halfdayflog = true;


            } else {
                this.halfdaychkflog = false;
                this.halfdayflog = false;
                this.noonFlag = false;
            }
        }
    }
    onPermissionDate(e) {
        var date = e.year + '-' + e.month + '-' + e.day
        this.permissionDate = this.formatDate(date);
        this.quickPermisstionForm.controls['onPerDate'].setValue(this.permissionDate);

    }
    setPermissionValues() {
        var permissionStartHoure = this.permissionStartTimepicker.hour >= 13 ? this.permissionStartTimepicker.hour - 12 : this.permissionStartTimepicker.hour === 0 ? '12' : this.permissionStartTimepicker.hour >= 10 ? this.permissionStartTimepicker.hour : '0' + this.permissionStartTimepicker.hour;
        var permissionStartMinute = this.permissionStartTimepicker.minute >= 10 ? this.permissionStartTimepicker.minute : '0' + this.permissionStartTimepicker.minute;
        this.startTimePickerAMOrPM = this.startTimepickerAM === true ? 'AM' : 'PM';
        var permissionEndHoure = this.permissionEndTimepicker.hour >= 13 ? this.permissionEndTimepicker.hour - 12 : this.permissionEndTimepicker.hour === 0 ? '12' : this.permissionEndTimepicker.hour >= 10 ? this.permissionEndTimepicker.hour : '0' + this.permissionEndTimepicker.hour;
        var permissionEndMinute = this.permissionEndTimepicker.minute >= 10 ? this.permissionEndTimepicker.minute : '0' + this.permissionEndTimepicker.minute;
        this.endTimepickerAMOrPM = this.endTimepickerAM === true ? 'AM' : 'PM';
        var startTimeLabel = permissionStartHoure + ':' + permissionStartMinute + ' ' + this.startTimePickerAMOrPM;
        var endTimeLabel = permissionEndHoure + ':' + permissionEndMinute + ' ' + this.endTimepickerAMOrPM;
        this.quickPermisstionForm.controls['onPerDate'].setValue(this.permissionDate + ' ' + startTimeLabel + '-' + endTimeLabel);
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
    formatDate2(paramdate1) {
        console.log("paramdate1.........." + paramdate1)
        var paramdate2: string = paramdate1;
        var paramdate = paramdate2.replace(/-/g, "/");
        console.log("paramdate.........." + paramdate)
        var date = new Date(paramdate);
        console.log("date.........." + date)
        var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY',
            'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        var day = date.getDate();
        var year = date.getFullYear();
        var month = months[date.getMonth()];
        console.log("day..." + day + "year...." + year + "month..." + month)
        return day + " " + month + " " + year;
    }

    halfdaychkfun(event) {
        let input = event.target.checked

        if (input === true) {

            this.halfdayflog = true;
            this.noonFlag = true;
            this.halfLeaveType = "FORE";
            this.leaveTypeChecked = true;
        }
        if (input === false) {
            // this.halfdayflog = false;
            this.noonFlag = false;
            this.halfLeaveType = '';
            this.leaveTypeChecked = false;

        }
        // this.isChecked = true;
        // let obj = { target: { 'value': 'LEA' } };
        // this.radioChange(obj);
    }
    onDutyHoursfun(event) {
        this.inTime = null;
        this.outTime = null;
        let input = event.target.checked
        if (input === true) {
            this.hoursflog = true;
            this.timeFlag = true;
            this.onDutyChecked = true;

        }
        if (input === false) {
            this.hoursflog = true;
            this.timeFlag = false;
            this.onDutyChecked = false;

        }

    }
    onDutyHalfdaychkfun(event) {
        let FDate = new Date(event.start);
        let SecDate = new Date(event.end);
        let FDateconcot = FDate.getFullYear() + "-" + (FDate.getMonth() + 1) + "-" + FDate.getDate();
        let SecDateconcot = SecDate.getFullYear() + "-" + (SecDate.getMonth() + 1) + "-" + SecDate.getDate();
        this.quicOnDutyForm.controls['onDutyDate'].setValue(this.formatDate(FDateconcot) + ' - ' + this.formatDate(SecDateconcot))
        if (FDateconcot == SecDateconcot) {
            this.hoursflog = true;

        } else {
            this.hoursflog = false;
            this.timeFlag = false;

        }
    }

    //OnDuty AM or PM
    onDutyStartAMOrPM(event) {
        if (event === 'AM') {
            $('#amODStart').addClass('active');
            $('#pmODStart').removeClass('active');
        } else if (event === 'PM') {
            $('#pmODStart').addClass('active');
            $('#amODStart').removeClass('active');
        }
        this.onDutyStartAMorPM = event;
    }
    onDutyEndAMOrPM(event) {
        if (event === 'AM') {
            $('#amODEnd').addClass('active');
            $('#pmODEnd').removeClass('active');
        } else if (event === 'PM') {
            $('#pmODEnd').addClass('active');
            $('#amODEnd').removeClass('active');
        }
        $(".onDutyEndAmorPM").click(function () {
            $('.onDutyEndAmorPM').removeClass('active');
            $(this).addClass('active');
        })
        this.onDutyEndAMorPM = event;
    }
    getWorkingDays(totaldays, fromDate, toDate) {
        let count = totaldays;
        let day = new Date(fromDate);
        for (let i = 1; i <= totaldays; i++) {
            //debugger
            let daycount = day.getDay();
            if (this.lveParamDetails.isNonWorkingDay) {
                if (!this.orgParamDetails.isSunday && daycount == 0) {
                    count = count - 1;
                }
                if (!this.orgParamDetails.isMonday && daycount == 1) {
                    count = count - 1;
                }
                if (!this.orgParamDetails.isTuesday && daycount == 2) {
                    count = count - 1;
                }
                if (!this.orgParamDetails.isWednesday && daycount == 3) {
                    count = count - 1;
                }
                if (!this.orgParamDetails.isThursday && daycount == 4) {
                    count = count - 1;
                }
                if (!this.orgParamDetails.isFriday && daycount == 5) {
                    count = count - 1;
                }
                if (!this.orgParamDetails.isSaturday && daycount == 6) {
                    count = count - 1;
                }
            }
            if (this.lveParamDetails.isHoliday == true || this.lveParamDetails.isHoliday == 'true') {
                for (let k = 0; k < this.holidayList.length; k++) {
                    let holiday = new Date(this.holidayList[k].gemsHolidayOn + ' 00:00:00');
                    if (day.getTime() == holiday.getTime()) {
                        count = count - 1;
                    }
                }
            }
            day = new Date(this.getNextDateByTime(day.getTime()));
        }
        return count;
    }
    getLeaveStatus(gemsEmployeeMasterObj) {
        this.preloader = true;

        this.isLoadingResults = true;
        this.dataSource1 = [];
        this.employeeMaster = gemsEmployeeMasterObj;
        this.gemsEmployeeMasterId = gemsEmployeeMasterObj.gemsEmployeeMasterId;
        this.isActive = true;
        let employeeLeaveMasterViewObj = {
            "createdBy": this.gemsEmployeeMasterId,
            "organisationId": JSON.parse(localStorage.gemsOrganisation).gemsOrgId
        }

        return this.genericservice.post(this.getLeaveStatusUrl, employeeLeaveMasterViewObj, false).subscribe(leaveHeaderListdata => {
            this.preloader = false;

            this.isLoadingResults = false;
            //this.LeaveList = leaveHeaderListdata;
            this.data2 = leaveHeaderListdata.data;
            //this.tableData1.dataRows = leaveHeaderListdata.data; // Assigning Json response to Json Array
            this.data2.length > 0 ? this.noRecentLeaveRecordsFound = false : this.noRecentLeaveRecordsFound = true;
            this.dataSource1 = this.data2;
            // if (leaveHeaderListdata.length != 0) {
            //     for (let i = 0; i < this.LeaveList.length; i++) {
            //       if (this.LeaveList[i].status === "PENDING") {
            //         this.ApprovalList.push(this.LeaveList[i]);
            //       }
            //     }
            //     this.tableData1.dataRows = this.ApprovalList; // Assigning Json response to Json Array
            //  this.dataSource1 = this.LeaveList.slice(0, 3);

            //   }

        }, error => {
            this.preloader = false;

            this.isLoadingResults = false;
        });

        // },error=>{
        //     this.isLoadingResults = false;
        //    });


    }

    getNextDateByTime(time: any): any {
        var date = new Date(time);
        var d = date.getDate() + 1
        var dateFormate = date.getFullYear() + "-" + (date.getMonth() + 1) + '-' + d;
        return dateFormate;
    }
    getDifferenceOfDays(fromDate: any, toDate: any): any {
        fromDate = this.getCorrectDate(fromDate);
        toDate = this.getCorrectDate(toDate);
        if (this.empLeaveEntitled < 1 && this.leaveTypeChecked) {
            return 0.5;
        }
        let day1 = new Date(fromDate).getTime();
        let day2 = new Date(toDate).getTime();
        var timeDiff = day2 - day1;
        var dayDiff = timeDiff / 1000 / 60 / 60 / 24;
        return ((dayDiff) + 1);
    }
    getCorrectDate(datee) {
        let date = datee.split('-');
        let year = date[0];
        let month = date[1].length == 1 ? '0' + date[1] : date[1];
        let day = date[2].length == 1 ? '0' + date[2] : date[2];
        return year + "-" + month + "-" + day;
    }

    getDifferenceOfDays1(fromDate: any, toDate: any): any {
        fromDate = this.getCorrectDate(fromDate);
        toDate = this.getCorrectDate(toDate);
        var timeDiff = new Date(toDate).getTime() - new Date(fromDate).getTime();
        var dayDiff = timeDiff / 1000 / 60 / 60 / 24;
        return ((dayDiff) + 1);
    }
    showNotification(message: string, type: string) {
        this.messageConstant.showNotification(message, type)
    }
    showSuccessNotification(message: string) {

        $.notify({
            icon: 'notifications',
            message: message
        }, {
                type: 'success',
                timer: 3000,
                placement: {
                    from: 'top',
                    align: 'right'
                }
            });


    }


    applyLeave() {

        this.quickLeaveForm.value.leaveTypesControl = this.leaveTypesControl.value.leaveTypeDescription;

    }
    submitLeaveForm(LeaveForm) {

        this.leaveDisable = true;
        this.leaveTypesControl.markAsDirty();
        this.leaveTypesControl.markAsTouched();
        let formdate1;
        let todate1;
        // this.quickLeaveForm.value.leaveTypesControl = this.leaveTypesControl.value.leaveTypeDescription;
        if (super.onSubmit(this.quickLeaveForm)) {
            if (this.validLeaveType === undefined) {
                var SDate = new Date(this.quickLeaveForm.value.daterange.split("-")[0]);
                var SDateValue = SDate.getFullYear() + "-" + (SDate.getMonth() + 1) + "-" + SDate.getDate();
                var EDate = new Date(this.quickLeaveForm.value.daterange.split("-")[1]);
                var EDateValue = EDate.getFullYear() + "-" + (EDate.getMonth() + 1) + "-" + EDate.getDate();
                if (this.halfLeaveType == "FORE") {
                    formdate1 = SDateValue + ' ' + '09' + ':' + '30' + ':' + '00';
                    todate1 = EDateValue + ' ' + '13' + ':' + '00' + ':' + '00';

                } else if (this.halfLeaveType == "POST") {
                    formdate1 = SDateValue + ' ' + '13' + ':' + '01' + ':' + '00';
                    todate1 = EDateValue + ' ' + '18' + ':' + '30' + ':' + '00';
                } else {
                    formdate1 = SDateValue + ' ' + '09' + ':' + '30' + ':' + '00';
                    todate1 = EDateValue + ' ' + '18' + ':' + '30' + ':' + '00';
                }
                this.leaveSummaryList.forEach((leaveSummary) => {
                    //console.log(leaveSummary.gemsLeaveTypeMaster.leaveTypeDescription);
                    if (leaveSummary !== null && leaveSummary.leaveTypeDescription ===
                        this.quickLeaveForm.value.leaveType.leaveTypeDescription) {
                        this.empLeaveSummaryObj = leaveSummary;
                    }
                });
                let leaveSummaryObject = {
                    "gemsEmployeeLeaveSummaryId": this.empLeaveSummaryObj.employeeLeaveSummayMasterId,
                    "gemsEmployeeMaster": {
                        "gemsEmployeeMasterId": this.empLeaveSummaryObj.employeeMasterId
                    },
                    "gemsOrganisation": {
                        "gemsOrgId": this.empLeaveSummaryObj.gemsOrganisationId
                    },
                    "gemsLeaveTypeMaster": {
                        "gemsLeaveTypeMasterId": this.empLeaveSummaryObj.gemsLeaveTypeMasterId,
                        "leaveTypeCode": this.empLeaveSummaryObj.leaveTypeDescription,
                        "leaveTypeDescription": this.empLeaveSummaryObj.leaveTypeDescription,
                        "isActive": true
                    },
                    "isActive": true,
                    "leaveEntitled": this.empLeaveSummaryObj.leaveEntitled,
                    "updatedOn": this.empLeaveSummaryObj.updatedOn,
                };

                //console.log(this.leaveTypesControl.value.leaveTypeDescription);
                //console.log(this.gemsEmployeeMasterObj);
                this.lopFromDate = new Date(formdate1);
                this.lopToDate = new Date(todate1);
                this.lopLeaveType = this.quickLeaveForm.value.leaveType.leaveTypeDescription;
                this.lopBalanceLeave = this.empLeaveSummaryObj.leaveEntitled;
                //roja ...
                var userName = this.gemsEmployeeMasterObj.gemsUserMaster.userName;
                var userObj = {
                    userName: userName
                }
                this.gemsEmployeeMasterObj.gemsUserMaster = userObj
                var repotingUserName = this.gemsEmployeeMasterObj.currentReportingTo.gemsUserMaster.userName;
                var reportingUserObj = {
                    userName: repotingUserName
                }
                this.gemsEmployeeMasterObj.currentReportingTo.gemsUserMaster = reportingUserObj;
                //roja...
                let Object = {
                    // "gemsEmployeeMaster": {
                    //     "gemsEmployeeMasterId": this.gemsEmployeeMasterId
                    // },
                    "transactionType": this.type,
                    "leaveCode": this.quickLeaveForm.value.leaveType.leaveTypeDescription,
                    "toDate": new Date(todate1),
                    "fromDate": new Date(formdate1),
                    "permissionDuration": (this.leaveTypeChecked === true) ? 0.5 : this.getWorkingDays(Math.abs(this.getDifferenceOfDays(SDateValue, EDateValue)), SDateValue, EDateValue),
                    "reason": this.quickLeaveForm.value.reason,
                    "isActive": true,
                    "status": "PENDING",
                    //"createdBy": this.gemsEmployeeMasterId,
                    "createdBy": this.gemsEmployeeMasterObj,
                    // "createdBy": {
                    //     "gemsEmployeeMasterId": this.gemsEmployeeMasterId
                    // },
                    "gemsEmplyeeLeaveSummary": leaveSummaryObject
                    // {
                    //     "gemsEmployeeLeaveSummaryId": this.leaveTypesControl.value
                    // }
                    ,
                    "isForenoonLeave": (this.halfLeaveType == "FORE") ? true : false,
                    "isAfternoonLeave": (this.halfLeaveType == "POST") ? true : false,
                    "createdOn": new Date(),
                    "updatedOn": new Date(),
                    "noOfLops": 0.0,
                    "leaveTypeId": leaveSummaryObject.gemsLeaveTypeMaster.gemsLeaveTypeMasterId
                };
                console.log(Object.permissionDuration)
                console.log(this.getWorkingDays(Math.abs(this.getDifferenceOfDays(SDateValue, EDateValue)), SDateValue, EDateValue))
                if (Object.permissionDuration == 0 || this.getWorkingDays(Math.abs(this.getDifferenceOfDays(SDateValue, EDateValue)), SDateValue, EDateValue) == 0) {
                    // this.showNotification(this.NON_WORKINGDAYS_LEAVE_ERROR_MESSAGE, 'danger');
                    this.preloader = false;
                    this.isLoadingResults = false;
                    this.dataSharingService.failureMessage('Please select working days to apply leave.');
                    this.resetFormInDatePicker();
                    this.type = 'LEA';
                    // this.halfdayflog = false;
                    this.leaveTypeChecked = false;
                    this.noonFlag = false;
                    this.preloader = false;
                    this.isLoadingResults = false;
                    this.quickLeaveForm.reset();
                    this.leaveTypesControl.reset();
                    this.preloader = false;

                }
                // localStorage.setItem('LeaveObject',Object);
                else {
                    let days = this.getWorkingDays(Math.abs(this.getDifferenceOfDays(SDateValue, EDateValue)), SDateValue, EDateValue);
                    if ((this.empLeaveSummaryObj.leaveEntitled) - days >= 0 || Object.isAfternoonLeave || Object.isForenoonLeave) {
                        this.preloader = true;
                        this.isLoadingResults = true;
                        this.genericservice.post(this.applyLeaveUrl, Object, true).subscribe(response => {

                            this.halfLeaveType = '';
                            this.leaveDisable = true;
                            if (response.data.gemsEmployeeLeaveMasterId != null) {
                                this.employeeLeaveMaster = response.data;
                                this.dataSharingService.trigegerApplyFlag('true');
                                // Save Notification
                                let reqPayload = {
                                    "notification": response.data.notification,
                                    "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('reportingManagerId')
                                }
                                this.genericservice.post(this.saveNotificationURL, reqPayload, false).subscribe(res => {

                                });
                                // this.showSuccessNotification(' <b>Success </b>' + response.gemsEmplyeeLeaveSummary.gemsLeaveTypeMaster.leaveTypeDescription +
                                //     ' applied successfully.');
                                //  this.getLeaveStatus(this.gemsEmployeeMasterObj);
                                this.preloader = false;
                                let event = {
                                    'end': { 'date': this.commonService.getToByTime(response.data.toDate) },
                                    'start': { 'date': this.commonService.getDateByTime(response.data.fromDate) },
                                    'summary': response.data.leaveCode + ' - ' + response.data.status,
                                    'description': response.data.reason
                                }

                                this.genericservice.saveCalendarEvents(this.googleSyncUrl, event).subscribe(data => {
                                    console.log('called inside of save event')
                                    let eventId = this.saveEventId(data);
                                    let eventObj = {
                                        'gemsEmployeeLeaveMaster': this.employeeLeaveMaster,
                                        'eventId': eventId,
                                        'flag': 1,
                                        'createdBy': +this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
                                    }
                                    this.genericservice.post(this.saveEventUrl, eventObj, false).subscribe(data => {

                                    })
                                }, error => {
                                    let eventObj = {
                                        'gemsEmployeeLeaveMaster': this.employeeLeaveMaster,
                                        'eventId': null,
                                        'flag': 0,
                                        'createdBy': +this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
                                    }
                                    this.genericservice.post(this.saveEventUrl, eventObj, false).subscribe(data => {

                                    }, error => {
                                        this.isLoadingResults = false;
                                    })

                                })


                            }
                            else if (response.data.remarks != null) {
                                console.log("In 591");
                                this.dataSharingService.failureMessage(response.data.remarks);
                                // this.myNgForm.value.transactionFrom=response.fromDate();
                                // this.myNgForm.value.transactionTo=response.toDate();
                                // this.showNotification(response.remarks, 'danger');
                                this.preloader = false;

                            }
                            else {
                                console.log("In 598");
                                // this.showNotification(this.APPLY_LEAVE_ERROR, 'danger');
                            }
                            // this.ngOnInit();
                            this.type = 'LEA';
                            this.halfdayflog = false;
                            this.leaveTypeChecked = false;
                            this.noonFlag = false;
                            this.isLoadingResults = false;
                            this.preloader = false;
                            // this.myNgForm.resetForm();
                            this.leaveTypesControl.reset();
                            this.leaveDisable = true;
                        }, error => {
                            if (error.message == 'REPORTING MANAGER NOT FOUND') {
                                // alert(this.NO_REPORTING_MANAGER);
                                // this.showNotification(this.NO_REPORTING_MANAGER, 'danger');
                                this.dataSharingService.failureMessage(this.NO_REPORTING_MANAGER);
                                this.preloader = false;

                            } else {
                                //this.quickLeaveForm.reset();
                                // this.myNgForm.resetForm();
                                // this.halfLeaveType = false;
                                // alert(this.APPLY_LEAVE_ERROR);   
                                this.dataSharingService.failureMessage(this.APPLY_LEAVE_ERROR);
                                this.preloader = false;

                            }
                            // this.ngOnInit();
                            this.type = 'LEA';
                            this.halfdayflog = false;
                            this.leaveTypeChecked = false;
                            this.noonFlag = false;
                            this.preloader = false;
                            this.isLoadingResults = false;
                            //this.quickLeaveForm.reset();
                            // this.myNgForm.resetForm();
                            // this.halfLeaveType = false;
                            this.leaveTypesControl.reset();
                            this.preloader = false;

                        });
                        this.resetFormInDatePicker();
                        this.leaveDisable = true;
                    } else {

                        let nooflops = days - this.empLeaveSummaryObj.leaveEntitled;
                        if (this.halfdayflog === true) {
                            if (this.noonFlag == true) {
                                nooflops = 0.5;
                            }
                        }
                        Object.noOfLops = nooflops;
                        this.lopObject = Object;
                        this.lopDays = nooflops;
                        this.isLop = true;
                        $("#lopBtn").trigger("click");
                        // this.confirmLeaveRequest(Object);
                        this.preloader = false;

                    }
                }
            }
        }
        this.preloader = false;
        this.quickLeaveForm.reset();

    }
    confirmLeaveRequest() {
        this.genericservice.post(this.applyLeaveUrl, this.lopObject, true).subscribe(response => {
            this.quickLeaveForm.reset();
            this.resetFormInDatePicker();
            this.dataSharingService.trigegerApplyFlag('true');
            // Save Notification
            let reqPayload = {
                "notification": response.data.notification,
                "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('reportingManagerId')
            }
            this.genericservice.post(this.saveNotificationURL, reqPayload, false).subscribe(res => {

            });
            // this.halfdayflog = true;
            // this.noonFlag = true;
            // this.myNgForm.resetForm();
            this.leaveTypesControl.reset();
            // this.halfdayflog = false;
            // this.noonFlag = false;
            // this.halfLeaveType = false;
            this.preloader = false;
        });
        this.getLeaveStatus(this.gemsEmployeeMasterObj);

    }
    applyPermission(quickPermisstionForm) {

        console.log(this.permissionStartTimepicker)
        console.log(this.permissionEndTimepicker)

        this.preloader = true;
        let isValidPermission = true;
        this.inValidOutTime = false;
        //  this.quickPermisstionForm.controls['perOutTimeControl'].setErrors({ 'incorrect': false });
        // this.quickPermisstionForm.controls['perOutTimeControl'].setErrors({ 'pattern': false });
        // super.onSubmit(this.quickPermisstionForm)
        if (super.onSubmit(this.quickPermisstionForm)) {
            // var SDate = new Date(this.quickPermisstionForm.value.onPerDate.start);
            // var SDateValue = SDate.getFullYear() + '-' + (SDate.getMonth() + 1) + '-' + SDate.getDate();
            // var EDate = new Date(this.quickPermisstionForm.value.onPerDate.end);
            // var EDateValue = EDate.getFullYear() + '-' + (EDate.getMonth() + 1) + '-' + EDate.getDate();
            // var startTime = SDate.getHours() + ":" + SDate.getMinutes()
            // var endTime = EDate.getHours() + ":" + EDate.getMinutes()

            var SDate = new Date(this.permissionDate);
            var SDateValue = SDate.getFullYear() + '-' + (SDate.getMonth() + 1) + '-' + SDate.getDate();
            var EDate = new Date(this.permissionDate);
            var EDateValue = EDate.getFullYear() + '-' + (EDate.getMonth() + 1) + '-' + EDate.getDate();
            var startTime = this.permissionStartTimepicker.hour + ":" + this.permissionStartTimepicker.minute;
            var endTime = this.permissionEndTimepicker.hour + ":" + this.permissionEndTimepicker.minute;
            // var startTime = (this.startTimePickerAMOrPM == 'AM' ? this.permissionStartTimepicker.hour: 12) + ":" + this.permissionStartTimepicker.minute;
            // var endTime = (this.endTimepickerAMOrPM == 'AM' ? this.permissionEndTimepicker.hour: 12) + ":" + this.permissionEndTimepicker.minute;
            // this.permissionStartTimepicker.hour = (this.startTimePickerAMOrPM === 'AM') ? this.permissionStartTimepicker.hour : 12;             
            // this.permissionEndTimepicker.hour = (this.endTimepickerAMOrPM === 'AM') ? this.permissionEndTimepicker.hour : 12; 



            //   this.leaveSummaryWithODPERList.forEach(leaveSummary => {
            for (let leaveSummary of this.leaveSummaryWithODPERList) {
                if (leaveSummary !== null && leaveSummary.leaveTypeCode === 'PER') {
                    this.empLeaveSummaryObj = leaveSummary;


                    let leaveSummaryObject = {
                        "gemsEmployeeLeaveSummaryId": leaveSummary.employeeLeaveSummayMasterId,
                        "gemsEmployeeMaster": {
                            "gemsEmployeeMasterId": leaveSummary.employeeMasterId
                        },
                        "gemsOrganisation": {
                            "gemsOrgId": leaveSummary.gemsOrganisationId
                        },
                        "gemsLeaveTypeMaster": {
                            "gemsLeaveTypeMasterId": leaveSummary.gemsLeaveTypeMasterId,
                            "leaveTypeCode": leaveSummary.leaveTypeCode,
                            "leaveTypeDescription": leaveSummary.leaveTypeDescription,
                            "isActive": true
                        },
                        "isActive": true,
                        "leaveEntitled": leaveSummary.leaveEntitled,
                        "updatedOn": leaveSummary.updatedOn,
                    }

                    let formdate1;
                    let todate1;

                    if (this.permissionStartTimepicker != null) {

                        if (this.startTimePickerAMOrPM == 'AM') {
                            if (this.permissionStartTimepicker.hour == '12' || this.permissionStartTimepicker.hour == 12) {
                                this.permissionStartTimepicker.hour = 0;
                            }
                            else if(this.permissionStartTimepicker.hour>12){
                                this.permissionStartTimepicker.hour=parseInt(this.permissionStartTimepicker.hour) - 12;
                            } else {
                                this.permissionStartTimepicker.hour = parseInt(this.permissionStartTimepicker.hour);
                            }
                        } else if (this.startTimePickerAMOrPM == 'PM') {
                            if (this.permissionStartTimepicker.hour == '12' || this.permissionStartTimepicker.hour == 12) {
                                this.permissionStartTimepicker.hour = parseInt(this.permissionStartTimepicker.hour);
                            } else if(this.permissionStartTimepicker.hour>12){
                                this.permissionStartTimepicker.hour=parseInt(this.permissionStartTimepicker.hour);
                            } else {
                                this.permissionStartTimepicker.hour = parseInt(this.permissionStartTimepicker.hour) + 12;
                            }
                        }
                        SDate.setHours(this.permissionStartTimepicker.hour);
                        SDate.setMinutes(this.permissionStartTimepicker.minute);
                    }
                    if (this.permissionEndTimepicker != null) {
                        debugger
                        if (this.endTimepickerAMOrPM == 'AM') {
                            if (this.permissionEndTimepicker.hour == 12 || this.permissionEndTimepicker == '12') {
                                this.permissionEndTimepicker.hour = 0;
                            }
                            else if (this.permissionEndTimepicker.hour > 12) {
                                this.permissionEndTimepicker.hour = parseInt(this.permissionEndTimepicker.hour) - 12;
                            }
                            else {
                                this.permissionEndTimepicker.hour = parseInt(this.permissionEndTimepicker.hour);
                            }
                        } else if (this.endTimepickerAMOrPM == 'PM') {
                            if (this.permissionEndTimepicker.hour == 12 || this.permissionEndTimepicker.hour == '12') {
                                this.permissionEndTimepicker.hour = parseInt(this.permissionEndTimepicker.hour);
                            } else if(this.permissionEndTimepicker.hour>12){
                                this.permissionEndTimepicker.hour=parseInt(this.permissionEndTimepicker.hour);
                            }else{
                                this.permissionEndTimepicker.hour = parseInt(this.permissionEndTimepicker.hour) + 12;
                            }
                        }
                        EDate.setHours(this.permissionEndTimepicker.hour);
                        EDate.setMinutes(this.permissionEndTimepicker.minute);
                    }
                    // EDate.setHours(this.permissionEndTimepicker.hour);
                    // EDate.setMinutes(this.permissionEndTimepicker.minute);
                    // SDate.setHours(this.permissionStartTimepicker.hour);
                    // SDate.setMinutes(this.permissionStartTimepicker.minute);

                    formdate1 = SDateValue + ' ' + this.permissionStartTimepicker.hour+':'+this.permissionStartTimepicker.minute + ':' + '00';
                    todate1 = EDateValue + ' ' + this.permissionEndTimepicker.hour+':'+this.permissionEndTimepicker.minute + ':' + '00';

                    if (new Date(formdate1) > new Date(todate1)) {
                        this.inValidOutTime = true;
                        this.dataSharingService.failureMessage('Please select valid time to avail permission');
                        this.quickPermisstionForm.reset();
                        this.resetPermissionForm();
                        // this.quickPermisstionForm.controls['perOutTimeControl'].setErrors({ 'incorrect': true });
                    } else {
                        if (this.getWorkingDays(Math.abs(this.getDifferenceOfDays(SDateValue, EDateValue)), SDateValue, EDateValue) == 0) {
                            this.dataSharingService.failureMessage('Please select working days to apply leave.');
                            this.reset();
                        } else {
                            this.inValidOutTime = false;
                            console.log(SDate)
                            console.log(EDate)

                            //roja
                            var userName = this.gemsEmployeeMasterObj.gemsUserMaster.userName;
                            var userObj = {
                                userName: userName
                            }
                            this.gemsEmployeeMasterObj.gemsUserMaster = userObj
                            var repotingUserName = this.gemsEmployeeMasterObj.currentReportingTo.gemsUserMaster.userName;
                            var reportingUserObj = {
                                userName: repotingUserName
                            }
                            this.gemsEmployeeMasterObj.currentReportingTo.gemsUserMaster = reportingUserObj;
                            //roja
                            //  this.quickPermisstionForm.controls['perOutTimeControl'].setErrors({ 'incorrect': false });
                            // this.quickPermisstionForm.controls['perOutTimeControl'].setErrors({ 'pattern': false });
                            let Object2 = {
                                "gemsEmployeeMaster": {
                                    "gemsEmployeeMasterId": leaveSummary.employeeMasterId
                                },
                                "transactionType": 'PER',
                                "leaveCode": 'Permission',
                                "toDate": new Date(todate1),
                                "fromDate": new Date(formdate1),
                                "permissionDuration": this.timeDiff(SDate, EDate),
                                "reason": this.quickPermisstionForm.value.reason,
                                "isActive": true,
                                "status": "PENDING",
                                "createdBy": this.gemsEmployeeMasterObj,
                                "gemsEmplyeeLeaveSummary": leaveSummaryObject,
                                "createdOn": new Date(),
                                "updatedOn": new Date(),
                                "leaveTypeId": leaveSummaryObject.gemsLeaveTypeMaster.gemsLeaveTypeMasterId
                            }

                            this.preloader = true;

                            this.isLoadingResults = true;
                            let maxduration = this.timeDiff(SDate, EDate).split('.')[0];
                            let maxMinutes = this.timeDiff(SDate, EDate).split('.')[1];
                            if (this.max == undefined || this.max == null) {
                                this.max = 2;
                            }
                            if (+maxduration <= this.max) {
                                if (+maxduration == this.max) {
                                    if (+maxMinutes > 0) {
                                        isValidPermission = false;
                                    }
                                }
                            } else {
                                isValidPermission = false;
                            }
                            // if (isValidPermission) {

                            this.genericservice.post(this.applyLeaveUrl, Object2, true).subscribe(response => {


                                if (response.data.gemsEmployeeLeaveMasterId != null) {

                                    this.dataSharingService.trigegerApplyFlag('true');
                                    console.log(response)
                                    this.reset();
                                    // Save Notification
                                    let reqPayload = {
                                        "notification": response.data.notification,
                                        "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('reportingManagerId')
                                    }
                                    this.genericservice.post(this.saveNotificationURL, reqPayload, false).subscribe(res => {

                                    });
                                    // alert(this.APPLY_PERMISSION+'ONE');
                                    // this.ngOnInit();
                                    //   this.getLeaveStatus(this.gemsEmployeeMasterObj); // Updating the Applied leaves grid
                                    this.employeeLeaveMaster = response.data;
                                    let event = {
                                        'end': { 'date': this.commonService.getToByTime(response.data.toDate) },
                                        'start': { 'date': this.commonService.getDateByTime(response.data.fromDate) },
                                        'summary': response.data.leaveCode + ' - ' + response.data.status,
                                        'description': response.data.reason
                                    }

                                    this.genericservice.saveCalendarEvents(this.googleSyncUrl, event).subscribe(data => {

                                        console.log('called inside of save event')
                                        let eventId = this.saveEventId(data);
                                        let eventObj = {
                                            'gemsEmployeeLeaveMaster': this.employeeLeaveMaster,
                                            'eventId': eventId,
                                            'flag': 1,
                                            'createdBy': +this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
                                        }
                                        this.genericservice.post(this.saveEventUrl, eventObj, false).subscribe(data => {

                                        })
                                    }, error => {
                                        let eventObj = {
                                            'gemsEmployeeLeaveMaster': this.employeeLeaveMaster,
                                            'eventId': null,
                                            'flag': 0,
                                            'createdBy': +this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
                                        }
                                        this.genericservice.post(this.saveEventUrl, eventObj, false).subscribe(data => {

                                        }, error => {
                                            this.isLoadingResults = false;
                                        })

                                    })
                                }
                                else if (response.data.remarks != null) {

                                    // alert(response.data.remarks);
                                    this.reset();
                                }
                                else {

                                    // alert(this.APPLY_PERMISSION_ERROR + "remarks");
                                    this.reset();
                                }
                                this.type = 'PER';
                                this.preloader = false;

                                this.isLoadingResults = false;
                                this.quickPermisstionForm.reset();
                                this.resetPermissionForm();
                                // this.myNgForm.resetForm();
                                // this.permissionValue = 1;
                            }, error => {
                                console.log(error)
                                this.reset();
                                if (error.message === 'REPORTING MANAGER NOT FOUND') {

                                    this.type = 'PER';
                                    this.preloader = false;

                                    this.isLoadingResults = false;
                                    // this.myNgForm.resetForm();
                                    // this.permissionValue = 1;
                                    // alert(this.NO_REPORTING_MANAGER);
                                    this.dataSharingService.failureMessage(this.NO_REPORTING_MANAGER);

                                } else {

                                    // this.myNgForm.resetForm();

                                    // alert(this.APPLY_PERMISSION_ERROR);
                                    this.dataSharingService.failureMessage(this.APPLY_PERMISSION_ERROR);

                                }
                                //  this.myNgForm.resetForm();
                                this.preloader = false;

                                this.isLoadingResults = false;
                                this.type = 'PER';
                                //  this.permissionValue = 1;

                            });
                            // } else {
                            //     this.isLoadingResults = false;
                            //     this.reset();
                            //     this.dataSharingService.failureMessage('Maximum Permission Duration is 2 Hours');
                            //     //  this.permissionValue = 1;
                            //     // alert('Maxmium permission duration is ' + this.max + ' hours');
                            // }


                        }
                    }
                }
            }

        }
        this.preloader = false;
    }
    checkLeaveType() {
        if (this.leaveType.leaveTypeDescription === 'Sick Leave') {
            this.leaveReason = 'Not Feeling Well';
            this.quickLeaveForm.controls['reason'].disable();
        } else if (this.quickLeaveForm.controls['reason'].disabled == true) {
            this.quickLeaveForm.controls['reason'].enable();
            this.leaveReason = '';
        }


    }
    onKeyPress(event: any) {
        const pattern = /[0-9]/;
        const inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode !== 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    onTimeChange(event, className) {

        let condition1 = event > 12 && (className == '.endHour' || className == '.startHour');
        let condition2 = event > 59 && (className == '.endMinute' || className == '.startMinute');
        if (condition1 || condition2) {
            $(className).addClass('time_error');
        } else {
            $(className).removeClass('time_error');
        }
    }

    applyOnDuty() {
        this.preloader = true;
        if (super.onSubmit(this.quicOnDutyForm)) {
            console.log(this.quicOnDutyForm.value.inTimeControl)

            console.log(this.quicOnDutyForm.value.outTimeControl)
            if (this.inTime == null || this.outTime == null || this.inTime == undefined || this.outTime == undefined) {
                var SDate = new Date(this.quicOnDutyForm.value.onDutyDate.split('-')[0]);
                var SDateValue = SDate.getFullYear() + "-" + (SDate.getMonth() + 1) + "-" + SDate.getDate();
                var EDate = new Date(this.quicOnDutyForm.value.onDutyDate.split('-')[1]);
                var EDateValue = EDate.getFullYear() + "-" + (EDate.getMonth() + 1) + "-" + EDate.getDate();
            } else {
                var SDate = new Date(this.quicOnDutyForm.value.onDutyDate.split('-')[0]);
                var SDateValue = SDate.getFullYear() + "-" + (SDate.getMonth() + 1) + "-" + SDate.getDate();
                var EDate = new Date(this.quicOnDutyForm.value.onDutyDate.split('-')[1].split('(')[0]);
                var EDateValue = EDate.getFullYear() + "-" + (EDate.getMonth() + 1) + "-" + EDate.getDate();
            }

            this.leaveSummaryWithODPERList.forEach(leaveSummary => {

                if (leaveSummary !== null && leaveSummary.leaveTypeCode === 'OD') {
                    this.empLeaveSummaryObj = leaveSummary;


                    let leaveSummaryObject = {
                        "gemsEmployeeLeaveSummaryId": leaveSummary.employeeLeaveSummayMasterId,
                        "gemsEmployeeMaster": {
                            "gemsEmployeeMasterId": leaveSummary.employeeMasterId
                        },
                        "gemsOrganisation": {
                            "gemsOrgId": leaveSummary.gemsOrganisationId
                        },
                        "gemsLeaveTypeMaster": {
                            "gemsLeaveTypeMasterId": leaveSummary.gemsLeaveTypeMasterId,
                            "leaveTypeCode": leaveSummary.leaveTypeCode,
                            "leaveTypeDescription": leaveSummary.leaveTypeDescription,
                            "isActive": true
                        },
                        "isActive": true,
                        "leaveEntitled": leaveSummary.leaveEntitled,
                        "updatedOn": leaveSummary.updatedOn,
                    }

                    if (this.inTime != null) {
                        if (this.onDutyStartAMorPM == 'AM') {
                            if (this.inTime.hour == '12') {
                                this.inTime.hour = 0;
                            } else {
                                this.inTime.hour = parseInt(this.inTime.hour);
                            }
                        } else if (this.onDutyStartAMorPM == 'PM') {
                            if (this.inTime.hour == '12') {
                                this.inTime.hour = parseInt(this.inTime.hour);
                            } else {
                                this.inTime.hour = parseInt(this.inTime.hour) + 12;
                            }
                        }
                        SDate.setHours(this.inTime.hour);
                        SDate.setMinutes(this.inTime.minute);
                    }
                    if (this.outTime != null) {
                        if (this.onDutyEndAMorPM == 'AM') {
                            if (this.outTime.hour == 12 || this.outTime.hour == '12') {
                                this.outTime.hour = 0;
                            } else {
                                this.outTime.hour = parseInt(this.outTime.hour);
                            }
                        } else if (this.onDutyEndAMorPM == 'PM') {
                            if (this.outTime.hour == 12 || this.outTime.hour == '12') {
                                this.outTime.hour = parseInt(this.outTime.hour);
                            } else {
                                this.outTime.hour = parseInt(this.outTime.hour) + 12;
                            }
                        }
                        EDate.setHours(this.outTime.hour);
                        EDate.setMinutes(this.outTime.minute);
                    }

                    let formdate1;
                    let todate1;
                    let isFullDay = false;

                    if (this.timeFlag == null || this.timeFlag == false) {

                        formdate1 = SDateValue + ' ' + '09' + ':' + '30' + ':' + '00';
                        todate1 = EDateValue + ' ' + '18' + ':' + '30' + ':' + '00';
                        isFullDay = true;
                    }
                    else if (this.timeFlag) {
                        // let flag = false;
                        if (this.inTime != null || this.inTime != undefined) {
                            formdate1 = SDateValue + ' ' + this.inTime.hour + ':' + this.inTime.minute + ':' + '00';
                        } else {
                            //  this.quicOnDutyForm.controls['inTimeControl'].setErrors({ 'required': true });
                            // flag = true;
                        }
                        if (this.outTime != null || this.outTime != undefined) {
                            todate1 = EDateValue + ' ' + this.outTime.hour + ':' + this.outTime.minute + ':' + '00';
                        } else {
                            //  this.quicOnDutyForm.controls['outTimeControl'].setErrors({ 'required': true });
                            // flag = true;
                        }


                        if (this.inTime.hour >= this.outTime.hour) {
                            if (this.inTime.minute >= this.outTime.minute) {
                                // alert(SDate.getHours() >= EDate.getHours())
                                //  alert("FAIL");
                                this.inValidOutTime = true;
                                //  this.quicOnDutyForm.controls['outTimeControl'].setErrors({ 'incorrect': true });
                                // flag = true;
                            } else {
                                // alert("FAIL 11");
                                this.inValidOutTime = false;
                                // this.quicOnDutyForm.controls['outTimeControl'].setErrors({ 'pattern': false });
                                // flag = true;
                            }
                        }
                        // Saving OND eventhough the duration is more than 1 minute
                        //   alert('same')

                    }
                    //roja
                    var userName = this.gemsEmployeeMasterObj.gemsUserMaster.userName;
                    var userObj = {
                        userName: userName
                    }
                    this.gemsEmployeeMasterObj.gemsUserMaster = userObj
                    var repotingUserName = this.gemsEmployeeMasterObj.currentReportingTo.gemsUserMaster.userName;
                    var reportingUserObj = {
                        userName: repotingUserName
                    }
                    this.gemsEmployeeMasterObj.currentReportingTo.gemsUserMaster = reportingUserObj;
                    //roja
                    let Object = {
                        "gemsEmployeeMaster": {
                            "gemsEmployeeMasterId": leaveSummary.employeeMasterId
                        },
                        "transactionType": 'OD',
                        "leaveCode": 'OnDuty',
                        "fromDate": new Date(formdate1),
                        "toDate": new Date(todate1),
                        //"permissionDuration": 1, // By Default On Duty will be one day.
                        "reason": this.quicOnDutyForm.value.reason,
                        // "permissionDuration": Math.abs(this.getDifferenceOfDays(SDateValue, SDateValue)),
                        "permissionDuration": (this.inTime != null && this.outTime != null) ? this.timeDiff(SDate, EDate) : Math.abs(this.getDifferenceOfDays1(SDateValue, EDateValue)),
                        "isActive": true,
                        "status": "PENDING",
                        "createdBy": this.gemsEmployeeMasterObj,
                        "gemsEmplyeeLeaveSummary": leaveSummaryObject,
                        "createdOn": new Date(),
                        "updatedOn": new Date(),
                        "isForenoonLeave": (SDate.getHours() < 13 && SDate.getHours() != 0) ? true : false,
                        "isAfternoonLeave": (SDate.getHours() >= 13 && SDate.getHours() != 0) ? true : false,
                        "leaveTypeId": leaveSummaryObject.gemsLeaveTypeMaster.gemsLeaveTypeMasterId,
                        "isFullDay": isFullDay

                    }

                    this.isLoadingResults = true;
                    this.timeFlag = false;
                    this.genericservice.post(this.applyLeaveUrl, Object, true).subscribe(response => {
                        // this.quicOnDutyForm.value.permissionOn = null;
                        this.dataSharingService.trigegerApplyFlag('true');
                        if (response.data.gemsEmployeeLeaveMasterId != null) {
                            let reqPayload = {
                                "notification": response.data.notification,
                                "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('reportingManagerId')
                            }
                            this.genericservice.post(this.saveNotificationURL, reqPayload, false).subscribe(res => {

                            });
                            // alert(this.APPLY_ONDUTY);
                            this.quicOnDutyForm.reset();
                            // this.ngOnInit();
                            //  this.getLeaveStatus(this.gemsEmployeeMasterObj);
                            // Updating the Applied leaves grid
                            this.employeeLeaveMaster = response.data;
                            let event = {
                                'end': { 'date': this.commonService.getToByTime(response.data.toDate) },
                                'start': { 'date': this.commonService.getDateByTime(response.data.fromDate) },
                                'summary': response.data.leaveCode + ' - ' + response.data.status,
                                'description': response.data.reason
                            }

                            this.genericservice.saveCalendarEvents(this.googleSyncUrl, event).subscribe(data => {
                                console.log('called inside of save event')
                                let eventId = this.saveEventId(data);
                                let eventObj = {
                                    'gemsEmployeeLeaveMaster': this.employeeLeaveMaster,
                                    'eventId': eventId,
                                    'flag': 1,
                                    'createdBy': +this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
                                }
                                this.genericservice.post(this.saveEventUrl, eventObj, false).subscribe(data => {

                                })
                            }, error => {
                                let eventObj = {
                                    'gemsEmployeeLeaveMaster': this.employeeLeaveMaster,
                                    'eventId': null,
                                    'flag': 0,
                                    'createdBy': +this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
                                }
                                this.genericservice.post(this.saveEventUrl, eventObj, false).subscribe(data => {

                                }, error => {
                                    this.isLoadingResults = false;
                                })

                            })
                        }
                        else if (response.data.remarks != null) {
                            this.dataSharingService.trigegerApplyFlag('true');

                            // alert(response.data.remarks);
                        } else {
                            // alert(this.APPLY_ONDUTY_ERROR);
                        }
                        this.isLoadingResults = false;
                        this.type = 'OD';
                        this.quicOnDutyForm.reset();
                        //this.myNgForm.resetForm();
                        // this.hoursflog = false;
                        this.timeFlag = false;
                        this.resetOnDutyDatePicker();
                    }, error => {
                        if (error.message === 'REPORTING MANAGER NOT FOUND') {
                            this.isLoadingResults = false;
                            // this.myNgForm.resetForm();
                            // this.hoursflog = false;
                            this.timeFlag = false;
                            this.quicOnDutyForm.reset();
                            this.resetOnDutyDatePicker();
                            this.dataSharingService.failureMessage(this.NO_REPORTING_MANAGER);

                            // alert(this.NO_REPORTING_MANAGER);
                        } else {
                            //this.myNgForm.resetForm();
                            this.isLoadingResults = false;
                            // this.hoursflog = false;
                            this.timeFlag = false;
                            this.quicOnDutyForm.reset();
                            this.resetOnDutyDatePicker();
                            this.dataSharingService.failureMessage(this.APPLY_ONDUTY_ERROR);
                            // alert(this.APPLY_ONDUTY_ERROR);
                        }

                        // this.myNgForm.resetForm();
                        // this.hoursflog = false;
                        this.timeFlag = false;
                        this.isLoadingResults = false;
                        this.type = 'OD';
                        this.quicOnDutyForm.reset();
                        this.resetOnDutyDatePicker();
                        // this.quicOnDutyForm.reset();
                        // });




                        // }


                        // }
                    }


                    )





                    // let Object = {
                    //     "gemsEmployeeMaster": {
                    //         "gemsEmployeeMasterId": leaveSummary.employeeMasterId
                    //     },
                    //     "transactionType": 'OD',
                    //     "leaveCode": 'OnDuty',
                    //     "fromDate": new Date(formdate1),
                    //     "toDate": new Date(todate1),
                    //     //"permissionDuration": 1, // By Default On Duty will be one day.
                    //     "reason": this.quicOnDutyForm.value.reason,
                    //     // "permissionDuration": Math.abs(this.getDifferenceOfDays(SDateValue, SDateValue)),
                    //     "permissionDuration": (this.inTime != null && this.outTime != null) ? this.timeDiff(SDate, EDate) : Math.abs(this.getDifferenceOfDays1(SDateValue, EDateValue)),
                    //     "isActive": true,
                    //     "status": "PENDING",
                    //     "createdBy": this.gemsEmployeeMasterObj,
                    //     "gemsEmplyeeLeaveSummary": leaveSummaryObject,
                    //     "createdOn": new Date(),
                    //     "updatedOn": new Date(),
                    //     "isForenoonLeave": (SDate.getHours() < 13 && SDate.getHours() != 0) ? true : false,
                    //     "isAfternoonLeave": (SDate.getHours() >= 13 && SDate.getHours() != 0) ? true : false,
                    //     "leaveTypeId": leaveSummaryObject.gemsLeaveTypeMaster.gemsLeaveTypeMasterId
                    // }


                    // this.isLoadingResults = true;
                    // 
                    // //  this.timeFlag = false;
                    // this.genericservice.post(this.applyLeaveUrl, Object,true).subscribe(response => {
                    //     // this.quicOnDutyForm.value.permissionOn = null;
                    //     
                    //     if (response.gemsEmployeeLeaveMasterId != null) {
                    //         // alert(this.APPLY_ONDUTY);
                    //         // this.ngOnInit();
                    //         this.dataSharingService.trigegerApplyFlag('true');
                    //         this.quicOnDutyForm.reset();
                    //         this.getLeaveStatus(this.gemsEmployeeMasterObj); // Updating the Applied leaves grid
                    //         let myHeaders = new Headers();
                    //         myHeaders.append('Content-Type', 'application/json');
                    //         let myParams = new URLSearchParams();
                    //         myHeaders.append('authorization', 'Bearer ' + localStorage.getItem('accessToken'));
                    //         //         let options = new RequestOptions({ headers: myHeaders });

                    //         // let event = {
                    //         //     'end': { 'date': this.getToByTime(response.toDate) },
                    //         //     'start': { 'date': this.getDateByTime(response.fromDate) },
                    //         //     'summary': response.leaveCode + ' - ' + response.status,
                    //         //     'description': response.reason
                    //         // }

                    //         //         this.employeeLeaveMaster = response;
                    //         //         this.http.post('https://content.googleapis.com/calendar/v3/calendars/primary/events', event, options).subscribe(data => {

                    //         //             let eventId = this.saveEventId(data);
                    //         //             let eventObj = {
                    //         //                 'gemsEmployeeLeaveMaster': this.employeeLeaveMaster,
                    //         //                 'eventId': eventId,
                    //         //                 'flag': 1,
                    //         //                 'createdBy': localStorage.getItem('gemsEmployeeMasterId')
                    //         //             }
                    //         //             this._http.post('http://pre-prod.cloudnowtech.net/core/api/v1/app-employee/saveEvent', eventObj).subscribe(data => {

                    //         //             })

                    //         //         }, error => {
                    //         //             let eventObj = {
                    //         //                 'gemsEmployeeLeaveMaster': this.employeeLeaveMaster,
                    //         //                 'eventId': null,
                    //         //                 'flag': 0,
                    //         //                 'createdBy': localStorage.getItem('gemsEmployeeMasterId')
                    //         //             }
                    //         //             this._http.post('http://pre-prod.cloudnowtech.net/core/api/v1/app-employee/saveEvent', eventObj).subscribe(data => {

                    //         //             })
                    //         //         })
                    //     } else if (response.data.remarks != null) {
                    //         // alert(response.data.remarks);
                    //         this.quicOnDutyForm.reset();
                    //     } else {
                    //         // alert(this.APPLY_ONDUTY_ERROR);
                    //         this.quicOnDutyForm.reset();
                    //     }
                    //     
                    //     this.isLoadingResults = false;
                    //     this.type = 'OD';
                    //     //this.myNgForm.resetForm();
                    //     // this.hoursflog = false;
                    //     this.timeFlag = false;
                    // }, error => {
                    //     this.quicOnDutyForm.reset();
                    //     if (error.message === 'REPORTING MANAGER NOT FOUND') {
                    //         this.isLoadingResults = false;
                    //         //  this.myNgForm.resetForm();
                    //         // this.hoursflog = false;
                    //         this.timeFlag = false;
                    //         this.dataSharingService.failureMessage(this.NO_REPORTING_MANAGER);
                    //         // alert(this.NO_REPORTING_MANAGER, );
                    //     } else {
                    //         //  this.myNgForm.resetForm();
                    //         this.isLoadingResults = false;
                    //         // this.hoursflog = false;
                    //         this.timeFlag = false;
                    //         this.dataSharingService.failureMessage(this.APPLY_ONDUTY_ERROR);

                    //         // alert(this.APPLY_ONDUTY_ERROR);
                    //     }
                    //     //  this.myNgForm.resetForm();
                    //     // this.hoursflog = false;
                    //     this.timeFlag = false;
                    //     this.isLoadingResults = false;
                    //     this.type = 'OD';
                    //     // this.quicOnDutyForm.reset();


                    //     // }
                    // })

                }
            })
            this.quicOnDutyForm.reset();
            this.resetOnDutyDatePicker();
        }
        this.preloader = false;
    }

    timeDiff(EDate, SDate) {

        // start = start.split(":");
        // end = end.split(":");
        // var startDate = new Date(0, 0, 0, start[0], start[1], 0);
        // var endDate = new Date(0, 0, 0, end[0], end[1], 0);
        var diff = SDate.getTime() - EDate.getTime();

        var hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        var minutes = Math.floor(diff / 1000 / 60);


        // If using time pickers with 24 hours format, add the below line get exact hours
        if (hours < 0)
            hours = hours + 24;

        return (hours <= 9 ? "0" : "") + hours + "." + (minutes <= 9 ? "0" : "") + minutes;
    }

    halfdayRadioChange(event) {
        this.halfLeaveType = event.target.value
    }

    isValidLeaveTypeControl(event) {
        typeof this.leaveTypesControl.value != 'string' || this.leaveTypesControl.value == '' ? this.validLeaveType = false : this.validLeaveType = true;
    }


    removeclass() {
        $(function () {
            $(".select__date").on("click", function (e) {
                $('.main').addClass("wide");
                $('.daterangepicker').addClass("active");
                e.stopPropagation()
            });
            $(document).on("click", function (e) {
                if ($(e.target).is(".daterangepicker") === false) {
                    $(".main").removeClass("wide");
                    $(".daterangepicker").removeClass("active");
                }
            });
        });
    }
    saveEventId(data) {
        // let EventCode = JSON.parse(data._body).htmlLink.split("eid=")[1]
        let EventCode = data.htmlLink.split("eid=")[1]
        let Event = this.commonservice.base64ToString(EventCode);
        let eventId = Event[0];
        return eventId;
    }

}
export function validSpace(control: AbstractControl) {
    if (control && control.value != null) {
        let ControlValue = control.value.trim();
        if (!ControlValue) {
            return { validUrl: true };
        }
    }
    return null;
}
