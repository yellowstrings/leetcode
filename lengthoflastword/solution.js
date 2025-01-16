const lengthOfLastWord = function(s) {
    let length = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            length += 1;
        }
        if (s[i] === " " && length >= 1) {
            return length;
        }
    }
    return length;
};

// accepted by leetcode