import func1 from "./func1"
import func2 from "./func2"
import func3 from "./func3"
class facade { 
    static programing() { 
        console.log(func1.activity());
        console.log(func2.activity());
        console.log(func3.activity());
        return;
    }
}

module.exports = facade;