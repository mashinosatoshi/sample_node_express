import tetrangle from "./tetrangle";
// クラス宣言
class Rectangle extends tetrangle {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
}

module.exports = Rectangle;