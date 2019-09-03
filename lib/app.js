"use strict";

var _exec = require("./singleton/exec1");

var _exec2 = _interopRequireDefault(_exec);

var _exec3 = require("./singleton/exec2");

var _exec4 = _interopRequireDefault(_exec3);

var _exec5 = require("./singleton/exec3");

var _exec6 = _interopRequireDefault(_exec5);

var _main = require("./factory/main");

var _main2 = _interopRequireDefault(_main);

<<<<<<< HEAD
var _main3 = require("./iterator/main");

var _main4 = _interopRequireDefault(_main3);

=======
>>>>>>> e0d247e3583100770f59d8137bb6ec0a9f744de4
var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cookieParser2.default)());
app.get('/cookie', function (req, res) {
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

app.get('/singleton/read', function (req, res) {
    (0, _exec2.default)();
    (0, _exec4.default)();
    res.send('Hello singleton!');
});
app.get('/singleton/change', function (req, res) {
    (0, _exec6.default)();
    res.send('set singleton!');
});

app.get('/factory', function (req, res) {
    (0, _main2.default)();
    res.send('exec factory!');
});

<<<<<<< HEAD
app.get('/iterator', function (req, res) {
    (0, _main4.default)();
    res.send('exec iterator!');
});

=======
>>>>>>> e0d247e3583100770f59d8137bb6ec0a9f744de4
app.listen(3000, function () {
    return console.log('Example app listening on port 3000!');
});