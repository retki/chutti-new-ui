export class EmployeeLateRequest {
    cntAttendanceLateRequestId: number;
    lateRequestDate: Date;
    lateDuration: Date;
    status: string;
    remarks:string;
    description:string;
    isActive: boolean;
    createdBy: number;
    createdOn: Date;
    updatedBy: number;
    updatedOn: Date;
    gemsEmployeeMaster: number;
  gemsEmployeeMasterId: number;
    // gemsEmployeeAttendanceDetail : AttendanceDetails;
    }