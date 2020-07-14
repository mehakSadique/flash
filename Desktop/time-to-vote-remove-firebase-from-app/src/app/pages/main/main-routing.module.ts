import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { MainComponent } from '~/app/pages/main/main.component';
// import { DataLoadedService } from '~/app/shared/guards/dataLoaded.service';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'survey',
                // canActivate: [DataLoadedService],
                loadChildren: () => import('~/app/pages/main/survey/survey.module').then(m => m.SurveyModule),
            },
            {
                path: 'zip-code',
                // canActivate: [DataLoadedService],
                loadChildren: () => import('~/app/pages/main/enter-zip-code/enter-zip-code.module').then(m => m.EnterZipCodeModule),
            },
            {
                path: '',
                // canActivate: [DataLoadedService],
                loadChildren: () => import('~/app/pages/main/onboarding/onboarding.module').then(m => m.OnboardingModule),
            },
            {
                path: 'votes',
                // canActivate: [DataLoadedService],
                loadChildren: () => import('~/app/pages/main/votes/votes.module').then(m => m.VotesModuleModule),
            },
            {
                path: 'voting-guides',
                // canActivate: [DataLoadedService],
                loadChildren: () => import('~/app/pages/main/voting-guides/voting-guides.module').then(m => m.VotingGuidesModule),
            },
            {
                path: 'home',
                // canActivate: [DataLoadedService],
                loadChildren: () => import('~/app/pages/main/home/home.module').then(m => m.HomeModule),
            },
            {
                path: 'demographic',
                // canActivate: [DataLoadedService],
                loadChildren: () => import('~/app/pages/main/demographic/demographic.module').then(m => m.DemographicModule),
            },
           
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    //  exports: [NativeScriptRouterModule]
})
export class MainRoutingModule {
}
