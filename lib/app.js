"use strict";

var _exec = require("./exec1");

var _exec2 = _interopRequireDefault(_exec);

var _exec3 = require("./exec2");

var _exec4 = _interopRequireDefault(_exec3);

var _exec5 = require("./exec3");

var _exec6 = _interopRequireDefault(_exec5);

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

app.get('/singleton', function (req, res) {
    (0, _exec2.default)();
    (0, _exec4.default)();
    res.send('Hello singleton!');
});
app.get('/singleton/change', function (req, res) {
    (0, _exec6.default)();
    res.send('set singleton!');
});

app.listen(3000, function () {
    return console.log('Example app listening on port 3000!');
});