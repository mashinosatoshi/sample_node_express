import design_pattern from "./designs/design_pattern";
import prototype_test from "./js_test/base/prototype_test";
import async_use_fs from "./js_test/async_test/use_fs";
import async_make_org_callback from "./js_test/async_test/make_org_callback";
import dynamic_async from "./js_test/async_test/dynamic_async";

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

app.get('/async_use_fs', (req, res) => {
    async_use_fs();
    res.send("async use_fs");
});

app.get('/async_make_org_callback', (req, res) => {
    async_make_org_callback();
    res.send("async make_org_callback");
});

app.get('/dynamic_async', (req, res) => {
    dynamic_async();
    res.send("async dynamic_async");
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));