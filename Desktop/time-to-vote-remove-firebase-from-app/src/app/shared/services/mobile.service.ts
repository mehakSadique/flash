import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

@Injectable({
    providedIn: 'root'
})

@Injectable()
export class MobileService {
    _preventRoute = false;
    _toggleMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    sideDrawer: RadSideDrawer;

    isMenuOpen = false;
    constructor() {
    }

    setToggle() {
        this.isMenuOpen = !this.isMenuOpen;
        this._toggleMenu.next(this.isMenuOpen);
    }

    setPreventPage(preventRoute: boolean) {
        this._preventRoute = preventRoute;
    }

    preventPage() {
        return this._preventRoute;
    }

    getToggleStatus() {
        return this._toggleMenu.asObservable();
    }

    setSideDrawer(sideDrawer: RadSideDrawer) {
        this.sideDrawer = sideDrawer;
    }

    openMenu() {
       const sideDrawer = <RadSideDrawer>app.getRootView();
       sideDrawer.showDrawer();
     //   this.sideDrawer.showDrawer();
    }


    setLocation() {
        const _location = {
            Longitude: 80, //longitude,
            Latitude: 80 //latitude
        };
    }
}
