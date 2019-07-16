import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { RetroboardComponent } from './retroboard/retroboard.component';

const routes: Routes = [
  {path:'retroboard', component:RetroboardComponent}
];

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
