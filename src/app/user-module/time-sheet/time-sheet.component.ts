import { Component, OnInit } from '@angular/core';
import { Genericservice } from 'src/app/services/genericservices';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { UrlConstant } from 'src/app/services/urlConstant';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.scss']
})
export class TimeSheetComponent implements OnInit {

  public getProjectListApi = UrlConstant.getProjectApi;
  public getTimeSheetListApi = UrlConstant.getTimeSheetListApi;
  projectList: any;
  timeSheetList: any;
  selectedproject: any;

  constructor(public router: Router,public genericservice: Genericservice, 
    public encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,private loadingBar: LoadingBarService) { }

  ngOnInit() {
    this.loadingBar.start();

    this.getAssignedProjectList();
    this.loadingBar.complete();

  }


  onChange(newValue) {
    this.selectedproject = newValue;
    this.getTimeSheetdetail(this.selectedproject);
  }
  


  getAssignedProjectList() {
    let payLoad = {
      "gemsEmployeeMaster": {
        "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      },
      "gemsOrganisation": {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }
    }
    this.genericservice.post(this.getProjectListApi, payLoad,'').subscribe(response => {
      this.projectList = response.data;
      this.selectedproject = this.projectList != null ? this.projectList[0].gemsProjectMaster : null;
      this.projectList != null ? this.getTimeSheetdetail(this.projectList[0].gemsProjectMaster) : null;
    })
  }

  getTimeSheetdetail(projectData) {
    let payLoad = {
      "createdBy": {
        "gemsEmployeeMasterId": this.encryptdecryptlocalstorage.getLocalStorage('employeeId')
      },
      "gemsProjectMaster": {
        "gemsProjectMasterId": projectData.gemsProjectMasterId
      }
    }
    this.genericservice.post(this.getTimeSheetListApi, payLoad,'').subscribe(response => {
      this.timeSheetList = response.data
    })
  }

  clickedOnEditTimeSheet(timesheetdetail){
    this.router.navigateByUrl('/user/timesheet/addTimeSheet?gemsEmployeeTimeSheetId='+timesheetdetail.gemsEmployeeTimeSheetId);
  }

}
