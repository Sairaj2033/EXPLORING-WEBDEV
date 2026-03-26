const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const g= 9.8;
const PI = 3.14;

// let obj = {
//     sum: sum,
//     mul : mul,
//     g: g,
//     PI:PI
// };

// module.exports = obj;

module.exports = {
    sum: sum,
    mul : mul,
    g: g,
    PI:PI
};

// one more way to write 

// module.exports.sum = (a,b) => a+b; 
// module.exports.mul = (a,b) => a*b;
// module.exports. g= 9.8;
// module.exports.PI = 3.14; 
