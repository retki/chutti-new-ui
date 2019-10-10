import { Component, OnInit } from '@angular/core';
import { UrlConstant } from '../../../../services/urlConstant';
import { EncryptDecryptLocalStorageService } from '../../../../services/encrypt-decrypt-localstorage.service';
import { EncryptDecryptService } from '../../../../services/encrypt-decrypt.service';
import { Router } from '@angular/router';
import { Genericservice } from '../../../../services/genericservices';
import { commonService } from '../../../../services/commonMethodService';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  public adddepartmentform: FormGroup;
  public deparmentlistUrl = UrlConstant.departmentlistApi;
  public getdepartmentleadurl = UrlConstant.getdepartmentleadApi;
  public savedepartmenturl = UrlConstant.savedepartmentApi;
  departmentlist: any = [];
  getdepartmentleadlist: any = [];
  savedepartmentlist: any =[];
  departleadobj: any=[];
  departmentidobjects: any=[];
  filterkey;
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
  alldepartmentlist: any=[];
  deleteDepartment: any=[];
  updateDepartment: any=[];
  preloader: boolean = false;
  selectedName:any;
  deleteDepartmentName = '';
  constructor(private router: Router, private urlconstant: UrlConstant, private genericservice: Genericservice, private commonservice: commonService,
              private encryptdecryptservice: EncryptDecryptService,
              private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private loadingBar: LoadingBarService) { }

  ngOnInit() {
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.validateForm();
    this.getdepartment();
    this.getdepartmentlead();
    this.inputActive();
    this.subscribeForm();
  }
  // validation
  validateForm() {
    this.adddepartmentform = new FormGroup({
      departmentName: new FormControl('', [Validators.required]),
      departmentCode: new FormControl('', [Validators.required]),
      departmentDescription: new FormControl('', [Validators.required]),
      departmentlead: new FormControl('', [Validators.required]),
      departmentId: new FormControl('')
    });
  }

  subscribeForm(){
    this.adddepartmentform.valueChanges.subscribe(value=>{
      console.log(value);
      
    })
  }
  getdepartment() {
    this.preloader = true;
    const payloadObj = {
      gemsOrganisation: { gemsOrgId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId') }
    };
    return this.genericservice.post(this.deparmentlistUrl, payloadObj, false).subscribe(response => {
      this.departmentlist = response.data;
      this.totalCount = response.data.length;
      this.paginateddepartmentList();
      this.findItemsPerPage();
      for (const leadObj of this.departmentlist) {
        this.departleadobj.push(leadObj.departmentlead);
      }
      for (const departmentidObj of this.departmentlist) {
        this.departmentidobjects.push(departmentidObj.gemsDepartmentId);
      }
      this.preloader = false;
    });
  }

  paginateddepartmentList() {
    this.alldepartmentlist = this.departmentlist.slice(this.start, this.limit);
  }
  goToNext() {
    this.currentPage++;
    this.start = this.start + this.selectedItemsPerPage;
    this.limit = this.limit + this.selectedItemsPerPage;
    this.alldepartmentlist = this.departmentlist.slice(this.start, this.limit);
  }
  goToPrev() {
    this.currentPage--;
    this.start = this.start - this.selectedItemsPerPage;
    this.limit = this.limit - this.selectedItemsPerPage;
    this.alldepartmentlist = this.departmentlist.slice(this.start, this.limit);
  }
  findItemsPerPage() {
    this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);
  }
  changeItemPerPage(event) {
    this.currentPage = 1;
    this.selectedItemsPerPage = parseInt(event);
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.paginateddepartmentList();
    this.findItemsPerPage();
  }
  // Get teamlead
  getdepartmentlead() {
    const payloadObj = {
      gemsOrganisationId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId')
    };
    return this.genericservice.post(this.getdepartmentleadurl, payloadObj, false).subscribe(response => {
      this.getdepartmentleadlist = response.data;
      console.log('hello this is employee obnj',response.data)
    });
  }
  onChange(event) {
    console.log(event)
  }
  getSelecteDepartment(gemsDesignationId){
    for(let obj of this.getdepartmentleadlist){
      if(obj.gemsDesignationId == gemsDesignationId){
        return obj;
        
      }

    }
  }
  // save Department
  savedepartment() {
    var payload =  {
      'gemsDepartmentId':'', 
      "departmentCode":this.adddepartmentform.value.departmentCode,
      "departmentName":this.adddepartmentform.value.departmentName,
      "departmentDescription":this.adddepartmentform.value.departmentDescription,
      "isActive":true,
      "createdBy":this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      "updatedBy":this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      "createdOn":new Date(),
      "updatedOn":new Date(),
      "departmentlead":this.getSelecteDepartment(this.adddepartmentform.value.departmentlead),
      "gemsOrganisation":{ "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId') },
   }

   if(this.adddepartmentform.value.departmentId !== '') {
     payload.gemsDepartmentId = this.adddepartmentform.value.departmentId ;
   }
    return this.genericservice.post(this.savedepartmenturl, payload, true).subscribe(response => {
      if(response !== null) {
        this.adddepartmentform.reset()
        this.getdepartment();
      }
    });
  }

  // update departments
  upadteobj(departmentlistobj) {
    this.updateDepartment = departmentlistobj;
    this.adddepartmentform.controls.departmentId.setValue(this.updateDepartment.gemsDepartmentId);
    this.adddepartmentform.controls.departmentName.setValue(this.updateDepartment.departmentName);
    this.adddepartmentform.controls.departmentCode.setValue(this.updateDepartment.departmentCode);
    this.adddepartmentform.controls.departmentDescription.setValue(this.updateDepartment.departmentDescription);
    this.adddepartmentform.controls.departmentlead.setValue(this.updateDepartment.departmentlead.gemsDesignationId !== null?this.updateDepartment.departmentlead.gemsDesignationId:'');
  }

  deleteObject(objecct) {
    this.deleteDepartment = objecct;
    this.deleteDepartmentName=objecct.departmentName;
  }

  deletedepartment() {
    var payload =  {
      "departmentCode":this.deleteDepartment.departmentCode,
      "departmentName":this.deleteDepartment.departmentName,
      "departmentDescription":this.deleteDepartment.departmentDescription,
      "isActive":false,
      "updatedBy":this.encryptdecryptlocalstorage.getLocalStorage('userId'),
      "createdOn":new Date(),
      "updatedOn":new Date(),
      "departmentlead":this.deleteDepartment.departmentlead,
      "gemsDepartmentId":this.deleteDepartment.gemsDepartmentId,
      "gemsOrganisation":this.deleteDepartment.gemsOrganisation,
      "createdBy": this.deleteDepartment.createdBy
   }
    return this.genericservice.post(this.savedepartmenturl, payload, true).subscribe(response => {
      if(response !== null) {
          this.getdepartment();
      }
    });
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

  resetForm() {
    this.adddepartmentform.reset();
  }
}
