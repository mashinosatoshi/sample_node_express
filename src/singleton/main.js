import exec1 from "./exec1";
import exec2 from "./exec2";
import exec3 from "./exec3";
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