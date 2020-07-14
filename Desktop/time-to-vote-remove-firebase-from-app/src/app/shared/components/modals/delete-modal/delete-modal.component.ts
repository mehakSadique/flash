import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

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
