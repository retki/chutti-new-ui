import { Component, OnInit } from '@angular/core';
import {TabChangeService} from '../../services/tab-change.service'
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor( private tabChangeService :TabChangeService, private router: Router,
    private loadingBar: LoadingBarService) {
    console.log("in project compo")
   }

  ngOnInit() {
     this.tabChangeService.activateTabNameObs.subscribe(data => {
     
      if(data=='assignment') {
        this.router.navigate(['/admin/project'])

        $('#nav-assignment').addClass('active show');
        $('#nav-type').removeClass('active show');
        $('#nav-assignment-tab').addClass('active show');
        $('#nav-type-tab').removeClass('active show');
        $('#nav-list').removeClass('active show');
        $('#nav-list-tab').removeClass('active show');

       
        
      }
      
    
   })
  
  }

  gettab(event){
    console.log(event)
  }
}
