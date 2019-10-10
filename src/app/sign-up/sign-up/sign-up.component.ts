import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterSetupOrganisation } from 'src/app/model/signup.model';
import { Genericservice } from 'src/app/services/genericservices';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { UrlConstant } from 'src/app/services/urlConstant';
import { Router } from '@angular/router';
import { DataSharingService } from '../../services/dataSharing.service';

declare var $;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @ViewChild('someModal', null) someModal: ElementRef;
  public signupUrl = UrlConstant.SignupApi;
  signupForm: FormGroup;
  RegisterSetupOrganisationForm: FormGroup;
  SignupSetupOrganisation: RegisterSetupOrganisation;
  signup: any;
  public signupsucess: boolean = false;
  public showModal:boolean

  constructor(private genericservice: Genericservice,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private dataSharingService: DataSharingService,
    private router: Router, ) {
      localStorage.clear();
     }

  ngOnInit() {
  this.showModal=false
    this.signupForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      companyname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      employeecounts: new FormControl('', Validators.required),
      mobilenumber: new FormControl('', Validators.required),
    });
    this.RegisterSetupOrganisationForm = new FormGroup({
      gemsOrgName: new FormControl('', [Validators.required]),
      gemsEmpCount: new FormControl('', [Validators.required]),
      gemsOrgEmail: new FormControl('', [Validators.required, Validators.email]),
      gemsOrgPhone: new FormControl('', [Validators.required]),
      gemsOrgCode: new FormControl('', [Validators.required]),
      gemsOrgAddress: new FormControl(''),
      gemsOrgState: new FormControl(''),
      gemsOrgCity: new FormControl(''),
      adOrgZipCode: new FormControl(''),
      gemsOrgAdminName: new FormControl('', [Validators.required]),
      gemsOrgSetupStatus: new FormControl(''),
    });
  }

  clicksignup() {
   
  
    this.RegisterSetupOrganisationForm.value.gemsOrgAdminName = this.signupForm.value.userName;
    this.RegisterSetupOrganisationForm.value.gemsOrgName = this.signupForm.value.companyname;
    this.RegisterSetupOrganisationForm.value.gemsEmpCount = this.signupForm.value.employeecounts;
    this.RegisterSetupOrganisationForm.value.gemsOrgEmail = this.signupForm.value.email;
    this.RegisterSetupOrganisationForm.value.gemsOrgPhone = this.signupForm.value.mobilenumber.toString();
    this.RegisterSetupOrganisationForm.value.gemsOrgCode = (Math.random() * 9999 - 1111 + 1111) + '';
    this.RegisterSetupOrganisationForm.value.gemsOrgAddress = '';
    this.RegisterSetupOrganisationForm.value.gemsOrgState = '';
    this.RegisterSetupOrganisationForm.value.gemsOrgCity = '';
    this.RegisterSetupOrganisationForm.value.adOrgZipCode = '';
    this.RegisterSetupOrganisationForm.value.gemsOrgSetupStatus = false;
    this.genericservice.postwithoutToken(this.signupUrl, this.RegisterSetupOrganisationForm.value, false).subscribe(response => {
      if (response.status.success === 'Success') {
        this.signup = response.data;

        //to open model

        this.showModal=true
        setTimeout(()=>{    //<<<---    using ()=> syntax
         this.showModal = false;
     }, 2000);     
     // 
       this.signupForm.reset();
        $(this).attr('data-target', '#signup');
          }
      else {
        this.signupsucess = false;
        this.dataSharingService.failureMessage(response.status.message);
      }
    })
  }
  //     this.signup=response;
  //     console.log(this.signup);
  //     if (this.signup != null && this.signup !== undefined) {
  //       this.router.navigateByUrl('/signupsuccess');
  //     } 
  //  else{
  //    "there was a problem"
  //  }

numberOnly(event): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;

}

omit_special_char(event) {
  var k;
  k = event.charCode;  //         k = event.keyCode;  (Both can be used)
  return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 0 || k == 32 || (k >= 48 && k <= 57));
}
      
}


