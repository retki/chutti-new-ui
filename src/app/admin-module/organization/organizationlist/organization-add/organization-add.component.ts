import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { UrlConstant } from '../../../../services/urlConstant';
import { Genericservice } from '../../../../services/genericservices';
import { EncryptDecryptLocalStorageService } from '../../../../services/encrypt-decrypt-localstorage.service';
import { values } from 'd3';

@Component({
  selector: 'app-organization-add',
  templateUrl: './organization-add.component.html',
  styleUrls: ['./organization-add.component.scss']
})
export class OrganizationAddComponent implements OnInit {
  public addOrganizationForm: FormGroup;
  public getOrganizationUrl = UrlConstant.getorganizatiApi + this.encryptdecryptlocalstorage.getLocalStorage('organizationId');
  public saveorganizationUrl = UrlConstant.saveorganizationApi;
  public getcountriesUrl = UrlConstant.getcountriesApi;

  getcountrielist: any = [];
  countrymasterid: any;
  countrycode: any;
  organizatiosavedData: any;
  currentFileUpload: File;
  ProfileImage: string | ArrayBuffer;
  organizationid: any;
  getallOrganizartionlist: any = [];

  constructor(private genericservice: Genericservice,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private formBuilder: FormBuilder) {

      this.validateForm();
     }

  ngOnInit() {
    this.subscribeOrganisationForm();
    this.getallorganization();
    this.inputActive();
    this.getallcountrieslist();
  }

  validateForm() {
    // this.addOrganizationForm = new FormGroup({
      // organizationCode: new FormControl('', [Validators.required]),
      // organizationName: new FormControl('', [Validators.required]),
      // organizationEmailId: new FormControl('', [Validators.email, Validators.required]),
      // organizationPhonenumber: new FormControl('', [Validators.required]),
      // alternateNumber: new FormControl('', [Validators.required]),
      // OrganizationAddress: new FormControl('', [Validators.required]),
      // city: new FormControl('', [Validators.required]),
      // State: new FormControl('', [Validators.required]),
      // Country: new FormControl('', [Validators.required]),
      // zipcode: new FormControl('', [Validators.required]),
      // timezone: new FormControl('', [Validators.required]),


    // });

    this.addOrganizationForm = this.formBuilder.group({
      organizationCode: ['', Validators.required],
      organizationName: ['', Validators.required],
      organizationEmailId: ['', Validators.required],
      organizationPhonenumber: ['', Validators.required],
      alternateNumber: ['', Validators.required],
      OrganizationAddress: ['', Validators.required],
      city: ['', Validators.required],
      State: ['', Validators.required],
      gemsCountryMaster: ['',Validators.required],
      zipcode: ['', Validators.required],
      timezone: ['', Validators.required],
    })
  }

  subscribeOrganisationForm(){
    this.addOrganizationForm.valueChanges.subscribe(value =>{
      
      console.log(value);

    })
    this.gemsCountryMaster.valueChanges.subscribe(values=>{
      console.log(values);

    })
  }


  //Get organization by id
  getallorganization() {
    this.genericservice.get(this.getOrganizationUrl).subscribe(response => {
      this.getallOrganizartionlist = response.data;
      console.log(this.getallOrganizartionlist);
      this.addOrganizationForm.patchValue({
        organizationCode:response.data.gemsOrganisation.gemsOrganisationCode,
        organizationName:response.data.gemsOrganisation.gemsOrgName,
        organizationEmailId:response.data.gemsOrganisation.gemsOrgEmail,
        organizationPhonenumber:response.data.gemsOrganisation.gemsOrgPhone,
        alternateNumber:response.data.gemsOrganisation.alternateNumber ,
        OrganizationAddress:response.data.gemsOrganisation.gemsOrgAddress ,
        city: response.data.gemsOrganisation.gemsOrgCity,
        State:response.data.gemsOrganisation.gemsOrgState , 
        gemsCountryMaster:response.data.gemsOrganisation.gemsCountryMaster ,
        zipcode:response.data.gemsOrganisation.adOrgZipCode ,
      })

      console.log(this.addOrganizationForm.value);
      
    });
    // this.addOrganizationForm.controls.organizationCode.setValue(this.getallOrganizartionlist.gemsOrganisationCode);
    // this.addOrganizationForm.controls.organizationName.setValue(this.getallOrganizartionlist.gemsOrgName);
    // this.addOrganizationForm.controls.organizationEmailId.setValue(this.getallOrganizartionlist.gemsOrgEmail);
    // this.addOrganizationForm.controls.organizationPhonenumber.setValue(this.getallOrganizartionlist.gemsOrgPhone);
    // this.addOrganizationForm.controls.alternateNumber.setValue(this.getallOrganizartionlist.gemsOrgPhone1);
    // this.addOrganizationForm.controls.OrganizationAddress.setValue(this.getallOrganizartionlist.gemsOrgAddress);
    // this.addOrganizationForm.controls.city.setValue(this.getallOrganizartionlist.gemsOrgCity);
    // this.addOrganizationForm.controls.State.setValue(this.getallOrganizartionlist.gemsOrgState);
    // this.addOrganizationForm.controls.Country.setValue(this.getallOrganizartionlist.gemsCountryMaster.gemsCountryDescription);
    // this.addOrganizationForm.controls.zipcode.setValue(this.getallOrganizartionlist.adOrgZipCode);
   
    

  }


  inputActive() {
    $(function () {
      const inputValueCheck = $(this).val();
      if (inputValueCheck === '0') {
        $('.form-group').addClass('focused');
      }
    });

    $('.form-control').focus(function () {
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

  saveorganization() {
    let payloadReqObj = {
      "gemsOrganisation": {
        "gemsOrganisationCode": this.addOrganizationForm.value.organizationCode,
        "gemsOrgName": this.addOrganizationForm.value.organizationName,
        "gemsOrgEmail": this.addOrganizationForm.value.organizationEmailId,
        "gemsOrgNote": null,
        "gemsOrgRegistrationNo": null,
        "gemsOrgTaxId": null,
        "gemsOrgCity": this.addOrganizationForm.value.organizationName,
        "gemsOrgState": this.addOrganizationForm.value.organizationName,
        "gemsCurrencyMaster": null,
        "gemsOrgAddress": this.addOrganizationForm.value.organizationName,
        "gemsOrgPhone": this.addOrganizationForm.value.organizationPhonenumber,
        "gemsOrgPhone1": this.addOrganizationForm.value.alternateNumber,
        "isActive": true,
        "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
        "updatedBy": 1,
        "createdOn": new Date(),
        "updatedOn": new Date(),
        "gemsCountryMaster": {
          "gemsCountryMasterId": this.countrymasterid,
          "gemsCountryCode": this.countrycode,
          "gemsCountryDescription": null,
          "isActive": true,
          "createdBy": 1,
          "createdOn": new Date(),
          "updatedBy": 1,
          "updatedOn": new Date(),
        }
      },
      "gemsOrganisationParameter": {
        "gemsOrganisation": null,
        "gemsCurrencyMaster": {
          "gemsCurrencyMasterId": null,
          "currencyCode": null,
          "currencyDescription": null,
          "isActive": null,
          "createdBy": null,
          "createdOn": null,
          "updatedBy": null,
          "updatedOn": null
        },
        "parentOrganization": null,
        "isActive": true,
        "createdBy": 1,
        "createdOn": new Date(),
        "updatedBy": null,
        "updatedOn": new Date(),
        "gemsOrgtimezone": "",
        "isSunday": this.sunday,
        "isMonday": this.monday,
        "isTuesday": this.tuesday,
        "isWednesday": this.wednesday,
        "isThursday": this.thursday,
        "isFriday": this.friday,
        "isSaturday": this.satday,
        "fromDate": null,
        "toDate": null,
        "locationPath": ""

      }
    }
    return this.genericservice.post(this.saveorganizationUrl, payloadReqObj, true).subscribe(response => {
      this.organizatiosavedData = response.data;
      this.organizationid = this.organizatiosavedData.gemsOrganisation.gemsOrgId
      console.log(this.organizationid);
      this.profileImageupdate();
    });
  }
  monday = false;
  tuesday = false;
  wednesday = false;
  thursday = false;
  friday = false;
  satday = false;
  sunday = false;

  monCheck(event) {
    this.monday = !this.monday;
    console.log(this.monday);
  }
  tueCheck(event) {
    this.tuesday = !this.tuesday;
  }
  wedCheck(event) {
    this.wednesday = !this.wednesday;
  }
  thursCheck(event) {
    this.thursday = !this.thursday;
  }
  friCheck(event) {
    this.friday = !this.friday;
  }
  satCheck(event) {
    this.satday = !this.satday;
  }
  sunCheck(event) {
    this.sunday = !this.sunday;
  }

  //getall countries list
  getallcountrieslist() {
    return this.genericservice.get(this.getcountriesUrl).subscribe(response => {
      this.getcountrielist = response.data;
      var countryIdList = [];
      response.data.forEach(element => {

        if (element.gemsCountryMasterId) {
          countryIdList.push(element.gemsCountryMasterId);
        }
      });
      console.log(countryIdList);
    });
  }
  onChange(event) {
    this.countrymasterid = event.gemsCountryMasterId;
    console.log(this.countrymasterid);
    this.countrycode = event.gemsCountryCode;
  }
  url: any;
  onSelectFile(event) {
    
    if (event.target.files && event.target.files[0]) {
      var fileReader: FileReader = new FileReader();
      this.currentFileUpload = event.target.files[0];
      fileReader.readAsDataURL(event.target.files[0]); // read file as data url
      fileReader.onload = (event: any) => { // called once readAsDataURL is completed
        this.ProfileImage = fileReader.result;
      }
    }
  }
  profileImageupdate() {
    
    return this.genericservice.imageUpload(this.currentFileUpload, UrlConstant.orgUpdateLogo+"?gemsOrganisationId="+this.organizationid).subscribe(data => {
    }, error => {
      console.log(error)
    })
  }

  public get organizationCode():AbstractControl {
    return this.addOrganizationForm.get('organizationCode');
  }
  public get organizationName():AbstractControl {
    return this.addOrganizationForm.get('organizationName');
  }
  public get organizationEmailId():AbstractControl {
    return this.addOrganizationForm.get('organizationEmailId');
  }
  public get organizationPhonenumber():AbstractControl {
    return this.addOrganizationForm.get('organizationPhonenumber');
  }
  public get alternateNumber():AbstractControl {
    return this.addOrganizationForm.get('alternateNumber');
  }
  public get OrganizationAddress():AbstractControl {
    return this.addOrganizationForm.get('OrganizationAddress');
  }
  public get city():AbstractControl {
    return this.addOrganizationForm.get('city');
  }
  public get State():AbstractControl {
    return this.addOrganizationForm.get('State');
  }
  public get gemsCountryMaster():AbstractControl {
    return this.addOrganizationForm.get('gemsCountryMaster');
  }
  public get zipcode():AbstractControl {
    return this.addOrganizationForm.get('zipcode');
  }
  public get timezone():AbstractControl {
    return this.addOrganizationForm.get('timezone');
  }


}
