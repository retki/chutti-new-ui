import { Project } from "./project.model";
import { TimeSheetHeader } from "./timesheetheader.model";

export class TimeSheet {
  
    gemsEmployeeTimeSheetId : number;
    gemsProjectMaster : Project;
    taskDescription : string;
    weekDuration : string;
    status : string;
    totalHours : number;
    isActive : boolean;
    createdBy : any;
    createdOn : Date;
    updatedBy : number;
    updatedOn : Date;
    gemsEmployeeWeeklyTimeSheetLine  : TimeSheetHeader[];
    selected  : boolean;
    
  }