import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NavigationButton } from 'tns-core-modules/ui/action-bar/action-bar';
import { EventData } from 'tns-core-modules/ui/page/page';
import { isAndroid} from 'tns-core-modules/ui/page';


@Component({
    selector: 'app-nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
    @Input() title: string;
    @Output() openSideBar: EventEmitter<String> = new EventEmitter<String>();
    public isAndroid = isAndroid;

    constructor() { }

    ngOnInit() { }

    onDrawerNextTap() {
        this.openSideBar.emit();
    }

}

