import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'mail-survey-step-one',
	templateUrl: './mail-survey-step-one.component.html',
	styleUrls: ['./mail-survey-step-one.component.scss']
})

export class MailSurveyStepOneComponent implements OnInit {

	constructor(private router: RouterExtensions) { }

	ngOnInit() {}

	back() {
	   this.router.back();
	}

	nextSlide() {
	  this.router.navigate(['main', 'survey', 'mail-step-two']);
	}
}