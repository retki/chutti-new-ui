import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Genericservice } from 'src/app/services/genericservices';
import { Router } from '@angular/router';
import { UrlConstant } from 'src/app/services/urlConstant';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { DataSharingService } from 'src/app/services/dataSharing.service';
declare var $: any
@Component({
  selector: 'app-admin-generation',
  templateUrl: './admin-generation.component.html',
  styleUrls: ['./admin-generation.component.scss']
})
export class AdminGenerationComponent implements OnInit {
  public totalNumberOfEmployeeOption = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];
  
  // @Input() leaveTypeList = [];

  constructor(private genericservice: Genericservice,private formBuilder: FormBuilder, private router: Router, private encryptdecryptLocalStorage: EncryptDecryptLocalStorageService, private dataSharingService: DataSharingService) { }

  ngOnInit() {

  }
  tabNext(){
    this.genericservice.postwithoutToken(UrlConstant.finishSetUpApi +'?organisationId='+this.encryptdecryptLocalStorage.getLocalStorage('organisationId'),null,true).subscribe(res => {
      // if(res.status.success == 'Success' || res.status.success == 'success'){
        this.router.navigate(['setupFinish']);
      // } else {
        // this.dataSharingService.failureMessage('Oops! Something went wrong in initial set-up process.');
      // }
    })
  }

  tabPrev(){
    $('#nav-mapping').addClass('active show');
    $('#nav-policy').removeClass('active show');
    $('#nav-mapping-tab').addClass('active show');
    $('#nav-policy-tab').removeClass('active show');
  } 
    

}
