import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from 'src/app/services/urlConstant';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-admin-generation-organization',
  templateUrl: './admin-generation-organization.component.html',
  styleUrls: ['./admin-generation-organization.component.scss']
})
export class AdminGenerationOrganizationComponent implements OnInit {

  organizationForm: FormGroup;
  organizationDetails:any;
  public emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$';

  constructor(private route:Router,
    private genericservice: Genericservice,
    private formBuilder: FormBuilder,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, ) { 
    if(this.encryptdecryptlocalstorage.getLocalStorage('gemsUserMasterId') === '' || this.encryptdecryptlocalstorage.getLocalStorage('gemsUserMasterId') === null) {
      this.route.navigate(['/signIn']);
    }
  }

  ngOnInit() {
    this.createForm();
    this.getEmployeeOrganization();
    this.subscriberForm();
  }

  subscriberForm(){
    this.organizationForm.valueChanges.subscribe(value=>{
      // console.log(value);
      
    })
  }
  getEmployeeOrganization() {
    debugger;
    let payload = { "gemsUserMasterId": this.encryptdecryptlocalstorage.getLocalStorage('gemsUserMasterId') }
    this.genericservice.postwithoutToken(UrlConstant.getEmployeeApi, payload, false).subscribe(response => {
      if (response !== null) {
        if(response.data !== null) {
          this.organizationDetails = response.data.gemsOrganisation;
        //  this.encryptdecryptlocalstorage.setToLocalStorage('organisationId', response.data.gemsOrganisation.gemsOrgId);
          this.organizationForm.controls.organizationName.setValue(response.data.gemsOrganisation.gemsOrgName);
          this.organizationForm.controls.adminName.setValue(response.data.gemsOrganisation.gemsOrgAdminName);
          this.organizationForm.controls.adminEmailId.setValue(response.data.gemsOrganisation.gemsOrgEmail);
          this.organizationForm.controls.totalNumberOfEmployee.setValue(response.data.gemsOrganisation.gemsOrgEmployeeCount !== null ? response.data.gemsOrganisation.gemsOrgEmployeeCount:'');
          this.organizationForm.controls.phoneNumber.setValue(response.data.gemsOrganisation.gemsOrgPhone);
          this.organizationForm.controls.location.setValue(response.data.gemsOrganisation.gemsOrgAddress);
        }
        //this.getOrganizationDetailsBasedOnOrgId()
      } else {
        console.log(response)
      }
    })

  }
  public createForm() {
    this.organizationForm = this.formBuilder.group({
      organizationName: ['', [Validators.required,ValidationService.spaceValidator]],
      adminName: ['',[Validators.required,ValidationService.spaceValidator]],
      adminEmailId: ['', [Validators.required,Validators.pattern(this.emailRegex)]],
      totalNumberOfEmployee: ['', Validators.required],
      phoneNumber: ['',Validators.required],
      location: ['',[Validators.required,ValidationService.spaceValidator]]
    });
  }
  tabNext(event) {
    $('#nav-import').addClass('active show');
    $('#nav-organisation').removeClass('active show');
    $('#nav-import-tab').addClass('active show');
    $('#nav-organisation-tab').removeClass('active show');
    //$('#nav-import').trigger('click');
    if (this.organizationForm.valid) {
      let payload = {
        "gemsCountryMaster": {
          "gemsCountryCode": "IND",
          "gemsCountryDescription": "INDIA",
          "gemsCountryMasterId": 1,
          "isActive": true
        },
        "gemsCurrencyMaster": {
          "currencyCode": "INR",
          "currencyDescription": "Indian Rupees",
          "gemsCurrencyMasterId": 1,
          "isActive": true
        },
        "gemsOrgAddress": this.organizationForm.value.location,
        "gemsOrgName": this.organizationForm.value.organizationName,
        "gemsOrgPhone": this.organizationForm.value.phoneNumber,
        "gemsOrgAdminName": this.organizationForm.value.adminName,
        "isActive": true,
        "gemsOrgEmail": this.organizationForm.value.adminEmailId,
        "gemsOrgId": this.organizationDetails.gemsOrgId, 
        "gemsOrgSetupStatus": 0,
        "gemsOrgEmployeeCount": this.organizationForm.value.totalNumberOfEmployee,
        "gemsOrganisationCode": this.organizationDetails.gemsOrganisationCode
      }
      this.genericservice.postwithoutToken(UrlConstant.addOrganiztionApi, payload, false).subscribe(response => {
        if (response !== null) {
        } else {

        }
      })
    }
  }

  tabPrev() { 

    this.route.navigate(['/signIn']);

  }
  onKeyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  get adminEmailId() {
    return this.organizationForm.get('adminEmailId');
 }

}
