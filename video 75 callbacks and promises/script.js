console.log("This is Raj Mahmmad :");
console.log("This is a pankaj Kumar :");

setTimeout(() => {
    console.log("This is inside the setTimeout :");
}, 0);

setTimeout(() => {
    console.log("This is inside the setTimeout 2:");
}, 0);

console.log("This is end :");



const fn=() => {
    console.log("Nothing :");
  
}


const callback=(arg) => {
  console.log(arg);
  fn();
}


const loadScript=(src,callback) => {
  let sc=document.createElement("script");

  sc.src=src;
  sc.onload=callback("RajMahmmad",fn);
  document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)


// callback---> means function calling inside the function that is called the basic info of the callback