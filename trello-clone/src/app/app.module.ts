import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule } from '@angular/material';
import { DragDropModule  } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BoardListComponent } from './board-list/board-list.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardListComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    DragDropModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
