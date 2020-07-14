import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'survey-step-two',
	templateUrl: './survey-step-two.component.html',
	styleUrls: ['./survey-step-two.component.scss']
})



export class SurveyStepTwoComponent implements OnInit {

	constructor(private router: RouterExtensions) { }


	ngOnInit() { }

	back() {
		this.router.back();
	}

	nextSlide() {
		
		this.router.navigate(['main', 'survey', 'step-three'])
	}
}