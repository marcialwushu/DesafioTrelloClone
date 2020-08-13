import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

const listSchema = new Schema({
    title: String,
    cards: {
        type: [
            {
                title: String,
            },
        ],
    },
});

mongoose.model('List', listSchema);
