let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {
    
}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number; } = {
    x: 10,
    y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// When to use Annotations
// Function that returns the any type
const json = '{"x":10, "y":20}';
console.log(json);
console.log(" ");
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); 

// When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord;

for(let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}