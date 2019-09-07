module.exports = class mediator { 
    static judge(cond) { 
        if (cond.a === "a" &&
            cond.b === "b" &&
            cond.c === "c" &&
            cond.d === "d") { 
            return true;
        }

        return false;
    }
}