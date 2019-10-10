import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class MessageConstant {

  /* 
   * Here we access the Constant Global Variables reference.
   *  Constant Global Variables starts here.....
   */

  attendanceType        : number = 2;
  appliedEmpLeaveId     : number = 0;
  employeeDetailsId     : number = 0;
  timesheetId           : number = 0;
  leaveRequestDetailId  : number = 0;
  maxLeaveCount         : number = 100;
  /*Constant Global Variables ends here...............*/
  

  /* 
   * Here we declare the Global Variables to reference all over the application.
   *   Global Member Variables starts Here.....
   */

  //Common Global Variables
  public NO_REPORTING_MANAGER   : string = 'Reporting Manager not Found.';
  public SUCCESS_MESSAGE        : string = 'Your information has been saved successfully.';
  public DELETE_MESSAGE         : string = 'Your information has been deleted successfully.';
  public ERROR_MESSAGE          : string = 'Error while saving your data.';
  public ERROR_DELETE_MESSAGE   : string = 'Error while deleting your data.';
  public DUPLICATE_RECORDS      : string = 'DUPLICATE RECORDS NOT ALLOWED';

  //HOLIDAY
  public HOLIDAY_DUPLICATE_MESSAGE             : string = 'Holiday Name Already Exist.';
  //DEPARTMENT       
  public DEPARTMENT_DUPLICATE_MESSAGE          : string = 'Department Name Already Exist.';
  //DESIGNATION      
  public DESIGNATION_DUPLICATE_MESSAGE         : string = 'Designation with Selected Department was Already Exist.';
  //ROLE       
  public ROLE_DUPLICATE_MESSAGE                : string = 'Role Name Already Exist.';
  //CLIENT       
  public CLIENT_DUPLICATE_MESSAGE              : string = 'Customer Email Already Exist.';
  //SHIFT      
  public SHIFT_DUPLICATE_MESSAGE               : string = 'Shift Name Already Exist.';
  //SYSTEM PARAMETERS      
  public LOGO_SUCCESS_MESSAGE                  : string = 'Company logo has been Uploaded successfully.'
  public LEAVE_SUCCESS_MESSAGE                 : string = 'Leave Details has been saved successfully.';
        
  //EMPLOYEE       
  public EMPLOYEE_SUSPENDED_MESSAGE            : string = 'User has been suspended successfully.';
  public EMPLOYEE_ACTIVED_MESSAGE              : string = 'User has been Actived successfully.';
  public EMPLOYEE_DUPLICATE_MESSAGE            : string = 'Cannot create Employee with Duplicate Email or Employee Code.';
  public EMPLOYEE_ERROR_MESSAGE                : string = 'Got error while saving Employee Information.';
  public EMP_EDUCATION_ERROR_MESSAGE           : string = 'Got error while saving Education Information.';
  public EMP_SKILL_ERROR_MESSAGE               : string = 'Got error while saving Skill Information.';
  public EMP_EXPERIENCE_ERROR_MESSAGE          : string = 'Got error while saving Experience Information.';
  public EMP_BANK_ERROR_MESSAGE                : string = 'Got error while saving Bank Information.';
  public EMP_DEPENDENT_ERROR_MESSAGE           : string = 'Got error while saving Dependent Information.';
  
  //LEAVE TYPE
  public LEAVETYPE_DUPLICATE_MESSAGE           : string = 'LeaveType Already Exist.';
  //LEAVE POLICIES      
  public LEAVEPOLICY_SUCCESS_MESSAGE           : string = 'Employee Leave bank will be updated after next accrual process.';
  public LEAVEPOLICY_DUPLICATE_MESSAGE         : string = 'Leave Policy Already Exist.';
  public LEAVEPOLICY_MISSING_TYPESTATUS        : string = 'Either LeaveType/EmployeeStatus is Missing .';
  //LEAVE REQUEST    
  public LEAVEREQUEST_APPROVED_MESSAGE         : string = 'Leave Request was Approved successfully';
  public LEAVEREQUEST_HOLD_MESSAGE             : string = 'Leave Request was On Hold successfully';
  public LEAVEREQUEST_REJECTED_MESSAGE         : string = 'Leave Request was Rejected successfully';
  //APPLY LEAVE
  public NON_WORKINGDAYS_LEAVE_ERROR_MESSAGE  : string = 'Cannot Apply leave on non-working days.';
  public APPLY_LEAVE_ERROR                    : string = 'Got error while applying for leave.';
  public APPLY_PERMISSION_ERROR               : string = 'Got error while applying Permission.'
  public APPLY_ONDUTY_ERROR                   : string = 'Got error while applying OnDuty.'
  public CANCEL_LEAVE_ERROR                   : string = 'Got error while cancelling your leave.';
  public CANCEL_LEAVE                         : string = 'Leave Request cancelled successfully.';
  public FETCH_LEAVE                          : string = 'Cannot able to fetch leave record.';
  public APPLY_PERMISSION                     : string = 'Permission applied successfully.';
  public APPLY_ONDUTY                         : string = 'On Duty applied successfully.';

// MANAGE LEAVE
public MAX_LEAVE_COUNT_MESSAGE                : string =  'Leave count should not be more than 100';

  //ATTENDANCE
  public LATE_REQUEST_SUCCESS_MESSAGE          : string = 'Late request status has been saved successfully.';
  public LATE_REQUEST_APPROVED_MESSAGE         : string = 'Late request status has been Approved successfully.';
  public LATE_REQUEST_REJECTED_MESSAGE         : string = 'Late request status has been Rejected successfully.';
  //PROJECT TYPE     
  public PROJECTTYPE_DUPLICATE_MESSAGE         : string = 'ProjectType Already Exist.';
  //PROJECT   
  public PROJECT_DUPLICATE_MESSAGE             : string = 'Project Already Exist.';
  //PROJECT MAPPING   
  public PROJECTMAPPING_DUPLICATE_MESSAGE      : string = 'Project Mapping Already Exist.';
  //TIMESHEET
  public TIMESHEET_REQUEST_SUCCESS_MESSAGE     : string = 'TimeSheet has been saved successfully.';
  public TIMESHEET_REQUEST_APPROVED_MESSAGE    : string = 'TimeSheet has been Approved successfully.';
  public TIMESHEET_REQUEST_REJECTED_MESSAGE    : string = 'TimeSheet has been Rejected successfully.';
  public TIMESHEET_DUPLICATE_MESSAGE           : string = 'Timesheet already submitted for this week.';
  /*Global Variables reference ends here................*/


    /* 
     * Here we access the Globl Methods.
     *   Globl Methods starts here.....
     */

  // This method using for showing Success Or Failure messages

  showNotification(message: string, type: string) {
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

  /*Global Methods ends here.................*/
}
