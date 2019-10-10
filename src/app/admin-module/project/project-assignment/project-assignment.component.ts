import { Component, OnInit } from '@angular/core';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from 'src/app/services/urlConstant';
import {  Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { DataSharingService } from '../../../services/dataSharing.service';

@Component({
  selector: 'app-project-assignment',
  templateUrl: './project-assignment.component.html',
  styleUrls: ['./project-assignment.component.scss']
})
export class ProjectAssignmentComponent implements OnInit {
  organisationId;
  filterkey:any;
  totalprojectAssignList:any=[];
  projectAssignList:any=[]
  
 
  selectedDelObj:any;
  public saveProjectAssigmentUrl=UrlConstant.saveProjectAssignment

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
  
  status: any = "Active";
  selectedStatus: any;
  order: any;
  orderBy: any;
  public orderBoolean = false;
  constructor(private dataSharingService: DataSharingService, private router :Router, private loadingBar: LoadingBarService, private genericservice: Genericservice, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) {}

  ngOnInit() {
    this.loadingBar.start();
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.selectedStatus = this.status;
    this.organisationId=parseInt( this.encryptdecryptlocalstorage.getLocalStorage('organizationId'))
     this.getProjectAssignement();
  }

  getProjectAssignement(){
    let payload={'gemsOrganisationId':this.organisationId,'isActive':true}
    return this.genericservice.post(UrlConstant.projectAssignmentList,payload ,false).subscribe(response => {
    this.totalprojectAssignList=response.data; 
    this.totalCount = response.data.length;
    this.loadingBar.complete();
    this.paginatedList()
    this.findItemsPerPage()
   
    });
  }

  addAssignment(){
    this.router.navigate(['/admin/project/projectAssignment/add']); 
   }
   editAssignment(obj){
    console.log(obj)
    this.router.navigate(['/admin/project/projectAssignment/edit/'+obj.projectId]);
    }  

    selectedDeleteAssignment(obj){
     console.log(obj)
     this.selectedDelObj=obj.gemsProjectResourceMasterList
 
    }
    deleteProjectAssignment(){
      var payload=[]
    this.selectedDelObj.forEach(element => {
        payload.push({"gemsProjectResourceId":element.gemsProjectResourceId})
      
    });
    console.log(payload)
    
     
     
    
      this.genericservice.post(UrlConstant.deleteProjectAssignmentList,this.selectedDelObj,false).subscribe((response)=>{
       
          if (response.status.success == 'success' || response.status.success == 'Success') {
            
            this.dataSharingService.successMessage('deleted successfully');
          }
          else if (response.status.success == 'Fail' || response.status.success == 'fail') {
            this.dataSharingService.failureMessage(response.status.message);
          }
        
            
               this.getProjectAssignement()
         
        
      })
     
  
   
    }

    //pagination
    paginatedList() {
      this.projectAssignList = this.totalprojectAssignList.slice(this.start, this.limit);
      
    }
    goToNext() {
      this.currentPage++;
      this.start = this.start + this.selectedItemsPerPage;
      this.limit = this.limit + this.selectedItemsPerPage;
      this.projectAssignList = this.totalprojectAssignList.slice(this.start, this.limit);
    }
    goToPrev() {
      this.currentPage--;
      this.start = this.start - this.selectedItemsPerPage;
      this.limit = this.limit - this.selectedItemsPerPage;
      this.projectAssignList = this.totalprojectAssignList.slice(this.start, this.limit);
    }
    findItemsPerPage() {
      this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);
    }
    changeItemPerPage(event) {
    
      this.currentPage = 1;
      this.selectedItemsPerPage = parseInt(event);
      this.start = 0;
      this.limit = this.selectedItemsPerPage;
      this.paginatedList();
      this.findItemsPerPage();
    }
    goToPageNo(event) {
      console.log('on page change')
    }
  
    setOrder(value: string , orderBy) {
      if (this.order === value) {
        // this.reverse = !this.reverse;
        this.orderBoolean = !this.orderBoolean;
        this.orderBy = orderBy;
        // this.orderBy = this.orderBoolean === true ? 'asc' : 'desc';
      }
      this.order = value;
    }
}
