const majorityElement = function(nums) {
    let counts = {}

    for (i of nums) {
        counts[i] = (counts[i] || 0) + 1
            if (counts[i] > nums.length / 2 ) {
                return i;
            }
    }
};

// leetcode accepted