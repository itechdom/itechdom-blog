class Promise {
    constructor(){
    }
    resolve(args){
        this.then(args);
    }
    reject(args){
        this.error(args);
    }
    then(args){
        if(typeof args === 'function'){
            this.then = args;
            let p = args();
            return p;
        }
        else{
            return args;
        }
    }
    error(fun){
        this.error = fun;
    }
}
function testPromise(){
    let pr = new Promise();
    setTimeout(()=>{
        pr.resolve('message');
    },1000);
    return pr;
}
let a = testPromise().then((res)=>{
    console.log(res);
    let pr2 = new Promise();
    setTimeout(()=>{
        pr2.resolve('message2');
    },1000);
    return pr2;
})
a.then((t)=>{
    console.log(t);
})
