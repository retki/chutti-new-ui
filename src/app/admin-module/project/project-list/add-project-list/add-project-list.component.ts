import { Component, OnInit } from '@angular/core';
import { UrlConstant } from '../../../../services/urlConstant';
import { EncryptDecryptLocalStorageService } from '../../../../services/encrypt-decrypt-localstorage.service';
import { EncryptDecryptService } from '../../../../services/encrypt-decrypt.service';
import { Router } from '@angular/router';
import { Genericservice } from '../../../../services/genericservices';
import { commonService } from '../../../../services/commonMethodService';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-add-project-list',
  templateUrl: './add-project-list.component.html',
  styleUrls: ['./add-project-list.component.scss']
})
export class AddProjectListComponent implements OnInit {
  public addprojectform: FormGroup;
  public getCustomerListUrl = UrlConstant.getCustomerListApi
  public getProjectTypeListUrl=UrlConstant.getProjectTypeList
  customerList: any = []
  projectTypeList:any=[]
  autoProjectCode: string;
  randomNumberOnAddProject: number;
  public isProjectNameExist:boolean;
  isLoadingResults: boolean;
  gemsEmployeeId: number;
  isLoadingResults_Footer: boolean;
  isDataSaving: boolean;
  d: Date;
  disableDate:Date;
  

  constructor(private router: Router, private urlconstant: UrlConstant, private genericservice: Genericservice,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private loadingBar: LoadingBarService) {
      this.isLoadingResults = false;
      this.isDataSaving = false;
     }
   
  ngOnInit() {
    this.validateForm();
    this.getCustomerList();
    this.getProjectTypeList();
    this.inputActive();
    this.autoProjectCode = '';
    this.randomNumberOnAddProject = (Math.random() * 9999 - 1111 + 1111);
  }
  inputActive() {
    $('.form-control').focus(function() {
      $(this)
        .parents('.form-group')
        .addClass('focused');
    });

    $('.form-control').blur(function() {
      const inputValue = $(this).val();
      if (inputValue === '') {
        $(this).removeClass('filled');
        $(this)
          .parents('.form-group')
          .removeClass('focused');
      } else {
        $(this).addClass('filled');
      }
    });
  }
  validateForm() {
    this.addprojectform = new FormGroup({
      gemsCustomerMaster: new FormControl('', [Validators.required]),
      projectTypeMaster: new FormControl('', [Validators.required]),
      projectName: new FormControl('', [Validators.required]),
      projectDescription: new FormControl('', [Validators.required]),
      projectCode: new FormControl('', [Validators.required]),
      projectStatus: new FormControl('', [Validators.required]),
     // currentType: new FormControl('', [Validators.required]),
      projectCost: new FormControl('', [Validators.required]),
      billingType: new FormControl('', [Validators.required]),
      projectStartDate: new FormControl('', [Validators.required]),
      projectEndDate: new FormControl('', [Validators.required])
    });

    
  }

  saveProjectList() {
    let payload = []

  }
  getCustomerList () {

    console.log(this.autoProjectCode)
    var payload = {
      "gemsOrganisation":
        {
          "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')

        }
    }
    this.genericservice.post(this.getCustomerListUrl, payload, false).subscribe((response) => {

      this.customerList = response.data
    })
  }
  getProjectTypeList=()=>{
    var payload = {
      "gemsOrganisation":
        {
          "gemsOrgId":parseInt(this.encryptdecryptlocalstorage.getLocalStorage('organizationId'))
        }
    }
    this.genericservice.post(this.getProjectTypeListUrl,payload,false).subscribe((response)=>{
      this.projectTypeList=response.data
    })

  }
  projectCodeDynamic(projectCode){
  
    if (projectCode) {
      if (projectCode.length >= 1) {
       
        const tempOrganisationCode = projectCode.substr(0.3);
        this.autoProjectCode = tempOrganisationCode + '_' + Math.floor(this.randomNumberOnAddProject);
      }
      if (projectCode.length < 1) {
        this.autoProjectCode = '';
      }
    }
  }
  omit_special_char(event){   
    var k;  
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 0 || (k >= 48 && k <= 57)); 
  }
  
  
  omit_special_char_WithoutSpace(event){   
    var k;  
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return((k > 64 && k < 91) || (k > 96 && k < 123) || k==32 || k == 8 || k == 0 || (k >= 48 && k <= 57)); 
  }
  clearProjectName() {
    this.isProjectNameExist = false;
    }
  addProjectDetails() {
    this.autoProjectCode = ''; 
  }
  addProjectSubmit(){
    console.log(this.addprojectform)
    this.isDataSaving = true;
    this.isLoadingResults = true;
    this.gemsEmployeeId =parseInt(this.encryptdecryptlocalstorage.getLocalStorage('employeeId'))
    this.addprojectform.value.gemsOrganisation={
         "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
    }
    this.addprojectform.value.createdOn = new Date();
    this.addprojectform.value.updatedOn = new Date();
    this.addprojectform.value.updatedBy = this.gemsEmployeeId;
    this.addprojectform.value.createdBy =  this.gemsEmployeeId;
    this.addprojectform.value.isActive = true; // Making the Project as active.
    this.genericservice.post(UrlConstant.saveProject,this.addprojectform.value,true).subscribe((response)=>{
    if(response.status.success="Success"){
    console.log(response);
    this.router.navigate(['/admin/project']);
    }
    })
  
  }
  convertDateToDB(oldDate: Date) {
    this.d = new Date(oldDate);
    return ( this.d.getFullYear() +'-'+(this.d.getMonth() + 1) + '-' +this.d.getDate());
  
  }
  cancel(){
    this.addprojectform.reset();
    this.router.navigate(['/admin/project']);
  }
 
 onchangeDate(e){
  
  this.disableDate=e.target.value
 }

 
 disableBasedDate(): string{
   if(this.disableDate!=undefined){
  return new Date(this.disableDate).toISOString().split('T')[0]
   }
 }

}
