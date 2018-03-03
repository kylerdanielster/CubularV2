import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent }       from './cards/cards.component';
import { CardDetailComponent }  from './card-detail/card-detail.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'cards', component: CardsComponent },
  { path: 'detail/:id', component: CardDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}