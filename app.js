// Exercise 1: Empty Array

const foods = [];  

console.log('Exercise 1 Result:', foods);

// Exercise 2: Adding Strings

foods.push("pizza", "cheeseburger");

console.log('Exercise 2 Result:', foods);

// Exercise 3: Inserting at Beginning

foods.unshift("taco");

console.log('Exercise 3 Result:', foods);

// Exercise 4: Accessing an Element

foods.indexOf("pizza")

const favFood = [foods[1]];

console.log('Exercise 4 Result:', favFood);

// Exercise 5: Inserting Between Others

foods.splice(2,0,"tofu")

console.log('Exercise 5 Result:', foods);

// Exercise 6: Replacing Elements

foods.splice(1,1,"sushi","cupcake")

console.log('Exercise 6 Result:', foods);

// Exercise 7: Slice Method

const yummy =
    [foods[1], foods[2]];
    foods.slice(0,"sushi","cupcake")

console.log('Exercise 7 Result:', yummy);

// Exercise 8: Finding an Index

console.log('Exercise 8 Result:', foods.indexOf("tofu"))

// Exercise 9: Joining Elements

const allFoods = foods.join(' -> ')

console.log('Exercise 9 Result:', allFoods);

// Exercise 10: Checking for Elements

const hasSoup = foods.includes("soup")

console.log('Exercise 10 Result:', hasSoup);

// Exercise 11: Odd Numbers

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = []

for(let number of nums){
    if (number % 2 === 1){odds.push(number)}
}
console.log('Exercise 11 Result:', odds)

// Exercise 12: Fizzbuzz

const fizz = []
const buzz = []
const fizzbuzz = []

for(let number of nums){
    if (number % 3 === 0){fizz.push(number)} // [1] [2]
}

for(let number of nums){
    if (number % 5 === 0){buzz.push(number)} // [1] [2]
}

for(let number of nums){
    if (number % 3 && 5 === 0){fizzbuzz.push(number)} // [1] [2]
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);