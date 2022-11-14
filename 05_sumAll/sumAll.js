const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 ||
        typeof num1 !== 'number' || 
        typeof num2 !== 'number') {
            return "ERROR"
        }
    
    if (num1 >= num2) { return sumSmallestToLargest(num2, num1)} ;  
    return sumSmallestToLargest(num1, num2)
};

function sumSmallestToLargest (smaller, larger) {
    let result = 0;

    for (let i = smaller; i <= larger; i++) result += i;
    return result;
}

// Do not edit below this line 
module.exports = sumAll;


// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10