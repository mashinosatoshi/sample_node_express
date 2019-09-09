import AbstractDisplay from "./AbstractDisplay"
module.exports = class StringDisplay extends AbstractDisplay{ 
    constructor(str) { 
        super();
        this.str = str;
        this.width = str.length;
    }

    print() {
        return "|" + this.str + "|\n";
    };

    open() {
        var a = [];
        a.push("+");
        for (var i = 0; i < this.width; i++) {
            a.push("-");
        }
        a.push("+\n");
        return a.join("");
    };
    close() {
        var a = [];
        a.push("+");
        for (var i = 0; i < this.width; i++) {
            a.push("-");
        }
        a.push("+\n");
        return a.join("");
    };
}