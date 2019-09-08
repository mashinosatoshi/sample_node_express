const exec = () => { 
    aaa(Math.random() * 1000);
    bbb(Math.random() * 1000);
}

const exec_async = () => { 
    ccc(Math.random() * 1000);
    ddd(Math.random() * 1000);
}

const aaa = (time) => { 
    wait(time);
    console.log("aaa. wait " + String(time) + "ms.");
}

const bbb = function (time) { 
    wait(time);
    console.log("bbb. wait " + String(time) + "ms.");
}

const ccc = async (time) => { 
    wait(time);
    console.log("ccc. wait " + String(time) + "ms.");
}

const ddd = async function (time) { 
    wait(time);
    console.log("ddd. wait " + String(time) + "ms.");
}

const wait = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
};

//export default exec;
export default exec_async;