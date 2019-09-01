import exec1 from "./exec1";
import exec2 from "./exec2";
import exec3 from "./exec3";
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

app.get('/singleton/read', (req, res) => {
    exec1();
    exec2();
    res.send('Hello singleton!');
});
app.get('/singleton/change', (req, res) => {
    exec3();
    res.send('set singleton!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));