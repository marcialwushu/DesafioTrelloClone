import * as mongoose from 'mongoose';

const databaseUrl = 'mongod://localhost/tello';

mongoose.connect(databaseUrl, {
    useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(`Erro: ${err}`));

// mongoose.connection.on('connected', () => {
//     console.log('Mongoose connected' + databaseUrl);
// })

// mongoose.connection.on('error', (err) => {
//     console.error('Mongoose connection error', err);
//     process.exit(1);
// });

// mongoose.connection.on('disconnected', () => {
//     console.error('Connection lost');
//     process.exit(1);
// });


