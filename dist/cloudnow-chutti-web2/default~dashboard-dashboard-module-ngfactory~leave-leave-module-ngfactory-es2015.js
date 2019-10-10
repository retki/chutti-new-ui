(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module-ngfactory~leave-leave-module-ngfactory"],{

/***/ "./src/app/services/ValidatingForm.ts":
/*!********************************************!*\
  !*** ./src/app/services/ValidatingForm.ts ***!
  \********************************************/
/*! exports provided: ValidatingForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatingForm", function() { return ValidatingForm; });
class ValidatingForm {
    constructor() {
    }
    /**
     * If local storage reloads the form sometimes form.valid is not
     *  correct...
     */
    partiallyRevalidate() {
        this.form.updateValueAndValidity();
    }
    forceRevalidate() {
        for (const control in this.form.controls) {
            this.form.get(control).markAsDirty();
            this.form.get(control).markAsTouched();
            this.form.get(control).updateValueAndValidity();
        }
        this.form.updateValueAndValidity();
    }
    onSubmit(form) {
        this.form = form;
        this.forceRevalidate();
        return this.form.valid;
    }
    isFormValid() {
        return this.form.valid;
    }
}


/***/ }),

/***/ "./src/app/services/messageConstant.ts":
/*!*********************************************!*\
  !*** ./src/app/services/messageConstant.ts ***!
  \*********************************************/
/*! exports provided: MessageConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageConstant", function() { return MessageConstant; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class MessageConstant {
    constructor() {
        /*
         * Here we access the Constant Global Variables reference.
         *  Constant Global Variables starts here.....
         */
        this.attendanceType = 2;
        this.appliedEmpLeaveId = 0;
        this.employeeDetailsId = 0;
        this.timesheetId = 0;
        this.leaveRequestDetailId = 0;
        this.maxLeaveCount = 100;
        /*Constant Global Variables ends here...............*/
        /*
         * Here we declare the Global Variables to reference all over the application.
         *   Global Member Variables starts Here.....
         */
        //Common Global Variables
        this.NO_REPORTING_MANAGER = 'Reporting Manager not Found.';
        this.SUCCESS_MESSAGE = 'Your information has been saved successfully.';
        this.DELETE_MESSAGE = 'Your information has been deleted successfully.';
        this.ERROR_MESSAGE = 'Error while saving your data.';
        this.ERROR_DELETE_MESSAGE = 'Error while deleting your data.';
        this.DUPLICATE_RECORDS = 'DUPLICATE RECORDS NOT ALLOWED';
        //HOLIDAY
        this.HOLIDAY_DUPLICATE_MESSAGE = 'Holiday Name Already Exist.';
        //DEPARTMENT       
        this.DEPARTMENT_DUPLICATE_MESSAGE = 'Department Name Already Exist.';
        //DESIGNATION      
        this.DESIGNATION_DUPLICATE_MESSAGE = 'Designation with Selected Department was Already Exist.';
        //ROLE       
        this.ROLE_DUPLICATE_MESSAGE = 'Role Name Already Exist.';
        //CLIENT       
        this.CLIENT_DUPLICATE_MESSAGE = 'Customer Email Already Exist.';
        //SHIFT      
        this.SHIFT_DUPLICATE_MESSAGE = 'Shift Name Already Exist.';
        //SYSTEM PARAMETERS      
        this.LOGO_SUCCESS_MESSAGE = 'Company logo has been Uploaded successfully.';
        this.LEAVE_SUCCESS_MESSAGE = 'Leave Details has been saved successfully.';
        //EMPLOYEE       
        this.EMPLOYEE_SUSPENDED_MESSAGE = 'User has been suspended successfully.';
        this.EMPLOYEE_ACTIVED_MESSAGE = 'User has been Actived successfully.';
        this.EMPLOYEE_DUPLICATE_MESSAGE = 'Cannot create Employee with Duplicate Email or Employee Code.';
        this.EMPLOYEE_ERROR_MESSAGE = 'Got error while saving Employee Information.';
        this.EMP_EDUCATION_ERROR_MESSAGE = 'Got error while saving Education Information.';
        this.EMP_SKILL_ERROR_MESSAGE = 'Got error while saving Skill Information.';
        this.EMP_EXPERIENCE_ERROR_MESSAGE = 'Got error while saving Experience Information.';
        this.EMP_BANK_ERROR_MESSAGE = 'Got error while saving Bank Information.';
        this.EMP_DEPENDENT_ERROR_MESSAGE = 'Got error while saving Dependent Information.';
        //LEAVE TYPE
        this.LEAVETYPE_DUPLICATE_MESSAGE = 'LeaveType Already Exist.';
        //LEAVE POLICIES      
        this.LEAVEPOLICY_SUCCESS_MESSAGE = 'Employee Leave bank will be updated after next accrual process.';
        this.LEAVEPOLICY_DUPLICATE_MESSAGE = 'Leave Policy Already Exist.';
        this.LEAVEPOLICY_MISSING_TYPESTATUS = 'Either LeaveType/EmployeeStatus is Missing .';
        //LEAVE REQUEST    
        this.LEAVEREQUEST_APPROVED_MESSAGE = 'Leave Request was Approved successfully';
        this.LEAVEREQUEST_HOLD_MESSAGE = 'Leave Request was On Hold successfully';
        this.LEAVEREQUEST_REJECTED_MESSAGE = 'Leave Request was Rejected successfully';
        //APPLY LEAVE
        this.NON_WORKINGDAYS_LEAVE_ERROR_MESSAGE = 'Cannot Apply leave on non-working days.';
        this.APPLY_LEAVE_ERROR = 'Got error while applying for leave.';
        this.APPLY_PERMISSION_ERROR = 'Got error while applying Permission.';
        this.APPLY_ONDUTY_ERROR = 'Got error while applying OnDuty.';
        this.CANCEL_LEAVE_ERROR = 'Got error while cancelling your leave.';
        this.CANCEL_LEAVE = 'Leave Request cancelled successfully.';
        this.FETCH_LEAVE = 'Cannot able to fetch leave record.';
        this.APPLY_PERMISSION = 'Permission applied successfully.';
        this.APPLY_ONDUTY = 'On Duty applied successfully.';
        // MANAGE LEAVE
        this.MAX_LEAVE_COUNT_MESSAGE = 'Leave count should not be more than 100';
        //ATTENDANCE
        this.LATE_REQUEST_SUCCESS_MESSAGE = 'Late request status has been saved successfully.';
        this.LATE_REQUEST_APPROVED_MESSAGE = 'Late request status has been Approved successfully.';
        this.LATE_REQUEST_REJECTED_MESSAGE = 'Late request status has been Rejected successfully.';
        //PROJECT TYPE     
        this.PROJECTTYPE_DUPLICATE_MESSAGE = 'ProjectType Already Exist.';
        //PROJECT   
        this.PROJECT_DUPLICATE_MESSAGE = 'Project Already Exist.';
        //PROJECT MAPPING   
        this.PROJECTMAPPING_DUPLICATE_MESSAGE = 'Project Mapping Already Exist.';
        //TIMESHEET
        this.TIMESHEET_REQUEST_SUCCESS_MESSAGE = 'TimeSheet has been saved successfully.';
        this.TIMESHEET_REQUEST_APPROVED_MESSAGE = 'TimeSheet has been Approved successfully.';
        this.TIMESHEET_REQUEST_REJECTED_MESSAGE = 'TimeSheet has been Rejected successfully.';
        this.TIMESHEET_DUPLICATE_MESSAGE = 'Timesheet already submitted for this week.';
    }
    /*Global Variables reference ends here................*/
    /*
     * Here we access the Globl Methods.
     *   Globl Methods starts here.....
     */
    // This method using for showing Success Or Failure messages
    showNotification(message, type) {
        $.notify({
            icon: 'notifications',
            message: message
        }, {
            type: type,
            timer: 3000,
            placement: {
                from: 'top',
                align: 'right'
            }
        });
    }
}
MessageConstant.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function MessageConstant_Factory() { return new MessageConstant(); }, token: MessageConstant, providedIn: "root" });


/***/ }),

/***/ "./src/app/user-module/dashboard/dashboard-attendance/dashboard-attendance.component.ngfactory.js":
/*!********************************************************************************************************!*\
  !*** ./src/app/user-module/dashboard/dashboard-attendance/dashboard-attendance.component.ngfactory.js ***!
  \********************************************************************************************************/
/*! exports provided: RenderType_DashboardAttendanceComponent, View_DashboardAttendanceComponent_0, View_DashboardAttendanceComponent_Host_0, DashboardAttendanceComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DashboardAttendanceComponent", function() { return RenderType_DashboardAttendanceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DashboardAttendanceComponent_0", function() { return View_DashboardAttendanceComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DashboardAttendanceComponent_Host_0", function() { return View_DashboardAttendanceComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAttendanceComponentNgFactory", function() { return DashboardAttendanceComponentNgFactory; });
/* harmony import */ var _dashboard_attendance_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-attendance.component.scss.shim.ngstyle */ "./src/app/user-module/dashboard/dashboard-attendance/dashboard-attendance.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_attendance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-attendance.component */ "./src/app/user-module/dashboard/dashboard-attendance/dashboard-attendance.component.ts");
/* harmony import */ var _services_genericservices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/genericservices */ "./src/app/services/genericservices.ts");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/urlConstant */ "./src/app/services/urlConstant.ts");
/* harmony import */ var _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/encrypt-decrypt-localstorage.service */ "./src/app/services/encrypt-decrypt-localstorage.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_DashboardAttendanceComponent = [_dashboard_attendance_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DashboardAttendanceComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DashboardAttendanceComponent, data: {} });

function View_DashboardAttendanceComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 30, "div", [["class", "white__border attendance rounded"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Attendance"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "h6", [["class", "float-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Month : "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "span", [["class", "api__month"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 20, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 9, "div", [["class", "col-12 col-lg-6 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 8, "div", [["class", "attendance__data line"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "h1", [["class", "attendance__date--number color"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["days"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 3, "p", [["class", "date__text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Total no. of"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Attendance"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 9, "div", [["class", "col-12 col-lg-6 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 8, "div", [["class", "attendance__data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "h1", [["class", "attendance__date--number"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["days"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 3, "p", [["class", "date__text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Total no. of "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Late coming"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1), _co.todayDate, "MMM")))); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.totalAttendanceDaysStr; _ck(_v, 16, 0, currVal_1); var currVal_2 = _co.totalLateInStatusDaysStr; _ck(_v, 26, 0, currVal_2); }); }
function View_DashboardAttendanceComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-dashboard-attendance", [], null, null, null, View_DashboardAttendanceComponent_0, RenderType_DashboardAttendanceComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _dashboard_attendance_component__WEBPACK_IMPORTED_MODULE_3__["DashboardAttendanceComponent"], [_services_genericservices__WEBPACK_IMPORTED_MODULE_4__["Genericservice"], _services_urlConstant__WEBPACK_IMPORTED_MODULE_5__["UrlConstant"], _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["EncryptDecryptLocalStorageService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DashboardAttendanceComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-dashboard-attendance", _dashboard_attendance_component__WEBPACK_IMPORTED_MODULE_3__["DashboardAttendanceComponent"], View_DashboardAttendanceComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/user-module/dashboard/dashboard-attendance/dashboard-attendance.component.scss.shim.ngstyle.js":
/*!****************************************************************************************************************!*\
  !*** ./src/app/user-module/dashboard/dashboard-attendance/dashboard-attendance.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@charset \"UTF-8\";\n[class^=icon_][_ngcontent-%COMP%], [class*=\" icon_\"][_ngcontent-%COMP%] {\n  font-family: \"chutti\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[class^=icon1-][_ngcontent-%COMP%], [class*=\" icon1-\"][_ngcontent-%COMP%] {\n  \n  font-family: \"icomoon\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon_dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE100\";\n}\n.icon_leave[_ngcontent-%COMP%]:before {\n  content: \"\uE101\";\n}\n.icon_attendance[_ngcontent-%COMP%]:before {\n  content: \"\uE102\";\n}\n.icon_timesheet[_ngcontent-%COMP%]:before {\n  content: \"\uE103\";\n}\n.icon_attendance1[_ngcontent-%COMP%]:before {\n  content: \"\uE104\";\n}\n.icon_support[_ngcontent-%COMP%]:before {\n  content: \"\uE105\";\n}\n.icon_quick_apply[_ngcontent-%COMP%]:before {\n  content: \"\uE106\";\n}\n.icon_leave_bank[_ngcontent-%COMP%]:before {\n  content: \"\uE107\";\n}\n.icon_collapse[_ngcontent-%COMP%]:before {\n  content: \"\uE108\";\n}\n.icon_expand[_ngcontent-%COMP%]:before {\n  content: \"\uE109\";\n}\n.icon_filter[_ngcontent-%COMP%]:before {\n  content: \"\uE10A\";\n}\n.icon_date_picker[_ngcontent-%COMP%]:before {\n  content: \"\uE10B\";\n}\n.icon_arrow_thick_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10C\";\n}\n.icon_arrow_thick_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10D\";\n}\n.icon_arrow_thin_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10E\";\n}\n.icon_arrow_thin_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10F\";\n}\n.icon_hold[_ngcontent-%COMP%]:before {\n  content: \"\uE110\";\n}\n.icon_cancel[_ngcontent-%COMP%]:before {\n  content: \"\uE111\";\n}\n.icon_tick[_ngcontent-%COMP%]:before {\n  content: \"\uE112\";\n}\n.icon_lock[_ngcontent-%COMP%]:before {\n  content: \"\uE113\";\n}\n.icon_edit_outline[_ngcontent-%COMP%]:before {\n  content: \"\uE114\";\n}\n.icon_edit_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE115\";\n}\n.icon_delete_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE116\";\n}\n.icon_search[_ngcontent-%COMP%]:before {\n  content: \"\uE117\";\n}\n.icon_notifications[_ngcontent-%COMP%]:before {\n  content: \"\uE118\";\n}\n.icon_time[_ngcontent-%COMP%]:before {\n  content: \"\uE119\";\n}\n.icon_date_time[_ngcontent-%COMP%]:before {\n  content: \"\uE11A\";\n}\n.icon_probation[_ngcontent-%COMP%]:before {\n  content: \"\uE11B\";\n}\n.icon_confirmed[_ngcontent-%COMP%]:before {\n  content: \"\uE11C\";\n}\n.icon_holidays[_ngcontent-%COMP%]:before {\n  content: \"\uE11D\";\n}\n.icon_priority_urgent[_ngcontent-%COMP%]:before {\n  content: \"\uE11E\";\n}\n.icon_arrow_up[_ngcontent-%COMP%]:before {\n  content: \"\uE11F\";\n}\n.icon_arrow_down[_ngcontent-%COMP%]:before {\n  content: \"\uE120\";\n}\n.icon_show_password[_ngcontent-%COMP%]:before {\n  content: \"\uE121\";\n}\n.icon_hide_password[_ngcontent-%COMP%]:before {\n  content: \"\uE122\";\n}\n.icon_name[_ngcontent-%COMP%]:before {\n  content: \"\uE123\";\n}\n.icon_organisation[_ngcontent-%COMP%]:before {\n  content: \"\uE124\";\n}\n.icon_phone[_ngcontent-%COMP%]:before {\n  content: \"\uE125\";\n}\n.icon_email[_ngcontent-%COMP%]:before {\n  content: \"\uE126\";\n}\n.icon_password[_ngcontent-%COMP%]:before {\n  content: \"\uE127\";\n}\n.icon_add[_ngcontent-%COMP%]:before {\n  content: \"\uE128\";\n}\n.icon_sign_out[_ngcontent-%COMP%]:before {\n  content: \"\uE129\";\n}\n.icon_profile[_ngcontent-%COMP%]:before {\n  content: \"\uE12A\";\n}\n.icon_warning[_ngcontent-%COMP%]:before {\n  content: \"\uE12B\";\n}\n.icon_camera[_ngcontent-%COMP%]:before {\n  content: \"\uE12C\";\n}\n.icon1-upload-to-cloud[_ngcontent-%COMP%]:before {\n  content: \"\uE900\";\n}\n.icon1-cloud-computing[_ngcontent-%COMP%]:before {\n  content: \"\uE901\";\n}\n.icon1-dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE902\";\n}\n.icon1-filter-results[_ngcontent-%COMP%]:before {\n  content: \"\uE903\";\n}\n.icon1-building[_ngcontent-%COMP%]:before {\n  content: \"\uE904\";\n}\n.icon1-noun_Calendar[_ngcontent-%COMP%]:before {\n  content: \"\uE905\";\n}\n.icon1-noun_Project[_ngcontent-%COMP%]:before {\n  content: \"\uE906\";\n}\n.icon1-noun_Upload[_ngcontent-%COMP%]:before {\n  content: \"\uE907\";\n}\n.icon1-noun_users[_ngcontent-%COMP%]:before {\n  content: \"\uE908\";\n}\n.icon1-noun_Work[_ngcontent-%COMP%]:before {\n  content: \"\uE909\";\n}\n.icon1-Path[_ngcontent-%COMP%]:before {\n  content: \"\uE90A\";\n}\n.attendance[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]::before {\n  content: \"\uE102\";\n}\n.attendance[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .attendance[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.attendance[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n.attendance[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   .api__month[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.attendance__data[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n@media (max-width: 1600px) {\n  .attendance__data[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n}\n.attendance__data[_ngcontent-%COMP%]   .attendance__date--number[_ngcontent-%COMP%] {\n  font-size: 2.4em;\n  color: #6E6E6E;\n  margin-bottom: 0px;\n}\n@media (max-width: 1600px) {\n  .attendance__data[_ngcontent-%COMP%]   .attendance__date--number[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n}\n.attendance__data[_ngcontent-%COMP%]   .attendance__date--number.color[_ngcontent-%COMP%] {\n  color: #6747D4;\n}\n@media (max-width: 991px) {\n  .attendance__data[_ngcontent-%COMP%]   .attendance__date--number[_ngcontent-%COMP%] {\n    margin: 2rem 0 0.5rem;\n  }\n}\n@media (max-width: 567px) {\n  .attendance__data[_ngcontent-%COMP%]   .attendance__date--number[_ngcontent-%COMP%] {\n    font-size: 3em;\n    margin: 1rem 0 0.5rem !important;\n  }\n}\n.attendance__data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  margin-bottom: 10px;\n}\n@media (max-width: 567px) {\n  .attendance__data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1em;\n    margin-bottom: 0px;\n  }\n}\n.attendance__data[_ngcontent-%COMP%]   .date__text[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n@media (max-width: 1600px) {\n  .attendance__data[_ngcontent-%COMP%]   .date__text[_ngcontent-%COMP%] {\n    margin-top: 0.4rem;\n  }\n  .attendance__data[_ngcontent-%COMP%]   .date__text[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.attendance__data.line[_ngcontent-%COMP%] {\n  position: relative;\n}\n.attendance__data.line[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 15%;\n  right: -9px;\n  border-right: 1px solid #DEDEDE;\n  height: 70%;\n}\n@media (max-width: 991px) {\n  .attendance__data.line[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tb2R1bGUvZGFzaGJvYXJkL2Rhc2hib2FyZC1hdHRlbmRhbmNlL2Rhc2hib2FyZC1hdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcmVudWdhL0Rlc2t0b3AvVlNDLXdvcmtzcGFjZS9Bbmd1bGFyIFdvcmtzcGFjZS9jbG91ZG5vdy1jaHV0dGktd2ViL3NyYy9hcHAvdXNlci1tb2R1bGUvZGFzaGJvYXJkL2Rhc2hib2FyZC1hdHRlbmRhbmNlL2Rhc2hib2FyZC1hdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcmVudWdhL0Rlc2t0b3AvVlNDLXdvcmtzcGFjZS9Bbmd1bGFyIFdvcmtzcGFjZS9jbG91ZG5vdy1jaHV0dGktd2ViL3N0ZGluIiwiL2hvbWUvcmVudWdhL0Rlc2t0b3AvVlNDLXdvcmtzcGFjZS9Bbmd1bGFyIFdvcmtzcGFjZS9jbG91ZG5vdy1jaHV0dGktd2ViL3NyYy9hc3NldHMvc2Nzcy9fbWl4aW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNxQmhCOztFQUVFLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURuQkY7QUNxQkE7RUFDRSwrRUFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUVBLHNDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBRG5CRjtBQ29FRTtFQUF1QixZQUFBO0FEaEV6QjtBQ2dFeUM7RUFBbUIsWUFBQTtBRDVENUQ7QUM0RDRFO0VBQXdCLFlBQUE7QUR4RHBHO0FDd0RvSDtFQUF1QixZQUFBO0FEcEQzSTtBQ29EMko7RUFBeUIsWUFBQTtBRGhEcEw7QUNnRG9NO0VBQXFCLFlBQUE7QUQ1Q3pOO0FDNEN5TztFQUF5QixZQUFBO0FEeENsUTtBQ3dDa1I7RUFBd0IsWUFBQTtBRHBDMVM7QUNvQzBUO0VBQXNCLFlBQUE7QURoQ2hWO0FDZ0NnVztFQUFvQixZQUFBO0FENUJwWDtBQzRCb1k7RUFBb0IsWUFBQTtBRHhCeFo7QUN3QndhO0VBQXlCLFlBQUE7QURwQmpjO0FDb0JpZDtFQUE4QixZQUFBO0FEaEIvZTtBQ2dCK2Y7RUFBK0IsWUFBQTtBRFo5aEI7QUNZOGlCO0VBQTZCLFlBQUE7QURSM2tCO0FDUTJsQjtFQUE4QixZQUFBO0FESnpuQjtBQ0l5b0I7RUFBa0IsWUFBQTtBREEzcEI7QUNBMnFCO0VBQW9CLFlBQUE7QURJL3JCO0FDSitzQjtFQUFrQixZQUFBO0FEUWp1QjtBQ1JpdkI7RUFBa0IsWUFBQTtBRFlud0I7QUNabXhCO0VBQTBCLFlBQUE7QURnQjd5QjtBQ2hCNnpCO0VBQXlCLFlBQUE7QURvQnQxQjtBQ3BCczJCO0VBQTJCLFlBQUE7QUR3Qmo0QjtBQ3hCaTVCO0VBQW9CLFlBQUE7QUQ0QnI2QjtBQzVCcTdCO0VBQTJCLFlBQUE7QURnQ2g5QjtBQ2hDZytCO0VBQWtCLFlBQUE7QURvQ2wvQjtBQ3BDa2dDO0VBQXVCLFlBQUE7QUR3Q3poQztBQ3hDeWlDO0VBQXVCLFlBQUE7QUQ0Q2hrQztBQzVDZ2xDO0VBQXVCLFlBQUE7QURnRHZtQztBQ2hEdW5DO0VBQXNCLFlBQUE7QURvRDdvQztBQ3BENnBDO0VBQTZCLFlBQUE7QUR3RDFyQztBQ3hEMHNDO0VBQXNCLFlBQUE7QUQ0RGh1QztBQzVEZ3ZDO0VBQXdCLFlBQUE7QURnRXh3QztBQ2hFd3hDO0VBQTJCLFlBQUE7QURvRW56QztBQ3BFbTBDO0VBQTJCLFlBQUE7QUR3RTkxQztBQ3hFODJDO0VBQWtCLFlBQUE7QUQ0RWg0QztBQzVFZzVDO0VBQTBCLFlBQUE7QURnRjE2QztBQ2hGMDdDO0VBQW1CLFlBQUE7QURvRjc4QztBQ3BGNjlDO0VBQW1CLFlBQUE7QUR3RmgvQztBQ3hGZ2dEO0VBQXNCLFlBQUE7QUQ0RnRoRDtBQzVGc2lEO0VBQWlCLFlBQUE7QURnR3ZqRDtBQ2hHdWtEO0VBQXNCLFlBQUE7QURvRzdsRDtBQ3BHNm1EO0VBQXFCLFlBQUE7QUR3R2xvRDtBQ3hHa3BEO0VBQXFCLFlBQUE7QUQ0R3ZxRDtBQzVHdXJEO0VBQW9CLFlBQUE7QURnSDNzRDtBQzlHRTtFQUNFLFlBQUE7QURpSEo7QUMvR0U7RUFDRSxZQUFBO0FEa0hKO0FDaEhFO0VBQ0UsWUFBQTtBRG1ISjtBQ2pIRTtFQUNFLFlBQUE7QURvSEo7QUNsSEU7RUFDRSxZQUFBO0FEcUhKO0FDbkhFO0VBQ0UsWUFBQTtBRHNISjtBQ3BIRTtFQUNFLFlBQUE7QUR1SEo7QUNySEU7RUFDRSxZQUFBO0FEd0hKO0FDdEhFO0VBQ0UsWUFBQTtBRHlISjtBQ3ZIRTtFQUNFLFlBQUE7QUQwSEo7QUN4SEU7RUFDRSxZQUFBO0FEMkhKO0FFblBRO0VBRUcsWUFBQTtBRnFQWDtBRS9PSTtFQUVJLHFCQUFBO0FGaVBSO0FFL09JO0VBRUksZ0JBQUE7QUZnUFI7QUUvT1E7RUFFSSxpQkFBQTtBRmdQWjtBRTVPQTtFQUVJLGdCQUFBO0FGOE9KO0FHMVFRO0VEMEJSO0lBS1Esa0JBQUE7RUYrT047QUFDRjtBRTlPSTtFQUVJLGdCQUFBO0VBTUEsY0RuQ0Y7RUNvQ0Usa0JBQUE7QUYwT1I7QUdwUlE7RURpQ0o7SUFLUSxjQUFBO0VGa1BWO0FBQ0Y7QUU5T1E7RUFFSSxjRDFDRjtBRHlSVjtBRzdQUTtFREVKO0lBaUJRLHFCQUFBO0VGOE9WO0FBQ0Y7QUcvT1E7RURqQko7SUFxQlEsY0FBQTtJQUNBLGdDQUFBO0VGK09WO0FBQ0Y7QUU3T0k7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0FGOE9SO0FHelBRO0VEUUo7SUFNUSxjQUFBO0lBQ0Esa0JBQUE7RUYrT1Y7QUFDRjtBRTdPSTtFQUVJLGdCQUFBO0FGOE9SO0FHcFRRO0VEb0VKO0lBS1Esa0JBQUE7RUYrT1Y7RUU5T1U7SUFFSSxhQUFBO0VGK09kO0FBQ0Y7QUUzT0k7RUFHSSxrQkFBQTtBRjJPUjtBRTFPUTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FGMk9aO0FHeFNRO0VEc0RBO0lBVVEsYUFBQTtFRjRPZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci1tb2R1bGUvZGFzaGJvYXJkL2Rhc2hib2FyZC1hdHRlbmRhbmNlL2Rhc2hib2FyZC1hdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuW2NsYXNzXj1pY29uX10sXG5bY2xhc3MqPVwiIGljb25fXCJdIHtcbiAgZm9udC1mYW1pbHk6IFwiY2h1dHRpXCIgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbltjbGFzc149aWNvbjEtXSwgW2NsYXNzKj1cIiBpY29uMS1cIl0ge1xuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICBmb250LWZhbWlseTogXCJpY29tb29uXCIgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uaWNvbl9kYXNoYm9hcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIBcIjtcbn1cblxuLmljb25fbGVhdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIFcIjtcbn1cblxuLmljb25fYXR0ZW5kYW5jZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EglwiO1xufVxuXG4uaWNvbl90aW1lc2hlZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhINcIjtcbn1cblxuLmljb25fYXR0ZW5kYW5jZTE6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIRcIjtcbn1cblxuLmljb25fc3VwcG9ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EhVwiO1xufVxuXG4uaWNvbl9xdWlja19hcHBseTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EhlwiO1xufVxuXG4uaWNvbl9sZWF2ZV9iYW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSHXCI7XG59XG5cbi5pY29uX2NvbGxhcHNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSIXCI7XG59XG5cbi5pY29uX2V4cGFuZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EiVwiO1xufVxuXG4uaWNvbl9maWx0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIpcIjtcbn1cblxuLmljb25fZGF0ZV9waWNrZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhItcIjtcbn1cblxuLmljb25fYXJyb3dfdGhpY2tfbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EjFwiO1xufVxuXG4uaWNvbl9hcnJvd190aGlja19yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EjVwiO1xufVxuXG4uaWNvbl9hcnJvd190aGluX2xlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhI5cIjtcbn1cblxuLmljb25fYXJyb3dfdGhpbl9yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ej1wiO1xufVxuXG4uaWNvbl9ob2xkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSQXCI7XG59XG5cbi5pY29uX2NhbmNlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EkVwiO1xufVxuXG4uaWNvbl90aWNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSSXCI7XG59XG5cbi5pY29uX2xvY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJNcIjtcbn1cblxuLmljb25fZWRpdF9vdXRsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSUXCI7XG59XG5cbi5pY29uX2VkaXRfZmlsbGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSVXCI7XG59XG5cbi5pY29uX2RlbGV0ZV9maWxsZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJZcIjtcbn1cblxuLmljb25fc2VhcmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSXXCI7XG59XG5cbi5pY29uX25vdGlmaWNhdGlvbnM6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJhcIjtcbn1cblxuLmljb25fdGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EmVwiO1xufVxuXG4uaWNvbl9kYXRlX3RpbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJpcIjtcbn1cblxuLmljb25fcHJvYmF0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSbXCI7XG59XG5cbi5pY29uX2NvbmZpcm1lZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EnFwiO1xufVxuXG4uaWNvbl9ob2xpZGF5czpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EnVwiO1xufVxuXG4uaWNvbl9wcmlvcml0eV91cmdlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJ5cIjtcbn1cblxuLmljb25fYXJyb3dfdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJ9cIjtcbn1cblxuLmljb25fYXJyb3dfZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EoFwiO1xufVxuXG4uaWNvbl9zaG93X3Bhc3N3b3JkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oShXCI7XG59XG5cbi5pY29uX2hpZGVfcGFzc3dvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKJcIjtcbn1cblxuLmljb25fbmFtZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eo1wiO1xufVxuXG4uaWNvbl9vcmdhbmlzYXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKRcIjtcbn1cblxuLmljb25fcGhvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKVcIjtcbn1cblxuLmljb25fZW1haWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKZcIjtcbn1cblxuLmljb25fcGFzc3dvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKdcIjtcbn1cblxuLmljb25fYWRkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSoXCI7XG59XG5cbi5pY29uX3NpZ25fb3V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSpXCI7XG59XG5cbi5pY29uX3Byb2ZpbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKpcIjtcbn1cblxuLmljb25fd2FybmluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eq1wiO1xufVxuXG4uaWNvbl9jYW1lcmE6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKxcIjtcbn1cblxuLmljb24xLXVwbG9hZC10by1jbG91ZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kgFwiO1xufVxuXG4uaWNvbjEtY2xvdWQtY29tcHV0aW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSBXCI7XG59XG5cbi5pY29uMS1kYXNoYm9hcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIJcIjtcbn1cblxuLmljb24xLWZpbHRlci1yZXN1bHRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSDXCI7XG59XG5cbi5pY29uMS1idWlsZGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6khFwiO1xufVxuXG4uaWNvbjEtbm91bl9DYWxlbmRhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6khVwiO1xufVxuXG4uaWNvbjEtbm91bl9Qcm9qZWN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSGXCI7XG59XG5cbi5pY29uMS1ub3VuX1VwbG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kh1wiO1xufVxuXG4uaWNvbjEtbm91bl91c2VyczpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kiFwiO1xufVxuXG4uaWNvbjEtbm91bl9Xb3JrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSJXCI7XG59XG5cbi5pY29uMS1QYXRoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSKXCI7XG59XG5cbi5hdHRlbmRhbmNlIGg1OjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EglwiO1xufVxuXG4uYXR0ZW5kYW5jZSBoNSwgLmF0dGVuZGFuY2UgaDYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYXR0ZW5kYW5jZSBoNiB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG4uYXR0ZW5kYW5jZSBoNiAuYXBpX19tb250aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYXR0ZW5kYW5jZV9fZGF0YSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5hdHRlbmRhbmNlX19kYXRhIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIH1cbn1cbi5hdHRlbmRhbmNlX19kYXRhIC5hdHRlbmRhbmNlX19kYXRlLS1udW1iZXIge1xuICBmb250LXNpemU6IDIuNGVtO1xuICBjb2xvcjogIzZFNkU2RTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuYXR0ZW5kYW5jZV9fZGF0YSAuYXR0ZW5kYW5jZV9fZGF0ZS0tbnVtYmVyIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxufVxuLmF0dGVuZGFuY2VfX2RhdGEgLmF0dGVuZGFuY2VfX2RhdGUtLW51bWJlci5jb2xvciB7XG4gIGNvbG9yOiAjNjc0N0Q0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5hdHRlbmRhbmNlX19kYXRhIC5hdHRlbmRhbmNlX19kYXRlLS1udW1iZXIge1xuICAgIG1hcmdpbjogMnJlbSAwIDAuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5hdHRlbmRhbmNlX19kYXRhIC5hdHRlbmRhbmNlX19kYXRlLS1udW1iZXIge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIG1hcmdpbjogMXJlbSAwIDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG4uYXR0ZW5kYW5jZV9fZGF0YSBwIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuYXR0ZW5kYW5jZV9fZGF0YSBwIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn1cbi5hdHRlbmRhbmNlX19kYXRhIC5kYXRlX190ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmF0dGVuZGFuY2VfX2RhdGEgLmRhdGVfX3RleHQge1xuICAgIG1hcmdpbi10b3A6IDAuNHJlbTtcbiAgfVxuICAuYXR0ZW5kYW5jZV9fZGF0YSAuZGF0ZV9fdGV4dCBiciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmF0dGVuZGFuY2VfX2RhdGEubGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdHRlbmRhbmNlX19kYXRhLmxpbmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUlO1xuICByaWdodDogLTlweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0RFREVERTtcbiAgaGVpZ2h0OiA3MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmF0dGVuZGFuY2VfX2RhdGEubGluZTphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSIsIiR3aGl0ZTojZmZmZmZmO1xuJGJvcmRlci1jb2xvcjojREVERURFO1xuJGJvcmRlci1saWdodDojRThFOEU4O1xuJGxpZ2h0LWJsdWU6I0YxRjdGQjtcbiRkYXJrUGluazojOUE0NUQyO1xuJGRhcmtCbHVlOiM2NzQ3RDQ7XG4kdGV4dC1jb2xvcjojNDA0MDQwO1xuJHByaW1hcnlDb2xvcjojNzE1MURDO1xuJGdyYXk6IzZFNkU2RTtcbiRibGFjazojMDAwMDAwO1xuJGRhcmtSZWQ6I0UzMkMyQztcbiRvcmFuZ2U6I0ZGNkMwMDtcbiRicm93bjojQUEzNDdCO1xuJGFycm93R3JheTojODQ4NDg0O1xuJGJsdWU6ICMxYzkxZmY7XG4kcm9zZTojRjk0Rjg5O1xuJG5lcHR1bmU6IzdDQTFCMTtcbiR5ZWxsb3c6I0UyODYwRDtcbiRjb2xvci1iYWNrOiAjZWZlZmVmO1xuJGNvbG9yLWJhcjogIzY3NDdENDtcblxuW2NsYXNzXj1cImljb25fXCJdLFxuW2NsYXNzKj1cIiBpY29uX1wiXSB7XG4gIGZvbnQtZmFtaWx5OiAnY2h1dHRpJyAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbltjbGFzc149XCJpY29uMS1cIl0sIFtjbGFzcyo9XCIgaWNvbjEtXCJdIHtcbiAgLyogdXNlICFpbXBvcnRhbnQgdG8gcHJldmVudCBpc3N1ZXMgd2l0aCBicm93c2VyIGV4dGVuc2lvbnMgdGhhdCBjaGFuZ2UgZm9udHMgKi9cbiAgZm9udC1mYW1pbHk6ICdpY29tb29uJyAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuXG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuXG5AbWl4aW4gYmctZ3JhZGllbnQoKXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCRkYXJrUGluayAyMCUsICRkYXJrQmx1ZSA4MCUpO1xufVxuQG1peGluIHRoZW1lLWJ0bigpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsJGRhcmtCbHVlIDAlLCAkZGFya1BpbmsgMTAwJSk7XG59XG5AbWl4aW4gYmctYmxhY2soKXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsJGJsYWNrIDAlLCAjMTIxMjEzIDEwMCUpO1xufVxuQG1peGluIGZvbnQtY29sb3IoKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya1BpbmsgMjAlLCAkZGFya0JsdWUgODAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMjBkZWcsJGRhcmtQaW5rIDIwJSwgJGRhcmtCbHVlIDgwJSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyAgICBcbiAgfVxuICBAbWl4aW4gIGJvcmRlci1ib3R0b20oKSB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6ICRkYXJrQmx1ZTtcbiAgICB9XG4gIH1cblxuQG1peGluIHVzZXJJbWcgKCl7XG5cbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiVidG4tc2hhcmVkIHtcbiAgICBtaW4taGVpZ2h0OiA1NXB4O1xuICB9XG5cbiAgLmljb25fZGFzaGJvYXJkOmJlZm9yZXtjb250ZW50OlwiXFxlMTAwXCJ9Lmljb25fbGVhdmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDFcIn0uaWNvbl9hdHRlbmRhbmNlOmJlZm9yZXtjb250ZW50OlwiXFxlMTAyXCJ9Lmljb25fdGltZXNoZWV0OmJlZm9yZXtjb250ZW50OlwiXFxlMTAzXCJ9Lmljb25fYXR0ZW5kYW5jZTE6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDRcIn0uaWNvbl9zdXBwb3J0OmJlZm9yZXtjb250ZW50OlwiXFxlMTA1XCJ9Lmljb25fcXVpY2tfYXBwbHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDZcIn0uaWNvbl9sZWF2ZV9iYW5rOmJlZm9yZXtjb250ZW50OlwiXFxlMTA3XCJ9Lmljb25fY29sbGFwc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDhcIn0uaWNvbl9leHBhbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDlcIn0uaWNvbl9maWx0ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMGFcIn0uaWNvbl9kYXRlX3BpY2tlcjpiZWZvcmV7Y29udGVudDpcIlxcZTEwYlwifS5pY29uX2Fycm93X3RoaWNrX2xlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMGNcIn0uaWNvbl9hcnJvd190aGlja19yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZTEwZFwifS5pY29uX2Fycm93X3RoaW5fbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZTEwZVwifS5pY29uX2Fycm93X3RoaW5fcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMGZcIn0uaWNvbl9ob2xkOmJlZm9yZXtjb250ZW50OlwiXFxlMTEwXCJ9Lmljb25fY2FuY2VsOmJlZm9yZXtjb250ZW50OlwiXFxlMTExXCJ9Lmljb25fdGljazpiZWZvcmV7Y29udGVudDpcIlxcZTExMlwifS5pY29uX2xvY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTNcIn0uaWNvbl9lZGl0X291dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTRcIn0uaWNvbl9lZGl0X2ZpbGxlZDpiZWZvcmV7Y29udGVudDpcIlxcZTExNVwifS5pY29uX2RlbGV0ZV9maWxsZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTZcIn0uaWNvbl9zZWFyY2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTdcIn0uaWNvbl9ub3RpZmljYXRpb25zOmJlZm9yZXtjb250ZW50OlwiXFxlMTE4XCJ9Lmljb25fdGltZTpiZWZvcmV7Y29udGVudDpcIlxcZTExOVwifS5pY29uX2RhdGVfdGltZTpiZWZvcmV7Y29udGVudDpcIlxcZTExYVwifS5pY29uX3Byb2JhdGlvbjpiZWZvcmV7Y29udGVudDpcIlxcZTExYlwifS5pY29uX2NvbmZpcm1lZDpiZWZvcmV7Y29udGVudDpcIlxcZTExY1wifS5pY29uX2hvbGlkYXlzOmJlZm9yZXtjb250ZW50OlwiXFxlMTFkXCJ9Lmljb25fcHJpb3JpdHlfdXJnZW50OmJlZm9yZXtjb250ZW50OlwiXFxlMTFlXCJ9Lmljb25fYXJyb3dfdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWZcIn0uaWNvbl9hcnJvd19kb3duOmJlZm9yZXtjb250ZW50OlwiXFxlMTIwXCJ9Lmljb25fc2hvd19wYXNzd29yZDpiZWZvcmV7Y29udGVudDpcIlxcZTEyMVwifS5pY29uX2hpZGVfcGFzc3dvcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjJcIn0uaWNvbl9uYW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTIzXCJ9Lmljb25fb3JnYW5pc2F0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxlMTI0XCJ9Lmljb25fcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjVcIn0uaWNvbl9lbWFpbDpiZWZvcmV7Y29udGVudDpcIlxcZTEyNlwifS5pY29uX3Bhc3N3b3JkOmJlZm9yZXtjb250ZW50OlwiXFxlMTI3XCJ9Lmljb25fYWRkOmJlZm9yZXtjb250ZW50OlwiXFxlMTI4XCJ9Lmljb25fc2lnbl9vdXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjlcIn0uaWNvbl9wcm9maWxlOmJlZm9yZXtjb250ZW50OlwiXFxlMTJhXCJ9Lmljb25fd2FybmluZzpiZWZvcmV7Y29udGVudDpcIlxcZTEyYlwifS5pY29uX2NhbWVyYTpiZWZvcmV7Y29udGVudDpcIlxcZTEyY1wifVxuXG4gIC5pY29uMS11cGxvYWQtdG8tY2xvdWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwMFwiO1xuICB9XG4gIC5pY29uMS1jbG91ZC1jb21wdXRpbmc6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwMVwiO1xuICB9XG4gIC5pY29uMS1kYXNoYm9hcmQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwMlwiO1xuICB9XG4gIC5pY29uMS1maWx0ZXItcmVzdWx0czpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAzXCI7XG4gIH1cbiAgLmljb24xLWJ1aWxkaW5nOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDRcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9DYWxlbmRhcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA1XCI7XG4gIH1cbiAgLmljb24xLW5vdW5fUHJvamVjdDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA2XCI7XG4gIH1cbiAgLmljb24xLW5vdW5fVXBsb2FkOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDdcIjtcbiAgfVxuICAuaWNvbjEtbm91bl91c2VyczpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA4XCI7XG4gIH1cbiAgLmljb24xLW5vdW5fV29yazpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA5XCI7XG4gIH1cbiAgLmljb24xLVBhdGg6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwYVwiO1xuICB9IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvbWl4aW4uc2Nzcyc7XG5cbi5hdHRlbmRhbmNlXG57XG4gICAgaDUgXG4gICAge1xuICAgICAgICAmOjpiZWZvcmVcbiAgICAgICAge1xuICAgICAgICAgICBjb250ZW50OiBcIlxcZTEwMlwiO1xuICAgICAgICB9XG4gICAgfVxufVxuLmF0dGVuZGFuY2UgXG57XG4gICAgaDUsaDYgXG4gICAge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIGg2IFxuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICAgICAuYXBpX19tb250aFxuICAgICAgICB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5hdHRlbmRhbmNlX19kYXRhXG57XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGJpZy1kZXNrdG9wKVxuICAgIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgfVxuICAgIC5hdHRlbmRhbmNlX19kYXRlLS1udW1iZXJcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi40ZW07XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoYmlnLWRlc2t0b3ApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIGNvbG9yOiAkZ3JheTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAmLmNvbG9yIFxuICAgICAgICB7XG4gICAgICAgICAgICBjb2xvcjogJGRhcmtCbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIFxuICAgICAgICB7XG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMCAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDAgLjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwIFxuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSBcbiAgICAgICAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjAwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRhdGVfX3RleHRcbiAgICB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoYmlnLWRlc2t0b3ApIFxuICAgICAgICB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAuNHJlbTtcbiAgICAgICAgICAgIGJyIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmxpbmUgXG4gICAge1xuICAgICAgIFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICY6YWZ0ZXJcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTUlO1xuICAgICAgICAgICAgcmlnaHQ6IC05cHg7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJAbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcbiAgICBAaWYgJHBvaW50PT1iaWctZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBlbHNlIGlmICRwb2ludD09ZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBlbHNlIGlmICRwb2ludD09bGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT1hcHBsZS1sYXB0b3Age1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIEBlbHNlIGlmICRwb2ludD09dGFibGV0IHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIEBlbHNlIGlmICRwb2ludD09dGFibGV0LXMge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIEBlbHNlIGlmICRwb2ludD09bW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgQGVsc2UgaWYgJHBvaW50PT1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgXG5cbn1cblxuXG5cbkBtaXhpbiBncmFkaWVudC10ZXh0KCRhbmdsZTogNDVkZWcsICRjb2xvcjogIzY3NDdENCwgJGFtb3VudDogMzUlKSB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciwgYWRqdXN0LWh1ZSgkY29sb3IsICRhbW91bnQpKTtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIEBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLi4uKSB7XG4gICAgLW1vei10cmFuc2l0aW9uOiAgICAkdHJhbnNpdGlvbjtcbiAgICAtby10cmFuc2l0aW9uOiAgICAgICR0cmFuc2l0aW9uO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgdHJhbnNpdGlvbjogICAgICAgICAkdHJhbnNpdGlvbjtcbn1cbiAgIl19 */"];



/***/ }),

/***/ "./src/app/user-module/dashboard/dashboard-attendance/dashboard-attendance.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/user-module/dashboard/dashboard-attendance/dashboard-attendance.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DashboardAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAttendanceComponent", function() { return DashboardAttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/urlConstant */ "./src/app/services/urlConstant.ts");


class DashboardAttendanceComponent {
    constructor(gernericservice, urlconstant, encryptdecryptlocalstorage) {
        this.gernericservice = gernericservice;
        this.urlconstant = urlconstant;
        this.encryptdecryptlocalstorage = encryptdecryptlocalstorage;
        this.attendanceUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].attendsnceApi;
        this.attendanceList = [];
        this.empLateRequest = [];
        this.totalAttendanceDays = 0;
        this.totalLateInStatusDays = 0;
        this.todayDate = new Date();
    }
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
    getTimeByTimeStamp(timeStamp) {
        if (timeStamp != null) {
            var date_to_convert = new Date(timeStamp);
            var local_date = new Date();
            date_to_convert.setMinutes(date_to_convert.getMinutes() + local_date.getTimezoneOffset());
            let DateValue = date_to_convert.toString().split(' ');
            return DateValue[4];
        }
        else {
            return '--';
        }
    }
    attendance() {
        this.employeemasterid = this.encryptdecryptlocalstorage.getLocalStorage('employeeId');
        var date = new Date();
        this.temp = new Date();
        this.ToDate = this.temp.getFullYear() + '-' +
            (this.temp.getMonth() + 1) + '-' +
            this.temp.getDate();
        this.FromDate = this.temp.getFullYear() + '-' + (this.temp.getMonth() + 1) + '-' + '01';
        date.setDate(new Date().getDate() - 1);
        var dateformat = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
        return this.gernericservice.get(this.attendanceUrl + "?gemsEmployeeMasterId=" + this.employeemasterid + "&fromDate=" + this.FromDate + "&toDate=" + this.ToDate).subscribe(response => {
            if (response.status.success === 'Fail') {
                this.totalAttendanceDaysStr = '00';
                this.totalLateInStatusDaysStr = '00';
            }
            else {
                this.attendanceList = response.data;
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
                if (this.totalAttendanceDays < 10) {
                    this.totalAttendanceDaysStr = "0" + this.totalAttendanceDays;
                }
                else {
                    this.totalAttendanceDaysStr = this.totalAttendanceDays + "";
                }
                this.totalLateInStatusDays = this.empLateRequest == undefined ? 0 : this.empLateRequest.length;
                // this.totalLateInStatusDays = this.empLateRequest.length;
                if (this.totalLateInStatusDays < 10) {
                    this.totalLateInStatusDaysStr = "0" + this.totalLateInStatusDays;
                }
                else {
                    this.totalLateInStatusDaysStr = this.totalLateInStatusDays + "";
                }
                ;
            }
        });
    }
}


/***/ }),

/***/ "./src/app/user-module/dashboard/dashboard.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/user-module/dashboard/dashboard.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_DashboardComponent, View_DashboardComponent_0, View_DashboardComponent_Host_0, DashboardComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DashboardComponent", function() { return RenderType_DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_0", function() { return View_DashboardComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_Host_0", function() { return View_DashboardComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponentNgFactory", function() { return DashboardComponentNgFactory; });
/* harmony import */ var _dashboard_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.scss.shim.ngstyle */ "./src/app/user-module/dashboard/dashboard.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ngx_loading_bar_core_ngx_loading_bar_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@ngx-loading-bar/core/ngx-loading-bar-core.ngfactory */ "./node_modules/@ngx-loading-bar/core/ngx-loading-bar-core.ngfactory.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm2015/ngx-loading-bar-core.js");
/* harmony import */ var _quick_apply_quick_apply_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quick-apply/quick-apply.component.ngfactory */ "./src/app/user-module/dashboard/quick-apply/quick-apply.component.ngfactory.js");
/* harmony import */ var _quick_apply_quick_apply_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quick-apply/quick-apply.component */ "./src/app/user-module/dashboard/quick-apply/quick-apply.component.ts");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/urlConstant */ "./src/app/services/urlConstant.ts");
/* harmony import */ var _services_genericservices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/genericservices */ "./src/app/services/genericservices.ts");
/* harmony import */ var _services_commonMethodService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/commonMethodService */ "./src/app/services/commonMethodService.ts");
/* harmony import */ var _services_messageConstant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/messageConstant */ "./src/app/services/messageConstant.ts");
/* harmony import */ var _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/encrypt-decrypt-localstorage.service */ "./src/app/services/encrypt-decrypt-localstorage.service.ts");
/* harmony import */ var _services_dataSharing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/dataSharing.service */ "./src/app/services/dataSharing.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _leave_bank_leave_bank_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./leave-bank/leave-bank.component.ngfactory */ "./src/app/user-module/dashboard/leave-bank/leave-bank.component.ngfactory.js");
/* harmony import */ var _leave_bank_leave_bank_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./leave-bank/leave-bank.component */ "./src/app/user-module/dashboard/leave-bank/leave-bank.component.ts");
/* harmony import */ var _dashboard_attendance_dashboard_attendance_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard-attendance/dashboard-attendance.component.ngfactory */ "./src/app/user-module/dashboard/dashboard-attendance/dashboard-attendance.component.ngfactory.js");
/* harmony import */ var _dashboard_attendance_dashboard_attendance_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard-attendance/dashboard-attendance.component */ "./src/app/user-module/dashboard/dashboard-attendance/dashboard-attendance.component.ts");
/* harmony import */ var _whos_on_leave_whos_on_leave_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./whos-on-leave/whos-on-leave.component.ngfactory */ "./src/app/user-module/dashboard/whos-on-leave/whos-on-leave.component.ngfactory.js");
/* harmony import */ var _whos_on_leave_whos_on_leave_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./whos-on-leave/whos-on-leave.component */ "./src/app/user-module/dashboard/whos-on-leave/whos-on-leave.component.ts");
/* harmony import */ var ng2_daterangepicker_lib_daterangepicker_config_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-daterangepicker/lib/daterangepicker/config.service */ "./node_modules/ng2-daterangepicker/lib/daterangepicker/config.service.js");
/* harmony import */ var ng2_daterangepicker_lib_daterangepicker_config_service__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ng2_daterangepicker_lib_daterangepicker_config_service__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_css_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/css.service */ "./src/app/services/css.service.ts");
/* harmony import */ var _leave_status_leave_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./leave-status/leave-status.component.ngfactory */ "./src/app/user-module/dashboard/leave-status/leave-status.component.ngfactory.js");
/* harmony import */ var _leave_status_leave_status_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./leave-status/leave-status.component */ "./src/app/user-module/dashboard/leave-status/leave-status.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/user-module/dashboard/dashboard.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

























var styles_DashboardComponent = [_dashboard_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DashboardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DashboardComponent, data: {} });

function View_DashboardComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-loading-bar", [], [[2, "loading-bar-fixed", null]], null, null, _node_modules_ngx_loading_bar_core_ngx_loading_bar_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_LoadingBarComponent_0"], _node_modules_ngx_loading_bar_core_ngx_loading_bar_core_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_LoadingBarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__["LoadingBarComponent"], [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__["LoadingBarService"]], { includeSpinner: [0, "includeSpinner"], color: [1, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 29, "div", [["class", "dashboard__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "h3", [["class", "w-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "api__name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", "'s"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Dashboard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 24, "div", [["class", "row justify-content-center h-100 dashboard-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "div", [["class", "col-12 col-md-6 col-lg-4 h-6 hide__elements"], ["id", "apply"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "div", [["class", "inner__section--styles"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "app-quick-apply", [], null, null, null, _quick_apply_quick_apply_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_QuickApplyComponent_0"], _quick_apply_quick_apply_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_QuickApplyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 4308992, null, 0, _quick_apply_quick_apply_component__WEBPACK_IMPORTED_MODULE_5__["QuickApplyComponent"], [_services_urlConstant__WEBPACK_IMPORTED_MODULE_6__["UrlConstant"], _services_genericservices__WEBPACK_IMPORTED_MODULE_7__["Genericservice"], _services_commonMethodService__WEBPACK_IMPORTED_MODULE_8__["commonService"], _services_messageConstant__WEBPACK_IMPORTED_MODULE_9__["MessageConstant"], _services_commonMethodService__WEBPACK_IMPORTED_MODULE_8__["commonService"], _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_10__["EncryptDecryptLocalStorageService"], _services_dataSharing_service__WEBPACK_IMPORTED_MODULE_11__["DataSharingService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbCalendar"]], { dashBoardPaginationView: [0, "dashBoardPaginationView"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "div", [["class", "col-12 col-md-6 col-lg-4 h-6 quick__apply-bg hide__elements"], ["id", "bank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [["class", "inner__section--styles"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "app-leave-bank", [], null, null, null, _leave_bank_leave_bank_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_LeaveBankComponent_0"], _leave_bank_leave_bank_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_LeaveBankComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 114688, null, 0, _leave_bank_leave_bank_component__WEBPACK_IMPORTED_MODULE_14__["LeaveBankComponent"], [_services_urlConstant__WEBPACK_IMPORTED_MODULE_6__["UrlConstant"], _services_genericservices__WEBPACK_IMPORTED_MODULE_7__["Genericservice"], _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_10__["EncryptDecryptLocalStorageService"], _services_dataSharing_service__WEBPACK_IMPORTED_MODULE_11__["DataSharingService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "div", [["class", "col-12 col-md-6 col-lg-4 h-3 hide__elements"], ["id", "attendance"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "div", [["class", "inner__section--styles"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "app-dashboard-attendance", [], null, null, null, _dashboard_attendance_dashboard_attendance_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_DashboardAttendanceComponent_0"], _dashboard_attendance_dashboard_attendance_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_DashboardAttendanceComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 114688, null, 0, _dashboard_attendance_dashboard_attendance_component__WEBPACK_IMPORTED_MODULE_16__["DashboardAttendanceComponent"], [_services_genericservices__WEBPACK_IMPORTED_MODULE_7__["Genericservice"], _services_urlConstant__WEBPACK_IMPORTED_MODULE_6__["UrlConstant"], _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_10__["EncryptDecryptLocalStorageService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 3, "div", [["class", "col-12 col-md-6 col-lg-4 h-7"], ["id", "whosisonleave"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "div", [["class", "inner__section--styles"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "app-whos-on-leave", [], null, null, null, _whos_on_leave_whos_on_leave_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_WhosOnLeaveComponent_0"], _whos_on_leave_whos_on_leave_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_WhosOnLeaveComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 114688, null, 0, _whos_on_leave_whos_on_leave_component__WEBPACK_IMPORTED_MODULE_18__["WhosOnLeaveComponent"], [_services_urlConstant__WEBPACK_IMPORTED_MODULE_6__["UrlConstant"], _services_genericservices__WEBPACK_IMPORTED_MODULE_7__["Genericservice"], _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_10__["EncryptDecryptLocalStorageService"], ng2_daterangepicker_lib_daterangepicker_config_service__WEBPACK_IMPORTED_MODULE_19__["DaterangepickerConfig"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbCalendar"], _services_css_service__WEBPACK_IMPORTED_MODULE_21__["CssServices"]], { dashBoardPaginationView: [0, "dashBoardPaginationView"], showdashwhoseonleavepagination: [1, "showdashwhoseonleavepagination"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 7, "div", [["class", "col-12 col-md-12 col-lg-8 h-4"], ["id", "leavestatus"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 6, "div", [["class", "inner__section--styles"], ["id", "leave__status"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "div", [["class", "viewMore__details expand"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.expandleavestatus() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "span", [["class", "icon_expand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "div", [["class", "viewMore__details compress d-none"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.expandleavestatus() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "span", [["class", "icon_collapse"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "app-leave-status", [], null, null, null, _leave_status_leave_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_LeaveStatusComponent_0"], _leave_status_leave_status_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_LeaveStatusComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 114688, null, 0, _leave_status_leave_status_component__WEBPACK_IMPORTED_MODULE_23__["LeaveStatusComponent"], [_services_urlConstant__WEBPACK_IMPORTED_MODULE_6__["UrlConstant"], _services_genericservices__WEBPACK_IMPORTED_MODULE_7__["Genericservice"], _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_10__["EncryptDecryptLocalStorageService"], _services_dataSharing_service__WEBPACK_IMPORTED_MODULE_11__["DataSharingService"]], { dashBoardPaginationView: [0, "dashBoardPaginationView"], showdashleavestatuspagination: [1, "showdashleavestatuspagination"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = false; var currVal_2 = "#6747D4"; _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_4 = false; _ck(_v, 11, 0, currVal_4); _ck(_v, 15, 0); _ck(_v, 19, 0); var currVal_5 = false; var currVal_6 = _co.showdashwhoseonleavepagination; _ck(_v, 23, 0, currVal_5, currVal_6); var currVal_7 = false; var currVal_8 = _co.showdashleavestatuspagination; _ck(_v, 31, 0, currVal_7, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).fixed; _ck(_v, 0, 0, currVal_0); var currVal_3 = _co.name; _ck(_v, 5, 0, currVal_3); }); }
function View_DashboardComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-dashboard", [], null, null, null, View_DashboardComponent_0, RenderType_DashboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"], [_services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_10__["EncryptDecryptLocalStorageService"], _services_genericservices__WEBPACK_IMPORTED_MODULE_7__["Genericservice"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_3__["LoadingBarService"], _services_css_service__WEBPACK_IMPORTED_MODULE_21__["CssServices"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DashboardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-dashboard", _dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"], View_DashboardComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/user-module/dashboard/dashboard.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/user-module/dashboard/dashboard.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@charset \"UTF-8\";\n[class^=icon_][_ngcontent-%COMP%], [class*=\" icon_\"][_ngcontent-%COMP%] {\n  font-family: \"chutti\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[class^=icon1-][_ngcontent-%COMP%], [class*=\" icon1-\"][_ngcontent-%COMP%] {\n  \n  font-family: \"icomoon\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon_dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE100\";\n}\n.icon_leave[_ngcontent-%COMP%]:before {\n  content: \"\uE101\";\n}\n.icon_attendance[_ngcontent-%COMP%]:before {\n  content: \"\uE102\";\n}\n.icon_timesheet[_ngcontent-%COMP%]:before {\n  content: \"\uE103\";\n}\n.icon_attendance1[_ngcontent-%COMP%]:before {\n  content: \"\uE104\";\n}\n.icon_support[_ngcontent-%COMP%]:before {\n  content: \"\uE105\";\n}\n.icon_quick_apply[_ngcontent-%COMP%]:before {\n  content: \"\uE106\";\n}\n.icon_leave_bank[_ngcontent-%COMP%]:before {\n  content: \"\uE107\";\n}\n.icon_collapse[_ngcontent-%COMP%]:before {\n  content: \"\uE108\";\n}\n.icon_expand[_ngcontent-%COMP%]:before {\n  content: \"\uE109\";\n}\n.icon_filter[_ngcontent-%COMP%]:before {\n  content: \"\uE10A\";\n}\n.icon_date_picker[_ngcontent-%COMP%]:before {\n  content: \"\uE10B\";\n}\n.icon_arrow_thick_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10C\";\n}\n.icon_arrow_thick_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10D\";\n}\n.icon_arrow_thin_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10E\";\n}\n.icon_arrow_thin_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10F\";\n}\n.icon_hold[_ngcontent-%COMP%]:before {\n  content: \"\uE110\";\n}\n.icon_cancel[_ngcontent-%COMP%]:before {\n  content: \"\uE111\";\n}\n.icon_tick[_ngcontent-%COMP%]:before {\n  content: \"\uE112\";\n}\n.icon_lock[_ngcontent-%COMP%]:before {\n  content: \"\uE113\";\n}\n.icon_edit_outline[_ngcontent-%COMP%]:before {\n  content: \"\uE114\";\n}\n.icon_edit_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE115\";\n}\n.icon_delete_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE116\";\n}\n.icon_search[_ngcontent-%COMP%]:before {\n  content: \"\uE117\";\n}\n.icon_notifications[_ngcontent-%COMP%]:before {\n  content: \"\uE118\";\n}\n.icon_time[_ngcontent-%COMP%]:before {\n  content: \"\uE119\";\n}\n.icon_date_time[_ngcontent-%COMP%]:before {\n  content: \"\uE11A\";\n}\n.icon_probation[_ngcontent-%COMP%]:before {\n  content: \"\uE11B\";\n}\n.icon_confirmed[_ngcontent-%COMP%]:before {\n  content: \"\uE11C\";\n}\n.icon_holidays[_ngcontent-%COMP%]:before {\n  content: \"\uE11D\";\n}\n.icon_priority_urgent[_ngcontent-%COMP%]:before {\n  content: \"\uE11E\";\n}\n.icon_arrow_up[_ngcontent-%COMP%]:before {\n  content: \"\uE11F\";\n}\n.icon_arrow_down[_ngcontent-%COMP%]:before {\n  content: \"\uE120\";\n}\n.icon_show_password[_ngcontent-%COMP%]:before {\n  content: \"\uE121\";\n}\n.icon_hide_password[_ngcontent-%COMP%]:before {\n  content: \"\uE122\";\n}\n.icon_name[_ngcontent-%COMP%]:before {\n  content: \"\uE123\";\n}\n.icon_organisation[_ngcontent-%COMP%]:before {\n  content: \"\uE124\";\n}\n.icon_phone[_ngcontent-%COMP%]:before {\n  content: \"\uE125\";\n}\n.icon_email[_ngcontent-%COMP%]:before {\n  content: \"\uE126\";\n}\n.icon_password[_ngcontent-%COMP%]:before {\n  content: \"\uE127\";\n}\n.icon_add[_ngcontent-%COMP%]:before {\n  content: \"\uE128\";\n}\n.icon_sign_out[_ngcontent-%COMP%]:before {\n  content: \"\uE129\";\n}\n.icon_profile[_ngcontent-%COMP%]:before {\n  content: \"\uE12A\";\n}\n.icon_warning[_ngcontent-%COMP%]:before {\n  content: \"\uE12B\";\n}\n.icon_camera[_ngcontent-%COMP%]:before {\n  content: \"\uE12C\";\n}\n.icon1-upload-to-cloud[_ngcontent-%COMP%]:before {\n  content: \"\uE900\";\n}\n.icon1-cloud-computing[_ngcontent-%COMP%]:before {\n  content: \"\uE901\";\n}\n.icon1-dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE902\";\n}\n.icon1-filter-results[_ngcontent-%COMP%]:before {\n  content: \"\uE903\";\n}\n.icon1-building[_ngcontent-%COMP%]:before {\n  content: \"\uE904\";\n}\n.icon1-noun_Calendar[_ngcontent-%COMP%]:before {\n  content: \"\uE905\";\n}\n.icon1-noun_Project[_ngcontent-%COMP%]:before {\n  content: \"\uE906\";\n}\n.icon1-noun_Upload[_ngcontent-%COMP%]:before {\n  content: \"\uE907\";\n}\n.icon1-noun_users[_ngcontent-%COMP%]:before {\n  content: \"\uE908\";\n}\n.icon1-noun_Work[_ngcontent-%COMP%]:before {\n  content: \"\uE909\";\n}\n.icon1-Path[_ngcontent-%COMP%]:before {\n  content: \"\uE90A\";\n}\n.main[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n#whosisonleave[_ngcontent-%COMP%], #leavestatus[_ngcontent-%COMP%] {\n  position: relative;\n}\n#whosisonleave[_ngcontent-%COMP%]   .viewMore__details[_ngcontent-%COMP%], #leavestatus[_ngcontent-%COMP%]   .viewMore__details[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9;\n  right: -13px;\n  top: -10px;\n  cursor: pointer;\n}\n#leavestatus[_ngcontent-%COMP%]   .viewMore__details[_ngcontent-%COMP%] {\n  top: 30px;\n}\n#whosisonleave[_ngcontent-%COMP%]   .viewMore__details-close[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9;\n  right: -13px;\n  top: -10px;\n  cursor: pointer;\n}\n.icon_collapse[_ngcontent-%COMP%]:before {\n  font-size: 20px;\n  background-image: linear-gradient(120deg, #9A45D2 20%, #6747D4 80%);\n  background: -webkit-linear-gradient(120deg, #9A45D2 20%, #6747D4 80%);\n  -webkit-background-clip: text;\n}\n.leave__status[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.hide-elements[_ngcontent-%COMP%] {\n  display: none;\n}\n.dashboard-row[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tb2R1bGUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3JlbnVnYS9EZXNrdG9wL1ZTQy13b3Jrc3BhY2UvQW5ndWxhciBXb3Jrc3BhY2UvY2xvdWRub3ctY2h1dHRpLXdlYi9zcmMvYXBwL3VzZXItbW9kdWxlL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9yZW51Z2EvRGVza3RvcC9WU0Mtd29ya3NwYWNlL0FuZ3VsYXIgV29ya3NwYWNlL2Nsb3Vkbm93LWNodXR0aS13ZWIvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDcUJoQjs7RUFFRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FEbkJGO0FDcUJBO0VBQ0UsK0VBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFFQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURuQkY7QUNvRUU7RUFBdUIsWUFBQTtBRGhFekI7QUNnRXlDO0VBQW1CLFlBQUE7QUQ1RDVEO0FDNEQ0RTtFQUF3QixZQUFBO0FEeERwRztBQ3dEb0g7RUFBdUIsWUFBQTtBRHBEM0k7QUNvRDJKO0VBQXlCLFlBQUE7QURoRHBMO0FDZ0RvTTtFQUFxQixZQUFBO0FENUN6TjtBQzRDeU87RUFBeUIsWUFBQTtBRHhDbFE7QUN3Q2tSO0VBQXdCLFlBQUE7QURwQzFTO0FDb0MwVDtFQUFzQixZQUFBO0FEaENoVjtBQ2dDZ1c7RUFBb0IsWUFBQTtBRDVCcFg7QUM0Qm9ZO0VBQW9CLFlBQUE7QUR4QnhaO0FDd0J3YTtFQUF5QixZQUFBO0FEcEJqYztBQ29CaWQ7RUFBOEIsWUFBQTtBRGhCL2U7QUNnQitmO0VBQStCLFlBQUE7QURaOWhCO0FDWThpQjtFQUE2QixZQUFBO0FEUjNrQjtBQ1EybEI7RUFBOEIsWUFBQTtBREp6bkI7QUNJeW9CO0VBQWtCLFlBQUE7QURBM3BCO0FDQTJxQjtFQUFvQixZQUFBO0FESS9yQjtBQ0orc0I7RUFBa0IsWUFBQTtBRFFqdUI7QUNSaXZCO0VBQWtCLFlBQUE7QURZbndCO0FDWm14QjtFQUEwQixZQUFBO0FEZ0I3eUI7QUNoQjZ6QjtFQUF5QixZQUFBO0FEb0J0MUI7QUNwQnMyQjtFQUEyQixZQUFBO0FEd0JqNEI7QUN4Qmk1QjtFQUFvQixZQUFBO0FENEJyNkI7QUM1QnE3QjtFQUEyQixZQUFBO0FEZ0NoOUI7QUNoQ2crQjtFQUFrQixZQUFBO0FEb0NsL0I7QUNwQ2tnQztFQUF1QixZQUFBO0FEd0N6aEM7QUN4Q3lpQztFQUF1QixZQUFBO0FENENoa0M7QUM1Q2dsQztFQUF1QixZQUFBO0FEZ0R2bUM7QUNoRHVuQztFQUFzQixZQUFBO0FEb0Q3b0M7QUNwRDZwQztFQUE2QixZQUFBO0FEd0QxckM7QUN4RDBzQztFQUFzQixZQUFBO0FENERodUM7QUM1RGd2QztFQUF3QixZQUFBO0FEZ0V4d0M7QUNoRXd4QztFQUEyQixZQUFBO0FEb0VuekM7QUNwRW0wQztFQUEyQixZQUFBO0FEd0U5MUM7QUN4RTgyQztFQUFrQixZQUFBO0FENEVoNEM7QUM1RWc1QztFQUEwQixZQUFBO0FEZ0YxNkM7QUNoRjA3QztFQUFtQixZQUFBO0FEb0Y3OEM7QUNwRjY5QztFQUFtQixZQUFBO0FEd0ZoL0M7QUN4RmdnRDtFQUFzQixZQUFBO0FENEZ0aEQ7QUM1RnNpRDtFQUFpQixZQUFBO0FEZ0d2akQ7QUNoR3VrRDtFQUFzQixZQUFBO0FEb0c3bEQ7QUNwRzZtRDtFQUFxQixZQUFBO0FEd0dsb0Q7QUN4R2twRDtFQUFxQixZQUFBO0FENEd2cUQ7QUM1R3VyRDtFQUFvQixZQUFBO0FEZ0gzc0Q7QUM5R0U7RUFDRSxZQUFBO0FEaUhKO0FDL0dFO0VBQ0UsWUFBQTtBRGtISjtBQ2hIRTtFQUNFLFlBQUE7QURtSEo7QUNqSEU7RUFDRSxZQUFBO0FEb0hKO0FDbEhFO0VBQ0UsWUFBQTtBRHFISjtBQ25IRTtFQUNFLFlBQUE7QURzSEo7QUNwSEU7RUFDRSxZQUFBO0FEdUhKO0FDckhFO0VBQ0UsWUFBQTtBRHdISjtBQ3RIRTtFQUNFLFlBQUE7QUR5SEo7QUN2SEU7RUFDRSxZQUFBO0FEMEhKO0FDeEhFO0VBQ0UsWUFBQTtBRDJISjtBRXZQQTtFQUNJLGdCQUFBO0FGMFBKO0FFeFBBO0VBRUksa0JBQUE7QUYwUEo7QUV4UEk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUYwUFI7QUVyUEk7RUFDSSxTQUFBO0FGd1BSO0FFblBJO0VBRUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FGcVBSO0FFaFBBO0VBRUksZUFBQTtFQUNBLG1FQUFBO0VBQ0EscUVBQUE7RUFDQSw2QkFBQTtBRmtQSjtBRWhQQTtFQUVJLGFBQUE7QUZrUEo7QUUvT0E7RUFFSSxhQUFBO0FGaVBKO0FFL09BO0VBRUksa0JBQUE7QUZpUEoiLCJmaWxlIjoic3JjL2FwcC91c2VyLW1vZHVsZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuW2NsYXNzXj1pY29uX10sXG5bY2xhc3MqPVwiIGljb25fXCJdIHtcbiAgZm9udC1mYW1pbHk6IFwiY2h1dHRpXCIgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbltjbGFzc149aWNvbjEtXSwgW2NsYXNzKj1cIiBpY29uMS1cIl0ge1xuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICBmb250LWZhbWlseTogXCJpY29tb29uXCIgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uaWNvbl9kYXNoYm9hcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIBcIjtcbn1cblxuLmljb25fbGVhdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIFcIjtcbn1cblxuLmljb25fYXR0ZW5kYW5jZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EglwiO1xufVxuXG4uaWNvbl90aW1lc2hlZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhINcIjtcbn1cblxuLmljb25fYXR0ZW5kYW5jZTE6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIRcIjtcbn1cblxuLmljb25fc3VwcG9ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EhVwiO1xufVxuXG4uaWNvbl9xdWlja19hcHBseTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EhlwiO1xufVxuXG4uaWNvbl9sZWF2ZV9iYW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSHXCI7XG59XG5cbi5pY29uX2NvbGxhcHNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSIXCI7XG59XG5cbi5pY29uX2V4cGFuZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EiVwiO1xufVxuXG4uaWNvbl9maWx0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIpcIjtcbn1cblxuLmljb25fZGF0ZV9waWNrZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhItcIjtcbn1cblxuLmljb25fYXJyb3dfdGhpY2tfbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EjFwiO1xufVxuXG4uaWNvbl9hcnJvd190aGlja19yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EjVwiO1xufVxuXG4uaWNvbl9hcnJvd190aGluX2xlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhI5cIjtcbn1cblxuLmljb25fYXJyb3dfdGhpbl9yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ej1wiO1xufVxuXG4uaWNvbl9ob2xkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSQXCI7XG59XG5cbi5pY29uX2NhbmNlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EkVwiO1xufVxuXG4uaWNvbl90aWNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSSXCI7XG59XG5cbi5pY29uX2xvY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJNcIjtcbn1cblxuLmljb25fZWRpdF9vdXRsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSUXCI7XG59XG5cbi5pY29uX2VkaXRfZmlsbGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSVXCI7XG59XG5cbi5pY29uX2RlbGV0ZV9maWxsZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJZcIjtcbn1cblxuLmljb25fc2VhcmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSXXCI7XG59XG5cbi5pY29uX25vdGlmaWNhdGlvbnM6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJhcIjtcbn1cblxuLmljb25fdGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EmVwiO1xufVxuXG4uaWNvbl9kYXRlX3RpbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJpcIjtcbn1cblxuLmljb25fcHJvYmF0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSbXCI7XG59XG5cbi5pY29uX2NvbmZpcm1lZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EnFwiO1xufVxuXG4uaWNvbl9ob2xpZGF5czpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EnVwiO1xufVxuXG4uaWNvbl9wcmlvcml0eV91cmdlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJ5cIjtcbn1cblxuLmljb25fYXJyb3dfdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJ9cIjtcbn1cblxuLmljb25fYXJyb3dfZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EoFwiO1xufVxuXG4uaWNvbl9zaG93X3Bhc3N3b3JkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oShXCI7XG59XG5cbi5pY29uX2hpZGVfcGFzc3dvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKJcIjtcbn1cblxuLmljb25fbmFtZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eo1wiO1xufVxuXG4uaWNvbl9vcmdhbmlzYXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKRcIjtcbn1cblxuLmljb25fcGhvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKVcIjtcbn1cblxuLmljb25fZW1haWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKZcIjtcbn1cblxuLmljb25fcGFzc3dvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKdcIjtcbn1cblxuLmljb25fYWRkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSoXCI7XG59XG5cbi5pY29uX3NpZ25fb3V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSpXCI7XG59XG5cbi5pY29uX3Byb2ZpbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKpcIjtcbn1cblxuLmljb25fd2FybmluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eq1wiO1xufVxuXG4uaWNvbl9jYW1lcmE6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKxcIjtcbn1cblxuLmljb24xLXVwbG9hZC10by1jbG91ZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kgFwiO1xufVxuXG4uaWNvbjEtY2xvdWQtY29tcHV0aW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSBXCI7XG59XG5cbi5pY29uMS1kYXNoYm9hcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIJcIjtcbn1cblxuLmljb24xLWZpbHRlci1yZXN1bHRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSDXCI7XG59XG5cbi5pY29uMS1idWlsZGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6khFwiO1xufVxuXG4uaWNvbjEtbm91bl9DYWxlbmRhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6khVwiO1xufVxuXG4uaWNvbjEtbm91bl9Qcm9qZWN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSGXCI7XG59XG5cbi5pY29uMS1ub3VuX1VwbG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kh1wiO1xufVxuXG4uaWNvbjEtbm91bl91c2VyczpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kiFwiO1xufVxuXG4uaWNvbjEtbm91bl9Xb3JrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSJXCI7XG59XG5cbi5pY29uMS1QYXRoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSKXCI7XG59XG5cbi5tYWluIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3dob3Npc29ubGVhdmUsICNsZWF2ZXN0YXR1cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiN3aG9zaXNvbmxlYXZlIC52aWV3TW9yZV9fZGV0YWlscywgI2xlYXZlc3RhdHVzIC52aWV3TW9yZV9fZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbiAgcmlnaHQ6IC0xM3B4O1xuICB0b3A6IC0xMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNsZWF2ZXN0YXR1cyAudmlld01vcmVfX2RldGFpbHMge1xuICB0b3A6IDMwcHg7XG59XG5cbiN3aG9zaXNvbmxlYXZlIC52aWV3TW9yZV9fZGV0YWlscy1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbiAgcmlnaHQ6IC0xM3B4O1xuICB0b3A6IC0xMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uX2NvbGxhcHNlOmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzlBNDVEMiAyMCUsICM2NzQ3RDQgODAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjOUE0NUQyIDIwJSwgIzY3NDdENCA4MCUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbn1cblxuLmxlYXZlX19zdGF0dXMge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uaGlkZS1lbGVtZW50cyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kYXNoYm9hcmQtcm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSIsIiR3aGl0ZTojZmZmZmZmO1xuJGJvcmRlci1jb2xvcjojREVERURFO1xuJGJvcmRlci1saWdodDojRThFOEU4O1xuJGxpZ2h0LWJsdWU6I0YxRjdGQjtcbiRkYXJrUGluazojOUE0NUQyO1xuJGRhcmtCbHVlOiM2NzQ3RDQ7XG4kdGV4dC1jb2xvcjojNDA0MDQwO1xuJHByaW1hcnlDb2xvcjojNzE1MURDO1xuJGdyYXk6IzZFNkU2RTtcbiRibGFjazojMDAwMDAwO1xuJGRhcmtSZWQ6I0UzMkMyQztcbiRvcmFuZ2U6I0ZGNkMwMDtcbiRicm93bjojQUEzNDdCO1xuJGFycm93R3JheTojODQ4NDg0O1xuJGJsdWU6ICMxYzkxZmY7XG4kcm9zZTojRjk0Rjg5O1xuJG5lcHR1bmU6IzdDQTFCMTtcbiR5ZWxsb3c6I0UyODYwRDtcbiRjb2xvci1iYWNrOiAjZWZlZmVmO1xuJGNvbG9yLWJhcjogIzY3NDdENDtcblxuW2NsYXNzXj1cImljb25fXCJdLFxuW2NsYXNzKj1cIiBpY29uX1wiXSB7XG4gIGZvbnQtZmFtaWx5OiAnY2h1dHRpJyAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbltjbGFzc149XCJpY29uMS1cIl0sIFtjbGFzcyo9XCIgaWNvbjEtXCJdIHtcbiAgLyogdXNlICFpbXBvcnRhbnQgdG8gcHJldmVudCBpc3N1ZXMgd2l0aCBicm93c2VyIGV4dGVuc2lvbnMgdGhhdCBjaGFuZ2UgZm9udHMgKi9cbiAgZm9udC1mYW1pbHk6ICdpY29tb29uJyAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuXG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuXG5AbWl4aW4gYmctZ3JhZGllbnQoKXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCRkYXJrUGluayAyMCUsICRkYXJrQmx1ZSA4MCUpO1xufVxuQG1peGluIHRoZW1lLWJ0bigpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsJGRhcmtCbHVlIDAlLCAkZGFya1BpbmsgMTAwJSk7XG59XG5AbWl4aW4gYmctYmxhY2soKXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsJGJsYWNrIDAlLCAjMTIxMjEzIDEwMCUpO1xufVxuQG1peGluIGZvbnQtY29sb3IoKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya1BpbmsgMjAlLCAkZGFya0JsdWUgODAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMjBkZWcsJGRhcmtQaW5rIDIwJSwgJGRhcmtCbHVlIDgwJSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyAgICBcbiAgfVxuICBAbWl4aW4gIGJvcmRlci1ib3R0b20oKSB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6ICRkYXJrQmx1ZTtcbiAgICB9XG4gIH1cblxuQG1peGluIHVzZXJJbWcgKCl7XG5cbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiVidG4tc2hhcmVkIHtcbiAgICBtaW4taGVpZ2h0OiA1NXB4O1xuICB9XG5cbiAgLmljb25fZGFzaGJvYXJkOmJlZm9yZXtjb250ZW50OlwiXFxlMTAwXCJ9Lmljb25fbGVhdmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDFcIn0uaWNvbl9hdHRlbmRhbmNlOmJlZm9yZXtjb250ZW50OlwiXFxlMTAyXCJ9Lmljb25fdGltZXNoZWV0OmJlZm9yZXtjb250ZW50OlwiXFxlMTAzXCJ9Lmljb25fYXR0ZW5kYW5jZTE6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDRcIn0uaWNvbl9zdXBwb3J0OmJlZm9yZXtjb250ZW50OlwiXFxlMTA1XCJ9Lmljb25fcXVpY2tfYXBwbHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDZcIn0uaWNvbl9sZWF2ZV9iYW5rOmJlZm9yZXtjb250ZW50OlwiXFxlMTA3XCJ9Lmljb25fY29sbGFwc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDhcIn0uaWNvbl9leHBhbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDlcIn0uaWNvbl9maWx0ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMGFcIn0uaWNvbl9kYXRlX3BpY2tlcjpiZWZvcmV7Y29udGVudDpcIlxcZTEwYlwifS5pY29uX2Fycm93X3RoaWNrX2xlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMGNcIn0uaWNvbl9hcnJvd190aGlja19yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZTEwZFwifS5pY29uX2Fycm93X3RoaW5fbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZTEwZVwifS5pY29uX2Fycm93X3RoaW5fcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMGZcIn0uaWNvbl9ob2xkOmJlZm9yZXtjb250ZW50OlwiXFxlMTEwXCJ9Lmljb25fY2FuY2VsOmJlZm9yZXtjb250ZW50OlwiXFxlMTExXCJ9Lmljb25fdGljazpiZWZvcmV7Y29udGVudDpcIlxcZTExMlwifS5pY29uX2xvY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTNcIn0uaWNvbl9lZGl0X291dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTRcIn0uaWNvbl9lZGl0X2ZpbGxlZDpiZWZvcmV7Y29udGVudDpcIlxcZTExNVwifS5pY29uX2RlbGV0ZV9maWxsZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTZcIn0uaWNvbl9zZWFyY2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTdcIn0uaWNvbl9ub3RpZmljYXRpb25zOmJlZm9yZXtjb250ZW50OlwiXFxlMTE4XCJ9Lmljb25fdGltZTpiZWZvcmV7Y29udGVudDpcIlxcZTExOVwifS5pY29uX2RhdGVfdGltZTpiZWZvcmV7Y29udGVudDpcIlxcZTExYVwifS5pY29uX3Byb2JhdGlvbjpiZWZvcmV7Y29udGVudDpcIlxcZTExYlwifS5pY29uX2NvbmZpcm1lZDpiZWZvcmV7Y29udGVudDpcIlxcZTExY1wifS5pY29uX2hvbGlkYXlzOmJlZm9yZXtjb250ZW50OlwiXFxlMTFkXCJ9Lmljb25fcHJpb3JpdHlfdXJnZW50OmJlZm9yZXtjb250ZW50OlwiXFxlMTFlXCJ9Lmljb25fYXJyb3dfdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWZcIn0uaWNvbl9hcnJvd19kb3duOmJlZm9yZXtjb250ZW50OlwiXFxlMTIwXCJ9Lmljb25fc2hvd19wYXNzd29yZDpiZWZvcmV7Y29udGVudDpcIlxcZTEyMVwifS5pY29uX2hpZGVfcGFzc3dvcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjJcIn0uaWNvbl9uYW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTIzXCJ9Lmljb25fb3JnYW5pc2F0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxlMTI0XCJ9Lmljb25fcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjVcIn0uaWNvbl9lbWFpbDpiZWZvcmV7Y29udGVudDpcIlxcZTEyNlwifS5pY29uX3Bhc3N3b3JkOmJlZm9yZXtjb250ZW50OlwiXFxlMTI3XCJ9Lmljb25fYWRkOmJlZm9yZXtjb250ZW50OlwiXFxlMTI4XCJ9Lmljb25fc2lnbl9vdXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjlcIn0uaWNvbl9wcm9maWxlOmJlZm9yZXtjb250ZW50OlwiXFxlMTJhXCJ9Lmljb25fd2FybmluZzpiZWZvcmV7Y29udGVudDpcIlxcZTEyYlwifS5pY29uX2NhbWVyYTpiZWZvcmV7Y29udGVudDpcIlxcZTEyY1wifVxuXG4gIC5pY29uMS11cGxvYWQtdG8tY2xvdWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwMFwiO1xuICB9XG4gIC5pY29uMS1jbG91ZC1jb21wdXRpbmc6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwMVwiO1xuICB9XG4gIC5pY29uMS1kYXNoYm9hcmQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwMlwiO1xuICB9XG4gIC5pY29uMS1maWx0ZXItcmVzdWx0czpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAzXCI7XG4gIH1cbiAgLmljb24xLWJ1aWxkaW5nOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDRcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9DYWxlbmRhcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA1XCI7XG4gIH1cbiAgLmljb24xLW5vdW5fUHJvamVjdDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA2XCI7XG4gIH1cbiAgLmljb24xLW5vdW5fVXBsb2FkOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDdcIjtcbiAgfVxuICAuaWNvbjEtbm91bl91c2VyczpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA4XCI7XG4gIH1cbiAgLmljb24xLW5vdW5fV29yazpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA5XCI7XG4gIH1cbiAgLmljb24xLVBhdGg6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwYVwiO1xuICB9IiwiXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy9taXhpbi5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcbi5tYWluIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI3dob3Npc29ubGVhdmUsICNsZWF2ZXN0YXR1c1xue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC52aWV3TW9yZV9fZGV0YWlsc3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICByaWdodDogLTEzcHg7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG4jbGVhdmVzdGF0dXMgXG57XG4gICAgLnZpZXdNb3JlX19kZXRhaWxze1xuICAgICAgICB0b3A6IDMwcHg7XG4gICAgfVxufVxuI3dob3Npc29ubGVhdmUgXG57XG4gICAgLnZpZXdNb3JlX19kZXRhaWxzLWNsb3NlXG4gICAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgIHJpZ2h0OiAtMTNweDtcbiAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuICAgIH1cbn1cblxuLmljb25fY29sbGFwc2U6YmVmb3JlIFxue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjOUE0NUQyIDIwJSwgIzY3NDdENCA4MCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzlBNDVEMiAyMCUsICM2NzQ3RDQgODAlKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbn1cbi5sZWF2ZV9fc3RhdHVzICBcbntcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uaGlkZS1lbGVtZW50cyBcbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmRhc2hib2FyZC1yb3cgXG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4iXX0= */"];



/***/ }),

/***/ "./src/app/user-module/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-module/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/urlConstant */ "./src/app/services/urlConstant.ts");



class DashboardComponent {
    constructor(encryptdecryptlocalstorage, gernericservice, loadingBar, cssservice) {
        this.encryptdecryptlocalstorage = encryptdecryptlocalstorage;
        this.gernericservice = gernericservice;
        this.loadingBar = loadingBar;
        this.cssservice = cssservice;
        this.notifivationUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].notificationAPI;
        this.dashBoardPaginationView = false;
        this.showdashwhoseonleavepagination = true;
        this.showdashleavestatuspagination = true;
        // this.cssservice.isExpandFlagObs.subscribe(data=>{
        //   console.log('css notification')
        //   if(data=='true'){
        //     console.log('css notification trigger.....')
        //     if($('.nav-item.active.test').length == 0) {} else {
        //     this.expandleavestatus();
        //     }
        //   }
        // })
    }
    ngOnInit() {
        this.loadingBar.start();
        this.notification();
        this.loadingBar.complete();
    }
    //expand and express leave status
    expandleavestatus() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#leavestatus').toggleClass('col-12 col-md-12 col-lg-12 active ');
        jquery__WEBPACK_IMPORTED_MODULE_1__(".hide__elements, #whosisonleave").toggleClass('d-none');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#leavestatus .expand').toggleClass('d-none');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#leavestatus .compress').toggleClass('d-none');
        jquery__WEBPACK_IMPORTED_MODULE_1__('.nav-item.active').toggleClass('test');
        this.showdashleavestatuspagination = !this.showdashleavestatuspagination;
    }
    //expand and express leave status
    expandwhoseonleave() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#whosisonleave').toggleClass('col-xl-12 h-100 w-100');
        jquery__WEBPACK_IMPORTED_MODULE_1__(".row-2").toggleClass('col-xl-12');
        jquery__WEBPACK_IMPORTED_MODULE_1__('.hide__elements, #leavestatus').toggleClass('d-none');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#whosisonleave .expand').toggleClass('d-none');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#whosisonleave .compress').toggleClass('d-none');
        this.showdashwhoseonleavepagination = !this.showdashwhoseonleavepagination;
    }
    notification() {
        this.loadingBar.start();
        this.employeeId = this.encryptdecryptlocalstorage.getLocalStorage('employeeId');
        this.isNotification = false;
        return this.gernericservice.get(this.notifivationUrl + "?employeeId=" + this.employeeId + "&isNotification=" + this.isNotification).subscribe(response => {
            this.name = response.data.firstName;
            this.loadingBar.complete();
        });
    }
}


/***/ }),

/***/ "./src/app/user-module/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-module/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
class DashboardModule {
}


/***/ }),

/***/ "./src/app/user-module/dashboard/dashboard.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/user-module/dashboard/dashboard.routing.ts ***!
  \************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/user-module/dashboard/dashboard.component.ts");
/* harmony import */ var _leavestatus_leavestatus_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leavestatus/leavestatus.component */ "./src/app/user-module/dashboard/leavestatus/leavestatus.component.ts");


var routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    // { path: '', redirectTo: 'dashboard' }
    { path: 'leaveStatus', component: _leavestatus_leavestatus_component__WEBPACK_IMPORTED_MODULE_1__["LeavestatusComponent"] }
];
class DashboardRoutingModule {
}


/***/ }),

/***/ "./src/app/user-module/dashboard/leave-bank/leave-bank.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/user-module/dashboard/leave-bank/leave-bank.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_LeaveBankComponent, View_LeaveBankComponent_0, View_LeaveBankComponent_Host_0, LeaveBankComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LeaveBankComponent", function() { return RenderType_LeaveBankComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LeaveBankComponent_0", function() { return View_LeaveBankComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LeaveBankComponent_Host_0", function() { return View_LeaveBankComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveBankComponentNgFactory", function() { return LeaveBankComponentNgFactory; });
/* harmony import */ var _leave_bank_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-bank.component.scss.shim.ngstyle */ "./src/app/user-module/dashboard/leave-bank/leave-bank.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _node_modules_ng_circle_progress_ng_circle_progress_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/ng-circle-progress/ng-circle-progress.ngfactory */ "./node_modules/ng-circle-progress/ng-circle-progress.ngfactory.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _leave_bank_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leave-bank.component */ "./src/app/user-module/dashboard/leave-bank/leave-bank.component.ts");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/urlConstant */ "./src/app/services/urlConstant.ts");
/* harmony import */ var _services_genericservices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/genericservices */ "./src/app/services/genericservices.ts");
/* harmony import */ var _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/encrypt-decrypt-localstorage.service */ "./src/app/services/encrypt-decrypt-localstorage.service.ts");
/* harmony import */ var _services_dataSharing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/dataSharing.service */ "./src/app/services/dataSharing.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_LeaveBankComponent = ["tspan[_ngcontent-%COMP%] \n{\n    font-size: 30px !important;\n}", _leave_bank_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LeaveBankComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LeaveBankComponent, data: {} });

function View_LeaveBankComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " days"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.totallop; _ck(_v, 2, 0, currVal_0); }); }
function View_LeaveBankComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " day"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.totallop; _ck(_v, 2, 0, currVal_0); }); }
function View_LeaveBankComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 33, "div", [["class", "leaveBank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Leave Bank"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 30, "form", [["class", "leaveBank__form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 18, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "div", [["class", "col-md-4 text-center px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "circle-progress", [["class", "circle-progress"]], null, null, null, _node_modules_ng_circle_progress_ng_circle_progress_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_CircleProgressComponent_0"], _node_modules_ng_circle_progress_ng_circle_progress_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_CircleProgressComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 770048, null, 0, ng_circle_progress__WEBPACK_IMPORTED_MODULE_4__["CircleProgressComponent"], [ng_circle_progress__WEBPACK_IMPORTED_MODULE_4__["CircleProgressOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], { class: [0, "class"], backgroundPadding: [1, "backgroundPadding"], radius: [2, "radius"], space: [3, "space"], percent: [4, "percent"], toFixed: [5, "toFixed"], outerStrokeWidth: [6, "outerStrokeWidth"], outerStrokeColor: [7, "outerStrokeColor"], innerStrokeColor: [8, "innerStrokeColor"], innerStrokeWidth: [9, "innerStrokeWidth"], titleColor: [10, "titleColor"], titleFontSize: [11, "titleFontSize"], animation: [12, "animation"], animateTitle: [13, "animateTitle"], animationDuration: [14, "animationDuration"], showSubtitle: [15, "showSubtitle"], showUnits: [16, "showUnits"], clockwise: [17, "clockwise"], lazy: [18, "lazy"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "div", [["class", "leave__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["EARNED LEAVE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "div", [["class", "col-md-4 text-center px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "circle-progress", [], null, null, null, _node_modules_ng_circle_progress_ng_circle_progress_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_CircleProgressComponent_0"], _node_modules_ng_circle_progress_ng_circle_progress_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_CircleProgressComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 770048, null, 0, ng_circle_progress__WEBPACK_IMPORTED_MODULE_4__["CircleProgressComponent"], [ng_circle_progress__WEBPACK_IMPORTED_MODULE_4__["CircleProgressOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], { backgroundPadding: [0, "backgroundPadding"], radius: [1, "radius"], space: [2, "space"], percent: [3, "percent"], toFixed: [4, "toFixed"], outerStrokeWidth: [5, "outerStrokeWidth"], outerStrokeColor: [6, "outerStrokeColor"], innerStrokeColor: [7, "innerStrokeColor"], innerStrokeWidth: [8, "innerStrokeWidth"], titleColor: [9, "titleColor"], titleFontSize: [10, "titleFontSize"], animation: [11, "animation"], animateTitle: [12, "animateTitle"], animationDuration: [13, "animationDuration"], showSubtitle: [14, "showSubtitle"], showUnits: [15, "showUnits"], clockwise: [16, "clockwise"], lazy: [17, "lazy"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "div", [["class", "leave__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SICK LEAVE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 5, "div", [["class", "col-md-4 text-center px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "circle-progress", [], null, null, null, _node_modules_ng_circle_progress_ng_circle_progress_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_CircleProgressComponent_0"], _node_modules_ng_circle_progress_ng_circle_progress_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_CircleProgressComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 770048, null, 0, ng_circle_progress__WEBPACK_IMPORTED_MODULE_4__["CircleProgressComponent"], [ng_circle_progress__WEBPACK_IMPORTED_MODULE_4__["CircleProgressOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], { backgroundPadding: [0, "backgroundPadding"], radius: [1, "radius"], space: [2, "space"], percent: [3, "percent"], toFixed: [4, "toFixed"], outerStrokeWidth: [5, "outerStrokeWidth"], outerStrokeColor: [6, "outerStrokeColor"], innerStrokeColor: [7, "innerStrokeColor"], innerStrokeWidth: [8, "innerStrokeWidth"], titleColor: [9, "titleColor"], titleFontSize: [10, "titleFontSize"], animation: [11, "animation"], animateTitle: [12, "animateTitle"], animationDuration: [13, "animationDuration"], showSubtitle: [14, "showSubtitle"], showUnits: [15, "showUnits"], clockwise: [16, "clockwise"], lazy: [17, "lazy"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "div", [["class", "leave__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CASUAL LEAVE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 6, "div", [["class", "lop__bottom"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["LOP for this month: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveBankComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveBankComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = "circle-progress"; var currVal_8 = 0; var currVal_9 = 44; var currVal_10 = (0 - 2); var currVal_11 = _co.elCount; var currVal_12 = 1; var currVal_13 = 5; var currVal_14 = "#6C44E1"; var currVal_15 = "#E9E9E9"; var currVal_16 = 2; var currVal_17 = "#6C44E1"; var currVal_18 = 26; var currVal_19 = true; var currVal_20 = true; var currVal_21 = 900; var currVal_22 = false; var currVal_23 = false; var currVal_24 = true; var currVal_25 = false; _ck(_v, 11, 1, [currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25]); var currVal_26 = 0; var currVal_27 = 44; var currVal_28 = (0 - 2); var currVal_29 = _co.slCount; var currVal_30 = 1; var currVal_31 = 5; var currVal_32 = "#C143F5"; var currVal_33 = "#E9E9E9"; var currVal_34 = 2; var currVal_35 = "#C143F5"; var currVal_36 = 26; var currVal_37 = true; var currVal_38 = true; var currVal_39 = 900; var currVal_40 = false; var currVal_41 = false; var currVal_42 = true; var currVal_43 = false; _ck(_v, 17, 1, [currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43]); var currVal_44 = 0; var currVal_45 = 44; var currVal_46 = (0 - 2); var currVal_47 = _co.clCount; var currVal_48 = 1; var currVal_49 = 5; var currVal_50 = "#1D8FDF"; var currVal_51 = "#E9E9E9"; var currVal_52 = 2; var currVal_53 = "#1D8FDF"; var currVal_54 = 26; var currVal_55 = true; var currVal_56 = true; var currVal_57 = 900; var currVal_58 = false; var currVal_59 = false; var currVal_60 = true; var currVal_61 = false; _ck(_v, 23, 1, [currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61]); var currVal_62 = _co.lop; _ck(_v, 31, 0, currVal_62); var currVal_63 = !_co.lop; _ck(_v, 33, 0, currVal_63); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_LeaveBankComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-leave-bank", [], null, null, null, View_LeaveBankComponent_0, RenderType_LeaveBankComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _leave_bank_component__WEBPACK_IMPORTED_MODULE_6__["LeaveBankComponent"], [_services_urlConstant__WEBPACK_IMPORTED_MODULE_7__["UrlConstant"], _services_genericservices__WEBPACK_IMPORTED_MODULE_8__["Genericservice"], _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["EncryptDecryptLocalStorageService"], _services_dataSharing_service__WEBPACK_IMPORTED_MODULE_10__["DataSharingService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LeaveBankComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-leave-bank", _leave_bank_component__WEBPACK_IMPORTED_MODULE_6__["LeaveBankComponent"], View_LeaveBankComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/user-module/dashboard/leave-bank/leave-bank.component.scss.shim.ngstyle.js":
/*!********************************************************************************************!*\
  !*** ./src/app/user-module/dashboard/leave-bank/leave-bank.component.scss.shim.ngstyle.js ***!
  \********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@charset \"UTF-8\";\n[class^=icon_][_ngcontent-%COMP%], [class*=\" icon_\"][_ngcontent-%COMP%] {\n  font-family: \"chutti\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[class^=icon1-][_ngcontent-%COMP%], [class*=\" icon1-\"][_ngcontent-%COMP%] {\n  \n  font-family: \"icomoon\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon_dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE100\";\n}\n.icon_leave[_ngcontent-%COMP%]:before {\n  content: \"\uE101\";\n}\n.icon_attendance[_ngcontent-%COMP%]:before {\n  content: \"\uE102\";\n}\n.icon_timesheet[_ngcontent-%COMP%]:before {\n  content: \"\uE103\";\n}\n.icon_attendance1[_ngcontent-%COMP%]:before {\n  content: \"\uE104\";\n}\n.icon_support[_ngcontent-%COMP%]:before {\n  content: \"\uE105\";\n}\n.icon_quick_apply[_ngcontent-%COMP%]:before {\n  content: \"\uE106\";\n}\n.icon_leave_bank[_ngcontent-%COMP%]:before {\n  content: \"\uE107\";\n}\n.icon_collapse[_ngcontent-%COMP%]:before {\n  content: \"\uE108\";\n}\n.icon_expand[_ngcontent-%COMP%]:before {\n  content: \"\uE109\";\n}\n.icon_filter[_ngcontent-%COMP%]:before {\n  content: \"\uE10A\";\n}\n.icon_date_picker[_ngcontent-%COMP%]:before {\n  content: \"\uE10B\";\n}\n.icon_arrow_thick_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10C\";\n}\n.icon_arrow_thick_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10D\";\n}\n.icon_arrow_thin_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10E\";\n}\n.icon_arrow_thin_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10F\";\n}\n.icon_hold[_ngcontent-%COMP%]:before {\n  content: \"\uE110\";\n}\n.icon_cancel[_ngcontent-%COMP%]:before {\n  content: \"\uE111\";\n}\n.icon_tick[_ngcontent-%COMP%]:before {\n  content: \"\uE112\";\n}\n.icon_lock[_ngcontent-%COMP%]:before {\n  content: \"\uE113\";\n}\n.icon_edit_outline[_ngcontent-%COMP%]:before {\n  content: \"\uE114\";\n}\n.icon_edit_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE115\";\n}\n.icon_delete_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE116\";\n}\n.icon_search[_ngcontent-%COMP%]:before {\n  content: \"\uE117\";\n}\n.icon_notifications[_ngcontent-%COMP%]:before {\n  content: \"\uE118\";\n}\n.icon_time[_ngcontent-%COMP%]:before {\n  content: \"\uE119\";\n}\n.icon_date_time[_ngcontent-%COMP%]:before {\n  content: \"\uE11A\";\n}\n.icon_probation[_ngcontent-%COMP%]:before {\n  content: \"\uE11B\";\n}\n.icon_confirmed[_ngcontent-%COMP%]:before {\n  content: \"\uE11C\";\n}\n.icon_holidays[_ngcontent-%COMP%]:before {\n  content: \"\uE11D\";\n}\n.icon_priority_urgent[_ngcontent-%COMP%]:before {\n  content: \"\uE11E\";\n}\n.icon_arrow_up[_ngcontent-%COMP%]:before {\n  content: \"\uE11F\";\n}\n.icon_arrow_down[_ngcontent-%COMP%]:before {\n  content: \"\uE120\";\n}\n.icon_show_password[_ngcontent-%COMP%]:before {\n  content: \"\uE121\";\n}\n.icon_hide_password[_ngcontent-%COMP%]:before {\n  content: \"\uE122\";\n}\n.icon_name[_ngcontent-%COMP%]:before {\n  content: \"\uE123\";\n}\n.icon_organisation[_ngcontent-%COMP%]:before {\n  content: \"\uE124\";\n}\n.icon_phone[_ngcontent-%COMP%]:before {\n  content: \"\uE125\";\n}\n.icon_email[_ngcontent-%COMP%]:before {\n  content: \"\uE126\";\n}\n.icon_password[_ngcontent-%COMP%]:before {\n  content: \"\uE127\";\n}\n.icon_add[_ngcontent-%COMP%]:before {\n  content: \"\uE128\";\n}\n.icon_sign_out[_ngcontent-%COMP%]:before {\n  content: \"\uE129\";\n}\n.icon_profile[_ngcontent-%COMP%]:before {\n  content: \"\uE12A\";\n}\n.icon_warning[_ngcontent-%COMP%]:before {\n  content: \"\uE12B\";\n}\n.icon_camera[_ngcontent-%COMP%]:before {\n  content: \"\uE12C\";\n}\n.icon1-upload-to-cloud[_ngcontent-%COMP%]:before {\n  content: \"\uE900\";\n}\n.icon1-cloud-computing[_ngcontent-%COMP%]:before {\n  content: \"\uE901\";\n}\n.icon1-dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE902\";\n}\n.icon1-filter-results[_ngcontent-%COMP%]:before {\n  content: \"\uE903\";\n}\n.icon1-building[_ngcontent-%COMP%]:before {\n  content: \"\uE904\";\n}\n.icon1-noun_Calendar[_ngcontent-%COMP%]:before {\n  content: \"\uE905\";\n}\n.icon1-noun_Project[_ngcontent-%COMP%]:before {\n  content: \"\uE906\";\n}\n.icon1-noun_Upload[_ngcontent-%COMP%]:before {\n  content: \"\uE907\";\n}\n.icon1-noun_users[_ngcontent-%COMP%]:before {\n  content: \"\uE908\";\n}\n.icon1-noun_Work[_ngcontent-%COMP%]:before {\n  content: \"\uE909\";\n}\n.icon1-Path[_ngcontent-%COMP%]:before {\n  content: \"\uE90A\";\n}\n.leaveBank[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]::before {\n  content: \"\uE107\";\n}\n.leaveBank__form[_ngcontent-%COMP%] {\n  margin-top: 1.6rem;\n}\n@media (max-width: 1600px) {\n  .leaveBank__form[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n}\n.leaveBank__form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.leave__title[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 20px;\n  letter-spacing: 1px;\n  margin-top: 10px;\n  font-size: 0.9em;\n}\n@media (max-width: 1440px) {\n  .leave__title[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n}\n.leave__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 18px;\n}\n@media (max-width: 567px) {\n  .leave__title[_ngcontent-%COMP%] {\n    margin-bottom: 10;\n  }\n  .leave__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n  }\n}\n.circle-progress[_ngcontent-%COMP%] {\n  font-size: 30px !important;\n}\n.lop__bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4.5rem;\n}\n@media (max-width: 1600px) {\n  .lop__bottom[_ngcontent-%COMP%] {\n    bottom: 1.5rem;\n  }\n}\n@media (max-width: 991px) {\n  .lop__bottom[_ngcontent-%COMP%] {\n    position: inherit;\n  }\n}\n@media (max-width: 567px) {\n  .lop__bottom[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tb2R1bGUvZGFzaGJvYXJkL2xlYXZlLWJhbmsvbGVhdmUtYmFuay5jb21wb25lbnQuc2NzcyIsIi9ob21lL3JlbnVnYS9EZXNrdG9wL1ZTQy13b3Jrc3BhY2UvQW5ndWxhciBXb3Jrc3BhY2UvY2xvdWRub3ctY2h1dHRpLXdlYi9zcmMvYXBwL3VzZXItbW9kdWxlL2Rhc2hib2FyZC9sZWF2ZS1iYW5rL2xlYXZlLWJhbmsuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9yZW51Z2EvRGVza3RvcC9WU0Mtd29ya3NwYWNlL0FuZ3VsYXIgV29ya3NwYWNlL2Nsb3Vkbm93LWNodXR0aS13ZWIvc3RkaW4iLCIvaG9tZS9yZW51Z2EvRGVza3RvcC9WU0Mtd29ya3NwYWNlL0FuZ3VsYXIgV29ya3NwYWNlL2Nsb3Vkbm93LWNodXR0aS13ZWIvc3JjL2Fzc2V0cy9zY3NzL19taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ3FCaEI7O0VBRUUsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBRG5CRjtBQ3FCQTtFQUNFLCtFQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBRUEsc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FEbkJGO0FDb0VFO0VBQXVCLFlBQUE7QURoRXpCO0FDZ0V5QztFQUFtQixZQUFBO0FENUQ1RDtBQzRENEU7RUFBd0IsWUFBQTtBRHhEcEc7QUN3RG9IO0VBQXVCLFlBQUE7QURwRDNJO0FDb0QySjtFQUF5QixZQUFBO0FEaERwTDtBQ2dEb007RUFBcUIsWUFBQTtBRDVDek47QUM0Q3lPO0VBQXlCLFlBQUE7QUR4Q2xRO0FDd0NrUjtFQUF3QixZQUFBO0FEcEMxUztBQ29DMFQ7RUFBc0IsWUFBQTtBRGhDaFY7QUNnQ2dXO0VBQW9CLFlBQUE7QUQ1QnBYO0FDNEJvWTtFQUFvQixZQUFBO0FEeEJ4WjtBQ3dCd2E7RUFBeUIsWUFBQTtBRHBCamM7QUNvQmlkO0VBQThCLFlBQUE7QURoQi9lO0FDZ0IrZjtFQUErQixZQUFBO0FEWjloQjtBQ1k4aUI7RUFBNkIsWUFBQTtBRFIza0I7QUNRMmxCO0VBQThCLFlBQUE7QURKem5CO0FDSXlvQjtFQUFrQixZQUFBO0FEQTNwQjtBQ0EycUI7RUFBb0IsWUFBQTtBREkvckI7QUNKK3NCO0VBQWtCLFlBQUE7QURRanVCO0FDUml2QjtFQUFrQixZQUFBO0FEWW53QjtBQ1pteEI7RUFBMEIsWUFBQTtBRGdCN3lCO0FDaEI2ekI7RUFBeUIsWUFBQTtBRG9CdDFCO0FDcEJzMkI7RUFBMkIsWUFBQTtBRHdCajRCO0FDeEJpNUI7RUFBb0IsWUFBQTtBRDRCcjZCO0FDNUJxN0I7RUFBMkIsWUFBQTtBRGdDaDlCO0FDaENnK0I7RUFBa0IsWUFBQTtBRG9DbC9CO0FDcENrZ0M7RUFBdUIsWUFBQTtBRHdDemhDO0FDeEN5aUM7RUFBdUIsWUFBQTtBRDRDaGtDO0FDNUNnbEM7RUFBdUIsWUFBQTtBRGdEdm1DO0FDaER1bkM7RUFBc0IsWUFBQTtBRG9EN29DO0FDcEQ2cEM7RUFBNkIsWUFBQTtBRHdEMXJDO0FDeEQwc0M7RUFBc0IsWUFBQTtBRDREaHVDO0FDNURndkM7RUFBd0IsWUFBQTtBRGdFeHdDO0FDaEV3eEM7RUFBMkIsWUFBQTtBRG9FbnpDO0FDcEVtMEM7RUFBMkIsWUFBQTtBRHdFOTFDO0FDeEU4MkM7RUFBa0IsWUFBQTtBRDRFaDRDO0FDNUVnNUM7RUFBMEIsWUFBQTtBRGdGMTZDO0FDaEYwN0M7RUFBbUIsWUFBQTtBRG9GNzhDO0FDcEY2OUM7RUFBbUIsWUFBQTtBRHdGaC9DO0FDeEZnZ0Q7RUFBc0IsWUFBQTtBRDRGdGhEO0FDNUZzaUQ7RUFBaUIsWUFBQTtBRGdHdmpEO0FDaEd1a0Q7RUFBc0IsWUFBQTtBRG9HN2xEO0FDcEc2bUQ7RUFBcUIsWUFBQTtBRHdHbG9EO0FDeEdrcEQ7RUFBcUIsWUFBQTtBRDRHdnFEO0FDNUd1ckQ7RUFBb0IsWUFBQTtBRGdIM3NEO0FDOUdFO0VBQ0UsWUFBQTtBRGlISjtBQy9HRTtFQUNFLFlBQUE7QURrSEo7QUNoSEU7RUFDRSxZQUFBO0FEbUhKO0FDakhFO0VBQ0UsWUFBQTtBRG9ISjtBQ2xIRTtFQUNFLFlBQUE7QURxSEo7QUNuSEU7RUFDRSxZQUFBO0FEc0hKO0FDcEhFO0VBQ0UsWUFBQTtBRHVISjtBQ3JIRTtFQUNFLFlBQUE7QUR3SEo7QUN0SEU7RUFDRSxZQUFBO0FEeUhKO0FDdkhFO0VBQ0UsWUFBQTtBRDBISjtBQ3hIRTtFQUNFLFlBQUE7QUQySEo7QUVwUFE7RUFFSSxZQUFBO0FGc1BaO0FFbFBBO0VBRUksa0JBQUE7QUZvUEo7QUdoUVE7RURVUjtJQUlLLGdCQUFBO0VGc1BIO0FBQ0Y7QUVuUFE7RUFFSSxnQkFBQTtBRm9QWjtBRWhQQTtFQUVJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUZrUEo7QUcxUVE7RURrQlI7SUFTUSxnQkFBQTtFRm1QTjtBQUNGO0FFbFBJO0VBRUksaUJBQUE7QUZtUFI7QUd0T1E7RUQxQlI7SUFpQlEsaUJBQUE7RUZtUE47RUVsUE07SUFFRyxnQkFBQTtFRm1QVDtBQUNGO0FFaFBBO0VBRUksMEJBQUE7QUZrUEo7QUVoUEE7RUFFSSxrQkFBQTtFQUNBLGNBQUE7QUZrUEo7QUd6U1E7RURvRFI7SUFNUSxjQUFBO0VGbVBOO0FBQ0Y7QUcvUVE7RURxQlI7SUFVUSxpQkFBQTtFRm9QTjtBQUNGO0FHalFRO0VERVI7SUFjUSxnQkFBQTtFRnFQTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci1tb2R1bGUvZGFzaGJvYXJkL2xlYXZlLWJhbmsvbGVhdmUtYmFuay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbltjbGFzc149aWNvbl9dLFxuW2NsYXNzKj1cIiBpY29uX1wiXSB7XG4gIGZvbnQtZmFtaWx5OiBcImNodXR0aVwiICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3NePWljb24xLV0sIFtjbGFzcyo9XCIgaWNvbjEtXCJdIHtcbiAgLyogdXNlICFpbXBvcnRhbnQgdG8gcHJldmVudCBpc3N1ZXMgd2l0aCBicm93c2VyIGV4dGVuc2lvbnMgdGhhdCBjaGFuZ2UgZm9udHMgKi9cbiAgZm9udC1mYW1pbHk6IFwiaWNvbW9vblwiICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmljb25fZGFzaGJvYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSAXCI7XG59XG5cbi5pY29uX2xlYXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSBXCI7XG59XG5cbi5pY29uX2F0dGVuZGFuY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIJcIjtcbn1cblxuLmljb25fdGltZXNoZWV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSDXCI7XG59XG5cbi5pY29uX2F0dGVuZGFuY2UxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSEXCI7XG59XG5cbi5pY29uX3N1cHBvcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIVcIjtcbn1cblxuLmljb25fcXVpY2tfYXBwbHk6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIZcIjtcbn1cblxuLmljb25fbGVhdmVfYmFuazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eh1wiO1xufVxuXG4uaWNvbl9jb2xsYXBzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EiFwiO1xufVxuXG4uaWNvbl9leHBhbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIlcIjtcbn1cblxuLmljb25fZmlsdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSKXCI7XG59XG5cbi5pY29uX2RhdGVfcGlja2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSLXCI7XG59XG5cbi5pY29uX2Fycm93X3RoaWNrX2xlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIxcIjtcbn1cblxuLmljb25fYXJyb3dfdGhpY2tfcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhI1cIjtcbn1cblxuLmljb25fYXJyb3dfdGhpbl9sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSOXCI7XG59XG5cbi5pY29uX2Fycm93X3RoaW5fcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhI9cIjtcbn1cblxuLmljb25faG9sZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EkFwiO1xufVxuXG4uaWNvbl9jYW5jZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJFcIjtcbn1cblxuLmljb25fdGljazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EklwiO1xufVxuXG4uaWNvbl9sb2NrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSTXCI7XG59XG5cbi5pY29uX2VkaXRfb3V0bGluZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ElFwiO1xufVxuXG4uaWNvbl9lZGl0X2ZpbGxlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ElVwiO1xufVxuXG4uaWNvbl9kZWxldGVfZmlsbGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSWXCI7XG59XG5cbi5pY29uX3NlYXJjaDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6El1wiO1xufVxuXG4uaWNvbl9ub3RpZmljYXRpb25zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSYXCI7XG59XG5cbi5pY29uX3RpbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJlcIjtcbn1cblxuLmljb25fZGF0ZV90aW1lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSaXCI7XG59XG5cbi5pY29uX3Byb2JhdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Em1wiO1xufVxuXG4uaWNvbl9jb25maXJtZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJxcIjtcbn1cblxuLmljb25faG9saWRheXM6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJ1cIjtcbn1cblxuLmljb25fcHJpb3JpdHlfdXJnZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSeXCI7XG59XG5cbi5pY29uX2Fycm93X3VwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSfXCI7XG59XG5cbi5pY29uX2Fycm93X2Rvd246YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKBcIjtcbn1cblxuLmljb25fc2hvd19wYXNzd29yZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EoVwiO1xufVxuXG4uaWNvbl9oaWRlX3Bhc3N3b3JkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSiXCI7XG59XG5cbi5pY29uX25hbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKNcIjtcbn1cblxuLmljb25fb3JnYW5pc2F0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSkXCI7XG59XG5cbi5pY29uX3Bob25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSlXCI7XG59XG5cbi5pY29uX2VtYWlsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSmXCI7XG59XG5cbi5pY29uX3Bhc3N3b3JkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSnXCI7XG59XG5cbi5pY29uX2FkZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EqFwiO1xufVxuXG4uaWNvbl9zaWduX291dDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EqVwiO1xufVxuXG4uaWNvbl9wcm9maWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSqXCI7XG59XG5cbi5pY29uX3dhcm5pbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKtcIjtcbn1cblxuLmljb25fY2FtZXJhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSsXCI7XG59XG5cbi5pY29uMS11cGxvYWQtdG8tY2xvdWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIBcIjtcbn1cblxuLmljb24xLWNsb3VkLWNvbXB1dGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kgVwiO1xufVxuXG4uaWNvbjEtZGFzaGJvYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSCXCI7XG59XG5cbi5pY29uMS1maWx0ZXItcmVzdWx0czpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kg1wiO1xufVxuXG4uaWNvbjEtYnVpbGRpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIRcIjtcbn1cblxuLmljb24xLW5vdW5fQ2FsZW5kYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIVcIjtcbn1cblxuLmljb24xLW5vdW5fUHJvamVjdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6khlwiO1xufVxuXG4uaWNvbjEtbm91bl9VcGxvYWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIdcIjtcbn1cblxuLmljb24xLW5vdW5fdXNlcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIhcIjtcbn1cblxuLmljb24xLW5vdW5fV29yazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kiVwiO1xufVxuXG4uaWNvbjEtUGF0aDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kilwiO1xufVxuXG4ubGVhdmVCYW5rIGg1OjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eh1wiO1xufVxuXG4ubGVhdmVCYW5rX19mb3JtIHtcbiAgbWFyZ2luLXRvcDogMS42cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAubGVhdmVCYW5rX19mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICB9XG59XG4ubGVhdmVCYW5rX19mb3JtIC5yb3cgLmNvbC1tZC00IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmxlYXZlX190aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5sZWF2ZV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbn1cbi5sZWF2ZV9fdGl0bGUgc3BhbiB7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5sZWF2ZV9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEwO1xuICB9XG4gIC5sZWF2ZV9fdGl0bGUgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgfVxufVxuXG4uY2lyY2xlLXByb2dyZXNzIHtcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb3BfX2JvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0LjVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5sb3BfX2JvdHRvbSB7XG4gICAgYm90dG9tOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubG9wX19ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmxvcF9fYm90dG9tIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG59IiwiJHdoaXRlOiNmZmZmZmY7XG4kYm9yZGVyLWNvbG9yOiNERURFREU7XG4kYm9yZGVyLWxpZ2h0OiNFOEU4RTg7XG4kbGlnaHQtYmx1ZTojRjFGN0ZCO1xuJGRhcmtQaW5rOiM5QTQ1RDI7XG4kZGFya0JsdWU6IzY3NDdENDtcbiR0ZXh0LWNvbG9yOiM0MDQwNDA7XG4kcHJpbWFyeUNvbG9yOiM3MTUxREM7XG4kZ3JheTojNkU2RTZFO1xuJGJsYWNrOiMwMDAwMDA7XG4kZGFya1JlZDojRTMyQzJDO1xuJG9yYW5nZTojRkY2QzAwO1xuJGJyb3duOiNBQTM0N0I7XG4kYXJyb3dHcmF5OiM4NDg0ODQ7XG4kYmx1ZTogIzFjOTFmZjtcbiRyb3NlOiNGOTRGODk7XG4kbmVwdHVuZTojN0NBMUIxO1xuJHllbGxvdzojRTI4NjBEO1xuJGNvbG9yLWJhY2s6ICNlZmVmZWY7XG4kY29sb3ItYmFyOiAjNjc0N0Q0O1xuXG5bY2xhc3NePVwiaWNvbl9cIl0sXG5bY2xhc3MqPVwiIGljb25fXCJdIHtcbiAgZm9udC1mYW1pbHk6ICdjaHV0dGknICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuW2NsYXNzXj1cImljb24xLVwiXSwgW2NsYXNzKj1cIiBpY29uMS1cIl0ge1xuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICBmb250LWZhbWlseTogJ2ljb21vb24nICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5cbkBtaXhpbiBiZy1ncmFkaWVudCgpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsJGRhcmtQaW5rIDIwJSwgJGRhcmtCbHVlIDgwJSk7XG59XG5AbWl4aW4gdGhlbWUtYnRuKCl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya0JsdWUgMCUsICRkYXJrUGluayAxMDAlKTtcbn1cbkBtaXhpbiBiZy1ibGFjaygpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwkYmxhY2sgMCUsICMxMjEyMTMgMTAwJSk7XG59XG5AbWl4aW4gZm9udC1jb2xvcigpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCRkYXJrUGluayAyMCUsICRkYXJrQmx1ZSA4MCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya1BpbmsgMjAlLCAkZGFya0JsdWUgODAlKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7ICAgIFxuICB9XG4gIEBtaXhpbiAgYm9yZGVyLWJvdHRvbSgpIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogJGRhcmtCbHVlO1xuICAgIH1cbiAgfVxuXG5AbWl4aW4gdXNlckltZyAoKXtcblxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAuMTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuJWJ0bi1zaGFyZWQge1xuICAgIG1pbi1oZWlnaHQ6IDU1cHg7XG4gIH1cblxuICAuaWNvbl9kYXNoYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDBcIn0uaWNvbl9sZWF2ZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwMVwifS5pY29uX2F0dGVuZGFuY2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDJcIn0uaWNvbl90aW1lc2hlZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDNcIn0uaWNvbl9hdHRlbmRhbmNlMTpiZWZvcmV7Y29udGVudDpcIlxcZTEwNFwifS5pY29uX3N1cHBvcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDVcIn0uaWNvbl9xdWlja19hcHBseTpiZWZvcmV7Y29udGVudDpcIlxcZTEwNlwifS5pY29uX2xlYXZlX2Jhbms6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDdcIn0uaWNvbl9jb2xsYXBzZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwOFwifS5pY29uX2V4cGFuZDpiZWZvcmV7Y29udGVudDpcIlxcZTEwOVwifS5pY29uX2ZpbHRlcjpiZWZvcmV7Y29udGVudDpcIlxcZTEwYVwifS5pY29uX2RhdGVfcGlja2VyOmJlZm9yZXtjb250ZW50OlwiXFxlMTBiXCJ9Lmljb25fYXJyb3dfdGhpY2tfbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZTEwY1wifS5pY29uX2Fycm93X3RoaWNrX3JpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxlMTBkXCJ9Lmljb25fYXJyb3dfdGhpbl9sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxlMTBlXCJ9Lmljb25fYXJyb3dfdGhpbl9yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZTEwZlwifS5pY29uX2hvbGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTBcIn0uaWNvbl9jYW5jZWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTFcIn0uaWNvbl90aWNrOmJlZm9yZXtjb250ZW50OlwiXFxlMTEyXCJ9Lmljb25fbG9jazpiZWZvcmV7Y29udGVudDpcIlxcZTExM1wifS5pY29uX2VkaXRfb3V0bGluZTpiZWZvcmV7Y29udGVudDpcIlxcZTExNFwifS5pY29uX2VkaXRfZmlsbGVkOmJlZm9yZXtjb250ZW50OlwiXFxlMTE1XCJ9Lmljb25fZGVsZXRlX2ZpbGxlZDpiZWZvcmV7Y29udGVudDpcIlxcZTExNlwifS5pY29uX3NlYXJjaDpiZWZvcmV7Y29udGVudDpcIlxcZTExN1wifS5pY29uX25vdGlmaWNhdGlvbnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMThcIn0uaWNvbl90aW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTE5XCJ9Lmljb25fZGF0ZV90aW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTFhXCJ9Lmljb25fcHJvYmF0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxlMTFiXCJ9Lmljb25fY29uZmlybWVkOmJlZm9yZXtjb250ZW50OlwiXFxlMTFjXCJ9Lmljb25faG9saWRheXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWRcIn0uaWNvbl9wcmlvcml0eV91cmdlbnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWVcIn0uaWNvbl9hcnJvd191cDpiZWZvcmV7Y29udGVudDpcIlxcZTExZlwifS5pY29uX2Fycm93X2Rvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjBcIn0uaWNvbl9zaG93X3Bhc3N3b3JkOmJlZm9yZXtjb250ZW50OlwiXFxlMTIxXCJ9Lmljb25faGlkZV9wYXNzd29yZDpiZWZvcmV7Y29udGVudDpcIlxcZTEyMlwifS5pY29uX25hbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjNcIn0uaWNvbl9vcmdhbmlzYXRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjRcIn0uaWNvbl9waG9uZTpiZWZvcmV7Y29udGVudDpcIlxcZTEyNVwifS5pY29uX2VtYWlsOmJlZm9yZXtjb250ZW50OlwiXFxlMTI2XCJ9Lmljb25fcGFzc3dvcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjdcIn0uaWNvbl9hZGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjhcIn0uaWNvbl9zaWduX291dDpiZWZvcmV7Y29udGVudDpcIlxcZTEyOVwifS5pY29uX3Byb2ZpbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMmFcIn0uaWNvbl93YXJuaW5nOmJlZm9yZXtjb250ZW50OlwiXFxlMTJiXCJ9Lmljb25fY2FtZXJhOmJlZm9yZXtjb250ZW50OlwiXFxlMTJjXCJ9XG5cbiAgLmljb24xLXVwbG9hZC10by1jbG91ZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAwXCI7XG4gIH1cbiAgLmljb24xLWNsb3VkLWNvbXB1dGluZzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAxXCI7XG4gIH1cbiAgLmljb24xLWRhc2hib2FyZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAyXCI7XG4gIH1cbiAgLmljb24xLWZpbHRlci1yZXN1bHRzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDNcIjtcbiAgfVxuICAuaWNvbjEtYnVpbGRpbmc6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwNFwiO1xuICB9XG4gIC5pY29uMS1ub3VuX0NhbGVuZGFyOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDVcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9Qcm9qZWN0OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDZcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9VcGxvYWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwN1wiO1xuICB9XG4gIC5pY29uMS1ub3VuX3VzZXJzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDhcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9Xb3JrOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDlcIjtcbiAgfVxuICAuaWNvbjEtUGF0aDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTBhXCI7XG4gIH0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9taXhpbi5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcbi5sZWF2ZUJhbmtcbnsgIFxuICAgIGg1IFxuICAgIHtcbiAgICAgICAgJjo6YmVmb3JlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlMTA3XCI7XG4gICAgICAgIH1cbiAgICB9XG59XG4ubGVhdmVCYW5rX19mb3JtIFxue1xuICAgIG1hcmdpbi10b3A6IDEuNnJlbTtcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGJpZy1kZXNrdG9wKVxuICAgIHttYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cbiAgICAucm93IFxuICAgIHtcbiAgICAgICAgLmNvbC1tZC00IFxuICAgICAgICB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9IFxuICAgIH1cbn1cbi5sZWF2ZV9fdGl0bGVcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGRlc2t0b3ApIFxuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgIH1cbiAgICBzcGFuIFxuICAgIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgfVxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSBcbiAgICB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwO1xuICAgICAgICBzcGFuIFxuICAgICAgICB7XG4gICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgIH1cbiAgICB9XG59XG4uY2lyY2xlLXByb2dyZXNzIFxue1xuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xufVxuLmxvcF9fYm90dG9tIFxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDQuNXJlbTtcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGJpZy1kZXNrdG9wKVxuICAgIHtcbiAgICAgICAgYm90dG9tOiAxLjVyZW07XG4gICAgfVxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSBcbiAgICB7XG4gICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgIH1cbiAgICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkgXG4gICAge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cbn1cbiIsIkBtaXhpbiBicmVha3BvaW50KCRwb2ludCkge1xuICAgIEBpZiAkcG9pbnQ9PWJpZy1kZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT1kZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT1sYXB0b3Age1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PWFwcGxlLWxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBlbHNlIGlmICRwb2ludD09dGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT10YWJsZXQge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT10YWJsZXQtcyB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgQGVsc2UgaWYgJHBvaW50PT1tb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG5cbiAgICB9XG4gICBcblxufVxuXG5cblxuQG1peGluIGdyYWRpZW50LXRleHQoJGFuZ2xlOiA0NWRlZywgJGNvbG9yOiAjNjc0N0Q0LCAkYW1vdW50OiAzNSUpIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yLCBhZGp1c3QtaHVlKCRjb2xvciwgJGFtb3VudCkpO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgICAtbW96LXRyYW5zaXRpb246ICAgICR0cmFuc2l0aW9uO1xuICAgIC1vLXRyYW5zaXRpb246ICAgICAgJHRyYW5zaXRpb247XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICB0cmFuc2l0aW9uOiAgICAgICAgICR0cmFuc2l0aW9uO1xufVxuICAiXX0= */"];



/***/ }),

/***/ "./src/app/user-module/dashboard/leave-bank/leave-bank.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/user-module/dashboard/leave-bank/leave-bank.component.ts ***!
  \**************************************************************************/
/*! exports provided: LeaveBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveBankComponent", function() { return LeaveBankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/urlConstant */ "./src/app/services/urlConstant.ts");


class LeaveBankComponent {
    constructor(urlconstant, genericservice, encryptdecryptlocalstorage, dataSharingService) {
        this.urlconstant = urlconstant;
        this.genericservice = genericservice;
        this.encryptdecryptlocalstorage = encryptdecryptlocalstorage;
        this.dataSharingService = dataSharingService;
        this.leaveBankUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].leavebankApi;
        this.leaveBankList = [];
        this.leaveEntitledArrayList = [];
        this.leaveTypeCodeArrayList = [];
        this.leaveTypeDescriptionArrayList = [];
        this.leaveSummaryList = [];
        this.lop = false;
        this.dataSharingService.appliedFlagObs.subscribe(data => {
            console.log('called..........');
            if (data == 'true') {
                console.log('called..........');
                this.leavebank();
            }
        });
    }
    ngOnInit() {
        this.leavebank();
    }
    leavebank() {
        let payloadReqObj = {
            employeeMasterId: this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            isActive: true
        };
        return this.genericservice.post(this.leaveBankUrl, payloadReqObj, false).subscribe(response => {
            this.leaveBankList = response.data;
            this.leaveBankList.forEach(leaveSummary => {
                leaveSummary.leaveTypeCode == 'SL' ? this.slCount = leaveSummary.leaveEntitled : null;
                leaveSummary.leaveTypeCode == 'EL' ? this.elCount = leaveSummary.leaveEntitled : null;
                leaveSummary.leaveTypeCode == 'CL' ? this.clCount = leaveSummary.leaveEntitled : null;
                leaveSummary.leaveTypeCode == 'SL' ? this.sllop = leaveSummary.noOfLops : null;
                leaveSummary.leaveTypeCode == 'EL' ? this.ellop = leaveSummary.noOfLops : null;
                leaveSummary.leaveTypeCode == 'CL' ? this.cllop = leaveSummary.noOfLops : null;
                leaveSummary.leaveTypeCode == 'PER' ? this.perlop = leaveSummary.noOfLops : null;
                leaveSummary.leaveTypeCode == 'OD' ? this.odlop = leaveSummary.noOfLops : null;
                console.log(this.slCount + " ---" + this.clCount + "======" + this.elCount);
                console.log(this.sllop + " ---" + this.ellop + "======" + this.cllop + "======" + this.perlop + "======" + this.odlop);
                this.totallop = this.sllop + this.ellop + this.cllop;
                if (this.totallop > 1) {
                    this.lop = true;
                }
                else {
                    this.lop = false;
                }
            });
        });
    }
}


/***/ }),

/***/ "./src/app/user-module/dashboard/leave-status/leave-status.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/user-module/dashboard/leave-status/leave-status.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: RenderType_LeaveStatusComponent, View_LeaveStatusComponent_0, View_LeaveStatusComponent_Host_0, LeaveStatusComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LeaveStatusComponent", function() { return RenderType_LeaveStatusComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LeaveStatusComponent_0", function() { return View_LeaveStatusComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LeaveStatusComponent_Host_0", function() { return View_LeaveStatusComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveStatusComponentNgFactory", function() { return LeaveStatusComponentNgFactory; });
/* harmony import */ var _leave_status_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-status.component.scss.shim.ngstyle */ "./src/app/user-module/dashboard/leave-status/leave-status.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chutti-pagination/chutti-pagination.component.ngfactory */ "./src/app/user-module/chutti-pagination/chutti-pagination.component.ngfactory.js");
/* harmony import */ var _chutti_pagination_chutti_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chutti-pagination/chutti-pagination.component */ "./src/app/user-module/chutti-pagination/chutti-pagination.component.ts");
/* harmony import */ var _leave_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leave-status.component */ "./src/app/user-module/dashboard/leave-status/leave-status.component.ts");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/urlConstant */ "./src/app/services/urlConstant.ts");
/* harmony import */ var _services_genericservices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/genericservices */ "./src/app/services/genericservices.ts");
/* harmony import */ var _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/encrypt-decrypt-localstorage.service */ "./src/app/services/encrypt-decrypt-localstorage.service.ts");
/* harmony import */ var _services_dataSharing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/dataSharing.service */ "./src/app/services/dataSharing.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_LeaveStatusComponent = [_leave_status_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LeaveStatusComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LeaveStatusComponent, data: {} });

function View_LeaveStatusComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "th", [["class", "pl-0"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reason"]))], null, null); }
function View_LeaveStatusComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "th", [["class", "pl-0"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Remarks"]))], null, null); }
function View_LeaveStatusComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Actions"]))], null, null); }
function View_LeaveStatusComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [["data-th", "Reason"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.reason; _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveStatusComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [["class", "leave_approved text-capitalize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "span", [["class", "icon_tick"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 2, 0, currVal_0); }); }
function View_LeaveStatusComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "leave_pending text-capitalize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveStatusComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "leave_notApproved text-capitalize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveStatusComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "leave_notApproved text-capitalize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveStatusComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [["data-th", "Remarks"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.remarks; _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveStatusComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], null, null); }
function View_LeaveStatusComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "td", [], null, null, null, null, null))], null, null); }
function View_LeaveStatusComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 27, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [["data-th", "Type"], ["scope", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "td", [["data-th", "From"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "td", [["data-th", "To"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "td", [["data-th", "Duration"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 8, "td", [["data-th", "Status"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.dashBoardPaginationView; _ck(_v, 12, 0, currVal_4); var currVal_5 = (_v.context.$implicit.status == "APPROVED"); _ck(_v, 15, 0, currVal_5); var currVal_6 = (_v.context.$implicit.status == "PENDING"); _ck(_v, 17, 0, currVal_6); var currVal_7 = (_v.context.$implicit.status == "REJECTED"); _ck(_v, 19, 0, currVal_7); var currVal_8 = (_v.context.$implicit.status == "ONHOLD"); _ck(_v, 21, 0, currVal_8); var currVal_9 = ((_v.context.$implicit.remarks != null) && _co.dashBoardPaginationView); _ck(_v, 23, 0, currVal_9); var currVal_10 = ((_v.context.$implicit.remarks == null) && _co.dashBoardPaginationView); _ck(_v, 25, 0, currVal_10); var currVal_11 = _co.displayHide; _ck(_v, 27, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.leaveTypeDescription; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.fromDate, "dd MMM yy")); _ck(_v, 4, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.toDate, "dd MMM yy")); _ck(_v, 7, 0, currVal_2); var currVal_3 = _v.context.$implicit.permissionDuration; _ck(_v, 10, 0, currVal_3); }); }
function View_LeaveStatusComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_LeaveStatusComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], [])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform(_co.leavestausList, 0, 3)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_LeaveStatusComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "text-center w-100 py-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Records Found!"]))], null, null); }
function View_LeaveStatusComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 20, "table", [["class", "table rwd-table leaveData__table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 17, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 16, "tr", [["class", "border__hide leave__status--header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "th", [["class", "pl-0"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["From"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "th", [["class", "pl-0"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "th", [["class", "pl-0"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Duration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "th", [["class", "pl-0"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dashBoardPaginationView; _ck(_v, 13, 0, currVal_0); var currVal_1 = _co.dashBoardPaginationView; _ck(_v, 17, 0, currVal_1); var currVal_2 = _co.displayHide; _ck(_v, 19, 0, currVal_2); var currVal_3 = _co.isData; _ck(_v, 21, 0, currVal_3); var currVal_4 = !_co.isData; _ck(_v, 23, 0, currVal_4); }, null); }
function View_LeaveStatusComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Actions"]))], null, null); }
function View_LeaveStatusComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [["class", "col-md-3"], ["data-th", "Reason"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.reason; _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveStatusComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [["class", "col-md-3"], ["data-th", "Reason"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Not Feeling well"]))], null, null); }
function View_LeaveStatusComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [["class", "leave_approved text-capitalize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "span", [["class", "icon_tick"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 2, 0, currVal_0); }); }
function View_LeaveStatusComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "leave_pending text-capitalize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveStatusComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "leave_notApproved text-capitalize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveStatusComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "leave_notApproved text-capitalize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveStatusComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [["class", "col-md-2"], ["data-th", "Remarks"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.remarks; _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveStatusComponent_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [["class", "col-md-2"], ["data-th", "Actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], null, null); }
function View_LeaveStatusComponent_28(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "td", [["data-th", "Actions"]], null, null, null, null, null))], null, null); }
function View_LeaveStatusComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 29, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [["class", "col-md-2"], ["data-th", "Type"], ["scope", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "td", [["class", "col-md-1"], ["data-th", "From"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "td", [["class", "col-md-1"], ["data-th", "To"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "td", [["class", "col-md-1"], ["data-th", "Duration"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 8, "td", [["class", "col-md-2"], ["data-th", "Status"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = (_v.context.$implicit.reason != null); _ck(_v, 12, 0, currVal_4); var currVal_5 = (_v.context.$implicit.reason == null); _ck(_v, 14, 0, currVal_5); var currVal_6 = (_v.context.$implicit.status == "APPROVED"); _ck(_v, 17, 0, currVal_6); var currVal_7 = (_v.context.$implicit.status == "PENDING"); _ck(_v, 19, 0, currVal_7); var currVal_8 = (_v.context.$implicit.status == "REJECTED"); _ck(_v, 21, 0, currVal_8); var currVal_9 = (_v.context.$implicit.status == "ONHOLD"); _ck(_v, 23, 0, currVal_9); var currVal_10 = (_v.context.$implicit.remarks != null); _ck(_v, 25, 0, currVal_10); var currVal_11 = (_v.context.$implicit.remarks == null); _ck(_v, 27, 0, currVal_11); var currVal_12 = _co.displayHide; _ck(_v, 29, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.leaveTypeDescription; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.fromDate, "dd MMM yy")); _ck(_v, 4, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.toDate, "dd MMM yy")); _ck(_v, 7, 0, currVal_2); var currVal_3 = _v.context.$implicit.permissionDuration; _ck(_v, 10, 0, currVal_3); }); }
function View_LeaveStatusComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tbody", [["class", "scroll"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.leavestausList; _ck(_v, 2, 0, currVal_0); }, null); }
function View_LeaveStatusComponent_29(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "text-center w-100 py-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "mt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Records Found!"]))], null, null); }
function View_LeaveStatusComponent_31(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", " "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.value; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.value; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.label; _ck(_v, 3, 0, currVal_2); }); }
function View_LeaveStatusComponent_30(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "table__bottom text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "span", [["class", "items__nos"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "form-group page__section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [["for", "pageNo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Items per page:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 7, "select", [["class", "form-control"], ["id", "pageNo"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.selectedItemsPerPage = $event) !== false);
        ad = (pd_2 && ad);
    } if (("ngModelChange" === en)) {
        var pd_3 = (_co.changeItemPerPage($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "app-chutti-pagination", [], null, [[null, "goPrev"], [null, "goNext"], [null, "onPage"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("goPrev" === en)) {
        var pd_0 = (_co.goToPrev() !== false);
        ad = (pd_0 && ad);
    } if (("goNext" === en)) {
        var pd_1 = (_co.goToNext() !== false);
        ad = (pd_1 && ad);
    } if (("onPage" === en)) {
        var pd_2 = (_co.goToPageNo($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ChuttiPaginationComponent_0"], _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ChuttiPaginationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, _chutti_pagination_chutti_pagination_component__WEBPACK_IMPORTED_MODULE_5__["ChuttiPaginationComponent"], [], { currentPage: [0, "currentPage"], count: [1, "count"], pagesToShow: [2, "pagesToShow"] }, { goPrev: "goPrev", goNext: "goNext" })], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.selectedItemsPerPage; _ck(_v, 8, 0, currVal_7); var currVal_8 = _co.perpageOption; _ck(_v, 12, 0, currVal_8); var currVal_9 = _co.currentPage; var currVal_10 = _co.totalCount; var currVal_11 = _co.totalPages; _ck(_v, 14, 0, currVal_9, currVal_10, currVal_11); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_LeaveStatusComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "div", [["class", "leave__table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 20, "table", [["class", "table table-fixed rwd-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 17, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 16, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "th", [["class", "col-md-2"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "th", [["class", "col-md-1"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["From"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "th", [["class", "col-md-1"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "th", [["class", "col-md-1"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Duration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "th", [["class", "col-md-3"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reason"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "th", [["class", "col-md-2"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "th", [["class", "col-md-2"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Remarks"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.displayHide; _ck(_v, 20, 0, currVal_0); var currVal_1 = _co.isData; _ck(_v, 22, 0, currVal_1); var currVal_2 = !_co.isData; _ck(_v, 24, 0, currVal_2); var currVal_3 = (_co.isData && (_co.totalCount > 10)); _ck(_v, 26, 0, currVal_3); }, null); }
function View_LeaveStatusComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "div", [["class", "leave__status"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Leave Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "leave__table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveStatusComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showdashleavestatuspagination; _ck(_v, 7, 0, currVal_0); var currVal_1 = !_co.showdashleavestatuspagination; _ck(_v, 9, 0, currVal_1); }, null); }
function View_LeaveStatusComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-leave-status", [], null, null, null, View_LeaveStatusComponent_0, RenderType_LeaveStatusComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _leave_status_component__WEBPACK_IMPORTED_MODULE_6__["LeaveStatusComponent"], [_services_urlConstant__WEBPACK_IMPORTED_MODULE_7__["UrlConstant"], _services_genericservices__WEBPACK_IMPORTED_MODULE_8__["Genericservice"], _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["EncryptDecryptLocalStorageService"], _services_dataSharing_service__WEBPACK_IMPORTED_MODULE_10__["DataSharingService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LeaveStatusComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-leave-status", _leave_status_component__WEBPACK_IMPORTED_MODULE_6__["LeaveStatusComponent"], View_LeaveStatusComponent_Host_0, { dashBoardPaginationView: "dashBoardPaginationView", showdashleavestatuspagination: "showdashleavestatuspagination" }, {}, []);



/***/ }),

/***/ "./src/app/user-module/dashboard/leave-status/leave-status.component.scss.shim.ngstyle.js":
/*!************************************************************************************************!*\
  !*** ./src/app/user-module/dashboard/leave-status/leave-status.component.scss.shim.ngstyle.js ***!
  \************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@charset \"UTF-8\";\n[class^=icon_][_ngcontent-%COMP%], [class*=\" icon_\"][_ngcontent-%COMP%] {\n  font-family: \"chutti\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[class^=icon1-][_ngcontent-%COMP%], [class*=\" icon1-\"][_ngcontent-%COMP%] {\n  \n  font-family: \"icomoon\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon_dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE100\";\n}\n.icon_leave[_ngcontent-%COMP%]:before {\n  content: \"\uE101\";\n}\n.icon_attendance[_ngcontent-%COMP%]:before {\n  content: \"\uE102\";\n}\n.icon_timesheet[_ngcontent-%COMP%]:before {\n  content: \"\uE103\";\n}\n.icon_attendance1[_ngcontent-%COMP%]:before {\n  content: \"\uE104\";\n}\n.icon_support[_ngcontent-%COMP%]:before {\n  content: \"\uE105\";\n}\n.icon_quick_apply[_ngcontent-%COMP%]:before {\n  content: \"\uE106\";\n}\n.icon_leave_bank[_ngcontent-%COMP%]:before {\n  content: \"\uE107\";\n}\n.icon_collapse[_ngcontent-%COMP%]:before {\n  content: \"\uE108\";\n}\n.icon_expand[_ngcontent-%COMP%]:before {\n  content: \"\uE109\";\n}\n.icon_filter[_ngcontent-%COMP%]:before {\n  content: \"\uE10A\";\n}\n.icon_date_picker[_ngcontent-%COMP%]:before {\n  content: \"\uE10B\";\n}\n.icon_arrow_thick_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10C\";\n}\n.icon_arrow_thick_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10D\";\n}\n.icon_arrow_thin_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10E\";\n}\n.icon_arrow_thin_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10F\";\n}\n.icon_hold[_ngcontent-%COMP%]:before {\n  content: \"\uE110\";\n}\n.icon_cancel[_ngcontent-%COMP%]:before {\n  content: \"\uE111\";\n}\n.icon_tick[_ngcontent-%COMP%]:before {\n  content: \"\uE112\";\n}\n.icon_lock[_ngcontent-%COMP%]:before {\n  content: \"\uE113\";\n}\n.icon_edit_outline[_ngcontent-%COMP%]:before {\n  content: \"\uE114\";\n}\n.icon_edit_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE115\";\n}\n.icon_delete_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE116\";\n}\n.icon_search[_ngcontent-%COMP%]:before {\n  content: \"\uE117\";\n}\n.icon_notifications[_ngcontent-%COMP%]:before {\n  content: \"\uE118\";\n}\n.icon_time[_ngcontent-%COMP%]:before {\n  content: \"\uE119\";\n}\n.icon_date_time[_ngcontent-%COMP%]:before {\n  content: \"\uE11A\";\n}\n.icon_probation[_ngcontent-%COMP%]:before {\n  content: \"\uE11B\";\n}\n.icon_confirmed[_ngcontent-%COMP%]:before {\n  content: \"\uE11C\";\n}\n.icon_holidays[_ngcontent-%COMP%]:before {\n  content: \"\uE11D\";\n}\n.icon_priority_urgent[_ngcontent-%COMP%]:before {\n  content: \"\uE11E\";\n}\n.icon_arrow_up[_ngcontent-%COMP%]:before {\n  content: \"\uE11F\";\n}\n.icon_arrow_down[_ngcontent-%COMP%]:before {\n  content: \"\uE120\";\n}\n.icon_show_password[_ngcontent-%COMP%]:before {\n  content: \"\uE121\";\n}\n.icon_hide_password[_ngcontent-%COMP%]:before {\n  content: \"\uE122\";\n}\n.icon_name[_ngcontent-%COMP%]:before {\n  content: \"\uE123\";\n}\n.icon_organisation[_ngcontent-%COMP%]:before {\n  content: \"\uE124\";\n}\n.icon_phone[_ngcontent-%COMP%]:before {\n  content: \"\uE125\";\n}\n.icon_email[_ngcontent-%COMP%]:before {\n  content: \"\uE126\";\n}\n.icon_password[_ngcontent-%COMP%]:before {\n  content: \"\uE127\";\n}\n.icon_add[_ngcontent-%COMP%]:before {\n  content: \"\uE128\";\n}\n.icon_sign_out[_ngcontent-%COMP%]:before {\n  content: \"\uE129\";\n}\n.icon_profile[_ngcontent-%COMP%]:before {\n  content: \"\uE12A\";\n}\n.icon_warning[_ngcontent-%COMP%]:before {\n  content: \"\uE12B\";\n}\n.icon_camera[_ngcontent-%COMP%]:before {\n  content: \"\uE12C\";\n}\n.icon1-upload-to-cloud[_ngcontent-%COMP%]:before {\n  content: \"\uE900\";\n}\n.icon1-cloud-computing[_ngcontent-%COMP%]:before {\n  content: \"\uE901\";\n}\n.icon1-dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE902\";\n}\n.icon1-filter-results[_ngcontent-%COMP%]:before {\n  content: \"\uE903\";\n}\n.icon1-building[_ngcontent-%COMP%]:before {\n  content: \"\uE904\";\n}\n.icon1-noun_Calendar[_ngcontent-%COMP%]:before {\n  content: \"\uE905\";\n}\n.icon1-noun_Project[_ngcontent-%COMP%]:before {\n  content: \"\uE906\";\n}\n.icon1-noun_Upload[_ngcontent-%COMP%]:before {\n  content: \"\uE907\";\n}\n.icon1-noun_users[_ngcontent-%COMP%]:before {\n  content: \"\uE908\";\n}\n.icon1-noun_Work[_ngcontent-%COMP%]:before {\n  content: \"\uE909\";\n}\n.icon1-Path[_ngcontent-%COMP%]:before {\n  content: \"\uE90A\";\n}\n#leavestatus[_ngcontent-%COMP%] {\n  transition: 1s;\n  transition-timing-function: ease-out;\n}\n.leave__status[_ngcontent-%COMP%] {\n  transition: 1s;\n  transition-timing-function: ease-out;\n  margin-bottom: 0;\n}\n.leave__status[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]::before {\n  content: \"\uE101\";\n}\n.leave__status[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .leave__status[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.edit__leave--status[_ngcontent-%COMP%]::before {\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n.edit__leave--status[_ngcontent-%COMP%]:hover::before {\n  color: #6747D4;\n}\n.text-capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n@media (max-width: 567px) {\n  .leaveData__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2), .leaveData__table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(3) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tb2R1bGUvZGFzaGJvYXJkL2xlYXZlLXN0YXR1cy9sZWF2ZS1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9yZW51Z2EvRGVza3RvcC9WU0Mtd29ya3NwYWNlL0FuZ3VsYXIgV29ya3NwYWNlL2Nsb3Vkbm93LWNodXR0aS13ZWIvc3JjL2FwcC91c2VyLW1vZHVsZS9kYXNoYm9hcmQvbGVhdmUtc3RhdHVzL2xlYXZlLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3JlbnVnYS9EZXNrdG9wL1ZTQy13b3Jrc3BhY2UvQW5ndWxhciBXb3Jrc3BhY2UvY2xvdWRub3ctY2h1dHRpLXdlYi9zdGRpbiIsIi9ob21lL3JlbnVnYS9EZXNrdG9wL1ZTQy13b3Jrc3BhY2UvQW5ndWxhciBXb3Jrc3BhY2UvY2xvdWRub3ctY2h1dHRpLXdlYi9zcmMvYXNzZXRzL3Njc3MvX21peGluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDcUJoQjs7RUFFRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FEbkJGO0FDcUJBO0VBQ0UsK0VBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFFQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURuQkY7QUNvRUU7RUFBdUIsWUFBQTtBRGhFekI7QUNnRXlDO0VBQW1CLFlBQUE7QUQ1RDVEO0FDNEQ0RTtFQUF3QixZQUFBO0FEeERwRztBQ3dEb0g7RUFBdUIsWUFBQTtBRHBEM0k7QUNvRDJKO0VBQXlCLFlBQUE7QURoRHBMO0FDZ0RvTTtFQUFxQixZQUFBO0FENUN6TjtBQzRDeU87RUFBeUIsWUFBQTtBRHhDbFE7QUN3Q2tSO0VBQXdCLFlBQUE7QURwQzFTO0FDb0MwVDtFQUFzQixZQUFBO0FEaENoVjtBQ2dDZ1c7RUFBb0IsWUFBQTtBRDVCcFg7QUM0Qm9ZO0VBQW9CLFlBQUE7QUR4QnhaO0FDd0J3YTtFQUF5QixZQUFBO0FEcEJqYztBQ29CaWQ7RUFBOEIsWUFBQTtBRGhCL2U7QUNnQitmO0VBQStCLFlBQUE7QURaOWhCO0FDWThpQjtFQUE2QixZQUFBO0FEUjNrQjtBQ1EybEI7RUFBOEIsWUFBQTtBREp6bkI7QUNJeW9CO0VBQWtCLFlBQUE7QURBM3BCO0FDQTJxQjtFQUFvQixZQUFBO0FESS9yQjtBQ0orc0I7RUFBa0IsWUFBQTtBRFFqdUI7QUNSaXZCO0VBQWtCLFlBQUE7QURZbndCO0FDWm14QjtFQUEwQixZQUFBO0FEZ0I3eUI7QUNoQjZ6QjtFQUF5QixZQUFBO0FEb0J0MUI7QUNwQnMyQjtFQUEyQixZQUFBO0FEd0JqNEI7QUN4Qmk1QjtFQUFvQixZQUFBO0FENEJyNkI7QUM1QnE3QjtFQUEyQixZQUFBO0FEZ0NoOUI7QUNoQ2crQjtFQUFrQixZQUFBO0FEb0NsL0I7QUNwQ2tnQztFQUF1QixZQUFBO0FEd0N6aEM7QUN4Q3lpQztFQUF1QixZQUFBO0FENENoa0M7QUM1Q2dsQztFQUF1QixZQUFBO0FEZ0R2bUM7QUNoRHVuQztFQUFzQixZQUFBO0FEb0Q3b0M7QUNwRDZwQztFQUE2QixZQUFBO0FEd0QxckM7QUN4RDBzQztFQUFzQixZQUFBO0FENERodUM7QUM1RGd2QztFQUF3QixZQUFBO0FEZ0V4d0M7QUNoRXd4QztFQUEyQixZQUFBO0FEb0VuekM7QUNwRW0wQztFQUEyQixZQUFBO0FEd0U5MUM7QUN4RTgyQztFQUFrQixZQUFBO0FENEVoNEM7QUM1RWc1QztFQUEwQixZQUFBO0FEZ0YxNkM7QUNoRjA3QztFQUFtQixZQUFBO0FEb0Y3OEM7QUNwRjY5QztFQUFtQixZQUFBO0FEd0ZoL0M7QUN4RmdnRDtFQUFzQixZQUFBO0FENEZ0aEQ7QUM1RnNpRDtFQUFpQixZQUFBO0FEZ0d2akQ7QUNoR3VrRDtFQUFzQixZQUFBO0FEb0c3bEQ7QUNwRzZtRDtFQUFxQixZQUFBO0FEd0dsb0Q7QUN4R2twRDtFQUFxQixZQUFBO0FENEd2cUQ7QUM1R3VyRDtFQUFvQixZQUFBO0FEZ0gzc0Q7QUM5R0U7RUFDRSxZQUFBO0FEaUhKO0FDL0dFO0VBQ0UsWUFBQTtBRGtISjtBQ2hIRTtFQUNFLFlBQUE7QURtSEo7QUNqSEU7RUFDRSxZQUFBO0FEb0hKO0FDbEhFO0VBQ0UsWUFBQTtBRHFISjtBQ25IRTtFQUNFLFlBQUE7QURzSEo7QUNwSEU7RUFDRSxZQUFBO0FEdUhKO0FDckhFO0VBQ0UsWUFBQTtBRHdISjtBQ3RIRTtFQUNFLFlBQUE7QUR5SEo7QUN2SEU7RUFDRSxZQUFBO0FEMEhKO0FDeEhFO0VBQ0UsWUFBQTtBRDJISjtBRXZQQTtFQUVFLGNBQUE7RUFDQSxvQ0FBQTtBRnlQRjtBRXZQQTtFQUVFLGNBQUE7RUFDQSxvQ0FBQTtFQWFBLGdCQUFBO0FGNk9GO0FFdlBJO0VBQ0UsWUFBQTtBRnlQTjtBRXJQRTs7RUFFRSxxQkFBQTtBRnVQSjtBRWhQRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBRm1QSjtBRS9PSTtFQUNFLGNEOUJJO0FEK1FWO0FFNU9BO0VBQ0UsMEJBQUE7QUYrT0Y7QUdwT1E7RURISjtJQUVFLGFBQUE7RUYwT0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbW9kdWxlL2Rhc2hib2FyZC9sZWF2ZS1zdGF0dXMvbGVhdmUtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuW2NsYXNzXj1pY29uX10sXG5bY2xhc3MqPVwiIGljb25fXCJdIHtcbiAgZm9udC1mYW1pbHk6IFwiY2h1dHRpXCIgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbltjbGFzc149aWNvbjEtXSwgW2NsYXNzKj1cIiBpY29uMS1cIl0ge1xuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICBmb250LWZhbWlseTogXCJpY29tb29uXCIgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uaWNvbl9kYXNoYm9hcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIBcIjtcbn1cblxuLmljb25fbGVhdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIFcIjtcbn1cblxuLmljb25fYXR0ZW5kYW5jZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EglwiO1xufVxuXG4uaWNvbl90aW1lc2hlZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhINcIjtcbn1cblxuLmljb25fYXR0ZW5kYW5jZTE6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIRcIjtcbn1cblxuLmljb25fc3VwcG9ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EhVwiO1xufVxuXG4uaWNvbl9xdWlja19hcHBseTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EhlwiO1xufVxuXG4uaWNvbl9sZWF2ZV9iYW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSHXCI7XG59XG5cbi5pY29uX2NvbGxhcHNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSIXCI7XG59XG5cbi5pY29uX2V4cGFuZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EiVwiO1xufVxuXG4uaWNvbl9maWx0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIpcIjtcbn1cblxuLmljb25fZGF0ZV9waWNrZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhItcIjtcbn1cblxuLmljb25fYXJyb3dfdGhpY2tfbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EjFwiO1xufVxuXG4uaWNvbl9hcnJvd190aGlja19yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EjVwiO1xufVxuXG4uaWNvbl9hcnJvd190aGluX2xlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhI5cIjtcbn1cblxuLmljb25fYXJyb3dfdGhpbl9yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ej1wiO1xufVxuXG4uaWNvbl9ob2xkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSQXCI7XG59XG5cbi5pY29uX2NhbmNlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EkVwiO1xufVxuXG4uaWNvbl90aWNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSSXCI7XG59XG5cbi5pY29uX2xvY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJNcIjtcbn1cblxuLmljb25fZWRpdF9vdXRsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSUXCI7XG59XG5cbi5pY29uX2VkaXRfZmlsbGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSVXCI7XG59XG5cbi5pY29uX2RlbGV0ZV9maWxsZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJZcIjtcbn1cblxuLmljb25fc2VhcmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSXXCI7XG59XG5cbi5pY29uX25vdGlmaWNhdGlvbnM6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJhcIjtcbn1cblxuLmljb25fdGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EmVwiO1xufVxuXG4uaWNvbl9kYXRlX3RpbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJpcIjtcbn1cblxuLmljb25fcHJvYmF0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSbXCI7XG59XG5cbi5pY29uX2NvbmZpcm1lZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EnFwiO1xufVxuXG4uaWNvbl9ob2xpZGF5czpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EnVwiO1xufVxuXG4uaWNvbl9wcmlvcml0eV91cmdlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJ5cIjtcbn1cblxuLmljb25fYXJyb3dfdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJ9cIjtcbn1cblxuLmljb25fYXJyb3dfZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EoFwiO1xufVxuXG4uaWNvbl9zaG93X3Bhc3N3b3JkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oShXCI7XG59XG5cbi5pY29uX2hpZGVfcGFzc3dvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKJcIjtcbn1cblxuLmljb25fbmFtZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eo1wiO1xufVxuXG4uaWNvbl9vcmdhbmlzYXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKRcIjtcbn1cblxuLmljb25fcGhvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKVcIjtcbn1cblxuLmljb25fZW1haWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKZcIjtcbn1cblxuLmljb25fcGFzc3dvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKdcIjtcbn1cblxuLmljb25fYWRkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSoXCI7XG59XG5cbi5pY29uX3NpZ25fb3V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSpXCI7XG59XG5cbi5pY29uX3Byb2ZpbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKpcIjtcbn1cblxuLmljb25fd2FybmluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eq1wiO1xufVxuXG4uaWNvbl9jYW1lcmE6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKxcIjtcbn1cblxuLmljb24xLXVwbG9hZC10by1jbG91ZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kgFwiO1xufVxuXG4uaWNvbjEtY2xvdWQtY29tcHV0aW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSBXCI7XG59XG5cbi5pY29uMS1kYXNoYm9hcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIJcIjtcbn1cblxuLmljb24xLWZpbHRlci1yZXN1bHRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSDXCI7XG59XG5cbi5pY29uMS1idWlsZGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6khFwiO1xufVxuXG4uaWNvbjEtbm91bl9DYWxlbmRhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6khVwiO1xufVxuXG4uaWNvbjEtbm91bl9Qcm9qZWN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSGXCI7XG59XG5cbi5pY29uMS1ub3VuX1VwbG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kh1wiO1xufVxuXG4uaWNvbjEtbm91bl91c2VyczpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kiFwiO1xufVxuXG4uaWNvbjEtbm91bl9Xb3JrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSJXCI7XG59XG5cbi5pY29uMS1QYXRoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSKXCI7XG59XG5cbiNsZWF2ZXN0YXR1cyB7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbi5sZWF2ZV9fc3RhdHVzIHtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5sZWF2ZV9fc3RhdHVzIGg1OjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EgVwiO1xufVxuLmxlYXZlX19zdGF0dXMgaDUsXG4ubGVhdmVfX3N0YXR1cyBoNiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmVkaXRfX2xlYXZlLS1zdGF0dXM6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZWRpdF9fbGVhdmUtLXN0YXR1czpob3Zlcjo6YmVmb3JlIHtcbiAgY29sb3I6ICM2NzQ3RDQ7XG59XG5cbi50ZXh0LWNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5sZWF2ZURhdGFfX3RhYmxlIHRib2R5IHRyOm50aC1jaGlsZCgyKSwgLmxlYXZlRGF0YV9fdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDMpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiJHdoaXRlOiNmZmZmZmY7XG4kYm9yZGVyLWNvbG9yOiNERURFREU7XG4kYm9yZGVyLWxpZ2h0OiNFOEU4RTg7XG4kbGlnaHQtYmx1ZTojRjFGN0ZCO1xuJGRhcmtQaW5rOiM5QTQ1RDI7XG4kZGFya0JsdWU6IzY3NDdENDtcbiR0ZXh0LWNvbG9yOiM0MDQwNDA7XG4kcHJpbWFyeUNvbG9yOiM3MTUxREM7XG4kZ3JheTojNkU2RTZFO1xuJGJsYWNrOiMwMDAwMDA7XG4kZGFya1JlZDojRTMyQzJDO1xuJG9yYW5nZTojRkY2QzAwO1xuJGJyb3duOiNBQTM0N0I7XG4kYXJyb3dHcmF5OiM4NDg0ODQ7XG4kYmx1ZTogIzFjOTFmZjtcbiRyb3NlOiNGOTRGODk7XG4kbmVwdHVuZTojN0NBMUIxO1xuJHllbGxvdzojRTI4NjBEO1xuJGNvbG9yLWJhY2s6ICNlZmVmZWY7XG4kY29sb3ItYmFyOiAjNjc0N0Q0O1xuXG5bY2xhc3NePVwiaWNvbl9cIl0sXG5bY2xhc3MqPVwiIGljb25fXCJdIHtcbiAgZm9udC1mYW1pbHk6ICdjaHV0dGknICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuW2NsYXNzXj1cImljb24xLVwiXSwgW2NsYXNzKj1cIiBpY29uMS1cIl0ge1xuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICBmb250LWZhbWlseTogJ2ljb21vb24nICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5cbkBtaXhpbiBiZy1ncmFkaWVudCgpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsJGRhcmtQaW5rIDIwJSwgJGRhcmtCbHVlIDgwJSk7XG59XG5AbWl4aW4gdGhlbWUtYnRuKCl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya0JsdWUgMCUsICRkYXJrUGluayAxMDAlKTtcbn1cbkBtaXhpbiBiZy1ibGFjaygpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwkYmxhY2sgMCUsICMxMjEyMTMgMTAwJSk7XG59XG5AbWl4aW4gZm9udC1jb2xvcigpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCRkYXJrUGluayAyMCUsICRkYXJrQmx1ZSA4MCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya1BpbmsgMjAlLCAkZGFya0JsdWUgODAlKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7ICAgIFxuICB9XG4gIEBtaXhpbiAgYm9yZGVyLWJvdHRvbSgpIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogJGRhcmtCbHVlO1xuICAgIH1cbiAgfVxuXG5AbWl4aW4gdXNlckltZyAoKXtcblxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAuMTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuJWJ0bi1zaGFyZWQge1xuICAgIG1pbi1oZWlnaHQ6IDU1cHg7XG4gIH1cblxuICAuaWNvbl9kYXNoYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDBcIn0uaWNvbl9sZWF2ZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwMVwifS5pY29uX2F0dGVuZGFuY2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDJcIn0uaWNvbl90aW1lc2hlZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDNcIn0uaWNvbl9hdHRlbmRhbmNlMTpiZWZvcmV7Y29udGVudDpcIlxcZTEwNFwifS5pY29uX3N1cHBvcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDVcIn0uaWNvbl9xdWlja19hcHBseTpiZWZvcmV7Y29udGVudDpcIlxcZTEwNlwifS5pY29uX2xlYXZlX2Jhbms6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDdcIn0uaWNvbl9jb2xsYXBzZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwOFwifS5pY29uX2V4cGFuZDpiZWZvcmV7Y29udGVudDpcIlxcZTEwOVwifS5pY29uX2ZpbHRlcjpiZWZvcmV7Y29udGVudDpcIlxcZTEwYVwifS5pY29uX2RhdGVfcGlja2VyOmJlZm9yZXtjb250ZW50OlwiXFxlMTBiXCJ9Lmljb25fYXJyb3dfdGhpY2tfbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZTEwY1wifS5pY29uX2Fycm93X3RoaWNrX3JpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxlMTBkXCJ9Lmljb25fYXJyb3dfdGhpbl9sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxlMTBlXCJ9Lmljb25fYXJyb3dfdGhpbl9yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZTEwZlwifS5pY29uX2hvbGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTBcIn0uaWNvbl9jYW5jZWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTFcIn0uaWNvbl90aWNrOmJlZm9yZXtjb250ZW50OlwiXFxlMTEyXCJ9Lmljb25fbG9jazpiZWZvcmV7Y29udGVudDpcIlxcZTExM1wifS5pY29uX2VkaXRfb3V0bGluZTpiZWZvcmV7Y29udGVudDpcIlxcZTExNFwifS5pY29uX2VkaXRfZmlsbGVkOmJlZm9yZXtjb250ZW50OlwiXFxlMTE1XCJ9Lmljb25fZGVsZXRlX2ZpbGxlZDpiZWZvcmV7Y29udGVudDpcIlxcZTExNlwifS5pY29uX3NlYXJjaDpiZWZvcmV7Y29udGVudDpcIlxcZTExN1wifS5pY29uX25vdGlmaWNhdGlvbnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMThcIn0uaWNvbl90aW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTE5XCJ9Lmljb25fZGF0ZV90aW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTFhXCJ9Lmljb25fcHJvYmF0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxlMTFiXCJ9Lmljb25fY29uZmlybWVkOmJlZm9yZXtjb250ZW50OlwiXFxlMTFjXCJ9Lmljb25faG9saWRheXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWRcIn0uaWNvbl9wcmlvcml0eV91cmdlbnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWVcIn0uaWNvbl9hcnJvd191cDpiZWZvcmV7Y29udGVudDpcIlxcZTExZlwifS5pY29uX2Fycm93X2Rvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjBcIn0uaWNvbl9zaG93X3Bhc3N3b3JkOmJlZm9yZXtjb250ZW50OlwiXFxlMTIxXCJ9Lmljb25faGlkZV9wYXNzd29yZDpiZWZvcmV7Y29udGVudDpcIlxcZTEyMlwifS5pY29uX25hbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjNcIn0uaWNvbl9vcmdhbmlzYXRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjRcIn0uaWNvbl9waG9uZTpiZWZvcmV7Y29udGVudDpcIlxcZTEyNVwifS5pY29uX2VtYWlsOmJlZm9yZXtjb250ZW50OlwiXFxlMTI2XCJ9Lmljb25fcGFzc3dvcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjdcIn0uaWNvbl9hZGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjhcIn0uaWNvbl9zaWduX291dDpiZWZvcmV7Y29udGVudDpcIlxcZTEyOVwifS5pY29uX3Byb2ZpbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMmFcIn0uaWNvbl93YXJuaW5nOmJlZm9yZXtjb250ZW50OlwiXFxlMTJiXCJ9Lmljb25fY2FtZXJhOmJlZm9yZXtjb250ZW50OlwiXFxlMTJjXCJ9XG5cbiAgLmljb24xLXVwbG9hZC10by1jbG91ZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAwXCI7XG4gIH1cbiAgLmljb24xLWNsb3VkLWNvbXB1dGluZzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAxXCI7XG4gIH1cbiAgLmljb24xLWRhc2hib2FyZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAyXCI7XG4gIH1cbiAgLmljb24xLWZpbHRlci1yZXN1bHRzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDNcIjtcbiAgfVxuICAuaWNvbjEtYnVpbGRpbmc6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwNFwiO1xuICB9XG4gIC5pY29uMS1ub3VuX0NhbGVuZGFyOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDVcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9Qcm9qZWN0OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDZcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9VcGxvYWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwN1wiO1xuICB9XG4gIC5pY29uMS1ub3VuX3VzZXJzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDhcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9Xb3JrOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDlcIjtcbiAgfVxuICAuaWNvbjEtUGF0aDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTBhXCI7XG4gIH0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9taXhpbi5zY3NzJztcblxuI2xlYXZlc3RhdHVzXG57XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG4ubGVhdmVfX3N0YXR1cyB7XG5cbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcblxuICBoNSB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXFxlMTAxXCI7XG4gICAgfVxuICB9XG5cbiAgaDUsXG4gIGg2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZWRpdF9fbGVhdmUtLXN0YXR1cyB7XG4gICY6OmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbG9yOiAkZGFya0JsdWU7XG4gICAgfVxuICB9XG59XG5cbi50ZXh0LWNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5sZWF2ZURhdGFfX3RhYmxlIFxue1xuIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSBcbiB7XG4gIHRib2R5IHRyIFxuICB7XG4gICAgJjpudGgtY2hpbGQoMiksICAmOm50aC1jaGlsZCgzKSBcbiAgICB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfSBcbiB9XG59XG5cbiIsIkBtaXhpbiBicmVha3BvaW50KCRwb2ludCkge1xuICAgIEBpZiAkcG9pbnQ9PWJpZy1kZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT1kZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT1sYXB0b3Age1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PWFwcGxlLWxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBlbHNlIGlmICRwb2ludD09dGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT10YWJsZXQge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT10YWJsZXQtcyB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgQGVsc2UgaWYgJHBvaW50PT1tb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG5cbiAgICB9XG4gICBcblxufVxuXG5cblxuQG1peGluIGdyYWRpZW50LXRleHQoJGFuZ2xlOiA0NWRlZywgJGNvbG9yOiAjNjc0N0Q0LCAkYW1vdW50OiAzNSUpIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yLCBhZGp1c3QtaHVlKCRjb2xvciwgJGFtb3VudCkpO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgICAtbW96LXRyYW5zaXRpb246ICAgICR0cmFuc2l0aW9uO1xuICAgIC1vLXRyYW5zaXRpb246ICAgICAgJHRyYW5zaXRpb247XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICB0cmFuc2l0aW9uOiAgICAgICAgICR0cmFuc2l0aW9uO1xufVxuICAiXX0= */"];



/***/ }),

/***/ "./src/app/user-module/dashboard/leave-status/leave-status.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/user-module/dashboard/leave-status/leave-status.component.ts ***!
  \******************************************************************************/
/*! exports provided: LeaveStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveStatusComponent", function() { return LeaveStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/urlConstant */ "./src/app/services/urlConstant.ts");


class LeaveStatusComponent {
    constructor(urlconstant, genericservice, encryptdecryptlocalstorage, dataSharingService) {
        this.urlconstant = urlconstant;
        this.genericservice = genericservice;
        this.encryptdecryptlocalstorage = encryptdecryptlocalstorage;
        this.dataSharingService = dataSharingService;
        this.dashBoardPaginationView = true;
        this.leavestatusUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].leavestatusApi;
        this.displayHide = false;
        this.leavestausList = [];
        this.currentPage = 1;
        this.totalPages = 1;
        this.limit = 10;
        this.paginationShowLimit = false;
        this.perpageOption = [
            //{ value: '3', label: '3' },
            { value: '10', label: '10' },
            { value: '20', label: '20' },
            { value: '50', label: '50' },
            { value: '100', label: '100' },
            { value: '500', label: '500' },
        ];
        this.selectedItemsPerPage = 10;
        this.status = "";
        this.pagination = false;
        this.isData = false;
        this.dataSharingService.appliedFlagObs.subscribe(data => {
            console.log('called..........');
            if (data == 'true') {
                console.log('called..........');
                this.leavestatus();
            }
        });
    }
    ngOnInit() {
        this.leavestatus();
    }
    leavestatus() {
        let payloadReqObj = {
            "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            //"reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
            "status": null
        };
        this.start = 0;
        this.limit = this.selectedItemsPerPage;
        return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
            if (response.status.success === 'Success') {
                this.isData = true;
                //this.leavestausList = response.data;
                this.leavestausList = this.leaveList(response);
                this.totalCount = response.totalResult;
                this.findItemsPerPage();
            }
            else {
                this.isData = false;
            }
        }, error => {
            console.log(error);
        });
    }
    leaveList(response) {
        var i;
        var list = [];
        for (i = 0; i < response.data.length; i++) {
            var responseObj = response.data[i];
            responseObj.permissionDuration = this.duration(responseObj);
            list.push(responseObj);
        }
        return list;
    }
    findItemsPerPage() {
        this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);
    }
    goToPageNo(event) {
        console.log('on page change');
    }
    goToNext(event) {
        this.currentPage++;
        let payloadReqObj = {
            "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            //"reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
            "status": null
        };
        this.start = this.start + this.limit;
        this.limit = this.selectedItemsPerPage;
        return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
            if (response.status.success === 'Success') {
                this.isData = true;
                this.leavestausList = this.leaveList(response);
                this.totalCount = response.totalResult;
                this.findItemsPerPage();
            }
            else {
                this.isData = false;
            }
        });
    }
    goToPrev() {
        this.currentPage--;
        let payloadReqObj = {
            "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            //"reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
            "status": null
        };
        this.start = this.start - this.limit;
        this.limit = this.selectedItemsPerPage;
        return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
            if (response.status.success === 'Success') {
                this.isData = true;
                this.leavestausList = this.leaveList(response);
                this.totalCount = response.totalResult;
                this.findItemsPerPage();
            }
            else {
                this.isData = false;
            }
        });
    }
    changeItemPerPage(event) {
        this.currentPage = 1;
        console.log('event printed' + event);
        this.selectedItemsPerPage = parseInt(event);
        this.refreshList();
    }
    refreshList() {
        let payloadReqObj = {
            "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            //"reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
            "status": null
        };
        this.start = 0;
        this.limit = this.selectedItemsPerPage;
        return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
            if (response.status.success === 'Success') {
                this.isData = true;
                this.leavestausList = this.leaveList(response);
                this.totalCount = response.totalResult;
                this.findItemsPerPage();
            }
            else {
                this.isData = false;
            }
        });
    }
    duration(responseObject) {
        if (responseObject.leaveTypeCode == "PER") {
            responseObject.permissionDuration = responseObject.permissionDuration.toString();
            if (responseObject.permissionDuration.includes('.')) {
                let hour = responseObject.permissionDuration.split('.')[0];
                let minutes = responseObject.permissionDuration.split('.')[1];
                if (hour.length > 0) {
                    if (minutes.length > 0) {
                        if (hour === '0' || hour === 0) {
                            minutes = minutes.length == 1 ? minutes + '0' + ' ' + 'mins' : minutes === '01' ? minutes + ' ' + 'min' : minutes + ' ' + 'mins';
                            ;
                            return minutes;
                        }
                        else {
                            hour = hour === '1' || hour === 1 ? hour + ' ' + 'hr' : hour + ' ' + 'hrs';
                            minutes = minutes.length == 1 ? minutes + '0' + ' ' + 'mins' : minutes === '01' ? minutes + ' ' + 'min' : minutes + ' ' + 'mins';
                            ;
                            return hour + ' ' + minutes;
                        }
                    }
                }
            }
            else {
                responseObject.permissionDuration = responseObject.permissionDuration === '1' || responseObject.permissionDuration === 1 ? responseObject.permissionDuration + ' ' + 'hr' : responseObject.permissionDuration + ' ' + 'hrs';
                return responseObject.permissionDuration;
            }
            // hour = hour.length > 1 : hour !== '0' ?  
            // return responseObject.permissionDuration + " hrs";
        }
        else if (responseObject.leaveTypeCode == "OD" && (responseObject.fromDate == responseObject.toDate)) {
            responseObject.permissionDuration = responseObject.permissionDuration.toString();
            if (responseObject.permissionDuration.includes('.')) {
                let hour = responseObject.permissionDuration.split('.')[0];
                let minutes = responseObject.permissionDuration.split('.')[1];
                if (hour.length > 0) {
                    if (minutes.length > 0) {
                        if (hour === '0' || hour === 0) {
                            minutes = minutes.length == 1 ? minutes + '0' + ' ' + 'mins' : minutes === '01' ? minutes + ' ' + 'min' : minutes + ' ' + 'mins';
                            return minutes;
                        }
                        else {
                            hour = hour === '1' || hour === 1 ? hour + ' ' + 'hr' : hour + ' ' + 'hrs';
                            minutes = minutes.length == 1 ? minutes + '0' + ' ' + 'mins' : minutes === '01' ? minutes + ' ' + 'min' : minutes + ' ' + 'mins';
                            return hour + ' ' + minutes;
                        }
                    }
                }
            }
            else {
                if (responseObject.isFullDay) {
                    return responseObject.permissionDuration + ' ' + 'day';
                }
                else {
                    responseObject.permissionDuration = responseObject.permissionDuration === '1' || responseObject.permissionDuration === 1 ? responseObject.permissionDuration + ' ' + 'hr' : responseObject.permissionDuration + ' ' + 'hrs';
                    return responseObject.permissionDuration;
                }
            }
            // return responseObject.permissionDuration + " hrs";
        }
        else {
            var noOfDays = responseObject.permissionDuration;
            var noOfWeek = Math.trunc(noOfDays / 7);
            var remainder = noOfDays % 7;
            var days;
            if (noOfWeek >= 1) {
                if (remainder > 0) {
                    days = remainder == 1 ? remainder + " day" : remainder + " days";
                }
                else {
                    days = "";
                }
                return noOfWeek > 1 ? noOfWeek + " weeks " + days : noOfWeek + " week " + days;
            }
            else if (responseObject.leaveDescription != "Permission" && noOfDays > 1) {
                return noOfDays + " days";
            }
            else {
                return noOfDays + " day";
            }
        }
    }
}


/***/ }),

/***/ "./src/app/user-module/dashboard/leavestatus/leavestatus.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/user-module/dashboard/leavestatus/leavestatus.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_LeavestatusComponent, View_LeavestatusComponent_0, View_LeavestatusComponent_Host_0, LeavestatusComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LeavestatusComponent", function() { return RenderType_LeavestatusComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LeavestatusComponent_0", function() { return View_LeavestatusComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LeavestatusComponent_Host_0", function() { return View_LeavestatusComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavestatusComponentNgFactory", function() { return LeavestatusComponentNgFactory; });
/* harmony import */ var _leavestatus_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leavestatus.component.scss.shim.ngstyle */ "./src/app/user-module/dashboard/leavestatus/leavestatus.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chutti-pagination/chutti-pagination.component.ngfactory */ "./src/app/user-module/chutti-pagination/chutti-pagination.component.ngfactory.js");
/* harmony import */ var _chutti_pagination_chutti_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chutti-pagination/chutti-pagination.component */ "./src/app/user-module/chutti-pagination/chutti-pagination.component.ts");
/* harmony import */ var _node_modules_ngx_loading_bar_core_ngx_loading_bar_core_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/@ngx-loading-bar/core/ngx-loading-bar-core.ngfactory */ "./node_modules/@ngx-loading-bar/core/ngx-loading-bar-core.ngfactory.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm2015/ngx-loading-bar-core.js");
/* harmony import */ var _leavestatus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leavestatus.component */ "./src/app/user-module/dashboard/leavestatus/leavestatus.component.ts");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/urlConstant */ "./src/app/services/urlConstant.ts");
/* harmony import */ var _services_genericservices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/genericservices */ "./src/app/services/genericservices.ts");
/* harmony import */ var _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/encrypt-decrypt-localstorage.service */ "./src/app/services/encrypt-decrypt-localstorage.service.ts");
/* harmony import */ var _services_dataSharing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/dataSharing.service */ "./src/app/services/dataSharing.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













var styles_LeavestatusComponent = [_leavestatus_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LeavestatusComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LeavestatusComponent, data: {} });

function View_LeavestatusComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "th", [["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Actions"]))], null, null); }
function View_LeavestatusComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [["class", "col-md-3"], ["data-th", "Reason"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.reason; _ck(_v, 1, 0, currVal_0); }); }
function View_LeavestatusComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [["class", "col-md-3"], ["data-th", "Reason"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Not Feeling well"]))], null, null); }
function View_LeavestatusComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [["class", "leave_approved text-capitalize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "span", [["class", "icon_tick"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 2, 0, currVal_0); }); }
function View_LeavestatusComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "leave_pending text-capitalize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 1, 0, currVal_0); }); }
function View_LeavestatusComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "leave_notApproved text-capitalize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Not Approved "]))], null, null); }
function View_LeavestatusComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "leave_notApproved text-capitalize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 1, 0, currVal_0); }); }
function View_LeavestatusComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [["class", "col-md-2"], ["data-th", "Remarks"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.remarks; _ck(_v, 1, 0, currVal_0); }); }
function View_LeavestatusComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [["class", "col-md-2"], ["data-th", "Actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], null, null); }
function View_LeavestatusComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "td", [["data-th", "Actions"]], null, null, null, null, null))], null, null); }
function View_LeavestatusComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 29, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [["class", "col-md-2"], ["data-th", "Type"], ["scope", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "td", [["class", "col-md-1"], ["data-th", "From"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "td", [["class", "col-md-1"], ["data-th", "To"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "td", [["class", "col-md-1"], ["data-th", "Duration"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 8, "td", [["class", "col-md-2"], ["data-th", "Status"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = (_v.context.$implicit.reason != null); _ck(_v, 12, 0, currVal_4); var currVal_5 = (_v.context.$implicit.reason == null); _ck(_v, 14, 0, currVal_5); var currVal_6 = (_v.context.$implicit.status == "APPROVED"); _ck(_v, 17, 0, currVal_6); var currVal_7 = (_v.context.$implicit.status == "PENDING"); _ck(_v, 19, 0, currVal_7); var currVal_8 = (_v.context.$implicit.status == "REJECTED"); _ck(_v, 21, 0, currVal_8); var currVal_9 = (_v.context.$implicit.status == "ONHOLD"); _ck(_v, 23, 0, currVal_9); var currVal_10 = (_v.context.$implicit.remarks != null); _ck(_v, 25, 0, currVal_10); var currVal_11 = (_v.context.$implicit.remarks == null); _ck(_v, 27, 0, currVal_11); var currVal_12 = _co.displayHide; _ck(_v, 29, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.leaveTypeDescription; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.fromDate, "dd MMM yy")); _ck(_v, 4, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.toDate, "dd MMM yy")); _ck(_v, 7, 0, currVal_2); var currVal_3 = _v.context.$implicit.permissionDuration; _ck(_v, 10, 0, currVal_3); }); }
function View_LeavestatusComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tbody", [["class", "scroll"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.leavestausList; _ck(_v, 2, 0, currVal_0); }, null); }
function View_LeavestatusComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "text-center w-100 py-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Records Found!"]))], null, null); }
function View_LeavestatusComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", " "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.value; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.value; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.label; _ck(_v, 3, 0, currVal_2); }); }
function View_LeavestatusComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "table__bottom text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "span", [["class", "items__nos"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "form-group page__section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [["for", "pageNo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Items per page:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 7, "select", [["class", "form-control"], ["id", "pageNo"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.selectedItemsPerPage = $event) !== false);
        ad = (pd_2 && ad);
    } if (("ngModelChange" === en)) {
        var pd_3 = (_co.changeItemPerPage($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "app-chutti-pagination", [], null, [[null, "goPrev"], [null, "goNext"], [null, "onPage"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("goPrev" === en)) {
        var pd_0 = (_co.goToPrev() !== false);
        ad = (pd_0 && ad);
    } if (("goNext" === en)) {
        var pd_1 = (_co.goToNext() !== false);
        ad = (pd_1 && ad);
    } if (("onPage" === en)) {
        var pd_2 = (_co.goToPageNo($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ChuttiPaginationComponent_0"], _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ChuttiPaginationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, _chutti_pagination_chutti_pagination_component__WEBPACK_IMPORTED_MODULE_5__["ChuttiPaginationComponent"], [], { currentPage: [0, "currentPage"], count: [1, "count"], pagesToShow: [2, "pagesToShow"] }, { goPrev: "goPrev", goNext: "goNext" })], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.selectedItemsPerPage; _ck(_v, 8, 0, currVal_7); var currVal_8 = _co.perpageOption; _ck(_v, 12, 0, currVal_8); var currVal_9 = _co.currentPage; var currVal_10 = _co.totalCount; var currVal_11 = _co.totalPages; _ck(_v, 14, 0, currVal_9, currVal_10, currVal_11); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_LeavestatusComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "ngx-loading-bar", [], [[2, "loading-bar-fixed", null]], null, null, _node_modules_ngx_loading_bar_core_ngx_loading_bar_core_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_LoadingBarComponent_0"], _node_modules_ngx_loading_bar_core_ngx_loading_bar_core_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_LoadingBarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__["LoadingBarComponent"], [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__["LoadingBarService"]], { includeSpinner: [0, "includeSpinner"], color: [1, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 32, "div", [["class", "leave__status rounded"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Leave Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 29, "div", [["class", "white__border inner__section support__page rounded h-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Leave Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 26, "div", [["class", "leave__table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 20, "table", [["class", "table table-fixed rwd-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 17, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 16, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "th", [["class", "col-md-2"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "th", [["class", "col-md-1"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["From"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "th", [["class", "col-md-1"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "th", [["class", "col-md-1"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Duration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "th", [["class", "col-md-3"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reason"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "th", [["class", "col-md-2"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "th", [["class", "col-md-2"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Remarks"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeavestatusComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = false; var currVal_2 = "#6747D4"; _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_3 = _co.displayHide; _ck(_v, 30, 0, currVal_3); var currVal_4 = _co.isData; _ck(_v, 32, 0, currVal_4); var currVal_5 = !_co.isData; _ck(_v, 34, 0, currVal_5); var currVal_6 = (_co.isData && (_co.totalCount > 10)); _ck(_v, 36, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).fixed; _ck(_v, 2, 0, currVal_0); }); }
function View_LeavestatusComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-leavestatus", [], null, null, null, View_LeavestatusComponent_0, RenderType_LeavestatusComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _leavestatus_component__WEBPACK_IMPORTED_MODULE_8__["LeavestatusComponent"], [_services_urlConstant__WEBPACK_IMPORTED_MODULE_9__["UrlConstant"], _services_genericservices__WEBPACK_IMPORTED_MODULE_10__["Genericservice"], _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_11__["EncryptDecryptLocalStorageService"], _services_dataSharing_service__WEBPACK_IMPORTED_MODULE_12__["DataSharingService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LeavestatusComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-leavestatus", _leavestatus_component__WEBPACK_IMPORTED_MODULE_8__["LeavestatusComponent"], View_LeavestatusComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/user-module/dashboard/leavestatus/leavestatus.component.scss.shim.ngstyle.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/user-module/dashboard/leavestatus/leavestatus.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@charset \"UTF-8\";\n[class^=icon_][_ngcontent-%COMP%], [class*=\" icon_\"][_ngcontent-%COMP%] {\n  font-family: \"chutti\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[class^=icon1-][_ngcontent-%COMP%], [class*=\" icon1-\"][_ngcontent-%COMP%] {\n  \n  font-family: \"icomoon\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon_dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE100\";\n}\n.icon_leave[_ngcontent-%COMP%]:before {\n  content: \"\uE101\";\n}\n.icon_attendance[_ngcontent-%COMP%]:before {\n  content: \"\uE102\";\n}\n.icon_timesheet[_ngcontent-%COMP%]:before {\n  content: \"\uE103\";\n}\n.icon_attendance1[_ngcontent-%COMP%]:before {\n  content: \"\uE104\";\n}\n.icon_support[_ngcontent-%COMP%]:before {\n  content: \"\uE105\";\n}\n.icon_quick_apply[_ngcontent-%COMP%]:before {\n  content: \"\uE106\";\n}\n.icon_leave_bank[_ngcontent-%COMP%]:before {\n  content: \"\uE107\";\n}\n.icon_collapse[_ngcontent-%COMP%]:before {\n  content: \"\uE108\";\n}\n.icon_expand[_ngcontent-%COMP%]:before {\n  content: \"\uE109\";\n}\n.icon_filter[_ngcontent-%COMP%]:before {\n  content: \"\uE10A\";\n}\n.icon_date_picker[_ngcontent-%COMP%]:before {\n  content: \"\uE10B\";\n}\n.icon_arrow_thick_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10C\";\n}\n.icon_arrow_thick_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10D\";\n}\n.icon_arrow_thin_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10E\";\n}\n.icon_arrow_thin_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10F\";\n}\n.icon_hold[_ngcontent-%COMP%]:before {\n  content: \"\uE110\";\n}\n.icon_cancel[_ngcontent-%COMP%]:before {\n  content: \"\uE111\";\n}\n.icon_tick[_ngcontent-%COMP%]:before {\n  content: \"\uE112\";\n}\n.icon_lock[_ngcontent-%COMP%]:before {\n  content: \"\uE113\";\n}\n.icon_edit_outline[_ngcontent-%COMP%]:before {\n  content: \"\uE114\";\n}\n.icon_edit_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE115\";\n}\n.icon_delete_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE116\";\n}\n.icon_search[_ngcontent-%COMP%]:before {\n  content: \"\uE117\";\n}\n.icon_notifications[_ngcontent-%COMP%]:before {\n  content: \"\uE118\";\n}\n.icon_time[_ngcontent-%COMP%]:before {\n  content: \"\uE119\";\n}\n.icon_date_time[_ngcontent-%COMP%]:before {\n  content: \"\uE11A\";\n}\n.icon_probation[_ngcontent-%COMP%]:before {\n  content: \"\uE11B\";\n}\n.icon_confirmed[_ngcontent-%COMP%]:before {\n  content: \"\uE11C\";\n}\n.icon_holidays[_ngcontent-%COMP%]:before {\n  content: \"\uE11D\";\n}\n.icon_priority_urgent[_ngcontent-%COMP%]:before {\n  content: \"\uE11E\";\n}\n.icon_arrow_up[_ngcontent-%COMP%]:before {\n  content: \"\uE11F\";\n}\n.icon_arrow_down[_ngcontent-%COMP%]:before {\n  content: \"\uE120\";\n}\n.icon_show_password[_ngcontent-%COMP%]:before {\n  content: \"\uE121\";\n}\n.icon_hide_password[_ngcontent-%COMP%]:before {\n  content: \"\uE122\";\n}\n.icon_name[_ngcontent-%COMP%]:before {\n  content: \"\uE123\";\n}\n.icon_organisation[_ngcontent-%COMP%]:before {\n  content: \"\uE124\";\n}\n.icon_phone[_ngcontent-%COMP%]:before {\n  content: \"\uE125\";\n}\n.icon_email[_ngcontent-%COMP%]:before {\n  content: \"\uE126\";\n}\n.icon_password[_ngcontent-%COMP%]:before {\n  content: \"\uE127\";\n}\n.icon_add[_ngcontent-%COMP%]:before {\n  content: \"\uE128\";\n}\n.icon_sign_out[_ngcontent-%COMP%]:before {\n  content: \"\uE129\";\n}\n.icon_profile[_ngcontent-%COMP%]:before {\n  content: \"\uE12A\";\n}\n.icon_warning[_ngcontent-%COMP%]:before {\n  content: \"\uE12B\";\n}\n.icon_camera[_ngcontent-%COMP%]:before {\n  content: \"\uE12C\";\n}\n.icon1-upload-to-cloud[_ngcontent-%COMP%]:before {\n  content: \"\uE900\";\n}\n.icon1-cloud-computing[_ngcontent-%COMP%]:before {\n  content: \"\uE901\";\n}\n.icon1-dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE902\";\n}\n.icon1-filter-results[_ngcontent-%COMP%]:before {\n  content: \"\uE903\";\n}\n.icon1-building[_ngcontent-%COMP%]:before {\n  content: \"\uE904\";\n}\n.icon1-noun_Calendar[_ngcontent-%COMP%]:before {\n  content: \"\uE905\";\n}\n.icon1-noun_Project[_ngcontent-%COMP%]:before {\n  content: \"\uE906\";\n}\n.icon1-noun_Upload[_ngcontent-%COMP%]:before {\n  content: \"\uE907\";\n}\n.icon1-noun_users[_ngcontent-%COMP%]:before {\n  content: \"\uE908\";\n}\n.icon1-noun_Work[_ngcontent-%COMP%]:before {\n  content: \"\uE909\";\n}\n.icon1-Path[_ngcontent-%COMP%]:before {\n  content: \"\uE90A\";\n}\n#leavestatus[_ngcontent-%COMP%] {\n  transition: 1s;\n  transition-timing-function: ease-out;\n}\n.leave__status[_ngcontent-%COMP%] {\n  transition: 1s;\n  transition-timing-function: ease-out;\n  margin-bottom: 0;\n}\n.leave__status[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]::before {\n  content: \"\uE101\";\n}\n.leave__status[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .leave__status[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.edit__leave--status[_ngcontent-%COMP%]::before {\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n.edit__leave--status[_ngcontent-%COMP%]:hover::before {\n  color: #6747D4;\n}\n.text-capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tb2R1bGUvZGFzaGJvYXJkL2xlYXZlc3RhdHVzL2xlYXZlc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcmVudWdhL0Rlc2t0b3AvVlNDLXdvcmtzcGFjZS9Bbmd1bGFyIFdvcmtzcGFjZS9jbG91ZG5vdy1jaHV0dGktd2ViL3NyYy9hcHAvdXNlci1tb2R1bGUvZGFzaGJvYXJkL2xlYXZlc3RhdHVzL2xlYXZlc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcmVudWdhL0Rlc2t0b3AvVlNDLXdvcmtzcGFjZS9Bbmd1bGFyIFdvcmtzcGFjZS9jbG91ZG5vdy1jaHV0dGktd2ViL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ3FCaEI7O0VBRUUsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBRG5CRjtBQ3FCQTtFQUNFLCtFQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBRUEsc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FEbkJGO0FDb0VFO0VBQXVCLFlBQUE7QURoRXpCO0FDZ0V5QztFQUFtQixZQUFBO0FENUQ1RDtBQzRENEU7RUFBd0IsWUFBQTtBRHhEcEc7QUN3RG9IO0VBQXVCLFlBQUE7QURwRDNJO0FDb0QySjtFQUF5QixZQUFBO0FEaERwTDtBQ2dEb007RUFBcUIsWUFBQTtBRDVDek47QUM0Q3lPO0VBQXlCLFlBQUE7QUR4Q2xRO0FDd0NrUjtFQUF3QixZQUFBO0FEcEMxUztBQ29DMFQ7RUFBc0IsWUFBQTtBRGhDaFY7QUNnQ2dXO0VBQW9CLFlBQUE7QUQ1QnBYO0FDNEJvWTtFQUFvQixZQUFBO0FEeEJ4WjtBQ3dCd2E7RUFBeUIsWUFBQTtBRHBCamM7QUNvQmlkO0VBQThCLFlBQUE7QURoQi9lO0FDZ0IrZjtFQUErQixZQUFBO0FEWjloQjtBQ1k4aUI7RUFBNkIsWUFBQTtBRFIza0I7QUNRMmxCO0VBQThCLFlBQUE7QURKem5CO0FDSXlvQjtFQUFrQixZQUFBO0FEQTNwQjtBQ0EycUI7RUFBb0IsWUFBQTtBREkvckI7QUNKK3NCO0VBQWtCLFlBQUE7QURRanVCO0FDUml2QjtFQUFrQixZQUFBO0FEWW53QjtBQ1pteEI7RUFBMEIsWUFBQTtBRGdCN3lCO0FDaEI2ekI7RUFBeUIsWUFBQTtBRG9CdDFCO0FDcEJzMkI7RUFBMkIsWUFBQTtBRHdCajRCO0FDeEJpNUI7RUFBb0IsWUFBQTtBRDRCcjZCO0FDNUJxN0I7RUFBMkIsWUFBQTtBRGdDaDlCO0FDaENnK0I7RUFBa0IsWUFBQTtBRG9DbC9CO0FDcENrZ0M7RUFBdUIsWUFBQTtBRHdDemhDO0FDeEN5aUM7RUFBdUIsWUFBQTtBRDRDaGtDO0FDNUNnbEM7RUFBdUIsWUFBQTtBRGdEdm1DO0FDaER1bkM7RUFBc0IsWUFBQTtBRG9EN29DO0FDcEQ2cEM7RUFBNkIsWUFBQTtBRHdEMXJDO0FDeEQwc0M7RUFBc0IsWUFBQTtBRDREaHVDO0FDNURndkM7RUFBd0IsWUFBQTtBRGdFeHdDO0FDaEV3eEM7RUFBMkIsWUFBQTtBRG9FbnpDO0FDcEVtMEM7RUFBMkIsWUFBQTtBRHdFOTFDO0FDeEU4MkM7RUFBa0IsWUFBQTtBRDRFaDRDO0FDNUVnNUM7RUFBMEIsWUFBQTtBRGdGMTZDO0FDaEYwN0M7RUFBbUIsWUFBQTtBRG9GNzhDO0FDcEY2OUM7RUFBbUIsWUFBQTtBRHdGaC9DO0FDeEZnZ0Q7RUFBc0IsWUFBQTtBRDRGdGhEO0FDNUZzaUQ7RUFBaUIsWUFBQTtBRGdHdmpEO0FDaEd1a0Q7RUFBc0IsWUFBQTtBRG9HN2xEO0FDcEc2bUQ7RUFBcUIsWUFBQTtBRHdHbG9EO0FDeEdrcEQ7RUFBcUIsWUFBQTtBRDRHdnFEO0FDNUd1ckQ7RUFBb0IsWUFBQTtBRGdIM3NEO0FDOUdFO0VBQ0UsWUFBQTtBRGlISjtBQy9HRTtFQUNFLFlBQUE7QURrSEo7QUNoSEU7RUFDRSxZQUFBO0FEbUhKO0FDakhFO0VBQ0UsWUFBQTtBRG9ISjtBQ2xIRTtFQUNFLFlBQUE7QURxSEo7QUNuSEU7RUFDRSxZQUFBO0FEc0hKO0FDcEhFO0VBQ0UsWUFBQTtBRHVISjtBQ3JIRTtFQUNFLFlBQUE7QUR3SEo7QUN0SEU7RUFDRSxZQUFBO0FEeUhKO0FDdkhFO0VBQ0UsWUFBQTtBRDBISjtBQ3hIRTtFQUNFLFlBQUE7QUQySEo7QUV2UEE7RUFFRSxjQUFBO0VBQ0Esb0NBQUE7QUZ5UEY7QUV2UEE7RUFFRSxjQUFBO0VBQ0Esb0NBQUE7RUFhQSxnQkFBQTtBRjZPRjtBRXZQSTtFQUNFLFlBQUE7QUZ5UE47QUVyUEU7O0VBRUUscUJBQUE7QUZ1UEo7QUVoUEU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUZtUEo7QUUvT0k7RUFDRSxjRDlCSTtBRCtRVjtBRTVPQTtFQUNFLDBCQUFBO0FGK09GIiwiZmlsZSI6InNyYy9hcHAvdXNlci1tb2R1bGUvZGFzaGJvYXJkL2xlYXZlc3RhdHVzL2xlYXZlc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuW2NsYXNzXj1pY29uX10sXG5bY2xhc3MqPVwiIGljb25fXCJdIHtcbiAgZm9udC1mYW1pbHk6IFwiY2h1dHRpXCIgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbltjbGFzc149aWNvbjEtXSwgW2NsYXNzKj1cIiBpY29uMS1cIl0ge1xuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICBmb250LWZhbWlseTogXCJpY29tb29uXCIgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uaWNvbl9kYXNoYm9hcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIBcIjtcbn1cblxuLmljb25fbGVhdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIFcIjtcbn1cblxuLmljb25fYXR0ZW5kYW5jZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EglwiO1xufVxuXG4uaWNvbl90aW1lc2hlZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhINcIjtcbn1cblxuLmljb25fYXR0ZW5kYW5jZTE6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIRcIjtcbn1cblxuLmljb25fc3VwcG9ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EhVwiO1xufVxuXG4uaWNvbl9xdWlja19hcHBseTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EhlwiO1xufVxuXG4uaWNvbl9sZWF2ZV9iYW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSHXCI7XG59XG5cbi5pY29uX2NvbGxhcHNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSIXCI7XG59XG5cbi5pY29uX2V4cGFuZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EiVwiO1xufVxuXG4uaWNvbl9maWx0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIpcIjtcbn1cblxuLmljb25fZGF0ZV9waWNrZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhItcIjtcbn1cblxuLmljb25fYXJyb3dfdGhpY2tfbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EjFwiO1xufVxuXG4uaWNvbl9hcnJvd190aGlja19yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EjVwiO1xufVxuXG4uaWNvbl9hcnJvd190aGluX2xlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhI5cIjtcbn1cblxuLmljb25fYXJyb3dfdGhpbl9yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ej1wiO1xufVxuXG4uaWNvbl9ob2xkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSQXCI7XG59XG5cbi5pY29uX2NhbmNlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EkVwiO1xufVxuXG4uaWNvbl90aWNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSSXCI7XG59XG5cbi5pY29uX2xvY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJNcIjtcbn1cblxuLmljb25fZWRpdF9vdXRsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSUXCI7XG59XG5cbi5pY29uX2VkaXRfZmlsbGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSVXCI7XG59XG5cbi5pY29uX2RlbGV0ZV9maWxsZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJZcIjtcbn1cblxuLmljb25fc2VhcmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSXXCI7XG59XG5cbi5pY29uX25vdGlmaWNhdGlvbnM6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJhcIjtcbn1cblxuLmljb25fdGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EmVwiO1xufVxuXG4uaWNvbl9kYXRlX3RpbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJpcIjtcbn1cblxuLmljb25fcHJvYmF0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSbXCI7XG59XG5cbi5pY29uX2NvbmZpcm1lZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EnFwiO1xufVxuXG4uaWNvbl9ob2xpZGF5czpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EnVwiO1xufVxuXG4uaWNvbl9wcmlvcml0eV91cmdlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJ5cIjtcbn1cblxuLmljb25fYXJyb3dfdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJ9cIjtcbn1cblxuLmljb25fYXJyb3dfZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EoFwiO1xufVxuXG4uaWNvbl9zaG93X3Bhc3N3b3JkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oShXCI7XG59XG5cbi5pY29uX2hpZGVfcGFzc3dvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKJcIjtcbn1cblxuLmljb25fbmFtZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eo1wiO1xufVxuXG4uaWNvbl9vcmdhbmlzYXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKRcIjtcbn1cblxuLmljb25fcGhvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKVcIjtcbn1cblxuLmljb25fZW1haWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKZcIjtcbn1cblxuLmljb25fcGFzc3dvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKdcIjtcbn1cblxuLmljb25fYWRkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSoXCI7XG59XG5cbi5pY29uX3NpZ25fb3V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSpXCI7XG59XG5cbi5pY29uX3Byb2ZpbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKpcIjtcbn1cblxuLmljb25fd2FybmluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eq1wiO1xufVxuXG4uaWNvbl9jYW1lcmE6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKxcIjtcbn1cblxuLmljb24xLXVwbG9hZC10by1jbG91ZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kgFwiO1xufVxuXG4uaWNvbjEtY2xvdWQtY29tcHV0aW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSBXCI7XG59XG5cbi5pY29uMS1kYXNoYm9hcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIJcIjtcbn1cblxuLmljb24xLWZpbHRlci1yZXN1bHRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSDXCI7XG59XG5cbi5pY29uMS1idWlsZGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6khFwiO1xufVxuXG4uaWNvbjEtbm91bl9DYWxlbmRhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6khVwiO1xufVxuXG4uaWNvbjEtbm91bl9Qcm9qZWN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSGXCI7XG59XG5cbi5pY29uMS1ub3VuX1VwbG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kh1wiO1xufVxuXG4uaWNvbjEtbm91bl91c2VyczpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kiFwiO1xufVxuXG4uaWNvbjEtbm91bl9Xb3JrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSJXCI7XG59XG5cbi5pY29uMS1QYXRoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSKXCI7XG59XG5cbiNsZWF2ZXN0YXR1cyB7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbi5sZWF2ZV9fc3RhdHVzIHtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5sZWF2ZV9fc3RhdHVzIGg1OjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EgVwiO1xufVxuLmxlYXZlX19zdGF0dXMgaDUsXG4ubGVhdmVfX3N0YXR1cyBoNiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmVkaXRfX2xlYXZlLS1zdGF0dXM6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZWRpdF9fbGVhdmUtLXN0YXR1czpob3Zlcjo6YmVmb3JlIHtcbiAgY29sb3I6ICM2NzQ3RDQ7XG59XG5cbi50ZXh0LWNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iLCIkd2hpdGU6I2ZmZmZmZjtcbiRib3JkZXItY29sb3I6I0RFREVERTtcbiRib3JkZXItbGlnaHQ6I0U4RThFODtcbiRsaWdodC1ibHVlOiNGMUY3RkI7XG4kZGFya1Bpbms6IzlBNDVEMjtcbiRkYXJrQmx1ZTojNjc0N0Q0O1xuJHRleHQtY29sb3I6IzQwNDA0MDtcbiRwcmltYXJ5Q29sb3I6IzcxNTFEQztcbiRncmF5OiM2RTZFNkU7XG4kYmxhY2s6IzAwMDAwMDtcbiRkYXJrUmVkOiNFMzJDMkM7XG4kb3JhbmdlOiNGRjZDMDA7XG4kYnJvd246I0FBMzQ3QjtcbiRhcnJvd0dyYXk6Izg0ODQ4NDtcbiRibHVlOiAjMWM5MWZmO1xuJHJvc2U6I0Y5NEY4OTtcbiRuZXB0dW5lOiM3Q0ExQjE7XG4keWVsbG93OiNFMjg2MEQ7XG4kY29sb3ItYmFjazogI2VmZWZlZjtcbiRjb2xvci1iYXI6ICM2NzQ3RDQ7XG5cbltjbGFzc149XCJpY29uX1wiXSxcbltjbGFzcyo9XCIgaWNvbl9cIl0ge1xuICBmb250LWZhbWlseTogJ2NodXR0aScgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5bY2xhc3NePVwiaWNvbjEtXCJdLCBbY2xhc3MqPVwiIGljb24xLVwiXSB7XG4gIC8qIHVzZSAhaW1wb3J0YW50IHRvIHByZXZlbnQgaXNzdWVzIHdpdGggYnJvd3NlciBleHRlbnNpb25zIHRoYXQgY2hhbmdlIGZvbnRzICovXG4gIGZvbnQtZmFtaWx5OiAnaWNvbW9vbicgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcblxuICAvKiBCZXR0ZXIgRm9udCBSZW5kZXJpbmcgPT09PT09PT09PT0gKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cblxuQG1peGluIGJnLWdyYWRpZW50KCl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya1BpbmsgMjAlLCAkZGFya0JsdWUgODAlKTtcbn1cbkBtaXhpbiB0aGVtZS1idG4oKXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCRkYXJrQmx1ZSAwJSwgJGRhcmtQaW5rIDEwMCUpO1xufVxuQG1peGluIGJnLWJsYWNrKCl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCRibGFjayAwJSwgIzEyMTIxMyAxMDAlKTtcbn1cbkBtaXhpbiBmb250LWNvbG9yKCkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsJGRhcmtQaW5rIDIwJSwgJGRhcmtCbHVlIDgwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTIwZGVnLCRkYXJrUGluayAyMCUsICRkYXJrQmx1ZSA4MCUpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgICAgXG4gIH1cbiAgQG1peGluICBib3JkZXItYm90dG9tKCkge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkZGFya0JsdWU7XG4gICAgfVxuICB9XG5cbkBtaXhpbiB1c2VySW1nICgpe1xuXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4lYnRuLXNoYXJlZCB7XG4gICAgbWluLWhlaWdodDogNTVweDtcbiAgfVxuXG4gIC5pY29uX2Rhc2hib2FyZDpiZWZvcmV7Y29udGVudDpcIlxcZTEwMFwifS5pY29uX2xlYXZlOmJlZm9yZXtjb250ZW50OlwiXFxlMTAxXCJ9Lmljb25fYXR0ZW5kYW5jZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwMlwifS5pY29uX3RpbWVzaGVldDpiZWZvcmV7Y29udGVudDpcIlxcZTEwM1wifS5pY29uX2F0dGVuZGFuY2UxOmJlZm9yZXtjb250ZW50OlwiXFxlMTA0XCJ9Lmljb25fc3VwcG9ydDpiZWZvcmV7Y29udGVudDpcIlxcZTEwNVwifS5pY29uX3F1aWNrX2FwcGx5OmJlZm9yZXtjb250ZW50OlwiXFxlMTA2XCJ9Lmljb25fbGVhdmVfYmFuazpiZWZvcmV7Y29udGVudDpcIlxcZTEwN1wifS5pY29uX2NvbGxhcHNlOmJlZm9yZXtjb250ZW50OlwiXFxlMTA4XCJ9Lmljb25fZXhwYW5kOmJlZm9yZXtjb250ZW50OlwiXFxlMTA5XCJ9Lmljb25fZmlsdGVyOmJlZm9yZXtjb250ZW50OlwiXFxlMTBhXCJ9Lmljb25fZGF0ZV9waWNrZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMGJcIn0uaWNvbl9hcnJvd190aGlja19sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxlMTBjXCJ9Lmljb25fYXJyb3dfdGhpY2tfcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMGRcIn0uaWNvbl9hcnJvd190aGluX2xlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMGVcIn0uaWNvbl9hcnJvd190aGluX3JpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxlMTBmXCJ9Lmljb25faG9sZDpiZWZvcmV7Y29udGVudDpcIlxcZTExMFwifS5pY29uX2NhbmNlbDpiZWZvcmV7Y29udGVudDpcIlxcZTExMVwifS5pY29uX3RpY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTJcIn0uaWNvbl9sb2NrOmJlZm9yZXtjb250ZW50OlwiXFxlMTEzXCJ9Lmljb25fZWRpdF9vdXRsaW5lOmJlZm9yZXtjb250ZW50OlwiXFxlMTE0XCJ9Lmljb25fZWRpdF9maWxsZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTVcIn0uaWNvbl9kZWxldGVfZmlsbGVkOmJlZm9yZXtjb250ZW50OlwiXFxlMTE2XCJ9Lmljb25fc2VhcmNoOmJlZm9yZXtjb250ZW50OlwiXFxlMTE3XCJ9Lmljb25fbm90aWZpY2F0aW9uczpiZWZvcmV7Y29udGVudDpcIlxcZTExOFwifS5pY29uX3RpbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTlcIn0uaWNvbl9kYXRlX3RpbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWFcIn0uaWNvbl9wcm9iYXRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWJcIn0uaWNvbl9jb25maXJtZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWNcIn0uaWNvbl9ob2xpZGF5czpiZWZvcmV7Y29udGVudDpcIlxcZTExZFwifS5pY29uX3ByaW9yaXR5X3VyZ2VudDpiZWZvcmV7Y29udGVudDpcIlxcZTExZVwifS5pY29uX2Fycm93X3VwOmJlZm9yZXtjb250ZW50OlwiXFxlMTFmXCJ9Lmljb25fYXJyb3dfZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZTEyMFwifS5pY29uX3Nob3dfcGFzc3dvcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjFcIn0uaWNvbl9oaWRlX3Bhc3N3b3JkOmJlZm9yZXtjb250ZW50OlwiXFxlMTIyXCJ9Lmljb25fbmFtZTpiZWZvcmV7Y29udGVudDpcIlxcZTEyM1wifS5pY29uX29yZ2FuaXNhdGlvbjpiZWZvcmV7Y29udGVudDpcIlxcZTEyNFwifS5pY29uX3Bob25lOmJlZm9yZXtjb250ZW50OlwiXFxlMTI1XCJ9Lmljb25fZW1haWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjZcIn0uaWNvbl9wYXNzd29yZDpiZWZvcmV7Y29udGVudDpcIlxcZTEyN1wifS5pY29uX2FkZDpiZWZvcmV7Y29udGVudDpcIlxcZTEyOFwifS5pY29uX3NpZ25fb3V0OmJlZm9yZXtjb250ZW50OlwiXFxlMTI5XCJ9Lmljb25fcHJvZmlsZTpiZWZvcmV7Y29udGVudDpcIlxcZTEyYVwifS5pY29uX3dhcm5pbmc6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMmJcIn0uaWNvbl9jYW1lcmE6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMmNcIn1cblxuICAuaWNvbjEtdXBsb2FkLXRvLWNsb3VkOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDBcIjtcbiAgfVxuICAuaWNvbjEtY2xvdWQtY29tcHV0aW5nOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDFcIjtcbiAgfVxuICAuaWNvbjEtZGFzaGJvYXJkOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDJcIjtcbiAgfVxuICAuaWNvbjEtZmlsdGVyLXJlc3VsdHM6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwM1wiO1xuICB9XG4gIC5pY29uMS1idWlsZGluZzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA0XCI7XG4gIH1cbiAgLmljb24xLW5vdW5fQ2FsZW5kYXI6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwNVwiO1xuICB9XG4gIC5pY29uMS1ub3VuX1Byb2plY3Q6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwNlwiO1xuICB9XG4gIC5pY29uMS1ub3VuX1VwbG9hZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA3XCI7XG4gIH1cbiAgLmljb24xLW5vdW5fdXNlcnM6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwOFwiO1xuICB9XG4gIC5pY29uMS1ub3VuX1dvcms6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwOVwiO1xuICB9XG4gIC5pY29uMS1QYXRoOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MGFcIjtcbiAgfSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL21peGluLnNjc3MnO1xuXG4jbGVhdmVzdGF0dXNcbntcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbi5sZWF2ZV9fc3RhdHVzIHtcblxuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuXG4gIGg1IHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcXGUxMDFcIjtcbiAgICB9XG4gIH1cblxuICBoNSxcbiAgaDYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5lZGl0X19sZWF2ZS0tc3RhdHVzIHtcbiAgJjo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29sb3I6ICRkYXJrQmx1ZTtcbiAgICB9XG4gIH1cbn1cblxuLnRleHQtY2FwaXRhbGl6ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4iXX0= */"];



/***/ }),

/***/ "./src/app/user-module/dashboard/leavestatus/leavestatus.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user-module/dashboard/leavestatus/leavestatus.component.ts ***!
  \****************************************************************************/
/*! exports provided: LeavestatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavestatusComponent", function() { return LeavestatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/urlConstant */ "./src/app/services/urlConstant.ts");


class LeavestatusComponent {
    constructor(urlconstant, genericservice, encryptdecryptlocalstorage, dataSharingService) {
        this.urlconstant = urlconstant;
        this.genericservice = genericservice;
        this.encryptdecryptlocalstorage = encryptdecryptlocalstorage;
        this.dataSharingService = dataSharingService;
        // @Input('dashBoardPaginationView') dashBoardPaginationView: boolean = true;
        // @Input('showdashwhoseonleavepagination') showdashwhoseonleavepagination: boolean;
        this.leavestatusUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].leavestatusApi;
        this.displayHide = false;
        this.leavestausList = [];
        this.currentPage = 1;
        this.totalPages = 1;
        this.limit = 10;
        this.paginationShowLimit = false;
        this.perpageOption = [
            //{ value: '3', label: '3' },
            { value: '10', label: '10' },
            { value: '20', label: '20' },
            { value: '50', label: '50' },
            { value: '100', label: '100' },
            { value: '500', label: '500' },
        ];
        this.selectedItemsPerPage = 10;
        this.status = "";
        this.pagination = false;
        this.isData = false;
        this.dataSharingService.appliedFlagObs.subscribe(data => {
            console.log('called..........');
            if (data == 'true') {
                console.log('called..........');
                this.leavestatus();
            }
        });
    }
    ngOnInit() {
        this.leavestatus();
    }
    leavestatus() {
        let payloadReqObj = {
            "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            //"reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
            "status": null
        };
        this.start = 0;
        this.limit = this.selectedItemsPerPage;
        return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
            if (response.status.success === 'Success') {
                this.isData = true;
                //this.leavestausList = response.data;
                this.leavestausList = this.leaveList(response);
                this.totalCount = response.totalResult;
                this.findItemsPerPage();
            }
            else {
                this.isData = false;
            }
        }, error => {
            console.log(error);
        });
    }
    leaveList(response) {
        var i;
        var list = [];
        for (i = 0; i < response.data.length; i++) {
            var responseObj = response.data[i];
            responseObj.permissionDuration = this.duration(responseObj);
            list.push(responseObj);
        }
        return list;
    }
    findItemsPerPage() {
        this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);
    }
    goToPageNo(event) {
        console.log('on page change');
    }
    goToNext(event) {
        this.currentPage++;
        let payloadReqObj = {
            "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            //"reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
            "status": null
        };
        this.start = this.start + this.limit;
        this.limit = this.selectedItemsPerPage;
        return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
            if (response.status.success === 'Success') {
                this.isData = true;
                this.leavestausList = this.leaveList(response);
                this.totalCount = response.totalResult;
                this.findItemsPerPage();
            }
            else {
                this.isData = false;
            }
        });
    }
    goToPrev() {
        this.currentPage--;
        let payloadReqObj = {
            "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            //"reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
            "status": null
        };
        this.start = this.start - this.limit;
        this.limit = this.selectedItemsPerPage;
        return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
            if (response.status.success === 'Success') {
                this.isData = true;
                this.leavestausList = this.leaveList(response);
                this.totalCount = response.totalResult;
                this.findItemsPerPage();
            }
            else {
                this.isData = false;
            }
        });
    }
    changeItemPerPage(event) {
        this.currentPage = 1;
        console.log('event printed' + event);
        this.selectedItemsPerPage = parseInt(event);
        this.refreshList();
    }
    refreshList() {
        let payloadReqObj = {
            "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            //"reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
            "status": null
        };
        this.start = 0;
        this.limit = this.selectedItemsPerPage;
        return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
            if (response.status.success === 'Success') {
                this.isData = true;
                this.leavestausList = this.leaveList(response);
                this.totalCount = response.totalResult;
                this.findItemsPerPage();
            }
            else {
                this.isData = false;
            }
        });
    }
    duration(responseObject) {
        if (responseObject.leaveTypeCode == "PER") {
            return responseObject.permissionDuration + " hrs";
        }
        else {
            var noOfDays = responseObject.permissionDuration;
            var noOfWeek = Math.trunc(noOfDays / 7);
            var remainder = noOfDays % 7;
            var days;
            if (noOfWeek >= 1) {
                if (remainder > 0) {
                    days = remainder == 1 ? remainder + " day" : remainder + " days";
                }
                else {
                    days = "";
                }
                return noOfWeek > 1 ? noOfWeek + " weeks " + days : noOfWeek + " week " + days;
            }
            else if (responseObject.leaveDescription != "Permission" && noOfDays > 1) {
                return noOfDays + " days";
            }
            else {
                return noOfDays + " day";
            }
        }
    }
}


/***/ }),

/***/ "./src/app/user-module/dashboard/quick-apply/quick-apply.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/user-module/dashboard/quick-apply/quick-apply.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_QuickApplyComponent, View_QuickApplyComponent_0, View_QuickApplyComponent_Host_0, QuickApplyComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_QuickApplyComponent", function() { return RenderType_QuickApplyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_QuickApplyComponent_0", function() { return View_QuickApplyComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_QuickApplyComponent_Host_0", function() { return View_QuickApplyComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickApplyComponentNgFactory", function() { return QuickApplyComponentNgFactory; });
/* harmony import */ var _quick_apply_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quick-apply.component.scss.shim.ngstyle */ "./src/app/user-module/dashboard/quick-apply/quick-apply.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _quick_apply_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quick-apply.component */ "./src/app/user-module/dashboard/quick-apply/quick-apply.component.ts");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/urlConstant */ "./src/app/services/urlConstant.ts");
/* harmony import */ var _services_genericservices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/genericservices */ "./src/app/services/genericservices.ts");
/* harmony import */ var _services_commonMethodService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/commonMethodService */ "./src/app/services/commonMethodService.ts");
/* harmony import */ var _services_messageConstant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/messageConstant */ "./src/app/services/messageConstant.ts");
/* harmony import */ var _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/encrypt-decrypt-localstorage.service */ "./src/app/services/encrypt-decrypt-localstorage.service.ts");
/* harmony import */ var _services_dataSharing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/dataSharing.service */ "./src/app/services/dataSharing.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













var styles_QuickApplyComponent = [_quick_apply_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_QuickApplyComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_QuickApplyComponent, data: {} });

function View_QuickApplyComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "loader"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, ":svg:svg", [["class", "spinner"], ["height", "65px"], ["viewBox", "0 0 66 66"], ["width", "65px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, ":svg:circle", [["class", "path"], ["cx", "33"], ["cy", "33"], ["fill", "none"], ["r", "30"], ["stroke-linecap", "round"], ["stroke-width", "6"]], null, null, null, null, null))], null, null); }
function View_QuickApplyComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Quick Apply "]))], null, null); }
function View_QuickApplyComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Apply "]))], null, null); }
function View_QuickApplyComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Please select date"]))], null, null); }
function View_QuickApplyComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], { ngValue: [0, "ngValue"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { ngValue: [0, "ngValue"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " (", ") "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.leaveTypeDescription; var currVal_3 = _v.context.$implicit.leaveEntitled; _ck(_v, 3, 0, currVal_2, currVal_3); }); }
function View_QuickApplyComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Leave Type is Required"]))], null, null); }
function View_QuickApplyComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please fill some characters!"]))], null, null); }
function View_QuickApplyComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "error error-msg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reason is required."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = !_co.quickLeaveForm.controls["reason"].errors.required; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.quickLeaveForm.controls["reason"].errors.required; _ck(_v, 1, 0, currVal_0); }); }
function View_QuickApplyComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 44, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 43, "form", [["class", "quick__apply--form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 10, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 9, "span", [["data-target", ".leave-approval-modal-lg"], ["data-toggle", "modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "daterange"], ["name", "daterange"], ["placeholder", "Select Date *"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "selected"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("selected" === en)) {
        var pd_4 = (_co.onSelectedDate($event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "span", [["class", "calender_icon icon_date_picker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 14, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 11, "select", [["class", "form-control"], ["formControlName", "leaveType"], ["id", "exampleFormControlSelect1"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "ngModelChange"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("change" === en)) {
        var pd_2 = (_co.checkLeaveType(_co.leaveSummary) !== false);
        ad = (pd_2 && ad);
    } if (("ngModelChange" === en)) {
        var pd_3 = ((_co.leaveType = $event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 3, "option", [["class", "form-text text-muted"], ["disabled", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], { ngValue: [0, "ngValue"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { ngValue: [0, "ngValue"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Leave Type*"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 5, "textarea", [["class", "form-control"], ["formControlName", "reason"], ["id", "exampleFormControlTextarea1"], ["placeholder", "Reason"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.leaveReason = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 3, "div", [["class", "submit__button text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "button", [["class", "btn theme__btn btn-hover color-3"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.submitLeaveForm(_co.quickLeaveForm) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Apply Leave"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 0, "button", [["class", "btn theme__btn btn-hover color-3"], ["data-target", "#trigger"], ["data-toggle", "modal"], ["hidden", ""], ["id", "lopBtn"], ["type", "button"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.quickLeaveForm; _ck(_v, 3, 0, currVal_7); var currVal_15 = "daterange"; _ck(_v, 11, 0, currVal_15); var currVal_16 = (_co.quickLeaveForm.controls["daterange"].errors && !_co.quickLeaveForm.controls["daterange"].pristine); _ck(_v, 16, 0, currVal_16); var currVal_24 = "leaveType"; var currVal_25 = _co.leaveType; _ck(_v, 21, 0, currVal_24, currVal_25); var currVal_26 = null; _ck(_v, 25, 0, currVal_26); var currVal_27 = null; _ck(_v, 26, 0, currVal_27); var currVal_28 = _co.leaveSummaryList; _ck(_v, 29, 0, currVal_28); var currVal_29 = (_co.quickLeaveForm.controls["leaveType"].errors && !_co.quickLeaveForm.controls["leaveType"].pristine); _ck(_v, 31, 0, currVal_29); var currVal_37 = "reason"; var currVal_38 = _co.leaveReason; _ck(_v, 36, 0, currVal_37, currVal_38); var currVal_39 = (_co.quickLeaveForm.controls["reason"].errors && !_co.quickLeaveForm.controls["reason"].pristine); _ck(_v, 40, 0, currVal_39); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPending; _ck(_v, 8, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassUntouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassTouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPristine; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassDirty; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassValid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassInvalid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPending; _ck(_v, 18, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassUntouched; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassTouched; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassPristine; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassDirty; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassValid; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassInvalid; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassPending; _ck(_v, 33, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36); var currVal_40 = (_co.quickLeaveForm.invalid && _co.leaveDisable); _ck(_v, 42, 0, currVal_40); }); }
function View_QuickApplyComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Please select date"]))], null, null); }
function View_QuickApplyComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please fill some characters!"]))], null, null); }
function View_QuickApplyComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "error error-msg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reason is required."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = !_co.quickPermisstionForm.controls["reason"].errors.required; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.quickPermisstionForm.controls["reason"].errors.required; _ck(_v, 1, 0, currVal_0); }); }
function View_QuickApplyComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 86, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 27, "form", [["class", "quick__apply--form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, [["f", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 10, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 9, "span", [["data-target", ".bd-example-modal-lg"], ["data-toggle", "modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "onPerDate"], ["name", "daterange"], ["placeholder", "Select Date *"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "selected"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("selected" === en)) {
        var pd_4 = (_co.onPermissionDate($event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "span", [["class", "calender_icon icon_date_picker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "textarea", [["class", "form-control"], ["formControlName", "reason"], ["id", "exampleFormControlTextarea1"], ["placeholder", "Reason"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "div", [["class", "submit__button text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "button", [["class", "btn theme__btn btn-hover color-3"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.applyPermission(_co.quickPermisstionForm) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Apply Permission"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 57, "div", [["aria-hidden", "true"], ["aria-labelledby", "myLargeModalLabel"], ["class", "modal fade bd-example-modal-lg"], ["data-backdrop", "static"], ["data-keyboard", "false"], ["id", "permissionmodel"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 56, "div", [["class", "modal-dialog modal-lg modal-dialog-centered permissionModel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 55, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 10, "div", [["class", "modal-header row mx-0 px-0 mt-3 date__picker--header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 0, "div", [["class", "col-md-4 align-self-center time__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 8, "div", [["class", "col-md-8 float-right text-right datePicker__header--right align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "a", [["class", "reset-permission  align-self-center"], ["href", "javascript:void(0);"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.resetPermissionForm() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reset"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 2, "span", [["class", "pl-2 ml-2 permissionDate  align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 0, "span", [["class", "icon_date_picker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](39, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 2, "span", [["class", "pl-2 ml-2 permissionStartTimepicker  text-right  align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 0, "span", [["class", "icon_time  align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](42, null, [" ", " : ", " ", " - ", " : ", " ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 37, "div", [["class", "row justify-content-center px-0 mx-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 5, "div", [["class", "col-lg-7 col-md-6 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 4, "ngb-datepicker", [["class", "date__table"]], null, [[null, "select"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("select" === en)) {
        var pd_0 = (_co.onPermissionDate($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NgbDatepicker_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NgbDatepicker"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵu"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerI18n"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵv"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 4964352, [["d", 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepicker"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerI18n"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, { select: "select" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 30, "div", [["class", "col-lg-5 col-md-6 time__section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 14, "div", [["class", "mb-5 pl-4 row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 8, "div", [["class", "col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "label", [["for", "startTimepicker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Start Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 5, "ngb-timepicker", [["id", "startTimepicker"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.permissionStartTimepicker = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NgbTimepicker_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NgbTimepicker"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 573440, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepicker"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepickerConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimeAdapter"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepickerI18n"]], { meridian: [0, "meridian"], spinners: [1, "spinners"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 4, "div", [["class", "col-6 text-right time__margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "button", [["class", "btn permissionAmorPM active"], ["id", "am"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.startTimepickerAMOrPM("AM") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AM"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 1, "button", [["class", "btn permissionAmorPM"], ["id", "pm"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.startTimepickerAMOrPM("PM") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["PM"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 14, "div", [["class", "mb-5 pl-4 row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 8, "div", [["class", "col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 1, "label", [["for", "endTimepicker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["End Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 5, "ngb-timepicker", [["id", "endTimepicker"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.permissionEndTimepicker = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NgbTimepicker_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NgbTimepicker"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 573440, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepicker"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepickerConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimeAdapter"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepickerI18n"]], { meridian: [0, "meridian"], spinners: [1, "spinners"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 4, "div", [["class", "col-6 text-right time__margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 1, "button", [["class", "btn permissionAmorPM"], ["id", "amEnd"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.endTimepickerAMorPM("AM") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AM"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 1, "button", [["class", "btn permissionAmorPM active"], ["id", "pmEnd"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.endTimepickerAMorPM("PM") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["PM"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 5, "div", [["class", "row justify-content-end mx-0 px-0 mb-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 4, "div", [["class", "col-6  text-right time__submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 1, "button", [["class", "btn cancel-button"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.resetPermissionForm() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 1, "button", [["class", "btn theme__btn btn-hover color-3"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPermissionValues() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Done"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.quickPermisstionForm; _ck(_v, 3, 0, currVal_7); var currVal_15 = "onPerDate"; _ck(_v, 11, 0, currVal_15); var currVal_16 = (_co.quickPermisstionForm.controls["onPerDate"].errors && !_co.quickPermisstionForm.controls["onPerDate"].pristine); _ck(_v, 16, 0, currVal_16); var currVal_24 = "reason"; _ck(_v, 21, 0, currVal_24); var currVal_25 = (_co.quickPermisstionForm.controls["reason"].errors && !_co.quickPermisstionForm.controls["reason"].pristine); _ck(_v, 25, 0, currVal_25); _ck(_v, 49, 0); var currVal_41 = _co.meridian; var currVal_42 = _co.spinners; _ck(_v, 56, 0, currVal_41, currVal_42); var currVal_43 = _co.permissionStartTimepicker; _ck(_v, 58, 0, currVal_43); var currVal_51 = _co.meridian; var currVal_52 = _co.spinners; _ck(_v, 71, 0, currVal_51, currVal_52); var currVal_53 = _co.permissionEndTimepicker; _ck(_v, 73, 0, currVal_53); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPending; _ck(_v, 8, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassUntouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassTouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPristine; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassDirty; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassValid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassInvalid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPending; _ck(_v, 18, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_26 = _co.quickPermisstionForm.invalid; _ck(_v, 27, 0, currVal_26); var currVal_27 = _co.permissionDate; _ck(_v, 39, 0, currVal_27); var currVal_28 = ((_co.permissionStartTimepicker.hour >= 13) ? (_co.permissionStartTimepicker.hour - 12) : ((_co.permissionStartTimepicker.hour === 0) ? "12" : ((_co.permissionStartTimepicker.hour >= 10) ? _co.permissionStartTimepicker.hour : ("0" + _co.permissionStartTimepicker.hour)))); var currVal_29 = ((_co.permissionStartTimepicker.minute >= 10) ? _co.permissionStartTimepicker.minute : ("0" + _co.permissionStartTimepicker.minute)); var currVal_30 = ((_co.startTimepickerAM === true) ? "AM" : "PM"); var currVal_31 = ((_co.permissionEndTimepicker.hour >= 13) ? (_co.permissionEndTimepicker.hour - 12) : ((_co.permissionEndTimepicker.hour === 0) ? "12" : ((_co.permissionEndTimepicker.hour >= 10) ? _co.permissionEndTimepicker.hour : ("0" + _co.permissionEndTimepicker.hour)))); var currVal_32 = ((_co.permissionEndTimepicker.minute >= 10) ? _co.permissionEndTimepicker.minute : ("0" + _co.permissionEndTimepicker.minute)); var currVal_33 = ((_co.endTimepickerAM === true) ? "AM" : "PM"); _ck(_v, 42, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassUntouched; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassTouched; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassPristine; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassDirty; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassValid; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassInvalid; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60).ngClassPending; _ck(_v, 55, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40); var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ngClassUntouched; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ngClassTouched; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ngClassPristine; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ngClassDirty; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ngClassValid; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ngClassInvalid; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ngClassPending; _ck(_v, 70, 0, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50); }); }
function View_QuickApplyComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "form-text text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Please select date"]))], null, null); }
function View_QuickApplyComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please fill some characters!"]))], null, null); }
function View_QuickApplyComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "error error-msg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reason is required."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = !_co.quicOnDutyForm.controls["reason"].errors.required; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.quicOnDutyForm.controls["reason"].errors.required; _ck(_v, 1, 0, currVal_0); }); }
function View_QuickApplyComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 28, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 27, "form", [["class", "quick__apply--form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 10, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 9, "span", [["data-target", ".onduty-approval-modal-lg"], ["data-toggle", "modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "onDutyDate"], ["name", "onDutyDate"], ["placeholder", "Select Date *"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "selected"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("selected" === en)) {
        var pd_4 = (_co.onDutySelectedDate($event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "span", [["class", "calender_icon icon_date_picker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "textarea", [["class", "form-control"], ["formControlName", "reason"], ["id", "exampleFormControlTextarea1"], ["placeholder", "Reason"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "div", [["class", "submit__button text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "button", [["class", "btn theme__btn btn-hover color-3"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.applyOnDuty(_co.quicOnDutyForm) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Apply On Duty"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.quicOnDutyForm; _ck(_v, 3, 0, currVal_7); var currVal_15 = "onDutyDate"; _ck(_v, 11, 0, currVal_15); var currVal_16 = (_co.quicOnDutyForm.controls["onDutyDate"].errors && !_co.quicOnDutyForm.controls["onDutyDate"].pristine); _ck(_v, 16, 0, currVal_16); var currVal_24 = "reason"; _ck(_v, 21, 0, currVal_24); var currVal_25 = (_co.quicOnDutyForm.controls["reason"].errors && !_co.quicOnDutyForm.controls["reason"].pristine); _ck(_v, 25, 0, currVal_25); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPending; _ck(_v, 8, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassUntouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassTouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPristine; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassDirty; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassValid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassInvalid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).ngClassPending; _ck(_v, 18, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_26 = _co.quicOnDutyForm.invalid; _ck(_v, 27, 0, currVal_26); }); }
function View_QuickApplyComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "custom-day"]], [[2, "focused", null], [2, "range", null], [2, "faded", null]], [[null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = ((_co.hoveredDate = _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } if (("mouseleave" === en)) {
        var pd_1 = ((_co.hoveredDate = null) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.focused; var currVal_1 = _co.isRange(_v.context.$implicit); var currVal_2 = (_co.isHovered(_v.context.$implicit) || _co.isInside(_v.context.$implicit)); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit.day; _ck(_v, 1, 0, currVal_3); }); }
function View_QuickApplyComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "form-group leaveSelection"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "radio"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "input", [["checked", ""], ["id", "radio-4"], ["name", "radio2"], ["type", "radio"], ["value", "FORE"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.halfdayRadioChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "label", [["class", "radio-label"], ["for", "radio-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "div", [["class", "checker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Forenoon "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "radio"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "input", [["id", "radio-5"], ["name", "radio2"], ["type", "radio"], ["value", "POST"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.halfdayRadioChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "label", [["class", "radio-label"], ["for", "radio-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "div", [["class", "checker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Afternoon "]))], null, null); }
function View_QuickApplyComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "col-12 col-md-8 align-self-center date__model--footer active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "custom-control custom-checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "input", [["class", "custom-control-input"], ["id", "leaveType"], ["type", "checkbox"]], [[8, "checked", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.halfdaychkfun($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "label", [["class", "custom-control-label rememberme float-left"], ["for", "leaveType"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Half Day Leave? "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.noonFlag; _ck(_v, 7, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.leaveTypeChecked; _ck(_v, 3, 0, currVal_0); }); }
function View_QuickApplyComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "custom-day-onduty"]], [[2, "focused", null], [2, "range", null], [2, "faded", null]], [[null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = ((_co.hoveredDateOnDuty = _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } if (("mouseleave" === en)) {
        var pd_1 = ((_co.hoveredDateOnDuty = null) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.focused; var currVal_1 = _co.isOnDutyRange(_v.context.$implicit); var currVal_2 = (_co.isOnDutyHovered(_v.context.$implicit) || _co.isOnDutyInside(_v.context.$implicit)); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit.day; _ck(_v, 1, 0, currVal_3); }); }
function View_QuickApplyComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 35, "div", [["class", "form-group timeSelection"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 34, "div", [["class", "row ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 16, "div", [["class", "col-12 col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 15, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "col-2 align-self-center mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h6", [["class", "fromTo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["From:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 6, "div", [["class", "col-5 form-group align-self-center px-1 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "ngb-timepicker", [["id", "startTimepicker"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keypress"], [null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keypress" === en)) {
        var pd_0 = (_co.onKeyPress($event) !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.inTime = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NgbTimepicker_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NgbTimepicker"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 573440, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepicker"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepickerConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimeAdapter"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepickerI18n"]], { meridian: [0, "meridian"], spinners: [1, "spinners"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 4, "div", [["class", "col-5 align-self-center mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "span", [["class", "activeTime onDutyAmorPM active"], ["id", "amODStart"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDutyStartAMOrPM("AM") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AM"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "span", [["class", "activeTime onDutyAmorPM"], ["id", "pmODStart"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDutyStartAMOrPM("PM") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["PM"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 16, "div", [["class", "col-12 col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 15, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "div", [["class", "col-2  align-self-center mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "h6", [["class", "fromTo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 6, "div", [["class", "col-5 form-group align-self-center px-1 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 5, "ngb-timepicker", [["id", "startTimepicker"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keypress"], [null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keypress" === en)) {
        var pd_0 = (_co.onKeyPress($event) !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.outTime = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NgbTimepicker_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NgbTimepicker"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 573440, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepicker"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepickerConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimeAdapter"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepickerI18n"]], { meridian: [0, "meridian"], spinners: [1, "spinners"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 4, "div", [["class", "col-5 align-self-center mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "span", [["class", "activeTime active onDutyEndAmorPM"], ["id", "amODEnd"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDutyEndAMOrPM("AM") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AM"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "span", [["class", "activeTime onDutyEndAmorPM"], ["id", "pmODEnd"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDutyEndAMOrPM("PM") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["PM"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.meridian; var currVal_8 = _co.spinners; _ck(_v, 9, 0, currVal_7, currVal_8); var currVal_9 = _co.inTime; _ck(_v, 11, 0, currVal_9); var currVal_17 = _co.meridian; var currVal_18 = _co.spinners; _ck(_v, 26, 0, currVal_17, currVal_18); var currVal_19 = _co.outTime; _ck(_v, 28, 0, currVal_19); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPending; _ck(_v, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassUntouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassTouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPristine; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassDirty; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassValid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassInvalid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPending; _ck(_v, 25, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); }); }
function View_QuickApplyComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "col-12 col-lg-8 align-self-center date__model--footer active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "custom-control custom-checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "input", [["class", "custom-control-input"], ["id", "onDutyType"], ["type", "checkbox"]], [[8, "checked", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDutyHoursfun($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "label", [["class", "custom-control-label rememberme float-left"], ["for", "onDutyType"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Select Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.timeFlag; _ck(_v, 7, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.onDutyChecked; _ck(_v, 3, 0, currVal_0); }); }
function View_QuickApplyComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 26, "div", [["class", "white__border  rounded quick__apply"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 15, "div", [["class", "form-group mb-0 quick__apply--type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "div", [["class", "radio radio-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "input", [["checked", ""], ["id", "radio-1"], ["name", "radio1"], ["type", "radio"], ["value", "LEA"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.radioChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "label", [["class", "radio-label"], ["for", "radio-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "div", [["class", "checker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Leave "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 4, "div", [["class", "radio radio-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "input", [["id", "radio-2"], ["name", "radio1"], ["type", "radio"], ["value", "PER"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.radioChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "label", [["class", "radio-label"], ["for", "radio-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "div", [["class", "checker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Permission "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "div", [["class", "radio radio-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "input", [["id", "radio-3"], ["name", "radio1"], ["type", "radio"], ["value", "OD"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        _co.radioChange($event);
        var pd_0 = (_co.quicOnDutyForm.reset() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "label", [["class", "radio-label"], ["for", "radio-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "div", [["class", "checker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" On Duty "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 42, "div", [["aria-hidden", "true"], ["aria-labelledby", "exampleModalCenterTitle"], ["class", "modal fade quickApplyModal"], ["id", "trigger"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 41, "div", [["class", "modal-dialog modal-dialog-top modal-dialog--support"], ["role", "document"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 40, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 39, "div", [["class", "modal-body support__request-modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Loss of Pay"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 3, "div", [["class", "row justify-content-center my-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 2, "small", [["class", "lop_warning_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 0, "span", [["class", "icon_warning px-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["You don't have sufficient leave balance for the selected leave type. This will lead to Loss of Pay."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 27, "div", [["class", "row d-flex flex-row justify-content-between item_list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 4, "div", [["class", "item1 d-flex flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Leave Type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](45, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 4, "div", [["class", "item2 d-flex flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Available Leave"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "span", [["class", "align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](50, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 5, "div", [["class", "item3 d-flex flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["From Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](55, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](56, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 5, "div", [["class", "item4 d-flex  flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](61, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](62, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 4, "div", [["class", "item5 d-flex flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Loss of Pay"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "span", [["class", "align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](67, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 4, "div", [["class", "bottom__btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 1, "button", [["class", "btn btn-primary cancel"], ["data-dismiss", "modal"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 1, "button", [["class", "btn btn-primary submit"], ["data-dismiss", "modal"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.confirmLeaveRequest() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Proceed"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 26, "div", [["aria-hidden", "true"], ["aria-labelledby", "myLargeModalLabel"], ["class", "modal fade leave-approval-modal-lg"], ["data-backdrop", "static"], ["data-keyboard", "false"], ["id", "leavemodel"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 25, "div", [["class", "modal-dialog modal-lg modal-dialog-centered double__dateModel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 24, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 7, "div", [["class", "modal-header date__picker--header row mx-0 px-0 mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 0, "div", [["class", "col-md-4 align-self-center time__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 5, "div", [["class", "col-md-8 float-right text-right datePicker__header--right align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 1, "a", [["class", "reset-permission  align-self-center"], ["href", "javascript:void(0);"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.resetFormInDatePicker() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reset"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 2, "span", [["class", "pl-2 ml-2 permissionDate  align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 0, "span", [["class", "icon_date_picker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](83, null, [" ", "- ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 7, "div", [["class", "row px-0 mx-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 6, "div", [["class", "col-12 text-center px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 4, "ngb-datepicker", [["class", "date__table"], ["outsideDays", "hidden"]], null, [[null, "select"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("select" === en)) {
        var pd_0 = (_co.onDateSelection($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NgbDatepicker_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NgbDatepicker"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵu"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerI18n"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵv"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 4964352, [["dp", 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepicker"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerI18n"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { dayTemplate: [0, "dayTemplate"], displayMonths: [1, "displayMonths"], outsideDays: [2, "outsideDays"] }, { select: "select" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["t", 2]], null, 0, null, View_QuickApplyComponent_18)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 7, "div", [["class", "row justify-content-end mx-0 px-0 mb-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 4, "div", [["class", "col-12 col-md-4  text-left text-md-right time__submit align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 1, "button", [["class", "btn cancel-button"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.resetFormInDatePicker() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 1, "button", [["class", "btn theme__btn btn-hover color-3"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setValues() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Done"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 26, "div", [["aria-hidden", "true"], ["aria-labelledby", "myLargeModalLabel"], ["class", "modal fade onduty-approval-modal-lg"], ["data-backdrop", "static"], ["data-keyboard", "false"], ["id", "onDutymodel"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 25, "div", [["class", "modal-dialog modal-lg modal-dialog-centered double__dateModel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 24, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 7, "div", [["class", "modal-header row mx-0 px-0 mt-3 date__picker--header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 0, "div", [["class", "col-md-4 align-self-center time__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 5, "div", [["class", "col-md-8 float-right text-right datePicker__header--right align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 1, "a", [["class", "reset-permission  align-self-center"], ["href", "javascript:void(0);"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.resetOnDutyDatePicker() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reset"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 2, "span", [["class", "pl-2 ml-2 permissionDate  align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 0, "span", [["class", "icon_date_picker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](110, null, [" ", "- ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](111, 0, null, null, 7, "div", [["class", "row px-0 mx-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 6, "div", [["class", "col-12 text-center px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 4, "ngb-datepicker", [["class", "date__table"], ["outsideDays", "hidden"]], null, [[null, "select"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("select" === en)) {
        var pd_0 = (_co.onDutyDateSelection($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_NgbDatepicker_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_NgbDatepicker"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵu"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerI18n"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵv"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](117, 4964352, [["dp", 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepicker"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵv"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ɵu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerI18n"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { dayTemplate: [0, "dayTemplate"], displayMonths: [1, "displayMonths"], outsideDays: [2, "outsideDays"] }, { select: "select" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["t1", 2]], null, 0, null, View_QuickApplyComponent_21)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 7, "div", [["class", "row justify-content-end mx-0 px-0 mb-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_QuickApplyComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 4, "div", [["class", "col-12 col-lg-4 text-md-right text-left time__submit align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 1, "button", [["class", "btn cancel-button"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.resetOnDutyDatePicker() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](125, 0, null, null, 1, "button", [["class", "btn theme__btn btn-hover color-3"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setOnDutyValues() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Done"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.preloader; _ck(_v, 2, 0, currVal_0); var currVal_1 = !_co.dashBoardPaginationView; _ck(_v, 5, 0, currVal_1); var currVal_2 = _co.dashBoardPaginationView; _ck(_v, 7, 0, currVal_2); var currVal_3 = (_co.type == "LEA"); _ck(_v, 25, 0, currVal_3); var currVal_4 = (_co.type == "PER"); _ck(_v, 27, 0, currVal_4); var currVal_5 = (_co.type == "OD"); _ck(_v, 29, 0, currVal_5); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91); var currVal_14 = 2; var currVal_15 = "hidden"; _ck(_v, 90, 0, currVal_13, currVal_14, currVal_15); var currVal_16 = _co.halfdayflog; _ck(_v, 94, 0, currVal_16); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118); var currVal_20 = 2; var currVal_21 = "hidden"; _ck(_v, 117, 0, currVal_19, currVal_20, currVal_21); var currVal_22 = _co.hoursflog; _ck(_v, 121, 0, currVal_22); }, function (_ck, _v) { var _co = _v.component; var currVal_6 = _co.lopLeaveType; _ck(_v, 45, 0, currVal_6); var currVal_7 = _co.lopBalanceLeave; _ck(_v, 50, 0, currVal_7); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 55, 0, _ck(_v, 56, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.lopFromDate, "dd MMM yyyy")); _ck(_v, 55, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 61, 0, _ck(_v, 62, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.lopToDate, "dd MMM yyyy")); _ck(_v, 61, 0, currVal_9); var currVal_10 = _co.lopDays; _ck(_v, 67, 0, currVal_10); var currVal_11 = _co.startLeaveDate; var currVal_12 = _co.EndLeaveDate; _ck(_v, 83, 0, currVal_11, currVal_12); var currVal_17 = _co.startLeaveDateOnDuty; var currVal_18 = _co.EndLeaveDateOnDuty; _ck(_v, 110, 0, currVal_17, currVal_18); }); }
function View_QuickApplyComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-quick-apply", [], null, null, null, View_QuickApplyComponent_0, RenderType_QuickApplyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _quick_apply_component__WEBPACK_IMPORTED_MODULE_6__["QuickApplyComponent"], [_services_urlConstant__WEBPACK_IMPORTED_MODULE_7__["UrlConstant"], _services_genericservices__WEBPACK_IMPORTED_MODULE_8__["Genericservice"], _services_commonMethodService__WEBPACK_IMPORTED_MODULE_9__["commonService"], _services_messageConstant__WEBPACK_IMPORTED_MODULE_10__["MessageConstant"], _services_commonMethodService__WEBPACK_IMPORTED_MODULE_9__["commonService"], _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_11__["EncryptDecryptLocalStorageService"], _services_dataSharing_service__WEBPACK_IMPORTED_MODULE_12__["DataSharingService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var QuickApplyComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-quick-apply", _quick_apply_component__WEBPACK_IMPORTED_MODULE_6__["QuickApplyComponent"], View_QuickApplyComponent_Host_0, { dashBoardPaginationView: "dashBoardPaginationView" }, {}, []);



/***/ }),

/***/ "./src/app/user-module/dashboard/quick-apply/quick-apply.component.scss.shim.ngstyle.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/user-module/dashboard/quick-apply/quick-apply.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@charset \"UTF-8\";\n[class^=icon_][_ngcontent-%COMP%], [class*=\" icon_\"][_ngcontent-%COMP%] {\n  font-family: \"chutti\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[class^=icon1-][_ngcontent-%COMP%], [class*=\" icon1-\"][_ngcontent-%COMP%] {\n  \n  font-family: \"icomoon\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon_dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE100\";\n}\n.icon_leave[_ngcontent-%COMP%]:before {\n  content: \"\uE101\";\n}\n.icon_attendance[_ngcontent-%COMP%]:before {\n  content: \"\uE102\";\n}\n.icon_timesheet[_ngcontent-%COMP%]:before {\n  content: \"\uE103\";\n}\n.icon_attendance1[_ngcontent-%COMP%]:before {\n  content: \"\uE104\";\n}\n.icon_support[_ngcontent-%COMP%]:before {\n  content: \"\uE105\";\n}\n.icon_quick_apply[_ngcontent-%COMP%]:before {\n  content: \"\uE106\";\n}\n.icon_leave_bank[_ngcontent-%COMP%]:before {\n  content: \"\uE107\";\n}\n.icon_collapse[_ngcontent-%COMP%]:before {\n  content: \"\uE108\";\n}\n.icon_expand[_ngcontent-%COMP%]:before {\n  content: \"\uE109\";\n}\n.icon_filter[_ngcontent-%COMP%]:before {\n  content: \"\uE10A\";\n}\n.icon_date_picker[_ngcontent-%COMP%]:before {\n  content: \"\uE10B\";\n}\n.icon_arrow_thick_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10C\";\n}\n.icon_arrow_thick_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10D\";\n}\n.icon_arrow_thin_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10E\";\n}\n.icon_arrow_thin_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10F\";\n}\n.icon_hold[_ngcontent-%COMP%]:before {\n  content: \"\uE110\";\n}\n.icon_cancel[_ngcontent-%COMP%]:before {\n  content: \"\uE111\";\n}\n.icon_tick[_ngcontent-%COMP%]:before {\n  content: \"\uE112\";\n}\n.icon_lock[_ngcontent-%COMP%]:before {\n  content: \"\uE113\";\n}\n.icon_edit_outline[_ngcontent-%COMP%]:before {\n  content: \"\uE114\";\n}\n.icon_edit_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE115\";\n}\n.icon_delete_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE116\";\n}\n.icon_search[_ngcontent-%COMP%]:before {\n  content: \"\uE117\";\n}\n.icon_notifications[_ngcontent-%COMP%]:before {\n  content: \"\uE118\";\n}\n.icon_time[_ngcontent-%COMP%]:before {\n  content: \"\uE119\";\n}\n.icon_date_time[_ngcontent-%COMP%]:before {\n  content: \"\uE11A\";\n}\n.icon_probation[_ngcontent-%COMP%]:before {\n  content: \"\uE11B\";\n}\n.icon_confirmed[_ngcontent-%COMP%]:before {\n  content: \"\uE11C\";\n}\n.icon_holidays[_ngcontent-%COMP%]:before {\n  content: \"\uE11D\";\n}\n.icon_priority_urgent[_ngcontent-%COMP%]:before {\n  content: \"\uE11E\";\n}\n.icon_arrow_up[_ngcontent-%COMP%]:before {\n  content: \"\uE11F\";\n}\n.icon_arrow_down[_ngcontent-%COMP%]:before {\n  content: \"\uE120\";\n}\n.icon_show_password[_ngcontent-%COMP%]:before {\n  content: \"\uE121\";\n}\n.icon_hide_password[_ngcontent-%COMP%]:before {\n  content: \"\uE122\";\n}\n.icon_name[_ngcontent-%COMP%]:before {\n  content: \"\uE123\";\n}\n.icon_organisation[_ngcontent-%COMP%]:before {\n  content: \"\uE124\";\n}\n.icon_phone[_ngcontent-%COMP%]:before {\n  content: \"\uE125\";\n}\n.icon_email[_ngcontent-%COMP%]:before {\n  content: \"\uE126\";\n}\n.icon_password[_ngcontent-%COMP%]:before {\n  content: \"\uE127\";\n}\n.icon_add[_ngcontent-%COMP%]:before {\n  content: \"\uE128\";\n}\n.icon_sign_out[_ngcontent-%COMP%]:before {\n  content: \"\uE129\";\n}\n.icon_profile[_ngcontent-%COMP%]:before {\n  content: \"\uE12A\";\n}\n.icon_warning[_ngcontent-%COMP%]:before {\n  content: \"\uE12B\";\n}\n.icon_camera[_ngcontent-%COMP%]:before {\n  content: \"\uE12C\";\n}\n.icon1-upload-to-cloud[_ngcontent-%COMP%]:before {\n  content: \"\uE900\";\n}\n.icon1-cloud-computing[_ngcontent-%COMP%]:before {\n  content: \"\uE901\";\n}\n.icon1-dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE902\";\n}\n.icon1-filter-results[_ngcontent-%COMP%]:before {\n  content: \"\uE903\";\n}\n.icon1-building[_ngcontent-%COMP%]:before {\n  content: \"\uE904\";\n}\n.icon1-noun_Calendar[_ngcontent-%COMP%]:before {\n  content: \"\uE905\";\n}\n.icon1-noun_Project[_ngcontent-%COMP%]:before {\n  content: \"\uE906\";\n}\n.icon1-noun_Upload[_ngcontent-%COMP%]:before {\n  content: \"\uE907\";\n}\n.icon1-noun_users[_ngcontent-%COMP%]:before {\n  content: \"\uE908\";\n}\n.icon1-noun_Work[_ngcontent-%COMP%]:before {\n  content: \"\uE909\";\n}\n.icon1-Path[_ngcontent-%COMP%]:before {\n  content: \"\uE90A\";\n}\n[class^=icon_][_ngcontent-%COMP%], [class*=\" icon_\"][_ngcontent-%COMP%] {\n  font-family: \"chutti\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[class^=icon1-][_ngcontent-%COMP%], [class*=\" icon1-\"][_ngcontent-%COMP%] {\n  \n  font-family: \"icomoon\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon_dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE100\";\n}\n.icon_leave[_ngcontent-%COMP%]:before {\n  content: \"\uE101\";\n}\n.icon_attendance[_ngcontent-%COMP%]:before {\n  content: \"\uE102\";\n}\n.icon_timesheet[_ngcontent-%COMP%]:before {\n  content: \"\uE103\";\n}\n.icon_attendance1[_ngcontent-%COMP%]:before {\n  content: \"\uE104\";\n}\n.icon_support[_ngcontent-%COMP%]:before {\n  content: \"\uE105\";\n}\n.icon_quick_apply[_ngcontent-%COMP%]:before {\n  content: \"\uE106\";\n}\n.icon_leave_bank[_ngcontent-%COMP%]:before {\n  content: \"\uE107\";\n}\n.icon_collapse[_ngcontent-%COMP%]:before {\n  content: \"\uE108\";\n}\n.icon_expand[_ngcontent-%COMP%]:before {\n  content: \"\uE109\";\n}\n.icon_filter[_ngcontent-%COMP%]:before {\n  content: \"\uE10A\";\n}\n.icon_date_picker[_ngcontent-%COMP%]:before {\n  content: \"\uE10B\";\n}\n.icon_arrow_thick_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10C\";\n}\n.icon_arrow_thick_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10D\";\n}\n.icon_arrow_thin_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10E\";\n}\n.icon_arrow_thin_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10F\";\n}\n.icon_hold[_ngcontent-%COMP%]:before {\n  content: \"\uE110\";\n}\n.icon_cancel[_ngcontent-%COMP%]:before {\n  content: \"\uE111\";\n}\n.icon_tick[_ngcontent-%COMP%]:before {\n  content: \"\uE112\";\n}\n.icon_lock[_ngcontent-%COMP%]:before {\n  content: \"\uE113\";\n}\n.icon_edit_outline[_ngcontent-%COMP%]:before {\n  content: \"\uE114\";\n}\n.icon_edit_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE115\";\n}\n.icon_delete_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE116\";\n}\n.icon_search[_ngcontent-%COMP%]:before {\n  content: \"\uE117\";\n}\n.icon_notifications[_ngcontent-%COMP%]:before {\n  content: \"\uE118\";\n}\n.icon_time[_ngcontent-%COMP%]:before {\n  content: \"\uE119\";\n}\n.icon_date_time[_ngcontent-%COMP%]:before {\n  content: \"\uE11A\";\n}\n.icon_probation[_ngcontent-%COMP%]:before {\n  content: \"\uE11B\";\n}\n.icon_confirmed[_ngcontent-%COMP%]:before {\n  content: \"\uE11C\";\n}\n.icon_holidays[_ngcontent-%COMP%]:before {\n  content: \"\uE11D\";\n}\n.icon_priority_urgent[_ngcontent-%COMP%]:before {\n  content: \"\uE11E\";\n}\n.icon_arrow_up[_ngcontent-%COMP%]:before {\n  content: \"\uE11F\";\n}\n.icon_arrow_down[_ngcontent-%COMP%]:before {\n  content: \"\uE120\";\n}\n.icon_show_password[_ngcontent-%COMP%]:before {\n  content: \"\uE121\";\n}\n.icon_hide_password[_ngcontent-%COMP%]:before {\n  content: \"\uE122\";\n}\n.icon_name[_ngcontent-%COMP%]:before {\n  content: \"\uE123\";\n}\n.icon_organisation[_ngcontent-%COMP%]:before {\n  content: \"\uE124\";\n}\n.icon_phone[_ngcontent-%COMP%]:before {\n  content: \"\uE125\";\n}\n.icon_email[_ngcontent-%COMP%]:before {\n  content: \"\uE126\";\n}\n.icon_password[_ngcontent-%COMP%]:before {\n  content: \"\uE127\";\n}\n.icon_add[_ngcontent-%COMP%]:before {\n  content: \"\uE128\";\n}\n.icon_sign_out[_ngcontent-%COMP%]:before {\n  content: \"\uE129\";\n}\n.icon_profile[_ngcontent-%COMP%]:before {\n  content: \"\uE12A\";\n}\n.icon_warning[_ngcontent-%COMP%]:before {\n  content: \"\uE12B\";\n}\n.icon_camera[_ngcontent-%COMP%]:before {\n  content: \"\uE12C\";\n}\n.icon1-upload-to-cloud[_ngcontent-%COMP%]:before {\n  content: \"\uE900\";\n}\n.icon1-cloud-computing[_ngcontent-%COMP%]:before {\n  content: \"\uE901\";\n}\n.icon1-dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE902\";\n}\n.icon1-filter-results[_ngcontent-%COMP%]:before {\n  content: \"\uE903\";\n}\n.icon1-building[_ngcontent-%COMP%]:before {\n  content: \"\uE904\";\n}\n.icon1-noun_Calendar[_ngcontent-%COMP%]:before {\n  content: \"\uE905\";\n}\n.icon1-noun_Project[_ngcontent-%COMP%]:before {\n  content: \"\uE906\";\n}\n.icon1-noun_Upload[_ngcontent-%COMP%]:before {\n  content: \"\uE907\";\n}\n.icon1-noun_users[_ngcontent-%COMP%]:before {\n  content: \"\uE908\";\n}\n.icon1-noun_Work[_ngcontent-%COMP%]:before {\n  content: \"\uE909\";\n}\n.icon1-Path[_ngcontent-%COMP%]:before {\n  content: \"\uE90A\";\n}\n.daterangepicker[_ngcontent-%COMP%] {\n  left: 50% !important;\n  top: 50% !important;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   td.active[_ngcontent-%COMP%]::before, .daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n  transition: 0.9s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.permisstion[_ngcontent-%COMP%]   .daterangepicker.ltr[_ngcontent-%COMP%]   .calendar.right[_ngcontent-%COMP%]   .calendar-table[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.daterangepicker.ltr[_ngcontent-%COMP%]   .ranges[_ngcontent-%COMP%] {\n  float: right !important;\n}\n.daterangepicker[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 70px !important;\n  height: 36px !important;\n}\n.daterangepicker[_ngcontent-%COMP%]   .input-mini[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n  border: none !important;\n  position: absolute !important;\n  right: 0px !important;\n  width: 50% !important;\n}\n.daterangepicker[_ngcontent-%COMP%]   .daterangepicker_input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: none !important;\n  position: absolute !important;\n  right: 10px !important;\n}\n.daterangepicker[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  padding: 2rem 3rem !important;\n}\n.daterangepicker[_ngcontent-%COMP%]:after, .daterangepicker[_ngcontent-%COMP%]:before {\n  display: none !important;\n}\n.daterangepicker.double[_ngcontent-%COMP%] {\n  width: 100% !important;\n  left: 0 !important;\n  right: 0 !important;\n  -webkit-transform: translate(50%, 10%) !important;\n          transform: translate(50%, 10%) !important;\n  position: fixed;\n  top: 11% !important;\n  width: 20px;\n  border-radius: 50% !important;\n}\n@media (max-width: 1366px) {\n  .daterangepicker.double[_ngcontent-%COMP%] {\n    width: 65% !important;\n    -webkit-transform: translate(28%, 10%) !important;\n            transform: translate(28%, 10%) !important;\n  }\n}\n.daterangepicker[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 35px;\n  top: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.daterangepicker[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .daterangepicker[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n}\n.daterangepicker[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover, .daterangepicker[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n}\n.daterangepicker[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%] {\n  max-width: inherit !important;\n  width: 50% !important;\n  margin: 0 !important;\n}\n.daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 8px !important;\n  font-family: \"Poppins\", sans-serif;\n  border-radius: 50% !important;\n}\n@media (max-width: 1366px) {\n  .daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 4px !important;\n  }\n}\n.daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 400;\n  padding: 2px 0 18px !important;\n}\n.daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6E6E6E;\n}\n.daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #404040;\n  width: 20px;\n  border-radius: 50%;\n}\n.daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 40px;\n  display: block;\n  height: 40px;\n  vertical-align: middle;\n  position: relative;\n  color: #000000;\n}\n@media (max-width: 1366px) {\n  .daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n}\n.daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   td.active[_ngcontent-%COMP%], .daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover {\n  color: #404040 !important;\n  width: 20px !important;\n  border-radius: 50% !important;\n}\n.daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   td.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .daterangepicker[_ngcontent-%COMP%]   .calendar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.daterangepicker[_ngcontent-%COMP%]   .calendar-table[_ngcontent-%COMP%] {\n  padding: 35px 35px 0 !important;\n}\n.wide[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  overflow: hidden;\n  outline: 0;\n  transition: opacity 0.15s linear;\n}\n.wide[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.daterangepicker[_ngcontent-%COMP%] {\n  display: none;\n}\n.daterangepicker.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.daterangepicker[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  text-align: right;\n  margin: 0 54px 30px 0 !important;\n}\n.daterangepicker[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-image: linear-gradient(120deg, #6747D4 0%, #9A45D2 100%);\n  padding: 2px 12px !important;\n}\n.month[_ngcontent-%COMP%] {\n  text-align: left !important;\n  position: absolute;\n  margin-left: 14px;\n  top: 52px;\n}\n.ngb-tp-meridian[_ngcontent-%COMP%] {\n  display: none !important;\n}\nbutton.btn.btn-outline-primary[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.quick__apply[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.quick__apply[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]::before {\n  content: \"\uE106\";\n}\n.date__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px !important;\n  top: 0;\n  right: 0;\n}\n.date__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.daterangepicker[_ngcontent-%COMP%] {\n  top: 50% !important;\n  left: 50% !important;\n  -webkit-transform: rotate(-50%, -50%) !important;\n          transform: rotate(-50%, -50%) !important;\n}\n.quickApplyModal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  max-width: 560px;\n}\n.quickApplyModal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: 1px solid #ffffff;\n}\n.quickApplyModal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .lop_warning_text[_ngcontent-%COMP%] {\n  background-color: #FFF3E8;\n  padding: 5px 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.quickApplyModal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .lop_warning_text[_ngcontent-%COMP%]   .icon_warning[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #EAAF75;\n}\n.quickApplyModal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .item_list[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 1.1rem;\n}\n.quickApplyModal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .item_list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.reset-permission[_ngcontent-%COMP%] {\n  color: #007bff;\n  cursor: pointer;\n  background-color: transparent;\n}\n.cancel-button[_ngcontent-%COMP%] {\n  -webkit-text-decoration-color: #ffffff;\n          text-decoration-color: #ffffff;\n  background-color: #e8e8e8;\n  \n  border: 1px solid #cccccc;\n}\n.datePicker__header--right[_ngcontent-%COMP%]   .reset-permission[_ngcontent-%COMP%] {\n  color: #6C44E1;\n  font-size: 1em;\n  width: 60px;\n  display: inline-block;\n}\n.datePicker__header--right[_ngcontent-%COMP%]   .permissionDate[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.datePicker__header--right[_ngcontent-%COMP%]   .permissionStartTimepicker[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.permissionAmorPM.active[_ngcontent-%COMP%], .permissionEndAmorPM.active[_ngcontent-%COMP%] {\n  border: 2px solid #6C44E1;\n}\n.time__submit[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.time__section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n@media (max-width: 567px) {\n  .time__section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 1em;\n    position: relative;\n    top: 6px;\n  }\n}\n@media (max-width: 991px) {\n  .time__section[_ngcontent-%COMP%] {\n    padding-top: 3.1rem;\n  }\n}\n@media (max-width: 567px) {\n  .time__section[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n  .time__section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin-bottom: 1rem !important;\n  }\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  max-width: 910px;\n}\n.time__submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.time__margin[_ngcontent-%COMP%] {\n  margin-top: 48px;\n}\n@media (max-width: 1440px) {\n  .time__margin[_ngcontent-%COMP%] {\n    margin-top: 38px;\n  }\n}\n@media (max-width: 567px) {\n  .time__margin[_ngcontent-%COMP%] {\n    margin-top: 28px;\n  }\n}\n.time__title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6 !important;\n}\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: #6C44E1 !important;\n  color: white;\n}\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5) !important;\n}\n.custom-day-onduty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day-onduty.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6 !important;\n}\n.custom-day-onduty.range[_ngcontent-%COMP%], .custom-day-onduty[_ngcontent-%COMP%]:hover {\n  background-color: #6C44E1 !important;\n  color: white;\n}\n.custom-day-onduty.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5) !important;\n}\n@media (max-width: 1440px) {\n  .permissionModel[_ngcontent-%COMP%] {\n    max-width: 768px;\n  }\n}\n@media (max-width: 991px) {\n  .permissionModel[_ngcontent-%COMP%] {\n    max-width: 700px;\n  }\n}\n@media (max-width: 567px) {\n  .permissionModel[_ngcontent-%COMP%] {\n    max-width: 350px;\n    width: 100%;\n    margin: 0 auto;\n  }\n}\n@media (max-width: 991px) {\n  .date__table[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n}\n.time_error[_ngcontent-%COMP%] {\n  border-bottom: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tb2R1bGUvZGFzaGJvYXJkL3F1aWNrLWFwcGx5L3F1aWNrLWFwcGx5LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcmVudWdhL0Rlc2t0b3AvVlNDLXdvcmtzcGFjZS9Bbmd1bGFyIFdvcmtzcGFjZS9jbG91ZG5vdy1jaHV0dGktd2ViL3NyYy9hcHAvdXNlci1tb2R1bGUvZGFzaGJvYXJkL3F1aWNrLWFwcGx5L3F1aWNrLWFwcGx5LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcmVudWdhL0Rlc2t0b3AvVlNDLXdvcmtzcGFjZS9Bbmd1bGFyIFdvcmtzcGFjZS9jbG91ZG5vdy1jaHV0dGktd2ViL3NyYy9hc3NldHMvc2Nzcy9kYXRlcGlja2VyLnNjc3MiLCIvaG9tZS9yZW51Z2EvRGVza3RvcC9WU0Mtd29ya3NwYWNlL0FuZ3VsYXIgV29ya3NwYWNlL2Nsb3Vkbm93LWNodXR0aS13ZWIvc3JjL2Fzc2V0cy9zY3NzL19taXhpbi5zY3NzIiwiL2hvbWUvcmVudWdhL0Rlc2t0b3AvVlNDLXdvcmtzcGFjZS9Bbmd1bGFyIFdvcmtzcGFjZS9jbG91ZG5vdy1jaHV0dGktd2ViL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ3FCaEI7O0VBRUUsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBRG5CRjtBQ3FCQTtFQUNFLCtFQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBRUEsc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FEbkJGO0FDb0VFO0VBQXVCLFlBQUE7QURoRXpCO0FDZ0V5QztFQUFtQixZQUFBO0FENUQ1RDtBQzRENEU7RUFBd0IsWUFBQTtBRHhEcEc7QUN3RG9IO0VBQXVCLFlBQUE7QURwRDNJO0FDb0QySjtFQUF5QixZQUFBO0FEaERwTDtBQ2dEb007RUFBcUIsWUFBQTtBRDVDek47QUM0Q3lPO0VBQXlCLFlBQUE7QUR4Q2xRO0FDd0NrUjtFQUF3QixZQUFBO0FEcEMxUztBQ29DMFQ7RUFBc0IsWUFBQTtBRGhDaFY7QUNnQ2dXO0VBQW9CLFlBQUE7QUQ1QnBYO0FDNEJvWTtFQUFvQixZQUFBO0FEeEJ4WjtBQ3dCd2E7RUFBeUIsWUFBQTtBRHBCamM7QUNvQmlkO0VBQThCLFlBQUE7QURoQi9lO0FDZ0IrZjtFQUErQixZQUFBO0FEWjloQjtBQ1k4aUI7RUFBNkIsWUFBQTtBRFIza0I7QUNRMmxCO0VBQThCLFlBQUE7QURKem5CO0FDSXlvQjtFQUFrQixZQUFBO0FEQTNwQjtBQ0EycUI7RUFBb0IsWUFBQTtBREkvckI7QUNKK3NCO0VBQWtCLFlBQUE7QURRanVCO0FDUml2QjtFQUFrQixZQUFBO0FEWW53QjtBQ1pteEI7RUFBMEIsWUFBQTtBRGdCN3lCO0FDaEI2ekI7RUFBeUIsWUFBQTtBRG9CdDFCO0FDcEJzMkI7RUFBMkIsWUFBQTtBRHdCajRCO0FDeEJpNUI7RUFBb0IsWUFBQTtBRDRCcjZCO0FDNUJxN0I7RUFBMkIsWUFBQTtBRGdDaDlCO0FDaENnK0I7RUFBa0IsWUFBQTtBRG9DbC9CO0FDcENrZ0M7RUFBdUIsWUFBQTtBRHdDemhDO0FDeEN5aUM7RUFBdUIsWUFBQTtBRDRDaGtDO0FDNUNnbEM7RUFBdUIsWUFBQTtBRGdEdm1DO0FDaER1bkM7RUFBc0IsWUFBQTtBRG9EN29DO0FDcEQ2cEM7RUFBNkIsWUFBQTtBRHdEMXJDO0FDeEQwc0M7RUFBc0IsWUFBQTtBRDREaHVDO0FDNURndkM7RUFBd0IsWUFBQTtBRGdFeHdDO0FDaEV3eEM7RUFBMkIsWUFBQTtBRG9FbnpDO0FDcEVtMEM7RUFBMkIsWUFBQTtBRHdFOTFDO0FDeEU4MkM7RUFBa0IsWUFBQTtBRDRFaDRDO0FDNUVnNUM7RUFBMEIsWUFBQTtBRGdGMTZDO0FDaEYwN0M7RUFBbUIsWUFBQTtBRG9GNzhDO0FDcEY2OUM7RUFBbUIsWUFBQTtBRHdGaC9DO0FDeEZnZ0Q7RUFBc0IsWUFBQTtBRDRGdGhEO0FDNUZzaUQ7RUFBaUIsWUFBQTtBRGdHdmpEO0FDaEd1a0Q7RUFBc0IsWUFBQTtBRG9HN2xEO0FDcEc2bUQ7RUFBcUIsWUFBQTtBRHdHbG9EO0FDeEdrcEQ7RUFBcUIsWUFBQTtBRDRHdnFEO0FDNUd1ckQ7RUFBb0IsWUFBQTtBRGdIM3NEO0FDOUdFO0VBQ0UsWUFBQTtBRGlISjtBQy9HRTtFQUNFLFlBQUE7QURrSEo7QUNoSEU7RUFDRSxZQUFBO0FEbUhKO0FDakhFO0VBQ0UsWUFBQTtBRG9ISjtBQ2xIRTtFQUNFLFlBQUE7QURxSEo7QUNuSEU7RUFDRSxZQUFBO0FEc0hKO0FDcEhFO0VBQ0UsWUFBQTtBRHVISjtBQ3JIRTtFQUNFLFlBQUE7QUR3SEo7QUN0SEU7RUFDRSxZQUFBO0FEeUhKO0FDdkhFO0VBQ0UsWUFBQTtBRDBISjtBQ3hIRTtFQUNFLFlBQUE7QUQySEo7QUNyT0E7O0VBRUUsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBRHdPRjtBQ3RPQTtFQUNFLCtFQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBRUEsc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FEd09GO0FDdkxFO0VBQXVCLFlBQUE7QUQyTHpCO0FDM0x5QztFQUFtQixZQUFBO0FEK0w1RDtBQy9MNEU7RUFBd0IsWUFBQTtBRG1NcEc7QUNuTW9IO0VBQXVCLFlBQUE7QUR1TTNJO0FDdk0ySjtFQUF5QixZQUFBO0FEMk1wTDtBQzNNb007RUFBcUIsWUFBQTtBRCtNek47QUMvTXlPO0VBQXlCLFlBQUE7QURtTmxRO0FDbk5rUjtFQUF3QixZQUFBO0FEdU4xUztBQ3ZOMFQ7RUFBc0IsWUFBQTtBRDJOaFY7QUMzTmdXO0VBQW9CLFlBQUE7QUQrTnBYO0FDL05vWTtFQUFvQixZQUFBO0FEbU94WjtBQ25Pd2E7RUFBeUIsWUFBQTtBRHVPamM7QUN2T2lkO0VBQThCLFlBQUE7QUQyTy9lO0FDM08rZjtFQUErQixZQUFBO0FEK085aEI7QUMvTzhpQjtFQUE2QixZQUFBO0FEbVAza0I7QUNuUDJsQjtFQUE4QixZQUFBO0FEdVB6bkI7QUN2UHlvQjtFQUFrQixZQUFBO0FEMlAzcEI7QUMzUDJxQjtFQUFvQixZQUFBO0FEK1AvckI7QUMvUCtzQjtFQUFrQixZQUFBO0FEbVFqdUI7QUNuUWl2QjtFQUFrQixZQUFBO0FEdVFud0I7QUN2UW14QjtFQUEwQixZQUFBO0FEMlE3eUI7QUMzUTZ6QjtFQUF5QixZQUFBO0FEK1F0MUI7QUMvUXMyQjtFQUEyQixZQUFBO0FEbVJqNEI7QUNuUmk1QjtFQUFvQixZQUFBO0FEdVJyNkI7QUN2UnE3QjtFQUEyQixZQUFBO0FEMlJoOUI7QUMzUmcrQjtFQUFrQixZQUFBO0FEK1JsL0I7QUMvUmtnQztFQUF1QixZQUFBO0FEbVN6aEM7QUNuU3lpQztFQUF1QixZQUFBO0FEdVNoa0M7QUN2U2dsQztFQUF1QixZQUFBO0FEMlN2bUM7QUMzU3VuQztFQUFzQixZQUFBO0FEK1M3b0M7QUMvUzZwQztFQUE2QixZQUFBO0FEbVQxckM7QUNuVDBzQztFQUFzQixZQUFBO0FEdVRodUM7QUN2VGd2QztFQUF3QixZQUFBO0FEMlR4d0M7QUMzVHd4QztFQUEyQixZQUFBO0FEK1RuekM7QUMvVG0wQztFQUEyQixZQUFBO0FEbVU5MUM7QUNuVTgyQztFQUFrQixZQUFBO0FEdVVoNEM7QUN2VWc1QztFQUEwQixZQUFBO0FEMlUxNkM7QUMzVTA3QztFQUFtQixZQUFBO0FEK1U3OEM7QUMvVTY5QztFQUFtQixZQUFBO0FEbVZoL0M7QUNuVmdnRDtFQUFzQixZQUFBO0FEdVZ0aEQ7QUN2VnNpRDtFQUFpQixZQUFBO0FEMlZ2akQ7QUMzVnVrRDtFQUFzQixZQUFBO0FEK1Y3bEQ7QUMvVjZtRDtFQUFxQixZQUFBO0FEbVdsb0Q7QUNuV2twRDtFQUFxQixZQUFBO0FEdVd2cUQ7QUN2V3VyRDtFQUFvQixZQUFBO0FEMlczc0Q7QUN6V0U7RUFDRSxZQUFBO0FENFdKO0FDMVdFO0VBQ0UsWUFBQTtBRDZXSjtBQzNXRTtFQUNFLFlBQUE7QUQ4V0o7QUM1V0U7RUFDRSxZQUFBO0FEK1dKO0FDN1dFO0VBQ0UsWUFBQTtBRGdYSjtBQzlXRTtFQUNFLFlBQUE7QURpWEo7QUMvV0U7RUFDRSxZQUFBO0FEa1hKO0FDaFhFO0VBQ0UsWUFBQTtBRG1YSjtBQ2pYRTtFQUNFLFlBQUE7QURvWEo7QUNsWEU7RUFDRSxZQUFBO0FEcVhKO0FDblhFO0VBQ0UsWUFBQTtBRHNYSjtBRWpmQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FGb2ZKO0FFamZBOztFQUVJLFVBQUE7RUFDQSxvREFBQTtBRm9mSjtBRWhmSTtFQUNJLHdCQUFBO0FGbWZSO0FFL2VBO0VBQ0ksdUJBQUE7QUZrZko7QUUvZUE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FGa2ZKO0FFL2VBO0VBQ0ksK0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBRmtmSjtBRS9lQTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBRmtmSjtBRTdlQTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7QUZnZko7QUU5ZUk7RUFFSSx3QkFBQTtBRitlUjtBRTVlSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsNkJBQUE7QUY2ZVI7QUdoaUJRO0VEMENKO0lBWVEscUJBQUE7SUFDQSxpREFBQTtZQUFBLHlDQUFBO0VGOGVWO0FBQ0Y7QUUzZUE7RUFFSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBRjRlSjtBRXhlSTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0FGeWVSO0FFdmVJO0VBRUosd0NBQUE7QUZ3ZUE7QUVyZUE7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBRnNlSjtBRXBlSTtFQUNJLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBRnNlUjtBRXBlUTs7RUFFSSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7QUZzZVo7QUd2a0JRO0VENkZBOztJQU9RLHVCQUFBO0VGd2VkO0FBQ0Y7QUVyZVE7RUFLSSxnQkFBQTtFQUNBLDhCQUFBO0FGbWVaO0FFeGVZO0VBQ0ksY0RoSFY7QUQwbEJOO0FFbmVRO0VBQ0ksa0JBQUE7RUFDQSxjRDNIQTtFQzRIQSxXQUFBO0VBQ0Esa0JBQUE7QUZxZVo7QUVuZVk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0RsSVQ7QUR1bUJQO0FHbG1CUTtFRHVISTtJQVNRLFdBQUE7SUFDQSxZQUFBO0VGc2VsQjtBQUNGO0FFbmVZO0VBR0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FGbWVoQjtBRWplZ0I7RUFDSSxjRDNKYjtBRDhuQlA7QUU3ZEk7RUFDSSwrQkFBQTtBRitkUjtBRXpkQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FGNGRKO0FFMWRJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FGNGRSO0FFeGRBO0VBQ0ksYUFBQTtBRjJkSjtBRXpkSTtFQUNJLGNBQUE7QUYyZFI7QUV4ZEk7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0FGMGRSO0FFdmRJO0VEckpBLG1FQUFBO0VDdUpJLDRCQUFBO0FGeWRSO0FFdGRBO0VBRUksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBRndkSjtBSXhxQkE7RUFDSSx3QkFBQTtBSjJxQko7QUl6cUJBO0VBQ0ksd0JBQUE7QUo0cUJKO0FJeHFCSTtFQU1JLG1CQUFBO0FKc3FCUjtBSTFxQlE7RUFFSSxZQUFBO0FKMnFCWjtBSXBxQkE7RUFFSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUpzcUJKO0FJcnFCSTtFQUVJLGVBQUE7QUpzcUJSO0FJbHFCQTtFQUVJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnREFBQTtVQUFBLHdDQUFBO0FKb3FCSjtBSWpxQkk7RUFDSSxnQkFBQTtBSm9xQlI7QUlucUJRO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtBSnFxQlo7QUlucUJRO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FKcXFCWjtBSXBxQlk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUpzcUJoQjtBSW5xQkk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBSnFxQlI7QUlwcUJRO0VBQ0ksZ0JBQUE7QUpzcUJaO0FJL3BCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUprcUJKO0FJaHFCQTtFQUNJLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUptcUJKO0FJNXBCSTtFQUVJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FKOHBCUjtBSTVwQkk7RUFFSSxjQUFBO0FKNnBCUjtBSTFwQkk7RUFFSSxjQUFBO0FKMnBCUjtBSXZwQkk7RUFDSSx5QkFBQTtBSjBwQlI7QUl2cEJBO0VBRUksZ0JBQUE7QUp5cEJKO0FJcnBCSTtFQUVJLGdCQUFBO0FKdXBCUjtBR3Z0QlE7RUM4REo7SUFLUSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0VKd3BCVjtBQUNGO0FHanZCUTtFQytFUjtJQWNRLG1CQUFBO0VKd3BCTjtBQUNGO0FHbnVCUTtFQzREUjtJQWtCUSxjQUFBO0VKeXBCTjtFSXhwQk07SUFFSSw4QkFBQTtFSnlwQlY7QUFDRjtBSXJwQkE7RUFFSSxnQkFBQTtBSnVwQko7QUlucEJJO0VBRUkscUJBQUE7QUpxcEJSO0FJanBCQTtFQUVJLGdCQUFBO0FKbXBCSjtBR255QlE7RUM4SVI7SUFLUSxnQkFBQTtFSm9wQk47QUFDRjtBRzV2QlE7RUNrR1I7SUFTUSxnQkFBQTtFSnFwQk47QUFDRjtBSWhwQkk7RUFFQSxlQUFBO0FKa3BCSjtBSS9vQkE7RUFFSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUppcEJKO0FJOW9CQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FKaXBCSjtBSS9vQkU7RUFDRSxvQ0FBQTtBSmtwQko7QUlocEJFO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0FKbXBCSjtBSWhwQkU7RUFDRSxtREFBQTtBSm1wQko7QUkvb0JFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUprcEJKO0FJaHBCRTtFQUNFLG9DQUFBO0FKbXBCSjtBSWpwQkU7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7QUpvcEJKO0FJbHBCRTtFQUNFLG1EQUFBO0FKcXBCSjtBR2oyQlE7RUM4TU47SUFJUSxnQkFBQTtFSm9wQlI7QUFDRjtBRzkwQlE7RUNxTE47SUFRUSxnQkFBQTtFSnFwQlI7QUFDRjtBR2gwQlE7RUNrS047SUFZUSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VKc3BCUjtBQUNGO0FHMTFCUTtFQ3NNUjtJQUlRLGdCQUFBO0VKcXBCTjtBQUNGO0FJbHBCQTtFQUNJLDRCQUFBO0FKcXBCSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbW9kdWxlL2Rhc2hib2FyZC9xdWljay1hcHBseS9xdWljay1hcHBseS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbltjbGFzc149aWNvbl9dLFxuW2NsYXNzKj1cIiBpY29uX1wiXSB7XG4gIGZvbnQtZmFtaWx5OiBcImNodXR0aVwiICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3NePWljb24xLV0sIFtjbGFzcyo9XCIgaWNvbjEtXCJdIHtcbiAgLyogdXNlICFpbXBvcnRhbnQgdG8gcHJldmVudCBpc3N1ZXMgd2l0aCBicm93c2VyIGV4dGVuc2lvbnMgdGhhdCBjaGFuZ2UgZm9udHMgKi9cbiAgZm9udC1mYW1pbHk6IFwiaWNvbW9vblwiICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmljb25fZGFzaGJvYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSAXCI7XG59XG5cbi5pY29uX2xlYXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSBXCI7XG59XG5cbi5pY29uX2F0dGVuZGFuY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIJcIjtcbn1cblxuLmljb25fdGltZXNoZWV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSDXCI7XG59XG5cbi5pY29uX2F0dGVuZGFuY2UxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSEXCI7XG59XG5cbi5pY29uX3N1cHBvcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIVcIjtcbn1cblxuLmljb25fcXVpY2tfYXBwbHk6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIZcIjtcbn1cblxuLmljb25fbGVhdmVfYmFuazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eh1wiO1xufVxuXG4uaWNvbl9jb2xsYXBzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EiFwiO1xufVxuXG4uaWNvbl9leHBhbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIlcIjtcbn1cblxuLmljb25fZmlsdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSKXCI7XG59XG5cbi5pY29uX2RhdGVfcGlja2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSLXCI7XG59XG5cbi5pY29uX2Fycm93X3RoaWNrX2xlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIxcIjtcbn1cblxuLmljb25fYXJyb3dfdGhpY2tfcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhI1cIjtcbn1cblxuLmljb25fYXJyb3dfdGhpbl9sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSOXCI7XG59XG5cbi5pY29uX2Fycm93X3RoaW5fcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhI9cIjtcbn1cblxuLmljb25faG9sZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EkFwiO1xufVxuXG4uaWNvbl9jYW5jZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJFcIjtcbn1cblxuLmljb25fdGljazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EklwiO1xufVxuXG4uaWNvbl9sb2NrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSTXCI7XG59XG5cbi5pY29uX2VkaXRfb3V0bGluZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ElFwiO1xufVxuXG4uaWNvbl9lZGl0X2ZpbGxlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ElVwiO1xufVxuXG4uaWNvbl9kZWxldGVfZmlsbGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSWXCI7XG59XG5cbi5pY29uX3NlYXJjaDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6El1wiO1xufVxuXG4uaWNvbl9ub3RpZmljYXRpb25zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSYXCI7XG59XG5cbi5pY29uX3RpbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJlcIjtcbn1cblxuLmljb25fZGF0ZV90aW1lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSaXCI7XG59XG5cbi5pY29uX3Byb2JhdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Em1wiO1xufVxuXG4uaWNvbl9jb25maXJtZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJxcIjtcbn1cblxuLmljb25faG9saWRheXM6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJ1cIjtcbn1cblxuLmljb25fcHJpb3JpdHlfdXJnZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSeXCI7XG59XG5cbi5pY29uX2Fycm93X3VwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSfXCI7XG59XG5cbi5pY29uX2Fycm93X2Rvd246YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKBcIjtcbn1cblxuLmljb25fc2hvd19wYXNzd29yZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EoVwiO1xufVxuXG4uaWNvbl9oaWRlX3Bhc3N3b3JkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSiXCI7XG59XG5cbi5pY29uX25hbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKNcIjtcbn1cblxuLmljb25fb3JnYW5pc2F0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSkXCI7XG59XG5cbi5pY29uX3Bob25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSlXCI7XG59XG5cbi5pY29uX2VtYWlsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSmXCI7XG59XG5cbi5pY29uX3Bhc3N3b3JkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSnXCI7XG59XG5cbi5pY29uX2FkZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EqFwiO1xufVxuXG4uaWNvbl9zaWduX291dDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EqVwiO1xufVxuXG4uaWNvbl9wcm9maWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSqXCI7XG59XG5cbi5pY29uX3dhcm5pbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKtcIjtcbn1cblxuLmljb25fY2FtZXJhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSsXCI7XG59XG5cbi5pY29uMS11cGxvYWQtdG8tY2xvdWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIBcIjtcbn1cblxuLmljb24xLWNsb3VkLWNvbXB1dGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kgVwiO1xufVxuXG4uaWNvbjEtZGFzaGJvYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSCXCI7XG59XG5cbi5pY29uMS1maWx0ZXItcmVzdWx0czpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kg1wiO1xufVxuXG4uaWNvbjEtYnVpbGRpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIRcIjtcbn1cblxuLmljb24xLW5vdW5fQ2FsZW5kYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIVcIjtcbn1cblxuLmljb24xLW5vdW5fUHJvamVjdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6khlwiO1xufVxuXG4uaWNvbjEtbm91bl9VcGxvYWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIdcIjtcbn1cblxuLmljb24xLW5vdW5fdXNlcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIhcIjtcbn1cblxuLmljb24xLW5vdW5fV29yazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kiVwiO1xufVxuXG4uaWNvbjEtUGF0aDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kilwiO1xufVxuXG5bY2xhc3NePWljb25fXSxcbltjbGFzcyo9XCIgaWNvbl9cIl0ge1xuICBmb250LWZhbWlseTogXCJjaHV0dGlcIiAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzXj1pY29uMS1dLCBbY2xhc3MqPVwiIGljb24xLVwiXSB7XG4gIC8qIHVzZSAhaW1wb3J0YW50IHRvIHByZXZlbnQgaXNzdWVzIHdpdGggYnJvd3NlciBleHRlbnNpb25zIHRoYXQgY2hhbmdlIGZvbnRzICovXG4gIGZvbnQtZmFtaWx5OiBcImljb21vb25cIiAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAvKiBCZXR0ZXIgRm9udCBSZW5kZXJpbmcgPT09PT09PT09PT0gKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5pY29uX2Rhc2hib2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EgFwiO1xufVxuXG4uaWNvbl9sZWF2ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EgVwiO1xufVxuXG4uaWNvbl9hdHRlbmRhbmNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSCXCI7XG59XG5cbi5pY29uX3RpbWVzaGVldDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eg1wiO1xufVxuXG4uaWNvbl9hdHRlbmRhbmNlMTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EhFwiO1xufVxuXG4uaWNvbl9zdXBwb3J0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSFXCI7XG59XG5cbi5pY29uX3F1aWNrX2FwcGx5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSGXCI7XG59XG5cbi5pY29uX2xlYXZlX2Jhbms6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIdcIjtcbn1cblxuLmljb25fY29sbGFwc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIhcIjtcbn1cblxuLmljb25fZXhwYW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSJXCI7XG59XG5cbi5pY29uX2ZpbHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EilwiO1xufVxuXG4uaWNvbl9kYXRlX3BpY2tlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ei1wiO1xufVxuXG4uaWNvbl9hcnJvd190aGlja19sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSMXCI7XG59XG5cbi5pY29uX2Fycm93X3RoaWNrX3JpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSNXCI7XG59XG5cbi5pY29uX2Fycm93X3RoaW5fbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EjlwiO1xufVxuXG4uaWNvbl9hcnJvd190aGluX3JpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSPXCI7XG59XG5cbi5pY29uX2hvbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJBcIjtcbn1cblxuLmljb25fY2FuY2VsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSRXCI7XG59XG5cbi5pY29uX3RpY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJJcIjtcbn1cblxuLmljb25fbG9jazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ek1wiO1xufVxuXG4uaWNvbl9lZGl0X291dGxpbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJRcIjtcbn1cblxuLmljb25fZWRpdF9maWxsZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJVcIjtcbn1cblxuLmljb25fZGVsZXRlX2ZpbGxlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EllwiO1xufVxuXG4uaWNvbl9zZWFyY2g6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJdcIjtcbn1cblxuLmljb25fbm90aWZpY2F0aW9uczpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EmFwiO1xufVxuXG4uaWNvbl90aW1lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSZXCI7XG59XG5cbi5pY29uX2RhdGVfdGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EmlwiO1xufVxuXG4uaWNvbl9wcm9iYXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJtcIjtcbn1cblxuLmljb25fY29uZmlybWVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oScXCI7XG59XG5cbi5pY29uX2hvbGlkYXlzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSdXCI7XG59XG5cbi5pY29uX3ByaW9yaXR5X3VyZ2VudDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EnlwiO1xufVxuXG4uaWNvbl9hcnJvd191cDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6En1wiO1xufVxuXG4uaWNvbl9hcnJvd19kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSgXCI7XG59XG5cbi5pY29uX3Nob3dfcGFzc3dvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKFcIjtcbn1cblxuLmljb25faGlkZV9wYXNzd29yZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EolwiO1xufVxuXG4uaWNvbl9uYW1lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSjXCI7XG59XG5cbi5pY29uX29yZ2FuaXNhdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EpFwiO1xufVxuXG4uaWNvbl9waG9uZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EpVwiO1xufVxuXG4uaWNvbl9lbWFpbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EplwiO1xufVxuXG4uaWNvbl9wYXNzd29yZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ep1wiO1xufVxuXG4uaWNvbl9hZGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKhcIjtcbn1cblxuLmljb25fc2lnbl9vdXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKlcIjtcbn1cblxuLmljb25fcHJvZmlsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EqlwiO1xufVxuXG4uaWNvbl93YXJuaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSrXCI7XG59XG5cbi5pY29uX2NhbWVyYTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ErFwiO1xufVxuXG4uaWNvbjEtdXBsb2FkLXRvLWNsb3VkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSAXCI7XG59XG5cbi5pY29uMS1jbG91ZC1jb21wdXRpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIFcIjtcbn1cblxuLmljb24xLWRhc2hib2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kglwiO1xufVxuXG4uaWNvbjEtZmlsdGVyLXJlc3VsdHM6YmVmb3JlIHtcbiAgY29udGVudDogXCLupINcIjtcbn1cblxuLmljb24xLWJ1aWxkaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSEXCI7XG59XG5cbi5pY29uMS1ub3VuX0NhbGVuZGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSFXCI7XG59XG5cbi5pY29uMS1ub3VuX1Byb2plY3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIZcIjtcbn1cblxuLmljb24xLW5vdW5fVXBsb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSHXCI7XG59XG5cbi5pY29uMS1ub3VuX3VzZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSIXCI7XG59XG5cbi5pY29uMS1ub3VuX1dvcms6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIlcIjtcbn1cblxuLmljb24xLVBhdGg6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIpcIjtcbn1cblxuLmRhdGVyYW5nZXBpY2tlciB7XG4gIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xuICB0b3A6IDUwJSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmRhdGVyYW5nZXBpY2tlciAuY2FsZW5kYXIgdGQuYWN0aXZlOjpiZWZvcmUsXG4uZGF0ZXJhbmdlcGlja2VyIC5jYWxlbmRhciB0ZDpob3Zlcjo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC45cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cblxuLnBlcm1pc3N0aW9uIC5kYXRlcmFuZ2VwaWNrZXIubHRyIC5jYWxlbmRhci5yaWdodCAuY2FsZW5kYXItdGFibGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIubHRyIC5yYW5nZXMge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmRhdGVyYW5nZXBpY2tlciAuYnRuIHtcbiAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgLmlucHV0LW1pbmkge1xuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyIC5kYXRlcmFuZ2VwaWNrZXJfaW5wdXQgaSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDJyZW0gM3JlbSAhaW1wb3J0YW50O1xufVxuLmRhdGVyYW5nZXBpY2tlcjphZnRlciwgLmRhdGVyYW5nZXBpY2tlcjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4uZGF0ZXJhbmdlcGlja2VyLmRvdWJsZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAxMCUpICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuZGF0ZXJhbmdlcGlja2VyLmRvdWJsZSB7XG4gICAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI4JSwgMTAlKSAhaW1wb3J0YW50O1xuICB9XG59XG4uZGF0ZXJhbmdlcGlja2VyIC5wcmV2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzNXB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLmRhdGVyYW5nZXBpY2tlciAubmV4dCBpLCAuZGF0ZXJhbmdlcGlja2VyIC5wcmV2IGkge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZGF0ZXJhbmdlcGlja2VyIC5uZXh0OmhvdmVyLCAuZGF0ZXJhbmdlcGlja2VyIC5wcmV2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5kYXRlcmFuZ2VwaWNrZXIgLm5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLmRhdGVyYW5nZXBpY2tlciAuY2FsZW5kYXIge1xuICBtYXgtd2lkdGg6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbi5kYXRlcmFuZ2VwaWNrZXIgLmNhbGVuZGFyIHRkLFxuLmRhdGVyYW5nZXBpY2tlciAuY2FsZW5kYXIgdGQge1xuICBwYWRkaW5nOiAxMXB4IDhweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuZGF0ZXJhbmdlcGlja2VyIC5jYWxlbmRhciB0ZCxcbi5kYXRlcmFuZ2VwaWNrZXIgLmNhbGVuZGFyIHRkIHtcbiAgICBwYWRkaW5nOiA0cHggIWltcG9ydGFudDtcbiAgfVxufVxuLmRhdGVyYW5nZXBpY2tlciAuY2FsZW5kYXIgdGgge1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAycHggMCAxOHB4ICFpbXBvcnRhbnQ7XG59XG4uZGF0ZXJhbmdlcGlja2VyIC5jYWxlbmRhciB0aCBzcGFuIHtcbiAgY29sb3I6ICM2RTZFNkU7XG59XG4uZGF0ZXJhbmdlcGlja2VyIC5jYWxlbmRhciB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0MDQwNDA7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZGF0ZXJhbmdlcGlja2VyIC5jYWxlbmRhciB0ZCBzcGFuIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIC5kYXRlcmFuZ2VwaWNrZXIgLmNhbGVuZGFyIHRkIHNwYW4ge1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgfVxufVxuLmRhdGVyYW5nZXBpY2tlciAuY2FsZW5kYXIgdGQuYWN0aXZlLCAuZGF0ZXJhbmdlcGlja2VyIC5jYWxlbmRhciB0ZDpob3ZlciB7XG4gIGNvbG9yOiAjNDA0MDQwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuLmRhdGVyYW5nZXBpY2tlciAuY2FsZW5kYXIgdGQuYWN0aXZlIHNwYW4sIC5kYXRlcmFuZ2VwaWNrZXIgLmNhbGVuZGFyIHRkOmhvdmVyIHNwYW4ge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5kYXRlcmFuZ2VwaWNrZXIgLmNhbGVuZGFyLXRhYmxlIHtcbiAgcGFkZGluZzogMzVweCAzNXB4IDAgIWltcG9ydGFudDtcbn1cblxuLndpZGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA1MDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XG59XG4ud2lkZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5kYXRlcmFuZ2VwaWNrZXIuYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZGF0ZXJhbmdlcGlja2VyIC5idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogMCA1NHB4IDMwcHggMCAhaW1wb3J0YW50O1xufVxuLmRhdGVyYW5nZXBpY2tlciAuYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzY3NDdENCAwJSwgIzlBNDVEMiAxMDAlKTtcbiAgcGFkZGluZzogMnB4IDEycHggIWltcG9ydGFudDtcbn1cblxuLm1vbnRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICB0b3A6IDUycHg7XG59XG5cbi5uZ2ItdHAtbWVyaWRpYW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbi5idG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnF1aWNrX19hcHBseSBoNSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ucXVpY2tfX2FwcGx5IGg1OjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EhlwiO1xufVxuXG4uZGF0ZV9faWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHggIWltcG9ydGFudDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbn1cbi5kYXRlX19pY29uIGkge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIge1xuICB0b3A6IDUwJSAhaW1wb3J0YW50O1xuICBsZWZ0OiA1MCUgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcbn1cblxuLnF1aWNrQXBwbHlNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiA1NjBweDtcbn1cbi5xdWlja0FwcGx5TW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbn1cbi5xdWlja0FwcGx5TW9kYWwgLm1vZGFsLWRpYWxvZyAubG9wX3dhcm5pbmdfdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkYzRTg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xdWlja0FwcGx5TW9kYWwgLm1vZGFsLWRpYWxvZyAubG9wX3dhcm5pbmdfdGV4dCAuaWNvbl93YXJuaW5nIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjRUFBRjc1O1xufVxuLnF1aWNrQXBwbHlNb2RhbCAubW9kYWwtZGlhbG9nIC5pdGVtX2xpc3Qge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDEuMXJlbTtcbn1cbi5xdWlja0FwcGx5TW9kYWwgLm1vZGFsLWRpYWxvZyAuaXRlbV9saXN0IGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnJlc2V0LXBlcm1pc3Npb24ge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmNhbmNlbC1idXR0b24ge1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIC8qIGJvcmRlci1jb2xvcjogI2NjY2NjYzsgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbn1cblxuLmRhdGVQaWNrZXJfX2hlYWRlci0tcmlnaHQgLnJlc2V0LXBlcm1pc3Npb24ge1xuICBjb2xvcjogIzZDNDRFMTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHdpZHRoOiA2MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZGF0ZVBpY2tlcl9faGVhZGVyLS1yaWdodCAucGVybWlzc2lvbkRhdGUge1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5kYXRlUGlja2VyX19oZWFkZXItLXJpZ2h0IC5wZXJtaXNzaW9uU3RhcnRUaW1lcGlja2VyIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5wZXJtaXNzaW9uQW1vclBNLmFjdGl2ZSwgLnBlcm1pc3Npb25FbmRBbW9yUE0uYWN0aXZlIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzZDNDRFMTtcbn1cblxuLnRpbWVfX3N1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi50aW1lX19zZWN0aW9uIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAudGltZV9fc2VjdGlvbiBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnRpbWVfX3NlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAzLjFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAudGltZV9fc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgLnRpbWVfX3NlY3Rpb24gLnJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5tb2RhbC1kaWFsb2cge1xuICBtYXgtd2lkdGg6IDkxMHB4O1xufVxuXG4udGltZV9fc3VibWl0IGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRpbWVfX21hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDQ4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC50aW1lX19tYXJnaW4ge1xuICAgIG1hcmdpbi10b3A6IDM4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAudGltZV9fbWFyZ2luIHtcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICB9XG59XG5cbi50aW1lX190aXRsZSBoNCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTYgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsIC5jdXN0b20tZGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZDNDRFMSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWRheS1vbmR1dHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXktb25kdXR5LmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tZGF5LW9uZHV0eS5yYW5nZSwgLmN1c3RvbS1kYXktb25kdXR5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZDNDRFMSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LW9uZHV0eS5mYWRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSkgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAucGVybWlzc2lvbk1vZGVsIHtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnBlcm1pc3Npb25Nb2RlbCB7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5wZXJtaXNzaW9uTW9kZWwge1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5kYXRlX190YWJsZSB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxufVxuXG4udGltZV9lcnJvciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG59IiwiJHdoaXRlOiNmZmZmZmY7XG4kYm9yZGVyLWNvbG9yOiNERURFREU7XG4kYm9yZGVyLWxpZ2h0OiNFOEU4RTg7XG4kbGlnaHQtYmx1ZTojRjFGN0ZCO1xuJGRhcmtQaW5rOiM5QTQ1RDI7XG4kZGFya0JsdWU6IzY3NDdENDtcbiR0ZXh0LWNvbG9yOiM0MDQwNDA7XG4kcHJpbWFyeUNvbG9yOiM3MTUxREM7XG4kZ3JheTojNkU2RTZFO1xuJGJsYWNrOiMwMDAwMDA7XG4kZGFya1JlZDojRTMyQzJDO1xuJG9yYW5nZTojRkY2QzAwO1xuJGJyb3duOiNBQTM0N0I7XG4kYXJyb3dHcmF5OiM4NDg0ODQ7XG4kYmx1ZTogIzFjOTFmZjtcbiRyb3NlOiNGOTRGODk7XG4kbmVwdHVuZTojN0NBMUIxO1xuJHllbGxvdzojRTI4NjBEO1xuJGNvbG9yLWJhY2s6ICNlZmVmZWY7XG4kY29sb3ItYmFyOiAjNjc0N0Q0O1xuXG5bY2xhc3NePVwiaWNvbl9cIl0sXG5bY2xhc3MqPVwiIGljb25fXCJdIHtcbiAgZm9udC1mYW1pbHk6ICdjaHV0dGknICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuW2NsYXNzXj1cImljb24xLVwiXSwgW2NsYXNzKj1cIiBpY29uMS1cIl0ge1xuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICBmb250LWZhbWlseTogJ2ljb21vb24nICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5cbkBtaXhpbiBiZy1ncmFkaWVudCgpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsJGRhcmtQaW5rIDIwJSwgJGRhcmtCbHVlIDgwJSk7XG59XG5AbWl4aW4gdGhlbWUtYnRuKCl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya0JsdWUgMCUsICRkYXJrUGluayAxMDAlKTtcbn1cbkBtaXhpbiBiZy1ibGFjaygpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwkYmxhY2sgMCUsICMxMjEyMTMgMTAwJSk7XG59XG5AbWl4aW4gZm9udC1jb2xvcigpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCRkYXJrUGluayAyMCUsICRkYXJrQmx1ZSA4MCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya1BpbmsgMjAlLCAkZGFya0JsdWUgODAlKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7ICAgIFxuICB9XG4gIEBtaXhpbiAgYm9yZGVyLWJvdHRvbSgpIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogJGRhcmtCbHVlO1xuICAgIH1cbiAgfVxuXG5AbWl4aW4gdXNlckltZyAoKXtcblxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAuMTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuJWJ0bi1zaGFyZWQge1xuICAgIG1pbi1oZWlnaHQ6IDU1cHg7XG4gIH1cblxuICAuaWNvbl9kYXNoYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDBcIn0uaWNvbl9sZWF2ZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwMVwifS5pY29uX2F0dGVuZGFuY2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDJcIn0uaWNvbl90aW1lc2hlZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDNcIn0uaWNvbl9hdHRlbmRhbmNlMTpiZWZvcmV7Y29udGVudDpcIlxcZTEwNFwifS5pY29uX3N1cHBvcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDVcIn0uaWNvbl9xdWlja19hcHBseTpiZWZvcmV7Y29udGVudDpcIlxcZTEwNlwifS5pY29uX2xlYXZlX2Jhbms6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDdcIn0uaWNvbl9jb2xsYXBzZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwOFwifS5pY29uX2V4cGFuZDpiZWZvcmV7Y29udGVudDpcIlxcZTEwOVwifS5pY29uX2ZpbHRlcjpiZWZvcmV7Y29udGVudDpcIlxcZTEwYVwifS5pY29uX2RhdGVfcGlja2VyOmJlZm9yZXtjb250ZW50OlwiXFxlMTBiXCJ9Lmljb25fYXJyb3dfdGhpY2tfbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZTEwY1wifS5pY29uX2Fycm93X3RoaWNrX3JpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxlMTBkXCJ9Lmljb25fYXJyb3dfdGhpbl9sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxlMTBlXCJ9Lmljb25fYXJyb3dfdGhpbl9yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZTEwZlwifS5pY29uX2hvbGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTBcIn0uaWNvbl9jYW5jZWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTFcIn0uaWNvbl90aWNrOmJlZm9yZXtjb250ZW50OlwiXFxlMTEyXCJ9Lmljb25fbG9jazpiZWZvcmV7Y29udGVudDpcIlxcZTExM1wifS5pY29uX2VkaXRfb3V0bGluZTpiZWZvcmV7Y29udGVudDpcIlxcZTExNFwifS5pY29uX2VkaXRfZmlsbGVkOmJlZm9yZXtjb250ZW50OlwiXFxlMTE1XCJ9Lmljb25fZGVsZXRlX2ZpbGxlZDpiZWZvcmV7Y29udGVudDpcIlxcZTExNlwifS5pY29uX3NlYXJjaDpiZWZvcmV7Y29udGVudDpcIlxcZTExN1wifS5pY29uX25vdGlmaWNhdGlvbnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMThcIn0uaWNvbl90aW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTE5XCJ9Lmljb25fZGF0ZV90aW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTFhXCJ9Lmljb25fcHJvYmF0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxlMTFiXCJ9Lmljb25fY29uZmlybWVkOmJlZm9yZXtjb250ZW50OlwiXFxlMTFjXCJ9Lmljb25faG9saWRheXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWRcIn0uaWNvbl9wcmlvcml0eV91cmdlbnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWVcIn0uaWNvbl9hcnJvd191cDpiZWZvcmV7Y29udGVudDpcIlxcZTExZlwifS5pY29uX2Fycm93X2Rvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjBcIn0uaWNvbl9zaG93X3Bhc3N3b3JkOmJlZm9yZXtjb250ZW50OlwiXFxlMTIxXCJ9Lmljb25faGlkZV9wYXNzd29yZDpiZWZvcmV7Y29udGVudDpcIlxcZTEyMlwifS5pY29uX25hbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjNcIn0uaWNvbl9vcmdhbmlzYXRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjRcIn0uaWNvbl9waG9uZTpiZWZvcmV7Y29udGVudDpcIlxcZTEyNVwifS5pY29uX2VtYWlsOmJlZm9yZXtjb250ZW50OlwiXFxlMTI2XCJ9Lmljb25fcGFzc3dvcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjdcIn0uaWNvbl9hZGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjhcIn0uaWNvbl9zaWduX291dDpiZWZvcmV7Y29udGVudDpcIlxcZTEyOVwifS5pY29uX3Byb2ZpbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMmFcIn0uaWNvbl93YXJuaW5nOmJlZm9yZXtjb250ZW50OlwiXFxlMTJiXCJ9Lmljb25fY2FtZXJhOmJlZm9yZXtjb250ZW50OlwiXFxlMTJjXCJ9XG5cbiAgLmljb24xLXVwbG9hZC10by1jbG91ZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAwXCI7XG4gIH1cbiAgLmljb24xLWNsb3VkLWNvbXB1dGluZzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAxXCI7XG4gIH1cbiAgLmljb24xLWRhc2hib2FyZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAyXCI7XG4gIH1cbiAgLmljb24xLWZpbHRlci1yZXN1bHRzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDNcIjtcbiAgfVxuICAuaWNvbjEtYnVpbGRpbmc6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwNFwiO1xuICB9XG4gIC5pY29uMS1ub3VuX0NhbGVuZGFyOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDVcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9Qcm9qZWN0OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDZcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9VcGxvYWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwN1wiO1xuICB9XG4gIC5pY29uMS1ub3VuX3VzZXJzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDhcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9Xb3JrOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDlcIjtcbiAgfVxuICAuaWNvbjEtUGF0aDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTBhXCI7XG4gIH0iLCIvLyBEYXRlcGlja2VyIGN1c3RvbSBzdHlsZVxuQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvbWl4aW4uc2Nzcyc7XG5cbi5kYXRlcmFuZ2VwaWNrZXIge1xuICAgIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xuICAgIHRvcDogNTAlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgLmNhbGVuZGFyIHRkLmFjdGl2ZTo6YmVmb3JlLFxuLmRhdGVyYW5nZXBpY2tlciAuY2FsZW5kYXIgdGQ6aG92ZXI6OmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiAuOXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG5cbi5wZXJtaXNzdGlvbiB7XG4gICAgLmRhdGVyYW5nZXBpY2tlci5sdHIgLmNhbGVuZGFyLnJpZ2h0IC5jYWxlbmRhci10YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIubHRyIC5yYW5nZXMge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZXJhbmdlcGlja2VyIC5idG4ge1xuICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgLmlucHV0LW1pbmkge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cblxuLmRhdGVyYW5nZXBpY2tlciAuZGF0ZXJhbmdlcGlja2VyX2lucHV0IGkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICByaWdodDogMTBweCAhaW1wb3J0YW50O1xufVxuXG5cblxuLmRhdGVyYW5nZXBpY2tlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDJyZW0gM3JlbSAhaW1wb3J0YW50O1xuXG4gICAgJjphZnRlcixcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLmRvdWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAxMCUpICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAxMSUgIWltcG9ydGFudDtcblxuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXB0b3ApIHtcbiAgICAgICAgICAgIHdpZHRoOiA2NSUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI4JSwgMTAlKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICB9XG4ucHJldlxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzNXB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5uZXh0LCAucHJldlxue1xuICAgIGkgXG4gICAge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxuICAgIH1cbiAgICAmOmhvdmVyIFxuICAgIHtcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLm5leHQgXG57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbiAgICAuY2FsZW5kYXIge1xuICAgICAgICBtYXgtd2lkdGg6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcblxuICAgICAgICB0ZCxcbiAgICAgICAgdGQge1xuICAgICAgICAgICAgcGFkZGluZzogMTFweCA4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXB0b3ApIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoIHtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAwIDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcblxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFwdG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmFjdGl2ZSxcbiAgICAgICAgICAgICY6aG92ZXIge1xuXG4gICAgICAgICAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jYWxlbmRhci10YWJsZSB7XG4gICAgICAgIHBhZGRpbmc6IDM1cHggMzVweCAwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5cblxuLndpZGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTA1MDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG91dGxpbmU6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5idXR0b25zIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbjogMCA1NHB4IDMwcHggMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5idG4ge1xuICAgICAgICBAaW5jbHVkZSB0aGVtZS1idG4oKTtcbiAgICAgICAgcGFkZGluZzogMnB4IDEycHggIWltcG9ydGFudDtcbiAgICB9XG59XG4ubW9udGggXG57XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgICB0b3A6IDUycHg7XG59IiwiQG1peGluIGJyZWFrcG9pbnQoJHBvaW50KSB7XG4gICAgQGlmICRwb2ludD09YmlnLWRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PWRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PWxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBlbHNlIGlmICRwb2ludD09YXBwbGUtbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT10YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldC1zIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIEBlbHNlIGlmICRwb2ludD09bW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cblxuICAgIH1cbiAgIFxuXG59XG5cblxuXG5AbWl4aW4gZ3JhZGllbnQtdGV4dCgkYW5nbGU6IDQ1ZGVnLCAkY29sb3I6ICM2NzQ3RDQsICRhbW91bnQ6IDM1JSkge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IsIGFkanVzdC1odWUoJGNvbG9yLCAkYW1vdW50KSk7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBAbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAgIC1tb3otdHJhbnNpdGlvbjogICAgJHRyYW5zaXRpb247XG4gICAgLW8tdHJhbnNpdGlvbjogICAgICAkdHJhbnNpdGlvbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIHRyYW5zaXRpb246ICAgICAgICAgJHRyYW5zaXRpb247XG59XG4gICIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL21peGluLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvZGF0ZXBpY2tlci5zY3NzJztcblxuLm5nYi10cC1tZXJpZGlhbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuYnV0dG9uLmJ0bi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4ucXVpY2tfX2FwcGx5XG57XG4gICAgaDUgXG4gICAge1xuICAgICAgICAmOjpiZWZvcmVcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGVudDogXCJcXGUxMDZcIjtcbiAgICAgICAgfVxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbn1cblxuXG4uZGF0ZV9faWNvbiBcbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0cHggIWltcG9ydGFudDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaSBcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG59XG5cbi5kYXRlcmFuZ2VwaWNrZXIgXG57XG4gICAgdG9wOjUwJSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6NTAlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcbn1cbi5xdWlja0FwcGx5TW9kYWwge1xuICAgIC5tb2RhbC1kaWFsb2cge1xuICAgICAgICBtYXgtd2lkdGg6IDU2MHB4O1xuICAgICAgICAubW9kYWwtY29udGVudCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5sb3Bfd2FybmluZ190ZXh0e1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjNFODtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC5pY29uX3dhcm5pbmcge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRUFBRjc1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgLml0ZW1fbGlzdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgcGFkZGluZzogMS4xcmVtO1xuICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxufVxuXG4ucmVzZXQtcGVybWlzc2lvbiB7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmNhbmNlbC1idXR0b24ge1xuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICAgIC8qIGJvcmRlci1jb2xvcjogI2NjY2NjYzsgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuXG59XG5cblxuLmRhdGVQaWNrZXJfX2hlYWRlci0tcmlnaHQgXG57XG4gICAgLnJlc2V0LXBlcm1pc3Npb24gXG4gICAge1xuICAgICAgICBjb2xvcjogIzZDNDRFMTtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5wZXJtaXNzaW9uRGF0ZSBcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICBcbiAgICB9XG4gICAgLnBlcm1pc3Npb25TdGFydFRpbWVwaWNrZXJcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn1cbi5wZXJtaXNzaW9uQW1vclBNLCAucGVybWlzc2lvbkVuZEFtb3JQTSB7XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNkM0NEUxO1xuICAgIH1cbn1cbi50aW1lX19zdWJtaXQgXG57XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi50aW1lX19zZWN0aW9uIFxue1xuICAgIGxhYmVsIFxuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIFxuICAgIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMuMXJlbTtcbiAgICB9XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIFxuICAgIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIC5yb3cgXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuLm1vZGFsLWRpYWxvZ1xue1xuICAgIG1heC13aWR0aDogOTEwcHg7XG59XG4udGltZV9fc3VibWl0XG57XG4gICAgYnV0dG9uIFxuICAgIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbn1cblxuLnRpbWVfX21hcmdpbiBcbntcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoZGVza3RvcClcbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDM4cHg7XG4gICAgfVxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKVxuICAgIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICB9XG59XG5cbi50aW1lX190aXRsZSBcbntcbiAgICBoNCBcbntcbiAgICBmb250LXNpemU6IDIycHg7XG59XG59XG4ubW9kYWwtY29udGVudCBcbntcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG4vL2RhdGVyYW5nZXBpY2tlciBjdXN0b20tZGF5LW9uZHV0eVxuLmN1c3RvbS1kYXkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG4gIH1cbiAgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNiAhaW1wb3J0YW50O1xuICB9XG4gIC5jdXN0b20tZGF5LnJhbmdlLCAuY3VzdG9tLWRheTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNDRFMSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSA7XG4gIH1cblxuICAuY3VzdG9tLWRheS5mYWRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KSAhaW1wb3J0YW50O1xuICB9XG4gIC8vb24tZHV0eSBkYXRlcmFuZ2VwaWNrZXJcblxuICAuY3VzdG9tLWRheS1vbmR1dHkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG4gIH1cbiAgLmN1c3RvbS1kYXktb25kdXR5LmZvY3VzZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTYgIWltcG9ydGFudDtcbiAgfVxuICAuY3VzdG9tLWRheS1vbmR1dHkucmFuZ2UsIC5jdXN0b20tZGF5LW9uZHV0eTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZDNDRFMSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY3VzdG9tLWRheS1vbmR1dHkuZmFkZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSkgIWltcG9ydGFudDtcbiAgfVxuICAucGVybWlzc2lvbk1vZGVsIFxuICB7XG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KGRlc2t0b3ApIFxuICAgICAge1xuICAgICAgICAgIG1heC13aWR0aDogNzY4cHg7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkgXG4gICAgICB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSBcbiAgICAgIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICB9XG4uZGF0ZV9fdGFibGVcbntcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkgXG4gICAge1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4XG4gICAgfVxufVxuICAvL3RpbWUtZm9ybWF0IGVycm9yXG4udGltZV9lcnJvciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbn1cbi5sZWF2ZVNlbGVjdGlvbiBcbntcblxufSJdfQ== */"];



/***/ }),

/***/ "./src/app/user-module/dashboard/quick-apply/quick-apply.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user-module/dashboard/quick-apply/quick-apply.component.ts ***!
  \****************************************************************************/
/*! exports provided: QuickApplyComponent, validSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickApplyComponent", function() { return QuickApplyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validSpace", function() { return validSpace; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/urlConstant */ "./src/app/services/urlConstant.ts");
/* harmony import */ var _services_ValidatingForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ValidatingForm */ "./src/app/services/ValidatingForm.ts");




class QuickApplyComponent extends _services_ValidatingForm__WEBPACK_IMPORTED_MODULE_3__["ValidatingForm"] {
    constructor(urlconstant, genericservice, commonservice, messageConstant, commonService, encryptdecryptlocalstorage, dataSharingService, calendar) {
        super();
        this.urlconstant = urlconstant;
        this.genericservice = genericservice;
        this.commonservice = commonservice;
        this.messageConstant = messageConstant;
        this.commonService = commonService;
        this.encryptdecryptlocalstorage = encryptdecryptlocalstorage;
        this.dataSharingService = dataSharingService;
        this.dashBoardPaginationView = true;
        this.leaveSummaryList = [];
        this.leaveSummaryUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].leaveSummaryApi;
        this.getUserUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].getUserAPi;
        this.getLeaveParamUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].getLeaveParamAPi;
        this.applyLeaveUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].applyLeaveAPi;
        this.getOrgParmUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].getOrgParmApi;
        this.getLeaveStatusUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].getLeaveStatusApi;
        this.saveNotificationURL = _services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].saveNotificationApi;
        this.allEventsUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].allEvents;
        this.saveEventUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].saveEvent;
        this.googleSyncUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].googleSyncUrl;
        this.getHolidaysUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].holidayList;
        this.gemsEmployeeMasterObj = null;
        this.halfdayflog = true;
        this.type = 'LEA';
        this.lveParamDetails = null;
        this.orgParamDetails = null;
        this.employeeLeaveMaster = [];
        this.employeeMaster = [];
        this.leaveSummaryWithODPERList = [];
        this.data2 = null;
        this.dataSource1 = [];
        this.hoursflog = true;
        this.meridian = true;
        this.spinners = false;
        this.permissionDate = 'DATE';
        this.startTimepickerAM = true;
        this.startTimepickerPM = false;
        this.endTimepickerAM = false;
        this.endTimepickerPM = true;
        this.options1 = {
            locale: {
                format: 'DD MMM YYYY',
                'applyLabel': 'Done',
                'cancelLabel': 'Cancel',
            },
            opens: 'right',
            autoUpdateInput: false,
        };
        this.options2 = {
            locale: {
                format: 'DD MMM YYYY',
                'applyLabel': 'Done',
                'cancelLabel': 'Cancel',
            },
            // autoUpdateInput: false,
            timePicker: true,
            opens: 'right'
        };
        this.options3 = {
            locale: {
                format: 'DD MMM YYYY',
                'applyLabel': 'Done',
                'cancelLabel': 'Cancel',
            },
            autoUpdateInput: false,
            // timePicker:true,
            opens: 'right'
        };
        this.leaveTypeChecked = false;
        //ON DUTY
        this.onDutyChecked = true;
        this.onDutyEndAMorPM = 'AM';
        this.onDutyStartAMorPM = 'AM';
        this.isChecked = true;
        this.leaveDisable = true;
        this.preloader = false;
        this.isLoadingResults = false;
        this.messageStore = messageConstant;
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
            console.log('called..........');
            if (data == 'true') {
                console.log('called..........');
                this.fromDate = calendar.getToday();
                this.today = calendar.getToday();
                this.isRange(this.fromDate);
                this.getEmployeeByUserId();
            }
        });
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
        this.leaveTypesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
    }
    getHolidays() {
        let reqPayload = {
            "gemsOrganisation": {
                "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
            }
        };
        this.genericservice.post(this.getHolidaysUrl, reqPayload, false).subscribe(res => {
            // this.preloader = false;
            this.holidayList = res.data;
        });
    }
    //daterangepicker methods
    onDateSelection(date) {
        this.halfLeaveType = '';
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
            this.finalDateFrom = this.fromDate.month + '-' + this.fromDate.day + '-' + this.fromDate.year;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
            this.finalDateTo = this.toDate.month + '-' + this.toDate.day + '-' + this.toDate.year;
        }
        else {
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
        }
        else {
            this.halfdayflog = false;
            this.leaveTypeChecked = false;
            this.noonFlag = false;
        }
    }
    isHovered(date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }
    isInside(date) {
        return date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    }
    onSelectedDate(e) {
        var date = e.year + '-' + e.month + '-' + e.day;
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
    onDutyDateSelection(date) {
        if (!this.fromDateOnDuty && !this.toDateOnDuty) {
            this.fromDateOnDuty = date;
            this.finalDateFromOnDuty = this.fromDateOnDuty.month + '-' + this.fromDateOnDuty.day + '-' + this.fromDateOnDuty.year;
        }
        else if (this.fromDateOnDuty && !this.toDateOnDuty && date.after(this.fromDateOnDuty)) {
            this.toDateOnDuty = date;
            this.finalDateToOnDuty = this.toDateOnDuty.month + '-' + this.toDateOnDuty.day + '-' + this.toDateOnDuty.year;
        }
        else {
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
        }
        else {
            this.hoursflog = false;
        }
        this.timeFlag = false;
        this.onDutyChecked = false;
    }
    isOnDutyHovered(date) {
        return this.fromDateOnDuty && !this.toDateOnDuty && this.hoveredDateOnDuty && date.after(this.fromDateOnDuty) && date.before(this.hoveredDateOnDuty);
    }
    isOnDutyInside(date) {
        return date.after(this.fromDateOnDuty) && date.before(this.toDateOnDuty);
    }
    isOnDutyRange(date) {
        return date.equals(this.fromDateOnDuty) || date.equals(this.toDateOnDuty) || this.isOnDutyInside(date) || this.isOnDutyHovered(date);
    }
    onDutySelectedDate(e) {
        var date = e.year + '-' + e.month + '-' + e.day;
        this.permissionDate = this.formatDate(date);
        this.quicOnDutyForm.controls['onDutyDate'].setValue(this.permissionDate);
    }
    setOnDutyValues() {
        if (this.inTime == null || this.outTime == null || this.inTime == undefined || this.outTime == undefined) {
            this.quicOnDutyForm.controls['onDutyDate'].setValue(this.startLeaveDateOnDuty + "-" + this.EndLeaveDateOnDuty);
        }
        else {
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
        }
        else if (event === 'PM') {
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
        }
        else if (event === 'PM') {
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
        console.log(this.encryptdecryptlocalstorage.getLocalStorage('employeeId'));
        let employeeSummaryViewObj = {
            "employeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
            "gemsOrganisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
            "isActive": true
        };
        this.genericservice.post(this.leaveSummaryUrl, employeeSummaryViewObj, false)
            .subscribe(leaveSummaryListData => {
            console.log(leaveSummaryListData.data);
            let leavetypeList = [];
            this.leaveSummaryWithODPERList = leaveSummaryListData.data;
            leavetypeList = leaveSummaryListData.data;
            this.leaveSummaryList = [];
            leavetypeList.forEach(leaveSummary => {
                if (leaveSummary !== null && (leaveSummary.leaveTypeCode !== 'OD'
                    && leaveSummary.leaveTypeCode !== 'PER')) {
                    this.leaveSummaryList.push(leaveSummary);
                }
            });
        });
    }
    createQuickLeaveForm() {
        this.quickLeaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            daterange: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            leaveType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, validSpace]),
        });
        this.quickPermisstionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            onPerDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, validSpace]),
        });
        this.quicOnDutyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            onDutyDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, validSpace]),
            inTimeControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            outTimeControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    getUserObj() {
        let userObj = {
            gemsUserMasterId: this.encryptdecryptlocalstorage.getLocalStorage('userId'),
        };
        this.genericservice.post(this.getUserUrl, userObj, false)
            .subscribe(userdata => {
            this.gemsEmployeeMasterObj = userdata.data;
            this.encryptdecryptlocalstorage.setToLocalStorage('reportingManagerId', this.gemsEmployeeMasterObj.currentReportingTo.gemsEmployeeMasterId);
        });
    }
    getLeaveParam() {
        this.preloader = true;
        this.isLoadingResults = true;
        let paramOgj = {
            'gemsOrganisation': {
                'gemsOrgId': this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
            }
        };
        this.genericservice.post(this.getLeaveParamUrl, paramOgj, false).subscribe(response => {
            if (response != null) {
                this.lveParamDetails = response.data;
                this.availableperHour = response.gemsMaxPerHour;
                this.max = this.availableperHour;
                this.elAvailableAfter = response.effectiveAfter;
            }
        });
        this.preloader = false;
    }
    getOrganisationParam() {
        let paramOgj = {
            'gemsOrganisation': {
                'gemsOrgId': this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
            }
        };
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
            }
            else {
                this.halfdaychkflog = false;
                this.halfdayflog = false;
                this.noonFlag = false;
            }
        }
    }
    onPermissionDate(e) {
        var date = e.year + '-' + e.month + '-' + e.day;
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
        console.log("paramdate1.........." + paramdate1);
        var paramdate2 = paramdate1;
        var paramdate = paramdate2.replace(/-/g, "/");
        console.log("paramdate.........." + paramdate);
        var date = new Date(paramdate);
        console.log("date.........." + date);
        var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY',
            'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        var day = date.getDate();
        var year = date.getFullYear();
        var month = months[date.getMonth()];
        console.log("day..." + day + "year...." + year + "month..." + month);
        return day + " " + month + " " + year;
    }
    halfdaychkfun(event) {
        let input = event.target.checked;
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
        let input = event.target.checked;
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
        this.quicOnDutyForm.controls['onDutyDate'].setValue(this.formatDate(FDateconcot) + ' - ' + this.formatDate(SecDateconcot));
        if (FDateconcot == SecDateconcot) {
            this.hoursflog = true;
        }
        else {
            this.hoursflog = false;
            this.timeFlag = false;
        }
    }
    //OnDuty AM or PM
    onDutyStartAMOrPM(event) {
        if (event === 'AM') {
            $('#amODStart').addClass('active');
            $('#pmODStart').removeClass('active');
        }
        else if (event === 'PM') {
            $('#pmODStart').addClass('active');
            $('#amODStart').removeClass('active');
        }
        this.onDutyStartAMorPM = event;
    }
    onDutyEndAMOrPM(event) {
        if (event === 'AM') {
            $('#amODEnd').addClass('active');
            $('#pmODEnd').removeClass('active');
        }
        else if (event === 'PM') {
            $('#pmODEnd').addClass('active');
            $('#amODEnd').removeClass('active');
        }
        $(".onDutyEndAmorPM").click(function () {
            $('.onDutyEndAmorPM').removeClass('active');
            $(this).addClass('active');
        });
        this.onDutyEndAMorPM = event;
    }
    getWorkingDays(totaldays, fromDate, toDate) {
        let count = totaldays;
        let day = new Date(fromDate);
        for (let i = 1; i <= totaldays; i++) {
            debugger;
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
            if (this.lveParamDetails.isHoliday) {
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
        };
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
    getNextDateByTime(time) {
        var date = new Date(time);
        var d = date.getDate() + 1;
        var dateFormate = date.getFullYear() + "-" + (date.getMonth() + 1) + '-' + d;
        return dateFormate;
    }
    getDifferenceOfDays(fromDate, toDate) {
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
    getDifferenceOfDays1(fromDate, toDate) {
        fromDate = this.getCorrectDate(fromDate);
        toDate = this.getCorrectDate(toDate);
        var timeDiff = new Date(toDate).getTime() - new Date(fromDate).getTime();
        var dayDiff = timeDiff / 1000 / 60 / 60 / 24;
        return ((dayDiff) + 1);
    }
    showNotification(message, type) {
        this.messageConstant.showNotification(message, type);
    }
    showSuccessNotification(message) {
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
                }
                else if (this.halfLeaveType == "POST") {
                    formdate1 = SDateValue + ' ' + '13' + ':' + '01' + ':' + '00';
                    todate1 = EDateValue + ' ' + '18' + ':' + '30' + ':' + '00';
                }
                else {
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
                console.log(Object.permissionDuration);
                console.log(this.getWorkingDays(Math.abs(this.getDifferenceOfDays(SDateValue, EDateValue)), SDateValue, EDateValue));
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
                                };
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
                                };
                                this.genericservice.saveCalendarEvents(this.googleSyncUrl, event).subscribe(data => {
                                    console.log('called inside of save event');
                                    let eventId = this.saveEventId(data);
                                    let eventObj = {
                                        'gemsEmployeeLeaveMaster': this.employeeLeaveMaster,
                                        'eventId': eventId,
                                        'flag': 1,
                                        'createdBy': +this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
                                    };
                                    this.genericservice.post(this.saveEventUrl, eventObj, false).subscribe(data => {
                                    });
                                }, error => {
                                    let eventObj = {
                                        'gemsEmployeeLeaveMaster': this.employeeLeaveMaster,
                                        'eventId': null,
                                        'flag': 0,
                                        'createdBy': +this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
                                    };
                                    this.genericservice.post(this.saveEventUrl, eventObj, false).subscribe(data => {
                                    }, error => {
                                        this.isLoadingResults = false;
                                    });
                                });
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
                            }
                            else {
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
                    }
                    else {
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
            };
            this.genericservice.post(this.saveNotificationURL, reqPayload, false).subscribe(res => {
            });
            // this.halfdayflog = true;
            // this.noonFlag = true;
            // this.myNgForm.resetForm();
            this.leaveTypesControl.reset();
            // this.halfdayflog = false;
            // this.noonFlag = false;
            // this.halfLeaveType = false;
        });
        this.getLeaveStatus(this.gemsEmployeeMasterObj);
    }
    applyPermission(quickPermisstionForm) {
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
                    };
                    let formdate1;
                    let todate1;
                    if (this.permissionStartTimepicker != null) {
                        if (this.startTimePickerAMOrPM == 'AM') {
                            if (this.permissionStartTimepicker.hour == '12' || this.permissionStartTimepicker.hour == 12) {
                                this.permissionStartTimepicker.hour = 0;
                            }
                            else {
                                this.permissionStartTimepicker.hour = parseInt(this.permissionStartTimepicker.hour);
                            }
                        }
                        else if (this.startTimePickerAMOrPM == 'PM') {
                            if (this.permissionStartTimepicker.hour == '12' || this.permissionStartTimepicker.hour == 12) {
                                this.permissionStartTimepicker.hour = parseInt(this.permissionStartTimepicker.hour);
                            }
                            else {
                                this.permissionStartTimepicker.hour = parseInt(this.permissionStartTimepicker.hour) + 12;
                            }
                        }
                        SDate.setHours(this.permissionStartTimepicker.hour);
                        SDate.setMinutes(this.permissionStartTimepicker.minute);
                    }
                    if (this.permissionEndTimepicker != null) {
                        if (this.endTimepickerAMOrPM == 'AM') {
                            if (this.permissionEndTimepicker.hour == 12 || this.permissionEndTimepicker == '12') {
                                this.permissionEndTimepicker.hour = 0;
                            }
                            else {
                                this.permissionEndTimepicker.hour = parseInt(this.permissionEndTimepicker.hour);
                            }
                        }
                        else if (this.endTimepickerAMOrPM == 'PM') {
                            if (this.permissionEndTimepicker.hour == 12 || this.permissionEndTimepicker.hour == '12') {
                                this.permissionEndTimepicker.hour = parseInt(this.permissionEndTimepicker.hour);
                            }
                            else {
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
                    formdate1 = SDateValue + ' ' + startTime + ':' + '00';
                    todate1 = EDateValue + ' ' + endTime + ':' + '00';
                    if (new Date(formdate1) > new Date(todate1)) {
                        this.inValidOutTime = true;
                        this.dataSharingService.failureMessage('Please select valid time to avail permission');
                        this.quickPermisstionForm.reset();
                        this.resetPermissionForm();
                        // this.quickPermisstionForm.controls['perOutTimeControl'].setErrors({ 'incorrect': true });
                    }
                    else {
                        if (this.getWorkingDays(Math.abs(this.getDifferenceOfDays(SDateValue, EDateValue)), SDateValue, EDateValue) == 0) {
                            this.dataSharingService.failureMessage('Please select working days to apply leave.');
                            this.reset();
                        }
                        else {
                            this.inValidOutTime = false;
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
                            };
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
                            }
                            else {
                                isValidPermission = false;
                            }
                            // if (isValidPermission) {
                            this.genericservice.post(this.applyLeaveUrl, Object2, true).subscribe(response => {
                                console.log(response.data.gemsEmployeeLeaveMasterId);
                                if (response.data.gemsEmployeeLeaveMasterId != null) {
                                    this.dataSharingService.trigegerApplyFlag('true');
                                    console.log(response);
                                    this.reset();
                                    // Save Notification
                                    let reqPayload = {
                                        "notification": response.data.notification,
                                        "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('reportingManagerId')
                                    };
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
                                    };
                                    this.genericservice.saveCalendarEvents(this.googleSyncUrl, event).subscribe(data => {
                                        console.log('called inside of save event');
                                        let eventId = this.saveEventId(data);
                                        let eventObj = {
                                            'gemsEmployeeLeaveMaster': this.employeeLeaveMaster,
                                            'eventId': eventId,
                                            'flag': 1,
                                            'createdBy': +this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
                                        };
                                        this.genericservice.post(this.saveEventUrl, eventObj, false).subscribe(data => {
                                        });
                                    }, error => {
                                        let eventObj = {
                                            'gemsEmployeeLeaveMaster': this.employeeLeaveMaster,
                                            'eventId': null,
                                            'flag': 0,
                                            'createdBy': +this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
                                        };
                                        this.genericservice.post(this.saveEventUrl, eventObj, false).subscribe(data => {
                                        }, error => {
                                            this.isLoadingResults = false;
                                        });
                                    });
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
                                // this.myNgForm.resetForm();
                                // this.permissionValue = 1;
                            }, error => {
                                this.reset();
                                if (error.message === 'REPORTING MANAGER NOT FOUND') {
                                    this.type = 'PER';
                                    this.preloader = false;
                                    this.isLoadingResults = false;
                                    // this.myNgForm.resetForm();
                                    // this.permissionValue = 1;
                                    // alert(this.NO_REPORTING_MANAGER);
                                    this.dataSharingService.failureMessage(this.NO_REPORTING_MANAGER);
                                }
                                else {
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
        }
        else if (this.quickLeaveForm.controls['reason'].disabled == true) {
            this.quickLeaveForm.controls['reason'].enable();
            this.leaveReason = '';
        }
    }
    onKeyPress(event) {
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
        }
        else {
            $(className).removeClass('time_error');
        }
    }
    applyOnDuty() {
        this.preloader = true;
        if (super.onSubmit(this.quicOnDutyForm)) {
            console.log(this.quicOnDutyForm.value.inTimeControl);
            console.log(this.quicOnDutyForm.value.outTimeControl);
            if (this.inTime == null || this.outTime == null || this.inTime == undefined || this.outTime == undefined) {
                var SDate = new Date(this.quicOnDutyForm.value.onDutyDate.split('-')[0]);
                var SDateValue = SDate.getFullYear() + "-" + (SDate.getMonth() + 1) + "-" + SDate.getDate();
                var EDate = new Date(this.quicOnDutyForm.value.onDutyDate.split('-')[1]);
                var EDateValue = EDate.getFullYear() + "-" + (EDate.getMonth() + 1) + "-" + EDate.getDate();
            }
            else {
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
                    };
                    if (this.inTime != null) {
                        if (this.onDutyStartAMorPM == 'AM') {
                            if (this.inTime.hour == '12') {
                                this.inTime.hour = 0;
                            }
                            else {
                                this.inTime.hour = parseInt(this.inTime.hour);
                            }
                        }
                        else if (this.onDutyStartAMorPM == 'PM') {
                            if (this.inTime.hour == '12') {
                                this.inTime.hour = parseInt(this.inTime.hour);
                            }
                            else {
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
                            }
                            else {
                                this.outTime.hour = parseInt(this.outTime.hour);
                            }
                        }
                        else if (this.onDutyEndAMorPM == 'PM') {
                            if (this.outTime.hour == 12 || this.outTime.hour == '12') {
                                this.outTime.hour = parseInt(this.outTime.hour);
                            }
                            else {
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
                        }
                        else {
                            //  this.quicOnDutyForm.controls['inTimeControl'].setErrors({ 'required': true });
                            // flag = true;
                        }
                        if (this.outTime != null || this.outTime != undefined) {
                            todate1 = EDateValue + ' ' + this.outTime.hour + ':' + this.outTime.minute + ':' + '00';
                        }
                        else {
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
                            }
                            else {
                                // alert("FAIL 11");
                                this.inValidOutTime = false;
                                // this.quicOnDutyForm.controls['outTimeControl'].setErrors({ 'pattern': false });
                                // flag = true;
                            }
                        }
                        // Saving OND eventhough the duration is more than 1 minute
                        //   alert('same')
                    }
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
                    };
                    this.isLoadingResults = true;
                    this.timeFlag = false;
                    this.genericservice.post(this.applyLeaveUrl, Object, true).subscribe(response => {
                        // this.quicOnDutyForm.value.permissionOn = null;
                        this.dataSharingService.trigegerApplyFlag('true');
                        if (response.data.gemsEmployeeLeaveMasterId != null) {
                            let reqPayload = {
                                "notification": response.data.notification,
                                "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('reportingManagerId')
                            };
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
                            };
                            this.genericservice.saveCalendarEvents(this.googleSyncUrl, event).subscribe(data => {
                                console.log('called inside of save event');
                                let eventId = this.saveEventId(data);
                                let eventObj = {
                                    'gemsEmployeeLeaveMaster': this.employeeLeaveMaster,
                                    'eventId': eventId,
                                    'flag': 1,
                                    'createdBy': +this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
                                };
                                this.genericservice.post(this.saveEventUrl, eventObj, false).subscribe(data => {
                                });
                            }, error => {
                                let eventObj = {
                                    'gemsEmployeeLeaveMaster': this.employeeLeaveMaster,
                                    'eventId': null,
                                    'flag': 0,
                                    'createdBy': +this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
                                };
                                this.genericservice.post(this.saveEventUrl, eventObj, false).subscribe(data => {
                                }, error => {
                                    this.isLoadingResults = false;
                                });
                            });
                        }
                        else if (response.data.remarks != null) {
                            this.dataSharingService.trigegerApplyFlag('true');
                            // alert(response.data.remarks);
                        }
                        else {
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
                        }
                        else {
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
                    });
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
            });
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
        this.halfLeaveType = event.target.value;
    }
    isValidLeaveTypeControl(event) {
        typeof this.leaveTypesControl.value != 'string' || this.leaveTypesControl.value == '' ? this.validLeaveType = false : this.validLeaveType = true;
    }
    removeclass() {
        $(function () {
            $(".select__date").on("click", function (e) {
                $('.main').addClass("wide");
                $('.daterangepicker').addClass("active");
                e.stopPropagation();
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
        let EventCode = data.htmlLink.split("eid=")[1];
        let Event = this.commonservice.base64ToString(EventCode);
        let eventId = Event[0];
        return eventId;
    }
}
function validSpace(control) {
    if (control && control.value != null) {
        let ControlValue = control.value.trim();
        if (!ControlValue) {
            return { validUrl: true };
        }
    }
    return null;
}


/***/ }),

/***/ "./src/app/user-module/dashboard/whos-on-leave/whos-on-leave.component.ngfactory.js":
/*!******************************************************************************************!*\
  !*** ./src/app/user-module/dashboard/whos-on-leave/whos-on-leave.component.ngfactory.js ***!
  \******************************************************************************************/
/*! exports provided: RenderType_WhosOnLeaveComponent, View_WhosOnLeaveComponent_0, View_WhosOnLeaveComponent_Host_0, WhosOnLeaveComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_WhosOnLeaveComponent", function() { return RenderType_WhosOnLeaveComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WhosOnLeaveComponent_0", function() { return View_WhosOnLeaveComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WhosOnLeaveComponent_Host_0", function() { return View_WhosOnLeaveComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhosOnLeaveComponentNgFactory", function() { return WhosOnLeaveComponentNgFactory; });
/* harmony import */ var _whos_on_leave_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whos-on-leave.component.scss.shim.ngstyle */ "./src/app/user-module/dashboard/whos-on-leave/whos-on-leave.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chutti-pagination/chutti-pagination.component.ngfactory */ "./src/app/user-module/chutti-pagination/chutti-pagination.component.ngfactory.js");
/* harmony import */ var _chutti_pagination_chutti_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../chutti-pagination/chutti-pagination.component */ "./src/app/user-module/chutti-pagination/chutti-pagination.component.ts");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _whos_on_leave_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./whos-on-leave.component */ "./src/app/user-module/dashboard/whos-on-leave/whos-on-leave.component.ts");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/urlConstant */ "./src/app/services/urlConstant.ts");
/* harmony import */ var _services_genericservices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/genericservices */ "./src/app/services/genericservices.ts");
/* harmony import */ var _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/encrypt-decrypt-localstorage.service */ "./src/app/services/encrypt-decrypt-localstorage.service.ts");
/* harmony import */ var ng2_daterangepicker_lib_daterangepicker_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-daterangepicker/lib/daterangepicker/config.service */ "./node_modules/ng2-daterangepicker/lib/daterangepicker/config.service.js");
/* harmony import */ var ng2_daterangepicker_lib_daterangepicker_config_service__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_daterangepicker_lib_daterangepicker_config_service__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_css_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/css.service */ "./src/app/services/css.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_WhosOnLeaveComponent = [_whos_on_leave_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_WhosOnLeaveComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_WhosOnLeaveComponent, data: {} });

function View_WhosOnLeaveComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "span", [["class", "page__selection"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [["class", "icon_arrow_thick_left"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.decreaseMonth() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "current__month"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "a", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "span", [["class", "icon_arrow_thick_right"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.nextmonths() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currentMonth; _ck(_v, 4, 0, currVal_0); }); }
function View_WhosOnLeaveComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "li", [["class", "mx-md-3 mx-2 filterToday active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.leavestatus() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Today"]))], null, null); }
function View_WhosOnLeaveComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "li", [["class", "mx-md-3 mx-2 filterToday"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.leavestatus() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Today"]))], null, null); }
function View_WhosOnLeaveComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "li", [["class", "mx-md-3 mx-2 filterWeek active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["data-target", ".whosonleave-modal-lg"], ["data-toggle", "modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Week"]))], null, null); }
function View_WhosOnLeaveComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "li", [["class", "mx-md-3 mx-2 filterWeek"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["data-target", ".whosonleave-modal-lg"], ["data-toggle", "modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Week"]))], null, null); }
function View_WhosOnLeaveComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "ul", [["class", "dateFilter__selection d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "li", [["class", "mx-0 mx-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "li", [["class", "ml-3 mr-5 filterMonth"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.monthclick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Month"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showHide; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.isTodayActive; _ck(_v, 5, 0, currVal_1); var currVal_2 = !_co.isTodayActive; _ck(_v, 7, 0, currVal_2); var currVal_3 = _co.isWeekActive; _ck(_v, 9, 0, currVal_3); var currVal_4 = !_co.isWeekActive; _ck(_v, 11, 0, currVal_4); }, null); }
function View_WhosOnLeaveComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "div", [["class", "pop__over"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 19, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "col-md-4 flex-column  pop__over-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["From:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 6, "div", [["class", "col-md-4  pop__over-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](16, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](17, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "div", [["class", "col-md-4  pop__over-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Duration:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.employeeFirstName; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.fromDate, "dd-MMM-yy")))); _ck(_v, 8, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.toDate, "dd-MMM-yy")))); _ck(_v, 15, 0, currVal_2); var currVal_3 = _v.parent.context.$implicit.permissionDuration; _ck(_v, 22, 0, currVal_3); }); }
function View_WhosOnLeaveComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 2, "span", [["class", "user_img4 img_none bg__blue"], ["placement", "top"], ["triggers", "mouseenter:mouseleave"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopover"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], { ngbPopover: [0, "ngbPopover"], placement: [1, "placement"], triggers: [2, "triggers"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", "", ""]))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1); var currVal_1 = "top"; var currVal_2 = "mouseenter:mouseleave"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_3 = _v.parent.context.$implicit.employeeLastName.charAt(0); var currVal_4 = _v.parent.context.$implicit.employeeFirstName.charAt(0); _ck(_v, 3, 0, currVal_3, currVal_4); }); }
function View_WhosOnLeaveComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "mouseOver"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 2, "span", [["placement", "top"], ["triggers", "mouseenter:mouseleave"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopover"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], { ngbPopover: [0, "ngbPopover"], placement: [1, "placement"], triggers: [2, "triggers"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["class", "rounded-circle user__img"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1); var currVal_1 = "top"; var currVal_2 = "mouseenter:mouseleave"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_3 = (_v.parent.context.$implicit.profileImgData ? ("data:image/jpg;base64," + _v.parent.context.$implicit.profileImgData) : "https://www.w3schools.com/howto/img_avatar.png"); _ck(_v, 3, 0, currVal_3); }); }
function View_WhosOnLeaveComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["popContent0", 2]], null, 0, null, View_WhosOnLeaveComponent_9)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit.profileImgData == null) || (_v.context.$implicit.profileImgData == undefined)); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_v.context.$implicit.profileImgData != null) && (_v.context.$implicit.profileImgData != undefined)); _ck(_v, 5, 0, currVal_1); }, null); }
function View_WhosOnLeaveComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "view__more--person inline-block pl-3 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["class", "viewMore"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.isTodayActive = true;
        _co.isWeekActive = false;
        var pd_0 = (_co.viewMoreDetails("today") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" +", " more"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.todayList.length - 5); _ck(_v, 3, 0, currVal_0); }); }
function View_WhosOnLeaveComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "div", [["class", "pop__over"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 19, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "col-md-4 flex-column pop__over-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["From:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 6, "div", [["class", "col-md-4 pop__over-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](16, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](17, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "div", [["class", "col-md-4 pop__over-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Duration:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.employeeFirstName; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.fromDate, "dd-MMM-yy")))); _ck(_v, 8, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.toDate, "dd-MMM-yy")))); _ck(_v, 15, 0, currVal_2); var currVal_3 = _v.parent.context.$implicit.permissionDuration; _ck(_v, 22, 0, currVal_3); }); }
function View_WhosOnLeaveComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 2, "span", [["class", "user_img4 img_none bg__brown"], ["placement", "top"], ["triggers", "mouseenter:mouseleave"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopover"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], { ngbPopover: [0, "ngbPopover"], placement: [1, "placement"], triggers: [2, "triggers"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", "", ""]))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1); var currVal_1 = "top"; var currVal_2 = "mouseenter:mouseleave"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_3 = _v.parent.context.$implicit.employeeLastName.charAt(0); var currVal_4 = _v.parent.context.$implicit.employeeFirstName.charAt(0); _ck(_v, 3, 0, currVal_3, currVal_4); }); }
function View_WhosOnLeaveComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "mouseOver"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 2, "span", [["placement", "top"], ["triggers", "mouseenter:mouseleave"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopover"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], { ngbPopover: [0, "ngbPopover"], placement: [1, "placement"], triggers: [2, "triggers"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["class", "rounded-circle user__img"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1); var currVal_1 = "top"; var currVal_2 = "mouseenter:mouseleave"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_3 = (_v.parent.context.$implicit.profileImgData ? ("data:image/jpg;base64," + _v.parent.context.$implicit.profileImgData) : "https://www.w3schools.com/howto/img_avatar.png"); _ck(_v, 3, 0, currVal_3); }); }
function View_WhosOnLeaveComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["popContent1", 2]], null, 0, null, View_WhosOnLeaveComponent_14)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit.profileImgData == null) || (_v.context.$implicit.profileImgData == undefined)); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_v.context.$implicit.profileImgData != null) && (_v.context.$implicit.profileImgData != undefined)); _ck(_v, 5, 0, currVal_1); }, null); }
function View_WhosOnLeaveComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "view__more--person inline-block align-self-center pl-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["class", "viewMore"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.isWeekActive = true;
        _co.isTodayActive = false;
        var pd_0 = (_co.viewMoreDetails("thisWeek") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["+ ", " more"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.thisweekList.length - 5); _ck(_v, 3, 0, currVal_0); }); }
function View_WhosOnLeaveComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "div", [["class", "pop__over"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 19, "div", [["class", "row "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "col-md-4 pop__over-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["From:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 6, "div", [["class", "col-md-4 pop__over-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](16, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](17, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "div", [["class", "col-md-4 pop__over-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Duration:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.employeeFirstName; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.fromDate, "dd-MMM-yy")))); _ck(_v, 8, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.toDate, "dd-MMM-yy")))); _ck(_v, 15, 0, currVal_2); var currVal_3 = _v.parent.context.$implicit.permissionDuration; _ck(_v, 22, 0, currVal_3); }); }
function View_WhosOnLeaveComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "mouseOver"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 2, "span", [["class", "user_img4 img_none bg__neptune"], ["placement", "top"], ["triggers", "mouseenter:mouseleave"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopover"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], { ngbPopover: [0, "ngbPopover"], placement: [1, "placement"], triggers: [2, "triggers"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", "", ""]))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1); var currVal_1 = "top"; var currVal_2 = "mouseenter:mouseleave"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_3 = _v.parent.context.$implicit.employeeLastName.charAt(0); var currVal_4 = _v.parent.context.$implicit.employeeFirstName.charAt(0); _ck(_v, 3, 0, currVal_3, currVal_4); }); }
function View_WhosOnLeaveComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "mouseOver"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 2, "span", [["placement", "top"], ["triggers", "mouseenter:mouseleave"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopover"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], { ngbPopover: [0, "ngbPopover"], placement: [1, "placement"], triggers: [2, "triggers"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["class", "rounded-circle user__img"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1); var currVal_1 = "top"; var currVal_2 = "mouseenter:mouseleave"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_3 = (_v.parent.context.$implicit.profileImgData ? ("data:image/jpg;base64," + _v.parent.context.$implicit.profileImgData) : "https://www.w3schools.com/howto/img_avatar.png"); _ck(_v, 3, 0, currVal_3); }); }
function View_WhosOnLeaveComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["popContent2", 2]], null, 0, null, View_WhosOnLeaveComponent_19)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit.profileImgData == null) || (_v.context.$implicit.profileImgData == undefined)); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_v.context.$implicit.profileImgData != null) && (_v.context.$implicit.profileImgData != undefined)); _ck(_v, 5, 0, currVal_1); }, null); }
function View_WhosOnLeaveComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "view__more--person inline-block pl-3 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["class", "viewMore"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.isWeekActive = true;
        _co.isTodayActive = false;
        var pd_0 = (_co.viewMoreDetails("nextWeek") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" +", " more"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.nextWeekList.length - 5); _ck(_v, 3, 0, currVal_0); }); }
function View_WhosOnLeaveComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "div", [["class", "pop__over"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 19, "div", [["class", "row "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "div", [["class", "col-md-4 flex-column pop__over-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["From:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 6, "div", [["class", "col-md-4 pop__over-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](16, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](17, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "div", [["class", "col-md-4 pop__over-data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Duration:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.employeeFirstName; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.fromDate, "dd-MMM-yy")))); _ck(_v, 8, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.toDate, "dd-MMM-yy")))); _ck(_v, 15, 0, currVal_2); var currVal_3 = _v.parent.context.$implicit.permissionDuration; _ck(_v, 22, 0, currVal_3); }); }
function View_WhosOnLeaveComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "mouseOver"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 2, "span", [["class", "user_img4 img_none bg__neptune"], ["placement", "top"], ["triggers", "mouseenter:mouseleave"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopover"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], { ngbPopover: [0, "ngbPopover"], placement: [1, "placement"], triggers: [2, "triggers"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", "", ""]))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1); var currVal_1 = "top"; var currVal_2 = "mouseenter:mouseleave"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_3 = _v.parent.context.$implicit.employeeLastName.charAt(0); var currVal_4 = _v.parent.context.$implicit.employeeFirstName.charAt(0); _ck(_v, 3, 0, currVal_3, currVal_4); }); }
function View_WhosOnLeaveComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "mouseOver"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 16777216, null, null, 2, "span", [["placement", "top"], ["triggers", "mouseenter:mouseleave"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopover"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], { ngbPopover: [0, "ngbPopover"], placement: [1, "placement"], triggers: [2, "triggers"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["class", "rounded-circle user__img"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1); var currVal_1 = "top"; var currVal_2 = "mouseenter:mouseleave"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_3 = (_v.parent.context.$implicit.profileImgData ? ("data:image/jpg;base64," + _v.parent.context.$implicit.profileImgData) : "https://www.w3schools.com/howto/img_avatar.png"); _ck(_v, 3, 0, currVal_3); }); }
function View_WhosOnLeaveComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["popContent3", 2]], null, 0, null, View_WhosOnLeaveComponent_24)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit.profileImgData == null) || (_v.context.$implicit.profileImgData == undefined)); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_v.context.$implicit.profileImgData != null) && (_v.context.$implicit.profileImgData != undefined)); _ck(_v, 5, 0, currVal_1); }, null); }
function View_WhosOnLeaveComponent_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "view__more--person inline-block pl-3 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["class", "viewMore"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.isWeekActive = true;
        _co.isTodayActive = false;
        var pd_0 = (_co.viewMoreDetails("nextOfNextWeek") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" +", " more"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.nextOfNextWeekList.length - 5); _ck(_v, 3, 0, currVal_0); }); }
function View_WhosOnLeaveComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 48, "div", [["class", "whos-on-avatar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "leave__data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 9, "div", [["class", "leave__person inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Today"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 6, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "ul", [["class", "leave__person--list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_WhosOnLeaveComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 10, "div", [["class", "leave__data h-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 9, "div", [["class", "leave__person inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["This Week"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 6, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "ul", [["class", "leave__person--list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_WhosOnLeaveComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 10, "div", [["class", "leave__data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 9, "div", [["class", "leave__person inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Next Week"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 6, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 3, "ul", [["class", "leave__person--list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_WhosOnLeaveComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 14, "div", [["class", "leave__data"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 13, "div", [["class", "leave__person inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 5, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](37, null, ["", " - ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](38, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](39, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](40, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](41, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 6, "div", [["class", "flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 3, "ul", [["class", "leave__person--list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_WhosOnLeaveComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transform(_co.todayList, 0, 5)); _ck(_v, 8, 0, currVal_0); var currVal_1 = (_co.todayList.length > 5); _ck(_v, 11, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).transform(_co.thisweekList, 0, 5)); _ck(_v, 19, 0, currVal_2); var currVal_3 = (_co.thisweekList.length > 5); _ck(_v, 22, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).transform(_co.nextWeekList, 0, 5)); _ck(_v, 30, 0, currVal_4); var currVal_5 = (_co.nextWeekList.length > 5); _ck(_v, 33, 0, currVal_5); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 45, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).transform(_co.nextOfNextWeekList, 0, 5)); _ck(_v, 45, 0, currVal_8); var currVal_9 = (_co.nextOfNextWeekList.length > 5); _ck(_v, 48, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 37, 0, _ck(_v, 39, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 37, 0, _ck(_v, 38, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _co.nextOfNextWeekStartDate, "dd MMM")))); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 37, 1, _ck(_v, 41, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 37, 1, _ck(_v, 40, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _co.nextOfNextWeekEndDate, "dd MMM")))); _ck(_v, 37, 0, currVal_6, currVal_7); }); }
function View_WhosOnLeaveComponent_31(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["class", "rounded-circle user__img--row"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = (_v.parent.context.$implicit.profileImgData ? ("data:image/jpg;base64," + _v.parent.context.$implicit.profileImgData) : "https://www.w3schools.com/howto/img_avatar.png"); _ck(_v, 1, 0, currVal_0); }); }
function View_WhosOnLeaveComponent_32(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 2, "span", [["class", "user_img4  user__img--row bg__neptune"], ["placement", "top"], ["triggers", "mouseenter:mouseleave"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopover"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopoverConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], { ngbPopover: [0, "ngbPopover"], placement: [1, "placement"], triggers: [2, "triggers"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", "", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.popContent2; var currVal_1 = "top"; var currVal_2 = "mouseenter:mouseleave"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_3 = _v.parent.context.$implicit.employeeLastName.charAt(0); var currVal_4 = _v.parent.context.$implicit.employeeFirstName.charAt(0); _ck(_v, 2, 0, currVal_3, currVal_4); }); }
function View_WhosOnLeaveComponent_33(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "col-md-3"], ["data-th", "Reason"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "v__scroll"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.reason; _ck(_v, 2, 0, currVal_0); }); }
function View_WhosOnLeaveComponent_34(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "col-md-3"], ["data-th", "Reason"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "v__scroll"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["-"]))], null, null); }
function View_WhosOnLeaveComponent_30(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "tr", [["class", "d-flex whosonleave_table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "td", [["class", "col-md-3"], ["data-th", "Employee Name"], ["scope", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [["class", "nameImg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "td", [["class", "col-md-2"], ["data-th", "From"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "td", [["class", "col-md-2"], ["data-th", "To"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](14, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "td", [["class", "col-md-2"], ["data-th", "Duration"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_33)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_34)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit.profileImgData != null) && (_v.context.$implicit.profileImgData != undefined)); _ck(_v, 4, 0, currVal_0); var currVal_1 = ((_v.context.$implicit.profileImgData == null) || (_v.context.$implicit.profileImgData == undefined)); _ck(_v, 6, 0, currVal_1); var currVal_6 = (_v.context.$implicit.reason != null); _ck(_v, 18, 0, currVal_6); var currVal_7 = (_v.context.$implicit.reason == null); _ck(_v, 20, 0, currVal_7); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.employeeFirstName; _ck(_v, 8, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.context.$implicit.fromDate, "dd MMM yyyy")); _ck(_v, 10, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _ck(_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.context.$implicit.toDate, "dd MMM yyyy")); _ck(_v, 13, 0, currVal_4); var currVal_5 = _v.context.$implicit.permissionDuration; _ck(_v, 16, 0, currVal_5); }); }
function View_WhosOnLeaveComponent_29(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tbody", [["class", "scroll user__icon--row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.leavestausList; _ck(_v, 2, 0, currVal_0); }, null); }
function View_WhosOnLeaveComponent_36(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.value; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.value; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.label; _ck(_v, 3, 0, currVal_2); }); }
function View_WhosOnLeaveComponent_35(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "table__bottom text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "span", [["class", "items__nos"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "form-group page__section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [["for", "pageNo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Items per page:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 7, "select", [["class", "form-control"], ["id", "pageNo"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.selectedItemsPerPage = $event) !== false);
        ad = (pd_2 && ad);
    } if (("ngModelChange" === en)) {
        var pd_3 = (_co.changeItemPerPage($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_36)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "app-chutti-pagination", [], null, [[null, "goPrev"], [null, "goNext"], [null, "onPage"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("goPrev" === en)) {
        var pd_0 = (_co.goToPrev() !== false);
        ad = (pd_0 && ad);
    } if (("goNext" === en)) {
        var pd_1 = (_co.goToNext() !== false);
        ad = (pd_1 && ad);
    } if (("onPage" === en)) {
        var pd_2 = (_co.goToPageNo($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ChuttiPaginationComponent_0"], _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ChuttiPaginationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, _chutti_pagination_chutti_pagination_component__WEBPACK_IMPORTED_MODULE_6__["ChuttiPaginationComponent"], [], { currentPage: [0, "currentPage"], count: [1, "count"], pagesToShow: [2, "pagesToShow"] }, { goPrev: "goPrev", goNext: "goNext" })], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.selectedItemsPerPage; _ck(_v, 8, 0, currVal_7); var currVal_8 = _co.perpageOption; _ck(_v, 12, 0, currVal_8); var currVal_9 = _co.currentPage; var currVal_10 = _co.totalCount; var currVal_11 = _co.totalPages; _ck(_v, 14, 0, currVal_9, currVal_10, currVal_11); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_WhosOnLeaveComponent_37(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "text-center w-100 py-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Record Found!"]))], null, null); }
function View_WhosOnLeaveComponent_28(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "div", [["class", "whos-on-leave-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 20, "div", [["class", "leave__table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 17, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 14, "table", [["class", "table table-fixed rwd-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 11, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "th", [["class", "col-md-3"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Employee Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "th", [["class", "col-md-2 pl-0"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["From"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "th", [["class", "col-md-2 pl-0"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "th", [["class", "col-md-2 pl-0"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Duration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "th", [["class", "col-md-3  pl-0"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reason"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_35)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_37)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isData; _ck(_v, 18, 0, currVal_0); var currVal_1 = (_co.isData && (_co.totalCount > 10)); _ck(_v, 20, 0, currVal_1); var currVal_2 = !_co.isData; _ck(_v, 22, 0, currVal_2); }, null); }
function View_WhosOnLeaveComponent_38(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "custom-day"]], [[2, "focused", null], [2, "range", null], [2, "faded", null]], [[null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = ((_co.hoveredDate = _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } if (("mouseleave" === en)) {
        var pd_1 = ((_co.hoveredDate = null) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.focused; var currVal_1 = _co.isRange(_v.context.$implicit); var currVal_2 = (_co.isHovered(_v.context.$implicit) || _co.isInside(_v.context.$implicit)); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit.day; _ck(_v, 1, 0, currVal_3); }); }
function View_WhosOnLeaveComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 12, "div", [["class", "leave__status"], ["id", "whosison__leave"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Who's on Leave"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "viewMore__details expand text-right"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.isTodayActive = true;
        _co.isWeekActive = false;
        var pd_0 = (_co.onexpand() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "span", [["class", "icon_expand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "viewMore__details compress d-none"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.isData = true;
        var pd_0 = (_co.expandwhoseonleave(true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "span", [["class", "icon_collapse"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WhosOnLeaveComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 24, "div", [["aria-hidden", "true"], ["aria-labelledby", "myLargeModalLabel"], ["class", "modal fade whosonleave-modal-lg"], ["data-backdrop", "static"], ["data-keyboard", "false"], ["id", "permissionmodel"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 23, "div", [["class", "modal-dialog modal-lg modal-dialog-centered double__dateModel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 22, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 7, "div", [["class", "modal-header date__picker--header row mx-0 px-0 mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, "div", [["class", "col-md-4 align-self-center time__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "div", [["class", "col-md-8 float-right text-right datePicker__header--right align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "a", [["class", "reset-permission  align-self-center"], ["href", "javascript:void(0);"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.resetFormInDatePicker() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reset"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "span", [["class", "pl-2 ml-2 permissionDate  align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "span", [["class", "icon_date_picker"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](25, null, [" ", "- ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 7, "div", [["class", "row px-0 mx-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 6, "div", [["class", "col-12 text-center px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 4, "ngb-datepicker", [["class", "date__table"], ["outsideDays", "hidden"]], null, [[null, "select"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("select" === en)) {
        var pd_0 = (_co.onDateSelection($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_NgbDatepicker_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_NgbDatepicker"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵu"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerI18n"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵv"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵv"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 4964352, [["dp", 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDatepicker"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵv"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerI18n"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateAdapter"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { dayTemplate: [0, "dayTemplate"], displayMonths: [1, "displayMonths"], outsideDays: [2, "outsideDays"] }, { select: "select" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["t", 2]], null, 0, null, View_WhosOnLeaveComponent_38)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 5, "div", [["class", "row justify-content-end mx-0 px-0 mb-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 4, "div", [["class", "col-12 col-md-4  text-right time__submit align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "button", [["class", "btn cancel-button"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.resetFormInDatePicker() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "button", [["class", "btn theme__btn btn-hover color-3"], ["data-dismiss", "modal"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setValues() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Done"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.showdashwhoseonleavepagination; _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.showdashwhoseonleavepagination; _ck(_v, 12, 0, currVal_1); var currVal_2 = !_co.showdashwhoseonleavepagination; _ck(_v, 14, 0, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33); var currVal_6 = 2; var currVal_7 = "hidden"; _ck(_v, 32, 0, currVal_5, currVal_6, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.startLeaveDate; var currVal_4 = _co.EndLeaveDate; _ck(_v, 25, 0, currVal_3, currVal_4); }); }
function View_WhosOnLeaveComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-whos-on-leave", [], null, null, null, View_WhosOnLeaveComponent_0, RenderType_WhosOnLeaveComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _whos_on_leave_component__WEBPACK_IMPORTED_MODULE_8__["WhosOnLeaveComponent"], [_services_urlConstant__WEBPACK_IMPORTED_MODULE_9__["UrlConstant"], _services_genericservices__WEBPACK_IMPORTED_MODULE_10__["Genericservice"], _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_11__["EncryptDecryptLocalStorageService"], ng2_daterangepicker_lib_daterangepicker_config_service__WEBPACK_IMPORTED_MODULE_12__["DaterangepickerConfig"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"], _services_css_service__WEBPACK_IMPORTED_MODULE_13__["CssServices"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var WhosOnLeaveComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-whos-on-leave", _whos_on_leave_component__WEBPACK_IMPORTED_MODULE_8__["WhosOnLeaveComponent"], View_WhosOnLeaveComponent_Host_0, { dashBoardPaginationView: "dashBoardPaginationView", showdashwhoseonleavepagination: "showdashwhoseonleavepagination" }, {}, []);



/***/ }),

/***/ "./src/app/user-module/dashboard/whos-on-leave/whos-on-leave.component.scss.shim.ngstyle.js":
/*!**************************************************************************************************!*\
  !*** ./src/app/user-module/dashboard/whos-on-leave/whos-on-leave.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@charset \"UTF-8\";\n[class^=icon_][_ngcontent-%COMP%], [class*=\" icon_\"][_ngcontent-%COMP%] {\n  font-family: \"chutti\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[class^=icon1-][_ngcontent-%COMP%], [class*=\" icon1-\"][_ngcontent-%COMP%] {\n  \n  font-family: \"icomoon\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon_dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE100\";\n}\n.icon_leave[_ngcontent-%COMP%]:before {\n  content: \"\uE101\";\n}\n.icon_attendance[_ngcontent-%COMP%]:before {\n  content: \"\uE102\";\n}\n.icon_timesheet[_ngcontent-%COMP%]:before {\n  content: \"\uE103\";\n}\n.icon_attendance1[_ngcontent-%COMP%]:before {\n  content: \"\uE104\";\n}\n.icon_support[_ngcontent-%COMP%]:before {\n  content: \"\uE105\";\n}\n.icon_quick_apply[_ngcontent-%COMP%]:before {\n  content: \"\uE106\";\n}\n.icon_leave_bank[_ngcontent-%COMP%]:before {\n  content: \"\uE107\";\n}\n.icon_collapse[_ngcontent-%COMP%]:before {\n  content: \"\uE108\";\n}\n.icon_expand[_ngcontent-%COMP%]:before {\n  content: \"\uE109\";\n}\n.icon_filter[_ngcontent-%COMP%]:before {\n  content: \"\uE10A\";\n}\n.icon_date_picker[_ngcontent-%COMP%]:before {\n  content: \"\uE10B\";\n}\n.icon_arrow_thick_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10C\";\n}\n.icon_arrow_thick_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10D\";\n}\n.icon_arrow_thin_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10E\";\n}\n.icon_arrow_thin_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10F\";\n}\n.icon_hold[_ngcontent-%COMP%]:before {\n  content: \"\uE110\";\n}\n.icon_cancel[_ngcontent-%COMP%]:before {\n  content: \"\uE111\";\n}\n.icon_tick[_ngcontent-%COMP%]:before {\n  content: \"\uE112\";\n}\n.icon_lock[_ngcontent-%COMP%]:before {\n  content: \"\uE113\";\n}\n.icon_edit_outline[_ngcontent-%COMP%]:before {\n  content: \"\uE114\";\n}\n.icon_edit_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE115\";\n}\n.icon_delete_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE116\";\n}\n.icon_search[_ngcontent-%COMP%]:before {\n  content: \"\uE117\";\n}\n.icon_notifications[_ngcontent-%COMP%]:before {\n  content: \"\uE118\";\n}\n.icon_time[_ngcontent-%COMP%]:before {\n  content: \"\uE119\";\n}\n.icon_date_time[_ngcontent-%COMP%]:before {\n  content: \"\uE11A\";\n}\n.icon_probation[_ngcontent-%COMP%]:before {\n  content: \"\uE11B\";\n}\n.icon_confirmed[_ngcontent-%COMP%]:before {\n  content: \"\uE11C\";\n}\n.icon_holidays[_ngcontent-%COMP%]:before {\n  content: \"\uE11D\";\n}\n.icon_priority_urgent[_ngcontent-%COMP%]:before {\n  content: \"\uE11E\";\n}\n.icon_arrow_up[_ngcontent-%COMP%]:before {\n  content: \"\uE11F\";\n}\n.icon_arrow_down[_ngcontent-%COMP%]:before {\n  content: \"\uE120\";\n}\n.icon_show_password[_ngcontent-%COMP%]:before {\n  content: \"\uE121\";\n}\n.icon_hide_password[_ngcontent-%COMP%]:before {\n  content: \"\uE122\";\n}\n.icon_name[_ngcontent-%COMP%]:before {\n  content: \"\uE123\";\n}\n.icon_organisation[_ngcontent-%COMP%]:before {\n  content: \"\uE124\";\n}\n.icon_phone[_ngcontent-%COMP%]:before {\n  content: \"\uE125\";\n}\n.icon_email[_ngcontent-%COMP%]:before {\n  content: \"\uE126\";\n}\n.icon_password[_ngcontent-%COMP%]:before {\n  content: \"\uE127\";\n}\n.icon_add[_ngcontent-%COMP%]:before {\n  content: \"\uE128\";\n}\n.icon_sign_out[_ngcontent-%COMP%]:before {\n  content: \"\uE129\";\n}\n.icon_profile[_ngcontent-%COMP%]:before {\n  content: \"\uE12A\";\n}\n.icon_warning[_ngcontent-%COMP%]:before {\n  content: \"\uE12B\";\n}\n.icon_camera[_ngcontent-%COMP%]:before {\n  content: \"\uE12C\";\n}\n.icon1-upload-to-cloud[_ngcontent-%COMP%]:before {\n  content: \"\uE900\";\n}\n.icon1-cloud-computing[_ngcontent-%COMP%]:before {\n  content: \"\uE901\";\n}\n.icon1-dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE902\";\n}\n.icon1-filter-results[_ngcontent-%COMP%]:before {\n  content: \"\uE903\";\n}\n.icon1-building[_ngcontent-%COMP%]:before {\n  content: \"\uE904\";\n}\n.icon1-noun_Calendar[_ngcontent-%COMP%]:before {\n  content: \"\uE905\";\n}\n.icon1-noun_Project[_ngcontent-%COMP%]:before {\n  content: \"\uE906\";\n}\n.icon1-noun_Upload[_ngcontent-%COMP%]:before {\n  content: \"\uE907\";\n}\n.icon1-noun_users[_ngcontent-%COMP%]:before {\n  content: \"\uE908\";\n}\n.icon1-noun_Work[_ngcontent-%COMP%]:before {\n  content: \"\uE909\";\n}\n.icon1-Path[_ngcontent-%COMP%]:before {\n  content: \"\uE90A\";\n}\n.leave__status[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n.leave__status[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]::before {\n  content: \"\uE101\";\n}\n.leave__status[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .leave__status[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n#whosisonleave[_ngcontent-%COMP%] {\n  position: relative;\n}\n.view__more--person[_ngcontent-%COMP%], .leave__person[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.leave__data[_ngcontent-%COMP%] {\n  padding: 1.1rem 0;\n  border-bottom: 1px solid #E8E8E8;\n}\n@media (max-width: 1600px) {\n  .leave__data[_ngcontent-%COMP%] {\n    padding: 0.5rem 0;\n  }\n}\n.leave__data[_ngcontent-%COMP%]   .leave__person[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.leave__data[_ngcontent-%COMP%]   .leave__person[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  margin-bottom: 10px;\n}\n.leave__data[_ngcontent-%COMP%]   .leave__person[_ngcontent-%COMP%]   .leave__person--list[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-bottom: 0;\n}\n.leave__data[_ngcontent-%COMP%]   .leave__person[_ngcontent-%COMP%]   .leave__person--list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: left;\n  margin-right: 0.9rem;\n}\n.leave__data[_ngcontent-%COMP%]   .leave__person[_ngcontent-%COMP%]   .leave__person--list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.leave__data[_ngcontent-%COMP%]   .leave__person[_ngcontent-%COMP%]   .leave__person--list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n@media (max-width: 1600px) {\n  .leave__data[_ngcontent-%COMP%]   .leave__person[_ngcontent-%COMP%]   .leave__person--list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 33px;\n    height: 33px;\n  }\n}\n@media (max-width: 1440px) {\n  .leave__data[_ngcontent-%COMP%]   .leave__person[_ngcontent-%COMP%]   .leave__person--list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n}\n.leave__data[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.view__more--person[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.view__more--person[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6747D4;\n  font-size: 0.9em;\n  line-height: 13px;\n  cursor: pointer;\n}\n.view__more--person[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #9A45D2;\n}\n.view__more--person[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  max-width: 40px;\n  text-align: center;\n  position: absolute;\n  right: 0;\n  top: 50%;\n}\n.user_img4[_ngcontent-%COMP%] {\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n  font-weight: 500;\n  letter-spacing: 0px;\n  text-transform: uppercase;\n  width: 40px;\n  height: 40px;\n}\n@media (max-width: 1440px) {\n  .user_img4[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n}\n@media (max-width: 1366px) {\n  .user_img4[_ngcontent-%COMP%] {\n    width: 23px;\n    height: 23px;\n  }\n}\n.bg__blue[_ngcontent-%COMP%] {\n  background-color: #1c91ff;\n}\n.bg__rose[_ngcontent-%COMP%] {\n  background-color: #F94F89;\n}\n.bg__brown[_ngcontent-%COMP%] {\n  background-color: #AA347B;\n}\n.bg__orange[_ngcontent-%COMP%] {\n  background-color: #FF6C00;\n}\n.bg__darkblue[_ngcontent-%COMP%] {\n  background-color: #6747D4;\n}\n.bg__neptune[_ngcontent-%COMP%] {\n  background-color: #7CA1B1;\n}\n.bg__pink[_ngcontent-%COMP%] {\n  background-color: #9A45D2;\n}\n.pop__over[_ngcontent-%COMP%] {\n  width: 250px;\n  margin: 0;\n}\n.pop__over[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n}\n.pop__over[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n.bs-popover-top[_ngcontent-%COMP%] {\n  border: none !important;\n}\n.popover-body[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.more__leave--details[_ngcontent-%COMP%] {\n  text-align: right;\n  position: absolute;\n  right: 0;\n  top: 44px;\n}\n.more__leave--details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  display: inline-block;\n  padding: 0 2rem;\n  cursor: pointer;\n  text-transform: capitalize;\n}\n.page__selection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6747D4;\n  cursor: pointer;\n  padding-left: 0.5rem;\n}\n.page__selection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\n.current__month[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90px;\n  text-align: center;\n  position: relative;\n  left: 5px;\n}\n@media (max-width: 567px) {\n  .current__month[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n}\n.viewMore__details[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9;\n  right: -15px;\n  top: -12px;\n  cursor: pointer;\n}\n.viewMore__details-close[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9;\n  right: -14px;\n  top: -13px;\n  cursor: pointer;\n}\n.dateFilter__selection[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: absolute;\n  z-index: 9;\n  right: 50px;\n  top: -3px;\n  cursor: pointer;\n}\n.dateFilter__selection[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #6747D4;\n  font-weight: 500;\n  border-bottom: 1px solid #6747D4;\n}\n@media (max-width: 567px) {\n  .dateFilter__selection[_ngcontent-%COMP%] {\n    position: relative;\n    right: inherit;\n    left: 0;\n    top: 1rem;\n    padding-left: 0;\n  }\n}\n@media (max-width: 1366px) {\n  .img_none[_ngcontent-%COMP%] {\n    width: 30px !important;\n    height: 30px !important;\n  }\n}\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6 !important;\n}\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: #6C44E1 !important;\n  color: white;\n}\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: #efefef !important;\n  color: #000;\n}\n@media (max-width: 991px) {\n  .whosonleave_table[_ngcontent-%COMP%] {\n    display: inherit !important;\n  }\n}\n@media (max-width: 567px) {\n  .whosonleave_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    width: 60%;\n    float: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tb2R1bGUvZGFzaGJvYXJkL3dob3Mtb24tbGVhdmUvd2hvcy1vbi1sZWF2ZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL3JlbnVnYS9EZXNrdG9wL1ZTQy13b3Jrc3BhY2UvQW5ndWxhciBXb3Jrc3BhY2UvY2xvdWRub3ctY2h1dHRpLXdlYi9zcmMvYXBwL3VzZXItbW9kdWxlL2Rhc2hib2FyZC93aG9zLW9uLWxlYXZlL3dob3Mtb24tbGVhdmUuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9yZW51Z2EvRGVza3RvcC9WU0Mtd29ya3NwYWNlL0FuZ3VsYXIgV29ya3NwYWNlL2Nsb3Vkbm93LWNodXR0aS13ZWIvc3RkaW4iLCIvaG9tZS9yZW51Z2EvRGVza3RvcC9WU0Mtd29ya3NwYWNlL0FuZ3VsYXIgV29ya3NwYWNlL2Nsb3Vkbm93LWNodXR0aS13ZWIvc3JjL2Fzc2V0cy9zY3NzL19taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ3FCaEI7O0VBRUUsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBRG5CRjtBQ3FCQTtFQUNFLCtFQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBRUEsc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FEbkJGO0FDb0VFO0VBQXVCLFlBQUE7QURoRXpCO0FDZ0V5QztFQUFtQixZQUFBO0FENUQ1RDtBQzRENEU7RUFBd0IsWUFBQTtBRHhEcEc7QUN3RG9IO0VBQXVCLFlBQUE7QURwRDNJO0FDb0QySjtFQUF5QixZQUFBO0FEaERwTDtBQ2dEb007RUFBcUIsWUFBQTtBRDVDek47QUM0Q3lPO0VBQXlCLFlBQUE7QUR4Q2xRO0FDd0NrUjtFQUF3QixZQUFBO0FEcEMxUztBQ29DMFQ7RUFBc0IsWUFBQTtBRGhDaFY7QUNnQ2dXO0VBQW9CLFlBQUE7QUQ1QnBYO0FDNEJvWTtFQUFvQixZQUFBO0FEeEJ4WjtBQ3dCd2E7RUFBeUIsWUFBQTtBRHBCamM7QUNvQmlkO0VBQThCLFlBQUE7QURoQi9lO0FDZ0IrZjtFQUErQixZQUFBO0FEWjloQjtBQ1k4aUI7RUFBNkIsWUFBQTtBRFIza0I7QUNRMmxCO0VBQThCLFlBQUE7QURKem5CO0FDSXlvQjtFQUFrQixZQUFBO0FEQTNwQjtBQ0EycUI7RUFBb0IsWUFBQTtBREkvckI7QUNKK3NCO0VBQWtCLFlBQUE7QURRanVCO0FDUml2QjtFQUFrQixZQUFBO0FEWW53QjtBQ1pteEI7RUFBMEIsWUFBQTtBRGdCN3lCO0FDaEI2ekI7RUFBeUIsWUFBQTtBRG9CdDFCO0FDcEJzMkI7RUFBMkIsWUFBQTtBRHdCajRCO0FDeEJpNUI7RUFBb0IsWUFBQTtBRDRCcjZCO0FDNUJxN0I7RUFBMkIsWUFBQTtBRGdDaDlCO0FDaENnK0I7RUFBa0IsWUFBQTtBRG9DbC9CO0FDcENrZ0M7RUFBdUIsWUFBQTtBRHdDemhDO0FDeEN5aUM7RUFBdUIsWUFBQTtBRDRDaGtDO0FDNUNnbEM7RUFBdUIsWUFBQTtBRGdEdm1DO0FDaER1bkM7RUFBc0IsWUFBQTtBRG9EN29DO0FDcEQ2cEM7RUFBNkIsWUFBQTtBRHdEMXJDO0FDeEQwc0M7RUFBc0IsWUFBQTtBRDREaHVDO0FDNURndkM7RUFBd0IsWUFBQTtBRGdFeHdDO0FDaEV3eEM7RUFBMkIsWUFBQTtBRG9FbnpDO0FDcEVtMEM7RUFBMkIsWUFBQTtBRHdFOTFDO0FDeEU4MkM7RUFBa0IsWUFBQTtBRDRFaDRDO0FDNUVnNUM7RUFBMEIsWUFBQTtBRGdGMTZDO0FDaEYwN0M7RUFBbUIsWUFBQTtBRG9GNzhDO0FDcEY2OUM7RUFBbUIsWUFBQTtBRHdGaC9DO0FDeEZnZ0Q7RUFBc0IsWUFBQTtBRDRGdGhEO0FDNUZzaUQ7RUFBaUIsWUFBQTtBRGdHdmpEO0FDaEd1a0Q7RUFBc0IsWUFBQTtBRG9HN2xEO0FDcEc2bUQ7RUFBcUIsWUFBQTtBRHdHbG9EO0FDeEdrcEQ7RUFBcUIsWUFBQTtBRDRHdnFEO0FDNUd1ckQ7RUFBb0IsWUFBQTtBRGdIM3NEO0FDOUdFO0VBQ0UsWUFBQTtBRGlISjtBQy9HRTtFQUNFLFlBQUE7QURrSEo7QUNoSEU7RUFDRSxZQUFBO0FEbUhKO0FDakhFO0VBQ0UsWUFBQTtBRG9ISjtBQ2xIRTtFQUNFLFlBQUE7QURxSEo7QUNuSEU7RUFDRSxZQUFBO0FEc0hKO0FDcEhFO0VBQ0UsWUFBQTtBRHVISjtBQ3JIRTtFQUNFLFlBQUE7QUR3SEo7QUN0SEU7RUFDRSxZQUFBO0FEeUhKO0FDdkhFO0VBQ0UsWUFBQTtBRDBISjtBQ3hIRTtFQUNFLFlBQUE7QUQySEo7QUV0UEE7RUFDSSw2QkFBQTtBRnlQSjtBRXRQUTtFQUNJLFlBQUE7QUZ3UFo7QUVwUEk7O0VBRUkscUJBQUE7QUZzUFI7QUVuUEE7RUFDQyxrQkFBQTtBRnNQRDtBRW5QQTs7RUFFSSxxQkFBQTtBRnNQSjtBRW5QQTtFQUNJLGlCQUFBO0VBb0RBLGdDQUFBO0FGbU1KO0FHalJRO0VEeUJSO0lBSUksaUJBQUE7RUZ3UEY7QUFDRjtBRXZQSTtFQUNJLFdBQUE7QUZ5UFI7QUV2UFE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FGeVBaO0FFdFBRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FGd1BaO0FFdFBZO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUZ3UGhCO0FFdFBnQjtFQUNJLGVBQUE7QUZ3UHBCO0FFclBnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FGdVBwQjtBRy9TUTtFRG9EUTtJQU9RLFdBQUE7SUFDQSxZQUFBO0VGd1B0QjtBQUNGO0FHL1NRO0VEOENRO0lBV1EsV0FBQTtJQUNBLFlBQUE7RUYwUHRCO0FBQ0Y7QUUzT0k7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FGNk9SO0FFek9BO0VBQ0ksVUFBQTtBRjRPSjtBRTFPSTtFQUNJLGNEdkZFO0VDd0ZGLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FGNE9SO0FFM09RO0VBRUUsY0Q5RkE7QUQwVVY7QUUxT1E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FGNE9aO0FFcE9BO0VEbENJLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBcEZHO0VBcUZILGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQzRCQSxXQUFBO0VBQ0EsWUFBQTtBRitPSjtBRzNWUTtFRHlHUjtJQUtRLFdBQUE7SUFDQSxZQUFBO0VGaVBOO0FBQ0Y7QUczVlE7RURtR1I7SUFTUSxXQUFBO0lBQ0EsWUFBQTtFRm1QTjtBQUNGO0FFN09BO0VBRUkseUJEdEhHO0FEcVdQO0FFN09BO0VBRUkseUJEekhFO0FEd1dOO0FFN09BO0VBRUkseUJEaElHO0FEK1dQO0FFN09BO0VBRUsseUJEcklHO0FEb1hSO0FFN09BO0VBRUsseUJEL0lLO0FEOFhWO0FFN09BO0VBRUkseUJEeElLO0FEdVhUO0FFN09BO0VBRUkseUJEeEpNO0FEdVlWO0FFNU9BO0VBRUksWUFBQTtFQUVBLFNBQUE7QUY2T0o7QUU1T0k7RUFFSSw4QkFBQTtBRjZPUjtBRTNPSTtFQUVJLG9CQUFBO0FGNE9SO0FFek9BO0VBRUksdUJBQUE7QUYyT0o7QUV6T0E7RUFFSSxxQkFBQTtBRjJPSjtBRXhPQTtFQUVJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBRjBPSjtBRXpPSTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQW1CLGVBQUE7RUFDbkIsMEJBQUE7QUY0T1I7QUV2T0k7RUFDRSxjRGpNSTtFQ2tNRixlQUFBO0VBS0Ysb0JBQUE7QUZzT047QUUxT007RUFDRSxlQUFBO0FGNE9SO0FFdE9FO0VBRUUscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUZ3T0o7QUd6WVE7RUQySk47SUFTTSxXQUFBO0VGeU9OO0FBQ0Y7QUV2T0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUYwT0o7QUV4T0k7RUFFSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUYwT1I7QUV2T0k7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBRjBPUjtBRXpPUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FGMk9aO0FHNWFRO0VEdUxKO0lBY1Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0VGMk9WO0FBQ0Y7QUczZFE7RURtUFI7SUFFUSxzQkFBQTtJQUNBLHVCQUFBO0VGMk9OO0FBQ0Y7QUV4T0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRjJPSjtBRXpPRTtFQUNFLG9DQUFBO0FGNE9KO0FFMU9FO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0FGNk9KO0FFMU9FO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0FGNk9KO0FHcmVRO0VENFBOO0lBSU0sMkJBQUE7RUYwT047QUFDRjtBR3hkUTtFRG1QSTtJQUVFLFVBQUE7SUFDQSxZQUFBO0VGdU9aO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyLW1vZHVsZS9kYXNoYm9hcmQvd2hvcy1vbi1sZWF2ZS93aG9zLW9uLWxlYXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuW2NsYXNzXj1pY29uX10sXG5bY2xhc3MqPVwiIGljb25fXCJdIHtcbiAgZm9udC1mYW1pbHk6IFwiY2h1dHRpXCIgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbltjbGFzc149aWNvbjEtXSwgW2NsYXNzKj1cIiBpY29uMS1cIl0ge1xuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICBmb250LWZhbWlseTogXCJpY29tb29uXCIgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uaWNvbl9kYXNoYm9hcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIBcIjtcbn1cblxuLmljb25fbGVhdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIFcIjtcbn1cblxuLmljb25fYXR0ZW5kYW5jZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EglwiO1xufVxuXG4uaWNvbl90aW1lc2hlZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhINcIjtcbn1cblxuLmljb25fYXR0ZW5kYW5jZTE6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIRcIjtcbn1cblxuLmljb25fc3VwcG9ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EhVwiO1xufVxuXG4uaWNvbl9xdWlja19hcHBseTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EhlwiO1xufVxuXG4uaWNvbl9sZWF2ZV9iYW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSHXCI7XG59XG5cbi5pY29uX2NvbGxhcHNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSIXCI7XG59XG5cbi5pY29uX2V4cGFuZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EiVwiO1xufVxuXG4uaWNvbl9maWx0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIpcIjtcbn1cblxuLmljb25fZGF0ZV9waWNrZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhItcIjtcbn1cblxuLmljb25fYXJyb3dfdGhpY2tfbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EjFwiO1xufVxuXG4uaWNvbl9hcnJvd190aGlja19yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EjVwiO1xufVxuXG4uaWNvbl9hcnJvd190aGluX2xlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhI5cIjtcbn1cblxuLmljb25fYXJyb3dfdGhpbl9yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ej1wiO1xufVxuXG4uaWNvbl9ob2xkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSQXCI7XG59XG5cbi5pY29uX2NhbmNlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EkVwiO1xufVxuXG4uaWNvbl90aWNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSSXCI7XG59XG5cbi5pY29uX2xvY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJNcIjtcbn1cblxuLmljb25fZWRpdF9vdXRsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSUXCI7XG59XG5cbi5pY29uX2VkaXRfZmlsbGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSVXCI7XG59XG5cbi5pY29uX2RlbGV0ZV9maWxsZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJZcIjtcbn1cblxuLmljb25fc2VhcmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSXXCI7XG59XG5cbi5pY29uX25vdGlmaWNhdGlvbnM6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJhcIjtcbn1cblxuLmljb25fdGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EmVwiO1xufVxuXG4uaWNvbl9kYXRlX3RpbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJpcIjtcbn1cblxuLmljb25fcHJvYmF0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSbXCI7XG59XG5cbi5pY29uX2NvbmZpcm1lZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EnFwiO1xufVxuXG4uaWNvbl9ob2xpZGF5czpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EnVwiO1xufVxuXG4uaWNvbl9wcmlvcml0eV91cmdlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJ5cIjtcbn1cblxuLmljb25fYXJyb3dfdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJ9cIjtcbn1cblxuLmljb25fYXJyb3dfZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EoFwiO1xufVxuXG4uaWNvbl9zaG93X3Bhc3N3b3JkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oShXCI7XG59XG5cbi5pY29uX2hpZGVfcGFzc3dvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKJcIjtcbn1cblxuLmljb25fbmFtZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eo1wiO1xufVxuXG4uaWNvbl9vcmdhbmlzYXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKRcIjtcbn1cblxuLmljb25fcGhvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKVcIjtcbn1cblxuLmljb25fZW1haWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKZcIjtcbn1cblxuLmljb25fcGFzc3dvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKdcIjtcbn1cblxuLmljb25fYWRkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSoXCI7XG59XG5cbi5pY29uX3NpZ25fb3V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSpXCI7XG59XG5cbi5pY29uX3Byb2ZpbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKpcIjtcbn1cblxuLmljb25fd2FybmluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eq1wiO1xufVxuXG4uaWNvbl9jYW1lcmE6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKxcIjtcbn1cblxuLmljb24xLXVwbG9hZC10by1jbG91ZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kgFwiO1xufVxuXG4uaWNvbjEtY2xvdWQtY29tcHV0aW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSBXCI7XG59XG5cbi5pY29uMS1kYXNoYm9hcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIJcIjtcbn1cblxuLmljb24xLWZpbHRlci1yZXN1bHRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSDXCI7XG59XG5cbi5pY29uMS1idWlsZGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6khFwiO1xufVxuXG4uaWNvbjEtbm91bl9DYWxlbmRhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6khVwiO1xufVxuXG4uaWNvbjEtbm91bl9Qcm9qZWN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSGXCI7XG59XG5cbi5pY29uMS1ub3VuX1VwbG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kh1wiO1xufVxuXG4uaWNvbjEtbm91bl91c2VyczpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kiFwiO1xufVxuXG4uaWNvbjEtbm91bl9Xb3JrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSJXCI7XG59XG5cbi5pY29uMS1QYXRoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSKXCI7XG59XG5cbi5sZWF2ZV9fc3RhdHVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG59XG4ubGVhdmVfX3N0YXR1cyBoNTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIFcIjtcbn1cbi5sZWF2ZV9fc3RhdHVzIGg1LFxuLmxlYXZlX19zdGF0dXMgaDYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiN3aG9zaXNvbmxlYXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udmlld19fbW9yZS0tcGVyc29uLFxuLmxlYXZlX19wZXJzb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5sZWF2ZV9fZGF0YSB7XG4gIHBhZGRpbmc6IDEuMXJlbSAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFODtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmxlYXZlX19kYXRhIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgfVxufVxuLmxlYXZlX19kYXRhIC5sZWF2ZV9fcGVyc29uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubGVhdmVfX2RhdGEgLmxlYXZlX19wZXJzb24gcCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubGVhdmVfX2RhdGEgLmxlYXZlX19wZXJzb24gLmxlYXZlX19wZXJzb24tLWxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubGVhdmVfX2RhdGEgLmxlYXZlX19wZXJzb24gLmxlYXZlX19wZXJzb24tLWxpc3QgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDAuOXJlbTtcbn1cbi5sZWF2ZV9fZGF0YSAubGVhdmVfX3BlcnNvbiAubGVhdmVfX3BlcnNvbi0tbGlzdCBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmxlYXZlX19kYXRhIC5sZWF2ZV9fcGVyc29uIC5sZWF2ZV9fcGVyc29uLS1saXN0IGxpIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAubGVhdmVfX2RhdGEgLmxlYXZlX19wZXJzb24gLmxlYXZlX19wZXJzb24tLWxpc3QgbGkgaW1nIHtcbiAgICB3aWR0aDogMzNweDtcbiAgICBoZWlnaHQ6IDMzcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmxlYXZlX19kYXRhIC5sZWF2ZV9fcGVyc29uIC5sZWF2ZV9fcGVyc29uLS1saXN0IGxpIGltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG59XG4ubGVhdmVfX2RhdGE6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4udmlld19fbW9yZS0tcGVyc29uIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi52aWV3X19tb3JlLS1wZXJzb24gYSB7XG4gIGNvbG9yOiAjNjc0N0Q0O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnZpZXdfX21vcmUtLXBlcnNvbiBhOmhvdmVyIHtcbiAgY29sb3I6ICM5QTQ1RDI7XG59XG4udmlld19fbW9yZS0tcGVyc29uIGEgZGl2IHtcbiAgbWF4LXdpZHRoOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xufVxuXG4udXNlcl9pbWc0IHtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLnVzZXJfaW1nNCB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIC51c2VyX2ltZzQge1xuICAgIHdpZHRoOiAyM3B4O1xuICAgIGhlaWdodDogMjNweDtcbiAgfVxufVxuXG4uYmdfX2JsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5MWZmO1xufVxuXG4uYmdfX3Jvc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjk0Rjg5O1xufVxuXG4uYmdfX2Jyb3duIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMzQ3Qjtcbn1cblxuLmJnX19vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2QzAwO1xufVxuXG4uYmdfX2RhcmtibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3NDdENDtcbn1cblxuLmJnX19uZXB0dW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDQTFCMTtcbn1cblxuLmJnX19waW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlBNDVEMjtcbn1cblxuLnBvcF9fb3ZlciB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luOiAwO1xufVxuLnBvcF9fb3ZlciBzdHJvbmcge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ucG9wX19vdmVyIHAge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmJzLXBvcG92ZXItdG9wIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5wb3BvdmVyLWJvZHkge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tb3JlX19sZWF2ZS0tZGV0YWlscyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDQ0cHg7XG59XG4ubW9yZV9fbGVhdmUtLWRldGFpbHMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucGFnZV9fc2VsZWN0aW9uIGEge1xuICBjb2xvcjogIzY3NDdENDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cbi5wYWdlX19zZWxlY3Rpb24gYTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmN1cnJlbnRfX21vbnRoIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAuY3VycmVudF9fbW9udGgge1xuICAgIHdpZHRoOiA2MHB4O1xuICB9XG59XG5cbi52aWV3TW9yZV9fZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbiAgcmlnaHQ6IC0xNXB4O1xuICB0b3A6IC0xMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52aWV3TW9yZV9fZGV0YWlscy1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbiAgcmlnaHQ6IC0xNHB4O1xuICB0b3A6IC0xM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXRlRmlsdGVyX19zZWxlY3Rpb24ge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbiAgcmlnaHQ6IDUwcHg7XG4gIHRvcDogLTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRhdGVGaWx0ZXJfX3NlbGVjdGlvbiAuYWN0aXZlIHtcbiAgY29sb3I6ICM2NzQ3RDQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjc0N0Q0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gIC5kYXRlRmlsdGVyX19zZWxlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogaW5oZXJpdDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuaW1nX25vbmUge1xuICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTYgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsIC5jdXN0b20tZGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZDNDRFMSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC53aG9zb25sZWF2ZV90YWJsZSB7XG4gICAgZGlzcGxheTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLndob3NvbmxlYXZlX3RhYmxlIHRkIC5kLWZsZXgge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59IiwiJHdoaXRlOiNmZmZmZmY7XG4kYm9yZGVyLWNvbG9yOiNERURFREU7XG4kYm9yZGVyLWxpZ2h0OiNFOEU4RTg7XG4kbGlnaHQtYmx1ZTojRjFGN0ZCO1xuJGRhcmtQaW5rOiM5QTQ1RDI7XG4kZGFya0JsdWU6IzY3NDdENDtcbiR0ZXh0LWNvbG9yOiM0MDQwNDA7XG4kcHJpbWFyeUNvbG9yOiM3MTUxREM7XG4kZ3JheTojNkU2RTZFO1xuJGJsYWNrOiMwMDAwMDA7XG4kZGFya1JlZDojRTMyQzJDO1xuJG9yYW5nZTojRkY2QzAwO1xuJGJyb3duOiNBQTM0N0I7XG4kYXJyb3dHcmF5OiM4NDg0ODQ7XG4kYmx1ZTogIzFjOTFmZjtcbiRyb3NlOiNGOTRGODk7XG4kbmVwdHVuZTojN0NBMUIxO1xuJHllbGxvdzojRTI4NjBEO1xuJGNvbG9yLWJhY2s6ICNlZmVmZWY7XG4kY29sb3ItYmFyOiAjNjc0N0Q0O1xuXG5bY2xhc3NePVwiaWNvbl9cIl0sXG5bY2xhc3MqPVwiIGljb25fXCJdIHtcbiAgZm9udC1mYW1pbHk6ICdjaHV0dGknICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuW2NsYXNzXj1cImljb24xLVwiXSwgW2NsYXNzKj1cIiBpY29uMS1cIl0ge1xuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICBmb250LWZhbWlseTogJ2ljb21vb24nICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5cbkBtaXhpbiBiZy1ncmFkaWVudCgpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsJGRhcmtQaW5rIDIwJSwgJGRhcmtCbHVlIDgwJSk7XG59XG5AbWl4aW4gdGhlbWUtYnRuKCl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya0JsdWUgMCUsICRkYXJrUGluayAxMDAlKTtcbn1cbkBtaXhpbiBiZy1ibGFjaygpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwkYmxhY2sgMCUsICMxMjEyMTMgMTAwJSk7XG59XG5AbWl4aW4gZm9udC1jb2xvcigpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCRkYXJrUGluayAyMCUsICRkYXJrQmx1ZSA4MCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya1BpbmsgMjAlLCAkZGFya0JsdWUgODAlKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7ICAgIFxuICB9XG4gIEBtaXhpbiAgYm9yZGVyLWJvdHRvbSgpIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogJGRhcmtCbHVlO1xuICAgIH1cbiAgfVxuXG5AbWl4aW4gdXNlckltZyAoKXtcblxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAuMTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuJWJ0bi1zaGFyZWQge1xuICAgIG1pbi1oZWlnaHQ6IDU1cHg7XG4gIH1cblxuICAuaWNvbl9kYXNoYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDBcIn0uaWNvbl9sZWF2ZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwMVwifS5pY29uX2F0dGVuZGFuY2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDJcIn0uaWNvbl90aW1lc2hlZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDNcIn0uaWNvbl9hdHRlbmRhbmNlMTpiZWZvcmV7Y29udGVudDpcIlxcZTEwNFwifS5pY29uX3N1cHBvcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDVcIn0uaWNvbl9xdWlja19hcHBseTpiZWZvcmV7Y29udGVudDpcIlxcZTEwNlwifS5pY29uX2xlYXZlX2Jhbms6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDdcIn0uaWNvbl9jb2xsYXBzZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwOFwifS5pY29uX2V4cGFuZDpiZWZvcmV7Y29udGVudDpcIlxcZTEwOVwifS5pY29uX2ZpbHRlcjpiZWZvcmV7Y29udGVudDpcIlxcZTEwYVwifS5pY29uX2RhdGVfcGlja2VyOmJlZm9yZXtjb250ZW50OlwiXFxlMTBiXCJ9Lmljb25fYXJyb3dfdGhpY2tfbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZTEwY1wifS5pY29uX2Fycm93X3RoaWNrX3JpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxlMTBkXCJ9Lmljb25fYXJyb3dfdGhpbl9sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxlMTBlXCJ9Lmljb25fYXJyb3dfdGhpbl9yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZTEwZlwifS5pY29uX2hvbGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTBcIn0uaWNvbl9jYW5jZWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTFcIn0uaWNvbl90aWNrOmJlZm9yZXtjb250ZW50OlwiXFxlMTEyXCJ9Lmljb25fbG9jazpiZWZvcmV7Y29udGVudDpcIlxcZTExM1wifS5pY29uX2VkaXRfb3V0bGluZTpiZWZvcmV7Y29udGVudDpcIlxcZTExNFwifS5pY29uX2VkaXRfZmlsbGVkOmJlZm9yZXtjb250ZW50OlwiXFxlMTE1XCJ9Lmljb25fZGVsZXRlX2ZpbGxlZDpiZWZvcmV7Y29udGVudDpcIlxcZTExNlwifS5pY29uX3NlYXJjaDpiZWZvcmV7Y29udGVudDpcIlxcZTExN1wifS5pY29uX25vdGlmaWNhdGlvbnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMThcIn0uaWNvbl90aW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTE5XCJ9Lmljb25fZGF0ZV90aW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTFhXCJ9Lmljb25fcHJvYmF0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxlMTFiXCJ9Lmljb25fY29uZmlybWVkOmJlZm9yZXtjb250ZW50OlwiXFxlMTFjXCJ9Lmljb25faG9saWRheXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWRcIn0uaWNvbl9wcmlvcml0eV91cmdlbnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWVcIn0uaWNvbl9hcnJvd191cDpiZWZvcmV7Y29udGVudDpcIlxcZTExZlwifS5pY29uX2Fycm93X2Rvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjBcIn0uaWNvbl9zaG93X3Bhc3N3b3JkOmJlZm9yZXtjb250ZW50OlwiXFxlMTIxXCJ9Lmljb25faGlkZV9wYXNzd29yZDpiZWZvcmV7Y29udGVudDpcIlxcZTEyMlwifS5pY29uX25hbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjNcIn0uaWNvbl9vcmdhbmlzYXRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjRcIn0uaWNvbl9waG9uZTpiZWZvcmV7Y29udGVudDpcIlxcZTEyNVwifS5pY29uX2VtYWlsOmJlZm9yZXtjb250ZW50OlwiXFxlMTI2XCJ9Lmljb25fcGFzc3dvcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjdcIn0uaWNvbl9hZGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjhcIn0uaWNvbl9zaWduX291dDpiZWZvcmV7Y29udGVudDpcIlxcZTEyOVwifS5pY29uX3Byb2ZpbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMmFcIn0uaWNvbl93YXJuaW5nOmJlZm9yZXtjb250ZW50OlwiXFxlMTJiXCJ9Lmljb25fY2FtZXJhOmJlZm9yZXtjb250ZW50OlwiXFxlMTJjXCJ9XG5cbiAgLmljb24xLXVwbG9hZC10by1jbG91ZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAwXCI7XG4gIH1cbiAgLmljb24xLWNsb3VkLWNvbXB1dGluZzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAxXCI7XG4gIH1cbiAgLmljb24xLWRhc2hib2FyZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAyXCI7XG4gIH1cbiAgLmljb24xLWZpbHRlci1yZXN1bHRzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDNcIjtcbiAgfVxuICAuaWNvbjEtYnVpbGRpbmc6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwNFwiO1xuICB9XG4gIC5pY29uMS1ub3VuX0NhbGVuZGFyOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDVcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9Qcm9qZWN0OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDZcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9VcGxvYWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwN1wiO1xuICB9XG4gIC5pY29uMS1ub3VuX3VzZXJzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDhcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9Xb3JrOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDlcIjtcbiAgfVxuICAuaWNvbjEtUGF0aDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTBhXCI7XG4gIH0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9taXhpbi5zY3NzJztcblxuXG4ubGVhdmVfX3N0YXR1cyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICBcbiAgICBoNSB7XG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZTEwMVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaDUsXG4gICAgaDYge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxufVxuI3dob3Npc29ubGVhdmVcbntwb3NpdGlvbjogcmVsYXRpdmU7XG5cbn1cbi52aWV3X19tb3JlLS1wZXJzb24sXG4ubGVhdmVfX3BlcnNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubGVhdmVfX2RhdGEge1xuICAgIHBhZGRpbmc6IDEuMXJlbSAwO1xuQGluY2x1ZGUgYnJlYWtwb2ludChiaWctZGVza3RvcClcbntcbiAgICBwYWRkaW5nOiAuNXJlbSAwO1xufVxuICAgIC5sZWF2ZV9fcGVyc29uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxlYXZlX19wZXJzb24tLWxpc3Qge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC45cmVtO1xuXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KGJpZy1kZXNrdG9wKSBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludCAoZGVza3RvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQGluY2x1ZGUgYnJlYWtwb2ludCAobGFwdG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogMjNweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1saWdodDtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbn1cblxuLnZpZXdfX21vcmUtLXBlcnNvbiB7XG4gICAgd2lkdGg6IDIwJTtcblxuICAgIGEge1xuICAgICAgICBjb2xvcjogJGRhcmtCbHVlO1xuICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICY6aG92ZXJcbiAgICAgICAge1xuICAgICAgICAgIGNvbG9yOiAkZGFya1Bpbms7XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5cbiV1c2VyLWltZzR7XG4gICAgQGluY2x1ZGUgdXNlckltZygpO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBAaW5jbHVkZSBicmVha3BvaW50IChkZXNrdG9wKSB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQgKGxhcHRvcCkge1xuICAgICAgICB3aWR0aDogMjNweDtcbiAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgIH1cbn1cbi51c2VyX2ltZzRcbntcbiAgIEBleHRlbmQgJXVzZXItaW1nNDtcbn1cbi5iZ19fYmx1ZSBcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbn1cbi5iZ19fcm9zZSBcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcm9zZTtcbn1cbi5iZ19fYnJvd25cbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJvd247XG59XG4uYmdfX29yYW5nZVxue1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xufVxuLmJnX19kYXJrYmx1ZVxue1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya0JsdWU7XG59XG4uYmdfX25lcHR1bmVcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmVwdHVuZTtcbn1cbi5iZ19fcGlua1xue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrUGluaztcbn1cblxuLnBvcF9fb3Zlclxue1xuICAgIHdpZHRoOiAyNTBweDsgIFxuICAgIC8vICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIG1hcmdpbjogMDtcbiAgICBzdHJvbmcgXG4gICAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHAgXG4gICAge1xuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB9XG59XG4uYnMtcG9wb3Zlci10b3AgXG57XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4ucG9wb3Zlci1ib2R5IFxue1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLm1vcmVfX2xlYXZlLS1kZXRhaWxzIFxue1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDQ0cHg7XG4gICAgbGl7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwIDJyZW07ICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG5cbi5wYWdlX19zZWxlY3Rpb24ge1xuICAgIGEge1xuICAgICAgY29sb3I6ICRkYXJrQmx1ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgICB9XG4gIH1cbiAgLmN1cnJlbnRfX21vbnRoIFxuICB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNXB4O1xuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSBcbiAgICB7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cbiAgfVxuICAudmlld01vcmVfX2RldGFpbHN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk7XG4gICAgcmlnaHQ6IC0xNXB4O1xuICAgIHRvcDogLTEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAudmlld01vcmVfX2RldGFpbHMtY2xvc2VcbiAgICB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgcmlnaHQ6IC0xNHB4O1xuICAgICAgICB0b3A6IC0xM3B4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG4gICAgfVxuICAgIC5kYXRlRmlsdGVyX19zZWxlY3Rpb257XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICByaWdodDogNTBweDtcbiAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6ICM2NzQ3RDQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NzQ3RDQ7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIFxuICAgICAgICB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICByaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDFyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gIFxuLmltZ19ub25lICB7XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXB0b3ApIHtcbiAgICAgICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLy9EYXRlUmFuZ2VQaWNrZXIgU3RhcnRzXG4uY3VzdG9tLWRheSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgfVxuICAuY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmN1c3RvbS1kYXkucmFuZ2UsIC5jdXN0b20tZGF5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkM0NEUxICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlIDtcbiAgfVxuXG4gIC5jdXN0b20tZGF5LmZhZGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgLy9EYXRlUmFuZ2VQaWNrZXIgRW5kc1xuXG4gIC53aG9zb25sZWF2ZV90YWJsZSBcbiAge1xuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSBcbiAgICB7XG4gICAgICAgIGRpc3BsYXk6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIFxuICAgIHtcbiAgICAgICAgdGQgXG4gICAgICAgIHtcbiAgICAgICAgICAgIC5kLWZsZXggXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfSIsIkBtaXhpbiBicmVha3BvaW50KCRwb2ludCkge1xuICAgIEBpZiAkcG9pbnQ9PWJpZy1kZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT1kZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT1sYXB0b3Age1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PWFwcGxlLWxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBlbHNlIGlmICRwb2ludD09dGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT10YWJsZXQge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT10YWJsZXQtcyB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgQGVsc2UgaWYgJHBvaW50PT1tb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NjdweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG5cbiAgICB9XG4gICBcblxufVxuXG5cblxuQG1peGluIGdyYWRpZW50LXRleHQoJGFuZ2xlOiA0NWRlZywgJGNvbG9yOiAjNjc0N0Q0LCAkYW1vdW50OiAzNSUpIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yLCBhZGp1c3QtaHVlKCRjb2xvciwgJGFtb3VudCkpO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgICAtbW96LXRyYW5zaXRpb246ICAgICR0cmFuc2l0aW9uO1xuICAgIC1vLXRyYW5zaXRpb246ICAgICAgJHRyYW5zaXRpb247XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICB0cmFuc2l0aW9uOiAgICAgICAgICR0cmFuc2l0aW9uO1xufVxuICAiXX0= */"];



/***/ }),

/***/ "./src/app/user-module/dashboard/whos-on-leave/whos-on-leave.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/user-module/dashboard/whos-on-leave/whos-on-leave.component.ts ***!
  \********************************************************************************/
/*! exports provided: WhosOnLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhosOnLeaveComponent", function() { return WhosOnLeaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/urlConstant */ "./src/app/services/urlConstant.ts");


class WhosOnLeaveComponent {
    constructor(urlconstant, genericservice, encryptdecryptlocalstorage, daterangepickerOptions, datepipe, calendar, cssservice) {
        this.urlconstant = urlconstant;
        this.genericservice = genericservice;
        this.encryptdecryptlocalstorage = encryptdecryptlocalstorage;
        this.daterangepickerOptions = daterangepickerOptions;
        this.datepipe = datepipe;
        this.cssservice = cssservice;
        this.whoIsOnUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].whoisonleaveApi;
        this.whoisonLeaveList = [];
        this.nextOfNextWeekList = [];
        this.nextWeekList = [];
        this.todayList = [];
        this.thisweekList = [];
        //expansion
        this.dashBoardPaginationView = true;
        this.whoISonLeaveExpansionURL = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].whoISonLeaveExpansionAPI;
        this.displayHide = false;
        this.leavestausList = [];
        this.currentPage = 1;
        this.totalPages = 1;
        this.limit = 3;
        this.perpageOption = [
            { value: '10', label: '10' },
            { value: '20', label: '20' },
            { value: '50', label: '50' },
            { value: '100', label: '100' },
            { value: '500', label: '500' },
        ];
        this.selectedItemsPerPage = 3;
        this.status = "";
        // date range picker
        this.daterange = {};
        this.options = {
            locale: { format: 'YYYY-MM-DD' },
            alwaysShowCalendars: false,
        };
        this.monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.isData = true;
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
        this.cssservice.isExpandFlagObs.subscribe(data => {
            console.log('css notification');
            this.showdashwhoseonleavepagination = data;
            if (data == true) {
                console.log('css notification trigger.....');
                if ($('.nav-item.active.test').length == 0) { }
                else {
                    console.log('css notification trigger.....');
                    this.expandwhoseonleave(true);
                    $('.nav-item.active').removeClass('test');
                }
            }
        });
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
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
            this.finalDateFrom = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
            this.finalDateTo = this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
            this.finalDateFrom = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day;
            this.finalDateTo = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day;
        }
        this.startLeaveDate = this.formatDate(this.finalDateFrom);
        this.EndLeaveDate = this.formatDate(this.finalDateTo);
    }
    isHovered(date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }
    isInside(date) {
        return date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    }
    onSelectedDate(e) {
        var date = e.year + '-' + e.month + '-' + e.day;
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
    selectedDate(value, datepicker) {
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
            if (response.status.success === 'Success') {
                this.isData = true;
                this.whoisonLeaveList = response.data;
                this.nextOfNextWeekList = this.modifiedList(response.data.nextOfNextWeek);
                this.nextWeekList = this.modifiedList(response.data.nextWeek);
                this.todayList = this.modifiedList(response.data.today);
                this.thisweekList = this.modifiedList(response.data.thisWeek);
                this.nextOfNextWeekStartDate = this.whoisonLeaveList.nextOfNextWeekDateRange.split('to')[0].trim();
                this.nextOfNextWeekEndDate = this.whoisonLeaveList.nextOfNextWeekDateRange.split('to')[1].trim();
            }
            else {
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
        };
        this.start = 0;
        this.limit = this.selectedItemsPerPage;
        this.fromdate = "";
        this.todate = "";
        return this.genericservice.post(this.whoISonLeaveExpansionURL + "?fromDate=" + this.fromdate + '&toDate=' + this.todate + "&start=" + this.start + '&limit=' + this.limit, payloadReqObj, false).subscribe(response => {
            if (response.status.success === 'Fail') {
                this.isData = false;
            }
            else {
                this.isData = true;
                this.leavestausList = this.updateList(response);
                this.totalCount = response.totalResult;
                this.findItemsPerPage();
            }
        }, error => {
            console.log(error);
        });
    }
    findItemsPerPage() {
        this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);
    }
    goToPageNo(event) {
        console.log('on page change');
    }
    goToNext() {
        this.currentPage++;
        this.start = this.start + this.limit;
        this.limit = this.selectedItemsPerPage;
        this.refreshPagination();
    }
    goToPrev() {
        this.currentPage--;
        this.start = this.start - this.limit;
        this.limit = this.selectedItemsPerPage;
        this.refreshPagination();
    }
    changeItemPerPage(event) {
        console.log('event printed' + event);
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
        return this.genericservice.post(this.whoISonLeaveExpansionURL + "?fromDate=" + this.fromdate + '&toDate=' + this.todate + "&start=" + this.start + '&limit=' + this.limit, payloadReqObj, false).subscribe(response => {
            if (response.status.success === 'Fail') {
                this.isData = false;
            }
            else {
                this.isData = true;
                this.leavestausList = this.updateList(response);
                this.totalCount = response.totalResult;
                this.findItemsPerPage();
            }
        });
    }
    calendarCanceled(e) {
        console.log(e);
        // e.event
        // e.picker
    }
    calendarApplied(fromdate, todate) {
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
        };
        this.start = 0;
        this.limit = this.selectedItemsPerPage;
        return this.genericservice.post(this.whoISonLeaveExpansionURL + "?fromDate=" + this.fromdate + '&toDate=' + this.todate + "&start=" + this.start + '&limit=' + this.limit, payloadReqObj, false).subscribe(response => {
            if (response.status.success === 'Fail') {
                this.isData = false;
            }
            else {
                this.isData = true;
                this.leavestausList = this.updateList(response);
                this.currentPage = 1;
                this.totalCount = response.totalResult;
                this.findItemsPerPage();
            }
        });
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
        let payloadReqObj = {
            transactionType: "LEA",
            status: "APPROVED",
            organisationId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
        };
        this.start = 0;
        this.limit = this.selectedItemsPerPage;
        return this.genericservice.post(this.whoISonLeaveExpansionURL + "?fromDate=" + this.firstDays + '&toDate=' + this.lastDays + "&start=" + this.start + '&limit=' + this.limit, payloadReqObj, false).subscribe(response => {
            if (response.status.success === 'Fail') {
                this.isData = false;
            }
            else {
                this.isData = true;
                this.leavestausList = this.updateList(response);
                this.totalCount = response.totalResult;
                this.findItemsPerPage();
            }
        });
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
        var firstDay = new Date(latestDate.getFullYear(), (latestDate.getMonth() + 1) + this.index - 1, 1);
        var lastDay = new Date(latestDate.getFullYear(), latestDate.getMonth() + this.index + 1, 0);
        const formattedMonth = this.monthsList[firstDay.getMonth()];
        this.currentMonth = formattedMonth + '-' + firstDay.getFullYear();
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
        return this.genericservice.post(this.whoISonLeaveExpansionURL + '?fromDate=' + this.firstDays + '&toDate=' + this.lastDays + '&start=' + this.start + '&limit=' + this.limit, payloadReqObj, false).subscribe(response => {
            if (response.status.success === 'Fail') {
                this.isData = false;
            }
            else {
                this.isData = true;
                this.leavestausList = this.updateList(response);
                this.totalCount = response.totalResult;
                this.findItemsPerPage();
            }
        });
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
        if (type === 'nextOfNextWeek' && this.nextOfNextWeekList.length != '') {
            this.fromdate = this.whoisonLeaveList.nextOfNextWeekDateRange.split('to')[0].trim();
            this.todate = this.whoisonLeaveList.nextOfNextWeekDateRange.split('to')[1].trim();
        }
        if (type === 'nextWeek' && this.nextWeekList.length != '') {
            this.fromdate = this.whoisonLeaveList.nextWeekDateRange.split('to')[0].trim();
            this.todate = this.whoisonLeaveList.nextWeekDateRange.split('to')[1].trim();
        }
        if (type === 'thisWeek' && this.thisweekList.length != '') {
            this.fromdate = this.whoisonLeaveList.thisWeekDateRange.split('to')[0].trim();
            this.todate = this.whoisonLeaveList.thisWeekDateRange.split('to')[1].trim();
        }
        if (type === 'today' && this.todayList.length != '') {
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
        this.showdashwhoseonleavepagination = expand;
        this.selectedItemsPerPage = 10;
        this.currentPage = 1;
    }
    onexpand() {
        this.expandwhoseonleave(false);
        // $('.filterToday').toggleClass('active');
        this.leavestatus();
    }
    diffBtwDays(start, end) {
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
            '&toDate=' + this.todate + '&start=' + this.start + '&limit=' + this.limit, payloadReqObj, false).subscribe(response => {
            if (response.status.success === 'Fail') {
                this.isData = false;
            }
            else {
                this.isData = true;
                this.leavestausList = this.updateList(response);
                this.totalCount = response.totalResult;
                this.findItemsPerPage();
            }
        });
    }
    updateList(response) {
        var i;
        var list = [];
        for (i = 0; i < response.data.length; i++) {
            var responseObj = response.data[i];
            responseObj.permissionDuration = this.duration(responseObj);
            list.push(responseObj);
        }
        return list;
    }
    modifiedList(response) {
        var i;
        var list = [];
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
            if (responseObject.permissionDuration.includes('.')) {
                let hour = responseObject.permissionDuration.split('.')[0];
                let minutes = responseObject.permissionDuration.split('.')[1];
                if (hour.length > 0) {
                    if (minutes.length > 0) {
                        if (hour === '0' || hour === 0) {
                            minutes = minutes.length == 1 ? minutes + '0' + ' ' + 'mins' : minutes === '01' ? minutes + ' ' + 'min' : minutes;
                            return minutes;
                        }
                        else {
                            hour = hour === '1' || hour === 1 ? hour + ' ' + 'hr' : hour + ' ' + 'hrs';
                            minutes = minutes.length == 1 ? minutes + '0' + ' ' + 'mins' : minutes === '01' ? minutes + ' ' + 'min' : minutes;
                            return hour + ' ' + minutes;
                        }
                    }
                }
            }
            else {
                responseObject.permissionDuration = responseObject.permissionDuration === '1' || responseObject.permissionDuration === 1 ? responseObject.permissionDuration + ' ' + 'hr' : responseObject.permissionDuration + ' ' + 'hrs';
                return responseObject.permissionDuration;
            }
            // hour = hour.length > 1 : hour !== '0' ?  
            // return responseObject.permissionDuration + " hrs";
        }
        else if (responseObject.leaveTypeCode == "OD" && (responseObject.isForenoon || responseObject.isAfternoon)) {
            responseObject.permissionDuration = responseObject.permissionDuration.toString();
            if (responseObject.permissionDuration.includes('.')) {
                let hour = responseObject.permissionDuration.split('.')[0];
                let minutes = responseObject.permissionDuration.split('.')[1];
                if (hour.length > 0) {
                    if (minutes.length > 0) {
                        if (hour === '0' || hour === 0) {
                            minutes = minutes.length == 1 ? minutes + '0' + ' ' + 'mins' : minutes === '01' ? minutes + ' ' + 'min' : minutes + ' ' + 'mins';
                            return minutes;
                        }
                        else {
                            hour = hour === '1' || hour === 1 ? hour + ' ' + 'hr' : hour + ' ' + 'hrs';
                            minutes = minutes.length == 1 ? minutes + '0' + ' ' + 'mins' : minutes === '01' ? minutes + ' ' + 'min' : minutes + ' ' + 'mins';
                            return hour + ' ' + minutes;
                        }
                    }
                }
            }
            else {
                responseObject.permissionDuration = responseObject.permissionDuration === '1' || responseObject.permissionDuration === 1 ? responseObject.permissionDuration + ' ' + 'hr' : responseObject.permissionDuration + ' ' + 'hrs';
                return responseObject.permissionDuration;
            }
            return responseObject.permissionDuration + " hrs";
        }
        else {
            var noOfDays = responseObject.permissionDuration;
            var noOfWeek = Math.trunc(noOfDays / 7);
            var remainder = noOfDays % 7;
            var days;
            if (noOfWeek >= 1) {
                if (remainder > 0) {
                    days = remainder == 1 ? remainder + " day" : remainder + " days";
                }
                else {
                    days = "";
                }
                return noOfWeek > 1 ? noOfWeek + " weeks " + days : noOfWeek + " week " + days;
            }
            else if (responseObject.leaveDescription != "Permission" && noOfDays > 1) {
                return noOfDays + " days";
            }
            else {
                return noOfDays + " day";
            }
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module-ngfactory~leave-leave-module-ngfactory-es2015.js.map