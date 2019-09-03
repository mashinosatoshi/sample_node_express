"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var i = new _Iterator2.default('fulltime');

    i.add("man");
    i.add("satoshi");
    i.add("soichi");
    i.add("mika");

    console.log(i.current());
    console.log(i.next().say());
    console.log(i.hasNext());
    i.rewind();
    console.log(i.next().say());
    console.log(i.next().say());
    console.log(i.next().say());
    console.log(i.next().say());
    console.log(i.current());
    console.log(i.hasNext());

    console.log(i.first().say());
    console.log(i.last().say());

    i.each();
};

var _Iterator = require("./Iterator");

var _Iterator2 = _interopRequireDefault(_Iterator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }