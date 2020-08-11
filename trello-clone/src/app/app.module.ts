import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule  } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
