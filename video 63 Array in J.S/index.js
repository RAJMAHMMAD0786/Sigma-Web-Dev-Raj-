console.log("This is a Array tutorials :");

let arr=[1,3,2,5,10];

console.log(arr,typeof arr);
console.log(arr.length);

arr[4]=100;

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[4]);


// Array Methdes

let a=[1,2,3,4,5,6];

// 1. tostring() --->String mai convert kar raha hai Array ke data ko
console.log(a.toString());

//2. join()  ---> ye join kar raha hai array ke data ke sath
console.log(a.join(" and "));

//3. pop() ---> pop Array ke last index ke data ko remove karta hai
console.log(a.pop());
console.log(a);

//4. push() ---> push methodes are used to push the data in Array , from last index
console.log(a.push(100));
console.log(a); 

//5. Shift() --->shift methods are used to remove the first elements of Array
console.log(a.shift());
console.log(a);

//6. Unshift() --->Unshift methods are used add the elements in begning 
console.log(a.unshift(100));
console.log(a);

//7. delete ---> delete methods are used to delete the data 
console.log(delete a[0]);
console.log(a);

//8. concat() ---> concat methods are used to add the array
let a1=[1,2,3,4];
let a2=[1,2,3,4];
let a3=[1,2,3,4];

console.log(a1.concat(a2,a3));


//9. sort()
let b=[1,4,2,9,5];
console.log(b);
console.log(b.sort());

//10. splice()   ---> like this slice 
let b2=[1,2,3,4,5,6,7,8];
console.log(b2);

console.log(b2.splice(1,3, 200,400,800));
console.log(b2);

//11. slice() ---> slice methods are used to print the array of given index
let b3=[1,2,3,4,5];

console.log(b3);
console.log(b3.slice(1));
console.log(b3.slice(1,3));

//12. reverse() ---> reverse methodsare used to reverse the array
let x1=[1,2,3,4,5,6,7];

console.log(x1);
console.log(x1.reverse());






// Array ---> Array is mutable ---> it can be changed

// Array mai yek se jayada data type ka value rah sakta hai in javascript 




//string is immutable ---> it can not be changed