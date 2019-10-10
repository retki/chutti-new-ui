import { Component, OnInit } from '@angular/core';
import { UrlConstant } from '../../../services/urlConstant';
import { EncryptDecryptLocalStorageService } from '../../../services/encrypt-decrypt-localstorage.service';
import { Genericservice } from '../../../services/genericservices';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-leavedetails',
  templateUrl: './leavedetails.component.html',
  styleUrls: ['./leavedetails.component.scss']
})
export class LeavedetailsComponent implements OnInit {
  public leavedetailsForm: FormGroup;

  public getleaveparamapiUrl = UrlConstant.getLeaveParamAPi;
  public saveparamUrl = UrlConstant.saveorganizationparamApi;
 
  public months = [
    { value: '1', label: '1 Month' },
    { value: '2', label: '2 Month' },
    { value: '3', label: '3 Month' },
    { value: '4', label: '4 Month' },
    { value: '5', label: '5 Month' },
    { value: '6', label: '6 Month' },
    { value: '7', label: '7 Month' },
    { value: '8', label: '8 Month' },
    { value: '9', label: '9 Month' },
    { value: '10', label: '10 Month' },
    { value: '11', label: '11 Month' },
    { value: '12', label: '12 Month' },
    { value: '13', label: '13 Month' },
    { value: '14', label: '14 Month' },
    { value: '15', label: '15Month' },
    { value: '16', label: '16 Month' },
    { value: '17', label: '17 Month' },
    { value: '18', label: '18 Month' },
    { value: '19', label: '19 Month' },
    { value: '20', label: '20 Month' },
    { value: '21', label: '21 Month' },
    { value: '22', label: '24 Month' },
    { value: '23', label: '23 Month' },
    { value: '24', label: '24 Month' },
  ];
  getparamlist: any = [];
  saveparamlist: any = [];
  organization: any = [];
  public effectiveafter;
  hour: any;
  noOfTimesPermissionAllowed: any;
  isValidTime: boolean = false;
  timepicker;
  meridian = true;
  spinners = false;

  constructor(private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, private genericservice: Genericservice) {
    // this.timepicker = { hour: 1, minute: 30};
   }

  ngOnInit() {
    this.validateForm();
    this.getleaveparam();
    this.subscribe();
    this.getUserById();
  }
  getUserById() {
    let reqPayload ={
      "gemsUserMasterId": this.encryptdecryptlocalstorage.getLocalStorage('userId')
    }
    return this.genericservice.post(UrlConstant.getEmployeeApi, reqPayload, false).subscribe(response => {
      this.organization = response.data.gemsOrganisation;
    })
  }

  onhrSelectionChange(entry): void {
    this.hour = entry;
    this.validateTime();
}

onSelectionChange(val): void {   
  this.noOfTimesPermissionAllowed = val;
  
}

subscribe(){
  this.leavedetailsForm.valueChanges.subscribe(value=>{
    console.log(value);
    
  })
}


  nonworking = false;
  holiday = false;
  workingdays(event) {
    this.nonworking = !this.nonworking
  }
 
  changemonth(event) {

    this.effectiveafter=event;

  }
  validateForm() {
    this.leavedetailsForm = new FormGroup({    
      gemsMaxPerHour:new FormControl(),
      noOfTimesPermAllowed: new FormControl(),
      timepicker: new FormControl(),
      // maxPermDayHr: new FormControl(),
      // maxPermDayMin: new FormControl(),
      isNonWorkingDay:new FormControl(),  
      isHoliday:new FormControl(),
      effectiveAfter:new FormControl(),
    });
  }
  getleaveparam() {
    const payloadObj = {
      gemsOrganisation: { gemsOrgId: this.encryptdecryptlocalstorage.getLocalStorage('organizationId') }
    };
    return this.genericservice.post(this.getleaveparamapiUrl, payloadObj, false).subscribe(response => {
      this.getparamlist = response.data;
      // this.organization = this.getparamlist.gemsOrganisation;
      let maxPermDayHr;
      let maxPermDayMin;
      maxPermDayHr =this.getparamlist.maxPermDay.toString().split(".")[0];
      maxPermDayHr = maxPermDayHr.length > 1 ? maxPermDayHr : '0' + maxPermDayHr;
      maxPermDayMin =this.getparamlist.maxPermDay.toString().split(".")[1];
      maxPermDayMin = maxPermDayMin.length > 1 ? maxPermDayMin : maxPermDayMin + '0';

      this.timepicker = { hour: parseInt(maxPermDayHr), minute: parseInt(maxPermDayMin)};
      // this.timepicker.hour = parseInt(maxPermDayHr);
      // this.timepicker.minute = parseInt(maxPermDayMin);
      // this.leavedetailsForm.value.timepicker.hour = parseInt(maxPermDayHr);
      this.leavedetailsForm.controls['gemsMaxPerHour'].setValue(this.getparamlist.gemsMaxPerHour);
      this.leavedetailsForm.controls['noOfTimesPermAllowed'].setValue(this.getparamlist.noOfTimesPermMonth);
      this.leavedetailsForm.controls['isNonWorkingDay'].setValue(this.getparamlist.isNonWorkingDay);
      this.leavedetailsForm.controls['isHoliday'].setValue(this.getparamlist.isHoliday);
      this.leavedetailsForm.controls['effectiveAfter'].setValue(this.getparamlist.effectiveAfter);


      // this.leavedetailsForm.setValue({
      //   gemsMaxPerHour:this.getparamlist.gemsMaxPerHour,
      //   noOfTimesPermAllowed : this.getparamlist.noOfTimesPermMonth,
      //   timepicker : '' ,
      //   // maxPermDayHr : maxPermDayHr.length > 1 ? maxPermDayHr : "0"+ maxPermDayHr ,
      //   // maxPermDayMin : maxPermDayMin.length > 1 ? maxPermDayMin : maxPermDayMin + "0" ,
      //   isNonWorkingDay:this.getparamlist.isNonWorkingDay,
      //   isHoliday:this.getparamlist.isHoliday,
      //   effectiveAfter:this.getparamlist.effectiveAfter,
      // })
    });
  }
  onKeyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  validateTime() {
    this.leavedetailsForm.value.timepicker.hour = this.leavedetailsForm.value.timepicker.hour > 12 ? 
   (this.leavedetailsForm.value.timepicker.hour)-12 : this.leavedetailsForm.value.timepicker.hour; 
    this.isValidTime = false;
    if(this.leavedetailsForm.value.timepicker) { 
      if(this.leavedetailsForm.value.gemsMaxPerHour == 0){
        this.isValidTime = false;
      } else {  
    let time;
    time = parseInt(this.leavedetailsForm.value.timepicker.hour) * 60;
    time = time + parseInt(this.leavedetailsForm.value.timepicker.minute);
    this.isValidTime = (time > this.leavedetailsForm.value.gemsMaxPerHour * 60 ) ? true : false;
      }
    }
  }
  saveparam() {
    this.timepicker.hour = this.timepicker.hour > 12 ? this.timepicker.hour - 12 : this.timepicker.hour;
    // let maxPermDay;
    // if(this.leavedetailsForm.value.maxPermDayHr && this.leavedetailsForm.value.maxPermDayMin) {
    //   maxPermDay = parseInt(this.leavedetailsForm.value.maxPermDayHr) * 60 ;
    //   maxPermDay = maxPermDay + parseInt(this.leavedetailsForm.value.maxPermDayMin);
    // }
    const payloadObj = {
      "createdBy": 1,
      "createdOn": new Date(),
      "effectiveAfter":this.effectiveafter,
      "gemsMaxPerHour":this.leavedetailsForm.value.gemsMaxPerHour,
      "maxPermDay":  this.timepicker.hour+'.'+this.timepicker.minute,
      "noOfTimesPermMonth": this.leavedetailsForm.value.noOfTimesPermAllowed,
      "gemsOrganisation": this.organization,
      "isActive": true,
      "isHoliday": this.leavedetailsForm.controls.isHoliday.value,
      "isNonWorkingDay": this.leavedetailsForm.controls.isNonWorkingDay.value,
      "updatedBy": 1,
      "updatedOn": new Date(),
    };
    this.genericservice.post(this.saveparamUrl, payloadObj,true).subscribe(response => {
      this.saveparamlist = response.data;
      this.getleaveparam();
    });
  }
}
