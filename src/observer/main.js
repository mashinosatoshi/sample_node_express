import observer from "./observer";
import observed from "./observed";
/**
 * 貴様には任せてはおけん、私が直接鉄槌をくれてやろう
 */
export default function () { 
    const conds = [
        new observed("a", "b", "c", "d"),
        new observed("1", "b", "c", "d"),
        new observed("a", "2", "c", "d"),
        new observed("a", "b", "3", "d"),
        new observed("a", "b", "c", "4")
    ];
    for (var i = 0; i < conds.length; i++) {
        observer.answering(conds[i])
        if (conds[i].answer) {
            console.log("true!!!");
        } else { 
            console.log("false...");
        }
    }
}