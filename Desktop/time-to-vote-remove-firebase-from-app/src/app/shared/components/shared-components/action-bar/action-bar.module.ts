import { NgModule } from '@angular/core';
import { ActionBarComponent } from "~/app/shared/components/shared-components/action-bar/action-bar.component";

@NgModule({
  declarations: [
      ActionBarComponent
  ],
    exports: [
        ActionBarComponent
    ],
  imports: [  ]
})
export class ActionBarModule { }
