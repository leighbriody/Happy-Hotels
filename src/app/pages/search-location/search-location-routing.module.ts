import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchLocationPage } from './search-location.page';

const routes: Routes = [
  {
    path: '',
    component: SearchLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchLocationPageRoutingModule {}
