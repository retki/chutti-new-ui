import { Component, OnInit } from '@angular/core';
import { UrlConstant } from '../../../../services/urlConstant';
import { Router } from '@angular/router';
import { EncryptDecryptService } from '../../../../services/encrypt-decrypt.service';
import { commonService } from '../../../../services/commonMethodService';
import { Genericservice } from '../../../../services/genericservices';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { EncryptDecryptLocalStorageService } from '../../../../services/encrypt-decrypt-localstorage.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  public rolelistUrl = UrlConstant.rolelistApi;
  public getcomponentUrl = UrlConstant.getcomponetApi;
  public saveroleUrl = UrlConstant.saveroleApi;
  rolelist: any=[];
  componentList: any=[];
  selectedRoles: any=[];
  roleList: any=[];
  filterkey;
  public perpageOption = [

    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];
  selectedItemsPerPage: number = 10;
  totalCount: any;
  start: any;
  limit: any;
  totalPages: number;
  currentPage = 1;
  allrolelist: any=[];
  deleteRole: any=[];
  deleteRoleName = '';
  constructor(private router: Router, private urlconstant: UrlConstant, private genericservice: Genericservice, private commonservice: commonService,
    private encryptdecryptservice: EncryptDecryptService,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private loadingBar: LoadingBarService) { }

  ngOnInit() {
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.getallrolelist();
  }
getallrolelist()
{
  let payloadobj={
    "gemsOrganisation": {"gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId')}
  }
  return this.genericservice.post(this.rolelistUrl, payloadobj, false).subscribe(response => {
    this.rolelist = response.data;
    this.totalCount = response.data.length;
    this.paginatedallrolelist();
    this.findItemsPerPage();
    console.log(this.rolelist);
  });
}
paginatedallrolelist() {
  this.allrolelist = this.rolelist.slice(this.start, this.limit);
}
goToNext() {
  this.currentPage++;
  this.start = this.start + this.selectedItemsPerPage;
  this.limit = this.limit + this.selectedItemsPerPage;
  this.allrolelist = this.rolelist.slice(this.start, this.limit);
}
goToPrev() {
  this.currentPage--;
  this.start = this.start - this.selectedItemsPerPage;
  this.limit = this.limit - this.selectedItemsPerPage;
  this.allrolelist = this.rolelist.slice(this.start, this.limit);
}
findItemsPerPage() {
  this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);
}
changeItemPerPage(event) {
  this.currentPage = 1;
  this.selectedItemsPerPage = parseInt(event);
  this.start = 0;
  this.limit = this.selectedItemsPerPage;
  this.paginatedallrolelist();
  this.findItemsPerPage();
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

deleteroles() {
  this.check();
  let payloadObj = {
    "components": this.selectedRoles,
    "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
    "createdOn": new Date(),
    "gemsOrganisation": { gemsOrgId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId')},
    "isActive": true,
    // "roleCode": this.addroleForm.value.rolename,
    // "roleName": this.addroleForm.value.roledesc,
    "updatedBy": this.encryptdecryptlocalstorage.getLocalStorage('employeeId'),
    "updatedOn": new Date()
  }
  return this.genericservice.post(this.saveroleUrl, payloadObj, true).subscribe(response => {
    this.roleList = response.data;
    console.log(this.roleList)
    this.getallrolelist();
    this.router.navigateByUrl('/admin/organization');

  });
}

updaterole(id)
{
  this.router.navigate(['admin/organization/role/update'],{queryParams:{"id":id.gemsRoleMasterId}})
}
deleterole(obj)
{
console.log(obj);
this.deleteRole=obj;
this.deleteRoleName=obj.roleName;
}
deletedrole() {
  this.deleteRole.isActive = false;
  console.log(this.deleteRole);
  return this.genericservice.post(this.saveroleUrl, this.deleteRole, true).subscribe(response => {
    console.log(response);
    this.getallrolelist();
    this.deleteRoleName='';
  });
}
}
