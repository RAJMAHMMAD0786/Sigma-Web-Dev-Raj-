console.log("This is a javascript :");

console.log(document.body);

console.log(document.body.childNodes);
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);

// Direct ham kisi nodes ko target kar raha hun  , ham container ke upar bat kar rahe hao , container mera 2nd child hai 1st child text hai 
let cont = document.body.childNodes[1];
console.log(cont);

// childNodes ---> ye childs batata hai ki kitana childs hai 
console.log(cont.childNodes);
console.log(cont.firstChild);
console.log(cont.lastChild);

// ham chahte hai ki text node na mile direct koi elements node mile toh usake liye ye kijiye 
console.log(cont.childNodes);
console.log(cont.firstElementChild);
console.log(cont.lastElementChild);

// ham color applie kar rahe hai 
cont.firstElementChild.style.color = "red";
cont.firstElementChild.style.backgroundColor = "black";


cont.lastElementChild.style.color = "red";
cont.lastElementChild.style.backgroundColor = "blue";

// Ham isake parent ko bhi pata laga sakte hai
console.log(cont.firstElementChild.parentElement);


// Ab mai thoda sibling ke bare mai bat karunga 
console.log("Yeha pe sibling ke baren mai bat karunga :");

console.log(document.body.firstElementChild);

console.log(document.body.firstElementChild.childNodes);

// children ka matalab hai ki kitana children hai is elements ka 
console.log(document.body.firstElementChild.children);

console.log(document.body.firstElementChild.children[0]);
console.log(document.body.firstElementChild.children[1]);
console.log(document.body.firstElementChild.children[2]);
console.log(document.body.firstElementChild.children[2]);

// Sibling kaun kisaka hai ye dekh raha hun

console.log(document.body.firstElementChild.children[3].nextElementSibling);
console.log(document.body.firstElementChild.children[3].previousElementSibling);

console.log(document.body.firstElementChild.children[3].previousSibling);


// table
console.log("yeha se table ke baren mai padha jayega ")

console.log(document.body.children);

console.log(document.body.children[1]);

console.log(document.body.children[1].rows);
console.log(document.body.children[1].caption);
console.log(document.body.children[1].tHead);
console.log(document.body.children[1].tfoot);

