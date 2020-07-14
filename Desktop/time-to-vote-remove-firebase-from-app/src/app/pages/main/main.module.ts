import { NgModule, ViewContainerRef } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { MainComponent } from '~/app/pages/main/main.component';
import {
    NativeScriptRouterModule,
} from 'nativescript-angular';

import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { SharedComponentsModule } from '~/app/shared/components/shared-components/shared-components.module';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";


@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptHttpClientModule,
        SharedComponentsModule,
        NativeScriptRouterModule,
        MainRoutingModule,
        NativeScriptUISideDrawerModule
    ],
})
export class MainModule {
    constructor(
    ) {
    }


}
