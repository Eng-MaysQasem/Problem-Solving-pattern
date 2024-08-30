twoSum(numbers,target){
    var L=0;
    var R=numbers.length-1;
    while(L<R){
        var Sum=numbers[R]+numbers[L];
        if(Sum<target){
            L++;
        }
        else if(Sum>target){
            R--;
        }
        else{
            return[R,L]
        }
    }
    //if not found
    return[-1,1];

}