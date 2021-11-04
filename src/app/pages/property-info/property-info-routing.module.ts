import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyInfoPage } from './property-info.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyInfoPageRoutingModule {}
