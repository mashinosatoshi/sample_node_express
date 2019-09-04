import tetrangle from "./tetrangle";

class Rectangle extends tetrangle {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
}

module.exports = Rectangle;