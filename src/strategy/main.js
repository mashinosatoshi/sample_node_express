import validator from "./Strategy";

export default function () {
    var data = { 
        first_name : "Super", 
        last_name  : "Man", 
        age        : "unknown",
        username   : "o_0",
        password   : "password"
    };

    validator.validate(data);
    if(validator.hasErrors()){
        console.log(validator.messages.join("\n"));
    }
}