class validator  {
    // all test types
    types = {};

    // error messages
    messages = [];

    // current validation setting
    config = {
        first_name  : "isNonEmpty",
        first_name  : "startWithUpperCase", 
        age         : "isNumber", 
        username    : "isAlphaNum",
        password    : "hasEightChar"
    };

    // data = { key : value }
    execute(data) {
        let msg;

        // resets all error messages at first
        this.messages = [];

        for (let i in data){
            if ( data[i] ){
                var type = this.config[i];

                if(!type){
                    continue; // no more necessary for validating
                }

                var checker = this.types[type];

                if(!checker){
                    throw {
                        name : "ValidationError",
                        message : "No handler to validate type " + type
                    };
                }

                var result_ok = checker.validate(data[i]);
                if (!result_ok){
                    msg = "Invalid value for *" + i + "*, " + checker.instructions;
                    console.log(msg);
                    this.messages.push(msg);
                }
            }
        }
        return this.hasErrors();
    }

    hasErrors() {
        return this.messages.length !== 0;
    }
};

class isNonEmpty {
    instructions = "the value cannot be empty"
    validate (value){
        return value !== "";
    }
};

class isNumber {
    instructions = "the value can only be a valid number, e.g. 1, 3.14 or 2010"
    validate(value){
        return !isNaN(value);
    }
};

class isAlphaNum {
    instructions = "the value can only contain characters and numbers, no special symbols"
    validate(value){
        return !/[^a-z0-9]/i.test(value);
    }
};

class hasEightChars {
    instructions = "the length of value should be 8."
    validate(value){
        return value.length === 8;
    }
};

class startWithUpperCase {
    instructions = "the value should start with the upper case."
    validate(value){
        return value.charAt(0) === value.charAt(0).toUpperCase();
    }
};

module.exports = validator;