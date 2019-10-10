import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlConstant } from 'src/app/services/urlConstant';
import { Genericservice } from 'src/app/services/genericservices';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-edit-project-list',
  templateUrl: './edit-project-list.component.html',
  styleUrls: ['./edit-project-list.component.scss']
})
export class EditProjectListComponent implements OnInit {
  projectId;
  projectDetail;
  selectedCustomer;
  selectedProjectType;
  public editprojectform: FormGroup;
  public getCustomerListUrl = UrlConstant.getCustomerListApi
  public getProjectTypeListUrl=UrlConstant.getProjectTypeList
  customerList: any = []
  projectTypeList:any=[]
  autoProjectCode: string;
  randomNumberOnAddProject: number;
  public isProjectNameExist:boolean;
  isLoadingResults: boolean;
  isLoadingResults_Footer: boolean;
  disableDate:Date;
  constructor( private loadingBar: LoadingBarService,private router: Router, private urlconstant: UrlConstant,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private genericservice: Genericservice,private activatedRoute: ActivatedRoute){ 
  
  }

  ngOnInit() {
    this.loadingBar.start();
    this.activatedRoute.params.subscribe(params => {
     this.projectId=params.id;
     console.log(this.projectId);
    });
    this.getProductById();
    this.editForm();
    this.getCustomerList();
    this.getProjectTypeList();
    this.randomNumberOnAddProject = (Math.random() * 9999 - 1111 + 1111);
    this.inputActive();
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
  editForm() {
    this.editprojectform = new FormGroup({
      gemsCustomerMaster: new FormControl('', [Validators.required]),
      projectTypeMaster: new FormControl('', [Validators.required]),
      projectName: new FormControl('', [Validators.required]),
      projectDescription: new FormControl('', [Validators.required]),
      projectCode: new FormControl('', [Validators.required]),
      projectStatus: new FormControl('', [Validators.required]),
      projectCost: new FormControl('', [Validators.required]),
      billingType: new FormControl('', [Validators.required]),
      projectStartDate: new FormControl('', [Validators.required]),
      projectEndDate: new FormControl('', [Validators.required])
    });
  }
  getProductById(){
this.genericservice.post(UrlConstant.getProjectById,{'gemsProjectMasterId': parseInt(this.projectId)}, false).subscribe((response) => {
this.projectDetail=response.data;
this.loadingBar.complete();
this.editprojectform.controls.projectName.patchValue(this.projectDetail.projectName);
this.autoProjectCode=this.projectDetail.projectCode
this.editprojectform.controls.projectCost.patchValue(this.projectDetail.projectCost);
this.editprojectform.controls.billingType.patchValue(this.projectDetail.billingType);
this.editprojectform.controls.projectDescription.patchValue(this.projectDetail.projectDescription);
this.editprojectform.controls.projectStatus.patchValue(this.projectDetail.projectStatus);
this.editprojectform.controls.projectStartDate.patchValue(this.projectDetail.projectStartDate);
this.editprojectform.controls.projectEndDate.patchValue(this.projectDetail.projectEndDate);
this.editprojectform.controls.gemsCustomerMaster.patchValue(this.projectDetail.gemsCustomerMaster.gemsCustomerMasterId);
this.editprojectform.controls.projectTypeMaster.patchValue(this.projectDetail.projectTypeMaster.projectTypeMasterId);
})
  }
  getCustomerList () {
    var payload = {
      "gemsOrganisation":
        {
          "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
        }
    }
      this.genericservice.post(this.getCustomerListUrl, payload, false).subscribe((response) => {
      this.customerList = response.data;
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
cancel(){
  this.editprojectform.reset();
  this.router.navigate(['/admin/project']);
}
  updateProject(){
      this.editprojectform.value.updatedOn = new Date();
      this.editprojectform.value.updatedBy = parseInt(this.encryptdecryptlocalstorage.getLocalStorage('employeeId'))
      this.editprojectform.value.isActive = true; // Making the Project as active.
      this.editprojectform.value.gemsOrganisation={
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
      }
      this.editprojectform.value.gemsCustomerMaster={
        "gemsCustomerMasterId": this.editprojectform.controls['gemsCustomerMaster'].value
      }
      this.editprojectform.value.projectTypeMaster={
        "projectTypeMasterId": this.editprojectform.controls['projectTypeMaster'].value
      }
      this.editprojectform.value.gemsProjectMasterId=this.projectDetail.gemsProjectMasterId;
      this.editprojectform.value.createdBy=this.projectDetail.createdBy;
      this.editprojectform.value.createdOn=this.projectDetail.createdOn;
      this.genericservice.post(UrlConstant.saveProject,this.editprojectform.value,true).subscribe((response)=>{
      if(response.status.success="Success"){
      console.log(response);
      this.router.navigate(['/admin/project']);
     }
      })
    
    
  }
  projectCodeDynamic(projectCode){
    if (projectCode) {
      if (projectCode.length >= 1) {
        const tempOrganisationCode = projectCode.substr(0,3);
        this.autoProjectCode = tempOrganisationCode + '_' + Math.floor(this.randomNumberOnAddProject);
      }
      if (projectCode.length < 1) {
        this.autoProjectCode = '';
      }
    }
  }
  omit_special_char_WithoutSpace(event){   
    var k;  
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return((k > 64 && k < 91) || (k > 96 && k < 123) || k==32 || k == 8 || k == 0 || (k >= 48 && k <= 57)); 
  }
  clearProjectName() {
    this.isProjectNameExist = false;
    }

    onchangeDate(e){
  
      this.disableDate=e.target.value
     }
    
     
     disableBasedDate(): string{
      if (this.disableDate != undefined) {
      return new Date(this.disableDate).toISOString().split('T')[0]
      }
     }
    
}
