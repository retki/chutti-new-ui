import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UrlConstant } from '../../../../services/urlConstant';
import { Genericservice } from '../../../../services/genericservices';
import { EncryptDecryptLocalStorageService } from '../../../../services/encrypt-decrypt-localstorage.service';
import { Router } from '@angular/router';
import { WeekDay } from '@angular/common';
import { DataSharingService } from '../../../../services/dataSharing.service';

@Component({
  selector: 'app-organization-update',
  templateUrl: './organization-update.component.html',
  styleUrls: ['./organization-update.component.scss']
})
export class OrganizationUpdateComponent implements OnInit {

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
  getallOrganizationlist: any;
  monday = false;
  tuesday = false;
  wednesday = false;
  thursday = false;
  friday = false;
  satday = false;
  sunday = false;
  organizationparamId: any;
  public phonenumbermask = ['+', /[1-9]/, /\d/, ' ',  /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public alternatenumbermask = ['+', /[1-9]/, ' ',  /\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  public emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$';


  constructor(private genericservice: Genericservice, 
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
     private router: Router,private dataSharingService:DataSharingService) { }

  ngOnInit() {
    this.getallorganization();
    this.inputActive();
    this.validateForm();
    this.getallcountrieslist();
   let obj={'a':1,'b':2,'c':3,'dd':4}
    const demo=(({a,dd})=>({a,dd}))(obj)
    console.log(demo)
    console.log(
      Math.floor(100000 + Math.random() * 900000)
    );
    this.subscribeOrgananisation();
  }
  validateForm() {
    this.addOrganizationForm = new FormGroup({
      organizationCode: new FormControl('', [Validators.required]),
      organizationName: new FormControl('', [Validators.required]),
      organizationEmailId: new FormControl('', [Validators.required,Validators.pattern(this.emailRegex)]),
      organizationPhonenumber: new FormControl('', [Validators.required]),
      alternateNumber: new FormControl('', [Validators.required]),
      OrganizationAddress: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      State: new FormControl('', [Validators.required]),
      Country: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      isSunday:new FormControl(),  
      isMonday:new FormControl(),
      isTuesday:new FormControl(),  
      isWednesday:new FormControl(),
      isThursday:new FormControl(),  
      isFriday:new FormControl(),
      isSaturday:new FormControl(),

           // timezone: new FormControl('', [Validators.required]),

    });
  }
  subscribeOrgananisation(){
    this.addOrganizationForm.get('organizationName').valueChanges.subscribe(
      uname => {
      console.log(uname);
      var res = uname.substr(0, 4);
      this.addOrganizationForm.controls['organizationCode'].setValue(res+'_'+Math.floor(100000 + Math.random() * 900000));
      }
    ); 
  }
  //get organization
  getallorganization() {
    this.genericservice.get(this.getOrganizationUrl).subscribe(response => {
      this.getallOrganizationlist = response.data;
      
      this.ProfileImage ="data:image/png;base64," + this.getallOrganizationlist.gemsOrganisation.gemsOrgLogoURL;
      this.organizationparamId =this.getallOrganizationlist.gemsOrganisationParameter != null ? this.getallOrganizationlist.gemsOrganisationParameter.gemsOrgParamId : '';
      this.addOrganizationForm.setValue({
        organizationCode:this.getallOrganizationlist.gemsOrganisation.gemsOrganisationCode,
        organizationName:this.getallOrganizationlist.gemsOrganisation.gemsOrgName,
        organizationEmailId:this.getallOrganizationlist.gemsOrganisation.gemsOrgEmail,
        organizationPhonenumber:this.getallOrganizationlist.gemsOrganisation.gemsOrgPhone,
        alternateNumber:this.getallOrganizationlist.gemsOrganisation.gemsOrgPhone,
        OrganizationAddress:this.getallOrganizationlist.gemsOrganisation.gemsOrgAddress,
        city:this.getallOrganizationlist.gemsOrganisation.gemsOrgCity,
        State:this.getallOrganizationlist.gemsOrganisation.gemsOrgState,
        Country:this.getallOrganizationlist.gemsOrganisation.gemsCountryMaster.gemsCountryCode,
        zipcode:this.getallOrganizationlist.gemsOrganisation.adOrgZipCode,
        isMonday:response.data.gemsOrganisationParameter != null ? response.data.gemsOrganisationParameter.isMonday : false,
        isTuesday:response.data.gemsOrganisationParameter != null ? response.data.gemsOrganisationParameter.isTuesday : false,
        isWednesday:response.data.gemsOrganisationParameter != null ? response.data.gemsOrganisationParameter.isWednesday : false,
        isThursday:response.data.gemsOrganisationParameter != null ? response.data.gemsOrganisationParameter.isThursday : false,
        isFriday:response.data.gemsOrganisationParameter != null ? response.data.gemsOrganisationParameter.isFriday : false,
        isSaturday:response.data.gemsOrganisationParameter != null ? response.data.gemsOrganisationParameter.isSaturday : false,
        isSunday:response.data.gemsOrganisationParameter != null ? response.data.gemsOrganisationParameter.isSunday  : false
      })
      let weekDays;
      if(response.data.gemsOrganisationParameter != null) {
       weekDays = (({ isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday }) => ({ isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday }))(response.data.gemsOrganisationParameter);
      } else {
        weekDays ={
          "isMonday" : false,
          "isTuesday" : false,
          "isWednesday" : false,
          "isThursday" : false,
          "isFriday" : false,
          "isSaturday" : false,
          "isSunday" : false,          
        }
      }
      function getKeyByValue(val, key) {
        if (weekDays[key] == val) {
          return $('.' + key).addClass('active');
        }
        return false;
      }

      for (var key in weekDays) {
        getKeyByValue(true, key);
      }


    });
  }


  inputActive() {
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
    
    let country = this.fetchObjectByCode(this.addOrganizationForm.controls.Country.value);
    
    let payload={

      "gemsOrganisation": {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
        "adOrgZipCode": this.addOrganizationForm.value.zipcode,
        "gemsOrgAddress": this.addOrganizationForm.value.OrganizationAddress,
        "gemsOrganisationCode": this.addOrganizationForm.value.organizationCode,
        "gemsOrgCity": this.addOrganizationForm.value.city,
        "gemsOrgEmail": this.addOrganizationForm.value.organizationEmailId,
        "gemsOrgName": this.addOrganizationForm.value.organizationName,
        "gemsOrgPhone":this.addOrganizationForm.value.organizationPhonenumber,
        "gemsOrgPhone1": this.addOrganizationForm.value.alternateNumber,
        "gemsOrgRegistrationNo":  this.addOrganizationForm.value.alternateNumber,
        "gemsOrgState":  this.addOrganizationForm.value.State,
        "gemsCountryMaster":country,
        "isActive": true,
        "updatedBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
        "updatedOn": new Date(),
    },
       "gemsOrganisationParameter": {
        "gemsOrgParamId":  this.organizationparamId ,
        "gemsOrganisation": {
          "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      },
      "isSunday": this.addOrganizationForm.value.isSunday,
      "isMonday": this.addOrganizationForm.value.isMonday,
      "isTuesday":  this.addOrganizationForm.value.isTuesday,
      "isWednesday":  this.addOrganizationForm.value.isWednesday,
      "isThursday": this.addOrganizationForm.value.isThursday,
      "isFriday":  this.addOrganizationForm.value.isFriday,
      "isSaturday":  this.addOrganizationForm.value.isSaturday,
      "isActive": true,
      "updatedBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      "updatedOn": new Date(),
      "fromDate": new Date(),
      "toDate": new Date(),
      },
        
    }

      this.genericservice.post(this.saveorganizationUrl, payload, true).subscribe(response => {
      this.organizatiosavedData = response.data;
      this.organizationid = this.organizatiosavedData.gemsOrganisation.gemsOrgId
      this.profileImageupdate();
      this.router.navigateByUrl('/admin/organization');
      this.getallorganization()
    });
  }
 

  setWorkingDays(propertyName) {
 let temp= !this.addOrganizationForm.controls[propertyName].value;
 console.log(temp,propertyName)
 this.addOrganizationForm.controls[propertyName].patchValue(temp)
   console.log(this.addOrganizationForm);
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
      if (event.target.files[0].size <= 300000) {

      var fileReader: FileReader = new FileReader();
      this.currentFileUpload = event.target.files[0];
      fileReader.readAsDataURL(event.target.files[0]); // read file as data url
      fileReader.onload = (event: any) => { // called once readAsDataURL is completed
        this.ProfileImage = fileReader.result;
        console.log( this.ProfileImage );
      }
    }
    else {
      this.dataSharingService.failureMessage('Picture size should not excceed 300KB..');
    }
    }
  }
  profileImageupdate() {
    return this.genericservice.imageUpload(this.currentFileUpload,UrlConstant.orgUpdateLogo+"?gemsOrganisationId="+this.organizationid).subscribe(data => {
    }, error => {
      console.log(error)
    })
  }
  fetchObjectByCode(coutryCode) {
    for (let country of this.getcountrielist) {
      if (coutryCode == country.gemsCountryCode) {
        return country;
      }
    }
  }
  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  goBack() {
    this.router.navigateByUrl('/admin/organization');
  }
}
