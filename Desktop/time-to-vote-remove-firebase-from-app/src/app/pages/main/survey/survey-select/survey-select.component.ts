import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'survey-select',
	templateUrl: './survey-select.component.html',
	styleUrls: ['./survey-select.component.scss']
})

export class SurveySelectComponent implements OnInit {

	constructor(private router: RouterExtensions) { }

	ngOnInit() { }

	openInPerson() {
	  this.router.navigate(['main', 'survey', 'step-one'])
	}

	openInMail() {
		this.router.navigate(['main', 'survey', 'mail-step-one']);
	}

	
}