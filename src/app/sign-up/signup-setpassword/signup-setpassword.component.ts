import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { commonService } from '../../services/commonMethodService';
import { Genericservice } from '../../services/genericservices';
import { Router, ActivatedRoute } from '@angular/router';
import { UrlConstant } from '../../services/urlConstant';
import { EncryptDecryptLocalStorageService } from '../../services/encrypt-decrypt-localstorage.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-signup-setpassword',
  templateUrl: './signup-setpassword.component.html',
  styleUrls: ['./signup-setpassword.component.scss']
})
export class SignupSetpasswordComponent implements OnInit {

  public setpasswordForm: FormGroup;
  public show:boolean=false;
  public showConfirmPswd:boolean=false;
  public setsignuppasswordUrl = UrlConstant.sigupsetpasswordApi;
  public validatesigupTokenoUrl=UrlConstant.validatetokensignupApi
  paramEmail: any;
  paramToken: any;
  PreLoader = false;
  userId: any;
  gemsUserMaster: any=[];

  constructor(private commonservice:commonService,private genericservice:Genericservice,private route:Router,private urlconstant: UrlConstant
    ,public activatedRoute:ActivatedRoute,private encryptdecryptlocalstorage:EncryptDecryptLocalStorageService
    ,private loadingBar: LoadingBarService) { 
      localStorage.clear();
    this.createForm();
   // this.userId = this.encryptdecryptlocalstorage.getLocalStorage('userId');

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.paramToken=params.token;
      localStorage.setItem("emailToken",this.paramToken)
   });
   this.validateToken();
  }
  createForm() {
    this.setpasswordForm = new FormGroup({
      newpassword1: new FormControl('', [Validators.required,Validators.minLength(8)]),
      oldpassword: new FormControl('', [Validators.required,Validators.minLength(8)]),

    });
  }
  reset() {
    this.loadingBar.start();
    var encryptedPassword = this.commonservice.reverseString(this.setpasswordForm.value.newpassword1);
    if(this.setpasswordForm.value.newpassword1==this.setpasswordForm.value.oldpassword){
      let reqPayload={
        "userName": this.gemsUserMaster.userName,
        "userPassword": encryptedPassword,
        "isActive": true,
        "createdBy": null,
        "createdOn": null,
        "updatedBy": null,
        "updatedOn": null,
        "token": null,
        "utc": 1568959343306,
        "deviceTokens": [],
        "serverDateTime": new Date(),
        "fireBaseDeviceToken": null,
        "gemsOrganisation": this.gemsUserMaster.gemsOrganisation,
        "gemsRoleMaster": null,
        "colorSkin": null,
        "profileImgData": null,
          
      }
      var emailToken=localStorage.getItem("emailToken");
      this.genericservice.login(this.setsignuppasswordUrl+"?emailToken="+emailToken,reqPayload).subscribe(response=>{
        if(response.status.success === "Success"){
          this.encryptdecryptlocalstorage.setToLocalStorage('gemsUserMasterId',response.data.gemsUserMasterId);
          this.encryptdecryptlocalstorage.setToLocalStorage('organisationId',response.data.gemsOrganisation.gemsOrgId);
          this.loadingBar.complete();
          setTimeout(() => {
            this.route.navigate(['/start']);
            this.loadingBar.complete();
            this.setpasswordForm.reset();
          }, 2000);
        }     
      })
    } 
}
validateToken(){
  let reqPayload={
    "userTokenId": this.paramToken
  }
  
  this.genericservice.postwithoutToken(this.validatesigupTokenoUrl
    ,reqPayload,false).subscribe(response=> { 
    if(response !== null) {
      if(response.status.success === "Success") {
        this.gemsUserMaster=response.data;
      }
      if(response.status.success==="Fail"){
        this.route.navigate(['/tokenexpired', { expired: 'true' }]);
      } 
    }
  });

}

}
