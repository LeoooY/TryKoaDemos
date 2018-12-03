function wait(timeout){
    setTimeout(() => {
        console.log(`等待了 ${timeout/1000} 秒` );
        return "结束了 wait()";
    }, timeout);
}

async function asyncPrint(time) {
    let rs=await wait(time);
    console.log(rs);
    console.log('结束 asyncPrint()')
    
}

asyncPrint(3000);