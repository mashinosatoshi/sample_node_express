import sample from "./sample";

module.exports = class Iterator {
    constructor () {
        this.list = [];
        this.index = 0;
    }

    add(name) {
        const s = new sample(name);
        this.list.push(s)
    }

    next() { 
        if (!this.hasNext()) { 
            return null;
        }
        const ret = this.list[this.index];
        this.index += 1;
        return ret;
    }

    hasNext() {
        if (this.list.length > this.index) {
            return true;
        }
        return false;
    }

    rewind() { 
        this.index = 0;
    }

    current() { 
        return this.index;
    }

    first() { 
        return this.list[0];
    }

    last() { 
        return this.list[this.list.length - 1];
    }

    each() { 
        for (let i = 0; i < this.list.length; i++) { 
            console.log(this.list[i].say());
        }
    }
}