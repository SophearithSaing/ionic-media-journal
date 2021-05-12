import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvShowsPage } from './tv-shows.page';

const routes: Routes = [
  {
    path: '',
    component: TvShowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvShowsPageRoutingModule {}
