import { Component, OnInit } from '@angular/core';
import { EncryptDecryptLocalStorageService } from '../../../services/encrypt-decrypt-localstorage.service';
import { EncryptDecryptService } from '../../../services/encrypt-decrypt.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

import { Genericservice } from '../../../services/genericservices';
import { UrlConstant } from '../../../services/urlConstant';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {
  shiftList: any=[];
  constructor(private router: Router, private urlconstant: UrlConstant, private genericservice: Genericservice,
    private encryptdecryptservice: EncryptDecryptService, 
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService) { }
     deleteSelectedObj:any
     permissionStartTimepicker;
     permissionEndTimepicker;
     permissionDate = 'DATE';
     startTimepickerAM = true;
     startTimepickerPM = false;
     endTimepickerAM = false;
     endTimepickerPM = true;
     endTimepickerAMOrPM: string;
     startTimePickerAMOrPM: string;
     shiftForm: FormGroup;
     editShiftForm:FormGroup;
     inTime;
     outTime;
     editSelcetdObj;
     meridian = true;
     spinners = false;
   
    
  ngOnInit() {
    this.getShiftList()
    this.shiftForm = new FormGroup({
      shiftName: new FormControl('', [Validators.required]),
      shiftInTime: new FormControl(''),
      shiftOutTime: new FormControl(''),
      inTimeControl: new FormControl(''),
      outTimeControl: new FormControl('')
    });
    this.editShiftForm=new FormGroup({
      shiftName: new FormControl('', [Validators.required]),
      shiftInTime: new FormControl(''),
      shiftOutTime: new FormControl(''),
      inTimeControl: new FormControl(''),
      outTimeControl: new FormControl('')
    });
  }
  getShiftList(){
  
    let payload={
      "gemsOrganisation":{
        "gemsOrgId": parseInt(this.encryptdecryptlocalstorage.getLocalStorage('organizationId'))}

    }
    this.genericservice.post(UrlConstant.getShift,payload,false).subscribe((response)=>{
  
    this.shiftList=response.data
    
    })



  }
  deleteShift(deleteObj){
    this.deleteSelectedObj=deleteObj

  }
  editShift(editObj){
    console.log(editObj)
    this.editSelcetdObj=editObj
    var intime=new Date(editObj.shiftInTime)
    var outtime=new Date(editObj.shiftOutTime)

    var inTimeControl={
      "hour":intime.getHours(),
      "minute":intime.getMinutes(),
      "second":intime.getSeconds()
    }
    var outTimeControl={
      "hour":outtime.getHours(),
      "minute":outtime.getMinutes(),
      "second":outtime.getSeconds()
    }
    
    this.editShiftForm.controls.shiftName.patchValue(editObj.shiftName);
    this.editShiftForm.controls.inTimeControl.patchValue(inTimeControl)
    this.editShiftForm.controls.outTimeControl.patchValue(outTimeControl)

   

  }
  confirmDelete(){
    this.deleteSelectedObj.isActive=false


    this.genericservice.post(UrlConstant.deleteShift,this.deleteSelectedObj,true).subscribe((response)=>{
  
     this.getShiftList()
      
      })

  }
  
  Unix_timestamp(t) {
    var dt = new Date(t)
    var hr = dt.getHours()
    var m = '0' + dt.getMinutes()
    var time = hr + ':' + m

    // moment(time).format('HH:mm')

    if (hr < 12) {
      time = hr + ':' + m.substr(-2) + 'AM'
    } else if (hr == 12) {
      time = hr + ':' + m.substr(-2) + 'PM'
    } else {
      time = hr - 12 + ':' + m.substr(-2) + 'PM'
    }
    return time
  }
  startTimepickerAMOrPM(event) {
    if (event === 'AM') {
        $('#am').addClass('active');
        $('#pm').removeClass('active');
        this.startTimepickerAM = true;
        this.startTimepickerPM = false;
    } else if (event === 'PM') {
        $('#pm').addClass('active');
        $('#am').removeClass('active');
        this.startTimepickerAM = false;
        this.startTimepickerPM = true;
    }
}
endTimepickerAMorPM(event) {
    if (event === 'AM') {
        $('#amEnd').addClass('active');
        $('#pmEnd').removeClass('active');
        this.endTimepickerAM = true;
        this.endTimepickerPM = false;
    } else if (event === 'PM') {
        $('#pmEnd').addClass('active');
        $('#amEnd').removeClass('active');
        this.endTimepickerAM = false;
        this.endTimepickerPM = true;
    }

}

reset() {
 
  this.shiftForm.reset();
  this.editShiftForm.reset()
}
setShiftTimeValues(){

console.log(  this.shiftForm.value)

this.inTime=this.shiftForm.value.inTimeControl
this.outTime=this.shiftForm.value.outTimeControl
  this.shiftForm.value.isActive = true; 
  this.shiftForm.value.createdBy =   parseInt(this.encryptdecryptlocalstorage.getLocalStorage('employeeId')) 
  this.shiftForm.value.updatedBy = 1;
  this.shiftForm.value.shiftName = this.shiftForm.value.shiftName.trim();
  let today = new Date();
  today.setHours(this.inTime.hour);
  today.setMinutes(this.inTime.minute);
  today.setSeconds(0);
  let today1 = new Date();
  today1.setHours(this.outTime.hour);
  today1.setMinutes(this.outTime.minute);
  today1.setSeconds(0);
  this.shiftForm.value.shiftInTime = today;
  this.shiftForm.value.shiftOutTime = today1;
 this.shiftForm.value.createdOn = new Date();
 this.shiftForm.value.updatedOn = new Date();
 let organisation = {
   "gemsOrgId": parseInt(this.encryptdecryptlocalstorage.getLocalStorage('organizationId'))
 }
 this.shiftForm.value.gemsOrganisation = organisation;
 let DateInString = today.getFullYear()+'-'+today.getMonth()+1+'-'+today.getDate();
 let shiftIntime = DateInString+' '+this.inTime.hour+':'+this.inTime.minute+':'+'00';
 let shiftOuttime = DateInString+' '+this.outTime.hour+':'+this.outTime.minute+':'+'00';

 let saveShiftUrl=UrlConstant.saveShift+"shiftInTime="+shiftIntime+'&shiftOutTime='+shiftOuttime
 
this.genericservice.post(saveShiftUrl,this.shiftForm.value,true).subscribe((response)=>{

this.getShiftList()

})

}
editShiftTimeValues(){

 console.log( this.editShiftForm.value)

this.inTime=this.editShiftForm.value.inTimeControl
this.outTime=this.editShiftForm.value.outTimeControl
  this.editShiftForm.value.isActive = true; 
  this.editShiftForm.value.createdBy =   parseInt(this.encryptdecryptlocalstorage.getLocalStorage('employeeId')) 
  this.editShiftForm.value.updatedBy = 1;
  this.editShiftForm.value.shiftName = this.editShiftForm.value.shiftName.trim();
  this.editShiftForm.value.shiftDetailId=this.editSelcetdObj.shiftDetailId
  let today = new Date();
  today.setHours(this.inTime.hour);
  today.setMinutes(this.inTime.minute);
  today.setSeconds(0);
  let today1 = new Date();
  today1.setHours(this.outTime.hour);
  today1.setMinutes(this.outTime.minute);
  today1.setSeconds(0);
  this.editShiftForm.value.shiftInTime = today;
  this.editShiftForm.value.shiftOutTime = today1;
 this.editShiftForm.value.createdOn = new Date();
 this.editShiftForm.value.updatedOn = new Date();
 let organisation = {
   "gemsOrgId": parseInt(this.encryptdecryptlocalstorage.getLocalStorage('organizationId'))
 }
 this.editShiftForm.value.gemsOrganisation = organisation;
 let DateInString = today.getFullYear()+'-'+today.getMonth()+1+'-'+today.getDate();
 let shiftIntime = DateInString+' '+this.inTime.hour+':'+this.inTime.minute+':'+'00';
 let shiftOuttime = DateInString+' '+this.outTime.hour+':'+this.outTime.minute+':'+'00';

 let saveShiftUrl=UrlConstant.saveShift+"shiftInTime="+shiftIntime+'&shiftOutTime='+shiftOuttime
 
this.genericservice.post(saveShiftUrl,this.editShiftForm.value,true).subscribe((response)=>{

this.getShiftList()

})


}
}

