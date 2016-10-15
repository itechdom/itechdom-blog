function recursive(number){
    number++;
    console.log(number);
    if(number === 10){
        return;
    }
    recursive(number);
}
recursive(0);
