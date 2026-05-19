// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school.Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses(Gryffindor(length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students=["Raj","Mahmmad","Pankaj","Nishant","Vishwash","Muktanur","mukund","sumit","pritam","prashant","shivam"]

let house=[];

// for of loop basically array ke liye hi used kiya jata hai 
for (const student of students) {
    if(students.length<6)
    {
        house.push("Gryffindor");
    }
    else if(students.length<8)
    {
        house.push("Hufflepuff");
    }
    else if(students.length<12)
    {
        house.push("Ravenclaw");
    }
    else{
        house.push("Slytherin");
    }
}

console.log(house);