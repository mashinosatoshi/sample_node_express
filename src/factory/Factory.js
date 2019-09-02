module.exports = class Factory {
    constructor (type) {
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

    say () {
        return this.type + ": rate " + this.hourly + "/hour";
    }
}

function fullTime () {
    return "$12";
};

function partTime () {
    return "$11";
};

function temporary () {
    return "$10";
};

function contractor () {
    return "$15";
};
