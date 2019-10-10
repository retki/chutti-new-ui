import { Component, OnInit, ViewChild } from '@angular/core';
import { Genericservice } from 'src/app/services/genericservices';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { UrlConstant } from 'src/app/services/urlConstant';
import { FormGroup, Validators, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TabChangeService } from '../../../../services/tab-change.service'
import { DataSharingService } from '../../../../services/dataSharing.service';
@Component({
  selector: 'app-add-project-assignment',
  templateUrl: './add-project-assignment.component.html',
  styleUrls: ['./add-project-assignment.component.scss']
})
export class AddProjectAssignmentComponent implements OnInit {
  public organisationId;
  masterProjectList: any;
  masterEmployeeList: any;
  filterkey: any
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  tempDeleteObj = []
  selectedResourceListWithFullObj: any = [];
  addForm: FormGroup;
  currencyList = [{ name: 'INR', value: 'inr' }]
  disableDate: Date;
  constructor(private dataSharingService: DataSharingService, private tabChangeService: TabChangeService, private formBuilder: FormBuilder, private router: Router, private genericservice: Genericservice, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) { }

  ngOnInit() {
    this.organisationId = parseInt(this.encryptdecryptlocalstorage.getLocalStorage('organizationId'))
    this.getProjectList();
    this.getEmployeeList();
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
    this.addForm = this.formBuilder.group({
      gemsProjectMaster: new FormControl('', [Validators.required]),
      assign: new FormArray([])
    })
  }

  // convenience getters for easy access to form fields
  get f() { return this.addForm.controls; }
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

    return new Date(this.disableDate).toISOString().split('T')[0]
  }
  onEmployeeAssign() {
    this.formAssign.clear();
    this.selectedResourceListWithFullObj = [];
    //this.selecteditem wont have entire employee obj to get get entire obj we are callin master
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
    this.selectedResourceListWithFullObj.forEach((resource, index) => {
      let t;
      t = {
        gemsEmployeeMaster: this.selectedResourceListWithFullObj[index].employeeFirstName
      }
      prepop.push(t)
    });
    console.log('control', this.formAssign.controls)

    this.formAssign.patchValue(prepop);
    this.test();
  }
  getProjectList() {
    let payload = { 'gemsOrganisationId': this.organisationId }
    return this.genericservice.post(UrlConstant.getProjectList, payload, false).subscribe(response => {
      console.log(response)
      this.masterProjectList = response.data
    });
  }

  getEmployeeList() {
    let payload = { 'gemsOrganisationId': this.organisationId }
    return this.genericservice.post(UrlConstant.getEmployeeListApi, payload, false).subscribe(response => {
      console.log(response)
      this.masterEmployeeList = response.data
    });
  }

  saveAssignment() {
    let payload = { 'gemsOrganisationId': this.organisationId }
    return this.genericservice.post(UrlConstant.projectAssignmentList, payload, false).subscribe(response => {
      console.log(response)
    });
  }
  onCancel() {


    this.tabChangeService.setActivateTab('assignment')

  }
  deleteEmployee(i) {
    this.formAssign.clear();
    this.selectedItems = []
    setTimeout(() => {
      this.selectedResourceListWithFullObj.splice(i, 1)

      this.selectedItems = this.selectedResourceListWithFullObj


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
      this.selectedResourceListWithFullObj.forEach((resource, index) => {
        let t;
        t = {
          gemsEmployeeMaster: this.selectedResourceListWithFullObj[index].employeeFirstName
        }
        prepop.push(t)
      });


      this.formAssign.patchValue(prepop);

      this.test();
    }, 1);

  }

  saveassignment() {
    this.addForm.value.assign.forEach((element) => {
      element.updatedOn = new Date();
      element.createdOn = new Date();
      element.createdBy = parseInt(this.encryptdecryptlocalstorage.getLocalStorage('employeeId'))
      element.updatedBy = parseInt(this.encryptdecryptlocalstorage.getLocalStorage('employeeId'));
      element.gemsOrganisation = { "gemsOrgId": this.organisationId };
      element.isActive = true;
      element.gemsProjectMaster = this.addForm.value.gemsProjectMaster;
      this.selectedResourceListWithFullObj.filter((item) => {
        if (item.employeeFirstName === element.gemsEmployeeMaster) {
          element.gemsEmployeeMaster = item
        }
      })
    })
    return this.genericservice.post(UrlConstant.saveProjectAssignmentList, this.addForm.value.assign, false).subscribe((response) => {

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
