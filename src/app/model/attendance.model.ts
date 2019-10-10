
import { EmployeeLateRequest } from './attendancelateRequest.model';
export class Attendance{
    cntEmployeeLateRequest =new  EmployeeLateRequest();
    attendanceDate : Date
    gemsEmployeeMaster: any
    cntAttendanceDetailId: number 
    attendanceInTime:any
    attendanceOutTime:any
}