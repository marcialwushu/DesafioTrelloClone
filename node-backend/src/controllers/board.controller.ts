import { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import board from '../models/board.model';


export function getBoards(req: Request, res: Response) {
    
    board.find((err, data) => {
        if (err) {
            return res.send(err).status(500);
        }
        res.json(data);
    });
}

export function getBoardById(req: Request, res: Response) {
    
    if (!req.params.id) {
        res.sendStatus(400);
    }

    board.findById(req.params.id, (err, data) => {
        if (err) {
            return res.send(err).status(500);
        }
        if (!data) {
            return res.sendStatus(404);
        }

        res.json(data);
    });
}

export function createBoard(req: Request, res: Response) {
    
    if (!req.body || !req.body.name) {
        res.sendStatus(400);
    }

    board.create(req.body.name, (err, data) => {
        if (err) {
            return res.send(err).status(500);
        }
        res.sendStatus(204);
    });
}



