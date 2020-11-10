let strArr = "()()()()()()";
let ansArr = strArr.slice();
let answer = 1;
let count0 = 0;
let count9 = 0;
let counto = 0;
let countp = 0;

console.log("this work!");

for(let i = 0; i < strArr.length; i++){
    if(strArr[i] === ")") count0++;
    if(strArr[i] === "(") count9++;
    if(strArr[i] === "[") counto++;
    if(strArr[i] === "]") countp++;
}

