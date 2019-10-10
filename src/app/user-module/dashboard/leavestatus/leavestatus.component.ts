
import { Component, OnInit, Input } from '@angular/core';
import { UrlConstant } from '../../../services/urlConstant';
import { Genericservice } from '../../../services/genericservices';
import { EncryptDecryptLocalStorageService } from '../../../services/encrypt-decrypt-localstorage.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataSharingService } from '../../../services/dataSharing.service';


@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.scss']
})

export class LeavestatusComponent implements OnInit {
  // @Input('dashBoardPaginationView') dashBoardPaginationView: boolean = true;
  // @Input('showdashwhoseonleavepagination') showdashwhoseonleavepagination: boolean;
  public leavestatusUrl = UrlConstant.leavestatusApi;
  displayHide = false;
  public leavestausList: any = [];
  //public list: any = [];
  totalCount: any;
  currentPage = 1;
  totalPages = 1;
  public PaginationObject;
  public start: number;
  public limit = 10;
  public paginationShowLimit: Boolean = false;
  public perpageOption = [
    //{ value: '3', label: '3' },
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];
  selectedItemsPerPage = 10;
  public status = "";
  public pagination: boolean = false;
  public isData: boolean = false;
  constructor(private urlconstant: UrlConstant, private genericservice: Genericservice,
     private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,private dataSharingService:DataSharingService) {
    this.dataSharingService.appliedFlagObs.subscribe(data=>{
      console.log('called..........')
      if(data=='true'){
        console.log('called..........')
        this.leavestatus();
      }
    })
  }

  ngOnInit() {
    this.leavestatus();
  }
  leavestatus() {
    let payloadReqObj = {
      "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      //"reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      "status": null
    }
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
      if (response.status.success === 'Success') {
        this.isData = true;
        //this.leavestausList = response.data;
        this.leavestausList = this.leaveList(response);
        this.totalCount = response.totalResult;
        this.findItemsPerPage();
      }
      else {
        this.isData = false;
      }
    }, error => {
      console.log(error)
    })
  }


  leaveList(response) {
    var i;
    var list=[];
    for (i = 0; i < response.data.length; i++) {
      var responseObj = response.data[i];
      responseObj.permissionDuration = this.duration(responseObj);
      list.push(responseObj);
    }
    return list;

  }

  findItemsPerPage() {
    this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);

  }
  goToPageNo(event) {
    console.log('on page change')
  }
  goToNext(event) {
    this.currentPage++;
    let payloadReqObj = {
      "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      //"reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      "status": null
    }
    this.start = this.start + this.limit;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
      if (response.status.success === 'Success') {
        this.isData = true;
        this.leavestausList = this.leaveList(response);
        this.totalCount = response.totalResult;
        this.findItemsPerPage();
      }
      else {
        this.isData = false;
      }
    }
    )
  }
  goToPrev() {
    this.currentPage--;
    let payloadReqObj = {
      "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      //"reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      "status": null
    }
    this.start = this.start - this.limit;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {

      if (response.status.success === 'Success') {
        this.isData = true;
        this.leavestausList = this.leaveList(response);
        this.totalCount = response.totalResult;
        this.findItemsPerPage();
      }
      else {
        this.isData = false;
      }
    }
    )
  }
  changeItemPerPage(event) {
    this.currentPage = 1;
    console.log('event printed' + event)
    this.selectedItemsPerPage = parseInt(event);
    this.refreshList();

  }
  refreshList() {

    let payloadReqObj = {
      "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      //"reportingTo": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      "organisationId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      "status": null
    }
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    return this.genericservice.post(this.leavestatusUrl + "?start=" + this.start + "&limit=" + this.limit + "&status=" + this.status, payloadReqObj, false).subscribe(response => {
      if (response.status.success === 'Success') {
        this.isData = true;
        this.leavestausList = this.leaveList(response);
        this.totalCount = response.totalResult;
        this.findItemsPerPage();
      }
      else {
        this.isData = false;
      }
    }
    )

  }

  duration(responseObject) {
    if (responseObject.leaveTypeCode == "PER") {
      return responseObject.permissionDuration + " hrs";
    } else {
      var noOfDays = responseObject.permissionDuration;
      var noOfWeek = Math.trunc(noOfDays / 7);
      var remainder = noOfDays % 7;

      var days;
      if (noOfWeek >= 1) {
        if (remainder > 0) {
          days = remainder == 1 ? remainder + " day" : remainder + " days";
        } else {
          days = "";
        }

        return noOfWeek > 1 ? noOfWeek + " weeks " + days : noOfWeek + " week " + days;

      } else if (responseObject.leaveDescription != "Permission" && noOfDays > 1) {
        return noOfDays + " days"

      } else {
        return noOfDays + " day";
      }
    }
  }

}
