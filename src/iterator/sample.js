module.exports = class sample {
    constructor (name) {
        this.name = name;
        return this;
    }

    say () {
        return "Hello! I'm " + this.name;
    }
}