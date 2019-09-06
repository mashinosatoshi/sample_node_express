import exec1 from "./singleton/exec1";
import exec2 from "./singleton/exec2";
import exec3 from "./singleton/exec3";
/**
 * 魂は一つしか宿さない
 */
export default function () {
    exec1();
    exec2();
    exec3();
    exec1();
    exec2();
}