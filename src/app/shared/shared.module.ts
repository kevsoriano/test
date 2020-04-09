import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ColumnOneComponent, HeaderComponent, SideNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ColumnOneComponent]
})
export class SharedModule { }
