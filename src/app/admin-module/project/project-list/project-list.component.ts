import { Component, OnInit } from '@angular/core';
import { UrlConstant } from '../../../services/urlConstant';
import { EncryptDecryptLocalStorageService } from '../../../services/encrypt-decrypt-localstorage.service';
import { EncryptDecryptService } from '../../../services/encrypt-decrypt.service';
import { Router } from '@angular/router';
import { Genericservice } from '../../../services/genericservices';
import { commonService } from '../../../services/commonMethodService';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  public perpageOption = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];
  selectedItemsPerPage: number = 10;
  totalprojectList:any=[];
  totalCount: any;
  start: any;
  limit: any;
  totalPages: number;
  currentPage = 1;
  filterkey;
  status: any = "Active";
  selectedStatus: any;
  order: any;
  orderBy: any;
  public orderBoolean = false;

  public organisationId;
  public selectedDeleteObj;
  projectList: any=[];
  
  constructor(private router: Router, private urlconstant: UrlConstant, private genericservice: Genericservice, private commonservice: commonService,
    private encryptdecryptservice: EncryptDecryptService, 
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private loadingBar: LoadingBarService) { }
  ngOnInit() {
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.selectedStatus = this.status;
    this.getProjectList()
  }
  addProjectList(){
    this.router.navigate(['/admin/project/projectList/add']);
  }

  editProjectList(project){
    console.log(project)
    this.router.navigate(['/admin/project/projectList/edit/'+project.gemsProjectMasterId]);

  }

  getProjectList(){
    var payload = {
      "gemsOrganisationId": parseInt(this.encryptdecryptlocalstorage.getLocalStorage('organizationId'))       
  }
    this.genericservice.post(UrlConstant.getProjectList,payload,false).subscribe((response)=>{
      this.totalprojectList=response.data;
      this.totalCount = response.data.length;
      this.paginatedList();
      this.findItemsPerPage();
       })
  }

  deleteProject(project){
  this.selectedDeleteObj=project;
  }

  confirmDelete(){
    this.selectedDeleteObj.isActive=false
    this.genericservice.post(UrlConstant.saveProject, this.selectedDeleteObj,true).subscribe((response)=>{
     if(response.status.success='Success'){
       this.getProjectList();
     }
    })
  }
  
//pagination 
  paginatedList() {
    this.projectList = this.totalprojectList.slice(this.start, this.limit);
    console.log(this.projectList)
  }
  goToNext() {
   
    this.currentPage++;
    this.start = this.start + this.selectedItemsPerPage;
    this.limit = this.limit + this.selectedItemsPerPage;
    this.projectList = this.totalprojectList.slice(this.start, this.limit);
  
  }
  goToPrev() {
    this.currentPage--;
    this.start = this.start - this.selectedItemsPerPage;
    this.limit = this.limit - this.selectedItemsPerPage;
    this.projectList = this.totalprojectList.slice(this.start, this.limit);
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
