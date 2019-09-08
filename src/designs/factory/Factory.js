import fees from "./fees"

class Factory {
    constructor(type) {
        this.hourly = fees[type]();
        this.type = type;
        return this;
    }

    say () {
        return this.type + ": rate " + this.hourly + "/hour";
    }
}

export default Factory;