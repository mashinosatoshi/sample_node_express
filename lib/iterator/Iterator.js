"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sample = require("./sample");

var _sample2 = _interopRequireDefault(_sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function Iterator() {
        _classCallCheck(this, Iterator);

        this.list = [];
        this.index = 0;
    }

    _createClass(Iterator, [{
        key: "add",
        value: function add(name) {
            var s = new _sample2.default(name);
            this.list.push(s);
        }
    }, {
        key: "next",
        value: function next() {
            if (!this.hasNext()) {
                return null;
            }
            var ret = this.list[this.index];
            this.index += 1;
            return ret;
        }
    }, {
        key: "hasNext",
        value: function hasNext() {
            if (this.list.length > this.index) {
                return true;
            }
            return false;
        }
    }, {
        key: "rewind",
        value: function rewind() {
            this.index = 0;
        }
    }, {
        key: "current",
        value: function current() {
            return this.index;
        }
    }, {
        key: "first",
        value: function first() {
            return this.list[0];
        }
    }, {
        key: "last",
        value: function last() {
            return this.list[this.list.length - 1];
        }
    }, {
        key: "each",
        value: function each() {
            for (var i = 0; i < this.list.length; i++) {
                console.log(this.list[i].say());
            }
        }
    }]);

    return Iterator;
}();