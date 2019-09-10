class AbstractDisplay {
    display() {
        var a = [];
        a.push(this.open());
        for (var i = 0; i < 5; i++) {
            a.push(this.print(this.str));
        }
        a.push(this.close());
    
        return a.join("");
    }
}
/**
 * 以下が必要なひな形となる。
 * これらを下位クラスで宣言していなくてもこの上位クラスだけで実行することも可能である。
 */
AbstractDisplay.open = function () { };
AbstractDisplay.print = function () { };
AbstractDisplay.close = function () { };
module.exports = AbstractDisplay;
