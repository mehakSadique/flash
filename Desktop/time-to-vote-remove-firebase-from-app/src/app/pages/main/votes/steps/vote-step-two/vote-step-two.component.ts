import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { Page } from 'tns-core-modules/ui/page';
import { ActivatedRoute } from '@angular/router';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'vote-step-two',
	templateUrl: './vote-step-two.component.html',
	styleUrls: ['./vote-step-two.component.scss']
})

export class VoteStepTwoComponent implements OnInit {

	constructor(
		private page: Page,
		private router: RouterExtensions,
		private route: ActivatedRoute
		) {
		page.actionBarHidden = true;
	}

	ngOnInit() { }

	nextSlide() {
		this.router.navigate(['./main', 'votes', 'timer']);
	}

	back() {
		this.router.navigate(['main', 'home']);
	}
}