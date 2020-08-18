import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '../service/board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  boards: any;

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router, private _board: BoardService) { }

  ngOnInit() {
    this.boards = this._board.getBoards();
    console.log(this.boards);
  }

  boardClicked(board: { id: any; }) {
    this._router.navigate(['boards', board.id]);
  }

}
