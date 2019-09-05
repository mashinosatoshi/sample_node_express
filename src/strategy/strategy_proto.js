var validator = {

    // all test types
    types : {},

    // error messages
    messages : [],

    // current validation setting
    config : {},

    // data = { key : value }
    execute : function( data ){
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
    },

    hasErrors: function () {
        return this.messages.length !== 0;
    }
};

validator.types.isNonEmpty = {
    validate: function(value){
        return value !== "";
    },
    instructions: "the value cannot be empty"
};

validator.types.isNumber = {
    validate: function(value){
        return !isNaN(value);
    },
    instructions: "the value can only be a valid number, e.g. 1, 3.14 or 2010"
};

validator.types.isAlphaNum = {
    validate: function(value){
        return !/[^a-z0-9]/i.test(value);
    },
    instructions: "the value can only contain characters and numbers, no special symbols"
};

validator.types.hasEightChars = {
        validate: function(value){
        return value.length === 8;
        },
        instructions: "the length of value should be 8."
};

validator.types.startWithUpperCase = {
        validate: function(value){
        return value.charAt(0) === value.charAt(0).toUpperCase();
        },
        instructions: "the value should start with the upper case."
};

validator.config = { 
    first_name  : "isNonEmpty",
    first_name  : "startWithUpperCase", 
    age         : "isNumber", 
    username    : "isAlphaNum",
    password    : "hasEightChar"
};

module.exports = validator;