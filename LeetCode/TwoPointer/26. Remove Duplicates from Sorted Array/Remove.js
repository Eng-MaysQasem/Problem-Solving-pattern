/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    var L = 0;
    for (var R = 1; R < nums.length; R++) {
        if (nums[R] != nums[L]) {
            L++;
            nums[L] = nums[R];
        }
    }
    
    // Return the number of unique elements
    return L + 1;
};
/*if need to return after remove

var removeDuplicates = function(nums) {
    var L = 0;
    for(var R = 1; R < nums.length; R++){
        if(nums[R] != nums[L]){
            L++;
            nums[L] = nums[R];
        }
    }
    for(var j = L + 1; j < nums.length; j++){
        nums[j] = "_"; // Replace remaining elements with "_"
    }
    return nums;
};*/