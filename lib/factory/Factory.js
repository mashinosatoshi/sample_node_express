"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Factory = function () {
    function Factory(type) {
        _classCallCheck(this, Factory);

        var employee;

        if (type === "fulltime") {
            employee = new fullTime();
        } else if (type === "parttime") {
            employee = new partTime();
        } else if (type === "temporary") {
            employee = new temporary();
        } else if (type === "contractor") {
            employee = new contractor();
        }

        employee.type = type;

        return employee;
    }

    _createClass(Factory, [{
        key: "say",
        value: function say() {
            return this.type + ": rate " + this.hourly + "/hour";
        }
    }]);

    return Factory;
}();

var fullTime = function fullTime() {
    this.hourly = "$12";
};

var partTime = function partTime() {
    this.hourly = "$11";
};

var temporary = function temporary() {
    this.hourly = "$10";
};

var contractor = function contractor() {
    this.hourly = "$15";
};

exports.default = Factory;