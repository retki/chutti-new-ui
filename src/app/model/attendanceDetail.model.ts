export class AttendanceLeave {

    cntAttendanceDetailId : number;
    gemsEmployeeMasterId: number;
    gemsEmployeeShiftDetail:string;
    attendanceDate : Date;
    attendanceInTime : Date;
    attendanceOutTime : Date;
    gemsAttendanceOutTime: Date;
    durationBtwInOut : string;
    cntAttendanceLateRequestId:number;
    gemsEmployeeLeaveMasterId:string
    leaveCode:string;
    transactionType:string
    status:string
    fromDate:Date;
    toDate:Date;
    currentReportingTo:number;
    cntEmployeeLateRequest : any
}