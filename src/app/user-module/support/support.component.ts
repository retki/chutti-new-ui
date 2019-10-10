import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from 'src/app/services/urlConstant';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],

})
export class SupportComponent implements OnInit {
  supportform: FormGroup;
  gemsOrganisation: any;
  supportpriority: any;
  email: string;
  addticketUrl = UrlConstant.saveticketUrl;
  ticketlist=[];
  getticketUrl = UrlConstant.getTicketListUrl;
  closeModalEvent: any;
  totalCount: any;
  totalPages = 1;
  public start: number;
  public limit = 3;
  selectedItemsPerPage = 10;
  currentPage = 1;
  totalTicketList=[];
  
  public perpageOption = [
   
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];
  
public preloader:boolean=false;
  constructor(private genericservice: Genericservice,private loadingBar: LoadingBarService,
    private encryptDecryptLocalStorageService:EncryptDecryptLocalStorageService) {

  }

  ngOnInit() {
    this.supportform = new FormGroup({
      description: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required)
    });
    
    this.getsupportTickets();
  }
  clicksubmit() {
    var loginUserEmail=this.encryptDecryptLocalStorageService.getLocalStorage('userName');
    var s = this.supportform.value.subject;
    this.preloader = true

    let payload = {
      //CCP Ticketing System Integrated
      "subject": this.supportform.value.subject,
      "description": this.supportform.value.description,
      "customerEmail": loginUserEmail,
      //"instaCntUserId": 254,
      "isActive": true,
      // valid ccp user id should use for createdBy & updatedBy
      "createdBy": 254,
      "updatedBy": 254,
      "isResponseMailSent": false,
      "isResolveMailSent": false,
      "emailSentEscalationLevel": 0,
      "cntTicketCcEmail": [
        {
          "cntTicketCcEmail": "test@gmail.com",
          "isActive": 1
        }
      ],
      "cntTicketBccEmail": [
        {
          "cntTicketBccEmail": "test@gmail.com",
          "isActive": 1
        }
      ],
      "cntProduct": {
        "cntProductId": 13
      },
      "cntDocStatusMaster": {
        "status": "Open"
      },
      "cntDocPriorityMaster": {
        "priority": this.supportform.value.priority
      },
      "cntDocTypeMaster": {
        "type": null
      }
    }



    //  this.gemsOrganisation = JSON.parse(localStorage.gemsOrganisation);
    //  this.supportform.value.cc_emails = [this.gemsOrganisation.gemsOrgEmail];
    this.genericservice.post(this.addticketUrl, payload,true).subscribe(data => {
      this.preloader = false
      this.getsupportTickets();

    })


   
  }

  reset(){
    this.supportform.reset();
  }

  convertHtmlToPlainText(htmlString) {
    return htmlString.replace(/<[^>]+>/g, '');
  }

  getsupportTickets() {

    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.preloader=true;
    // this.loadingBar.start();
    this.genericservice.get(this.getticketUrl + "?domainName=cloudnowtech.com&productId=13&userId=254").subscribe(response => {
      this.ticketlist = JSON.parse(response.data);
      this.preloader=false;
      // this.loadingBar.complete();
      this.ticketsource(response.data);
    }, error => {

    })
  }

  getPriority(priority) {
    switch (priority) {
      case 1: return 'Low';
      case 2: return 'Medium';
      case 3: return 'High';
      case 4: return 'Urgent';
    }
  }

  getStatus(status) {
    switch (status) {
      case 2: return 'Open';
      case 3: return 'Pending';
      case 4: return 'Resolved';
      case 5: return 'Closed';
    }
  }
  ticketsource(data) { 


    this.totalTicketList = JSON.parse(data);
    this.totalCount = this.totalTicketList.length;
    this.findItemsPerPage();
    if(this.totalTicketList.length>10){
      this.ticketlist=this.totalTicketList.slice(0,10);
    }
   
    //console.log(this.ticketlist)
  }
  
  findItemsPerPage() {
    this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);

  }
  goToPageNo(event) {
    console.log('on page change')
  }
  goToNext() {
    this.currentPage++;
    this.start = this.start + this.limit;
    this.limit = this.selectedItemsPerPage;
    this.ticketlist=this.totalTicketList.slice(this.start,this.limit+this.start);
    this.totalCount = this.totalTicketList.length;
    this.findItemsPerPage();
  }
  goToPrev() {
    this.currentPage--;
   
    this.start = this.start - this.limit;
    this.limit = this.selectedItemsPerPage;
    this.ticketlist=this.totalTicketList.slice(this.start,this.limit+this.start);
    this.totalCount = this.totalTicketList.length;
    this.findItemsPerPage();
  }
  changeItemPerPage(event) {
    this.currentPage = 1;
    console.log('event printed' + event)
    this.selectedItemsPerPage = parseInt(event);
    this.refreshList();

  }
  refreshList() {
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.ticketlist=this.totalTicketList.slice(this.start,this.limit+this.start);
    this.totalCount = this.totalTicketList.length;
    this.findItemsPerPage();
    

  }
}
