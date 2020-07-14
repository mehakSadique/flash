import { Component, OnInit } from '@angular/core';
import { EventData } from "tns-core-modules/ui/core/bindable";
import { Color, Page } from "tns-core-modules/ui/page";
import { topmost } from "tns-core-modules/ui/frame";
import { _setNavBarColor, NavigationButton } from "tns-core-modules/ui/action-bar";

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
    n: NavigationButton
  constructor() { }

  ngOnInit() {
  }


}
