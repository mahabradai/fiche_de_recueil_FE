import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent as FicheHome } from './fiche/home/home.component';

const routes: Routes = [
  { path: 'fiche', component: FicheHome },
  { path: '', redirectTo: '/fiche', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
