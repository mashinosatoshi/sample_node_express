import AbstractDisplay from "./AbstractDisplay"
module.exports = class CharDisplay extends AbstractDisplay{ 
    constructor(str) { 
        super();
        this.str = str;
    }
    print() {
        return this.str;
    }
    open() {
        return "<<";
    }
    close() {
        return ">>";
    }
}