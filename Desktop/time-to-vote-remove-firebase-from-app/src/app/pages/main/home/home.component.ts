import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { MobileService } from '~/app/shared/services/mobile.service';
import { ApiService } from '~/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';



@Component({
    selector: 'Home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    constructor(
        private router: RouterExtensions,
        private mobileService: MobileService,
        private apiService: ApiService,
        private route: ActivatedRoute
        
    ) {
    }

    ngOnInit(): void {
    }


    onDrawerNextTap() {
        this.mobileService.sideDrawer.showDrawer();
    }

    onDrawerButtonTap(): void {}

    ngOnDestroy(): void {}


    open(url) {
        
      this.router.navigate(['web'], { queryParams: { link: url } });
    }

    voteGurad() {
        this.router.navigate(['main', 'voting-guides']);
    }

    goToVoting() {
        this.router.navigate(['main', 'votes']);
    }

    gotozipcode() {
        this.router.navigate(['main', 'zip-code']);
    }

 

}
