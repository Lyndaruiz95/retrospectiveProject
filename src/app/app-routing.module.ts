import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    MatButtonModule, 
    MatCheckboxModule
  ],
  exports: [
    RouterModule,
    MatButtonModule, 
    MatCheckboxModule
  ]
})
export class AppRoutingModule { }
