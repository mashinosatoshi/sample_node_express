const exec = function () {

    const a = [
        new Promise(function (resolve, reject) { console.log("1") }),
        new Promise(function (resolve, reject) { console.log("2") }),
        new Promise(function (resolve, reject) { console.log("3") })
    ]
    console.log("define");
    // 非同期で読み込む
    Promise.all(a);

    console.log("finished");
}
const async_exec = function () {
    console.log("define");
}

// 読み込みが完了したときの処理
const listener = function (data) {
    console.log(data);
}
//export default exec;
export default exec;