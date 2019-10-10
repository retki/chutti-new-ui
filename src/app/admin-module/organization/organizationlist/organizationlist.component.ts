import { Component, OnInit } from '@angular/core';
import { Genericservice } from '../../../services/genericservices';
import { UrlConstant } from '../../../services/urlConstant';
import { EncryptDecryptLocalStorageService } from '../../../services/encrypt-decrypt-localstorage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organizationlist',
  templateUrl: './organizationlist.component.html',
  styleUrls: ['./organizationlist.component.scss']
})
export class OrganizationlistComponent implements OnInit {

  public getOrganizationUrl = UrlConstant.getorganizatiApi + this.encryptdecryptlocalstorage.getLocalStorage('organizationId');

  organizationlist: any = [];
  organizationName: any;
  activeTab: any = '';
  constructor(private genericservice: Genericservice,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private router: ActivatedRoute) {
    this.router.queryParams.subscribe(params => {
      if (params) {
        this.activeTab = params;
      }
    });
  }

  ngOnInit() {
    this.getallorganization();
    if (this.activeTab.from == 'role') {
      document.getElementById('nav-profile-tab').click();
    }

  }
  getallorganization() {
    this.genericservice.get(this.getOrganizationUrl).subscribe(response => {
      this.organizationlist = response.data;
      this.organizationName = this.organizationlist.gemsOrganisation.gemsOrgName;
    });
  }
}
