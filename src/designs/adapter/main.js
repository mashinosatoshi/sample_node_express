import func_b from "./func_b"
import adapter from "./adapter"
/**
 * 単四電池をそのまま単三電池のソケットに嵌めることはできない
 * しかし、単四電池を単三電池に変換するアダプタを使えばどうということはない
 */
export default function () { 
    for (var i = 0; i < func_list.length; i++){ 
        console.log(func_list[i]())
    }
}

const func_list = [
    func_b,
    adapter
]