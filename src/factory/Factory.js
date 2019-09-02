class Factory {
    constructor (type) {
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

    say() {
        return this.type + ": rate " + this.hourly + "/hour";
    }
}

const fullTime = function () {
    this.hourly = "$12";
};

const partTime = function () {
    this.hourly = "$11";
};

const temporary = function () {
    this.hourly = "$10";
};

const contractor = function () {
    this.hourly = "$15";
};

export default Factory;
