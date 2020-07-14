import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { request } from 'tns-core-modules/http';
import * as appSettings from 'tns-core-modules/application-settings';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
	selector: 'mail-survey-step-three',
	templateUrl: './mail-survey-step-three.component.html',
	styleUrls: ['./mail-survey-step-three.component.scss']
})

export class MailSurveyStepThreeComponent implements OnInit {

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
			  surveyId: "Ls1YUDwg1rHERPbM2nIa",
			  electionId: "Dfn8A82vWiX9cvND1bjr",
			  deviceId: appSettings.getString("deviceID"),
			  answers: [
			  {
				questionId: "Bq1z6Xweoz8GybuARCUi",
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