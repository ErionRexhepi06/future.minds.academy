exports.add = function(a,b){
    return a + b;
}
exports.subtrackt = function(a,b){
    return a - b;
}
exports.multiply = function(a,b){
    return a * b;
}
exports.divide = function(a,b){
    if(b==0)
        throw new Error('cant divide by zero');
    else
    return a/b;
}