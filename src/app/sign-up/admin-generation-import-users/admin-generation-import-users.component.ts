import { Component, OnInit } from '@angular/core';
import { Genericservice } from 'src/app/services/genericservices';
import { UrlConstant } from 'src/app/services/urlConstant';
import { EncryptDecryptLocalStorageService } from 'src/app/services/encrypt-decrypt-localstorage.service';
import { DataSharingService } from 'src/app/services/dataSharing.service';

@Component({
  selector: 'app-admin-generation-import-users',
  templateUrl: './admin-generation-import-users.component.html',
  styleUrls: ['./admin-generation-import-users.component.scss']
})
export class AdminGenerationImportUsersComponent implements OnInit {
  public fileName ='';
  isFileChoosen: boolean = false;
  selectedFiles: File;
  importUsersURL = UrlConstant.importUsersApi;
  FileSizeError: boolean = false;
  FileExtensionError: boolean = false;
  public preloader: boolean = false;

  constructor(public genericService: Genericservice, public encryptdecryptlocalstorage: EncryptDecryptLocalStorageService, public dataSharingService: DataSharingService) { }

  ngOnInit() {
  }
  chooseFile(event: any) {
    // this.errorMsgList = null;
    this.isFileChoosen = false;
    // this.FileFailedMSG = false;
    if (event.currentTarget.files[0].name.split('.').pop() == 'csv'
      || event.currentTarget.files[0].name.split('.').pop() == 'xlsx'
      || event.currentTarget.files[0].name.split('.').pop() == 'xls') {
      if (event.currentTarget.files[0].size <= 5000000) {
        if (event != undefined) {
          this.isFileChoosen = true;
        }
        this.FileExtensionError = false;
        this.FileSizeError = false;

        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
          this.fileName = event.target.files[0].name;
          // this.file = event.target.files[0];
          let fileData: File = event.target.files[0];
          this.selectedFiles = event.target.files[0]
          // this.ImageClear = true;
        }
      } else {
        this.FileExtensionError = false;
        this.FileSizeError = true;
        // this.ImageClear = false;
      }
    } else {
      this.FileExtensionError = true;
      this.FileSizeError = false;
    }
  }

  resetFile() {
    this.selectedFiles = undefined;
    this.isFileChoosen = false;
    this.fileName = '';
  }

  submitFile() {
    this.preloader = true;
    let id = parseInt(this.encryptdecryptlocalstorage.getLocalStorage('organisationId'));
    this.genericService.csvUpload(this.importUsersURL + '?organisationId=' + id , this.selectedFiles, true).subscribe(res => {
      this.preloader = false;
      this.dataSharingService.triggerUserMappingFlag('true');
      console.log(res);
    }, error => {
      this.preloader = false;
      this.dataSharingService.failureMessage('Oops! Something went wrong.')
    });
  }

  tabNext(event) {
    $('#nav-mapping').addClass('active show');
    $('#nav-import').removeClass('active show');
    $('#nav-mapping-tab').addClass('active show');
    $('#nav-import-tab').removeClass('active show');
  }
  tabPrev() {
    $('#nav-organisation').addClass('active show');
    $('#nav-import').removeClass('active show');
    $('#nav-organisation-tab').addClass('active show');
    $('#nav-import-tab').removeClass('active show');
  }
  downloadSample() {
    location.href = "http://pre-prod.cloudnowtech.net/attendance/demo.csv";
  }
}
