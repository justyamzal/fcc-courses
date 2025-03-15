// --- OBJECT DATA /REFERENCE DATA TYPE   --- / 
/* can have a more complex structure and they hold key value pairs, this enables us to store more than one variable all in one */


// * Object

let course = {
    name : "Javascript for Beginners",
    hours : 3 
};

// console.log(course);


/* note : you can know the type of data from variable by using/or type "typeof" at terminal with 'node' commands
ex: typeof 'taco', typeof 0, typeof undefined, etc */


 
// ! this potentially cause bugs, so you need to be careful 

// --- OBJECT (OBJECT DATA/REFERENCE DATA TYPE )  --- //
/* Object is a fundamental data type in javascript that allows you to store key value pairs */

// * Object
let course_ = {
    name : "Javascript for Beginners",
    hours : 3 
};

// console.log(course_); 

// ! we can access the name value throught 2 notation, dot notation and bracket notation

// * dot notation 
// console.log(course.name);

// course.name = "Javascript Fundamentals";
// console.log(course.name);
// ! we can override or changed the value as well

// * bracket notation
// console.log(course['name']);
    
course['name'] = 'Javascript 101';
// console.log(course['name']);

//! associated value for the key of ours 
let property = "hours"
// console.log(course[property]);
