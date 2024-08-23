import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewExamPageRoutingModule } from './add-new-exam-routing.module';

import { AddNewExamPage } from './add-new-exam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewExamPageRoutingModule
  ],
  declarations: [AddNewExamPage]
})
export class AddNewExamPageModule {}
