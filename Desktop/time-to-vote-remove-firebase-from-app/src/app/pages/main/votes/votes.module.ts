import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { VotesRoutingModule } from './votes.routing';

import { ActionBarModule } from '~/app/shared/components/shared-components/action-bar/action-bar.module';
import { ActionBarComponent } from '~/app/shared/components/shared-components/action-bar/action-bar.component';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { SharedComponentsModule } from '~/app/shared/components/shared-components/shared-components.module';
import { VoteStepOneComponent } from "./steps/vote-step-one/vote-step-one.component";
import { VoteStepTwoComponent } from "./steps/vote-step-two/vote-step-two.component";
import { TimerComponent } from './timer/timer.component';


@NgModule({
    imports: [
        NativeScriptCommonModule,
        VotesRoutingModule,
        ActionBarModule,
        SharedComponentsModule,
        NativeScriptUISideDrawerModule,
        NgRippleModule
    ],
    declarations: [
        VoteStepOneComponent,
        VoteStepTwoComponent,
        TimerComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class VotesModuleModule {
}
