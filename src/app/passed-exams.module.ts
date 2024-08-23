import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassedExamsPageRoutingModule } from './passed-exams-routing.module';

import { PassedExamsPage } from './passed-exams.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassedExamsPageRoutingModule
  ],
  declarations: [PassedExamsPage]
})
export class PassedExamsPageModule {}
