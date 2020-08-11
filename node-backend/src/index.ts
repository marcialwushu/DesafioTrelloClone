import * as EventEmitter from 'events'

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("test", () => {
    console.log('this happens again')
})

myEmitter.once("test", () => {
    console.log('this happens only once')
})


myEmitter.emit('test');

