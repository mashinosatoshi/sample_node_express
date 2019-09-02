'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var fulltime = new _Factory2.default('fulltime');
    var parttime = new _Factory2.default('parttime');
    var temporary = new _Factory2.default('temporary');
    var contractor = new _Factory2.default('contractor');
    console.log(fulltime.say());
    console.log(parttime.say());
    console.log(temporary.say());
    console.log(contractor.say());
};

var _Factory = require('./Factory');

var _Factory2 = _interopRequireDefault(_Factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }