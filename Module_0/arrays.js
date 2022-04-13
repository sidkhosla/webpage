//array
// let arr = ["1", "2", "3", "4"]
// //add
// console.log(arr);

// //add in the back
// arr.push("5");
// //add in the front
// arr.unshift("0")
// console.log(arr);
// // remove from front
// arr.shift()
// arr.push("0");
// console.log(arr);
// //remove from back
// arr.pop();
// console.log(arr);
firstArry= [1, 2, 3]
scndArr= [100, 2, 1,10]
outArray = [...new Set([...firstArry, ...scndArr])];
console.log(outArray);
// Output: [1,2,3,100,10]
