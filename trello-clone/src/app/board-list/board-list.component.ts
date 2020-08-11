import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  boards = [
    { name: 'Board One', color: '#2666fe' },
    { name: 'Board Two', color: '#076f30' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
