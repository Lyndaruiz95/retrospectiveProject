import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { RetroboardComponent } from './retroboard/retroboard.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // Q: Is there a way to add app.component to be the default home page?
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path:'retroboard', 
    component: RetroboardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    MatButtonModule, 
    MatCheckboxModule,
    MatGridListModule
  ],
  exports: [
    RouterModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatGridListModule
  ]
})
export class AppRoutingModule { }
