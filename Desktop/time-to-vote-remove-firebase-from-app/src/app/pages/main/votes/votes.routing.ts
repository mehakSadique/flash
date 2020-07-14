import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { VoteStepOneComponent } from "./steps/vote-step-one/vote-step-one.component";
import { VoteStepTwoComponent } from "./steps/vote-step-two/vote-step-two.component";
import { TimerComponent } from "./timer/timer.component";


const routes: Routes = [
    {path: "", component: VoteStepOneComponent},
    {path: "vote-step-one", component: VoteStepOneComponent},
    {path: "vote-step-two", component: VoteStepTwoComponent},
    {path: "timer", component: TimerComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class VotesRoutingModule {
}