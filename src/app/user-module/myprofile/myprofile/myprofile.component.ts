import { Component, OnInit } from '@angular/core';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from 'src/app/services/urlConstant';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EncryptDecryptService } from 'src/app/services/encrypt-decrypt.service';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { DataSharingService } from '../../../services/dataSharing.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  public editprofileForm: FormGroup;
  ProfileImage: any;
  value: number;
  imageProfile: boolean;
  employeeList: any;
  reportingto: any;
  userdesignation: any;
  userdepartment: any;
  public userByIdURL = UrlConstant.userByIdApi;
  public getEmployeeDetailUrl = UrlConstant.getEmployeeApi;
  public getEmployeeContactUrl = UrlConstant.getEmployeeContactApi;
  public saveEmployeeUrl = UrlConstant.saveEmployee;
  public saveEmployeeContactUrl = UrlConstant.saveEmployeeContact;
  // public myprofilepicchangeUrl = UrlConstant.myprofilepicchange;

  userMaster: any;
  employeeContactDetails: any;
  empaddress: any;
  empCity: any;
  empCountry: any;
  epmZipCode: any;
  employeename: any;
  contactNo: any;
  employeestatus: any;
  organisationName: any;
  employeeLastName: any;
  officialMailId: any;
  showeditProfile: boolean;
  usersDetailForm: any;
  phno = new FormControl();
  address = new FormControl();
  city = new FormControl();
  postalcode = new FormControl();
  profilePercentage: any;
  currentFileUpload: File = null;
  isImage: boolean = false;
  previewsProfileImage: any;

  public preloader:boolean=false;
  constructor(private genericservice: Genericservice, public router: Router,
    private encryptdecryptservice: EncryptDecryptService, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private dataSharingService: DataSharingService) {
    this.isImage = false;
  }

  ngOnInit() {
    this.showeditProfile = true;
    this.getUserById();
    this.validateForm();
  }

  validateForm() {
    this.editprofileForm = new FormGroup({
      phno: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      postalcode: new FormControl('', [Validators.required]),


    });
  }



  getUserById() {
    let userObj =
    {
      "gemsUserMasterId": this.encryptdecryptlocalstorage.getLocalStorage("userId")
    }
    return this.genericservice.post(this.userByIdURL, userObj, false).subscribe(employeedata => {

      this.userMaster = employeedata.data;
      console.log(this.userMaster);
     if(this.userMaster)
     { this.ProfileImage = this.userMaster.profileImgData?
      "data:image/png;base64," + this.userMaster.profileImgData:'';
      this.previewsProfileImage = this.ProfileImage;
      if (this.userMaster.profileImgData) {
        this.imageProfile = true;
        this.value = 68;
       // console.log(this.value);
      }
      else {
        this.imageProfile = false;
        this.value = 48;
        //console.log(this.value);
      }
    }
      this.getEmployeedetail();
    });

  }

  editProfileClicked() {
    this.isImage = true;
    this.showeditProfile = false;
    this.editprofileForm.controls['phno'].setValue(this.contactNo);
    this.editprofileForm.controls['address'].setValue(this.empaddress);
    this.editprofileForm.controls['city'].setValue(this.empCity);
    this.editprofileForm.controls['postalcode'].setValue(this.epmZipCode);

    this.phno.setValue(this.contactNo);
    this.address.setValue(this.empaddress);
    this.city.setValue(this.empCity);
    this.postalcode.setValue(this.epmZipCode);
  }

  cancelProfileEdit() {
    this.isImage = false;
    this.showeditProfile = true;
    this.ProfileImage = this.previewsProfileImage;
  }

  getEmployeedetail() {
    return this.genericservice.post(this.getEmployeeDetailUrl, this.userMaster, false).subscribe(employeedata => {
      this.employeeList = employeedata.data;
      this.employeename = this.employeeList.employeeFirstName;
      this.employeeLastName = this.employeeList.employeeLastName;
      this.contactNo = this.employeeList.officeContactNumber;
      this.employeestatus = this.employeeList.currentEmployeeStatus.statusDescription;
      this.officialMailId = this.employeeList.officialEmailid
      this.organisationName = this.employeeList.gemsOrganisation.gemsOrgName;
      localStorage.setItem('employeeFirstname', this.employeename);
      if (this.employeeList.currentReportingTo != null || this.employeeList.currentReportingTo != undefined) {
        this.reportingto = this.employeeList.currentReportingTo.employeeFirstName;
      }
      if (this.employeeList.gemsDepartment != null || this.employeeList.gemsDepartment != undefined) {
        this.userdepartment = this.employeeList.gemsDepartment.departmentName;
      }
      if (this.employeeList.gemsDesignation != null || this.employeeList.gemsDesignation != undefined) {
        this.userdesignation = this.employeeList.gemsDesignation.gemsDesignationName;
        localStorage.setItem('designation', this.userdesignation);
      }
      this.genericservice.post(this.getEmployeeContactUrl, this.employeeList, false)
        .subscribe(employeeContactDetailData => {
          if (employeeContactDetailData.data != null) {
            this.employeeContactDetails = employeeContactDetailData.data;
            this.empaddress = this.employeeContactDetails.permanentAddressStreet1;
            this.empCity = this.employeeContactDetails.permanentAddressCity;
            this.empCountry = this.employeeContactDetails.permanentAddressCountry;
            this.epmZipCode = this.employeeContactDetails.permanentAddressZipCode;

          }
          this.contactNo == "" || this.employeeList.officeContactNumber=="" ? this.value = this.value : this.value = this.value + 8;
          this.empaddress == "" || employeeContactDetailData.permanentAddressStreet1 ? this.value = this.value : this.value = this.value + 8;
          this.empCity == "" || employeeContactDetailData.permanentAddressCity ? this.value = this.value : this.value = this.value + 8;
          // this.empCountry == "" || employeeContactDetailData.permanentAddressCountry == null ? this.value = this.value : this.value = this.value + 15;
          this.epmZipCode == "" || employeeContactDetailData.permanentAddressZipCode ? this.value = this.value : this.value = this.value + 8;
          // //  this.editEmployeeContactDetail = employeeContactDetailData;

          // this.isLoadingResults = false;

        })


    });
  }

  saveProfileDetail(usersDetails) {
this.preloader=true;
  //  this.employeeList.officeContactNumber = this.phno.value;
  this.employeeList.officeContactNumber = this.editprofileForm.controls['phno'].value;
    return this.genericservice.post(this.saveEmployeeUrl, this.employeeList, true).subscribe(data => {
      // this.dataSharingService.trigegerprofileFlag('true');

      this.employeeList = data;
      this.employeeContactDetails.permanentAddressStreet1 = this.editprofileForm.controls['address'].value;
      this.employeeContactDetails.permanentAddressCity = this.editprofileForm.controls['city'].value
      this.employeeContactDetails.permanentAddressZipCode = this.editprofileForm.controls['postalcode'].value
      
      // this.employeeContactDetails.permanentAddressStreet1 = this.address.value.trim();
      // this.employeeContactDetails.permanentAddressCity = this.city.value.trim();
      // this.employeeContactDetails.permanentAddressZipCode = this.postalcode.value.trim();
      return this.genericservice.post(this.saveEmployeeContactUrl, this.employeeContactDetails, false).subscribe(data => {
        this.employeeContactDetails = data;
        if (this.currentFileUpload !== null) {
          this.profile()
          this.preloader=false;
        }
        else {
          this.ngOnInit();
          this.preloader=false;
        }

      });


    });
  }

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
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
        }
      } else {
        event.target.value = null;
        this.dataSharingService.failureMessage('Picture size should not excceed 300KB..');
      }
    }
  }
  userid: any;
  profile() {
    this.userid = this.encryptdecryptlocalstorage.getLocalStorage("userId");
    return this.genericservice.imageUpload(this.currentFileUpload,  UrlConstant.myprofilepicchange+'/'+this.userid).subscribe(data => {
      this.dataSharingService.trigegerprofileFlag('true');
      this.currentFileUpload = null;
      this.ngOnInit();
    }, error => {
      //console.log(error)
    })
  }


}
