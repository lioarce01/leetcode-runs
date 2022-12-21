var containsNearbyDuplicate = function(nums, k) {
  var map = new Map();
    for(var i = 0; i < nums.length; i++){
        if(map.get(nums[i]) !== undefined){
            if(i - map.get(nums[i]) <= k){
                return true;
            }
            else map.set(nums[i], i);
        }
        else map.set(nums[i], i);
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))