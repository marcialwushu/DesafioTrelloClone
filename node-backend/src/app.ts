import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import * as path from 'path';

const app = express();

if(app.get('env') === 'development') {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    });
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

export default app;



