import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
	selector: 'onbording-step-one',
	templateUrl: './onbording-step-one.component.html',
	styleUrls: ['./onbording-step-one.component.scss']
})

export class OnbordingStepOneComponent implements OnInit {

	constructor(private page: Page, private router: RouterExtensions) {
		page.actionBarHidden = true;
	}

	ngOnInit() { }

	nextSlide() {
	  this.router.navigate(['main', 'step-two'])
	}
	
}