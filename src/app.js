import singleton from "./singleton/main";
import factory from "./factory/main";
import iterator from "./iterator/main";
import decorator from "./decorator/main";
import strategy from "./strategy/main";
<<<<<<< HEAD
import facade from "./facade/main";
import proxy from "./proxy/main";
import mediator from "./mediator/main";
import observer from "./observer/main";
=======
>>>>>>> 4befb97e488412609b399f748c1f512e51e93185

import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser())
app.get('/cookie', (req, res) => {
    console.log('get access.');
    console.log('--------body--------');
    console.log(req.body);
    console.log('--------cookies--------');
    console.log(req.cookies);
    console.log('--------headers--------');
    console.log(req.headers);
    console.log('--------headers.cookie--------');
    console.log(req.headers.cookie);
    res.send('Hello cookie!');
});

app.get('/singleton', (req, res) => {
    singleton();
    res.send('Hello singleton!');
});

app.get('/factory', (req, res) => {
    factory();
    res.send('exec factory!');
});

app.get('/iterator', (req, res) => {
    iterator();
    res.send('exec iterator!');
});

app.get('/decorator', (req, res) => {
    decorator();
    res.send('exec decorator!');
});

app.get('/strategy', (req, res) => {
    strategy();
    res.send('exec strategy!');
});

<<<<<<< HEAD
app.get('/facade', (req, res) => {
    facade();
    res.send('exec facade!');
});

app.get('/proxy', (req, res) => {
    proxy();
    res.send('exec proxy!');
});

app.get('/mediator', (req, res) => {
    mediator();
    res.send('exec mediator!');
});

app.get('/observer', (req, res) => {
    observer();
    res.send('exec observer!');
});

=======
>>>>>>> 4befb97e488412609b399f748c1f512e51e93185
app.listen(3000, () => console.log('Example app listening on port 3000!'));