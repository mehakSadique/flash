import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { Page } from 'tns-core-modules/ui/page/page';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from '~/app/shared/services/mobile.service';
import { HttpClient } from '@angular/common/http';
import { TextField } from "tns-core-modules/ui/text-field";
import {request} from 'tns-core-modules/http';
import * as appSettings from 'tns-core-modules/application-settings';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ns-voting-guides',
  templateUrl: './voting-guides.component.html',
  styleUrls: ['./voting-guides.component.scss']
})
export class VotingGuidesComponent implements OnInit {
  public url;
  public voterGuides;
  constructor(
    private page: Page,
    private router: RouterExtensions, 
    private mobileService: MobileService, 
    private http: HttpClient) {
    // page.actionBarHidden = true;
  }

  ngOnInit() {
  }
  onReturnPress(args) {
    let textField = <TextField>args.object;
     request({
      url:
      `https://us-central1-time-to-vote-q2.cloudfunctions.net/voter-guides?electionId=2000=${textField.text}`,
      method: 'GET',

    })
         .then(res => {appSettings.setString('voterGuides',JSON.stringify(res.content))})

      .catch(err => {
        console.log(err);
      });
      const description = JSON.parse(appSettings.getString('voterGuides')).description;
      const name = JSON.parse(appSettings.getString('voterGuides')).name;
    
      request({
        url:
        `https://us-central1-time-to-vote-q2.cloudfunctions.net/voter-guides?electionId=2000=${description}`,
        method: 'GET',
  
      })
           .then(res => {appSettings.setString('voterGuides',JSON.stringify(res.content))})
  
        .catch(err => {
          console.log(err);
        });
      
    setTimeout(() => {
        textField.dismissSoftInput(); 
    }, 100);
     
    this.router.navigate(["main","home"]);
}

  open(url) {
    this.router.navigate(['web'], { queryParams: { link: url } });
  }


  onDrawerNextTap() {
    this.mobileService.sideDrawer.showDrawer();
  }

 
}
