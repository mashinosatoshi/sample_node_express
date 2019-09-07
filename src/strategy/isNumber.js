/**
 * ES6に準拠したクラスとして定義した場合のstrategyサブクラス
 */
class isNumber { 
    static validate(value) { 
        return !isNaN(value);
    }
}

isNumber.instructions = "the value can only be a valid number, e.g. 1, 3.14 or 2010";

export default isNumber;
