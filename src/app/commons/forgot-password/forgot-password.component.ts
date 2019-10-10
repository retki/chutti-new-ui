import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UrlConstant } from '../../services/urlConstant';
import { Genericservice } from '../../services/genericservices';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotpasswordForm: FormGroup;
  public forgetPasswordUrl = UrlConstant.forgotpasswordApi
  PreLoader = false;
  public failSignIn = ""
  public sucessSignIn = ""

  constructor(private gernericservice: Genericservice, private urlconstant: UrlConstant, private loadingBar: LoadingBarService) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.forgotpasswordForm = new FormGroup({
      emailId: new FormControl('', [Validators.email, Validators.required]),
    });
  }
  send() {
    this.loadingBar.start();
    let payload = {
      "emailId": this.forgotpasswordForm.value.emailId
    }

    return this.gernericservice.login(this.forgetPasswordUrl, payload).subscribe(response => {
      if (response.status.success == "Success") {
       
       this.sucessSignIn = "Link has sent to your Email Id! Kindly Change Password!"
        this.loadingBar.complete();
        this.forgotpasswordForm.reset();

      }
      else {
        this.loadingBar.complete();
        this.failSignIn = "Incorrect Username"
        this.forgotpasswordForm.reset();

      }
    }, error => {
      this.loadingBar.complete();
      this.failSignIn = "Incorrect Username"
      this.forgotpasswordForm.reset();

    });

  }
  mouseenter()
  {
    this.failSignIn=null;
  }
}
