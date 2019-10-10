import { Component, OnInit } from '@angular/core';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from 'src/app/services/urlConstant';

@Component({
  selector: 'app-edit-time-sheet',
  templateUrl: './edit-time-sheet.component.html',
  styleUrls: ['./edit-time-sheet.component.scss']
})
export class EditTimeSheetComponent implements OnInit {

  public getProjectListApi = UrlConstant.getProjectApi;
  projectList: any;
  selectedproject: any;
  constructor(public genericservice: Genericservice, public encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) { }

  ngOnInit() {

    this.getAssignedProjectList();
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
    this.genericservice.post(this.getProjectListApi, payLoad, '').subscribe(response => {
      this.projectList = response.data;
      this.selectedproject = this.projectList != null ? this.projectList[0] : null;
     // this.projectList != null ? this.getTimeSheetdetail(this.projectList[0].gemsProjectMaster.projectName) : null;
    })
  }
}
