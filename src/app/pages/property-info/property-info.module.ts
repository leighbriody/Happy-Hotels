import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyInfoPageRoutingModule } from './property-info-routing.module';

import { PropertyInfoPage } from './property-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyInfoPageRoutingModule
  ],
  declarations: [PropertyInfoPage]
})
export class PropertyInfoPageModule {}
