module.exports = class mediator { 
    static answering(cond) { 
        if (cond.a === "a" &&
            cond.b === "b" &&
            cond.c === "c" &&
            cond.d === "d") { 
            cond.answer = true;
        }
    }
}