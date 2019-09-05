class Core {
    constructor() {
        if (typeof Core.instance === "object") {
            console.log("Instance is already created");
            return Core.instance;
        }
        
        this.number = String(Math.random());
        Core.instance = this;
    }

    get() {
        return this.number;
    }
    set() {
        this.number = String(Math.random());
    }
}

export default new Core();