/*340. Longest Substring with At Most K Distinct Characters
Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
*/
function distinct(str,k){
    var L=0;
    var R=0;
    var dict={};
    var length=0;
    var maxlength=0
    while(R<str.length){
        if(str[R] in dict){
            dict[str[R]]++;
            length++;
        }
        else{
            dict[str[R]]=1;
            length++;
        }
        
        while(Object.keys(dict).length>k){
            dict[str[L]]--;
            if(dict[str[L]]==0){
                delete dict[str[L]];
            }
            length--;
            L++;
        }
        if(Object.keys(dict).length==k){
            if(length>maxlength){
                maxlength=length;
            }
        }
        R++;
    }
    return maxlength;
}


console.log(distinct("eeeeeceba",2));