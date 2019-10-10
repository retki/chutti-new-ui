import { Component, OnInit } from '@angular/core';
import { UrlConstant } from '../../../services/urlConstant';
import { Genericservice } from '../../../services/genericservices';
import { EncryptDecryptLocalStorageService } from '../../../services/encrypt-decrypt-localstorage.service';
import { DataSharingService } from 'src/app/services/dataSharing.service';
@Component({
  selector: 'app-leave-bank',
  templateUrl: './leave-bank.component.html',
  styleUrls: ['./leave-bank.component.scss']
})
export class LeaveBankComponent implements OnInit {
  public leaveBankUrl = UrlConstant.leavebankApi;
  public leaveBankList: any = [];
  public leaveEntitledArrayList: any = [];
  public leaveTypeCodeArrayList: any = [];
  public leaveTypeDescriptionArrayList: any = [];
  public leaveSummaryList: any = [];
  sllop =0;
  ellop = 0;
  cllop = 0;
  perlop: any;
  odlop: any;
  totallop: any;
  public lop: boolean = false;

  constructor(private urlconstant: UrlConstant, private genericservice: Genericservice, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private dataSharingService:DataSharingService) { 
      this.dataSharingService.appliedFlagObs.subscribe(data=>{
        console.log('called..........')
        if(data=='true'){
          console.log('called..........')
          this.leavebank();
        }
      })

  }

  ngOnInit() {
    this.leavebank();
  }

  slCount;
  clCount;
  elCount;
  totallop2;
  leavebank() {
    let payloadReqObj = {
      employeeMasterId: this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      isActive: true
    }
    return this.genericservice.post(this.leaveBankUrl, payloadReqObj, false).subscribe(response => {

      this.leaveBankList = response.data;
      this.leaveBankList.forEach(leaveSummary => {
        leaveSummary.leaveTypeCode == 'SL' ? this.slCount = leaveSummary.leaveEntitled : null;
        leaveSummary.leaveTypeCode == 'EL' ? this.elCount = leaveSummary.leaveEntitled : null;
        leaveSummary.leaveTypeCode == 'CL' ? this.clCount = leaveSummary.leaveEntitled : null;
        leaveSummary.leaveTypeCode == 'SL' ? this.sllop = leaveSummary.noOfLops : 0;
        leaveSummary.leaveTypeCode == 'EL' ? this.ellop = leaveSummary.noOfLops : 0;
        leaveSummary.leaveTypeCode == 'CL' ? this.cllop = leaveSummary.noOfLops : 0;
        leaveSummary.leaveTypeCode == 'PER' ? this.perlop = leaveSummary.noOfLops : null;
        leaveSummary.leaveTypeCode == 'OD' ? this.odlop = leaveSummary.noOfLops : null;
        console.log(this.slCount + " ---" + this.clCount + "======" + this.elCount);
        console.log(this.sllop + " ---" + this.ellop + "======" + this.cllop + "======" + this.perlop + "======" + this.odlop);

        this.totallop = this.sllop + this.ellop + this.cllop;
        if (this.totallop > 1) {
          this.lop = true;
        }
        else {
          this.lop = false;
        }


      });

    })
  }
}
