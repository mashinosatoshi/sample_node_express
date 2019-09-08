import design_pattern from "./design_pattern";
import prototype_test from "./js_test/prototype_test";
import async_await from "./js_test/async_await";


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

app.get('/design_pattern', (req, res) => {
    design_pattern(req, res);
});

app.get('/prototype_test', (req, res) => {
    res.send(prototype_test["test1"]["test2"]["test3"]["test4"]["test5"]());
});

app.get('/async_await', (req, res) => {
    async_await.exec()
    res.send("async await");
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));