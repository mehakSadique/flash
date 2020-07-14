import { Component, OnInit, Input, ViewContainerRef, EventEmitter, Output } from '@angular/core';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
import { ModalDialogParams, ModalDialogService, ModalDialogOptions } from 'nativescript-angular';
import { SelectModalComponent } from '../../modals/select-modal/select-modal.component';

interface SelectOption {
	name: string;
	value: string;
}

@Component({
	selector: 'select-component',
	templateUrl: './select-component.component.html',
	styleUrls: ['./select-component.component.scss']
})

export class SelectComponentComponent implements OnInit {
	@Input() placeholder: string;
	@Input() selectedOption: string;
	@Input() optionQuestion?: string;
	@Input() options: SelectOption[];
	@Input() label: string;
	@Output() valueChange = new EventEmitter();
	

	constructor(
		private modalService: ModalDialogService,
		private vcRef: ViewContainerRef) { }

	ngOnInit() { }

	clickSelect() {
		const options: ModalDialogOptions = {
			viewContainerRef: this.vcRef,
			context: {selectedValue: this.selectedOption, optionQuestion: this.optionQuestion, data: this.options },
			fullscreen: false,
		};
	
		// showModal returns a promise with the received parameters from the modal page
		this.modalService.showModal(SelectModalComponent, options).then((data) => {
			this.placeholder = data.name;
			this.valueChange.emit(data);
		}).catch((err) => {
			console.log(err);
		})
	}
}