import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { commonService } from '../../services/commonMethodService';
import { Genericservice } from '../../services/genericservices';
import { Router, ActivatedRoute } from '@angular/router';
import { UrlConstant } from '../../services/urlConstant';
import { EncryptDecryptLocalStorageService } from '../../services/encrypt-decrypt-localstorage.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.scss']
})
export class SetpasswordComponent implements OnInit {
  public setpasswordForm: FormGroup;
  public show:boolean=false;
  public showConfirmPswd:boolean=false;
  public setpasswordUrl = UrlConstant.setpasswordApi;
  public validateResetTokenoUrl=UrlConstant.validateResetToken
  paramEmail: any;
  paramToken: any;
  PreLoader = false;
  userId: any;

  constructor(private commonservice:commonService,private genericservice:Genericservice,private route:Router,private urlconstant: UrlConstant
    ,public activatedRoute:ActivatedRoute,private encryptdecryptlocalstorage:EncryptDecryptLocalStorageService
    ,private loadingBar: LoadingBarService) { 
      localStorage.clear();
    this.createForm();
    //this.userId = this.encryptdecryptlocalstorage.getLocalStorage('userId');

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      //this.paramEmail=params.email;
      this.paramToken=params.token;
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
    if(this.setpasswordForm.value.newpassword1==this.setpasswordForm.value.oldpassword){
     var encryptedPassword = this.commonservice.reverseString(this.setpasswordForm.value.newpassword1);

      let reqPayload={
        "userPassword":encryptedPassword,
        "gemsUserMasterId":this.userId
      }
      this.genericservice.login(this.setpasswordUrl,reqPayload).subscribe(response=>{
        if(response.status.success=="Success"){
          this.loadingBar.complete();
          setTimeout(() => {
            this.route.navigate(['/signIn']);
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
  this.genericservice.postWithOutHeaders(this.validateResetTokenoUrl,reqPayload,false).subscribe(response=>{
    let validToken=response.status.success;
    if(validToken=="Fail"){
      this.route.navigate(['/tokenexpired', { expired: 'true' }]);
    } else {
    this.userId=response.data.userId;
    }
  });

}
}
