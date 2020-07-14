import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemographicComponent } from './demographic.component';
import { DemographicRoutes } from './demographic.routing';
import { SharedComponentsModule } from '~/app/shared/components/shared-components/shared-components.module';
import { ActionBarModule } from '~/app/shared/components/shared-components/action-bar/action-bar.module';


@NgModule({
  imports: [
    CommonModule,
    DemographicRoutes,
    SharedComponentsModule,
    ActionBarModule
  ],
  declarations: [DemographicComponent]
})
export class DemographicModule { }
