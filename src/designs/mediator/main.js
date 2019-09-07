import mediator from "./mediator";
import conditions from "./conditions";
/**
 * 私はただ判定を下すだけだ、後のことは好きにするがいい
 */
export default function () { 
    const conds = [
        new conditions("a", "b", "c", "d"),
        new conditions("1", "b", "c", "d"),
        new conditions("a", "2", "c", "d"),
        new conditions("a", "b", "3", "d"),
        new conditions("a", "b", "c", "4")
    ];
    for (var i = 0; i < conds.length; i++) { 
        if (mediator.judge(conds[i])) {
            console.log("true!!!");
        } else { 
            console.log("false...");
        }
    }
}