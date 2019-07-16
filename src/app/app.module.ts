import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreateNewBoardComponent } from './create-new-board/create-new-board.component';
import { RetroboardComponent } from './retroboard/retroboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewBoardComponent,
    RetroboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
