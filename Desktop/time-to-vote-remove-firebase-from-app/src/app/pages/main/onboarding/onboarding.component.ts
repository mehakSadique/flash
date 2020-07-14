import { Component, OnInit, ɵConsole } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular';
import { ActivatedRoute } from '@angular/router';
import { getBoolean } from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  constructor(private page: Page, private router: RouterExtensions, private route: ActivatedRoute) {
    page.actionBarHidden = true;
  }


  ngOnInit() {
    setTimeout(() => {
      if (getBoolean('hasCompletedOnboarding')) {
        this.router.navigate(['main', 'demographic'])
      } else {
        this.router.navigate(['step-one'], { relativeTo: this.route })
      }
    }, 5000); 
  }

}
