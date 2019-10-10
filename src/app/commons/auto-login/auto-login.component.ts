import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from 'src/app/services/urlConstant';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';

@Component({
    selector: 'app-auto-login',
    templateUrl: './auto-login.component.html',
    styleUrls: ['./auto-login.component.scss']
})
export class AutoLoginComponent implements OnInit {
    public auotloginUrl = UrlConstant.autologinApi;
    constructor(private activatedRoute: ActivatedRoute,private genericservice: Genericservice,private router: Router
        , private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) {

    }
    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            let token = params['leavetoken'];
            let leaveObj = {
                "leaveToken": token
            }
            let encryptedMailId = params['email'];
            let leaveStatus = params['status'];
            let payLoad = {
                "userName": encryptedMailId
              }
            this.genericservice.post(this.auotloginUrl,payLoad,false).subscribe(response =>{
                if (response.status.success == "Success") {
                    this.encryptdecryptlocalstorage.setToLocalStorage("userName", response.data.userName);
                    this.encryptdecryptlocalstorage.setToLocalStorage("employeeId", response.data.employeeId);
                    this.encryptdecryptlocalstorage.setToLocalStorage("organizationId",response.data.organizationId);
                    this.encryptdecryptlocalstorage.setToLocalStorage("userId",response.data.userId);
                    sessionStorage.setItem("token", response.token);
                    this.router.navigateByUrl('user/approvals/leavedetails?leavetoken=' + token + '&leaveStatus=Approved');
                    // this.encryptdecryptlocalstorage.setToLocalStorage("userName", this.loginForm.value.userName);
                  }
                  else {
                    sessionStorage.setItem("token", "");     
                  }
            })
        });
       
    }

}