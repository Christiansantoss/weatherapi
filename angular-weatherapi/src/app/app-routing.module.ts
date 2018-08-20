import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent} from './burbank/burbank.component';
import { SeattleComponent} from './seattle/seattle.component';
import { SanjoseComponent} from './sanjose/sanjose.component';
import { DcComponent} from './dc/dc.component';
import { ChicagoComponent} from './chicago/chicago.component';
import { DallasComponent} from './dallas/dallas.component';
// import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'burbank',component: BurbankComponent },
  { path: 'seattle',component: SeattleComponent },
  { path: 'sanjose',component: SanjoseComponent },
  { path: 'dc',component: DcComponent },
  { path: 'dallas',component: DallasComponent },
  { path: 'chicago',component: ChicagoComponent },
  // use a colon and parameter name to include a parameter in the url
  // { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





