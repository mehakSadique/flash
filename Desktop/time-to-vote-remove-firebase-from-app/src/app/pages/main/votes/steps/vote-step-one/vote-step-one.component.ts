import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { Page } from 'tns-core-modules/ui/page';
import { ActivatedRoute } from '@angular/router';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'vote-step-one',
	templateUrl: './vote-step-one.component.html',
	styleUrls: ['./vote-step-one.component.scss']
})

export class VoteStepOneComponent implements OnInit {

	constructor(
		private page: Page,
		private router: RouterExtensions,
		private route: ActivatedRoute
        
		) {
		page.actionBarHidden = true;
	}

	ngOnInit() { }

	nextSlide() {
		this.router.navigate(['vote-step-two'], { relativeTo: this.route });
	}
}