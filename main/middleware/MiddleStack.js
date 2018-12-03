const one= (ctx,next)=>{
    console.log('>>one');
    next();
    console.log('<<one');
}

const two = (ctx, next)=>{
    console.log('>>two');
    next();
    console.log('<<two');
}

const three = (ctx, next)=>{
    console.log('>>three');
    next();
    console.log('<<three')
}


// commonJS导出方法
module.exports={
    one,
    two,
    three
}

//Es6导出方法 原生Node暂无法完美支持
// export {one, two , three}
