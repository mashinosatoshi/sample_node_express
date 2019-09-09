module.exports = class AbstractDisplay { 
    display() { 
        var a = [];
        a.push(this.open());
        for (var i = 0; i < 5; i++) {
            a.push(this.print(this.str));
        }
        a.push(this.close());
    
        return a.join("");
    }
}