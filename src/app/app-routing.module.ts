import { NgModule } from '@angular/core';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ItemComponent } from './pages/item/item.component';
import { AboutComponent } from './pages/about/about.component';
import {APP_BASE_HREF} from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

const app_routes: Routes = [
    {path: 'home', component: PortafolioComponent},
    {path: 'item/:id', component: ItemComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
    imports: [
        // El useHash se usa para evitar problemas con rutas relativas al publicarlo en un servidor
        // Lo explica en la seccion 3 Clase 22
        RouterModule.forRoot(app_routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ],
    // Soluciona el error
    // Error: No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document
    // https://stackoverflow.com/questions/34535163/angular-2-router-no-base-href-set
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
    ]
})
export class AppRoutingModule {}
