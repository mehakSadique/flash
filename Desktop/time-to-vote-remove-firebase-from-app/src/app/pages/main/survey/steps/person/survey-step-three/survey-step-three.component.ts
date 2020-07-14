import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { request } from 'tns-core-modules/http';
import * as appSettings from 'tns-core-modules/application-settings';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
	selector: 'survey-step-three',
	templateUrl: './survey-step-three.component.html',
	styleUrls: ['./survey-step-three.component.scss']
})

export class SurveyStepThreeComponent implements OnInit {

	constructor(public router: RouterExtensions) { }


	ngOnInit() { }

	back() {
		this.router.back();
	}

	nextSlide() {
		request({
			url:
			  'https://us-central1-time-to-vote-q2.cloudfunctions.net/survey/response',
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			content: JSON.stringify({
			  surveyId: "YHHkaRiLJ0xjddAZFply",
			  electionId: "Dfn8A82vWiX9cvND1bjr",
			  deviceId: appSettings.getString("deviceID"),
			  answers: [
			  {
				questionId: "3RUrhu3MssJ9CVhssiFn",
				answer: false
			  }
	  ] 
			})
		  })
			  .then(res => {
				console.log(res)
			  })
		dialogs.alert({
			message: "Your survey has been submitted",
			okButtonText: "CONTINUE"
		}).then(() => {
			this.router.navigate(['main', 'survey', 'submited']);
		});
	}


}