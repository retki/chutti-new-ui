export interface Project {
    gemsProjectMasterId?: number;
    projectCode: string;
    projectName: string;
    projectDescription: string;
    projectStatus: string;
    billingType: string;
    projectStartDate: Date;
    projectEndDate: Date;
    projectCost: number;
    // projectTypeMaster: ProjectType;
    // gemsCustomerMaster: CustomerMaster;
    // gemsOrganisation: Organisation;
    isActive?: boolean;
    createdBy: number;
    createdOn: Date;
    updatedBy: number;
    updatedOn: Date;
    selected: boolean;
  }