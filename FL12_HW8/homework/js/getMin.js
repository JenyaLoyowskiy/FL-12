function getMin(){
    let minValue = arguments[0];
    for( let i = 0 ; i < arguments.length; i++ ){
        if(minValue > arguments[i]){
            minValue = arguments[i];
        }
    }
    return minValue;
}
getMin(3, 0, -3); //=> -3