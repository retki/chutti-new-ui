import { Component, OnInit } from '@angular/core';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { Genericservice } from 'src/app/services/genericservices';
import { TabChangeService } from '../../../../services/tab-change.service'
import { UrlConstant } from 'src/app/services/urlConstant';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { element } from 'protractor';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { DataSharingService } from '../../../../services/dataSharing.service';
@Component({
  selector: 'app-edit-project-assignment',
  templateUrl: './edit-project-assignment.component.html',
  styleUrls: ['./edit-project-assignment.component.scss']
})
export class EditProjectAssignmentComponent implements OnInit {
  projectAssignmentDetail;
  resourceId: any;
  public organisationId;
  masterProjectList: any;
  masterEmployeeList: any;
  filterkey: any
  dropdownList = [];
  selectedItems = [];
  getEmpFromList = [];
  dropdownSettings = {};
  assignEmpList: any = [];
  tempDeleteObj = []
  selectedResourceListWithFullObj: any = [];
  editForm: FormGroup;
  currencyList = [{ name: 'INR', value: 'inr' }]
  disableDate: Date;
  projectId: any;
  constructor( private dataSharingService: DataSharingService,private loadingBar: LoadingBarService,private tabChangeService: TabChangeService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private genericservice: Genericservice, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) { }

  ngOnInit() {
    this.loadingBar.start();
    this.activatedRoute.params.subscribe(params => {
      this.resourceId = params.id;
      console.log(this.resourceId);
    });
    this.organisationId = parseInt(this.encryptdecryptlocalstorage.getLocalStorage('organizationId'))
    this.getEmployeeList();
    this.getProjectList();


    this.inputActive();
   

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'gemsEmployeeMasterId',
      textField: 'employeeFirstName',
      itemsShowLimit: 5,
      allowSearchFilter: true,
      enableCheckAll: false,
      defaultOpen: true,
    };
    this.createAddForm();
    this.inputActive();

  }





  createAddForm() {
    this.editForm = this.formBuilder.group({
      gemsProjectMaster: new FormControl('', [Validators.required]),
      assign: new FormArray([])
    })
  }

  // convenience getters for easy access to form fields
  get f() { return this.editForm.controls; }
  get formAssign() { return this.f.assign as FormArray; }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems)
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onchangeDate(e) {

    this.disableDate = e.target.value
  }


  disableBasedDate(): string {
    if (this.disableDate != undefined) {
      return new Date(this.disableDate).toISOString().split('T')[0]
    }
  }
  getProjectList() {
    let payload = { 'gemsOrganisationId': this.organisationId }
    return this.genericservice.post(UrlConstant.getProjectList, payload, false).subscribe(response => {

      this.masterProjectList = response.data
    });
  }

  getEmployeeList() {
    let payload = { 'gemsOrganisationId': this.organisationId }
    return this.genericservice.post(UrlConstant.getEmployeeListApi, payload, false).subscribe(response => {

      this.masterEmployeeList = response.data

      this.getProjectAssignmentById();
    });
  }


  getProjectAssignmentById() {
    var payload = {
      "gemsOrganisationId": this.organisationId,
      "projectId": parseInt(this.resourceId)
    }
    this.genericservice.post(UrlConstant.projectResourceById, payload, false).subscribe((response) => {
      this.projectAssignmentDetail = response.data;
      this.loadingBar.complete();
      this.projectId = this.projectAssignmentDetail[0].projectId
      this.editForm.controls.gemsProjectMaster.patchValue(this.projectAssignmentDetail[0].projectId);
      

      this.getEmpFromList = this.projectAssignmentDetail[0].gemsProjectResourceMasterList;

      this.getEmpFromList.forEach((employee, index) => {

        this.selectedResourceListWithFullObj.push(employee)

        this.selectedItems = this.selectedResourceListWithFullObj;
        console.log(this.selectedItems)
      })
      if (this.getEmpFromList.length > 0) {
        for (let i = 0; i < this.getEmpFromList.length; i++) {

          this.formAssign.push(this.formBuilder.group({
            gemsEmployeeMaster: new FormControl('', [Validators.required]),
            resourceStartDate: new FormControl('', [Validators.required]),
            resourceEndDate: new FormControl('', [Validators.required]),
            projectBillingRate: new FormControl('', [Validators.required]),
            currency: new FormControl('', [Validators.required]),
            scheduleEffort: new FormControl('', [Validators.required]),
          }));
        }
      }
      let prepop = [];

      this.getEmpFromList.forEach((resource, index) => {
        let t;
        t = {
          gemsEmployeeMaster: this.selectedResourceListWithFullObj[index].employeeFirstName,
          resourceStartDate: this.getEmpFromList[index].resourceStartDate,
          resourceEndDate: this.getEmpFromList[index].resourceEndDate,
          projectBillingRate: this.getEmpFromList[index].projectBillingRate,
          currency: this.currencyList[0].name,
          scheduleEffort: this.getEmpFromList[index].scheduleEffort
        }
        prepop.push(t)
      });


      this.formAssign.patchValue(prepop);

      this.test();
    

   


    }
    )
  }
  onEmployeeAssign() {
    this.formAssign.clear();
    this.selectedResourceListWithFullObj = [];
    this.selectedItems.forEach((selected, index) => {
      this.masterEmployeeList.forEach(master => {
        if (selected.gemsEmployeeMasterId == master.gemsEmployeeMasterId) {
          this.selectedResourceListWithFullObj.push(master);
        }
      });
    });

    if (this.selectedItems.length > 0) {
      for (let i = 0; i < this.selectedItems.length; i++) {

        this.formAssign.push(this.formBuilder.group({
          gemsEmployeeMaster: new FormControl('', [Validators.required]),
          resourceStartDate: new FormControl('', [Validators.required]),
          resourceEndDate: new FormControl('', [Validators.required]),
          projectBillingRate: new FormControl('', [Validators.required]),
          currency: new FormControl('', [Validators.required]),
          scheduleEffort: new FormControl('', [Validators.required]),
        }));
      }
    }
    let prepop = [];


    var newarrayList = this.getEmpFromList.concat(this.selectedItems)
    var uniq = {};
    var temp = newarrayList.filter(e => !uniq[e.gemsEmployeeMasterId] && (uniq[e.gemsEmployeeMasterId] = true));

    this.getEmpFromList = temp
    this.getEmpFromList.forEach((employee, index) => {
      let t;
      t = {
        gemsEmployeeMaster: this.selectedResourceListWithFullObj[index].employeeFirstName,
        resourceStartDate: this.getEmpFromList[index].resourceStartDate,
        resourceEndDate: this.getEmpFromList[index].resourceEndDate,
        projectBillingRate: this.getEmpFromList[index].projectBillingRate,
        currency: this.currencyList[0].name,
        scheduleEffort: this.getEmpFromList[index].scheduleEffort
      }

      prepop.push(t)

    })



    this.formAssign.patchValue(prepop);

    this.test();
  }








  saveassignment() {
     this.editForm.value.assign.forEach((element) => {
      element.updatedOn = new Date();
      element.createdOn = new Date();
      element.createdBy = parseInt(this.encryptdecryptlocalstorage.getLocalStorage('employeeId'))
      element.updatedBy = parseInt(this.encryptdecryptlocalstorage.getLocalStorage('employeeId'));
      element.gemsOrganisation = { "gemsOrgId": this.organisationId };
      element.isActive = true;
      element.gemsProjectMaster = { "gemsProjectMasterId": this.editForm.value.gemsProjectMaster }
     
      this.getEmpFromList.filter((item) => {
        if (item.employeeFirstName === element.gemsEmployeeMaster) {
          element.gemsEmployeeMaster = item
        }
      })

    element.gemsEmployeeMaster.gemsProjectResourceId!==undefined?  element.gemsProjectResourceId = element.gemsEmployeeMaster.gemsProjectResourceId:null;     
     })
  
 
    return this.genericservice.post(UrlConstant.saveProjectAssignmentList, this.editForm.value.assign, true).subscribe((response) => {
    
      if (response.status.success == 'success' || response.status.success == 'Success') {
        console.log(response)
        this.dataSharingService.successMessage(response.status.message);
      }
      else if (response.status.success == 'Fail' || response.status.success == 'fail') {
        this.dataSharingService.failureMessage(response.status.message);
      }
      this.tabChangeService.setActivateTab('assignment')
        })



  }

  onCancel() {
  
    
    this.tabChangeService.setActivateTab('assignment')
  }
  deleteEmployee(i) {
    this.formAssign.clear();

    if (this.selectedResourceListWithFullObj.length > 0) {
      this.selectedItems=[]
    /* if you click on cross(delete) a record which is already saved we need to make isActive as false
     or else we just need to remove from view but should not call api */
      this.tempDeleteObj.push(this.selectedResourceListWithFullObj[i]);
      if(this.selectedResourceListWithFullObj[i].gemsProjectResourceId!==undefined){
        this.removeAssignee();
      }

      setTimeout(() => {
    /* splice the deleted object from dropdown and from formcontrol array*/
        this.selectedResourceListWithFullObj.splice(i, 1)
        this.selectedItems=this.selectedResourceListWithFullObj
       console.log(this.selectedItems)

        if (this.selectedResourceListWithFullObj.length > 0) {
          for (let i = 0; i < this.selectedResourceListWithFullObj.length; i++) {

            this.formAssign.push(this.formBuilder.group({
              gemsEmployeeMaster: new FormControl('', [Validators.required]),
              resourceStartDate: new FormControl('', [Validators.required]),
              resourceEndDate: new FormControl('', [Validators.required]),
              projectBillingRate: new FormControl('', [Validators.required]),
              currency: new FormControl('', [Validators.required]),
              scheduleEffort: new FormControl('', [Validators.required]),
            }));
          }
        }
        let prepop = [];


     


        this.selectedResourceListWithFullObj.forEach((employee, index) => {
          let t;
          t = {
            gemsEmployeeMaster: this.selectedResourceListWithFullObj[index].employeeFirstName,
            resourceStartDate: this.selectedResourceListWithFullObj[index].resourceStartDate,
            resourceEndDate: this.selectedResourceListWithFullObj[index].resourceEndDate,
            projectBillingRate: this.selectedResourceListWithFullObj[index].projectBillingRate,
            currency: this.currencyList[0].name,
            scheduleEffort: this.selectedResourceListWithFullObj[index].scheduleEffort
          }

          prepop.push(t)

        })


      

        this.formAssign.patchValue(prepop);


        this.test();
      }, 1);
     

    }



  }
removeAssignee(){
  this.tempDeleteObj.forEach((obj) => {
    obj.updatedOn = new Date();
    obj.createdOn = new Date();
    obj.createdBy = parseInt(this.encryptdecryptlocalstorage.getLocalStorage('employeeId'))
    obj.updatedBy = parseInt(this.encryptdecryptlocalstorage.getLocalStorage('employeeId'));
    obj.isActive = false;
    obj.gemsEmployeeMaster = { "gemsEmployeeMasterId": obj.gemsEmployeeMasterId }
    obj.gemsProjectMaster = { "gemsProjectMasterId": obj.projectId }
    obj.gemsOrganisation = { "gemsOrgId": this.organisationId };

    })

  return this.genericservice.post(UrlConstant.saveProjectAssignmentList, this.tempDeleteObj, false).subscribe((response) => {
    console.log(response);
    this.tempDeleteObj = [];
  })
  
  }

  inputActive() {
    $(function () {
      const inputValueCheck = $(this).val();
      if (inputValueCheck === '') {
        $('.form-group').removeClass('focused');
      }
      else (inputValueCheck === 1)
      {
        $('.form-group').addClass('focused');
      }
    });
    $('.form-control').click(function () {

      $(this)
        .parents('.form-group')
        .addClass('focused');
    });

    $('.form-control').blur(function () {
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
  test() {
    $(function () {
      const inputValueCheck = $(this).val();
      if (inputValueCheck === '') {
        $('.form-group').addClass('focused');
      }
    });
    $('.form-control').focus(function () {
      $(this)
        .parents('.form-group')
        .addClass('focused');
    });

  }
}
