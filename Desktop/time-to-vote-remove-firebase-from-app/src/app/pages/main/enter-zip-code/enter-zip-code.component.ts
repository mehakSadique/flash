import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { isAndroid} from 'tns-core-modules/ui/page';
import { TextField } from "tns-core-modules/ui/text-field";
import { HttpClient } from '@angular/common/http';
import {request} from 'tns-core-modules/http';
import * as appSettings from 'tns-core-modules/application-settings';

@Component({
  selector: 'ns-enter-zip-code',
  templateUrl: './enter-zip-code.component.html',
  styleUrls: ['./enter-zip-code.component.scss']
})
export class EnterZipCodeComponent implements OnInit {
  public isAndroid = isAndroid;
  public url;
  public election;
  constructor(
    private router: RouterExtensions, private http: HttpClient
  ) {
}

  ngOnInit() {
  }

   onReturnPress(args) {
    let textField = <TextField>args.object;
     request({
      url:
      `https://us-central1-time-to-vote-q2.cloudfunctions.net/election?zipCode=${textField.text}`,
      method: 'GET',

    })
         .then(res => {appSettings.setString('election',JSON.stringify(res.content))})

      .catch(err => {
        console.log(err);
      });
      
      const electionId = JSON.parse(appSettings.getString('election')).googleCivicInformationApiId;
    
      request({
        url:
        `https://us-central1-time-to-vote-q2.cloudfunctions.net/voterGuides?electionId=${electionId}`,
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

  close() {
    this.router.back();
  }

}
