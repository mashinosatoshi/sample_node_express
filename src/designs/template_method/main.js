import CharDisplay   from "./CharDisplay"
import StringDisplay from "./StringDisplay"
/**
 * 型が先にあるべきか、それとも入れる中身に応じて型を整えるべきか
 * javascriptにおいては、Factory Methodパターンとの差異を実装仕分けづらい。
 */
export default function () { 
    var cDisplay = new CharDisplay("c");
    console.log(cDisplay.display());

    var sDisplay = new StringDisplay("string");
    console.log(sDisplay.display());
}