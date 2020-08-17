import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
// import { MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
// import { DragDropModule  } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BoardListComponent } from './board-list/board-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoardService } from './service/board.service';

import { MaterialDesignModule } from './material-design/material-design.module';
import { DragulaModule } from 'ng2-dragula';
import { RestService } from './service/rest.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardListComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialDesignModule,
    DragulaModule

  ],
  providers: [BoardService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
