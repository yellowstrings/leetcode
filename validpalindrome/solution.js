const isPalindrome = function(s) {
    const string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedString = string.split("").reverse().join("");

    if (string === reversedString) {
        return true;
    }

    return false;
};

// leetcode accepted