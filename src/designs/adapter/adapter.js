import func_a from "./func_a"
/**
 * func Aはクラスとして定義されているがBは直接関数を実行するタイプの機能となっている。
 * 例えば両方をFactoryパターンなどに当てはめたい場合はその際が問題になるが、両者を埋める中間メソッドを提供してあげれば良い
 */
export default function () { 
    return func_a.say("func A!!!");
}