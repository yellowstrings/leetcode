var canPlaceFlowers = function (flowerbed, n) {
    for (let i = 0; i < flowerbed.length && n > 0; i++) {
    // for some reason wouldn't accept flowerbed[i + 1] === 0, but this works
      if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
        flowerbed[i] = 1;
        n--;
      }
    }
    
    return n === 0
  };

// accepted by leetcode