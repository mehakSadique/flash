import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'select-modal',
	templateUrl: './select-modal.component.html',
	styleUrls: ['./select-modal.component.css']
})

export class SelectModalComponent implements OnInit {
	public radioOptions: any[];
	public selectedValue: string;
	public optionQuestion: string;
	constructor(private params: ModalDialogParams) {
		
	   const { selectedValue, optionQuestion, data } = params.context;
	   
	   this.radioOptions = data;
	   this.selectedValue = selectedValue;
	   this.optionQuestion = optionQuestion;
	}


	changeCheckedRadio(item) {
		this.params.closeCallback(item);
	}

	ngOnInit() { }
}