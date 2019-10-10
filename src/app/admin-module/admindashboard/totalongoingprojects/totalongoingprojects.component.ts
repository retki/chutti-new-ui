import { Component, OnInit } from '@angular/core';
import { Genericservice } from 'src/app/services/genericservices';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { UrlConstant } from 'src/app/services/urlConstant';

@Component({
  selector: 'app-totalongoingprojects',
  templateUrl: './totalongoingprojects.component.html',
  styleUrls: ['./totalongoingprojects.component.scss']
})
export class TotalongoingprojectsComponent implements OnInit {
  getTotalOnGoingProjectsCountURL  = UrlConstant.getTotalOnGoingProjectsCount;
  public totalOnGoingProjectCount:any;
  constructor(private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private genericService: Genericservice) { }

  ngOnInit() {
    this.getTotalOnGoingProjects();
  }

  getTotalOnGoingProjects() {

    this.genericService.
    post(this.getTotalOnGoingProjectsCountURL+this.encryptdecryptlocalstorage
      .getLocalStorage('organizationId'),'',false).subscribe(response => {
          this.totalOnGoingProjectCount=response;
        })
  }
}
