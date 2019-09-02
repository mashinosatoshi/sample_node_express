"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function Factory(type) {
        _classCallCheck(this, Factory);

        if (type === "fulltime") {
            this.hourly = fullTime();
        } else if (type === "parttime") {
            this.hourly = partTime();
        } else if (type === "temporary") {
            this.hourly = temporary();
        } else if (type === "contractor") {
            this.hourly = contractor();
        }
        this.type = type;
        return this;
    }

    _createClass(Factory, [{
        key: "say",
        value: function say() {
            return this.type + ": rate " + this.hourly + "/hour";
        }
    }]);

    return Factory;
}();

function fullTime() {
    return "$12";
};

function partTime() {
    return "$11";
};

function temporary() {
    return "$10";
};

function contractor() {
    return "$15";
};