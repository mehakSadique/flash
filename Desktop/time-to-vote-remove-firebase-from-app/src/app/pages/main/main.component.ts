import { AfterViewInit, Component, OnInit, ViewContainerRef } from '@angular/core';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ModalDialogService, RouterExtensions } from 'nativescript-angular';
import { Page } from 'tns-core-modules/ui/page';
import { CreateMenuItems } from '~/app/shared/helpers/create-menu-items';
import { MobileService } from '~/app/shared/services/mobile.service';
import { ApiService } from '~/app/shared/services/api.service';
import { filter } from 'rxjs/internal/operators';



@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
    showLoader = true;
    isInternetOn = false;
    onInternetModalClose = true;
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;
    menuItems;
    menuShowOneItemInRow;

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions,
        private page: Page,
        private mobileService: MobileService,
        private activatedRoute: ActivatedRoute,
        private apiService: ApiService,
        private modal: ModalDialogService,
        private vcRef: ViewContainerRef,
    ) {
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this._activatedUrl = '/home';
        this._sideDrawerTransition = new SlideInOnTopTransition();
        
    }

   
    createMenu() {
        this.page.actionBarHidden = true;
        const menu = new CreateMenuItems();
        const menuItems = menu.getShowingItems();
        this.menuItems = this.chunkArray(menuItems, 1);
        this.menuShowOneItemInRow = true;
    }

   

    get sideDrawerTransition(): DrawerTransitionBase {
        // const sideDrawer = <RadSideDrawer>app.getRootView();
        // sideDrawer.showDrawer();
        return this._sideDrawerTransition;
    }

    setDrawer(args) {
        const sideDrawer: RadSideDrawer = <RadSideDrawer>args.object as RadSideDrawer;
        this.mobileService.setSideDrawer(sideDrawer);
        this.createMenu();
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute): void {
        this.mobileService.sideDrawer.closeDrawer();
        this.routerExtensions.navigate(navItemRoute.url, {
            transition: {
                name: 'slide'
            },
           relativeTo: this.activatedRoute.parent
        });
    }

    private chunkArray(myArray, chunk_size) {
        let index = 0;
        const arrayLength = myArray.length;
        const tempArray = [];

        for (index = 0; index < arrayLength; index += chunk_size) {
            const myChunk = myArray.slice(index, index + chunk_size);
            // Do something if you want with the group
            tempArray.push(myChunk);
        }

        return tempArray;
    }

    public parseIcon(val) {
         return String.fromCharCode(val.icon);
    }

    ngAfterViewInit(): void {

    }

}
