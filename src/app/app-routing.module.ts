import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'add-new-item',
    loadChildren: () => import('./add-new-item/add-new-item.module').then( m => m.AddNewItemPageModule)
  },
  {
    path: 'update-item',
    loadChildren: () => import('./update-item/update-item.module').then( m => m.UpdateItemPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
