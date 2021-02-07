import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { HomeComponent } from '@components/home/home.component';
import { DashboardModule } from '@modules/dashboard/dashboard.module';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
    // loadChildren: () => import('@modules/menu/menu.module').then(m => m.MenuModules)
  },
  // {
  //   path:'dashboard',
  //   // component:DashboardComponent
  //   loadChildren: () => import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  // }
];

@NgModule({
  declarations:[HomeComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HomeComponent]
})
export class AppRoutingModule { }
