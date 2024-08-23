import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateItemPageRoutingModule } from './update-exam-routing.module';

import { UpdateExamPage } from './update-exam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateItemPageRoutingModule
  ],
  declarations: [UpdateExamPage]
})
export class UpdateExamPageModule {}
