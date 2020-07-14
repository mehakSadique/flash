import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { OnboardingComponent } from "./onboarding.component";
import { OnbordingStepOneComponent } from './steps/onbording-step-one/onbording-step-one.component';
import { OnbordingStepTwoComponent } from './steps/onbording-step-two/onbording-step-two.component';
import { OnbordingStepThreeComponent } from "./steps/onbording-step-three/onbording-step-three.component";

const routes: Routes = [
    {path: "", component: OnboardingComponent},
    {path: "step-one", component: OnbordingStepOneComponent},
    {path: "step-two", component: OnbordingStepTwoComponent},
    {path: "step-three", component: OnbordingStepThreeComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class OnbordinngRoutingModule {
}
