import { Component, OnInit } from '@angular/core';
import { UrlConstant } from 'src/app/services/urlConstant';
import { Genericservice } from 'src/app/services/genericservices';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';


@Component({
  selector: 'app-leavetype',
  templateUrl: './leavetype.component.html',
  styleUrls: ['./leavetype.component.scss']
})
export class LeavetypeComponent implements OnInit {
  [x: string]: any;

  public LeavetypeUrl = UrlConstant.getLeavetypeApi;
  public saveleaveType = UrlConstant.saveLeaveTypeApi;
  leavetypelist: any;
  leaveTypeForm: FormGroup;
  addingleavetype: any;
  empleaveRequestId: string;
  gemsLeaveTypeMasterId: any;
  gemsEmployeeMaster: number;
  leavetypeId: any;
  comments: any;
  organizationId: any;
  constructor(private genericservice: Genericservice,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private fb: FormBuilder) {


  }
  ngOnInit() {
    this.inputActive();
    this.getLeavetype();
    this.leaveTypeForm = new FormGroup({
      leavename: new FormControl('', Validators.required),
      leavetypedescription: new FormControl('', Validators.required)
    });
  }



  // GET LEAVETYPE
  getLeavetype() {

    let payload = {
      "gemsOrganisation": {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
        "isActive": true,
      }
    }
   return this.genericservice.post(this.LeavetypeUrl, payload, false).subscribe(leavetyperesponse => {
      this.leavetypelist = leavetyperesponse.data;
    })

  }



  //ADD LEAVETYPE
  addleavetype(leaveTypeForm) {
    let payload = {
      "gemsOrganisation": {
        "gemsOrgId": this.encryptdecryptlocalstorage.getLocalStorage('organizationId'),
      },
      "leaveTypeCode": leaveTypeForm.value.leavename,
      "leaveTypeDescription": leaveTypeForm.value.leavetypedescription,
      "isActive": true,
      "createdBy": this.encryptdecryptlocalstorage.getLocalStorage('userId'),
      "createdOn": new Date(),
      "updatedBy": this.encryptdecryptlocalstorage.getLocalStorage('userId'),
      "updatedOn": new Date()
    }
   return this.genericservice.post(this.saveleaveType, payload, true).subscribe(response => {
      this.addingleavetype = response.data;
      this.getLeavetype();
    })
    
  }

  // SET VALUES IN EDIT MODAL

  update(leavetype) {
    //debugger
    this.leavetypeObj = leavetype
    console.log(this.leavetypeObj)
    this.leaveTypeForm.controls.leavename.setValue(leavetype.leaveTypeCode);
    this.leaveTypeForm.controls.leavetypedescription.setValue(leavetype.leaveTypeDescription);
  }

  reset() {
    this.leaveTypeForm.reset();
  }

  // UPDATE LEAVETYPE VALUES

  updatevalues() {

    this.leavetypeObj.leaveTypeCode = this.leaveTypeForm.value.leavename
    this.leavetypeObj.leaveTypeDescription = this.leaveTypeForm.value.leavetypedescription
    this.genericservice.post(this.saveleaveType, this.leavetypeObj, true).subscribe(response => {
      this.ngOnInit();
    })
  }

   // DELETE LEAVE TYPE
  deleteleavetypePopUp(leavetype){
    this.leavetypeObj = leavetype;
  }
 
  deleteleaveType() {
    this.leavetypeObj.isActive = false,
      this.genericservice.post(this.saveleaveType, this.leavetypeObj, true).subscribe(response => {
        this.ngOnInit();
      })
  }
  inputActive() {
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

  setOrder(value: string, orderBy) {
    if (this.order === value) {
      // this.reverse = !this.reverse;
      this.orderBoolean = !this.orderBoolean;
      this.orderBy = orderBy;
      // this.orderBy = this.orderBoolean === true ? 'asc' : 'desc';
    }
    this.order = value;
  }
}
