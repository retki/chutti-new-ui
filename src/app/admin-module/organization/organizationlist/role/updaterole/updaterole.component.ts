import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EncryptDecryptLocalStorageService } from '../../../../../services/encrypt-decrypt-localstorage.service';
import { Genericservice } from '../../../../../services/genericservices';
import { UrlConstant } from '../../../../../services/urlConstant';

@Component({
  selector: 'app-updaterole',
  templateUrl: './updaterole.component.html',
  styleUrls: ['./updaterole.component.scss']
})
export class UpdateroleComponent implements OnInit {
  public addroleForm: FormGroup;
  public roleId: any;
  public getcomponentUrl = UrlConstant.getcomponetApi;
  public saveroleUrl = UrlConstant.saveroleApi;
  rolelistUrl = UrlConstant.rolelistApi;
  componentList = [];
  selectedComponents: any;
  selectedRoles: any;
  rolelist: any = [];
  saveroleList: any;
  updatedata: any;

  constructor(private genericservice: Genericservice, private route: ActivatedRoute, private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private router: Router) {
    this.route.queryParams.subscribe((params: Params) => {
      this.roleId = params.id;
    });
  }

  ngOnInit() {
    this.createForm();
    this.inputActive();
    this.getallrolelist();
    this.getcomponents();
    this.check();
    this.subscribeForm()
  }
  subscribeForm() {
    this.addroleForm.valueChanges.subscribe(value => {
      console.log(value);

    });
  }

  update() {
    this.addroleForm.controls.rolename.setValue(this.updatedata.roleCode);
    this.addroleForm.controls.roledesc.setValue(this.updatedata.roleName);
    this.addroleForm.controls.admin.setValue(this.updatedata.isAdmin);

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
      if (element.selected == true) {
        temArra.push(element);
      }
    });
    this.selectedRoles = temArra;
    console.log(this.selectedRoles);
  }
  getallrolelist() {
    let payloadobj = {
      "gemsOrganisation": { "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId') }
    }
    return this.genericservice.post(this.rolelistUrl, payloadobj, false).subscribe(response => {
      this.rolelist = response.data;
      console.log(this.rolelist);
      this.rolelist.forEach(elementdata => {
        if (elementdata.gemsRoleMasterId == this.roleId) {
          this.updatedata = elementdata;
          console.log(this.updatedata);
          this.update();
        }
      })
    });
  }

  createForm() {
    this.addroleForm = new FormGroup({
      rolename: new FormControl('', [Validators.required]),
      roledesc: new FormControl('', [Validators.required]),
      admin: new FormControl(false),
    });
  }
  inputActive() {
    $(function () {
      const inputValueCheck = $(this).val();
      if (inputValueCheck === '') { 
        $('.form-group').removeClass('focused');
      }
      else (inputValueCheck === 1)
      {
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
  saverole() {
    this.check();
    let payloadObj = {
      "components": this.selectedRoles,
      "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      "createdOn": new Date(),
      "gemsOrganisation": { gemsOrgId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId') },
      "isActive": true,
      "roleCode": this.addroleForm.value.rolename,
      "roleName": this.addroleForm.value.roledesc,
      "updatedBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      "updatedOn": new Date(),
      "isAdmin": this.addroleForm.value.admin
    }
    return this.genericservice.post(this.saveroleUrl, payloadObj, true).subscribe(response => {
      this.saveroleList = response.data;
      console.log(this.saveroleList)
      this.getallrolelist();
      this.router.navigateByUrl('/admin/organization');

    });
  }

  updaterole() {
    this.check();
    let payloadObj = {
      "components": this.selectedRoles,
      "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      "createdOn": new Date(),
      "gemsOrganisation": { gemsOrgId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId') },
      "isActive": true,
      "roleCode": this.addroleForm.value.rolename,
      "roleName": this.addroleForm.value.roledesc,
      "updatedBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
      "updatedOn": new Date(),
      "isAdmin": this.addroleForm.value.admin,
      "gemsRoleMasterId": this.updatedata.gemsRoleMasterId,
    }
    return this.genericservice.post(this.saveroleUrl, payloadObj, true).subscribe(response => {
      this.saveroleList = response.data;
      console.log(this.saveroleList)
      this.getallrolelist();
      this.goBack();
    });
  }

  goBack() {
    this.router.navigate(['/admin/organization'], { queryParams: { 'from': 'role' } });
  }
}
