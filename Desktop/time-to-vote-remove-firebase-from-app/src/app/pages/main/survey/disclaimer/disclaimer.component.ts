import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'disclaimer',
	templateUrl: './disclaimer.component.html',
	styleUrls: ['./disclaimer.component.scss']
})

export class DisclaimerComponent implements OnInit {

	constructor(private router: RouterExtensions) { }

	ngOnInit() { }

	nextSlide() {
	  this.router.navigate(['main', 'survey', 'select'])
	}
}