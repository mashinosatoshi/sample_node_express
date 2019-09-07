import used from "./used"

module.exports = class user { 
    static execute1() { 
        return "user exec 1";
    }
    static execute2() { 
        return "user exec 2";
    }
    static execute3() { 
        return used.execute3();
    }
}