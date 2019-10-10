import { Component, OnInit } from '@angular/core';
import { Genericservice } from 'src/app/services/genericservices';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { UrlConstant } from 'src/app/services/urlConstant';

@Component({
  selector: 'app-employeeonleave',
  templateUrl: './employeeonleave.component.html',
  styleUrls: ['./employeeonleave.component.scss']
})
export class EmployeeonleaveComponent implements OnInit {
  getTotalWhoesOnLeaveCountURL   = UrlConstant.getTotalWhoesOnLeaveCount;
  public totalLeaveCount:Number;
  constructor(private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private genericService: Genericservice) { }

  ngOnInit() {
    this.getTotalWhoesOnLeaveCount();
  }

  getTotalWhoesOnLeaveCount(){

    this.genericService.
    post(this.getTotalWhoesOnLeaveCountURL+this.encryptdecryptlocalstorage
    .getLocalStorage('organizationId'),'',false).subscribe(response=>{
       this.totalLeaveCount=response;
        
    });
  }

}
