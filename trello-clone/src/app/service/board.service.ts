import { Injectable } from '@angular/core';

@Injectable()
export class BoardService {

  boards = [
    {
      name: 'Board One',
      color: '#2666fe',
      id: '123',
      lists: [
        {
          title: 'list 1',
          cards: [
            { title: 'card 1' },
            { title: 'card 2' },
          ]
        },
        {
          title: 'list 2',
          cards: [
            { title: 'card 3' },
            { title: 'card 4' },
          ]
        },
      ]
    },
    {
      name: 'Board Two',
      color: '#076f30',
      id: '456',
      lists: [
        {
          title: 'list 3',
          cards: [
            { title: 'card 5' },
            { title: 'card 6' },
          ]
        },
        {
          title: 'list 4',
          cards: [
            { title: 'card 7' },
            { title: 'card 8' },
          ]
        },
      ]
    }
  ];

  constructor() { }

  getBoards(){
    return this.boards.map((b) => ({ name: b.name, color: b.color, id: b.id }));
  }

  getBoardDetails(id: string){
    return this.boards.filter((b) => b.id === id)[0];
  }
}
