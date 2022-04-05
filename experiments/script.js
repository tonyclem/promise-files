// For
// const myArray = ["corn", "people", "country"];

// for(let i = 0; i < myArray.length; i++){
//     // if(i===1) break;
//     if(i===1) continue;
//     console.log(`index: ${i}, value: ${myArray[i]}`);
// }

// for(let i = 5; i > 0; i--) {
//     console.log(i)
// }

// while
// let i = 0;
// while(i < myArray.length) {
//     if(i===1) break
//     console.log(`index: ${i}, value: ${myArray[i]}`);
//     i++;
// }

// do... while


// forEach


// for......of

// for............in


// Array
const project = [
     {
         color: 'green',
         type: 'nissa',
         registration: new Date('1/2/2024'),
         investment: 5
     },
     {
        color: 'yello',
        type: 'BMW',
        registration: new Date('1/2/2028'),
        investment: 3
    },
 ];

 console.table(project);

let country = {
     color: 'pink',
     type: 'Ferri',
     registration: new Date('1/1/2030'),
     investment: 7
 };

//  unshift()
 project.unshift(country);
 console.table(project);

let oversea = {
    color: 'red',
    type: 'Toyota',
    registration: new Date('1/8/2022'),
    investment: 5
};

// push
project.push(oversea);
console.table(project);

let overse4 = {
    color: 'white',
    type: 'Suv',
    registration: new Date('1/8/2022'),
    investment: 3
};

// splice
project.splice(1, 0, overse4)
console.table(project)

// find()
let myJob = project.find((bestColor) => bestColor.color === 'white');

console.log(myJob);

let myLifeTimeJoy = project.find(
    (bestColor) => bestColor.color === 'green' && bestColor.type === 'nissa');

    console.log(myLifeTimeJoy);

// let myJob01 = project.filter((bestColor) => bestColor.color === 'green');
// console.table(myJob01);


// Map()
// let sizes = project.map((bestColor) => {
//     if(bestColor.investment <= 5) {
//         return 'medium';
//     } 
//     if(bestColor.investment <= 7) {
//         return 'small'
//     }
//     return 'large';
// });

// console.table(sizes)

// let projectProperties = project.map((bestColor) => {
//     let properties = {
//         investment: bestColor.investment,
//         size: 'large',
//     } 
//     if (bestColor.investment <= 8) {
//         properties.size = 'medium'
//     }
//     if (bestColor.investment <= 5) {
//         properties.size = 'small'
//     }
//     return properties
// });

// console.table(projectProperties);

// forEach()

// project.forEach((bestColor) => {
//     bestColor.size = 'large';
//     if (bestColor.investment <= 5) {
//         bestColor.size = 'medium'
//     }
//     if (bestColor.investment <= 4) {
//         bestColor.size = 'small'
//     }
// });

// console.table(project)

// sort()
// let sortedProject = project.sort((c1, c2) =>
//     c1.investment < c2.investment ? 1 : c1.investment > c2.investment ? -1 : 0
// )

// console.table(sortedProject);

// some()
// let greenKinColExist = project.some(
//     (bestColor) => bestColor.color === 'pink' && bestColor.type === 'kinfkcloe'
// );

// console.log(`do any green color exist is the column array: ${greenKinColExist}`);

// Every
// let canAllProjectAtLeast = project.every((bestColor) => bestColor.investment >= 9);

// console.log(`can all project at least last foreven:${canAllProjectAtLeast}`);


// call back

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
  
//   This will return "John Doe":
//   person.fullName.call(person2);
//   console.table(person2);

//   Call()
// const myObject = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
// }

// myObject.fullName();
// console.table(myObject)

// Call() with argument
// const personSecond = {
//     firstName:"John",
//     lastName: "Doe",
//     city: "Oslo",
//     country: "Norway",
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + this.city + "," + this.country;
//     }
//   }
  
//   const personSndExample = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   personSecond.fullName.call(personSndExample);
//   console.table(personSecond);

//   callbacks()
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   console.table(mySecond());

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
//   let result = myCalculator(5, 5);
//   console.log(result);



// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return (sum);
//   }
//   console.table(myCalculator(5, 5))

// Asynchronous JavaScript
// form the html files
// Below is a copy of mycar.html:
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }
// In the example above, myDisplayer is used as a callback.
// The function (the function name) is passed to getFile() as an argument.
// function getFile(myCallback) {
// let req = new XMLHttpRequest();
// req.open('GET', "mycar.html");
// req.onload = function() {
//     if (req.status == 200) {
//     myCallback(this.responseText);
//     } else {
//     myCallback("Error: " + req.status);
//     }
// }
// req.send();
// }

// getFile(myDisplayer);


// Async 

// async function myFunction() {
//     return "Hello";
// }
// myFunction().then(
// function(value) {myDisplayer(value);}
// );
  
  

// Await
// async function getFile() {
//     let myPromise = new Promise(function(myResolve, myReject) {
//       let req = new XMLHttpRequest();
//       req.open('GET', "mycar.html");
//       req.onload = function() {
//         if (req.status == 200) {myResolve(req.response);}
//         else {myResolve("File not Found");}
//       };
//       req.send();
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
//   getFile();

// Asycn code example

// setTimeout(function() { myFunction("I love You !!!"); }, 3000);

// setTimeout(() => { console.log("I love You !!!"); }, 5000);



