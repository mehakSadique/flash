import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import {DisclaimerComponent } from "./disclaimer/disclaimer.component";
import { SurveyStepOneComponent } from "./steps/person/survey-step-one/survey-step-one.component";
import { SurveyStepTwoComponent } from "./steps/person/survey-step-two/survey-step-two.component";
import { SurveyStepThreeComponent } from "./steps/person/survey-step-three/survey-step-three.component";
import { SurveySelectComponent } from './survey-select/survey-select.component';

import { MailSurveyStepOneComponent } from './steps/mail/mail-survey-step-one/mail-survey-step-one.component';
import { MailSurveyStepThreeComponent } from './steps/mail/mail-survey-step-three/mail-survey-step-three.component';
import { MailSurveyStepTwoComponent } from './steps/mail/mail-survey-step-two/mail-survey-step-two.component';
import { SubmittedComponent } from "./submitted/submitted.component";


const routes: Routes = [
    {path: "", component: DisclaimerComponent},
    {path: "step-one", component: SurveyStepOneComponent},
    {path: "step-two", component: SurveyStepTwoComponent},
    {path: "step-three", component: SurveyStepThreeComponent},
    {path: "select", component: SurveySelectComponent},
    {path: "mail-step-one", component: MailSurveyStepOneComponent },
    {path: "mail-step-two", component: MailSurveyStepTwoComponent  },
    {path: "mail-step-three", component: MailSurveyStepThreeComponent },
    {path: "submited", component: SubmittedComponent },
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SurveyRoutingModule {
}