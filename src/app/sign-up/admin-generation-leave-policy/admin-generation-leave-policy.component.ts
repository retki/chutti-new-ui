import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-generation-leave-policy',
  templateUrl: './admin-generation-leave-policy.component.html',
  styleUrls: ['./admin-generation-leave-policy.component.scss']
})
export class AdminGenerationLeavePolicyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabNext(event) {

  }
  tabPrev() {
    $('#nav-mapping').addClass('active show');
    $('#nav-policy').removeClass('active show');
    $('#nav-mapping-tab').addClass('active show');
    $('#nav-policy-tab').removeClass('active show');
  }

}
