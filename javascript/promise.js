const promise = new Promise((resolve)=>{
    resolve("Done");
});
promise.then(res=>{console.log(res)});