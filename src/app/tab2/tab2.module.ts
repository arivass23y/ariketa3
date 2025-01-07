import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { OsagaiakModule } from "../shared/osagaiak/osagaiak.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    OsagaiakModule,
    Tab2PageRoutingModule,
],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
