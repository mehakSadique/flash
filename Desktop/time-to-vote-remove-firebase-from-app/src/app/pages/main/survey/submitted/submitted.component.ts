import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { Page } from 'tns-core-modules/ui/page';
import { ActivatedRoute } from '@angular/router';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'submitted',
	templateUrl: './submitted.component.html',
	styleUrls: ['./submitted.component.scss']
})

export class SubmittedComponent implements OnInit {

	constructor(private page: Page, private router: RouterExtensions, private route: ActivatedRoute) {
		page.actionBarHidden = true;
	  }
	
	  ngOnInit() {
		// this.router.navigate(['step-one'], { relativeTo: this.route })
	  }

	  goHome() {
		this.router.navigate(['main', 'home'])
	  }
}
