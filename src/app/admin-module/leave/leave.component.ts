import { Component, OnInit } from '@angular/core';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from 'src/app/services/urlConstant';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
  public   leaveTypeList = [];
  public   leaveTypesURL = UrlConstant.getLeaveTypes; 
  constructor(private encryptdecryptlocalstorage:EncryptDecryptLocalStorageService,
              private genericService:Genericservice ) { }

  ngOnInit() {
    this.getLeaveTypes();
  }
  public getLeaveTypes() {
    var payload = { "gemsOrganisation":
     { "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')},
      "isActive":true
   };
    this.genericService.post(this.leaveTypesURL, payload, false).subscribe(response => {
      this.leaveTypeList = response.data;
    });
  }
}
