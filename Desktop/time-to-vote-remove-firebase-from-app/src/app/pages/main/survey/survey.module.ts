import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { SurveyRoutingModule } from './survey.routing';
import {DisclaimerComponent } from "./disclaimer/disclaimer.component";

import { ActionBarModule } from '~/app/shared/components/shared-components/action-bar/action-bar.module';
import { ActionBarComponent } from '~/app/shared/components/shared-components/action-bar/action-bar.component';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { NgRippleModule } from 'nativescript-ng-ripple';
import { SharedComponentsModule } from '~/app/shared/components/shared-components/shared-components.module';
import { SurveyStepOneComponent } from './steps/person/survey-step-one/survey-step-one.component';
import { SurveyStepTwoComponent } from './steps/person/survey-step-two/survey-step-two.component';
import { SurveyStepThreeComponent } from './steps/person/survey-step-three/survey-step-three.component';
import { SurveySelectComponent } from './survey-select/survey-select.component';
import { MailSurveyStepOneComponent } from './steps/mail/mail-survey-step-one/mail-survey-step-one.component';
import { MailSurveyStepThreeComponent } from './steps/mail/mail-survey-step-three/mail-survey-step-three.component';
import { MailSurveyStepTwoComponent } from './steps/mail/mail-survey-step-two/mail-survey-step-two.component';
import { SubmittedComponent } from "./submitted/submitted.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SurveyRoutingModule,
        ActionBarModule,
        SharedComponentsModule,
        NativeScriptUISideDrawerModule,
        NgRippleModule
    ],
    declarations: [
        DisclaimerComponent,
        SurveyStepOneComponent,
        SurveyStepTwoComponent,
        SurveyStepThreeComponent,
        SurveySelectComponent,
        MailSurveyStepThreeComponent,
        MailSurveyStepOneComponent,
        MailSurveyStepTwoComponent,
        SubmittedComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SurveyModule {
}
