import { Component, OnInit } from '@angular/core';
import { UrlConstant } from 'src/app/services/urlConstant';
import { Genericservice } from 'src/app/services/genericservices';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';

@Component({
  selector: 'app-latecomers',
  templateUrl: './latecomers.component.html',
  styleUrls: ['./latecomers.component.scss']
})
export class LatecomersComponent implements OnInit {
  getTotalLateComersListURL   = UrlConstant.getYesterdayLateCount;
  public  totalLateComersCount:any;
  constructor(private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private genericService: Genericservice) { }

  ngOnInit() {
    this.getTotalLateComersList();
  }

  getTotalLateComersList(){

    this.genericService.
    post(this.getTotalLateComersListURL+this.encryptdecryptlocalstorage
      .getLocalStorage('organizationId'),'',false).subscribe(response=>{
      this.totalLateComersCount= response;
    })
  }

}
