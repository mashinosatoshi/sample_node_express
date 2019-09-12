const exec = function () {

    // 非同期で読み込む
    Promise.all([
        back('aaaaaaaa', listener),
        back('aaaaaaaa', listener),
        back('aaaaaaaa', listener)
    ]);

    console.log("finished");
}
const back = async function (value, callback) {
    for (var i = 0; i < 100; i++) { 
        console.log(String(i));
    }
    callback(value);
}

// 読み込みが完了したときの処理
const listener = function (data) {
    console.log(data);
}
//export default exec;
export default exec;