import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding.component';
import { OnbordinngRoutingModule } from './onbording.routing.module';
import { SharedComponentsModule } from '~/app/shared/components/shared-components/shared-components.module';
import { OnbordingStepOneComponent } from './steps/onbording-step-one/onbording-step-one.component';
import { OnbordingStepTwoComponent } from './steps/onbording-step-two/onbording-step-two.component';
import { OnbordingStepThreeComponent } from "./steps/onbording-step-three/onbording-step-three.component";

import { registerElement } from "nativescript-angular";
registerElement("WebImage", () => require("nativescript-web-image-cache").WebImage);



@NgModule({
  imports: [
    CommonModule,
    OnbordinngRoutingModule,
    SharedComponentsModule
  ],
  declarations: [OnboardingComponent, OnbordingStepOneComponent, OnbordingStepTwoComponent, OnbordingStepThreeComponent]
})
export class OnboardingModule { }
