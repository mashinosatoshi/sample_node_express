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

    validator.execute(data);
    if (validator.hasErrors()) {
        const msg = validator.messages.join("\n")
        console.log(msg);
    }
}