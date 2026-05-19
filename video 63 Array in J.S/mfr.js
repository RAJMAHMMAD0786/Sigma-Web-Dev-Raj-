console.log("This is a map filtter and reduces :");

let arr=[1,3,5,6,8,11];

console.log(arr);


// map() --->  map ka used two number ka squar karne mai kiya jata hai
//Arrow function

console.log("This is a map :");

let newArray=arr.map((e,index,value)=>{

    return e**2;

})

console.log(newArray);


// filter() ---> filter ka used filter lagane ke liye kiya jata hai kisi bhi array etc ke andar , 
console.log("This is a filter :");

const graterthenfive=((e)=>{

    if(e>5)
    {
        return true;
    }

    return false;
})

console.log(arr.filter(graterthenfive));


// reduce methods() ---> reduce methods ka used two number pe operation perform karne ke liye kiya jata hai

let arr1=[1,2,3,4,5,6];

console.log("This is a reduce methods :");

const reduce=(a,b)=>{

    return a+b;
}

console.log(arr1.reduce(reduce));



