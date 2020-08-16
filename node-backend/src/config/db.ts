import * as mongoose from 'mongoose';
import '../models/board.model';
import '../models/list.model';

const databaseUrl = 'mongodb+srv://<username>:<password>@cluster0.ruaed.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(databaseUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true 
}).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(`Erro: ${err}`));

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected' + databaseUrl);
})

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error', err);
    process.exit(1);
});

mongoose.connection.on('disconnected', () => {
    console.error('Connection lost');
    process.exit(1);
});





