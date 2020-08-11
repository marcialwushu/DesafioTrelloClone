import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
// import { MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
// import { DragDropModule  } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BoardListComponent } from './board-list/board-list.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MaterialDesignModule } from './material-design/material-design.module';

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
    MaterialDesignModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
