import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'mail-survey-step-two',
	templateUrl: './mail-survey-step-two.component.html',
	styleUrls: ['./mail-survey-step-two.component.scss']
})



export class MailSurveyStepTwoComponent implements OnInit {

	constructor(private router: RouterExtensions) { }


	ngOnInit() { }

	back() {
		this.router.back();
	}

	nextSlide() {
		this.router.navigate(['main', 'survey', 'mail-step-three'])
	}
}