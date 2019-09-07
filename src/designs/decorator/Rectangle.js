import tetrangle from "./tetrangle";

class Rectangle extends tetrangle {
    constructor(height, width) {
        super(height, width);
    }
    area() { 
        return this.height * this.width;
    }

    add_height(h) { 
        this.height += h;
    }

    add_width(w) { 
        this.width += w;
    }
}

module.exports = Rectangle;