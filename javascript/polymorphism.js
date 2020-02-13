
// We want to be able to put any number of numbers in this function
// and it will return the sum of all numbers present
function sum(...nums) {
    let sum = 0;
    for(const num of nums) {
        sum += num;
    }
    return sum;
}

console.log(sum(1, 2)) // 3
console.log(sum(1, 2, 3)) // 6
console.log(sum(5)) // 5


// default parameter: var = defaultValue
function power(val, pow = 2) {
    // val to the power of pow
    return val ** pow;
}

console.log(power(1)) // 1
console.log(power(1, 2)) // 1
console.log(power(2)) // 4
console.log(power(2, 2)) // 4
console.log(power(2, 3)) // 8
console.log(power(3)) // 9