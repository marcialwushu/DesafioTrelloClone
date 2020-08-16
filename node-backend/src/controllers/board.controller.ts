import { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import board from '../models/board.model';

//const board = mongoose.model('Boards');

export function getBoards(req: Request, res: Response) {
    let boards = board.find();

    return res.status(200).json(boards);
}

export function getBoardById(req: Request, res: Response) {
    
    let boards = board.findById(req.params.id);

    return res.status(200).json(boards);
}

export function createBoard(req: Request, res: Response) {
    
    let boards = board.create(req.body);

    return res.status(201).json(boards);
}



