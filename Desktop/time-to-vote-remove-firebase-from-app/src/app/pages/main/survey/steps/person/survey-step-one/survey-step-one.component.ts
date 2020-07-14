import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { request } from 'tns-core-modules/http';
import * as appSettings from 'tns-core-modules/application-settings';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'survey-step-one',
	templateUrl: './survey-step-one.component.html',
	styleUrls: ['./survey-step-one.component.scss']
})

export class SurveyStepOneComponent implements OnInit {

	constructor(private router: RouterExtensions) { }


	ngOnInit() { }

	back() {
		this.router.back();
	}

	nextSlide() {
		
		this.router.navigate(['main', 'survey', 'step-two'])
	}
}