import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {EnterZipCodeComponent} from "./enter-zip-code.component";


const routes: Routes = [
    {path: "", component: EnterZipCodeComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EnnterZipCodeRoutes {
}

