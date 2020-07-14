import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { Page } from 'tns-core-modules/ui/page/page';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
import { setBoolean } from "tns-core-modules/application-settings";
import { request } from 'tns-core-modules/http';
import * as appSettings from 'tns-core-modules/application-settings';

@Component({
	selector: 'onbording-step-three',
	templateUrl: './onbording-step-three.component.html',
	styleUrls: ['./onbording-step-three.component.scss']
})

export class OnbordingStepThreeComponent implements OnInit {

	constructor(private page: Page, private router: RouterExtensions) {
		page.actionBarHidden = true;
	}

	ngOnInit() { }

	home() {
		setBoolean('hasCompletedOnboarding', true)
		request({
			url:
			  'https://us-central1-time-to-vote-q2.cloudfunctions.net/device',
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			content: JSON.stringify({
			  language: `en`,
			  zipCode: 11434 
			})
		  })
			  .then(res => {
				let device = res.content.toJSON()
				appSettings.setString('deviceID',device.id);
			  })
			.catch(err => {
			  console.log(err);
			});
		this.router.navigate(['main', 'demographic'])
	}
}