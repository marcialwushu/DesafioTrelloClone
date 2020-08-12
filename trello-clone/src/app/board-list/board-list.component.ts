import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  boards = [
    { name: 'Board One', color: '#2666fe', id: '123' },
    { name: 'Board Two', color: '#076f30', id: '456' }
  ]

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  boardClicked(board){
    this._router.navigate(['boards', board.id]);
  }

}
