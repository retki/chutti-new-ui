import { Injectable } from '@angular/core';



@Injectable({ providedIn: 'root' })
export class UrlConstant {
    // Google sync url
    static googleSyncUrl = 'https://content.googleapis.com/calendar/v3/calendars/primary/events/';
    static saveticketUrl = 'app-chutti/saveTickets';
    static getTicketListUrl = "app-chutti/getTicketsList";
    static getticketUrl = 'https://cloudnow.freshdesk.com/api/v2/tickets?include=requester,description&email=';

    static loginApi = 'app-chutti/login';
    static googleApi = 'app-chutti/login';
    static logoutUrl = '/user/logout';
    static setpasswordApi = 'app-chutti/user';
    static reSetpasswordApi = 'app-chutti/resetPassword';
    static changePasswordApi = 'app-chutti/changePassword';
    static saveUserApi = 'app-chutti/user';
    static userByIdApi = 'app-chutti/user/userId';
    static validateResetToken = 'app-chutti/usertoken/forgotpassword/verify';
    static saveNotificationApi = 'app-chutti/saveNotification';
    // static leavestatusApi="app-employee/leavesFromViewRange?start=0&limit=3&status=";
    static leavestatusApi = "app-chutti/leavesFromViewRange";
    static upcomingholidayApi = "app-chutti/holidays";
    static attendanceApi = "app-chutti/getattendanceByLimit";
    static attendanceApprovalApi = "app-chutti/getAllAttendance";
    // static attendanceApi="app-employee/getattendanceByLimit?start=0&limit=0&attendanceType=0";
    // static supportApi= 'https://cloudnow.freshdesk.com/api/v2/tickets';
    static leavepolicyApi = 'app-chutti/viewOrgLeaveSummaries';
    static leavebankApi = 'app-chutti/viewEmployeeLeaveSummaries';
    static attendsnceApi = 'app-chutti/attendances';
    static whoisonleaveApi = 'app-chutti/whosOnleave';
    static forgotpasswordApi = 'app-chutti/forgotPassword';
    static getEmployeeApi = 'app-chutti/employeeByUser/gemsUserMasterId';
    static getEmployeeContactApi = 'app-chutti/contact/gemsEmployeeMasterId';
    // app-employee constants
    static myCalendar = 'app-chutti/getleaves';
    static teamCalendar = 'app-chutti/getleaves';
    static allEvents = 'app-chutti/getAllEventList';
    static saveEvent = 'app-chutti/saveEvent';

    // app-master constants...
    static holidays = 'app-chutti/holidays';
    static saveEmployee = 'app-chutti/saveemployee';
    static saveEmployeeContact = 'app-chutti/contact';
    static leaveSummaryApi = 'app-chutti/viewEmployeeLeaveSummaries';
    static getUserAPi = 'app-chutti/employeeByUser/gemsUserMasterId';
    static getLeaveParamAPi = 'app-chutti/getleaveParameter';
    static applyLeaveAPi = 'app-chutti/ApplyLeave';
    static getOrgParmApi = 'app-chutti/getOrgParam';
    static getLeaveStatusApi = 'app-chutti/leavesFromViewRange?start=0&limit=3';
    static saveLaterequest = 'app-chutti/saveLaterequest';
    static saveAttendance = 'app-chutti/saveAttendance';
    static notificationAPI = 'app-chutti/getNotification';
    static getNotificationAPI = 'app-chutti/getNotificationByEmployeeId';
    static whoISonLeaveExpansionAPI = 'app-chutti/whosOnleaveByDate';
    static getProjectApi = 'app-chutti/projectResources';
    static getTimeSheetListApi = 'app-chutti/TimeSheetList';
    static getAttendanceLeaveApi = 'app-chutti/getattendanceByLimit';
    static saveTimeSheetApi = 'app-chutti/saveTimeSheet';
    static getTimeSheetApi = 'app-chutti/TimeSheetWrapperDetails';
    static leaverequestApi = 'app-chutti/getleave/params';
    static leaveSummariesApi = 'app-chutti/leaveSummaries';
    static autologinApi = 'app-chutti/user/autologin';
    static applyLeaveAPiWithOutToken = 'app-chutti/ApplyLeaveFomMail';


    //ADMIN

    //Employee
    static getEmployeeListApi = 'app-chutti/viewEmployeesByStatus';
    static designationlistApi = 'app-chutti/designations';
    static rolelistApi = 'app-chutti/roles';
    static shiftlistApi = 'app-chutti/getShifts';
    static saveEmployeeApi = 'app-chutti/saveemployee';
    static employeeStatusListApi = 'app-chutti/employmentStatusList';
    static saveContactApi ='app-chutti/contact';
    static getEmployeeByIdApi ='app-chutti/employee/gemsEmployeeMasterId';
    static getEmployeeContactByIdApi ='app-chutti/contact/gemsEmployeeMasterId';
    static suspendOrActiveApi = 'app-chutti/suspendOrActiveUser';
    //organization
    static getorganizatiApi='app-chutti/organisation/';
    static saveorganizationApi = 'app-chutti/saveOrganisationWrapper';
    static getcountriesApi='app-chutti/countries'
    static departmentlistApi = 'app-chutti/departments';
// leavetype

    static getdepartmentleadApi='app-chutti/viewEmployeesByStatus';
    static savedepartmentApi='app-chutti/saveDepartment';
    static getdesignationlistApi='app-chutti/viewDesignationsByRange';
    static savedesignationApi='app-chutti/saveDesignation';
    static deletedesignationByIdApi='app-chutti/designationById';


  //admin
  //projects
  static getProjectList = 'app-chutti/viewProjectList'
  static saveProject = 'app-chutti/saveProjectMaster'
  static getCustomerListApi = 'app-chutti/customers'
  static getProjectTypeList = 'app-chutti/projectTypes'
  static projectAssignmentList = 'app-chutti/viewProjectResourceAssignmentList';
  static saveProjectAssignment = 'app-chutti/saveProjectResource'
  static saveProjectAssignmentList = 'app-chutti/saveProjectResourceList'
  static deleteProjectAssignmentList = 'app-chutti/deleteProjectResourceList'
  static getProjectById = 'app-chutti/projectById';
  static saveProjectTypeApi = 'app-chutti/saveprojectType';
  // role
  static saveroleApi = 'app-chutti/saveRole';
  static getcomponetApi = 'app-chutti/components'
  static projectResourceById = 'app-chutti/getProjectResourceById'

  static getingleavereportsApi = " app-chutti/viewEmployeesByStatus?status=ALL";

  static getleavereportsApi = "app-chutti/departments"

  static myprofilepicchange = 'app-chutti/userProfileAvatar';

  static orgUpdateLogo='app-chutti/uploadOrgLogo';




  //admin

  //projects
  static getProjectListApi = 'app-chutti/viewProjectList';
  static saveProjectListApi = 'app-chutti/saveProjectMaster';
  //  static getCustomerListApi = 'app-chutti/customers';
  static getProjectTypeListApi = 'app-chutti/projectTypes';

  // role
  // static getcomponetApi = 'app-chutti/components';

  // leavebalance
  static getleavebalanceApi = "app-chutti/empLeaveBalance";
  static editleavebalanceApi = "app-chutti/leaveSummaries";

  // leavetype
  static getLeavetypeApi = 'app-chutti/leavetypes';
  static saveLeaveTypeApi = 'app-chutti/saveLeaveType';

  // leavereports
  static leavereportsApi = "app-chutti/departments";
  static leavereportslistApi = "app-chutti/leavetypes";
  static leavereportsemployeeApi = "app-chutti/viewEmployeesByStatus?status=ALL";
  static getemployeeApi = "app-chutti/leaveReports?fromDate=";
  static updateemployeeleavesummaryApi = "app-chutti/empLeaveSummary";

  // LeavePolicy URL

  static getLeaveTypes = 'app-chutti/leavetypes';
  static getLeaveSummaries = 'app-chutti/viewOrgLeaveSummaries';
  static getEmploymentStatusList = 'app-chutti/employmentStatusList';
  static saveOrgLeaveSummaries = 'app-chutti/saveOrgLeaveSummaries';
  static getLeaveSummerybyId = 'app-chutti/leaveSummarys';
  static deleteLeaveSummay = 'app-chutti/leaveSummay';
  static downloadExcelFile = 'http://pre-prod.cloudnowtech.net/attendance/leavePolicies_sample.xlsx';
  static uploadLeavePolicyExcelFile = 'app-chutti/importLeavePolicies';

  // Holiday URL

  static downLoadHolidaySampleFile = 'http://pre-prod.cloudnowtech.net/attendance/holiday_sample.xlsx';
  static uploadHolidayExcelFile = 'app-chutti/importHolidays';
  static holidayList = 'app-chutti/holidays?isUpcomingHolidays=false';
  static saveholiday = 'app-chutti/holiday';
  static deleteHoliday = 'app-chutti/deleteHoliday';

  // DashBoard URL 

  static getEmployeeStrengthCount = 'app-chutti/employeeStrengthCount?gemsOrganisationId=';
  static getTotalOnGoingProjectsCount = 'app-chutti/totalOnGoingProjectCount?gemsOrganisationId=';
  static getTotalWhoesOnLeaveCount = 'app-chutti/todayWhosOnleaveCount?organisationId=';
  static getYesterdayWhoesOnLeaveCount = 'app-chutti/yesterdayWhosOnleaveCount?organisationId=';
  static getOverTimeWorkersCount = 'app-chutti/getOverTimeWorkers';
  static getYesterdayWhosOnLate = 'app-chutti/whosOnlate';
  static getYesterdayWhosOnLeave = 'app-chutti/whosOnleave';
  static getYesterdayLateCount = 'app-chutti/yesterdayLateCount?organisationId=';
  static getEmployeeStatistics = 'app-chutti/employeeStatistics?'
  static getOverTimeWorkersByRange = 'app-chutti/getOverTimeWorkersByRange'
  static getLateComersByRange = 'app-chutti/getLateComersByRange'


  // Signup
  static SignupApi = "app-chutti/addorganisation";
  static validatetokensignupApi = 'app-chutti/usertoken/verify'
  static sigupsetpasswordApi = 'app-chutti/setupadmin';
  static importUsersApi = 'app-chutti/importEmployee';
  static getUserListApi = 'app-chutti/tempEmployees';
  static saveTempEmployeesApi ='app-chutti/saveTempEmployeeMasters';
  static finishSetUpApi = 'app-chutti/finishCustomerSetup';

  //EmployeeAttendance
  static getEmployeeAttendanceApi = 'app-chutti/getAttendanceReport';
  static importAttendanceApi = 'app-chutti/importAttendance';
  static downloadAttendanceApi = 'http://pre-prod.cloudnowtech.net/attendance/attendance_sample.csv';
  //'http://test-chutti.cloudnowtech.net/attendance/attendance_sample.csv';
  static getAttendanceSwipesApi = 'app-chutti/attendanceSwipes';


  static getEventIdApi = 'app-chutti/leave';
  static saveorganizationparamApi='app-chutti/saveleaveParameter';

    //shift Url

    static getShift='app-chutti/getShifts'
    static deleteShift='app-chutti/deleteShift'
    static saveShift='app-chutti/saveShift?'
    static addOrganiztionApi = 'app-chutti/organisation';
    static getOrganisationByIdApi='app-chutti/organisation/';

}


