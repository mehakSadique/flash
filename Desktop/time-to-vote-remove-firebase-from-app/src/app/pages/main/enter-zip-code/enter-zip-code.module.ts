import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterZipCodeComponent } from './enter-zip-code.component';
import { EnnterZipCodeRoutes } from './enter-zip-code.routing';
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    EnnterZipCodeRoutes
  ],
  declarations: [EnterZipCodeComponent]
})
export class EnterZipCodeModule { }
