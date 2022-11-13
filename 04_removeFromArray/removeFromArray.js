const removeFromArray = function(input, ...args) {
    
    return input.filter((element) => {
        return !args.includes(element);
    });
    
};

// Do not edit below this line
module.exports = removeFromArray;
