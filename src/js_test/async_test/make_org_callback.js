const exec = function () {

    // 読み込みが完了したときの処理
    const listener = function (data) {
        console.log(data);
    }
    console.log(process.argv[1]);
    // 非同期で読み込む
    back('aaaaaaaaaaaaaaaa',listener);

    console.log("finished");
}
const back = function (value, callback) {
    callback(value);
}

//export default exec;
export default exec;