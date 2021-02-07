import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { HomeComponent } from '@components/home/home.component';
import { ServicesComponent } from '@components/services/services.component';
import { AboutComponent } from '@components/about/about.component';


const routes: Routes = [
  { 
    path: '',  
    component:DashboardComponent,
    children: [
      // {
      //   path: "home",
      //   component:HomeComponent
      // },
      {
        path:"services",component:ServicesComponent
      },
      {path:"about",component:AboutComponent}
    ],
  },
]

@NgModule({
  declarations: [
    DashboardComponent,
    // HomeComponent,
    ServicesComponent,
    AboutComponent,
  ],
  imports: [
    // CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    DashboardComponent,
    // HomeComponent,
    ServicesComponent,
    AboutComponent,
  ]
})
export class DashboardModule { }
