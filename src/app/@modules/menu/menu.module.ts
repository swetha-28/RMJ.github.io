import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import {MenuModule} from 'primeng/menu';
 //required when using MegaMenu
import { MenuComponent } from '@components/menu/menu.component';
// import {PanelMenuModule} from 'primeng/panelmenu';
import {MenubarModule} from 'primeng/menubar';

const routes: Routes = [
  { 
    path: '',  
    component:MenuComponent
  },
]


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    // MenuModule,
    RouterModule.forChild(routes),
    // PanelMenuModule
    MenubarModule
  ],
  exports:[
    MenuComponent,
    MenubarModule
    // MenuModule,
    // PanelMenuModule
  ]
})
export class MenuModules { }
