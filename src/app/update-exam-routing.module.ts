import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateExamPage } from './update-exam.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateExamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateItemPageRoutingModule {}
