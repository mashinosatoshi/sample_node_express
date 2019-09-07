/**
 * ES6に準拠したクラスとして定義
 */
class validator {
    static execute(data, checker) {
        var result_ok = checker.validate(data);
        if (!result_ok){
            return "Invalid value for *" + data + "*, " + checker.instructions;
        }
        return "OK";
    }
};
module.exports = validator;