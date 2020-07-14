import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ActionBarModule } from '~/app/shared/components/shared-components/action-bar/action-bar.module';
import { ActionBarComponent } from '~/app/shared/components/shared-components/action-bar/action-bar.component';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { SharedComponentsModule } from '~/app/shared/components/shared-components/shared-components.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        ActionBarModule,
        SharedComponentsModule,
        NativeScriptUISideDrawerModule,
        NgRippleModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule {
}
