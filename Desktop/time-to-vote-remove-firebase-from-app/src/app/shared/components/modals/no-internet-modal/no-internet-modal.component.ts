import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular';

@Component({
  selector: 'app-no-internet-modal',
  templateUrl: './no-internet-modal.component.html',
  styleUrls: ['./no-internet-modal.component.scss']
})
export class NoInternetModalComponent implements OnInit {
    title: string;
    image: string;
    button: string;
    constructor(private params: ModalDialogParams) { }


  ngOnInit() {
  }

    dismiss() {
        this.params.closeCallback(false);
    }
    approve() {
        this.params.closeCallback(true);
    }

}
