import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { Page } from 'tns-core-modules/ui/page/page';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'onbording-step-two',
	templateUrl: './onbording-step-two.component.html',
	styleUrls: ['./onbording-step-two.component.scss']
})

export class OnbordingStepTwoComponent implements OnInit {

	constructor(private page: Page, private router: RouterExtensions) {
		page.actionBarHidden = true;
	}

	ngOnInit() { }

	nextSlide() {
		this.router.navigate(['main', 'step-three'])
	}
}