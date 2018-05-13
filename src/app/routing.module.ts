import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IvyApiResolver } from './components/ivy-full-status/ivy-api.resolver';

import { AppComponent } from './app.component';
import { IvyFullStatusComponent } from './components/ivy-full-status/ivy-full-status.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'status',
  },
  {
    path: 'status',
    component: IvyFullStatusComponent,
    resolve: {
      response: IvyApiResolver,
    },
  },
  {
    path: '**',
    redirectTo: 'status',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IvyApiResolver],
})
export class RoutingModule {}
