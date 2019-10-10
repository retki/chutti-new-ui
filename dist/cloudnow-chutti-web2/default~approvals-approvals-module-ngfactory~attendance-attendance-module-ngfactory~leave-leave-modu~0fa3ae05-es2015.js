(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~approvals-approvals-module-ngfactory~attendance-attendance-module-ngfactory~leave-leave-modu~0fa3ae05"],{

/***/ "./src/app/model/attendance.model.ts":
/*!*******************************************!*\
  !*** ./src/app/model/attendance.model.ts ***!
  \*******************************************/
/*! exports provided: Attendance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attendance", function() { return Attendance; });
/* harmony import */ var _attendancelateRequest_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendancelateRequest.model */ "./src/app/model/attendancelateRequest.model.ts");

class Attendance {
    constructor() {
        this.cntEmployeeLateRequest = new _attendancelateRequest_model__WEBPACK_IMPORTED_MODULE_0__["EmployeeLateRequest"]();
    }
}


/***/ }),

/***/ "./src/app/model/attendanceDetail.model.ts":
/*!*************************************************!*\
  !*** ./src/app/model/attendanceDetail.model.ts ***!
  \*************************************************/
/*! exports provided: AttendanceLeave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceLeave", function() { return AttendanceLeave; });
class AttendanceLeave {
}


/***/ }),

/***/ "./src/app/model/attendancelateRequest.model.ts":
/*!******************************************************!*\
  !*** ./src/app/model/attendancelateRequest.model.ts ***!
  \******************************************************/
/*! exports provided: EmployeeLateRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeLateRequest", function() { return EmployeeLateRequest; });
class EmployeeLateRequest {
}


/***/ }),

/***/ "./src/app/user-module/approvals/approvals.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-module/approvals/approvals.module.ts ***!
  \***********************************************************/
/*! exports provided: ApprovalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalsModule", function() { return ApprovalsModule; });
class ApprovalsModule {
}


/***/ }),

/***/ "./src/app/user-module/approvals/approvals.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/user-module/approvals/approvals.routing.ts ***!
  \************************************************************/
/*! exports provided: ApprovalsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalsRoutingModule", function() { return ApprovalsRoutingModule; });
/* harmony import */ var _attendanceapprovals_attendanceapprovals_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendanceapprovals/attendanceapprovals.component */ "./src/app/user-module/approvals/attendanceapprovals/attendanceapprovals.component.ts");
/* harmony import */ var _leaveapprovals_leaveapprovals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaveapprovals/leaveapprovals.component */ "./src/app/user-module/approvals/leaveapprovals/leaveapprovals.component.ts");
/* harmony import */ var _leaveapprovals_leave_details_leave_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaveapprovals/leave-details/leave-details.component */ "./src/app/user-module/approvals/leaveapprovals/leave-details/leave-details.component.ts");



var routes = [
    { path: 'attendanceapprovals', component: _attendanceapprovals_attendanceapprovals_component__WEBPACK_IMPORTED_MODULE_0__["AttendanceapprovalsComponent"] },
    { path: 'leaveapprovals', component: _leaveapprovals_leaveapprovals_component__WEBPACK_IMPORTED_MODULE_1__["LeaveapprovalsComponent"] },
    { path: 'leavedetails', component: _leaveapprovals_leave_details_leave_details_component__WEBPACK_IMPORTED_MODULE_2__["LeaveDetailsComponent"] },
];
class ApprovalsRoutingModule {
}


/***/ }),

/***/ "./src/app/user-module/approvals/attendanceapprovals/attendanceapprovals.component.ngfactory.js":
/*!******************************************************************************************************!*\
  !*** ./src/app/user-module/approvals/attendanceapprovals/attendanceapprovals.component.ngfactory.js ***!
  \******************************************************************************************************/
/*! exports provided: RenderType_AttendanceapprovalsComponent, View_AttendanceapprovalsComponent_0, View_AttendanceapprovalsComponent_Host_0, AttendanceapprovalsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AttendanceapprovalsComponent", function() { return RenderType_AttendanceapprovalsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AttendanceapprovalsComponent_0", function() { return View_AttendanceapprovalsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AttendanceapprovalsComponent_Host_0", function() { return View_AttendanceapprovalsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceapprovalsComponentNgFactory", function() { return AttendanceapprovalsComponentNgFactory; });
/* harmony import */ var _attendanceapprovals_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendanceapprovals.component.scss.shim.ngstyle */ "./src/app/user-module/approvals/attendanceapprovals/attendanceapprovals.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chutti-pagination/chutti-pagination.component.ngfactory */ "./src/app/user-module/chutti-pagination/chutti-pagination.component.ngfactory.js");
/* harmony import */ var _chutti_pagination_chutti_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chutti-pagination/chutti-pagination.component */ "./src/app/user-module/chutti-pagination/chutti-pagination.component.ts");
/* harmony import */ var _attendanceapprovals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attendanceapprovals.component */ "./src/app/user-module/approvals/attendanceapprovals/attendanceapprovals.component.ts");
/* harmony import */ var _services_genericservices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/genericservices */ "./src/app/services/genericservices.ts");
/* harmony import */ var _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/encrypt-decrypt-localstorage.service */ "./src/app/services/encrypt-decrypt-localstorage.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_AttendanceapprovalsComponent = [_attendanceapprovals_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AttendanceapprovalsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AttendanceapprovalsComponent, data: {} });

function View_AttendanceapprovalsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["class", "rounded-circle user_img4"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = ("data:image/jpg;base64," + _v.parent.context.$implicit.gemsEmployeeMaster.gemsUserMaster.profileImgData); _ck(_v, 1, 0, currVal_0); }); }
function View_AttendanceapprovalsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "user_img4 bg__neptune"], ["placement", "top"], ["triggers", "mouseenter:mouseleave"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.gemsEmployeeMaster.employeeLastName.charAt(0); _ck(_v, 1, 0, currVal_0); }); }
function View_AttendanceapprovalsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "td", [["class", "col-md-3"], ["data-th", "Employee"], ["scope", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AttendanceapprovalsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AttendanceapprovalsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [["class", "nameImg pl-2 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "td", [["class", "pl-0 col-md-2"], ["data-th", "Date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "td", [["class", "pl-0 col-md-1"], ["data-th", "In-Time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "td", [["class", "pl-0 col-md-3"], ["data-th", "Reason"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "td", [["class", "pl-0 col-md-1 text-capitalize"], ["data-th", "Status"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](18, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "td", [["class", "pl-0 col-md-2"], ["data-th", "Action"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "span", [["class", "icon_tick pr-4"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.actionOnRequest("approve", _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "span", [["class", "icon_cancel"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.actionOnRequest("reject", _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], function (_ck, _v) { var currVal_0 = ((_v.context.$implicit.gemsEmployeeMaster.gemsUserMaster.profileImgData != null) && (_v.context.$implicit.gemsEmployeeMaster.gemsUserMaster.profileImgData != undefined)); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_v.context.$implicit.gemsEmployeeMaster.gemsUserMaster.profileImgData == null) || (_v.context.$implicit.gemsEmployeeMaster.gemsUserMaster.profileImgData == undefined)); _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _v.context.$implicit.gemsEmployeeMaster.employeeFirstName; _ck(_v, 7, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 1), _co.getDateByTime(_v.context.$implicit.attendanceDate), "dd MMM yyyy")))); _ck(_v, 9, 0, currVal_3); var currVal_4 = _co.getTimeByTimeStamp(_v.context.$implicit.attendanceInTime); _ck(_v, 13, 0, currVal_4); var currVal_5 = _v.context.$implicit.cntEmployeeLateRequest.remarks; _ck(_v, 15, 0, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 17, 0, _ck(_v, 18, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 2), _v.context.$implicit.cntEmployeeLateRequest.status)); _ck(_v, 17, 0, currVal_6); }); }
function View_AttendanceapprovalsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tbody", [["class", "scroll"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AttendanceapprovalsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.attendancerecords; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AttendanceapprovalsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "text-center w-100 py-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h4", [["class", "mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Records Found!"]))], null, null); }
function View_AttendanceapprovalsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.value; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.value; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.label; _ck(_v, 3, 0, currVal_2); }); }
function View_AttendanceapprovalsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "table__bottom text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "span", [["class", "items__nos"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "form-group page__section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [["for", "pageNo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Items per page:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 7, "select", [["class", "form-control"], ["id", "pageNo"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
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
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AttendanceapprovalsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "app-chutti-pagination", [], null, [[null, "goPrev"], [null, "goNext"], [null, "onPage"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("goPrev" === en)) {
        var pd_0 = (_co.goToPrev() !== false);
        ad = (pd_0 && ad);
    } if (("goNext" === en)) {
        var pd_1 = (_co.goToNext() !== false);
        ad = (pd_1 && ad);
    } if (("onPage" === en)) {
        var pd_2 = (_co.goToPageNo($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ChuttiPaginationComponent_0"], _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ChuttiPaginationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, _chutti_pagination_chutti_pagination_component__WEBPACK_IMPORTED_MODULE_5__["ChuttiPaginationComponent"], [], { currentPage: [0, "currentPage"], count: [1, "count"], pagesToShow: [2, "pagesToShow"] }, { goPrev: "goPrev", goNext: "goNext" })], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.selectedItemsPerPage; _ck(_v, 8, 0, currVal_7); var currVal_8 = _co.perpageOption; _ck(_v, 12, 0, currVal_8); var currVal_9 = _co.currentPage; var currVal_10 = _co.totalCount1; var currVal_11 = _co.totalPages; _ck(_v, 14, 0, currVal_9, currVal_10, currVal_11); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_AttendanceapprovalsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 25, "div", [["class", "inner__section attendance__section rounded dashboard__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Attendance Requests"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "div", [["class", "clearfix"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 21, "div", [["class", "attendance__approval__table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 18, "table", [["class", "table table-fixed rwd-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 13, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 12, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "th", [["class", "pl-0 col-md-3"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Employee"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "th", [["class", "pl-0 col-md-2"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Day"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "th", [["class", "pl-0 col-md-1"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["In-Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "th", [["class", "pl-0 col-md-3"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reason"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "th", [["class", "pl-0 col-md-1"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "th", [["class", "pl-0 col-md-2"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Action"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AttendanceapprovalsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AttendanceapprovalsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AttendanceapprovalsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isData1; _ck(_v, 24, 0, currVal_0); var currVal_1 = !_co.isData1; _ck(_v, 26, 0, currVal_1); var currVal_2 = (_co.isData1 && (_co.totalCount1 > 10)); _ck(_v, 28, 0, currVal_2); }, null); }
function View_AttendanceapprovalsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-attendanceapprovals", [], null, null, null, View_AttendanceapprovalsComponent_0, RenderType_AttendanceapprovalsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _attendanceapprovals_component__WEBPACK_IMPORTED_MODULE_6__["AttendanceapprovalsComponent"], [_services_genericservices__WEBPACK_IMPORTED_MODULE_7__["Genericservice"], _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["EncryptDecryptLocalStorageService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AttendanceapprovalsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-attendanceapprovals", _attendanceapprovals_component__WEBPACK_IMPORTED_MODULE_6__["AttendanceapprovalsComponent"], View_AttendanceapprovalsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/user-module/approvals/attendanceapprovals/attendanceapprovals.component.scss.shim.ngstyle.js":
/*!**************************************************************************************************************!*\
  !*** ./src/app/user-module/approvals/attendanceapprovals/attendanceapprovals.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************************************/
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
var styles = ["@charset \"UTF-8\";\n[class^=icon_][_ngcontent-%COMP%], [class*=\" icon_\"][_ngcontent-%COMP%] {\n  font-family: \"chutti\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[class^=icon1-][_ngcontent-%COMP%], [class*=\" icon1-\"][_ngcontent-%COMP%] {\n  \n  font-family: \"icomoon\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon_dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE100\";\n}\n.icon_leave[_ngcontent-%COMP%]:before {\n  content: \"\uE101\";\n}\n.icon_attendance[_ngcontent-%COMP%]:before {\n  content: \"\uE102\";\n}\n.icon_timesheet[_ngcontent-%COMP%]:before {\n  content: \"\uE103\";\n}\n.icon_attendance1[_ngcontent-%COMP%]:before {\n  content: \"\uE104\";\n}\n.icon_support[_ngcontent-%COMP%]:before {\n  content: \"\uE105\";\n}\n.icon_quick_apply[_ngcontent-%COMP%]:before {\n  content: \"\uE106\";\n}\n.icon_leave_bank[_ngcontent-%COMP%]:before {\n  content: \"\uE107\";\n}\n.icon_collapse[_ngcontent-%COMP%]:before {\n  content: \"\uE108\";\n}\n.icon_expand[_ngcontent-%COMP%]:before {\n  content: \"\uE109\";\n}\n.icon_filter[_ngcontent-%COMP%]:before {\n  content: \"\uE10A\";\n}\n.icon_date_picker[_ngcontent-%COMP%]:before {\n  content: \"\uE10B\";\n}\n.icon_arrow_thick_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10C\";\n}\n.icon_arrow_thick_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10D\";\n}\n.icon_arrow_thin_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10E\";\n}\n.icon_arrow_thin_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10F\";\n}\n.icon_hold[_ngcontent-%COMP%]:before {\n  content: \"\uE110\";\n}\n.icon_cancel[_ngcontent-%COMP%]:before {\n  content: \"\uE111\";\n}\n.icon_tick[_ngcontent-%COMP%]:before {\n  content: \"\uE112\";\n}\n.icon_lock[_ngcontent-%COMP%]:before {\n  content: \"\uE113\";\n}\n.icon_edit_outline[_ngcontent-%COMP%]:before {\n  content: \"\uE114\";\n}\n.icon_edit_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE115\";\n}\n.icon_delete_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE116\";\n}\n.icon_search[_ngcontent-%COMP%]:before {\n  content: \"\uE117\";\n}\n.icon_notifications[_ngcontent-%COMP%]:before {\n  content: \"\uE118\";\n}\n.icon_time[_ngcontent-%COMP%]:before {\n  content: \"\uE119\";\n}\n.icon_date_time[_ngcontent-%COMP%]:before {\n  content: \"\uE11A\";\n}\n.icon_probation[_ngcontent-%COMP%]:before {\n  content: \"\uE11B\";\n}\n.icon_confirmed[_ngcontent-%COMP%]:before {\n  content: \"\uE11C\";\n}\n.icon_holidays[_ngcontent-%COMP%]:before {\n  content: \"\uE11D\";\n}\n.icon_priority_urgent[_ngcontent-%COMP%]:before {\n  content: \"\uE11E\";\n}\n.icon_arrow_up[_ngcontent-%COMP%]:before {\n  content: \"\uE11F\";\n}\n.icon_arrow_down[_ngcontent-%COMP%]:before {\n  content: \"\uE120\";\n}\n.icon_show_password[_ngcontent-%COMP%]:before {\n  content: \"\uE121\";\n}\n.icon_hide_password[_ngcontent-%COMP%]:before {\n  content: \"\uE122\";\n}\n.icon_name[_ngcontent-%COMP%]:before {\n  content: \"\uE123\";\n}\n.icon_organisation[_ngcontent-%COMP%]:before {\n  content: \"\uE124\";\n}\n.icon_phone[_ngcontent-%COMP%]:before {\n  content: \"\uE125\";\n}\n.icon_email[_ngcontent-%COMP%]:before {\n  content: \"\uE126\";\n}\n.icon_password[_ngcontent-%COMP%]:before {\n  content: \"\uE127\";\n}\n.icon_add[_ngcontent-%COMP%]:before {\n  content: \"\uE128\";\n}\n.icon_sign_out[_ngcontent-%COMP%]:before {\n  content: \"\uE129\";\n}\n.icon_profile[_ngcontent-%COMP%]:before {\n  content: \"\uE12A\";\n}\n.icon_warning[_ngcontent-%COMP%]:before {\n  content: \"\uE12B\";\n}\n.icon_camera[_ngcontent-%COMP%]:before {\n  content: \"\uE12C\";\n}\n.icon1-upload-to-cloud[_ngcontent-%COMP%]:before {\n  content: \"\uE900\";\n}\n.icon1-cloud-computing[_ngcontent-%COMP%]:before {\n  content: \"\uE901\";\n}\n.icon1-dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE902\";\n}\n.icon1-filter-results[_ngcontent-%COMP%]:before {\n  content: \"\uE903\";\n}\n.icon1-building[_ngcontent-%COMP%]:before {\n  content: \"\uE904\";\n}\n.icon1-noun_Calendar[_ngcontent-%COMP%]:before {\n  content: \"\uE905\";\n}\n.icon1-noun_Project[_ngcontent-%COMP%]:before {\n  content: \"\uE906\";\n}\n.icon1-noun_Upload[_ngcontent-%COMP%]:before {\n  content: \"\uE907\";\n}\n.icon1-noun_users[_ngcontent-%COMP%]:before {\n  content: \"\uE908\";\n}\n.icon1-noun_Work[_ngcontent-%COMP%]:before {\n  content: \"\uE909\";\n}\n.icon1-Path[_ngcontent-%COMP%]:before {\n  content: \"\uE90A\";\n}\n.attendance__section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 60%;\n}\n.attendance__section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]::before {\n  content: \"\uE104\";\n}\n@media (max-width: 720px) {\n  .attendance__section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n.reason__btn[_ngcontent-%COMP%] {\n  border: 1.4px solid #6747D4;\n  font-size: 0.9em;\n  color: #2733a0;\n  border-radius: 30px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: #404040;\n  padding: 7px;\n  vertical-align: middle;\n}\n.reason__selection[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n.search__input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-radius: 0;\n  outline: none !important;\n  padding-left: 0px;\n  color: #6E6E6E;\n  font-size: 0.9em;\n}\n.search__input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  border-color: #6747D4;\n}\n.filter__btn[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n  text-align: right;\n}\n.filter__btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  font-size: 0.9em;\n  display: inline-block;\n  margin-left: 0.5rem;\n}\n.attendance__filter[_ngcontent-%COMP%] {\n  width: 30%;\n  float: right;\n  margin: 0rem 0 1rem;\n  right: 2rem;\n}\n@media (max-width: 567px) {\n  .attendance__filter[_ngcontent-%COMP%] {\n    width: 100%;\n    float: none;\n    position: inherit;\n    margin-top: 1rem;\n  }\n}\n.search__btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 0;\n  color: #a0a0a0;\n  cursor: pointer;\n}\n.support__request--input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  border-radius: 0;\n  padding-top: 0;\n  font-size: 0.9em;\n  padding-left: 0px;\n  padding-bottom: 5px;\n  margin-bottom: 0 !important;\n}\n.support__request--input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.support__request--input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 0.8em;\n  color: #848484;\n  padding-left: 4px;\n}\n.support__request-modal[_ngcontent-%COMP%] {\n  padding: 2rem 1.5rem 1.5rem;\n}\n.support__request-modal[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding-left: 0rem;\n  font-size: 1.1em;\n}\n.support__request-modal[_ngcontent-%COMP%]   select#exampleFormControlSelect1[_ngcontent-%COMP%] {\n  margin-bottom: 61px;\n}\n.support__request-modal[_ngcontent-%COMP%]   .support__request[_ngcontent-%COMP%] {\n  margin: 1.3rem 0 1rem;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n.support__page[_ngcontent-%COMP%]   .trigger__btn[_ngcontent-%COMP%], .support__page[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.modal-dialog--support[_ngcontent-%COMP%] {\n  padding-top: 55px;\n  max-width: 420px;\n}\n.attendance__approval__table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.attendance__approval__table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n}\n.attendance__approval__table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .icon_tick[_ngcontent-%COMP%] {\n  color: #6747D4;\n}\n.attendance__approval__table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .icon_cancel[_ngcontent-%COMP%] {\n  color: red;\n}\n.text-capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tb2R1bGUvYXBwcm92YWxzL2F0dGVuZGFuY2VhcHByb3ZhbHMvYXR0ZW5kYW5jZWFwcHJvdmFscy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3JlbnVnYS9EZXNrdG9wL1ZTQy13b3Jrc3BhY2UvQW5ndWxhciBXb3Jrc3BhY2UvY2xvdWRub3ctY2h1dHRpLXdlYi9zcmMvYXBwL3VzZXItbW9kdWxlL2FwcHJvdmFscy9hdHRlbmRhbmNlYXBwcm92YWxzL2F0dGVuZGFuY2VhcHByb3ZhbHMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9yZW51Z2EvRGVza3RvcC9WU0Mtd29ya3NwYWNlL0FuZ3VsYXIgV29ya3NwYWNlL2Nsb3Vkbm93LWNodXR0aS13ZWIvc3RkaW4iLCIvaG9tZS9yZW51Z2EvRGVza3RvcC9WU0Mtd29ya3NwYWNlL0FuZ3VsYXIgV29ya3NwYWNlL2Nsb3Vkbm93LWNodXR0aS13ZWIvc3JjL2Fzc2V0cy9zY3NzL19taXhpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ3FCaEI7O0VBRUUsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBRG5CRjtBQ3FCQTtFQUNFLCtFQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBRUEsc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FEbkJGO0FDb0VFO0VBQXVCLFlBQUE7QURoRXpCO0FDZ0V5QztFQUFtQixZQUFBO0FENUQ1RDtBQzRENEU7RUFBd0IsWUFBQTtBRHhEcEc7QUN3RG9IO0VBQXVCLFlBQUE7QURwRDNJO0FDb0QySjtFQUF5QixZQUFBO0FEaERwTDtBQ2dEb007RUFBcUIsWUFBQTtBRDVDek47QUM0Q3lPO0VBQXlCLFlBQUE7QUR4Q2xRO0FDd0NrUjtFQUF3QixZQUFBO0FEcEMxUztBQ29DMFQ7RUFBc0IsWUFBQTtBRGhDaFY7QUNnQ2dXO0VBQW9CLFlBQUE7QUQ1QnBYO0FDNEJvWTtFQUFvQixZQUFBO0FEeEJ4WjtBQ3dCd2E7RUFBeUIsWUFBQTtBRHBCamM7QUNvQmlkO0VBQThCLFlBQUE7QURoQi9lO0FDZ0IrZjtFQUErQixZQUFBO0FEWjloQjtBQ1k4aUI7RUFBNkIsWUFBQTtBRFIza0I7QUNRMmxCO0VBQThCLFlBQUE7QURKem5CO0FDSXlvQjtFQUFrQixZQUFBO0FEQTNwQjtBQ0EycUI7RUFBb0IsWUFBQTtBREkvckI7QUNKK3NCO0VBQWtCLFlBQUE7QURRanVCO0FDUml2QjtFQUFrQixZQUFBO0FEWW53QjtBQ1pteEI7RUFBMEIsWUFBQTtBRGdCN3lCO0FDaEI2ekI7RUFBeUIsWUFBQTtBRG9CdDFCO0FDcEJzMkI7RUFBMkIsWUFBQTtBRHdCajRCO0FDeEJpNUI7RUFBb0IsWUFBQTtBRDRCcjZCO0FDNUJxN0I7RUFBMkIsWUFBQTtBRGdDaDlCO0FDaENnK0I7RUFBa0IsWUFBQTtBRG9DbC9CO0FDcENrZ0M7RUFBdUIsWUFBQTtBRHdDemhDO0FDeEN5aUM7RUFBdUIsWUFBQTtBRDRDaGtDO0FDNUNnbEM7RUFBdUIsWUFBQTtBRGdEdm1DO0FDaER1bkM7RUFBc0IsWUFBQTtBRG9EN29DO0FDcEQ2cEM7RUFBNkIsWUFBQTtBRHdEMXJDO0FDeEQwc0M7RUFBc0IsWUFBQTtBRDREaHVDO0FDNURndkM7RUFBd0IsWUFBQTtBRGdFeHdDO0FDaEV3eEM7RUFBMkIsWUFBQTtBRG9FbnpDO0FDcEVtMEM7RUFBMkIsWUFBQTtBRHdFOTFDO0FDeEU4MkM7RUFBa0IsWUFBQTtBRDRFaDRDO0FDNUVnNUM7RUFBMEIsWUFBQTtBRGdGMTZDO0FDaEYwN0M7RUFBbUIsWUFBQTtBRG9GNzhDO0FDcEY2OUM7RUFBbUIsWUFBQTtBRHdGaC9DO0FDeEZnZ0Q7RUFBc0IsWUFBQTtBRDRGdGhEO0FDNUZzaUQ7RUFBaUIsWUFBQTtBRGdHdmpEO0FDaEd1a0Q7RUFBc0IsWUFBQTtBRG9HN2xEO0FDcEc2bUQ7RUFBcUIsWUFBQTtBRHdHbG9EO0FDeEdrcEQ7RUFBcUIsWUFBQTtBRDRHdnFEO0FDNUd1ckQ7RUFBb0IsWUFBQTtBRGdIM3NEO0FDOUdFO0VBQ0UsWUFBQTtBRGlISjtBQy9HRTtFQUNFLFlBQUE7QURrSEo7QUNoSEU7RUFDRSxZQUFBO0FEbUhKO0FDakhFO0VBQ0UsWUFBQTtBRG9ISjtBQ2xIRTtFQUNFLFlBQUE7QURxSEo7QUNuSEU7RUFDRSxZQUFBO0FEc0hKO0FDcEhFO0VBQ0UsWUFBQTtBRHVISjtBQ3JIRTtFQUNFLFlBQUE7QUR3SEo7QUN0SEU7RUFDRSxZQUFBO0FEeUhKO0FDdkhFO0VBQ0UsWUFBQTtBRDBISjtBQ3hIRTtFQUNFLFlBQUE7QUQySEo7QUV0UEk7RUFFSSxxQkFBQTtFQU1BLFVBQUE7QUZtUFI7QUV2UFE7RUFDSSxZQUFBO0FGeVBaO0FHcE5RO0VEMUNKO0lBV1Esc0JBQUE7RUZ1UFY7QUFDRjtBRXBQQTtFQUdJLDJCQUFBO0VBQ0osZ0JBQUE7RUFDQyxjQUFBO0VBQ0QsbUJBQUE7QUZxUEE7QUVqUEE7RUFFSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUZtUEo7QUVqUEE7RUFDSSx1QkFBQTtBRm9QSjtBRWhQRztFRHdCQyxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VDekJBLGlCQUFBO0VBQ0EsY0RyQ0U7RUNxQ1csZ0JBQUE7QUZ1UGpCO0FDN05JO0VBQ0UsZ0JBQUE7RUFDQSxxQkFwRUk7QURtU1Y7QUVyUEE7RUFHSSw2QkFBQTtFQUNBLGlCQUFBO0FGc1BKO0FFclBJO0VBRUksZ0JBQUE7RUFBaUIsZ0JBQUE7RUFDakIscUJBQUE7RUFDQSxtQkFBQTtBRnVQUjtBRXBQQTtFQUVJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FGc1BKO0FHdFFRO0VEV1I7SUFPUSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUZ3UE47QUFDRjtBRXJQQTtFQUVJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRnVQSjtBRW5QSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FGc1BSO0FFclBRO0VBQ0ksZ0JBQUE7QUZ1UFo7QUVuUEk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0Q1Rkc7RUM2RkgsaUJBQUE7QUZxUFI7QUVqUEE7RUFDSSwyQkFBQTtBRm9QSjtBRWxQSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUZvUFI7QUVqUEk7RUFDSSxtQkFBQTtBRm1QUjtBRWpQSTtFQUVJLHFCQUFBO0FGa1BSO0FFOU9BO0VBRUksa0JBQUE7QUZnUEo7QUU1T0k7RUFFSSxxQkFBQTtBRjhPUjtBRTNPQTtFQUVJLGlCQUFBO0VBQ0EsZ0JBQUE7QUY2T0o7QUUxT0k7RUFDSSxnQkFBQTtBRjZPUjtBRTVPUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FGOE9aO0FFNU9JO0VBQ0ksY0FBQTtBRjhPUjtBRTVPSTtFQUNJLFVBQUE7QUY4T1I7QUUxT0E7RUFDSSwwQkFBQTtBRjZPSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbW9kdWxlL2FwcHJvdmFscy9hdHRlbmRhbmNlYXBwcm92YWxzL2F0dGVuZGFuY2VhcHByb3ZhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5bY2xhc3NePWljb25fXSxcbltjbGFzcyo9XCIgaWNvbl9cIl0ge1xuICBmb250LWZhbWlseTogXCJjaHV0dGlcIiAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzXj1pY29uMS1dLCBbY2xhc3MqPVwiIGljb24xLVwiXSB7XG4gIC8qIHVzZSAhaW1wb3J0YW50IHRvIHByZXZlbnQgaXNzdWVzIHdpdGggYnJvd3NlciBleHRlbnNpb25zIHRoYXQgY2hhbmdlIGZvbnRzICovXG4gIGZvbnQtZmFtaWx5OiBcImljb21vb25cIiAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAvKiBCZXR0ZXIgRm9udCBSZW5kZXJpbmcgPT09PT09PT09PT0gKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5pY29uX2Rhc2hib2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EgFwiO1xufVxuXG4uaWNvbl9sZWF2ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EgVwiO1xufVxuXG4uaWNvbl9hdHRlbmRhbmNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSCXCI7XG59XG5cbi5pY29uX3RpbWVzaGVldDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eg1wiO1xufVxuXG4uaWNvbl9hdHRlbmRhbmNlMTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EhFwiO1xufVxuXG4uaWNvbl9zdXBwb3J0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSFXCI7XG59XG5cbi5pY29uX3F1aWNrX2FwcGx5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSGXCI7XG59XG5cbi5pY29uX2xlYXZlX2Jhbms6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIdcIjtcbn1cblxuLmljb25fY29sbGFwc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIhcIjtcbn1cblxuLmljb25fZXhwYW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSJXCI7XG59XG5cbi5pY29uX2ZpbHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EilwiO1xufVxuXG4uaWNvbl9kYXRlX3BpY2tlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ei1wiO1xufVxuXG4uaWNvbl9hcnJvd190aGlja19sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSMXCI7XG59XG5cbi5pY29uX2Fycm93X3RoaWNrX3JpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSNXCI7XG59XG5cbi5pY29uX2Fycm93X3RoaW5fbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EjlwiO1xufVxuXG4uaWNvbl9hcnJvd190aGluX3JpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSPXCI7XG59XG5cbi5pY29uX2hvbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJBcIjtcbn1cblxuLmljb25fY2FuY2VsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSRXCI7XG59XG5cbi5pY29uX3RpY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJJcIjtcbn1cblxuLmljb25fbG9jazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ek1wiO1xufVxuXG4uaWNvbl9lZGl0X291dGxpbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJRcIjtcbn1cblxuLmljb25fZWRpdF9maWxsZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJVcIjtcbn1cblxuLmljb25fZGVsZXRlX2ZpbGxlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EllwiO1xufVxuXG4uaWNvbl9zZWFyY2g6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJdcIjtcbn1cblxuLmljb25fbm90aWZpY2F0aW9uczpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EmFwiO1xufVxuXG4uaWNvbl90aW1lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSZXCI7XG59XG5cbi5pY29uX2RhdGVfdGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EmlwiO1xufVxuXG4uaWNvbl9wcm9iYXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJtcIjtcbn1cblxuLmljb25fY29uZmlybWVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oScXCI7XG59XG5cbi5pY29uX2hvbGlkYXlzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSdXCI7XG59XG5cbi5pY29uX3ByaW9yaXR5X3VyZ2VudDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EnlwiO1xufVxuXG4uaWNvbl9hcnJvd191cDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6En1wiO1xufVxuXG4uaWNvbl9hcnJvd19kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSgXCI7XG59XG5cbi5pY29uX3Nob3dfcGFzc3dvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKFcIjtcbn1cblxuLmljb25faGlkZV9wYXNzd29yZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EolwiO1xufVxuXG4uaWNvbl9uYW1lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSjXCI7XG59XG5cbi5pY29uX29yZ2FuaXNhdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EpFwiO1xufVxuXG4uaWNvbl9waG9uZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EpVwiO1xufVxuXG4uaWNvbl9lbWFpbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EplwiO1xufVxuXG4uaWNvbl9wYXNzd29yZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ep1wiO1xufVxuXG4uaWNvbl9hZGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKhcIjtcbn1cblxuLmljb25fc2lnbl9vdXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKlcIjtcbn1cblxuLmljb25fcHJvZmlsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EqlwiO1xufVxuXG4uaWNvbl93YXJuaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSrXCI7XG59XG5cbi5pY29uX2NhbWVyYTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ErFwiO1xufVxuXG4uaWNvbjEtdXBsb2FkLXRvLWNsb3VkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSAXCI7XG59XG5cbi5pY29uMS1jbG91ZC1jb21wdXRpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIFcIjtcbn1cblxuLmljb24xLWRhc2hib2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kglwiO1xufVxuXG4uaWNvbjEtZmlsdGVyLXJlc3VsdHM6YmVmb3JlIHtcbiAgY29udGVudDogXCLupINcIjtcbn1cblxuLmljb24xLWJ1aWxkaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSEXCI7XG59XG5cbi5pY29uMS1ub3VuX0NhbGVuZGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSFXCI7XG59XG5cbi5pY29uMS1ub3VuX1Byb2plY3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIZcIjtcbn1cblxuLmljb24xLW5vdW5fVXBsb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSHXCI7XG59XG5cbi5pY29uMS1ub3VuX3VzZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSIXCI7XG59XG5cbi5pY29uMS1ub3VuX1dvcms6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIlcIjtcbn1cblxuLmljb24xLVBhdGg6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIpcIjtcbn1cblxuLmF0dGVuZGFuY2VfX3NlY3Rpb24gaDUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2MCU7XG59XG4uYXR0ZW5kYW5jZV9fc2VjdGlvbiBoNTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIRcIjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuYXR0ZW5kYW5jZV9fc2VjdGlvbiBoNSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ucmVhc29uX19idG4ge1xuICBib3JkZXI6IDEuNHB4IHNvbGlkICM2NzQ3RDQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjMjczM2EwO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4udGFibGUgdGQge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogIzQwNDA0MDtcbiAgcGFkZGluZzogN3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucmVhc29uX19zZWxlY3Rpb24ge1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaF9faW5wdXQgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGNvbG9yOiAjNkU2RTZFO1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuLnNlYXJjaF9faW5wdXQgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzY3NDdENDtcbn1cblxuLmZpbHRlcl9fYnRuIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmZpbHRlcl9fYnRuIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuLmF0dGVuZGFuY2VfX2ZpbHRlciB7XG4gIHdpZHRoOiAzMCU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwcmVtIDAgMXJlbTtcbiAgcmlnaHQ6IDJyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY3cHgpIHtcbiAgLmF0dGVuZGFuY2VfX2ZpbHRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgcG9zaXRpb246IGluaGVyaXQ7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxufVxuXG4uc2VhcmNoX19idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNnB4O1xuICByaWdodDogMDtcbiAgY29sb3I6ICNhMGEwYTA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN1cHBvcnRfX3JlcXVlc3QtLWlucHV0IC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi5zdXBwb3J0X19yZXF1ZXN0LS1pbnB1dCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5zdXBwb3J0X19yZXF1ZXN0LS1pbnB1dCBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICM4NDg0ODQ7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4uc3VwcG9ydF9fcmVxdWVzdC1tb2RhbCB7XG4gIHBhZGRpbmc6IDJyZW0gMS41cmVtIDEuNXJlbTtcbn1cbi5zdXBwb3J0X19yZXF1ZXN0LW1vZGFsIGg1IHtcbiAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuLnN1cHBvcnRfX3JlcXVlc3QtbW9kYWwgc2VsZWN0I2V4YW1wbGVGb3JtQ29udHJvbFNlbGVjdDEge1xuICBtYXJnaW4tYm90dG9tOiA2MXB4O1xufVxuLnN1cHBvcnRfX3JlcXVlc3QtbW9kYWwgLnN1cHBvcnRfX3JlcXVlc3Qge1xuICBtYXJnaW46IDEuM3JlbSAwIDFyZW07XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uc3VwcG9ydF9fcGFnZSAudHJpZ2dlcl9fYnRuLCAuc3VwcG9ydF9fcGFnZSBoNSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1vZGFsLWRpYWxvZy0tc3VwcG9ydCB7XG4gIHBhZGRpbmctdG9wOiA1NXB4O1xuICBtYXgtd2lkdGg6IDQyMHB4O1xufVxuXG4uYXR0ZW5kYW5jZV9fYXBwcm92YWxfX3RhYmxlIC50YWJsZSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4uYXR0ZW5kYW5jZV9fYXBwcm92YWxfX3RhYmxlIC50YWJsZSBpbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLmF0dGVuZGFuY2VfX2FwcHJvdmFsX190YWJsZSAudGFibGUgLmljb25fdGljayB7XG4gIGNvbG9yOiAjNjc0N0Q0O1xufVxuLmF0dGVuZGFuY2VfX2FwcHJvdmFsX190YWJsZSAudGFibGUgLmljb25fY2FuY2VsIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRleHQtY2FwaXRhbGl6ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSIsIiR3aGl0ZTojZmZmZmZmO1xuJGJvcmRlci1jb2xvcjojREVERURFO1xuJGJvcmRlci1saWdodDojRThFOEU4O1xuJGxpZ2h0LWJsdWU6I0YxRjdGQjtcbiRkYXJrUGluazojOUE0NUQyO1xuJGRhcmtCbHVlOiM2NzQ3RDQ7XG4kdGV4dC1jb2xvcjojNDA0MDQwO1xuJHByaW1hcnlDb2xvcjojNzE1MURDO1xuJGdyYXk6IzZFNkU2RTtcbiRibGFjazojMDAwMDAwO1xuJGRhcmtSZWQ6I0UzMkMyQztcbiRvcmFuZ2U6I0ZGNkMwMDtcbiRicm93bjojQUEzNDdCO1xuJGFycm93R3JheTojODQ4NDg0O1xuJGJsdWU6ICMxYzkxZmY7XG4kcm9zZTojRjk0Rjg5O1xuJG5lcHR1bmU6IzdDQTFCMTtcbiR5ZWxsb3c6I0UyODYwRDtcbiRjb2xvci1iYWNrOiAjZWZlZmVmO1xuJGNvbG9yLWJhcjogIzY3NDdENDtcblxuW2NsYXNzXj1cImljb25fXCJdLFxuW2NsYXNzKj1cIiBpY29uX1wiXSB7XG4gIGZvbnQtZmFtaWx5OiAnY2h1dHRpJyAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbltjbGFzc149XCJpY29uMS1cIl0sIFtjbGFzcyo9XCIgaWNvbjEtXCJdIHtcbiAgLyogdXNlICFpbXBvcnRhbnQgdG8gcHJldmVudCBpc3N1ZXMgd2l0aCBicm93c2VyIGV4dGVuc2lvbnMgdGhhdCBjaGFuZ2UgZm9udHMgKi9cbiAgZm9udC1mYW1pbHk6ICdpY29tb29uJyAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuXG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuXG5AbWl4aW4gYmctZ3JhZGllbnQoKXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCRkYXJrUGluayAyMCUsICRkYXJrQmx1ZSA4MCUpO1xufVxuQG1peGluIHRoZW1lLWJ0bigpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsJGRhcmtCbHVlIDAlLCAkZGFya1BpbmsgMTAwJSk7XG59XG5AbWl4aW4gYmctYmxhY2soKXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsJGJsYWNrIDAlLCAjMTIxMjEzIDEwMCUpO1xufVxuQG1peGluIGZvbnQtY29sb3IoKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya1BpbmsgMjAlLCAkZGFya0JsdWUgODAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMjBkZWcsJGRhcmtQaW5rIDIwJSwgJGRhcmtCbHVlIDgwJSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyAgICBcbiAgfVxuICBAbWl4aW4gIGJvcmRlci1ib3R0b20oKSB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6ICRkYXJrQmx1ZTtcbiAgICB9XG4gIH1cblxuQG1peGluIHVzZXJJbWcgKCl7XG5cbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiVidG4tc2hhcmVkIHtcbiAgICBtaW4taGVpZ2h0OiA1NXB4O1xuICB9XG5cbiAgLmljb25fZGFzaGJvYXJkOmJlZm9yZXtjb250ZW50OlwiXFxlMTAwXCJ9Lmljb25fbGVhdmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDFcIn0uaWNvbl9hdHRlbmRhbmNlOmJlZm9yZXtjb250ZW50OlwiXFxlMTAyXCJ9Lmljb25fdGltZXNoZWV0OmJlZm9yZXtjb250ZW50OlwiXFxlMTAzXCJ9Lmljb25fYXR0ZW5kYW5jZTE6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDRcIn0uaWNvbl9zdXBwb3J0OmJlZm9yZXtjb250ZW50OlwiXFxlMTA1XCJ9Lmljb25fcXVpY2tfYXBwbHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDZcIn0uaWNvbl9sZWF2ZV9iYW5rOmJlZm9yZXtjb250ZW50OlwiXFxlMTA3XCJ9Lmljb25fY29sbGFwc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDhcIn0uaWNvbl9leHBhbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDlcIn0uaWNvbl9maWx0ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMGFcIn0uaWNvbl9kYXRlX3BpY2tlcjpiZWZvcmV7Y29udGVudDpcIlxcZTEwYlwifS5pY29uX2Fycm93X3RoaWNrX2xlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMGNcIn0uaWNvbl9hcnJvd190aGlja19yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZTEwZFwifS5pY29uX2Fycm93X3RoaW5fbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZTEwZVwifS5pY29uX2Fycm93X3RoaW5fcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMGZcIn0uaWNvbl9ob2xkOmJlZm9yZXtjb250ZW50OlwiXFxlMTEwXCJ9Lmljb25fY2FuY2VsOmJlZm9yZXtjb250ZW50OlwiXFxlMTExXCJ9Lmljb25fdGljazpiZWZvcmV7Y29udGVudDpcIlxcZTExMlwifS5pY29uX2xvY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTNcIn0uaWNvbl9lZGl0X291dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTRcIn0uaWNvbl9lZGl0X2ZpbGxlZDpiZWZvcmV7Y29udGVudDpcIlxcZTExNVwifS5pY29uX2RlbGV0ZV9maWxsZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTZcIn0uaWNvbl9zZWFyY2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTdcIn0uaWNvbl9ub3RpZmljYXRpb25zOmJlZm9yZXtjb250ZW50OlwiXFxlMTE4XCJ9Lmljb25fdGltZTpiZWZvcmV7Y29udGVudDpcIlxcZTExOVwifS5pY29uX2RhdGVfdGltZTpiZWZvcmV7Y29udGVudDpcIlxcZTExYVwifS5pY29uX3Byb2JhdGlvbjpiZWZvcmV7Y29udGVudDpcIlxcZTExYlwifS5pY29uX2NvbmZpcm1lZDpiZWZvcmV7Y29udGVudDpcIlxcZTExY1wifS5pY29uX2hvbGlkYXlzOmJlZm9yZXtjb250ZW50OlwiXFxlMTFkXCJ9Lmljb25fcHJpb3JpdHlfdXJnZW50OmJlZm9yZXtjb250ZW50OlwiXFxlMTFlXCJ9Lmljb25fYXJyb3dfdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWZcIn0uaWNvbl9hcnJvd19kb3duOmJlZm9yZXtjb250ZW50OlwiXFxlMTIwXCJ9Lmljb25fc2hvd19wYXNzd29yZDpiZWZvcmV7Y29udGVudDpcIlxcZTEyMVwifS5pY29uX2hpZGVfcGFzc3dvcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjJcIn0uaWNvbl9uYW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTIzXCJ9Lmljb25fb3JnYW5pc2F0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxlMTI0XCJ9Lmljb25fcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjVcIn0uaWNvbl9lbWFpbDpiZWZvcmV7Y29udGVudDpcIlxcZTEyNlwifS5pY29uX3Bhc3N3b3JkOmJlZm9yZXtjb250ZW50OlwiXFxlMTI3XCJ9Lmljb25fYWRkOmJlZm9yZXtjb250ZW50OlwiXFxlMTI4XCJ9Lmljb25fc2lnbl9vdXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjlcIn0uaWNvbl9wcm9maWxlOmJlZm9yZXtjb250ZW50OlwiXFxlMTJhXCJ9Lmljb25fd2FybmluZzpiZWZvcmV7Y29udGVudDpcIlxcZTEyYlwifS5pY29uX2NhbWVyYTpiZWZvcmV7Y29udGVudDpcIlxcZTEyY1wifVxuXG4gIC5pY29uMS11cGxvYWQtdG8tY2xvdWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwMFwiO1xuICB9XG4gIC5pY29uMS1jbG91ZC1jb21wdXRpbmc6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwMVwiO1xuICB9XG4gIC5pY29uMS1kYXNoYm9hcmQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwMlwiO1xuICB9XG4gIC5pY29uMS1maWx0ZXItcmVzdWx0czpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAzXCI7XG4gIH1cbiAgLmljb24xLWJ1aWxkaW5nOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDRcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9DYWxlbmRhcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA1XCI7XG4gIH1cbiAgLmljb24xLW5vdW5fUHJvamVjdDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA2XCI7XG4gIH1cbiAgLmljb24xLW5vdW5fVXBsb2FkOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDdcIjtcbiAgfVxuICAuaWNvbjEtbm91bl91c2VyczpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA4XCI7XG4gIH1cbiAgLmljb24xLW5vdW5fV29yazpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTA5XCI7XG4gIH1cbiAgLmljb24xLVBhdGg6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwYVwiO1xuICB9IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvbWl4aW4uc2Nzcyc7XG5cbi5hdHRlbmRhbmNlX19zZWN0aW9ue1xuICAgIGg1IHtcbiAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcXGUxMDRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlLWxhbmRzY2FwZSkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4ucmVhc29uX19idG5cbntcbiAgICBcbiAgICBib3JkZXI6MS40cHggc29saWQgJGRhcmtCbHVlO1xuZm9udC1zaXplOiAuOWVtIDtcbiBjb2xvcjogIzI3MzNhMDtcbmJvcmRlci1yYWRpdXM6IDMwcHg7XG5cbn1cblxuLnRhYmxlIHRkIHtcbiAgICBcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnJlYXNvbl9fc2VsZWN0aW9ue1xuICAgIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoX19pbnB1dFxue1xuICAgLmZvcm0tY29udHJvbFxuICAge1xuICAgIEBpbmNsdWRlIGJvcmRlci1ib3R0b20oKTtcbiAgICBwYWRkaW5nLWxlZnQ6MHB4O1xuICAgIGNvbG9yOiAkZ3JheTtmb250LXNpemU6IC45ZW07XG4gICAgXG4gICB9XG59XG5cbiAgXG4uZmlsdGVyX19idG5cbntcbiAgICBcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBidXR0b24gXG4gICAge1xuICAgICAgICBwYWRkaW5nOiA1cHggOHB4O2ZvbnQtc2l6ZTogLjllbTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgfVxufVxuLmF0dGVuZGFuY2VfX2ZpbHRlclxue1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogMHJlbSAwIDFyZW07XG4gICAgcmlnaHQ6IDJyZW07XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG59XG5cbi5zZWFyY2hfX2J0biBcbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6ICNhMGEwYTA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3VwcG9ydF9fcmVxdWVzdC0taW5wdXQge1xuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICBjb2xvcjogJGFycm93R3JheTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgfVxufVxuXG4uc3VwcG9ydF9fcmVxdWVzdC1tb2RhbCB7XG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW0gMS41cmVtO1xuXG4gICAgaDUge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgIFxuICAgIH1cbiAgICBzZWxlY3QjZXhhbXBsZUZvcm1Db250cm9sU2VsZWN0MSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYxcHg7XG4gICAgfVxuICAgIC5zdXBwb3J0X19yZXF1ZXN0IHtcbiAgICAgICAgXG4gICAgICAgIG1hcmdpbjogMS4zcmVtIDAgMXJlbTtcbiAgICB9XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgICBcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uc3VwcG9ydF9fcGFnZVxue1xuICAgIC50cmlnZ2VyX19idG4sIGg1XG4gICAge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxufVxuLm1vZGFsLWRpYWxvZy0tc3VwcG9ydFxue1xuICAgIHBhZGRpbmctdG9wOiA1NXB4O1xuICAgIG1heC13aWR0aDogNDIwcHg7XG59XG4uYXR0ZW5kYW5jZV9fYXBwcm92YWxfX3RhYmxlIHtcbiAgICAudGFibGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgfVxuICAgIC5pY29uX3RpY2sge1xuICAgICAgICBjb2xvcjojNjc0N0Q0O1xuICAgIH1cbiAgICAuaWNvbl9jYW5jZWwge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cbn1cbn1cbi50ZXh0LWNhcGl0YWxpemUge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9IiwiQG1peGluIGJyZWFrcG9pbnQoJHBvaW50KSB7XG4gICAgQGlmICRwb2ludD09YmlnLWRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PWRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PWxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBlbHNlIGlmICRwb2ludD09YXBwbGUtbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGVsc2UgaWYgJHBvaW50PT10YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgQGNvbnRlbnQgO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldC1zIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgIEBjb250ZW50IDtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIEBlbHNlIGlmICRwb2ludD09bW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU2N3B4KSB7XG4gICAgICAgICAgICBAY29udGVudCA7XG4gICAgICAgIH1cblxuICAgIH1cbiAgIFxuXG59XG5cblxuXG5AbWl4aW4gZ3JhZGllbnQtdGV4dCgkYW5nbGU6IDQ1ZGVnLCAkY29sb3I6ICM2NzQ3RDQsICRhbW91bnQ6IDM1JSkge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IsIGFkanVzdC1odWUoJGNvbG9yLCAkYW1vdW50KSk7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBAbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAgIC1tb3otdHJhbnNpdGlvbjogICAgJHRyYW5zaXRpb247XG4gICAgLW8tdHJhbnNpdGlvbjogICAgICAkdHJhbnNpdGlvbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIHRyYW5zaXRpb246ICAgICAgICAgJHRyYW5zaXRpb247XG59XG4gICJdfQ== */"];



/***/ }),

/***/ "./src/app/user-module/approvals/attendanceapprovals/attendanceapprovals.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/user-module/approvals/attendanceapprovals/attendanceapprovals.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AttendanceapprovalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceapprovalsComponent", function() { return AttendanceapprovalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_urlConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/urlConstant */ "./src/app/services/urlConstant.ts");
/* harmony import */ var src_app_model_attendanceDetail_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/attendanceDetail.model */ "./src/app/model/attendanceDetail.model.ts");
/* harmony import */ var src_app_model_attendancelateRequest_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/attendancelateRequest.model */ "./src/app/model/attendancelateRequest.model.ts");
/* harmony import */ var src_app_model_attendance_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/attendance.model */ "./src/app/model/attendance.model.ts");






class AttendanceapprovalsComponent {
    constructor(genericservice, encryptdecryptlocalstorage) {
        this.genericservice = genericservice;
        this.encryptdecryptlocalstorage = encryptdecryptlocalstorage;
        this.years = [];
        this.attendanceApprovalListUrl = src_app_services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].attendanceApprovalApi;
        this.getEmployeeDetailUrl = src_app_services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].getEmployeeApi;
        this.saveAttendanceUrl = src_app_services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].saveAttendance;
        this.saveLateRequestUrl = src_app_services_urlConstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstant"].saveLaterequest;
        this.attendanceObj = new src_app_model_attendanceDetail_model__WEBPACK_IMPORTED_MODULE_3__["AttendanceLeave"]();
        this.gemsEmployeeLateRequest = new src_app_model_attendancelateRequest_model__WEBPACK_IMPORTED_MODULE_4__["EmployeeLateRequest"]();
        this.currentPage = 1;
        this.limit = 3;
        this.totalPages = 1;
        this.perpageOption = [
            { value: '10', label: '10' },
            { value: '20', label: '20' },
            { value: '50', label: '50' },
            { value: '100', label: '100' },
            { value: '500', label: '500' },
        ];
        this.selectedItemsPerPage = 10;
        this.status = "";
        this.attendanceDetails = new src_app_model_attendance_model__WEBPACK_IMPORTED_MODULE_5__["Attendance"]();
        this.isData1 = true;
        this.displayedColumns = ['attendanceDate', 'attendanceInTime', 'attendanceOutTime', 'gemsAttendanceDuration', 'leaveTypeCode',
            'status'];
    }
    ngOnInit() {
        this.PreLoader = true;
        this.todayDate = new Date();
        let currentmonth = this.todayDate.getMonth();
        let currentyear = this.todayDate.getFullYear();
        this.gemsEmployeeMasterId = localStorage.gemsEmployeeMasterId;
        this.addreasonform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            addreason: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
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
        let userObj = {
            "gemsUserMasterId": this.encryptdecryptlocalstorage.getLocalStorage('userId')
        };
        return this.genericservice.post(this.getEmployeeDetailUrl, userObj, false).subscribe(employeedata => {
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
        this.genericservice.post(this.saveLateRequestUrl, this.gemsEmployeeLateRequest, false).subscribe(lateRequestData => {
            this.attendanceDetails.cntEmployeeLateRequest = lateRequestData.data;
            this.attendanceDetails.attendanceDate = this.attendanceObj.attendanceDate;
            this.attendanceDetails.gemsEmployeeMaster = this.gemsEmployeeMaster;
            this.attendanceDetails.cntAttendanceDetailId = this.attendanceObj.cntAttendanceDetailId;
            this.attendanceDetails.attendanceInTime = this.attendanceObj.attendanceInTime;
            this.attendanceDetails.attendanceOutTime = this.attendanceObj.attendanceOutTime;
            this.genericservice.post(this.saveAttendanceUrl, this.attendanceDetails, false).subscribe(attendanceMaster => {
                this.saveAttendance = attendanceMaster.data;
                this.getAttendanceByMonth();
            });
        });
    }
    getAttendanceByMonth() {
        this.PreLoader = true;
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
                "currentReportingTo": {
                    "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
                }
            }
        };
        this.start = 0;
        this.limit = this.selectedItemsPerPage;
        return this.genericservice.post(this.attendanceApprovalListUrl + '?start=' + this.start + '&limit=' + this.limit, attendanceViewObj, false).subscribe(response => {
            if (response.status.success === 'Success') {
                this.isData1 = true;
                this.attendancerecords = response.data;
                this.totalCount1 = response.totalResult;
                this.PreLoader = false;
                this.findItemsPerPage();
            }
            else {
                this.isData1 = false;
                this.PreLoader = false;
            }
        }, error => {
            console.log(error);
        });
    }
    goToNext() {
        this.currentPage++;
        this.PreLoader = true;
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
        this.start = this.start + this.limit;
        this.limit = this.selectedItemsPerPage;
        this.genericservice.post(this.attendanceApprovalListUrl + '?start=' + this.start + '&limit=' + this.limit, attendanceViewObj, false).subscribe(response => {
            if (response.status.success === 'Success') {
                this.isData1 = true;
                this.attendancerecords = response.data;
                this.totalCount1 = response.totalResult;
                this.PreLoader = false;
                this.findItemsPerPage();
            }
            else {
                this.isData1 = false;
                this.PreLoader = false;
            }
        }, error => {
            console.log(error);
        });
    }
    goToPrev() {
        this.currentPage--;
        this.PreLoader = true;
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
        this.start = this.start - this.limit;
        this.limit = this.selectedItemsPerPage;
        this.genericservice.post(this.attendanceApprovalListUrl + '?start=' + this.start + '&limit=' + this.limit, attendanceViewObj, false).subscribe(response => {
            if (response.status.success === 'Success') {
                this.isData1 = true;
                this.attendancerecords = response.data;
                this.totalCount1 = response.totalResult;
                this.PreLoader = false;
                this.findItemsPerPage();
            }
            else {
                this.isData1 = false;
                this.PreLoader = false;
            }
        }, error => {
            console.log(error);
        });
    }
    isLate(intime, maxtime) {
        var a = intime.split(":");
        if (maxtime == null) {
            maxtime = '09:30:00';
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
    getTimeByTimeStampWithReturn(timeStamp) {
        if (timeStamp != null) {
            var date_to_convert = new Date(timeStamp);
            var local_date = new Date();
            date_to_convert.setMinutes(date_to_convert.getMinutes() + local_date.getTimezoneOffset());
            let DateValue = date_to_convert.toString().split(' ');
            return DateValue[4];
        }
        else {
            return null;
        }
    }
    getDateByTime(time) {
        var date = new Date(time);
        var month = date.getMonth() + 1;
        var dateFormate = date.getFullYear() + "-" + month + "-" + date.getDate();
        return dateFormate;
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
    getOrganisationWeekOff(attendance) {
        let attendanceDate = new Date(attendance.attendanceDate);
        switch (attendanceDate.getDay()) {
            case 0:
                if ((!attendance.sunday) && (attendance.sunday != null)) {
                    return '(Week Off)';
                }
                break;
            case 1:
                if ((!attendance.monday) && (attendance.sunday != null)) {
                    return '(Week Off)';
                }
                break;
            case 2:
                if ((!attendance.tuesday) && (attendance.sunday != null)) {
                    return '(Week Off)';
                }
                break;
            case 3:
                if ((!attendance.wednesday) && (attendance.sunday != null)) {
                    return '(Week Off)';
                }
                break;
            case 4:
                if ((!attendance.thursday) && (attendance.sunday != null)) {
                    return '(Week Off)';
                }
                break;
            case 5:
                if ((!attendance.friday) && (attendance.sunday != null)) {
                    return '(Week Off)';
                }
                break;
            case 6:
                if ((!attendance.saturday) && (attendance.sunday != null)) {
                    return '(Week Off)';
                }
                break;
        }
    }
    getToDate(month, year) {
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            return 31;
        }
        else if (month == 2) {
            if (year % 4 == 0) {
                return 29;
            }
            else {
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
        }
        else {
            return '--';
        }
    }
    changeItemPerPage(event) {
        console.log('event printed' + event);
        this.selectedItemsPerPage = event;
        this.getAttendanceByMonth();
        this.refreshList();
    }
    findItemsPerPage() {
        this.totalPages = Math.ceil(this.totalCount1 / +this.selectedItemsPerPage);
    }
    refreshList() {
        this.PreLoader = true;
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
        return this.genericservice.post(this.attendanceApprovalListUrl + '?start=' + this.start + '&limit=' + this.limit, attendanceViewObj, false).subscribe(response => {
            if (response.status.success === 'Success') {
                this.isData1 = true;
                this.attendancerecords = response.data;
                this.totalCount1 = response.totalResult;
                this.PreLoader = false;
                this.findItemsPerPage();
            }
            else {
                this.isData1 = false;
                this.PreLoader = false;
            }
        }, error => {
            console.log(error);
        });
    }
    actionOnRequest(actionName, attendanceData) {
        let lateRequestObj = attendanceData.cntEmployeeLateRequest;
        if (actionName === 'approve') {
            lateRequestObj.status = "APPROVED";
        }
        else if (actionName === 'reject') {
            lateRequestObj.status = "REJECTED";
        }
        this.genericservice.post(this.saveLateRequestUrl, lateRequestObj, true).subscribe(response => {
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
            });
        });
    }
}


/***/ }),

/***/ "./src/app/user-module/approvals/leaveapprovals/leave-details/leave-details.component.ngfactory.js":
/*!*********************************************************************************************************!*\
  !*** ./src/app/user-module/approvals/leaveapprovals/leave-details/leave-details.component.ngfactory.js ***!
  \*********************************************************************************************************/
/*! exports provided: RenderType_LeaveDetailsComponent, View_LeaveDetailsComponent_0, View_LeaveDetailsComponent_Host_0, LeaveDetailsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LeaveDetailsComponent", function() { return RenderType_LeaveDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LeaveDetailsComponent_0", function() { return View_LeaveDetailsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LeaveDetailsComponent_Host_0", function() { return View_LeaveDetailsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveDetailsComponentNgFactory", function() { return LeaveDetailsComponentNgFactory; });
/* harmony import */ var _leave_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-details.component.scss.shim.ngstyle */ "./src/app/user-module/approvals/leaveapprovals/leave-details/leave-details.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _leave_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leave-details.component */ "./src/app/user-module/approvals/leaveapprovals/leave-details/leave-details.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_genericservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/genericservices */ "./src/app/services/genericservices.ts");
/* harmony import */ var _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/encrypt-decrypt-localstorage.service */ "./src/app/services/encrypt-decrypt-localstorage.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_LeaveDetailsComponent = [_leave_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LeaveDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LeaveDetailsComponent, data: {} });

function View_LeaveDetailsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "col-md-4 mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reason"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.employeeLeaveMasterResponse.reason; _ck(_v, 4, 0, currVal_0); }); }
function View_LeaveDetailsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.gemsLeaveTypeMaster.leaveTypeDescription; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.leaveEntitled; _ck(_v, 4, 0, currVal_1); }); }
function View_LeaveDetailsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "row leave__details rejection"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reason"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "input", [["class", "form-control"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keyup"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("keyup" === en)) {
        var pd_4 = (_co.onKeyPress($event) !== false);
        ad = (pd_4 && ad);
    } if (("ngModelChange" === en)) {
        var pd_5 = ((_co.remarks = $event) !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "small", [["class", "form-text error"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please fill some characters."]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.remarks; _ck(_v, 8, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = !_co.reasonRequired; _ck(_v, 11, 0, currVal_8); }); }
function View_LeaveDetailsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 10, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reason"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "input", [["class", "form-control"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keyup"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("keyup" === en)) {
        var pd_4 = (_co.onKeyPress($event) !== false);
        ad = (pd_4 && ad);
    } if (("ngModelChange" === en)) {
        var pd_5 = ((_co.remarks = $event) !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "small", [["class", "form-text error"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please fill some characters."]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.remarks; _ck(_v, 7, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = !_co.reasonRequired; _ck(_v, 10, 0, currVal_8); }); }
function View_LeaveDetailsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "row leave__details rejection"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveDetailsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.approvedLeaveReject(_co.employeeLeaveMasterResponse); _ck(_v, 2, 0, currVal_0); }, null); }
function View_LeaveDetailsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "button", [["class", "custom__btn approveLeave"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.approveLeaveRequest(_co.employeeLeaveMasterResponse) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Approve"]))], null, null); }
function View_LeaveDetailsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "button", [["class", "custom__btn rejectLeave"], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.rejectLeaveRequest(_co.employeeLeaveMasterResponse) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reject"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.remarks === undefined) || _co.reasonRequired); _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveDetailsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "custom__btn rejectLeave"], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.rejectLeaveRequest(_co.employeeLeaveMasterResponse) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reject"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.remarks == undefined) || _co.reasonRequired); _ck(_v, 0, 0, currVal_0); }); }
function View_LeaveDetailsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveDetailsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.approvedLeaveReject(_co.employeeLeaveMasterResponse); _ck(_v, 2, 0, currVal_0); }, null); }
function View_LeaveDetailsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 77, "div", [["class", "attendance dashboard__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Leave Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 74, "div", [["class", "inner__section--styles h-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 73, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "col-1 leave__profile--img "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["class", "rounded-circle"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "div", [["class", "col-11 pl-4 align-self-center leaveDetails__header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "h5", [["class", "pt-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "div", [["class", "col-12 col-md-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 64, "div", [["class", "col-12 col-md-11 float-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 36, "div", [["class", "row leave__details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 6, "div", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["From"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 3, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](22, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](23, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 6, "div", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 3, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](29, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](30, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 4, "div", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Duration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](35, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Leave Type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](40, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Loss Of Pay"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](45, null, ["", " day(s)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 4, "div", [["class", "col-md-2 mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](50, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 14, "div", [["class", "row leave__details pt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "h6", [["class", "w-100 mb-4 ml-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["LEAVE BALANCE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reason"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](62, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 4, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](67, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 7, "div", [["class", "row justify-content-center mt-5 pb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 6, "div", [["class", "col-6 leave__details--btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveDetailsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveDetailsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveDetailsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 15, "div", [["aria-hidden", "true"], ["aria-labelledby", "rejectionModel"], ["class", "modal fade"], ["id", "rejectionModel"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 14, "div", [["class", "modal-dialog modal-dialog-centered"], ["role", "document"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 13, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 12, "div", [["class", "modal-body rejection"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 1, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Remarks"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 4, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 1, "label", [["for", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Reason for Rejection"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 1, "textarea", [["class", "form-control"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Need to completed task - Highly important. Cannot approve leave."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 4, "div", [["class", "time__submit text-right mt-4 pt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 1, "button", [["class", "btn cancel-button"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 1, "button", [["class", "btn theme__btn btn-hover color-3"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Done"]))], function (_ck, _v) { var _co = _v.component; var currVal_9 = (_co.employeeLeaveMasterResponse.status != "PENDING"); _ck(_v, 52, 0, currVal_9); var currVal_10 = _co.leaveSummaryList; _ck(_v, 57, 0, currVal_10); var currVal_13 = ((_co.employeeLeaveMasterResponse.status == "PENDING") || (_co.employeeLeaveMasterResponse.status == "ONHOLD")); _ck(_v, 69, 0, currVal_13); var currVal_14 = (_co.employeeLeaveMasterResponse.status == "APPROVED"); _ck(_v, 71, 0, currVal_14); var currVal_15 = ((_co.employeeLeaveMasterResponse.status == "PENDING") || (_co.employeeLeaveMasterResponse.status == "ONHOLD")); _ck(_v, 75, 0, currVal_15); var currVal_16 = ((_co.employeeLeaveMasterResponse.status == "PENDING") || (_co.employeeLeaveMasterResponse.status == "ONHOLD")); _ck(_v, 77, 0, currVal_16); var currVal_17 = (_co.employeeLeaveMasterResponse.status == "APPROVED"); _ck(_v, 79, 0, currVal_17); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ("data:image/jpg;base64," + _co.profileImage); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.employeeLeaveMasterResponse.firstName; _ck(_v, 11, 0, currVal_1); var currVal_2 = _co.employeeLeaveMasterResponse.createdBy.officialEmailid; _ck(_v, 13, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 21, 0, _ck(_v, 23, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 21, 0, _ck(_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1), _co.employeeLeaveMasterResponse.fromDate, "dd MMM yyyy")))); _ck(_v, 21, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 28, 0, _ck(_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 28, 0, _ck(_v, 29, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1), _co.employeeLeaveMasterResponse.toDate, "dd MMM yyyy")))); _ck(_v, 28, 0, currVal_4); var currVal_5 = _co.employeeLeaveMasterResponse.permissionDuration; _ck(_v, 35, 0, currVal_5); var currVal_6 = _co.employeeLeaveMasterResponse.leaveCode; _ck(_v, 40, 0, currVal_6); var currVal_7 = _co.employeeLeaveMasterResponse.noOfLops; _ck(_v, 45, 0, currVal_7); var currVal_8 = _co.employeeLeaveMasterResponse.status; _ck(_v, 50, 0, currVal_8); var currVal_11 = _co.employeeLeaveMasterResponse.reason; _ck(_v, 62, 0, currVal_11); var currVal_12 = _co.employeeLeaveMasterResponse.status; _ck(_v, 67, 0, currVal_12); }); }
function View_LeaveDetailsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-leave-details", [], null, null, null, View_LeaveDetailsComponent_0, RenderType_LeaveDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _leave_details_component__WEBPACK_IMPORTED_MODULE_4__["LeaveDetailsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_genericservices__WEBPACK_IMPORTED_MODULE_6__["Genericservice"], _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["EncryptDecryptLocalStorageService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LeaveDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-leave-details", _leave_details_component__WEBPACK_IMPORTED_MODULE_4__["LeaveDetailsComponent"], View_LeaveDetailsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/user-module/approvals/leaveapprovals/leave-details/leave-details.component.scss.shim.ngstyle.js":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/user-module/approvals/leaveapprovals/leave-details/leave-details.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************************************************/
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
var styles = ["@charset \"UTF-8\";\n[class^=icon_][_ngcontent-%COMP%], [class*=\" icon_\"][_ngcontent-%COMP%] {\n  font-family: \"chutti\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[class^=icon1-][_ngcontent-%COMP%], [class*=\" icon1-\"][_ngcontent-%COMP%] {\n  \n  font-family: \"icomoon\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon_dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE100\";\n}\n.icon_leave[_ngcontent-%COMP%]:before {\n  content: \"\uE101\";\n}\n.icon_attendance[_ngcontent-%COMP%]:before {\n  content: \"\uE102\";\n}\n.icon_timesheet[_ngcontent-%COMP%]:before {\n  content: \"\uE103\";\n}\n.icon_attendance1[_ngcontent-%COMP%]:before {\n  content: \"\uE104\";\n}\n.icon_support[_ngcontent-%COMP%]:before {\n  content: \"\uE105\";\n}\n.icon_quick_apply[_ngcontent-%COMP%]:before {\n  content: \"\uE106\";\n}\n.icon_leave_bank[_ngcontent-%COMP%]:before {\n  content: \"\uE107\";\n}\n.icon_collapse[_ngcontent-%COMP%]:before {\n  content: \"\uE108\";\n}\n.icon_expand[_ngcontent-%COMP%]:before {\n  content: \"\uE109\";\n}\n.icon_filter[_ngcontent-%COMP%]:before {\n  content: \"\uE10A\";\n}\n.icon_date_picker[_ngcontent-%COMP%]:before {\n  content: \"\uE10B\";\n}\n.icon_arrow_thick_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10C\";\n}\n.icon_arrow_thick_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10D\";\n}\n.icon_arrow_thin_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10E\";\n}\n.icon_arrow_thin_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10F\";\n}\n.icon_hold[_ngcontent-%COMP%]:before {\n  content: \"\uE110\";\n}\n.icon_cancel[_ngcontent-%COMP%]:before {\n  content: \"\uE111\";\n}\n.icon_tick[_ngcontent-%COMP%]:before {\n  content: \"\uE112\";\n}\n.icon_lock[_ngcontent-%COMP%]:before {\n  content: \"\uE113\";\n}\n.icon_edit_outline[_ngcontent-%COMP%]:before {\n  content: \"\uE114\";\n}\n.icon_edit_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE115\";\n}\n.icon_delete_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE116\";\n}\n.icon_search[_ngcontent-%COMP%]:before {\n  content: \"\uE117\";\n}\n.icon_notifications[_ngcontent-%COMP%]:before {\n  content: \"\uE118\";\n}\n.icon_time[_ngcontent-%COMP%]:before {\n  content: \"\uE119\";\n}\n.icon_date_time[_ngcontent-%COMP%]:before {\n  content: \"\uE11A\";\n}\n.icon_probation[_ngcontent-%COMP%]:before {\n  content: \"\uE11B\";\n}\n.icon_confirmed[_ngcontent-%COMP%]:before {\n  content: \"\uE11C\";\n}\n.icon_holidays[_ngcontent-%COMP%]:before {\n  content: \"\uE11D\";\n}\n.icon_priority_urgent[_ngcontent-%COMP%]:before {\n  content: \"\uE11E\";\n}\n.icon_arrow_up[_ngcontent-%COMP%]:before {\n  content: \"\uE11F\";\n}\n.icon_arrow_down[_ngcontent-%COMP%]:before {\n  content: \"\uE120\";\n}\n.icon_show_password[_ngcontent-%COMP%]:before {\n  content: \"\uE121\";\n}\n.icon_hide_password[_ngcontent-%COMP%]:before {\n  content: \"\uE122\";\n}\n.icon_name[_ngcontent-%COMP%]:before {\n  content: \"\uE123\";\n}\n.icon_organisation[_ngcontent-%COMP%]:before {\n  content: \"\uE124\";\n}\n.icon_phone[_ngcontent-%COMP%]:before {\n  content: \"\uE125\";\n}\n.icon_email[_ngcontent-%COMP%]:before {\n  content: \"\uE126\";\n}\n.icon_password[_ngcontent-%COMP%]:before {\n  content: \"\uE127\";\n}\n.icon_add[_ngcontent-%COMP%]:before {\n  content: \"\uE128\";\n}\n.icon_sign_out[_ngcontent-%COMP%]:before {\n  content: \"\uE129\";\n}\n.icon_profile[_ngcontent-%COMP%]:before {\n  content: \"\uE12A\";\n}\n.icon_warning[_ngcontent-%COMP%]:before {\n  content: \"\uE12B\";\n}\n.icon_camera[_ngcontent-%COMP%]:before {\n  content: \"\uE12C\";\n}\n.icon1-upload-to-cloud[_ngcontent-%COMP%]:before {\n  content: \"\uE900\";\n}\n.icon1-cloud-computing[_ngcontent-%COMP%]:before {\n  content: \"\uE901\";\n}\n.icon1-dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE902\";\n}\n.icon1-filter-results[_ngcontent-%COMP%]:before {\n  content: \"\uE903\";\n}\n.icon1-building[_ngcontent-%COMP%]:before {\n  content: \"\uE904\";\n}\n.icon1-noun_Calendar[_ngcontent-%COMP%]:before {\n  content: \"\uE905\";\n}\n.icon1-noun_Project[_ngcontent-%COMP%]:before {\n  content: \"\uE906\";\n}\n.icon1-noun_Upload[_ngcontent-%COMP%]:before {\n  content: \"\uE907\";\n}\n.icon1-noun_users[_ngcontent-%COMP%]:before {\n  content: \"\uE908\";\n}\n.icon1-noun_Work[_ngcontent-%COMP%]:before {\n  content: \"\uE909\";\n}\n.icon1-Path[_ngcontent-%COMP%]:before {\n  content: \"\uE90A\";\n}\n.leave__profile--img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 85px;\n  height: 85px;\n}\n.leave__details[_ngcontent-%COMP%] {\n  margin: 1rem 0 2.2rem;\n}\n.leave__details[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  padding-left: 0;\n  color: #6E6E6E;\n  font-size: 0.8em;\n  padding-bottom: 5px;\n}\n.leave__details[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding-left: 0;\n  font-size: 0.9em;\n}\nh5[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.custom__btn[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-radius: 4px;\n  padding: 12px 0;\n  letter-spacing: 1.8px;\n  font-size: 0.9em;\n  font-weight: 600;\n  margin: 0 0.5rem;\n  width: 86%;\n  margin: 0 7%;\n  background-color: transparent;\n}\n.leave__details--btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 33.333%;\n  display: inline-block;\n}\n.leave__details--btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .approveLeave[_ngcontent-%COMP%] {\n  color: #6747D4;\n  border-color: #6747D4;\n}\n.leave__details--btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .holdLeave[_ngcontent-%COMP%] {\n  color: #FF6C00;\n  border-color: #FF6C00;\n}\n.leave__details--btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .rejectLeave[_ngcontent-%COMP%] {\n  color: #E32C2C;\n  border-color: #E32C2C;\n}\n.leaveDetails__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n.rejection[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.rejection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.rejection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  font-size: 0.9em;\n  border-radius: 0;\n  padding-left: 0;\n  color: black !important;\n}\n.rejection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n.error[_ngcontent-%COMP%] {\n  color: #f7041c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tb2R1bGUvYXBwcm92YWxzL2xlYXZlYXBwcm92YWxzL2xlYXZlLWRldGFpbHMvbGVhdmUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3JlbnVnYS9EZXNrdG9wL1ZTQy13b3Jrc3BhY2UvQW5ndWxhciBXb3Jrc3BhY2UvY2xvdWRub3ctY2h1dHRpLXdlYi9zcmMvYXBwL3VzZXItbW9kdWxlL2FwcHJvdmFscy9sZWF2ZWFwcHJvdmFscy9sZWF2ZS1kZXRhaWxzL2xlYXZlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9yZW51Z2EvRGVza3RvcC9WU0Mtd29ya3NwYWNlL0FuZ3VsYXIgV29ya3NwYWNlL2Nsb3Vkbm93LWNodXR0aS13ZWIvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDcUJoQjs7RUFFRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FEbkJGO0FDcUJBO0VBQ0UsK0VBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFFQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURuQkY7QUNvRUU7RUFBdUIsWUFBQTtBRGhFekI7QUNnRXlDO0VBQW1CLFlBQUE7QUQ1RDVEO0FDNEQ0RTtFQUF3QixZQUFBO0FEeERwRztBQ3dEb0g7RUFBdUIsWUFBQTtBRHBEM0k7QUNvRDJKO0VBQXlCLFlBQUE7QURoRHBMO0FDZ0RvTTtFQUFxQixZQUFBO0FENUN6TjtBQzRDeU87RUFBeUIsWUFBQTtBRHhDbFE7QUN3Q2tSO0VBQXdCLFlBQUE7QURwQzFTO0FDb0MwVDtFQUFzQixZQUFBO0FEaENoVjtBQ2dDZ1c7RUFBb0IsWUFBQTtBRDVCcFg7QUM0Qm9ZO0VBQW9CLFlBQUE7QUR4QnhaO0FDd0J3YTtFQUF5QixZQUFBO0FEcEJqYztBQ29CaWQ7RUFBOEIsWUFBQTtBRGhCL2U7QUNnQitmO0VBQStCLFlBQUE7QURaOWhCO0FDWThpQjtFQUE2QixZQUFBO0FEUjNrQjtBQ1EybEI7RUFBOEIsWUFBQTtBREp6bkI7QUNJeW9CO0VBQWtCLFlBQUE7QURBM3BCO0FDQTJxQjtFQUFvQixZQUFBO0FESS9yQjtBQ0orc0I7RUFBa0IsWUFBQTtBRFFqdUI7QUNSaXZCO0VBQWtCLFlBQUE7QURZbndCO0FDWm14QjtFQUEwQixZQUFBO0FEZ0I3eUI7QUNoQjZ6QjtFQUF5QixZQUFBO0FEb0J0MUI7QUNwQnMyQjtFQUEyQixZQUFBO0FEd0JqNEI7QUN4Qmk1QjtFQUFvQixZQUFBO0FENEJyNkI7QUM1QnE3QjtFQUEyQixZQUFBO0FEZ0NoOUI7QUNoQ2crQjtFQUFrQixZQUFBO0FEb0NsL0I7QUNwQ2tnQztFQUF1QixZQUFBO0FEd0N6aEM7QUN4Q3lpQztFQUF1QixZQUFBO0FENENoa0M7QUM1Q2dsQztFQUF1QixZQUFBO0FEZ0R2bUM7QUNoRHVuQztFQUFzQixZQUFBO0FEb0Q3b0M7QUNwRDZwQztFQUE2QixZQUFBO0FEd0QxckM7QUN4RDBzQztFQUFzQixZQUFBO0FENERodUM7QUM1RGd2QztFQUF3QixZQUFBO0FEZ0V4d0M7QUNoRXd4QztFQUEyQixZQUFBO0FEb0VuekM7QUNwRW0wQztFQUEyQixZQUFBO0FEd0U5MUM7QUN4RTgyQztFQUFrQixZQUFBO0FENEVoNEM7QUM1RWc1QztFQUEwQixZQUFBO0FEZ0YxNkM7QUNoRjA3QztFQUFtQixZQUFBO0FEb0Y3OEM7QUNwRjY5QztFQUFtQixZQUFBO0FEd0ZoL0M7QUN4RmdnRDtFQUFzQixZQUFBO0FENEZ0aEQ7QUM1RnNpRDtFQUFpQixZQUFBO0FEZ0d2akQ7QUNoR3VrRDtFQUFzQixZQUFBO0FEb0c3bEQ7QUNwRzZtRDtFQUFxQixZQUFBO0FEd0dsb0Q7QUN4R2twRDtFQUFxQixZQUFBO0FENEd2cUQ7QUM1R3VyRDtFQUFvQixZQUFBO0FEZ0gzc0Q7QUM5R0U7RUFDRSxZQUFBO0FEaUhKO0FDL0dFO0VBQ0UsWUFBQTtBRGtISjtBQ2hIRTtFQUNFLFlBQUE7QURtSEo7QUNqSEU7RUFDRSxZQUFBO0FEb0hKO0FDbEhFO0VBQ0UsWUFBQTtBRHFISjtBQ25IRTtFQUNFLFlBQUE7QURzSEo7QUNwSEU7RUFDRSxZQUFBO0FEdUhKO0FDckhFO0VBQ0UsWUFBQTtBRHdISjtBQ3RIRTtFQUNFLFlBQUE7QUR5SEo7QUN2SEU7RUFDRSxZQUFBO0FEMEhKO0FDeEhFO0VBQ0UsWUFBQTtBRDJISjtBRXRQRztFQUVDLFdBQUE7RUFDQSxZQUFBO0FGd1BKO0FFclBBO0VBRUkscUJBQUE7QUZ1UEo7QUVwUFE7RUFFSSxlQUFBO0VBQWdCLGNEVHRCO0VDVU0sZ0JBQUE7RUFDQSxtQkFBQTtBRnNQWjtBRXBQUTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtBRnFQWjtBRWpQQTtFQUVJLGVBQUE7QUZtUEo7QUVqUEE7RUFFSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBRm1QSjtBRS9PSTtFQUVJLGNBQUE7RUFDQSxxQkFBQTtBRmlQUjtBRWhQUTtFQUVJLGNEaERGO0VDaURFLHFCRGpERjtBRGtTVjtBRS9PUTtFQUVJLGNEL0NKO0VDZ0RJLHFCRGhESjtBRGdTUjtBRTlPUTtFQUVJLGNEckRIO0VDc0RHLHFCRHRESDtBRHFTVDtBRXpPQTtFQUVJLGdCQUFBO0FGMk9KO0FFeE9BO0VBQ0ssWUFBQTtBRjJPTDtBRTFPSTtFQUVJLGtCQUFBO0FGMk9SO0FFMU9RO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBRjJPWjtBRXpPUTtFQUVJLGdCQUFBO0FGME9aO0FFdE9BO0VBQ0ksY0FBQTtBRnlPSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbW9kdWxlL2FwcHJvdmFscy9sZWF2ZWFwcHJvdmFscy9sZWF2ZS1kZXRhaWxzL2xlYXZlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5bY2xhc3NePWljb25fXSxcbltjbGFzcyo9XCIgaWNvbl9cIl0ge1xuICBmb250LWZhbWlseTogXCJjaHV0dGlcIiAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzXj1pY29uMS1dLCBbY2xhc3MqPVwiIGljb24xLVwiXSB7XG4gIC8qIHVzZSAhaW1wb3J0YW50IHRvIHByZXZlbnQgaXNzdWVzIHdpdGggYnJvd3NlciBleHRlbnNpb25zIHRoYXQgY2hhbmdlIGZvbnRzICovXG4gIGZvbnQtZmFtaWx5OiBcImljb21vb25cIiAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAvKiBCZXR0ZXIgRm9udCBSZW5kZXJpbmcgPT09PT09PT09PT0gKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5pY29uX2Rhc2hib2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EgFwiO1xufVxuXG4uaWNvbl9sZWF2ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EgVwiO1xufVxuXG4uaWNvbl9hdHRlbmRhbmNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSCXCI7XG59XG5cbi5pY29uX3RpbWVzaGVldDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eg1wiO1xufVxuXG4uaWNvbl9hdHRlbmRhbmNlMTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EhFwiO1xufVxuXG4uaWNvbl9zdXBwb3J0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSFXCI7XG59XG5cbi5pY29uX3F1aWNrX2FwcGx5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSGXCI7XG59XG5cbi5pY29uX2xlYXZlX2Jhbms6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIdcIjtcbn1cblxuLmljb25fY29sbGFwc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIhcIjtcbn1cblxuLmljb25fZXhwYW5kOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSJXCI7XG59XG5cbi5pY29uX2ZpbHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EilwiO1xufVxuXG4uaWNvbl9kYXRlX3BpY2tlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ei1wiO1xufVxuXG4uaWNvbl9hcnJvd190aGlja19sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSMXCI7XG59XG5cbi5pY29uX2Fycm93X3RoaWNrX3JpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSNXCI7XG59XG5cbi5pY29uX2Fycm93X3RoaW5fbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EjlwiO1xufVxuXG4uaWNvbl9hcnJvd190aGluX3JpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSPXCI7XG59XG5cbi5pY29uX2hvbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJBcIjtcbn1cblxuLmljb25fY2FuY2VsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSRXCI7XG59XG5cbi5pY29uX3RpY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJJcIjtcbn1cblxuLmljb25fbG9jazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ek1wiO1xufVxuXG4uaWNvbl9lZGl0X291dGxpbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJRcIjtcbn1cblxuLmljb25fZWRpdF9maWxsZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJVcIjtcbn1cblxuLmljb25fZGVsZXRlX2ZpbGxlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EllwiO1xufVxuXG4uaWNvbl9zZWFyY2g6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJdcIjtcbn1cblxuLmljb25fbm90aWZpY2F0aW9uczpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EmFwiO1xufVxuXG4uaWNvbl90aW1lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSZXCI7XG59XG5cbi5pY29uX2RhdGVfdGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EmlwiO1xufVxuXG4uaWNvbl9wcm9iYXRpb246YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJtcIjtcbn1cblxuLmljb25fY29uZmlybWVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oScXCI7XG59XG5cbi5pY29uX2hvbGlkYXlzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSdXCI7XG59XG5cbi5pY29uX3ByaW9yaXR5X3VyZ2VudDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EnlwiO1xufVxuXG4uaWNvbl9hcnJvd191cDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6En1wiO1xufVxuXG4uaWNvbl9hcnJvd19kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSgXCI7XG59XG5cbi5pY29uX3Nob3dfcGFzc3dvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKFcIjtcbn1cblxuLmljb25faGlkZV9wYXNzd29yZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EolwiO1xufVxuXG4uaWNvbl9uYW1lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSjXCI7XG59XG5cbi5pY29uX29yZ2FuaXNhdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EpFwiO1xufVxuXG4uaWNvbl9waG9uZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EpVwiO1xufVxuXG4uaWNvbl9lbWFpbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EplwiO1xufVxuXG4uaWNvbl9wYXNzd29yZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ep1wiO1xufVxuXG4uaWNvbl9hZGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKhcIjtcbn1cblxuLmljb25fc2lnbl9vdXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKlcIjtcbn1cblxuLmljb25fcHJvZmlsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EqlwiO1xufVxuXG4uaWNvbl93YXJuaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSrXCI7XG59XG5cbi5pY29uX2NhbWVyYTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ErFwiO1xufVxuXG4uaWNvbjEtdXBsb2FkLXRvLWNsb3VkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSAXCI7XG59XG5cbi5pY29uMS1jbG91ZC1jb21wdXRpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIFcIjtcbn1cblxuLmljb24xLWRhc2hib2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kglwiO1xufVxuXG4uaWNvbjEtZmlsdGVyLXJlc3VsdHM6YmVmb3JlIHtcbiAgY29udGVudDogXCLupINcIjtcbn1cblxuLmljb24xLWJ1aWxkaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSEXCI7XG59XG5cbi5pY29uMS1ub3VuX0NhbGVuZGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSFXCI7XG59XG5cbi5pY29uMS1ub3VuX1Byb2plY3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIZcIjtcbn1cblxuLmljb24xLW5vdW5fVXBsb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSHXCI7XG59XG5cbi5pY29uMS1ub3VuX3VzZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSIXCI7XG59XG5cbi5pY29uMS1ub3VuX1dvcms6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIlcIjtcbn1cblxuLmljb24xLVBhdGg6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIpcIjtcbn1cblxuLmxlYXZlX19wcm9maWxlLS1pbWcgaW1nIHtcbiAgd2lkdGg6IDg1cHg7XG4gIGhlaWdodDogODVweDtcbn1cblxuLmxlYXZlX19kZXRhaWxzIHtcbiAgbWFyZ2luOiAxcmVtIDAgMi4ycmVtO1xufVxuLmxlYXZlX19kZXRhaWxzIFtjbGFzcyo9Y29sLV0gaDYge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGNvbG9yOiAjNkU2RTZFO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmxlYXZlX19kZXRhaWxzIFtjbGFzcyo9Y29sLV0gaDUge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbmg1IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uY3VzdG9tX19idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjhweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgd2lkdGg6IDg2JTtcbiAgbWFyZ2luOiAwIDclO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmxlYXZlX19kZXRhaWxzLS1idG4gc3BhbiB7XG4gIHdpZHRoOiAzMy4zMzMlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubGVhdmVfX2RldGFpbHMtLWJ0biBzcGFuIC5hcHByb3ZlTGVhdmUge1xuICBjb2xvcjogIzY3NDdENDtcbiAgYm9yZGVyLWNvbG9yOiAjNjc0N0Q0O1xufVxuLmxlYXZlX19kZXRhaWxzLS1idG4gc3BhbiAuaG9sZExlYXZlIHtcbiAgY29sb3I6ICNGRjZDMDA7XG4gIGJvcmRlci1jb2xvcjogI0ZGNkMwMDtcbn1cbi5sZWF2ZV9fZGV0YWlscy0tYnRuIHNwYW4gLnJlamVjdExlYXZlIHtcbiAgY29sb3I6ICNFMzJDMkM7XG4gIGJvcmRlci1jb2xvcjogI0UzMkMyQztcbn1cblxuLmxlYXZlRGV0YWlsc19faGVhZGVyIHAge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4ucmVqZWN0aW9uIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnJlamVjdGlvbiAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbi5yZWplY3Rpb24gLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4ucmVqZWN0aW9uIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6ICNmNzA0MWM7XG59IiwiJHdoaXRlOiNmZmZmZmY7XG4kYm9yZGVyLWNvbG9yOiNERURFREU7XG4kYm9yZGVyLWxpZ2h0OiNFOEU4RTg7XG4kbGlnaHQtYmx1ZTojRjFGN0ZCO1xuJGRhcmtQaW5rOiM5QTQ1RDI7XG4kZGFya0JsdWU6IzY3NDdENDtcbiR0ZXh0LWNvbG9yOiM0MDQwNDA7XG4kcHJpbWFyeUNvbG9yOiM3MTUxREM7XG4kZ3JheTojNkU2RTZFO1xuJGJsYWNrOiMwMDAwMDA7XG4kZGFya1JlZDojRTMyQzJDO1xuJG9yYW5nZTojRkY2QzAwO1xuJGJyb3duOiNBQTM0N0I7XG4kYXJyb3dHcmF5OiM4NDg0ODQ7XG4kYmx1ZTogIzFjOTFmZjtcbiRyb3NlOiNGOTRGODk7XG4kbmVwdHVuZTojN0NBMUIxO1xuJHllbGxvdzojRTI4NjBEO1xuJGNvbG9yLWJhY2s6ICNlZmVmZWY7XG4kY29sb3ItYmFyOiAjNjc0N0Q0O1xuXG5bY2xhc3NePVwiaWNvbl9cIl0sXG5bY2xhc3MqPVwiIGljb25fXCJdIHtcbiAgZm9udC1mYW1pbHk6ICdjaHV0dGknICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuW2NsYXNzXj1cImljb24xLVwiXSwgW2NsYXNzKj1cIiBpY29uMS1cIl0ge1xuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICBmb250LWZhbWlseTogJ2ljb21vb24nICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5cbkBtaXhpbiBiZy1ncmFkaWVudCgpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsJGRhcmtQaW5rIDIwJSwgJGRhcmtCbHVlIDgwJSk7XG59XG5AbWl4aW4gdGhlbWUtYnRuKCl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya0JsdWUgMCUsICRkYXJrUGluayAxMDAlKTtcbn1cbkBtaXhpbiBiZy1ibGFjaygpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwkYmxhY2sgMCUsICMxMjEyMTMgMTAwJSk7XG59XG5AbWl4aW4gZm9udC1jb2xvcigpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCRkYXJrUGluayAyMCUsICRkYXJrQmx1ZSA4MCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya1BpbmsgMjAlLCAkZGFya0JsdWUgODAlKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7ICAgIFxuICB9XG4gIEBtaXhpbiAgYm9yZGVyLWJvdHRvbSgpIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogJGRhcmtCbHVlO1xuICAgIH1cbiAgfVxuXG5AbWl4aW4gdXNlckltZyAoKXtcblxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAuMTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuJWJ0bi1zaGFyZWQge1xuICAgIG1pbi1oZWlnaHQ6IDU1cHg7XG4gIH1cblxuICAuaWNvbl9kYXNoYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDBcIn0uaWNvbl9sZWF2ZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwMVwifS5pY29uX2F0dGVuZGFuY2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDJcIn0uaWNvbl90aW1lc2hlZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDNcIn0uaWNvbl9hdHRlbmRhbmNlMTpiZWZvcmV7Y29udGVudDpcIlxcZTEwNFwifS5pY29uX3N1cHBvcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDVcIn0uaWNvbl9xdWlja19hcHBseTpiZWZvcmV7Y29udGVudDpcIlxcZTEwNlwifS5pY29uX2xlYXZlX2Jhbms6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDdcIn0uaWNvbl9jb2xsYXBzZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwOFwifS5pY29uX2V4cGFuZDpiZWZvcmV7Y29udGVudDpcIlxcZTEwOVwifS5pY29uX2ZpbHRlcjpiZWZvcmV7Y29udGVudDpcIlxcZTEwYVwifS5pY29uX2RhdGVfcGlja2VyOmJlZm9yZXtjb250ZW50OlwiXFxlMTBiXCJ9Lmljb25fYXJyb3dfdGhpY2tfbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZTEwY1wifS5pY29uX2Fycm93X3RoaWNrX3JpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxlMTBkXCJ9Lmljb25fYXJyb3dfdGhpbl9sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxlMTBlXCJ9Lmljb25fYXJyb3dfdGhpbl9yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZTEwZlwifS5pY29uX2hvbGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTBcIn0uaWNvbl9jYW5jZWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTFcIn0uaWNvbl90aWNrOmJlZm9yZXtjb250ZW50OlwiXFxlMTEyXCJ9Lmljb25fbG9jazpiZWZvcmV7Y29udGVudDpcIlxcZTExM1wifS5pY29uX2VkaXRfb3V0bGluZTpiZWZvcmV7Y29udGVudDpcIlxcZTExNFwifS5pY29uX2VkaXRfZmlsbGVkOmJlZm9yZXtjb250ZW50OlwiXFxlMTE1XCJ9Lmljb25fZGVsZXRlX2ZpbGxlZDpiZWZvcmV7Y29udGVudDpcIlxcZTExNlwifS5pY29uX3NlYXJjaDpiZWZvcmV7Y29udGVudDpcIlxcZTExN1wifS5pY29uX25vdGlmaWNhdGlvbnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMThcIn0uaWNvbl90aW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTE5XCJ9Lmljb25fZGF0ZV90aW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTFhXCJ9Lmljb25fcHJvYmF0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxlMTFiXCJ9Lmljb25fY29uZmlybWVkOmJlZm9yZXtjb250ZW50OlwiXFxlMTFjXCJ9Lmljb25faG9saWRheXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWRcIn0uaWNvbl9wcmlvcml0eV91cmdlbnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWVcIn0uaWNvbl9hcnJvd191cDpiZWZvcmV7Y29udGVudDpcIlxcZTExZlwifS5pY29uX2Fycm93X2Rvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjBcIn0uaWNvbl9zaG93X3Bhc3N3b3JkOmJlZm9yZXtjb250ZW50OlwiXFxlMTIxXCJ9Lmljb25faGlkZV9wYXNzd29yZDpiZWZvcmV7Y29udGVudDpcIlxcZTEyMlwifS5pY29uX25hbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjNcIn0uaWNvbl9vcmdhbmlzYXRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjRcIn0uaWNvbl9waG9uZTpiZWZvcmV7Y29udGVudDpcIlxcZTEyNVwifS5pY29uX2VtYWlsOmJlZm9yZXtjb250ZW50OlwiXFxlMTI2XCJ9Lmljb25fcGFzc3dvcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjdcIn0uaWNvbl9hZGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjhcIn0uaWNvbl9zaWduX291dDpiZWZvcmV7Y29udGVudDpcIlxcZTEyOVwifS5pY29uX3Byb2ZpbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMmFcIn0uaWNvbl93YXJuaW5nOmJlZm9yZXtjb250ZW50OlwiXFxlMTJiXCJ9Lmljb25fY2FtZXJhOmJlZm9yZXtjb250ZW50OlwiXFxlMTJjXCJ9XG5cbiAgLmljb24xLXVwbG9hZC10by1jbG91ZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAwXCI7XG4gIH1cbiAgLmljb24xLWNsb3VkLWNvbXB1dGluZzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAxXCI7XG4gIH1cbiAgLmljb24xLWRhc2hib2FyZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAyXCI7XG4gIH1cbiAgLmljb24xLWZpbHRlci1yZXN1bHRzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDNcIjtcbiAgfVxuICAuaWNvbjEtYnVpbGRpbmc6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwNFwiO1xuICB9XG4gIC5pY29uMS1ub3VuX0NhbGVuZGFyOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDVcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9Qcm9qZWN0OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDZcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9VcGxvYWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwN1wiO1xuICB9XG4gIC5pY29uMS1ub3VuX3VzZXJzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDhcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9Xb3JrOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDlcIjtcbiAgfVxuICAuaWNvbjEtUGF0aDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTBhXCI7XG4gIH0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4vLi4vYXNzZXRzL3Njc3MvbWl4aW4uc2Nzcyc7XG4ubGVhdmVfX3Byb2ZpbGUtLWltZyBcbntcbiAgIGltZyBcbiAgIHtcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6IDg1cHg7XG4gICB9XG59XG4ubGVhdmVfX2RldGFpbHMgXG57XG4gICAgbWFyZ2luOiAxcmVtIDAgMi4ycmVtO1xuICAgIFtjbGFzcyo9XCJjb2wtXCJdXG4gICAgeyAgIFxuICAgICAgICBoNiBcbiAgICAgICAge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO2NvbG9yOiAkZ3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDUgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmg1IFxue1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cbi5jdXN0b21fX2J0biBcbntcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjhweDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwIC41cmVtO1xuICAgIHdpZHRoOiA4NiU7XG4gICAgbWFyZ2luOiAwIDclO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmxlYXZlX19kZXRhaWxzLS1idG4gXG57XG4gICAgc3BhbiBcbiAgICB7XG4gICAgICAgIHdpZHRoOiAzMy4zMzMlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIC5hcHByb3ZlTGVhdmUgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiAkZGFya0JsdWU7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRkYXJrQmx1ZTtcbiAgICAgICAgfVxuICAgICAgICAuaG9sZExlYXZlIFxuICAgICAgICB7XG4gICAgICAgICAgICBjb2xvcjogJG9yYW5nZTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJG9yYW5nZTtcbiAgICAgICAgfVxuICAgICAgICAucmVqZWN0TGVhdmUgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiAkZGFya1JlZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGRhcmtSZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4ubGVhdmVEZXRhaWxzX19oZWFkZXIgXG57XG5wIFxue1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbn1cbn1cbi5yZWplY3Rpb24gXG57ICAgIHBhZGRpbmc6IDBweDtcbiAgICAuZm9ybS1ncm91cCBcbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgICAgLmZvcm0tY29udHJvbCBcbiAgICAgICAge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCBcbiAgICAgICAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICB9XG4gICAgfVxufVxuLmVycm9yIHtcbiAgICBjb2xvcjogICNmNzA0MWM7XG59Il19 */"];



/***/ }),

/***/ "./src/app/user-module/approvals/leaveapprovals/leave-details/leave-details.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/user-module/approvals/leaveapprovals/leave-details/leave-details.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: LeaveDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveDetailsComponent", function() { return LeaveDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/urlConstant */ "./src/app/services/urlConstant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



class LeaveDetailsComponent {
    constructor(router, activatedRoute, genericservice, encryptdecryptlocalstorage) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.genericservice = genericservice;
        this.encryptdecryptlocalstorage = encryptdecryptlocalstorage;
        this.data = [];
        this.data1 = [];
        this.leaveSummaryList = [];
        this.leaveSummaryWithODPERList = [];
        this.leaverequestUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].leaverequestApi;
        this.leaveSummariesUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].leaveSummariesApi;
        this.applyLeaveUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].applyLeaveAPi;
        this.emailRejection = false;
        this.reasonRequired = false;
    }
    ngOnInit() {
        console.log(this.remarks);
        this.emailRejection = false;
        this.activatedRoute.queryParams.subscribe((params) => {
            this.empleaveRequestToken = params['leavetoken'];
        });
        debugger;
        if (this.empleaveRequestToken === undefined || this.empleaveRequestToken === null || this.empleaveRequestToken === '') {
            this.empleaveRequestId = localStorage.getItem("LeaveId");
            localStorage.removeItem("LeaveId");
            if (this.empleaveRequestId == undefined && this.empleaveRequestId == null) {
                this.router.navigateByUrl('user/approvals/leaveapprovals');
            }
            else {
                this.getLeaveObjectById();
            }
        }
        else {
            let leaveObj = {
                "leaveToken": this.empleaveRequestToken,
            };
            this.genericservice.post(this.leaverequestUrl, leaveObj, false).subscribe(response => {
                if (response.data) {
                    this.employeeLeaveMasterResponse = response.data;
                    this.emailRejection = true;
                    this.profileImage = this.employeeLeaveMasterResponse.profileImage;
                    let employeeObj = {
                        "gemsEmployeeMasterId": this.employeeLeaveMasterResponse.createdBy.gemsEmployeeMasterId
                    };
                    this.genericservice.post(this.leaveSummariesUrl, employeeObj, false).subscribe(leaveSummaryListData => {
                        this.leaveSummaryWithODPERList = leaveSummaryListData.data;
                        this.leaveSummaryWithODPERList.forEach(leaveSummary => {
                            if (leaveSummary !== null && (leaveSummary.gemsLeaveTypeMaster.leaveTypeCode !== 'OD'
                                && leaveSummary.gemsLeaveTypeMaster.leaveTypeCode !== 'PER')) {
                                this.leaveSummaryList.push(leaveSummary);
                            }
                        });
                    });
                }
            }), error => {
                this.router.navigateByUrl('user/approvals/leaveapprovals');
                //Redirecting to leave request page
            };
        }
        this.leaveDetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    getLeaveObjectById() {
        this.emailRejection = false;
        let empLeaveObj = {
            "gemsEmployeeLeaveMasterId": this.empleaveRequestId
        };
        this.genericservice.post(this.leaverequestUrl, empLeaveObj, false).subscribe(response => {
            this.employeeLeaveMasterResponse = response.data;
            //
            this.profileImage = this.employeeLeaveMasterResponse.profileImage;
            let employeeObj = {
                "gemsEmployeeMasterId": this.employeeLeaveMasterResponse.createdBy.gemsEmployeeMasterId
            };
            this.genericservice.post(this.leaveSummariesUrl, employeeObj, false).subscribe(leaveSummaryListData => {
                this.leaveSummaryWithODPERList = leaveSummaryListData.data;
                this.leaveSummaryWithODPERList.forEach(leaveSummary => {
                    if (leaveSummary !== null && (leaveSummary.gemsLeaveTypeMaster.leaveTypeCode !== 'OD'
                        && leaveSummary.gemsLeaveTypeMaster.leaveTypeCode !== 'PER')) {
                        this.leaveSummaryList.push(leaveSummary);
                    }
                });
            });
        }), error => {
            this.router.navigateByUrl('user/approvals/leaveapprovals');
            //Redirecting to leave request page
        };
    }
    //Apporove the leave
    approveLeaveRequest(gemsLeaveObj) {
        gemsLeaveObj.status = "APPROVED";
        gemsLeaveObj.isFlag = true;
        gemsLeaveObj.remarks = this.remarks;
        gemsLeaveObj.updatedBy = this.encryptdecryptlocalstorage.getLocalStorage("employeeId");
        this.EmployeeLeaveHistory = gemsLeaveObj;
        this.EmployeeLeaveHistory.updatedOn = new Date();
        this.genericservice.post(this.applyLeaveUrl, this.EmployeeLeaveHistory, false).subscribe(LeaveStatusData => {
            this.router.navigateByUrl('user/approvals/leaveapprovals');
        });
    }
    // Hold the leave
    holdLeaveRequest(gemsLeaveObj) {
        gemsLeaveObj.status = "ON HOLD";
        gemsLeaveObj.remarks = this.leaveDetailForm.controls['remarks'].value.trim();
        gemsLeaveObj.updatedBy = this.encryptdecryptlocalstorage.getLocalStorage("employeeId");
        this.EmployeeLeaveHistory = gemsLeaveObj;
        this.EmployeeLeaveHistory.updatedOn = new Date();
        this.genericservice.post(this.applyLeaveUrl, this.EmployeeLeaveHistory, false).subscribe(LeaveStatusData => {
            this.router.navigateByUrl('user/approvals/leaveapprovals');
        });
    }
    // Reject the  Leave
    rejectLeaveRequest(gemsLeaveObj) {
        gemsLeaveObj.status = "REJECTED";
        if (gemsLeaveObj.isFlag) {
            gemsLeaveObj.isFlag = true;
        }
        else {
            gemsLeaveObj.isFlag = false;
        }
        // gemsLeaveObj.remarks = this.leaveDetailForm.controls['remarks'].value.trim();
        gemsLeaveObj.remarks = this.remarks;
        gemsLeaveObj.updatedBy = this.encryptdecryptlocalstorage.getLocalStorage("employeeId");
        this.EmployeeLeaveHistory = gemsLeaveObj;
        this.EmployeeLeaveHistory.updatedOn = new Date();
        this.genericservice.post(this.applyLeaveUrl, this.EmployeeLeaveHistory, false).subscribe(LeaveStatusData => {
            this.router.navigateByUrl('user/approvals/leaveapprovals');
        });
    }
    pendingHoldLeave(gemsLeaveRequest) {
        var fromDate = new Date(gemsLeaveRequest.fromDate);
        var fromDateValue = fromDate.getFullYear() + "-" + (fromDate.getMonth() + 1) + "-" + fromDate.getDate();
        //console.log(new Date(fromDateValue).getTime() < new Date().getTime());
        //console.log(leaveRecord.status);
        if (gemsLeaveRequest.status == 'PENDING' && (new Date(fromDateValue).getTime() > new Date().getTime())) {
            return true;
        }
    }
    approvedLeaveReject(gemsLeaveRequest) {
        var fromDate = new Date(gemsLeaveRequest.fromDate);
        var fromDateValue = fromDate.getFullYear() + "-" + (fromDate.getMonth() + 1) + "-" + fromDate.getDate();
        if (gemsLeaveRequest.status == 'APPROVED' && (new Date(fromDateValue) > new Date())) {
            return true;
        }
    }
    approveRejectLeaveReason(gemsLeaveRequest) {
        var fromDate = new Date(gemsLeaveRequest.fromDate);
        var fromDateValue = fromDate.getFullYear() + "-" + (fromDate.getMonth() + 1) + "-" + fromDate.getDate();
        if (gemsLeaveRequest.status == 'APPROVED' && (new Date(fromDateValue).getTime() > new Date().getTime())) {
            return true;
        }
    }
    rejectinvalid() {
        this.leaveDetailForm.invalid;
    }
    onKeyPress(event) {
        console.log(event.target.value);
        if (event.target.value.trim() === "") {
            this.reasonRequired = true;
        }
        else {
            this.reasonRequired = false;
        }
    }
}


/***/ }),

/***/ "./src/app/user-module/approvals/leaveapprovals/leaveapprovals.component.ngfactory.js":
/*!********************************************************************************************!*\
  !*** ./src/app/user-module/approvals/leaveapprovals/leaveapprovals.component.ngfactory.js ***!
  \********************************************************************************************/
/*! exports provided: RenderType_LeaveapprovalsComponent, View_LeaveapprovalsComponent_0, View_LeaveapprovalsComponent_Host_0, LeaveapprovalsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LeaveapprovalsComponent", function() { return RenderType_LeaveapprovalsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LeaveapprovalsComponent_0", function() { return View_LeaveapprovalsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LeaveapprovalsComponent_Host_0", function() { return View_LeaveapprovalsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveapprovalsComponentNgFactory", function() { return LeaveapprovalsComponentNgFactory; });
/* harmony import */ var _leaveapprovals_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaveapprovals.component.scss.shim.ngstyle */ "./src/app/user-module/approvals/leaveapprovals/leaveapprovals.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chutti-pagination/chutti-pagination.component.ngfactory */ "./src/app/user-module/chutti-pagination/chutti-pagination.component.ngfactory.js");
/* harmony import */ var _chutti_pagination_chutti_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chutti-pagination/chutti-pagination.component */ "./src/app/user-module/chutti-pagination/chutti-pagination.component.ts");
/* harmony import */ var _leaveapprovals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaveapprovals.component */ "./src/app/user-module/approvals/leaveapprovals/leaveapprovals.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/urlConstant */ "./src/app/services/urlConstant.ts");
/* harmony import */ var _services_genericservices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/genericservices */ "./src/app/services/genericservices.ts");
/* harmony import */ var _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/encrypt-decrypt-localstorage.service */ "./src/app/services/encrypt-decrypt-localstorage.service.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm2015/ngx-loading-bar-core.js");
/* harmony import */ var _services_dataSharing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/dataSharing.service */ "./src/app/services/dataSharing.service.ts");
/* harmony import */ var _services_commonMethodService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/commonMethodService */ "./src/app/services/commonMethodService.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_LeaveapprovalsComponent = [_leaveapprovals_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LeaveapprovalsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LeaveapprovalsComponent, data: {} });

function View_LeaveapprovalsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "loader"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, ":svg:svg", [["class", "spinner"], ["height", "65px"], ["viewBox", "0 0 66 66"], ["width", "65px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, ":svg:circle", [["class", "path"], ["cx", "33"], ["cy", "33"], ["fill", "none"], ["r", "30"], ["stroke-linecap", "round"], ["stroke-width", "6"]], null, null, null, null, null))], null, null); }
function View_LeaveapprovalsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["class", "rounded-circle  empimage"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = (_v.parent.context.$implicit.profileImgData ? ("data:image/jpg;base64," + _v.parent.context.$implicit.profileImgData) : "https://www.w3schools.com/howto/img_avatar.png"); _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveapprovalsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "user_img4 bg__neptune "], ["placement", "top"], ["triggers", "mouseenter:mouseleave"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", "", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.employeeLastName.charAt(0); var currVal_1 = _v.parent.context.$implicit.employeeFirstName.charAt(0); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_LeaveapprovalsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [["class", "col-md-2"], ["data-th", "Reason"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.viewLeavePage(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.reason; _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveapprovalsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "td", [["class", "col-md-2"], ["data-th", "Reason"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.viewLeavePage(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Not Feeling well"]))], null, null); }
function View_LeaveapprovalsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "leave_approved text-capitalize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveapprovalsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "leave_pending text-capitalize"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", ".. "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveapprovalsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "leave_notApproved text-capitalize td-rejected"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveapprovalsComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "leave_notApproved text-capitalize td-onhold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.status)); _ck(_v, 1, 0, currVal_0); }); }
function View_LeaveapprovalsComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "icon_tick approved mr-3"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.leaverequest(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_LeaveapprovalsComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "icon_cancel mr-3 rejected"], ["data-target", "#reason__popup"], ["data-toggle", "modal"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.reject(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_LeaveapprovalsComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "span", [["class", "icon_cancel mr-3 rejected"], ["data-target", "#reason__popup"], ["data-toggle", "modal"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.reject(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_LeaveapprovalsComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "td", [["class", "col-md-2"], ["data-th", "Actions"]], null, null, null, null, null))], null, null); }
function View_LeaveapprovalsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 39, "tr", [["class", "fix-tr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "td", [["class", "col-md-2"], ["data-th", "Employee"], ["scope", "row"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.viewLeavePage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [["class", "nameImg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "td", [["class", "col-md-2"], ["data-th", "From"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.viewLeavePage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "td", [["class", "col-md-1"], ["data-th", "From"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.viewLeavePage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "td", [["class", "col-md-1"], ["data-th", "To"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.viewLeavePage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "td", [["class", "col-md-1"], ["data-th", "Duration"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.viewLeavePage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 8, "td", [["class", "col-md-1"], ["data-th", "Status"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.viewLeavePage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 6, "td", [["class", "col-md-2"], ["data-th", "Actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_v.context.$implicit.profileImgData != null) && (_v.context.$implicit.profileImgData != undefined)); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_v.context.$implicit.profileImgData == null) || (_v.context.$implicit.profileImgData == undefined)); _ck(_v, 5, 0, currVal_1); var currVal_7 = (_v.context.$implicit.reason != null); _ck(_v, 19, 0, currVal_7); var currVal_8 = (_v.context.$implicit.reason == null); _ck(_v, 21, 0, currVal_8); var currVal_9 = (_v.context.$implicit.status == "APPROVED"); _ck(_v, 24, 0, currVal_9); var currVal_10 = (_v.context.$implicit.status == "PENDING"); _ck(_v, 26, 0, currVal_10); var currVal_11 = (_v.context.$implicit.status == "REJECTED"); _ck(_v, 28, 0, currVal_11); var currVal_12 = (_v.context.$implicit.status == "ONHOLD"); _ck(_v, 30, 0, currVal_12); var currVal_13 = ((_v.context.$implicit.status == "ONHOLD") || (_v.context.$implicit.status == "PENDING")); _ck(_v, 33, 0, currVal_13); var currVal_14 = _co.approvedLeaveReject(_v.context.$implicit); _ck(_v, 35, 0, currVal_14); var currVal_15 = ((_v.context.$implicit.status == "ONHOLD") || (_v.context.$implicit.status == "PENDING")); _ck(_v, 37, 0, currVal_15); var currVal_16 = _co.displayHide; _ck(_v, 39, 0, currVal_16); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.employeeFirstName; _ck(_v, 7, 0, currVal_2); var currVal_3 = _v.context.$implicit.leaveTypeDescription; _ck(_v, 9, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.fromDate, "dd MMM yy")); _ck(_v, 11, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.toDate, "dd MMM yy")); _ck(_v, 14, 0, currVal_5); var currVal_6 = _v.context.$implicit.permissionDuration; _ck(_v, 17, 0, currVal_6); }); }
function View_LeaveapprovalsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tbody", [["class", "leave__table--body scroll"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.leavestausList; _ck(_v, 2, 0, currVal_0); }, null); }
function View_LeaveapprovalsComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "text-center w-100 py-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Records Found!"]))], null, null); }
function View_LeaveapprovalsComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", " "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.value; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.value; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.label; _ck(_v, 3, 0, currVal_2); }); }
function View_LeaveapprovalsComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "table__bottom text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "span", [["class", "items__nos"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "form-group page__section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [["for", "pageNo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Items per page:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 7, "select", [["class", "form-control"], ["id", "pageNo"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
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
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "app-chutti-pagination", [], null, [[null, "goPrev"], [null, "goNext"], [null, "onPage"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("goPrev" === en)) {
        var pd_0 = (_co.goToPrev() !== false);
        ad = (pd_0 && ad);
    } if (("goNext" === en)) {
        var pd_1 = (_co.goToNext() !== false);
        ad = (pd_1 && ad);
    } if (("onPage" === en)) {
        var pd_2 = (_co.goToPageNo($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ChuttiPaginationComponent_0"], _chutti_pagination_chutti_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ChuttiPaginationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, _chutti_pagination_chutti_pagination_component__WEBPACK_IMPORTED_MODULE_5__["ChuttiPaginationComponent"], [], { currentPage: [0, "currentPage"], count: [1, "count"], pagesToShow: [2, "pagesToShow"] }, { goPrev: "goPrev", goNext: "goNext" })], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.selectedItemsPerPage; _ck(_v, 8, 0, currVal_7); var currVal_8 = _co.perpageOption; _ck(_v, 12, 0, currVal_8); var currVal_9 = _co.currentPage; var currVal_10 = _co.totalCount; var currVal_11 = _co.totalPages; _ck(_v, 14, 0, currVal_9, currVal_10, currVal_11); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_LeaveapprovalsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 29, "div", [["class", "white__border inner__section leave__status rounded leave-Aprovals"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Leave Approvals"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 24, "div", [["class", "leave__table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 20, "table", [["class", "table table-fixed rwd-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 17, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 16, "tr", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "th", [["class", "col-md-2"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Employee"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "th", [["class", "col-md-2"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "th", [["class", "pl-0 col-md-1"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["From"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "th", [["class", "pl-0 col-md-1"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["To"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "th", [["class", "pl-0 col-md-1"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Duration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "th", [["class", "pl-0 col-md-2"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reason"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "th", [["class", "pl-0 col-md-1"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "th", [["class", "pl-0 col-md-2"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Actions"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LeaveapprovalsComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 25, "div", [["aria-hidden", "true"], ["aria-labelledby", "exampleModalLabel"], ["class", "modal fade"], ["id", "reason__popup"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 24, "div", [["class", "modal-dialog leave__reject"], ["role", "document"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 23, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 22, "div", [["class", "modal-body "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 21, "form", [["class", "support__request"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 16, "div", [["class", "col-md-12 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Reason for Rejection"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 8, "div", [["class", "form-group leave__reject--msg mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 7, "input", [["class", "form-control"], ["formControlName", "reason"], ["placeholder", "Reason"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 4, "div", [["class", "bottom__btn mt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 1, "button", [["class", "btn btn-primary cancel"], ["data-dismiss", "modal"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "button", [["class", "btn btn-primary submit"], ["data-dismiss", "modal"], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.leaverejected(_co.leaveObject) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Submit"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.preloader; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.isData; _ck(_v, 29, 0, currVal_1); var currVal_2 = !_co.isData; _ck(_v, 31, 0, currVal_2); var currVal_3 = (_co.isData && (_co.totalCount > 10)); _ck(_v, 33, 0, currVal_3); var currVal_11 = _co.rejectionform; _ck(_v, 40, 0, currVal_11); var currVal_20 = ""; _ck(_v, 49, 0, currVal_20); var currVal_21 = "reason"; _ck(_v, 52, 0, currVal_21); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassUntouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassTouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassPristine; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassDirty; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassValid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassInvalid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassPending; _ck(_v, 38, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).required ? "" : null); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassUntouched; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassTouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassPristine; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassDirty; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassValid; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassInvalid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassPending; _ck(_v, 47, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_22 = _co.rejectionform.invalid; _ck(_v, 58, 0, currVal_22); }); }
function View_LeaveapprovalsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-leaveapprovals", [], null, null, null, View_LeaveapprovalsComponent_0, RenderType_LeaveapprovalsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _leaveapprovals_component__WEBPACK_IMPORTED_MODULE_6__["LeaveapprovalsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_urlConstant__WEBPACK_IMPORTED_MODULE_8__["UrlConstant"], _services_genericservices__WEBPACK_IMPORTED_MODULE_9__["Genericservice"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_encrypt_decrypt_localstorage_service__WEBPACK_IMPORTED_MODULE_10__["EncryptDecryptLocalStorageService"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_11__["LoadingBarService"], _services_dataSharing_service__WEBPACK_IMPORTED_MODULE_12__["DataSharingService"], _services_commonMethodService__WEBPACK_IMPORTED_MODULE_13__["commonService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LeaveapprovalsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-leaveapprovals", _leaveapprovals_component__WEBPACK_IMPORTED_MODULE_6__["LeaveapprovalsComponent"], View_LeaveapprovalsComponent_Host_0, { dashBoardPaginationView: "dashBoardPaginationView", showdashwhoseonleavepagination: "showdashwhoseonleavepagination" }, {}, []);



/***/ }),

/***/ "./src/app/user-module/approvals/leaveapprovals/leaveapprovals.component.scss.shim.ngstyle.js":
/*!****************************************************************************************************!*\
  !*** ./src/app/user-module/approvals/leaveapprovals/leaveapprovals.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************************/
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
var styles = ["@charset \"UTF-8\";\n[class^=icon_][_ngcontent-%COMP%], [class*=\" icon_\"][_ngcontent-%COMP%] {\n  font-family: \"chutti\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[class^=icon1-][_ngcontent-%COMP%], [class*=\" icon1-\"][_ngcontent-%COMP%] {\n  \n  font-family: \"icomoon\" !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  \n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon_dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE100\";\n}\n.icon_leave[_ngcontent-%COMP%]:before {\n  content: \"\uE101\";\n}\n.icon_attendance[_ngcontent-%COMP%]:before {\n  content: \"\uE102\";\n}\n.icon_timesheet[_ngcontent-%COMP%]:before {\n  content: \"\uE103\";\n}\n.icon_attendance1[_ngcontent-%COMP%]:before {\n  content: \"\uE104\";\n}\n.icon_support[_ngcontent-%COMP%]:before {\n  content: \"\uE105\";\n}\n.icon_quick_apply[_ngcontent-%COMP%]:before {\n  content: \"\uE106\";\n}\n.icon_leave_bank[_ngcontent-%COMP%]:before {\n  content: \"\uE107\";\n}\n.icon_collapse[_ngcontent-%COMP%]:before {\n  content: \"\uE108\";\n}\n.icon_expand[_ngcontent-%COMP%]:before {\n  content: \"\uE109\";\n}\n.icon_filter[_ngcontent-%COMP%]:before {\n  content: \"\uE10A\";\n}\n.icon_date_picker[_ngcontent-%COMP%]:before {\n  content: \"\uE10B\";\n}\n.icon_arrow_thick_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10C\";\n}\n.icon_arrow_thick_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10D\";\n}\n.icon_arrow_thin_left[_ngcontent-%COMP%]:before {\n  content: \"\uE10E\";\n}\n.icon_arrow_thin_right[_ngcontent-%COMP%]:before {\n  content: \"\uE10F\";\n}\n.icon_hold[_ngcontent-%COMP%]:before {\n  content: \"\uE110\";\n}\n.icon_cancel[_ngcontent-%COMP%]:before {\n  content: \"\uE111\";\n}\n.icon_tick[_ngcontent-%COMP%]:before {\n  content: \"\uE112\";\n}\n.icon_lock[_ngcontent-%COMP%]:before {\n  content: \"\uE113\";\n}\n.icon_edit_outline[_ngcontent-%COMP%]:before {\n  content: \"\uE114\";\n}\n.icon_edit_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE115\";\n}\n.icon_delete_filled[_ngcontent-%COMP%]:before {\n  content: \"\uE116\";\n}\n.icon_search[_ngcontent-%COMP%]:before {\n  content: \"\uE117\";\n}\n.icon_notifications[_ngcontent-%COMP%]:before {\n  content: \"\uE118\";\n}\n.icon_time[_ngcontent-%COMP%]:before {\n  content: \"\uE119\";\n}\n.icon_date_time[_ngcontent-%COMP%]:before {\n  content: \"\uE11A\";\n}\n.icon_probation[_ngcontent-%COMP%]:before {\n  content: \"\uE11B\";\n}\n.icon_confirmed[_ngcontent-%COMP%]:before {\n  content: \"\uE11C\";\n}\n.icon_holidays[_ngcontent-%COMP%]:before {\n  content: \"\uE11D\";\n}\n.icon_priority_urgent[_ngcontent-%COMP%]:before {\n  content: \"\uE11E\";\n}\n.icon_arrow_up[_ngcontent-%COMP%]:before {\n  content: \"\uE11F\";\n}\n.icon_arrow_down[_ngcontent-%COMP%]:before {\n  content: \"\uE120\";\n}\n.icon_show_password[_ngcontent-%COMP%]:before {\n  content: \"\uE121\";\n}\n.icon_hide_password[_ngcontent-%COMP%]:before {\n  content: \"\uE122\";\n}\n.icon_name[_ngcontent-%COMP%]:before {\n  content: \"\uE123\";\n}\n.icon_organisation[_ngcontent-%COMP%]:before {\n  content: \"\uE124\";\n}\n.icon_phone[_ngcontent-%COMP%]:before {\n  content: \"\uE125\";\n}\n.icon_email[_ngcontent-%COMP%]:before {\n  content: \"\uE126\";\n}\n.icon_password[_ngcontent-%COMP%]:before {\n  content: \"\uE127\";\n}\n.icon_add[_ngcontent-%COMP%]:before {\n  content: \"\uE128\";\n}\n.icon_sign_out[_ngcontent-%COMP%]:before {\n  content: \"\uE129\";\n}\n.icon_profile[_ngcontent-%COMP%]:before {\n  content: \"\uE12A\";\n}\n.icon_warning[_ngcontent-%COMP%]:before {\n  content: \"\uE12B\";\n}\n.icon_camera[_ngcontent-%COMP%]:before {\n  content: \"\uE12C\";\n}\n.icon1-upload-to-cloud[_ngcontent-%COMP%]:before {\n  content: \"\uE900\";\n}\n.icon1-cloud-computing[_ngcontent-%COMP%]:before {\n  content: \"\uE901\";\n}\n.icon1-dashboard[_ngcontent-%COMP%]:before {\n  content: \"\uE902\";\n}\n.icon1-filter-results[_ngcontent-%COMP%]:before {\n  content: \"\uE903\";\n}\n.icon1-building[_ngcontent-%COMP%]:before {\n  content: \"\uE904\";\n}\n.icon1-noun_Calendar[_ngcontent-%COMP%]:before {\n  content: \"\uE905\";\n}\n.icon1-noun_Project[_ngcontent-%COMP%]:before {\n  content: \"\uE906\";\n}\n.icon1-noun_Upload[_ngcontent-%COMP%]:before {\n  content: \"\uE907\";\n}\n.icon1-noun_users[_ngcontent-%COMP%]:before {\n  content: \"\uE908\";\n}\n.icon1-noun_Work[_ngcontent-%COMP%]:before {\n  content: \"\uE909\";\n}\n.icon1-Path[_ngcontent-%COMP%]:before {\n  content: \"\uE90A\";\n}\n.leave-Aprovals[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]::before {\n  content: \"\uE101\";\n}\n.leave-Aprovals[_ngcontent-%COMP%]   .empimage[_ngcontent-%COMP%] {\n  height: 26px;\n  width: 26px;\n  margin-right: 7px;\n}\n.leave-Aprovals[_ngcontent-%COMP%]   .onhold[_ngcontent-%COMP%] {\n  color: #FFA500;\n  font-size: 15px;\n}\n.leave-Aprovals[_ngcontent-%COMP%]   .rejected[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 15px;\n}\n.leave-Aprovals[_ngcontent-%COMP%]   .approved[_ngcontent-%COMP%] {\n  color: #6747D4;\n  font-size: 15px;\n}\n.leave-Aprovals[_ngcontent-%COMP%]   .td-onhold[_ngcontent-%COMP%] {\n  color: #FFA500;\n}\n.leave__reject[_ngcontent-%COMP%] {\n  max-width: 430px;\n}\n.leave__reject--msg[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-size: 1em;\n  border-top: none;\n  border-right: none;\n  border-left: none;\n  border-bottom: 2px solid #b8b5b5;\n  padding-left: 0;\n  border-radius: 0;\n  color: #000000 !important;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.bottom__btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 0;\n  cursor: pointer;\n}\n.leave__status[_ngcontent-%COMP%] {\n  height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tb2R1bGUvYXBwcm92YWxzL2xlYXZlYXBwcm92YWxzL2xlYXZlYXBwcm92YWxzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcmVudWdhL0Rlc2t0b3AvVlNDLXdvcmtzcGFjZS9Bbmd1bGFyIFdvcmtzcGFjZS9jbG91ZG5vdy1jaHV0dGktd2ViL3NyYy9hcHAvdXNlci1tb2R1bGUvYXBwcm92YWxzL2xlYXZlYXBwcm92YWxzL2xlYXZlYXBwcm92YWxzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcmVudWdhL0Rlc2t0b3AvVlNDLXdvcmtzcGFjZS9Bbmd1bGFyIFdvcmtzcGFjZS9jbG91ZG5vdy1jaHV0dGktd2ViL3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ3FCaEI7O0VBRUUsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBRG5CRjtBQ3FCQTtFQUNFLCtFQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBRUEsc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FEbkJGO0FDb0VFO0VBQXVCLFlBQUE7QURoRXpCO0FDZ0V5QztFQUFtQixZQUFBO0FENUQ1RDtBQzRENEU7RUFBd0IsWUFBQTtBRHhEcEc7QUN3RG9IO0VBQXVCLFlBQUE7QURwRDNJO0FDb0QySjtFQUF5QixZQUFBO0FEaERwTDtBQ2dEb007RUFBcUIsWUFBQTtBRDVDek47QUM0Q3lPO0VBQXlCLFlBQUE7QUR4Q2xRO0FDd0NrUjtFQUF3QixZQUFBO0FEcEMxUztBQ29DMFQ7RUFBc0IsWUFBQTtBRGhDaFY7QUNnQ2dXO0VBQW9CLFlBQUE7QUQ1QnBYO0FDNEJvWTtFQUFvQixZQUFBO0FEeEJ4WjtBQ3dCd2E7RUFBeUIsWUFBQTtBRHBCamM7QUNvQmlkO0VBQThCLFlBQUE7QURoQi9lO0FDZ0IrZjtFQUErQixZQUFBO0FEWjloQjtBQ1k4aUI7RUFBNkIsWUFBQTtBRFIza0I7QUNRMmxCO0VBQThCLFlBQUE7QURKem5CO0FDSXlvQjtFQUFrQixZQUFBO0FEQTNwQjtBQ0EycUI7RUFBb0IsWUFBQTtBREkvckI7QUNKK3NCO0VBQWtCLFlBQUE7QURRanVCO0FDUml2QjtFQUFrQixZQUFBO0FEWW53QjtBQ1pteEI7RUFBMEIsWUFBQTtBRGdCN3lCO0FDaEI2ekI7RUFBeUIsWUFBQTtBRG9CdDFCO0FDcEJzMkI7RUFBMkIsWUFBQTtBRHdCajRCO0FDeEJpNUI7RUFBb0IsWUFBQTtBRDRCcjZCO0FDNUJxN0I7RUFBMkIsWUFBQTtBRGdDaDlCO0FDaENnK0I7RUFBa0IsWUFBQTtBRG9DbC9CO0FDcENrZ0M7RUFBdUIsWUFBQTtBRHdDemhDO0FDeEN5aUM7RUFBdUIsWUFBQTtBRDRDaGtDO0FDNUNnbEM7RUFBdUIsWUFBQTtBRGdEdm1DO0FDaER1bkM7RUFBc0IsWUFBQTtBRG9EN29DO0FDcEQ2cEM7RUFBNkIsWUFBQTtBRHdEMXJDO0FDeEQwc0M7RUFBc0IsWUFBQTtBRDREaHVDO0FDNURndkM7RUFBd0IsWUFBQTtBRGdFeHdDO0FDaEV3eEM7RUFBMkIsWUFBQTtBRG9FbnpDO0FDcEVtMEM7RUFBMkIsWUFBQTtBRHdFOTFDO0FDeEU4MkM7RUFBa0IsWUFBQTtBRDRFaDRDO0FDNUVnNUM7RUFBMEIsWUFBQTtBRGdGMTZDO0FDaEYwN0M7RUFBbUIsWUFBQTtBRG9GNzhDO0FDcEY2OUM7RUFBbUIsWUFBQTtBRHdGaC9DO0FDeEZnZ0Q7RUFBc0IsWUFBQTtBRDRGdGhEO0FDNUZzaUQ7RUFBaUIsWUFBQTtBRGdHdmpEO0FDaEd1a0Q7RUFBc0IsWUFBQTtBRG9HN2xEO0FDcEc2bUQ7RUFBcUIsWUFBQTtBRHdHbG9EO0FDeEdrcEQ7RUFBcUIsWUFBQTtBRDRHdnFEO0FDNUd1ckQ7RUFBb0IsWUFBQTtBRGdIM3NEO0FDOUdFO0VBQ0UsWUFBQTtBRGlISjtBQy9HRTtFQUNFLFlBQUE7QURrSEo7QUNoSEU7RUFDRSxZQUFBO0FEbUhKO0FDakhFO0VBQ0UsWUFBQTtBRG9ISjtBQ2xIRTtFQUNFLFlBQUE7QURxSEo7QUNuSEU7RUFDRSxZQUFBO0FEc0hKO0FDcEhFO0VBQ0UsWUFBQTtBRHVISjtBQ3JIRTtFQUNFLFlBQUE7QUR3SEo7QUN0SEU7RUFDRSxZQUFBO0FEeUhKO0FDdkhFO0VBQ0UsWUFBQTtBRDBISjtBQ3hIRTtFQUNFLFlBQUE7QUQySEo7QUVsUFE7RUFFSSxZQUFBO0FGb1BaO0FFaFBJO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRmlQUjtBRS9PSTtFQUVJLGNBQUE7RUFDQSxlQUFBO0FGZ1BSO0FFOU9JO0VBRUksVUFBQTtFQUNBLGVBQUE7QUYrT1I7QUU3T0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBRitPUjtBRTdPSTtFQUVJLGNBQUE7QUY4T1I7QUV0T0E7RUFFSSxnQkFBQTtBRnVPSjtBRW5PSTtFQUVJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FGcU9SO0FFbE9BO0VBRUksOEJBQUE7QUZvT0o7QUVsT0E7RUFFSSxlQUFBO0FGb09KO0FFak9JO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0FGbU9SO0FFaE9BO0VBRUksZUFBQTtBRmtPSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbW9kdWxlL2FwcHJvdmFscy9sZWF2ZWFwcHJvdmFscy9sZWF2ZWFwcHJvdmFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbltjbGFzc149aWNvbl9dLFxuW2NsYXNzKj1cIiBpY29uX1wiXSB7XG4gIGZvbnQtZmFtaWx5OiBcImNodXR0aVwiICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3NePWljb24xLV0sIFtjbGFzcyo9XCIgaWNvbjEtXCJdIHtcbiAgLyogdXNlICFpbXBvcnRhbnQgdG8gcHJldmVudCBpc3N1ZXMgd2l0aCBicm93c2VyIGV4dGVuc2lvbnMgdGhhdCBjaGFuZ2UgZm9udHMgKi9cbiAgZm9udC1mYW1pbHk6IFwiaWNvbW9vblwiICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmljb25fZGFzaGJvYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSAXCI7XG59XG5cbi5pY29uX2xlYXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSBXCI7XG59XG5cbi5pY29uX2F0dGVuZGFuY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIJcIjtcbn1cblxuLmljb25fdGltZXNoZWV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSDXCI7XG59XG5cbi5pY29uX2F0dGVuZGFuY2UxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSEXCI7XG59XG5cbi5pY29uX3N1cHBvcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIVcIjtcbn1cblxuLmljb25fcXVpY2tfYXBwbHk6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIZcIjtcbn1cblxuLmljb25fbGVhdmVfYmFuazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Eh1wiO1xufVxuXG4uaWNvbl9jb2xsYXBzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EiFwiO1xufVxuXG4uaWNvbl9leHBhbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIlcIjtcbn1cblxuLmljb25fZmlsdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSKXCI7XG59XG5cbi5pY29uX2RhdGVfcGlja2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSLXCI7XG59XG5cbi5pY29uX2Fycm93X3RoaWNrX2xlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhIxcIjtcbn1cblxuLmljb25fYXJyb3dfdGhpY2tfcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhI1cIjtcbn1cblxuLmljb25fYXJyb3dfdGhpbl9sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSOXCI7XG59XG5cbi5pY29uX2Fycm93X3RoaW5fcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhI9cIjtcbn1cblxuLmljb25faG9sZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EkFwiO1xufVxuXG4uaWNvbl9jYW5jZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJFcIjtcbn1cblxuLmljb25fdGljazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EklwiO1xufVxuXG4uaWNvbl9sb2NrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSTXCI7XG59XG5cbi5pY29uX2VkaXRfb3V0bGluZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ElFwiO1xufVxuXG4uaWNvbl9lZGl0X2ZpbGxlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ElVwiO1xufVxuXG4uaWNvbl9kZWxldGVfZmlsbGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSWXCI7XG59XG5cbi5pY29uX3NlYXJjaDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6El1wiO1xufVxuXG4uaWNvbl9ub3RpZmljYXRpb25zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSYXCI7XG59XG5cbi5pY29uX3RpbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJlcIjtcbn1cblxuLmljb25fZGF0ZV90aW1lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSaXCI7XG59XG5cbi5pY29uX3Byb2JhdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Em1wiO1xufVxuXG4uaWNvbl9jb25maXJtZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJxcIjtcbn1cblxuLmljb25faG9saWRheXM6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhJ1cIjtcbn1cblxuLmljb25fcHJpb3JpdHlfdXJnZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSeXCI7XG59XG5cbi5pY29uX2Fycm93X3VwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSfXCI7XG59XG5cbi5pY29uX2Fycm93X2Rvd246YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKBcIjtcbn1cblxuLmljb25fc2hvd19wYXNzd29yZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EoVwiO1xufVxuXG4uaWNvbl9oaWRlX3Bhc3N3b3JkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSiXCI7XG59XG5cbi5pY29uX25hbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKNcIjtcbn1cblxuLmljb25fb3JnYW5pc2F0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSkXCI7XG59XG5cbi5pY29uX3Bob25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSlXCI7XG59XG5cbi5pY29uX2VtYWlsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSmXCI7XG59XG5cbi5pY29uX3Bhc3N3b3JkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSnXCI7XG59XG5cbi5pY29uX2FkZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EqFwiO1xufVxuXG4uaWNvbl9zaWduX291dDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6EqVwiO1xufVxuXG4uaWNvbl9wcm9maWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSqXCI7XG59XG5cbi5pY29uX3dhcm5pbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCLuhKtcIjtcbn1cblxuLmljb25fY2FtZXJhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSsXCI7XG59XG5cbi5pY29uMS11cGxvYWQtdG8tY2xvdWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIBcIjtcbn1cblxuLmljb24xLWNsb3VkLWNvbXB1dGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kgVwiO1xufVxuXG4uaWNvbjEtZGFzaGJvYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSCXCI7XG59XG5cbi5pY29uMS1maWx0ZXItcmVzdWx0czpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kg1wiO1xufVxuXG4uaWNvbjEtYnVpbGRpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIRcIjtcbn1cblxuLmljb24xLW5vdW5fQ2FsZW5kYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIVcIjtcbn1cblxuLmljb24xLW5vdW5fUHJvamVjdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6khlwiO1xufVxuXG4uaWNvbjEtbm91bl9VcGxvYWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIdcIjtcbn1cblxuLmljb24xLW5vdW5fdXNlcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCLupIhcIjtcbn1cblxuLmljb24xLW5vdW5fV29yazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kiVwiO1xufVxuXG4uaWNvbjEtUGF0aDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6kilwiO1xufVxuXG4ubGVhdmUtQXByb3ZhbHMgaDU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7oSBXCI7XG59XG4ubGVhdmUtQXByb3ZhbHMgLmVtcGltYWdlIHtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG4ubGVhdmUtQXByb3ZhbHMgLm9uaG9sZCB7XG4gIGNvbG9yOiAjRkZBNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubGVhdmUtQXByb3ZhbHMgLnJlamVjdGVkIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmxlYXZlLUFwcm92YWxzIC5hcHByb3ZlZCB7XG4gIGNvbG9yOiAjNjc0N0Q0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubGVhdmUtQXByb3ZhbHMgLnRkLW9uaG9sZCB7XG4gIGNvbG9yOiAjRkZBNTAwO1xufVxuLmxlYXZlX19yZWplY3Qge1xuICBtYXgtd2lkdGg6IDQzMHB4O1xufVxuXG4ubGVhdmVfX3JlamVjdC0tbXNnIC5mb3JtLWNvbnRyb2wge1xuICBmb250LXNpemU6IDFlbTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiOGI1YjU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuXG4uYm90dG9tX19idG4gLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxlYXZlX19zdGF0dXMge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59IiwiJHdoaXRlOiNmZmZmZmY7XG4kYm9yZGVyLWNvbG9yOiNERURFREU7XG4kYm9yZGVyLWxpZ2h0OiNFOEU4RTg7XG4kbGlnaHQtYmx1ZTojRjFGN0ZCO1xuJGRhcmtQaW5rOiM5QTQ1RDI7XG4kZGFya0JsdWU6IzY3NDdENDtcbiR0ZXh0LWNvbG9yOiM0MDQwNDA7XG4kcHJpbWFyeUNvbG9yOiM3MTUxREM7XG4kZ3JheTojNkU2RTZFO1xuJGJsYWNrOiMwMDAwMDA7XG4kZGFya1JlZDojRTMyQzJDO1xuJG9yYW5nZTojRkY2QzAwO1xuJGJyb3duOiNBQTM0N0I7XG4kYXJyb3dHcmF5OiM4NDg0ODQ7XG4kYmx1ZTogIzFjOTFmZjtcbiRyb3NlOiNGOTRGODk7XG4kbmVwdHVuZTojN0NBMUIxO1xuJHllbGxvdzojRTI4NjBEO1xuJGNvbG9yLWJhY2s6ICNlZmVmZWY7XG4kY29sb3ItYmFyOiAjNjc0N0Q0O1xuXG5bY2xhc3NePVwiaWNvbl9cIl0sXG5bY2xhc3MqPVwiIGljb25fXCJdIHtcbiAgZm9udC1mYW1pbHk6ICdjaHV0dGknICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuW2NsYXNzXj1cImljb24xLVwiXSwgW2NsYXNzKj1cIiBpY29uMS1cIl0ge1xuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICBmb250LWZhbWlseTogJ2ljb21vb24nICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5cbkBtaXhpbiBiZy1ncmFkaWVudCgpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsJGRhcmtQaW5rIDIwJSwgJGRhcmtCbHVlIDgwJSk7XG59XG5AbWl4aW4gdGhlbWUtYnRuKCl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya0JsdWUgMCUsICRkYXJrUGluayAxMDAlKTtcbn1cbkBtaXhpbiBiZy1ibGFjaygpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwkYmxhY2sgMCUsICMxMjEyMTMgMTAwJSk7XG59XG5AbWl4aW4gZm9udC1jb2xvcigpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCRkYXJrUGluayAyMCUsICRkYXJrQmx1ZSA4MCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEyMGRlZywkZGFya1BpbmsgMjAlLCAkZGFya0JsdWUgODAlKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7ICAgIFxuICB9XG4gIEBtaXhpbiAgYm9yZGVyLWJvdHRvbSgpIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogJGRhcmtCbHVlO1xuICAgIH1cbiAgfVxuXG5AbWl4aW4gdXNlckltZyAoKXtcblxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAuMTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuJWJ0bi1zaGFyZWQge1xuICAgIG1pbi1oZWlnaHQ6IDU1cHg7XG4gIH1cblxuICAuaWNvbl9kYXNoYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDBcIn0uaWNvbl9sZWF2ZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwMVwifS5pY29uX2F0dGVuZGFuY2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDJcIn0uaWNvbl90aW1lc2hlZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDNcIn0uaWNvbl9hdHRlbmRhbmNlMTpiZWZvcmV7Y29udGVudDpcIlxcZTEwNFwifS5pY29uX3N1cHBvcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDVcIn0uaWNvbl9xdWlja19hcHBseTpiZWZvcmV7Y29udGVudDpcIlxcZTEwNlwifS5pY29uX2xlYXZlX2Jhbms6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDdcIn0uaWNvbl9jb2xsYXBzZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwOFwifS5pY29uX2V4cGFuZDpiZWZvcmV7Y29udGVudDpcIlxcZTEwOVwifS5pY29uX2ZpbHRlcjpiZWZvcmV7Y29udGVudDpcIlxcZTEwYVwifS5pY29uX2RhdGVfcGlja2VyOmJlZm9yZXtjb250ZW50OlwiXFxlMTBiXCJ9Lmljb25fYXJyb3dfdGhpY2tfbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZTEwY1wifS5pY29uX2Fycm93X3RoaWNrX3JpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxlMTBkXCJ9Lmljb25fYXJyb3dfdGhpbl9sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxlMTBlXCJ9Lmljb25fYXJyb3dfdGhpbl9yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZTEwZlwifS5pY29uX2hvbGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTBcIn0uaWNvbl9jYW5jZWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTFcIn0uaWNvbl90aWNrOmJlZm9yZXtjb250ZW50OlwiXFxlMTEyXCJ9Lmljb25fbG9jazpiZWZvcmV7Y29udGVudDpcIlxcZTExM1wifS5pY29uX2VkaXRfb3V0bGluZTpiZWZvcmV7Y29udGVudDpcIlxcZTExNFwifS5pY29uX2VkaXRfZmlsbGVkOmJlZm9yZXtjb250ZW50OlwiXFxlMTE1XCJ9Lmljb25fZGVsZXRlX2ZpbGxlZDpiZWZvcmV7Y29udGVudDpcIlxcZTExNlwifS5pY29uX3NlYXJjaDpiZWZvcmV7Y29udGVudDpcIlxcZTExN1wifS5pY29uX25vdGlmaWNhdGlvbnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMThcIn0uaWNvbl90aW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTE5XCJ9Lmljb25fZGF0ZV90aW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMTFhXCJ9Lmljb25fcHJvYmF0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxlMTFiXCJ9Lmljb25fY29uZmlybWVkOmJlZm9yZXtjb250ZW50OlwiXFxlMTFjXCJ9Lmljb25faG9saWRheXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWRcIn0uaWNvbl9wcmlvcml0eV91cmdlbnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMWVcIn0uaWNvbl9hcnJvd191cDpiZWZvcmV7Y29udGVudDpcIlxcZTExZlwifS5pY29uX2Fycm93X2Rvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjBcIn0uaWNvbl9zaG93X3Bhc3N3b3JkOmJlZm9yZXtjb250ZW50OlwiXFxlMTIxXCJ9Lmljb25faGlkZV9wYXNzd29yZDpiZWZvcmV7Y29udGVudDpcIlxcZTEyMlwifS5pY29uX25hbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjNcIn0uaWNvbl9vcmdhbmlzYXRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjRcIn0uaWNvbl9waG9uZTpiZWZvcmV7Y29udGVudDpcIlxcZTEyNVwifS5pY29uX2VtYWlsOmJlZm9yZXtjb250ZW50OlwiXFxlMTI2XCJ9Lmljb25fcGFzc3dvcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjdcIn0uaWNvbl9hZGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjhcIn0uaWNvbl9zaWduX291dDpiZWZvcmV7Y29udGVudDpcIlxcZTEyOVwifS5pY29uX3Byb2ZpbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMmFcIn0uaWNvbl93YXJuaW5nOmJlZm9yZXtjb250ZW50OlwiXFxlMTJiXCJ9Lmljb25fY2FtZXJhOmJlZm9yZXtjb250ZW50OlwiXFxlMTJjXCJ9XG5cbiAgLmljb24xLXVwbG9hZC10by1jbG91ZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAwXCI7XG4gIH1cbiAgLmljb24xLWNsb3VkLWNvbXB1dGluZzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAxXCI7XG4gIH1cbiAgLmljb24xLWRhc2hib2FyZDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTAyXCI7XG4gIH1cbiAgLmljb24xLWZpbHRlci1yZXN1bHRzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDNcIjtcbiAgfVxuICAuaWNvbjEtYnVpbGRpbmc6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwNFwiO1xuICB9XG4gIC5pY29uMS1ub3VuX0NhbGVuZGFyOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDVcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9Qcm9qZWN0OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDZcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9VcGxvYWQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcZTkwN1wiO1xuICB9XG4gIC5pY29uMS1ub3VuX3VzZXJzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDhcIjtcbiAgfVxuICAuaWNvbjEtbm91bl9Xb3JrOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGU5MDlcIjtcbiAgfVxuICAuaWNvbjEtUGF0aDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTBhXCI7XG4gIH0iLCJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL21peGluLnNjc3MnO1xuXG4ubGVhdmUtQXByb3ZhbHNcbntcbiAgICBoNSBcbiAgICB7XG4gICAgICAgICY6OmJlZm9yZVxuICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZTEwMVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmVtcGltYWdlXG4gICAge1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICB9XG4gICAgLm9uaG9sZFxuICAgIHtcbiAgICAgICAgY29sb3I6IFx0I0ZGQTUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICAucmVqZWN0ZWRcbiAgICB7XG4gICAgICAgIGNvbG9yOiBcdHJlZDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICAuYXBwcm92ZWR7XG4gICAgICAgIGNvbG9yOiM2NzQ3RDQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgLnRkLW9uaG9sZFxuICAgIHtcbiAgICAgICAgY29sb3I6IFx0I0ZGQTUwMDtcblxuICAgIH1cbiAgICAudGQtcmVqZWN0ZWRcbiAgICB7XG4gICAgICAgIC8vIGNvbG9yOiBcdHJlZDtcbiAgICB9XG59XG4ubGVhdmVfX3JlamVjdCBcbntcbiAgICBtYXgtd2lkdGg6IDQzMHB4O1xufVxuLmxlYXZlX19yZWplY3QtLW1zZyBcbntcbiAgICAuZm9ybS1jb250cm9sIFxuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNiOGI1YjU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudCAgIDtcbiAgICB9XG59XG4ubW9kYWwtY29udGVudCBcbntcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtYm9keSBcbntcbiAgICBwYWRkaW5nOiAxLjVyZW07XG59XG4uYm90dG9tX19idG4ge1xuICAgIC5idG4gXG4gICAge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuLmxlYXZlX19zdGF0dXMgXG57XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4iXX0= */"];



/***/ }),

/***/ "./src/app/user-module/approvals/leaveapprovals/leaveapprovals.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/user-module/approvals/leaveapprovals/leaveapprovals.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LeaveapprovalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveapprovalsComponent", function() { return LeaveapprovalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/urlConstant */ "./src/app/services/urlConstant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




class LeaveapprovalsComponent {
    constructor(router, urlconstant, genericservice, route, encryptdecryptlocalstorage, loadingBar, dataSharingService, commonService) {
        this.router = router;
        this.urlconstant = urlconstant;
        this.genericservice = genericservice;
        this.route = route;
        this.encryptdecryptlocalstorage = encryptdecryptlocalstorage;
        this.loadingBar = loadingBar;
        this.dataSharingService = dataSharingService;
        this.commonService = commonService;
        this.dashBoardPaginationView = true;
        this.leavestatusUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].leavestatusApi;
        this.leaverequestUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].leaverequestApi;
        this.applyLeaveUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].applyLeaveAPi;
        this.getuserUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].getUserAPi;
        this.googleSyncUrlapi = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].googleSyncUrl;
        this.eventIdUrl = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].getEventIdApi;
        this.saveNotificationURL = _services_urlConstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstant"].saveNotificationApi;
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
        this.preloader = false;
        this.dataSharingService.appliedFlagObs.subscribe(data => {
            console.log('called..........');
            if (data == 'true') {
                console.log('called..........');
                this.leaveapprovals();
            }
        });
    }
    ngOnInit() {
        this.createForm();
        this.leaveapprovals();
    }
    createForm() {
        this.rejectionform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    leaveapprovals() {
        let payload = {
            "gemsUserMasterId": this.encryptdecryptlocalstorage.getLocalStorage('userId'),
        };
        this.genericservice.post(this.getuserUrl, payload, false).subscribe(response => {
            this.employeeId = response.data.gemsEmployeeMasterId;
            let payloadReqObj = {
                "reportingTo": this.employeeId,
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
        });
    }
    //  To View Leave Details Pages from Leave Request Page
    viewLeavePage(leaveObj) {
        localStorage.setItem('LeaveId', leaveObj.gemsEmployeeLeaveMasterId + '');
        this.router.navigateByUrl('user/approvals/leavedetails');
    }
    approvedLeaveReject(gemsLeaveRequest) {
        var fromDate = new Date(gemsLeaveRequest.fromDate);
        var fromDateValue = fromDate.getFullYear() + "-" + (fromDate.getMonth() + 1) + "-" + fromDate.getDate();
        if (gemsLeaveRequest.status == 'APPROVED' && (new Date(fromDateValue) > new Date())) {
            return true;
        }
    }
    //leave approved
    leaverequest(leavestatusobj) {
        this.preloader = true;
        let payloadReqObj = {
            "gemsEmployeeLeaveMasterId": leavestatusobj.gemsEmployeeLeaveMasterId
        };
        this.genericservice.post(this.leaverequestUrl, payloadReqObj, false).subscribe(response => {
            this.rejectionform.reset();
            console.log(response);
            leavestatusobj = response.data;
            leavestatusobj.status = "APPROVED";
            leavestatusobj.isFlag = true;
            leavestatusobj.updatedBy = this.gemsEmployeeMasterId;
            // this.employeeleaveHistory.updatedOn = new Date();
            this.employeeleaveHistory = leavestatusobj;
            this.genericservice.post(this.applyLeaveUrl, this.employeeleaveHistory, true).subscribe(response => {
                // 
                console.log(response);
                this.leaveapprovals();
                // Save Notification
                let reqPayload = {
                    "notification": response.data.notification,
                    "gemsEmployeeMasterId": response.data.gemsEmplyeeLeaveSummary.gemsEmployeeMaster.gemsEmployeeMasterId
                };
                this.genericservice.post(this.saveNotificationURL, reqPayload, false).subscribe(res => {
                });
                this.preloader = false;
            });
        });
    }
    //leave rejected
    leaverejected(leavestatusobj) {
        this.preloader = true;
        let payloadReqObj = {
            "gemsEmployeeLeaveMasterId": leavestatusobj.gemsEmployeeLeaveMasterId,
        };
        this.genericservice.post(this.leaverequestUrl, payloadReqObj, false).subscribe(response => {
            console.log(response);
            leavestatusobj = response.data;
            leavestatusobj.status = "REJECTED";
            leavestatusobj.isFlag = true;
            leavestatusobj.updatedBy = this.gemsEmployeeMasterId;
            leavestatusobj.remarks = this.rejectionform.value.reason;
            // this.employeeleaveHistory.updatedOn = new Date();
            this.employeeleaveHistory = leavestatusobj;
            this.genericservice.post(this.applyLeaveUrl, this.employeeleaveHistory, true).subscribe(response => {
                console.log(response);
                // 
                this.leaveapprovals();
                // Save Notification
                let reqPayload = {
                    "notification": response.data.notification,
                    "gemsEmployeeMasterId": response.data.gemsEmplyeeLeaveSummary.gemsEmployeeMaster.gemsEmployeeMasterId
                };
                this.genericservice.post(this.saveNotificationURL, reqPayload, false).subscribe(res => {
                });
                this.rejectionform.reset();
            });
            this.rejectionform.reset();
        });
        this.preloader = false;
    }
    //get user for rejected
    reject(leavestatusobj) {
        this.rejectionform.reset();
        console.log(leavestatusobj);
        this.leaveObject = leavestatusobj;
    }
    //leave onhold
    leaveonhold(leavestatusobj) {
        this.preloader = true;
        let payloadReqObj = {
            "gemsEmployeeLeaveMasterId": leavestatusobj.gemsEmployeeLeaveMasterId
        };
        this.genericservice.post(this.leaverequestUrl, payloadReqObj, false).subscribe(response => {
            console.log(response);
            leavestatusobj = response.data;
            leavestatusobj.status = "ONHOLD";
            leavestatusobj.isFlag = true;
            leavestatusobj.updatedBy = this.gemsEmployeeMasterId;
            // this.employeeleaveHistory.updatedOn = new Date();
            this.employeeleaveHistory = leavestatusobj;
            this.genericservice.post(this.applyLeaveUrl, this.employeeleaveHistory, true).subscribe(response => {
                console.log(response);
                // 
                // this.getEventId(response);
                this.leaveapprovals();
                // Save Notification
                let reqPayload = {
                    "notification": response.data.notification,
                    "gemsEmployeeMasterId": response.data.gemsEmplyeeLeaveSummary.gemsEmployeeMaster.gemsEmployeeMasterId
                };
                this.genericservice.post(this.saveNotificationURL, reqPayload, false).subscribe(res => {
                });
            });
        });
        this.preloader = false;
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
            "reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
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
            "reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
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
            "reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
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
                if (responseObject.isFullDay) {
                    return responseObject.permissionDuration + ' ' + 'day';
                }
                else {
                    responseObject.permissionDuration = responseObject.permissionDuration === '1' || responseObject.permissionDuration === 1 ? responseObject.permissionDuration + ' ' + 'hr' : responseObject.permissionDuration + ' ' + 'hrs';
                    return responseObject.permissionDuration;
                }
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
                responseObject.permissionDuration = responseObject.permissionDuration === '1' || responseObject.permissionDuration === 1 ? responseObject.permissionDuration + ' ' + 'hr' : responseObject.permissionDuration + ' ' + 'hrs';
                return responseObject.permissionDuration;
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
    close() {
        this.rejectionform.reset();
        // this.rejectionform.value.reason = "";
    }
    ;
    getEventId(res) {
        console.log("before call service");
        this.genericservice.get(this.eventIdUrl + "/" + res.data.gemsEmployeeLeaveMasterId).subscribe(response => {
            if (res.status.success == 'Success') {
                console.log(" service Success");
                let event = {
                    'end': { 'date': this.commonService.getToByTime(res.data.toDate) },
                    'start': { 'date': this.commonService.getDateByTime(res.data.fromDate) },
                    'summary': res.data.leaveCode + ' - ' + res.data.status,
                    'description': res.data.reason
                };
                let eventId = response.data.eventId;
                this.genericservice.updateCalendarEvents(this.googleSyncUrlapi + eventId, event).subscribe(response => {
                    console.log("new leave status is synced successfully with google calendar");
                }, error => {
                    console.log("error while syncing with google calendar");
                });
            }
        });
    }
}


/***/ })

}]);
//# sourceMappingURL=default~approvals-approvals-module-ngfactory~attendance-attendance-module-ngfactory~leave-leave-modu~0fa3ae05-es2015.js.map