// console.log("Hello World!\n==========\n");

// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");


// // Function takes in number (P) and returns function that adds number with new number (P)

// function plus(number) {
//     return function (plusNumber) {
//         return number + plusNumber;
//     }
// }

// let plus15 = plus(15);
// console.log(plus15(10));


// Use forEach method to print names of each user

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

// Use reduce method to return sum of all scores. Then find average score. 



let averageScore = users.reduce((value,user,index,array) => {
    
    value += user.score; 
    
    if (index == array.length -1) {
        value = value/array.length;
    }
    
    return value;
    

},0);



console.log(averageScore);





// Use sort method to sort users in descending order by score.

// let descendingScore = users.sort((user1,user2) => {
//     if (user1.score < user2.score) {
//         return 1;
//     }  else if (user1.score > user2.score) {
//         return -1;
//     } else {
//         return 0;
//     }
// })

// console.log(descendingScore);





//Use filter method to return new array that returns users listed as active. 

// let activeUsers = users.filter((user) => {
//    return user.isActive == true;
// })

// console.log(activeUsers);




  // Use map method to return new array of objects only with name and score

// namesAndScores = users.map((user) => {
    
//     return obj = {name: user.name, score: user.score};
    

    
// })

// console.log(namesAndScores);








//   let names = users.forEach((user) => {
//     console.log(user.name);
//   })



