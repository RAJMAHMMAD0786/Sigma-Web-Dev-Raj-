let a=6;

let fact=1;

if(a==0 || a==1)
{
    fact=1;
}
else
{
    for(let i=2;i<=a;i++)
    {
        fact=fact*i;
    }
}

console.log("The fact of the given number is :",fact);


// This is using a reduce function   
let arr=[1,2,3,4,5,6];

let fact1=(a,b)=>{
    return a*b;
}

console.log("The fact of the given number is :",arr.reduce(fact1));