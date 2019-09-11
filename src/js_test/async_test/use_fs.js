const exec = function () {
    const fs = require('fs');

    // 読み込みが完了したときの処理
    const listener = function (err, data) {
        console.log(data);
    }
    console.log(process.argv[1]);
    // 非同期で読み込む
    fs.readFile('C:\\git\\sample_node_express\\lib\\foo.txt',{ encoding: 'utf8' },listener
    );

    console.log("finished");
}

//export default exec;
export default exec;