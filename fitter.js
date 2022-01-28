const ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age > 18;
}
const result = ages.filter(checkAdult);

console.log(result);

const myArray = [1,3,5,7,9]
myArray.filter(el => el < 4);

console.log(myArray)

