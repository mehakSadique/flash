import { NgModule } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { ScrollToDirective } from '~/app/shared/components/directives/scroll-to.directive';
import { DeleteModalComponent } from '~/app/shared/components/modals/delete-modal/delete-modal.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NavBarComponent } from '~/app/shared/components/shared-components/navbar/navbar.component';
import {NgPipesModule} from 'ngx-pipes';
import { SelectComponentComponent } from './select-component/select-component.component';
import { SelectModalComponent } from '../modals/select-modal/select-modal.component';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';


@NgModule({
    declarations: [
        ScrollToDirective,
        DeleteModalComponent,
        NavBarComponent,
        SelectComponentComponent,
        SelectModalComponent
    ],
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        NgRippleModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NgPipesModule,
        TNSCheckBoxModule
    ],
    exports: [
        NativeScriptFormsModule,
        NgRippleModule,
        NativeScriptUISideDrawerModule,
        DeleteModalComponent,
        ScrollToDirective,
        NavBarComponent,
        SelectComponentComponent,
        SelectModalComponent
    ],
    entryComponents: [
        DeleteModalComponent,
        SelectModalComponent
    ]
})
export class SharedComponentsModule {
}
