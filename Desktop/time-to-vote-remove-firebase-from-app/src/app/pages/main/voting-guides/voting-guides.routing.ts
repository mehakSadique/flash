import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {VotingGuidesComponent} from "./voting-guides.component";


const routes: Routes = [
    {path: "", component: VotingGuidesComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class VotingGuidesRoutes {
}