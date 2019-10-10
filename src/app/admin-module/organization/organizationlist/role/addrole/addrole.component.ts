import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Genericservice } from '../../../../../services/genericservices';
import { UrlConstant } from '../../../../../services/urlConstant';
import { EncryptDecryptLocalStorageService } from '../../../../../services/encrypt-decrypt-localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.scss']
})
export class AddroleComponent implements OnInit {
  public addroleForm: FormGroup;
  public getcomponentUrl = UrlConstant.getcomponetApi;
  public saveroleUrl = UrlConstant.saveroleApi;
  public rolelistUrl = UrlConstant.rolelistApi;

  componentList = [];
  selectedComponents: any;
  roleList: any = [];
  selectedRoles:any;

  constructor(private genericservice: Genericservice, 
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,private router:Router) { }

  ngOnInit() {
    this.inputActive();
    this.createForm();
    this.getcomponents();
    this.check();
  }
  createForm() {
    this.addroleForm = new FormGroup({
      rolename: new FormControl('', [Validators.required]),
      roledesc: new FormControl('', [Validators.required]),
      admin:new FormControl(false,)
    });
  }
  inputActive() {
    $(function() {
      const inputValueCheck = $(this).val();
      if (inputValueCheck === '') {
        $('.form-group').addClass('focused');
      }
     });

    $('.form-control').focus(function() {
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
  getcomponents() {
    let payloadObj =
    {
      "isActive": "true",

    }
    return this.genericservice.post(this.getcomponentUrl, payloadObj, false).subscribe(response => {
      console.log(response)
      this.componentList = response.data;
      for (let component of this.componentList) {
        component.selected = false;
      }
    });
  }
  check() {
    console.log(this.componentList)
    var temArra = [];
    this.componentList.forEach(element => {
      if(element.selected==true){
        temArra.push(element);
      }
    });
    this.selectedRoles = temArra;
    console.log(this.selectedRoles);
  }
  getallrolelist()
  {
    let payloadobj={
      "gemsOrganisation": {"gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')}
    }
    return this.genericservice.post(this.rolelistUrl, payloadobj, false).subscribe(response => {
    
    });
  }


  saverole() {
    this.check();
    let payloadObj = {
      "components": this.selectedRoles,
      "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      "createdOn": new Date(),
      "gemsOrganisation": { gemsOrgId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId')},
      "isActive": true,
      "roleCode": this.addroleForm.value.rolename,
      "roleName": this.addroleForm.value.roledesc,
      "updatedBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      "updatedOn": new Date(),
      "isAdmin":this.addroleForm.value.admin
    } 
    return this.genericservice.post(this.saveroleUrl, payloadObj, true).subscribe(response => {
      this.roleList = response.data;
      console.log(this.roleList)
      this.getallrolelist();
      this.goBack();

    });
  }

  goBack() {
    this.router.navigate(['/admin/organization'], {queryParams:{'from':'role'}});
  }
}
