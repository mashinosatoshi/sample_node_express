class tetrangle {
    constructor() { }
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

module.exports = tetrangle;