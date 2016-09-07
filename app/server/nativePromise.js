class Promise {
    constructor(){
        this.resolved = false;
        this.error = false;
    }
    resolve(){
        this.resovled = true;
    }
    reject(){
        this.rejected = true;
    }
    next(fun){
        if(this.resolved){
            fun();
        }
    }
    error(fun){
        if(this.rejected){
            fun();
        }
    }
}

let pr = new Promise();
pr.resolve();
pr.reject();
