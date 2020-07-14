import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { Page } from 'tns-core-modules/ui/page/page';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from '~/app/shared/services/mobile.service';
import { request } from 'tns-core-modules/http';
import * as appSettings from 'tns-core-modules/application-settings';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ns-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.scss']
})
export class DemographicComponent implements OnInit {

  public demographicFormParams = {
    party: '',
    gender: '',
    school: '',
    race: '',
    year: ''
  }

  constructor(
    private page: Page,
    private router: RouterExtensions, 
    private mobileService: MobileService) {
    // page.actionBarHidden = true;
  }

  ngOnInit() {
  }

  onDrawerNextTap() {
    this.mobileService.sideDrawer.showDrawer();
  }




  save() {
    let demographicArray = []

    for (let key in this.demographicFormParams) {
      let value = this.demographicFormParams[key];
      demographicArray.push({
        questionId: 'dHcHF58QH4H6qVa4hKTJ',
        answer:value,
        
      })
  }
    request({
      url:
        'https://us-central1-time-to-vote-q2.cloudfunctions.net/survey/response',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      content: JSON.stringify({
        surveyId: "0IYADTa8EQQHDY4kpywr",
        deviceId: appSettings.getString('deviceID'),
        answers:  demographicArray
      })
    })
        .then(res => {
          console.log(res)
        })
    console.log(this.demographicFormParams);
    console.log(demographicArray)
    this.router.navigate(['main', 'home']);
  }

}
