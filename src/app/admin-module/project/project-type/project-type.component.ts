import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genericservice } from 'src/app/services/genericservices';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { UrlConstant } from 'src/app/services/urlConstant';
import { commonService } from 'src/app/services/commonMethodService';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-project-type',
  templateUrl: './project-type.component.html',
  styleUrls: ['./project-type.component.scss']
})
export class ProjectTypeComponent implements OnInit {
  projectTypeList: any = [];
  projectList: any = [];
  public addprojecttype: FormGroup;
  public editprojecttype: FormGroup;
  public saveProjectTypeUrl = UrlConstant.saveProjectTypeApi;
  filterkey: any;
  selectedEditObj:any;
  selectedDelObj:any;
  public perpageOption = [

    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];
  selectedItemsPerPage: number = 10;
  totalEmployeeList: any;
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
  constructor(private router: Router, private genericservice: Genericservice, private commonservice: commonService,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) { }

  ngOnInit() {
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.selectedStatus = this.status;
    this.validateAddProjectForm()
    this.validateEditProjectForm()
    this.getProjectType();
   
  }


  validateAddProjectForm() {
    this.addprojecttype = new FormGroup({
      project_Type: new FormControl('', [Validators.required]),
      project_Description: new FormControl('', [Validators.required]),
    })
  }
  validateEditProjectForm() {
    this.editprojecttype = new FormGroup({
      projectTypeCode: new FormControl('', [Validators.required]),
      projectTypeDescription: new FormControl('', [Validators.required]),
    })
  }

  getProjectType() {
    var payload = {
      'gemsOrganisation': { 'gemsOrgId': parseInt(this.encryptdecryptlocalstorage.getLocalStorage('organizationId')) }
    }
    this.genericservice.post(UrlConstant.getProjectTypeList, payload, false).subscribe((response) => {
      this.projectTypeList = response.data;
      this.totalCount = response.data.length;
      this.paginatedProjectList();
      this.findItemsPerPage();
      console.log(this.projectTypeList)
    })
  }
  saveProjectType() {

    var payload = {
      createdBy: parseInt(this.encryptdecryptlocalstorage.getLocalStorage('employeeId')),
      createdOn: new Date(),
      gemsOrganisation: { gemsOrgId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId') },
      isActive: true,
      projectTypeCode: this.addprojecttype.value.project_Type,
      projectTypeDescription: this.addprojecttype.value.project_Description,
      updatedBy: parseInt(this.encryptdecryptlocalstorage.getLocalStorage('employeeId')),
      updatedOn: new Date()

    }

    this.genericservice.post(this.saveProjectTypeUrl, payload, true).subscribe((response) => {

      if (response.status.success == 'Success') {

        this.resetForm()
        this.getProjectType()
      }
    })



  }
  getSelectedProjectType(typeObj) {
    console.log(typeObj);
    this.selectedEditObj=typeObj
    this.editprojecttype.controls.projectTypeCode.patchValue(typeObj.projectTypeCode);
    this.editprojecttype.controls.projectTypeDescription.patchValue(typeObj.projectTypeDescription)
    console.log( this.editprojecttype.value)
  }
  updateProjectType() {
    this.selectedEditObj.projectTypeCode=this.editprojecttype.controls['projectTypeCode'].value
    this.selectedEditObj.projectTypeDescription=this.editprojecttype.controls['projectTypeDescription'].value
    this.selectedEditObj.updatedBy= parseInt(this.encryptdecryptlocalstorage.getLocalStorage('employeeId'))
    this.selectedEditObj.updatedOn=new Date()
    
    this.genericservice.post(this.saveProjectTypeUrl, this.selectedEditObj, true).subscribe((response) => {

      if (response.status.success == 'Success') {
        this.resetForm()
        this.getProjectType()
      }
    })

  }

  getDeleteProject(typeObj){
    this.selectedDelObj=typeObj
  
  }
  deleteProject(){
    this.selectedDelObj.isActive=false
    this.genericservice.post(this.saveProjectTypeUrl, this.selectedDelObj, true).subscribe((response) => {

      if (response.status.success == 'Success') {
        this.resetForm()
        this.getProjectType()
      }
    })

  }

  resetForm(){
    this.addprojecttype.reset();
    this.editprojecttype.reset()
  }



  ///pagination
  paginatedProjectList() {
    this.projectList = this.projectTypeList.slice(this.start, this.limit);
  }
  goToNext() {
    this.currentPage++;
    this.start = this.start + this.selectedItemsPerPage;
    this.limit = this.limit + this.selectedItemsPerPage;
    this.projectList = this.projectTypeList.slice(this.start, this.limit);
  }
  goToPrev() {
    this.currentPage--;
    this.start = this.start - this.selectedItemsPerPage;
    this.limit = this.limit - this.selectedItemsPerPage;
    this.projectList = this.projectTypeList.slice(this.start, this.limit);
  }
  findItemsPerPage() {
   
    this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);
    
  }
  changeItemPerPage(event) {
    this.currentPage = 1;
    this.selectedItemsPerPage = parseInt(event);
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.paginatedProjectList();
    this.findItemsPerPage();
  }
  goToPageNo(event) {
    console.log('on page change')
  }
  //STATUS CHANGE (ACTIVE \ SUSPEND)
 
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

