import { Component, OnInit } from '@angular/core';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from 'src/app/services/urlConstant';

@Component({
  selector: 'app-totalemplooyee',
  templateUrl: './totalemplooyee.component.html',
  styleUrls: ['./totalemplooyee.component.scss']
})
export class TotalemplooyeeComponent implements OnInit {
  getEmployeeStrengthCountURL = UrlConstant.getEmployeeStrengthCount;

  public totalEmployeeCount:any;
  constructor(private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private genericService: Genericservice) { }

  ngOnInit() {
    this.getTotalEmployeeList();
  }

  getTotalEmployeeList() {
    this.genericService.
      post(this.getEmployeeStrengthCountURL+this.encryptdecryptlocalstorage
      .getLocalStorage('organizationId'),'',false).subscribe(response => {
         this.totalEmployeeCount = response;
        })
  }

}
