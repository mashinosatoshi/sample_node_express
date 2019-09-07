import isNonEmpty from "./isNonEmpty";
import isNumber from "./isNumber";
/**
 * 何をするかはこちらで用意しておいたので、好きなものを選ぶといい
 */
//import validator from "./strategy_proto";
import validator from "./strategy_class";

export default function () {
    var data = { 
        first_name : "Super", 
        last_name  : "Man", 
        age        : "unknown",
        username   : "o_0",
        password   : "password"
    };

    console.log(validator.execute(data.first_name, isNonEmpty));
    console.log(validator.execute(data.first_name, isNumber));
}