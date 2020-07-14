import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingGuidesComponent } from './voting-guides.component';
import { VotingGuidesRoutes } from './voting-guides.routing';
import { SharedComponentsModule } from '~/app/shared/components/shared-components/shared-components.module';
import { ActionBarModule } from '~/app/shared/components/shared-components/action-bar/action-bar.module';


@NgModule({
  imports: [
    CommonModule,
    VotingGuidesRoutes,
    SharedComponentsModule,
    ActionBarModule
  ],
  declarations: [VotingGuidesComponent]
})
export class VotingGuidesModule { }
