import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassedExamsPage } from './passed-exams.page';

const routes: Routes = [
  {
    path: '',
    component: PassedExamsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassedExamsPageRoutingModule {}
