import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '../service/board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  boards;

  constructor(private _router: Router, private _board: BoardService) { }

  ngOnInit() {
    this.boards = this._board.getBoards();
  }

  boardClicked(board){
    this._router.navigate(['boards', board.id]);
  }

}
