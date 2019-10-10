import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UrlConstant } from 'src/app/services/urlConstant';
import { Genericservice } from 'src/app/services/genericservices';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {
  public downLoadExcelFileURL = UrlConstant.downLoadHolidaySampleFile;
  public uploadHolidayExcelFileURL = UrlConstant.uploadHolidayExcelFile;
  public getHolidayListURL = UrlConstant.holidayList;
  public saveHolidayURL = UrlConstant.saveholiday;
  public deleteHolidayURL = UrlConstant.deleteHoliday;

  public selectedSourecFile: File;
  public HolidayList = [];
  public holidaFormGroup: FormGroup;
  public filterkey: string;
  public manipulationMode = 'Add';
  public errorMessage = '';
  public selectExcelFileName: any = '';
  @ViewChild('myInput', { static: true })
  myInputVariable: ElementRef;
  deleteHolydayPayload: any;
  holidayName: any;
  modalRef: NgbModalRef;
  totalCount: any;
  start = 0;
  limit = 10;
  totalPages: number;
  currentPage = 1;
  selectedItemsPerPage = 10;
  paginateSummaryList: any;
  public pageOptions = [

    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
    { value: '500', label: '500' },
  ];
  order: any;
  orderBy: any;
  public orderBoolean = false;
  constructor(private genericService: Genericservice,
    private encryptdecryptlocalstorage: EncryptDecryptLocalStorageService,
    private formBuilder: FormBuilder, private modalService: NgbModal) {
    this.createHolidayForm();

  }

  ngOnInit() {
    this.inputActive();
    this.getHolidayList();
    this.subscribeHolidayForm();
  }

  subscribeHolidayForm() {
    this.holidaFormGroup.valueChanges.subscribe(value => {
      console.log(value);

    })
  }

  inputActive() {
    $(function () {
      const inputValueCheck = $(this).val();
      if (inputValueCheck === '') {
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

  resetForm() {
    this.errorMessage = '';
    this.holidaFormGroup.reset();
    this.manipulationMode = 'Add';
    this.myInputVariable.nativeElement.value = "";
  }

  getHolidayList() {
    var payLoad = {
      "gemsOrganisation":
      {
        "gemsOrgId": this.encryptdecryptlocalstorage
          .getLocalStorage('organizationId')
      }
    };

    this.genericService.post(this.getHolidayListURL, payLoad, false).subscribe(response => {
      this.HolidayList = response.data;
      this.totalCount = response.data.length;
      this.paginatedSummaryList();
      this.findItemsPerPage();

    })
  }

  goToNext() {
    this.currentPage++;
    this.start = this.start + this.selectedItemsPerPage;
    this.limit = this.limit + this.selectedItemsPerPage;
    this.paginateSummaryList = this.HolidayList.slice(this.start, this.limit);
  }
  goToPrev() {
    this.currentPage--;
    this.start = this.start - this.selectedItemsPerPage;
    this.limit = this.limit - this.selectedItemsPerPage;
    this.paginateSummaryList = this.HolidayList.slice(this.start, this.limit);
  }
  findItemsPerPage() {
    this.totalPages = Math.ceil(this.totalCount / this.selectedItemsPerPage);
  }
  changeItemPerPage(event) {
    this.currentPage = 1;
    this.selectedItemsPerPage = parseInt(event);
    this.start = 0;
    this.limit = this.selectedItemsPerPage;
    this.paginatedSummaryList();
    this.findItemsPerPage();
  }
  goToPageNo(event) {
    console.log('on page change')
  }
  paginatedSummaryList() {
    this.paginateSummaryList = this.HolidayList.slice(this.start, this.limit);
  }


  downLoadSampleFile() {
    location.href = this.downLoadExcelFileURL;
  }

  selectExcelFile(event) {
    const reader = new FileReader();
    this.errorMessage = '';
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].name.split('.')[1] == 'xlsx' || event.target.files[0].name.split('.')[1] == 'xls') {
        this.selectExcelFileName = event.target.files[0].name;
        this.selectedSourecFile = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]); // read file as data url
      }
      else {
        this.errorMessage = 'Please upload file having extensions .xls/.xlsx';
      }

    }
  }

  uploadHolidayFile() {
    if (this.selectedSourecFile && this.errorMessage == '') {
      this.genericService.holidayUpload(this.uploadHolidayExcelFileURL,
        this.selectedSourecFile, this.encryptdecryptlocalstorage
          .getLocalStorage('organizationId'), true)
        .subscribe(response => {
          if (response.type == 4) {
            if (response['body'].status.success == 'Fail') {
              this.errorMessage = response['body'].data.JsonErrorResponse[0];
              this.myInputVariable.nativeElement.value = "";
            }
            else if (response['body'].status.success == 'Success') {
              this.myInputVariable.nativeElement.value = "";
              this.errorMessage = '';
              this.selectExcelFileName = '';
              this.getHolidayList();
              document.getElementById('upload_dismiss_modal').click();
            }
          }
        }, (error) => {
          // console.log('erropr in file upload',error)
          this.errorMessage = error.error.message;
        })
    }
  }


  createHolidayForm() {
    this.holidaFormGroup = this.formBuilder.group({
      gemsHolidayDetailId: [''],
      gemsHolidayName: ['', Validators.required],
      gemsHolidayOn: ['', Validators.required],
      isActive: [true],
      holidayRecurring: [true],
      gemsOrganisation: this.formBuilder.group({
        gemsOrgId: [this.encryptdecryptlocalstorage.getLocalStorage('organizationId')]
      }),
      updatedOn: [''],
      createdOn: [''],
      createdBy: [''],
      updatedBy: [''],
    })
  }

  editHoliday(data) {
    this.errorMessage = '';
    this.manipulationMode = 'Update';
    this.holidaFormGroup.patchValue({
      gemsHolidayDetailId: data.gemsHolidayDetailId,
      gemsHolidayName: data.gemsHolidayName,
      gemsHolidayOn: data.gemsHolidayOn,
      isActive: data.isActive,
      holidayRecurring: data.holidayRecurring,
      gemsOrganisation: { gemsOrgId: data.gemsOrganisation.gemsOrgId },

    })
    if (data.holidayRecurring.toLowerCase() == 'yes') {
      document.getElementById('radio-2')['checked'] = 0;
      document.getElementById('radio-1')['checked'] = 1;

    }
    if (data.holidayRecurring.toLowerCase() == 'no') {
      document.getElementById('radio-2')['checked'] = 1;
      document.getElementById('radio-1')['checked'] = 0;

    }
  }

  setPayload() {
    if (this.manipulationMode == 'Add') {
      delete this.holidaFormGroup.value.gemsHolidayDetailId;
      this.holidaFormGroup.value.createdOn = new Date();
      this.holidaFormGroup.value.created = this.encryptdecryptlocalstorage.getLocalStorage('employeeId');

    }
    if (this.manipulationMode == 'Update') {
      this.holidaFormGroup.value.updatedOn = new Date();
      this.holidaFormGroup.value.updatedBy = this.encryptdecryptlocalstorage.getLocalStorage('employeeId');

    }
  }

  submitHolidaForm() {
    this.errorMessage = '';
    if (this.holidaFormGroup.valid) {
      this.setPayload();
      this.genericService.post(this.saveHolidayURL, this.holidaFormGroup.value, true).subscribe(response => {
        if (response) {
          document.getElementById('dismiss_modal').click();
          this.getHolidayList();
          this.errorMessage = '';
        }
      }, error => {
        this.errorMessage = error.error.message;

      })
    }
  }

  openDeleteModal(content, holiday) {
    const modalConfig: any = {
      backdrop: 'static',
      size: 'md'
    };
    this.modalRef = this.modalService.open(content, modalConfig);
    this.modalRef.result
      .then((result) => {
        this.getHolidayList();
      }, (onDismiss) => {
      });

    this.holidayName = holiday.gemsHolidayName;
    this.deleteHolydayPayload = { 'gemsHolidayDetailId': holiday.gemsHolidayDetailId };
  }

  deleteHoliday() {
    if (this.deleteHolydayPayload) {
      this.genericService.post(this.deleteHolidayURL, this.deleteHolydayPayload, true).subscribe(response => {
        this.closeModal();
      });
    }
  }

  dismissModal() {
    this.modalRef.dismiss();
  }
  closeModal() {
    this.modalRef.close();
  }



  public get gemsHolidayName(): AbstractControl {
    return this.holidaFormGroup.get('gemsHolidayName');
  }
  public get isActive(): AbstractControl {
    return this.holidaFormGroup.get('isActive');
  } public get gemsHolidayOn(): AbstractControl {
    return this.holidaFormGroup.get('gemsHolidayOn');
  } public get gemsOrgId(): AbstractControl {
    return this.holidaFormGroup.get('gemsOrganisation').get('gemsOrgId');
  }
  public get holidayRecurring(): AbstractControl {
    return this.holidaFormGroup.get('holidayRecurring');
  }
}
