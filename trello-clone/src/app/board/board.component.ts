import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BoardService } from '../service/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  id: string;
  board;



  // tslint:disable-next-line: variable-name
  constructor(private _activatedRoute: ActivatedRoute, private _board: BoardService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.board = this._board.getBoardDetails(this.id);
    });
  }


}
