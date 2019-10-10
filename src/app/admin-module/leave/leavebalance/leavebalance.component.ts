import { Component, OnInit } from '@angular/core';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from 'src/app/services/urlConstant';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-leavebalance',
  templateUrl: './leavebalance.component.html',
  styleUrls: ['./leavebalance.component.scss']
})
export class LeavebalanceComponent implements OnInit {
  leavebalancelist;
  organisationId: any;
  public leavebalanceUrl = UrlConstant.getleavebalanceApi;
  public editleavebalanceUrl = UrlConstant.editleavebalanceApi;
  public updateleavesummaryUrl = UrlConstant.updateemployeeleavesummaryApi;
  leavebalanceForm: FormGroup;
  leavebalanceObj: any;
  employeeleaveobj: any;
  leavebalance: any;
  upateleavebalancelist: any;
  employeeleaveobjEdit: any;
  public perpageOption = [

    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];
  selectedItemsPerPage: number = 10;
  totalCount: any;
  start: any;
  limit: any;
  totalPages: number;
  currentPage = 1;
  balanceList: any;
  public filterkey: string;
  constructor(private genericservice: Genericservice,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
  ) {

  }
  ngOnInit() {
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.getleavebalance();
    this.leavebalanceForm = new FormGroup({
      leaveTypeDescription: new FormControl('', [Validators.required]),
      leaveEntitled: new FormControl('', [Validators.required])
    })

  }

  //  GETTING LEAVEBALANCE LIST

  getleavebalance() {

    let payload = {
      "gemsOrganisation": {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      },

    }

    this.genericservice.post(this.leavebalanceUrl, payload, false).subscribe(response => {
      this.leavebalancelist = response.data;
      this.totalCount = response.data.length;
      this.paginatedEmployeeList();
      this.findItemsPerPage();
    })
  }

  paginatedEmployeeList() {
    this.balanceList = this.leavebalancelist.slice(this.start, this.limit);
  }
  goToNext() {
    this.currentPage++;
    this.start = this.start + this.selectedItemsPerPage;
    this.limit = this.limit + this.selectedItemsPerPage;
    this.balanceList = this.leavebalancelist.slice(this.start, this.limit);
  }
  goToPrev() {
    this.currentPage--;
    this.start = this.start - this.selectedItemsPerPage;
    this.limit = this.limit - this.selectedItemsPerPage;
    this.balanceList = this.leavebalancelist.slice(this.start, this.limit);
  }
  findItemsPerPage() {
    this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);
  }
  changeItemPerPage(event) {
    this.currentPage = 1;
    this.selectedItemsPerPage = parseInt(event);
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.paginatedEmployeeList();
    this.findItemsPerPage();
  }
  goToPageNo(event) {
    console.log('on page change')
  }
  // EDITLEAVEBALANCELIST


  editleavebalance(leavebalance) {
    console.log(leavebalance)
    let payload = {
      "gemsEmployeeMasterId": leavebalance.gemsEmployeeMasterId
    }
    this.genericservice.post(this.editleavebalanceUrl, payload, false).subscribe(response => {
      this.employeeleaveobj = response.data;
      this.employeeleaveobjEdit = response.data;
      console.log(this.employeeleaveobj)
    })
  }



  // UPDATING LEAVEBALANCE
  updateleavebalance(employeeleaveobj) {
    this.genericservice.post(this.updateleavesummaryUrl, employeeleaveobj, false).subscribe(response => {
      this.ngOnInit();

    })
  }

  leaveBalanceOnChange(event: any) {
    this.employeeleaveobjEdit[+event.target.id].leaveEntitled = +event.target.value;
    //console.log(event.target.value)
    //console.log(event.target.name)  
     
     
  }

}
