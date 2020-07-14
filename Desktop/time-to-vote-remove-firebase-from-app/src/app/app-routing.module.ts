import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AppComponent } from './app.component';
import { WebComponent } from './pages/main/web/web.component';


const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {
        path: 'main',
        loadChildren: () => import('~/app/pages/main/main.module').then(m => m.MainModule)
    },
    { path: 'web', component: WebComponent }
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
    
})
export class AppRoutingModule { }
