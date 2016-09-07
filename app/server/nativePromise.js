class Promise {
    constructor(){
        this.resolved;
        this.rejected;
    }
    resolve(args){
        this.resolved(args);
    }
    reject(args){
        this.rejected(args);
    }
    then(fun){
        this.resolved = fun;
    }
    error(fun){
        this.rejected = fun;
    }
}
function testPromise(){
    let pr = new Promise();
    setTimeout(()=>{
        pr.resolve('message');
    },1000);
    return pr;
}
testPromise().then((res)=>{
    console.log(res);
})

