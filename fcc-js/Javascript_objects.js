  // ----- OBJECT LITERALS -----/
  //* Object are a way to store key value pairs. they allow us to group together state and behaviour. the benefit is that we can group highly related variables even group function within it.


  const dog = {
    name: 'Max',
    breed: 'Daschund',
    age: 5,
    weightInPounds: 12,
    eat: function() {       //anonymous function
      console.log('Champ!');
    },
    bark() {
      console.log('Woof!');
    }
  }

  // console.log(dog);
   
// ! the purposes of javascript object is to store state and behaviour. state is represented by properties and behaviour is represented by functions within the object. when we specify a function within an object, we call it method


  // ----- FACTIORY FUNCTIONS ----- //
  // ! factory functions provide an efficient way for us to create a new object. now the name of the function will use camel case notation and it can accept parameter variables. these parameter variables can help customize the values of the object being returned. the benefit is that, it reduce code duplication and then need to copy and paste
  
  /*
  const anotherDog = {
    name: 'Marley',
    breed: 'Chocolate Lab',
    age: 3,
    weightInPounds: 60,
    eat: function() {       //anonymous function
      console.log('Champ!');
    },
    bark() {
      console.log('Woof!');
    }
  }
  */

  // console.log(dog);


  function getDog(name, breed,age, weightInPounds) {
    return {
      name: name,
      breed: breed,
      age: age,
      weightInPounds,
      eat(){
        console.log('Chomp!');
      },
      bark() {
        console.log('Woof!');
      }
    }
  }

  const anotherDog = getDog('Marley', 'Chocolate Lab', 3, 60);
  // console.log(anotherDog);

// ----- CONSTRUCTOR FUNCTIONS ----- //
//* 

function Dog (name, breed, age, weightInPounds) {
  //this {};

  //Add properties to this
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.weightInPounds = weightInPounds;

  this.eat = function() {
    console.log(this.name + ': Chomp!');
  }

  this.bark = function() {
    console.log(this.name + ': Woof!');
  }

  //return this;
}

const anotherDog_ = new Dog('Marley', 'Lab', 3, 60);
// console.log(anotherDog_);

// ! we use pascal notation where would use camel case notation for variables and function names,  constructor function use special keyword called "This" which references the object that calling 'this' code. so when u see the keyword 'this' you can think of it as this current object. so naming constructor functtion is to have the name of it be noun rather a verb

// ----- OBJECT ARE DYNAMIC ----- //
//! Object in javascript are dynamic because you can change and mutate properties and methods of the object after it has been initialize


const person = {
  name : 'Steven'
};

// console.log(person);

person.favoriteFood = 'tacos';
// console.log(person);

person['favoriteIceCream'] = 'chocolate';
// console.log(person);

delete person.favoriteIceCream;
// console.log(person);

person.eat = function() {
  console.log('start eating');
}

// person.eat();


// ----- THE CONSTRUCTOR PROPERTY ----- //
// ! the constructor property is a property that exist for all object in javascript. you can acces it with either the not notation or bracket notation. it used to instantiatie and create that object

// let newObj = {};
// let newObj = new Object();



// ----- FUNCTION ARE OBJECT ----- //

  function add(num1, num2) {
    return num1 + num2;
  }

  const n = add;
  // console.log(n(2,2));

  // console.log(add.length);

  function Programmer(name) {
    this.name = name;
    this.writeCode = function() {
      console.log('Code in Javascript');
    }
  }

  // console.log(Programmer.length);
  // console.log(Programmer.constructor);

  const Programmers = new Function('name',`
    this.name = name;
    this.writeCode = function() {
      console.log("Code In Javascript");
    }
  `);
    
    
  const newProgrammers = new Programmers('Steven');

  // newProgrammers.writeCode();

  //! internally function are represented as object in javascript, means they are having properti and methods

  
  //---- VALUE VS REFERENCE TYPES -----//
  let a = 10;
  let b = a;

  a = 20;

  // console.log(a);
  // console.log(b);

//! the output have a different value, both A and B are assigned to a number independent that they refer to different memory addresses when we assign a variable to another variable which holds a primitive value then that primitive value will be passed by copy.
// ! primitive values are passed by copy


let aa = { value: 20 };
let bb = aa;

aa.value = 100;

// console.log(aa);
// console.log(bb);

//! this output having same memory address and sharing a same value, based on object data type. the output just got override value, so object data are copied by reference..


//----- ENUMERATING PROPERTIES OF AN OBJECT -----//

//* iterating the primitive data
let numbers= [1,2,3,4,5,6,7,8,9];
for (const elements of numbers) {
  // console.log(elements); 
}

//* iterating the object data 
const theDog = {
  name: 'Max',
  age: 5,
  eyeColor: 'blue'
};

for (const key in theDog) {
  // console.log(theDog[key])
}

const keys = Object.keys(theDog);
// console.log(keys);

//! method are just functions defined within an object, so this return all the keys of the object as an array 

const values = Object.values(theDog);
// console.log(values);

// * Nested Array,  the key value pairs has been stored as an element in the array
const entries = Object.entries(theDog);
// console.log(entries); 

for (const key of Object.keys(theDog)) {
  // console.log(key);
}

for (const value of Object.values(theDog)) {
  // console.log(value);
}

//* key value pairs stored as an array  
for (const entry of Object.entries(theDog)){
  // console.log(entry);
}

//? how can you enumerate over the properties of an object?
//there are different way to enumerate over the properties of an object one way is you can use the 'for in loop' iterate over the keys an objects
// we can also use the built object class like 'object.entries','object.key', 'object.values'.


// ----- CLONING AN OBJECT ----- //

// let aaa = {value: 10}
// let bbb = aaa;

// bbb.value = 20;


// console.log(aaa);
// console.log(bbb);


//if u wanted to have it the case where if we change the value one of these variable  it doesnt affect the other then we need to have it be two independent object and that could be accomplished by creating a clone of an object. so we know that objects are passed by reference


let aaa = {value: 10}
let bbb = {...a};

// Object.assign(b,a);
bbb.value = 20;


// console.log(aaa);
// console.log(bbb);

// ----- GARBAGE COLLECTION -----//
// in programming languages like C++ when you create an object you have to allocate memory and deallocate it but in programming languages such as JavaScript C and Java we don't have this concept so you don't have to explicitly deallocate memory the JavaScript engine has a garbage collector meaning that it will self-manage itself and find the variables and objects that are no longer being used in our program and it will intelligently free up that memory as JavaScript developers we don't have to worry about allocating and deallocating memory for our objects


// ----- THE BUILT IN MATH FUNCTION ----- //

// console.log(Math.round(3.14));
// console.log(Math.round(3.6));
// console.log(Math.ceil(4.2));
// console.log(Math.max(1,2,3,4,5,6));
// console.log(Math.min(1,2,3,4));
// console.log(Math.sqrt(25));

let min = 1;
let max = 10; 

const randomNum = Math.round(Math.random() * (max - min) + min);
// console.log(randomNum); 

// ----- STRING METHOD ----- //

const hisName = "Steven";
// console.log(typeof hisName);

const anotherName = new String('Joe');
// console.log(typeof anotherName);

let sentence = " A new sentence. ";
const doesIncludeNew = sentence.includes('new');
// console.log(doesIncludeNew);

const startsWithA = sentence.startsWith('A');
// console.log(startsWithA);

const endsWithA = sentence.endsWith('A');
// console.log(endsWithA);

let updatedSentece = sentence.replace('new', 'short');
// console.log(updatedSentece);

trimmedSentence = sentence.trim();
// console.log(trimmedSentence);

let sentence2 = "A New Sentence";

const wordInSentence = sentence2.split('');
// console.log(wordInSentence);

let email = 'TestEmail@gmail.com';

let lowerCaseEmail = email.toLowerCase();
// console.log(lowerCaseEmail);

let upperCaseEmail = email.toUpperCase();
// console.log(upperCaseEmail);

// ----- TEMPLATE LITERALS -----//
//* provide an alternative syntax to thr traditional string by using back ticks the benefit is enables us to use string interpolation (concatenation )

let firstName = 'Steven';
let lastName = 'Garcia';

// let fullName = firstName + ' ' + lastName;

let fullName = `${firstName} ${lastName}`; 

// console.log(fullName);

// ----- THE DATE OBJECT -----//

let now = new Date(0);
// console.log(now);

let Jan01_1970 = new Date(0);
// console.log(Jan01_1970);
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969 );


