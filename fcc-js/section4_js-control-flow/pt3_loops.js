//---------- FOR LOOPS ---------- //
//! for loops is use in order to execute a code block repeatedly, rather than repeat that code manually which will lead to code duplication

let numbers = [1,2,3,4,5,6,7,8,9,10];
let idx = 0;
let lengthOfArray = numbers.length;

// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);

for (let idx = 0; idx < numbers.length; idx++) {
    // console.log(numbers[idx]);

}

 
// n: this example more clean, but i think it is need to define the amount of index first. it is not getting from index of array. 
for (let num = 0; num <= 10; num++ ) {
    // console.log(num); 
}


//---------- WHILE LOOPS ---------- //


// when do in for loop
let numbers1 = [1,2,3,4,5,6,8,9,10];
for (let idx = 0; idx < numbers.length; idx++) {        //the formula : initialization, condition, step condition/iteration/incre ment
    // console.log(numbers[idx]);
}


let idx2 = 0;
while (idx2 < numbers1.length) {
    // console.log(numbers[idx2]);
    idx2++;
}

let sum = 0;
while(true) {
    // console.log('Loop');
    sum++;

    if (sum === 10) 
        break;
}

// ! the similiarities between for loop and while loop is they both execute a block of code repeadted while a condition is true, 
// ! the difference is that for loop use for typically iterating over an array, while loop use in order to execute the same block of code while condition is true

//---------- DO WHILE LOOPS ---------- //

// ! while loop will check the condition first and if it is true than execute the code, 
//! do while loop it will execute the code first specify within curly braces and then check the condition it's true


let i = 0;

do {
    // console.log(i);
    i++;
} while (i < 10);




//---------- INFINITE LOOPS ---------- //
// for (let num = 0; num <= 100; num--) {
//     // console.log(num);
// }

// ! dangerous code, will make you pc crash


//---------- FOR-IN LOOPS ---------- //
const course = {
    name: 'Javascript for Beginners',
    duration: 3,
    sections: 7
};
//  console.log(course.name);
//  console.log(course['duration']);
//  console.log(course.sections);


// accessing all of the array 
for (const key in course) {
    // console.log(course[key]);
}

// ! For in loop is used to iterate through the keys of javascript object

//---------- FOR-OF LOOPS ---------- //

let number = [1,2,3,4,5,6,7,8,9,10];
for (let idx = 0; idx < numbers.length; idx++ ) {
    // consol e.log(numbers[idx]);
}

for (let element of numbers) {
    // console.log(element);
}

// ! for of loops is special syntax in js, that allows us to easily iterate over an array for each iteration we get access to element,u would use the four of loop over the traditional for loop in the case when you dont need to use index that you currently iterating

//---------- BREAK AND CONTINUE ---------- //
//! means to breakout of the loops execution and we would use this to terminate the execution of the loop, this can be use for all different loop

//! continue keyword can be use for within loops, for loops, while loops. it will skip the current iteration of that loops or index or skip on to the next iteration


// * Break Statement

// For loops
for(let i3 = 0; i3 < 10; i3++ ) {
    if (i3 === 5) {
        break; // exits the loop when i is 5
    }
    // console.log(i3);
}

// While
let i4 = 0;
while (i4 < 10) {
    if(i4 === 5) {
        break;  // exits the loop when i is 5
    } 
    // console.log(i4);
    i4++;
}

//Do while 
let i5 = 0;
do {
    if (i5 === 5) {
        break;
    }
    // console.log(i5);
    i5++;
} while (i5 < 10);


//For-in loop
const obj = {a:1, b:2, c:3, d:4, e:5 };
    for(let key in obj) {
        if(key === 'b') {
            break;
        }
        // console.log( obj[key] ); //output : 1 which is index 2, bcs index start couting from '0'
    }

//For-of loop
const arr = [1,2,3,4,5,6,7,8,9,10];

for(let element of arr) {
    if(element === 5) {
        break;
    }
    // console.log(element);
}


//* Continue Statement
 
//For loop
for (let i6 = 0; i6 < 10; i6++) {
    if (i6 % 2 === 0) {
        continue; //skipping for the even number
    }
    // console.log(i6);
}

//While 
let i7 = 0; 
while  (i7 < 10) {
    i7++;
    if (i7 % 2 === 0) {
        continue; //skipping for the even number
    }
    // console.log(i7);
}

//Do While
let i8 = 0;
do {
    i8++;
    if (i8 % 2 === 0) {
        continue;  //skipping for the even number
    } 
    // console.log(i8);
} while (i8 < 10);


//For-in Loop
const obj2 = { a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10} ; 
for (let key in obj2) {
    if (obj2[key] % 2 === 0) {
        continue; //skipping for the even number
    }
    // console.log( obj2[key] );
}

const arr2 = [1,2,3,4,5,6,7,8,9,10];
for(let element of arr2) {
    if (element % 2 === 0) {
        continue;
    }
    // console.log(element);
}

