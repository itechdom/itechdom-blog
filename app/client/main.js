let key, hashNumber, arr = [];

function computeHashNumber(key){
    let iterator = key[Symbol.iterator]();
    let code = 0;
    for(value of iterator){
        code += value.charCodeAt();
    }
    return code;
}
function compouteIndex(number){
    return number % arr.length;
}
function lookup(key){

}
function insert(key,value){
    let number = computeHashNumber(key);
    let index = computeIndex(number);
    arr[index] = {'${key}':value }
}
function delete(key){

}
