//---------- THIS KEYWORD ----------//
/*
* 📌 The this Keyword dalam JavaScript
this adalah keyword spesial dalam JavaScript yang mereferensikan konteks eksekusi dari fungsi atau objek di mana ia digunakan.
Pemahaman this sangat penting karena dapat berubah tergantung pada bagaimana fungsi dipanggil.
*/

/*
*----- 🎯 1. this dalam Global Context -----
Dalam JavaScript, ketika this digunakan di luar fungsi atau objek, ia mereferensikan global object.

📌 Contoh di Browser (Global Context)
*/

 // console.log(this); //! ✅ Output: Window (di browser)

//n: 📌 Dalam lingkungan browser, this merujuk ke window.



/*
*----- 🎯 2. this dalam Object Method -----
Ketika this digunakan dalam metode objek, ia merujuk ke objek yang memiliki metode tersebut.
📌 Contoh this dalam Metode Objek
*/
const user = {
    name: "Alice Morgan",
    sayHello: function() {
        // console.log(`Hello, my name is ${this.name}`);
    }
};

user.sayHello(); // ✅ Output: Hello, my name is Alice

//n: 📌 this dalam sayHello() mengacu pada objek user.

/*
*----- 🎯 3. this dalam Function (Strict Mode vs Non-Strict Mode) -----
Dalam fungsi biasa, this bergantung pada mode eksekusi:

Non-strict mode: this mengarah ke objek global (window di browser, global di Node.js).
Strict mode ('use strict'): this menjadi undefined.

* 📌 Contoh this dalam Fungsi Biasa (Non-strict Mode)
*/
function showThis() {
    // console.log(this);
}

showThis(); // ✅ Output: Window (di browser)

/*
* 📌 Contoh this dalam Fungsi Biasa (Strict Mode)
*/
"use strict";
function showThis() {
    // console.log(this);
}

showThis(); // ❌ Output: undefined


/*
*----- 🎯 4. this dalam Constructor Function -----
Saat digunakan dalam constructor function, this mengacu pada instance baru yang dibuat.

*📌 Contoh this dalam Constructor Function
*/

function Person(name) {
    this.name = name;
}

const person1 = new Person("Bob");
// console.log(person1.name);   //! 📌 this merujuk ke instance person1.

/*
*----- 🎯 5. this dalam Arrow Function -----
Arrow function memiliki perilaku this yang berbeda dari fungsi biasa:

Tidak memiliki this sendiri.
Mengambil nilai this dari konteks luarnya (lexical this).

*📌 Contoh Perbedaan this dalam Arrow Function vs Function Biasa
*/
const obj = {
    name: "Charlie",
    regularFunc: function() {
        // console.log(this.name); //! ✅ Mengacu ke obj
    },
    arrowFunc: () => {
        // console.log(this.name); //! ❌ Output: undefined (karena `this` mengambil dari global)
    }
};
obj.regularFunc(); // ✅ Output: Charlie
obj.arrowFunc(); // ❌ Output: undefined

//📌 Arrow function mengambil this dari luar (window), bukan dari obj.

/*
*----- 🎯 6. this dalam Event Listener -----
Dalam event listener DOM, this biasanya merujuk ke elemen yang menangani event.

*📌 Contoh this dalam Event Listener
*/
// document.getElementById("btn").addEventListener("click",function(){
    // console.log(this); // ✅ Output: <button id="btn">
// });

//!📌 this merujuk ke elemen <button> yang diklik.


/*
*----- 🎯 7. Mengubah this dengan call(), apply(), dan bind() -----
Kadang-kadang kita perlu mengontrol nilai this, misalnya saat ingin menggunakan metode dari objek lain.

* 📌 Menggunakan call()
call() langsung memanggil fungsi dengan this yang ditentukan.
*/
const person = {name:"david"};
function sayHello() {
    // console.log(`Hello, my name is ${this.name}`);
}
sayHello.call(person);

/*
* 📌 Menggunakan apply()
Mirip dengan call(), tapi menerima array sebagai argumen.
*/
function introduce(city, country) {
    // console.log(`I am ${this.name} from ${city}, ${country}`);
}

introduce.apply(person,["jakarta","Indonesia"]);
// ✅ Output: I am David from Jakarta, Indonesia

/*
* 📌 Menggunakan bind()
bind() mengembalikan fungsi baru dengan this yang tetap.
*/
const boundFunction = sayHello.bind(person);
boundFunction(); // ✅ Output: Hello, my name is David


const course = {
    name: 'ES6 syntax',
    start: () => {
        console.log(this.name);
    }
}

// course.start(); //!undefined , this because when u using the arrow function the this. keyword from it's parent scope so in this case from the global object, since the global object doesnt have property, this value would be undefined

function introduce(languange) {
    // console.log(this.name + ' teaches ' + languange);
}
const instructor = {name : 'Steven'};
const introduction = introduce.bind(instructor);
introduction('JavaScript');

//!📌 bind() tidak langsung memanggil fungsi, tetapi mengembalikan fungsi baru.

/*
*-----🎯 8. this dalam Class -----
Dalam class, this mengacu pada instance objek yang dibuat.
📌 Contoh this dalam Class
*/
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        // console.log(`${this.name} makes a noise`);
    }

}

const dog = new Animal("Buddy");
dog.speak(); // ✅ Output: Buddy makes a noise

/*
*-----🚀 KESIMPULAN -----
Konteks	                  ||  Referensi this
----------------------------------------------------------------
Global Scope	          ||  window (browser) atau global (Node.js)
Object Method	          ||  Objek yang memiliki metode
Function (Strict Mode)	  ||  undefined
Constructor Function	  ||  Instance objek yang baru dibuat
Arrow Function	          ||  Mengambil this dari lingkup luar
Event Listener	          ||  Elemen DOM yang menangani event
call(), apply(), bind()	  ||  this dapat ditentukan secara manual
Class	                  ||  Instance dari class tersebut
*/

/*
📌 Gunakan this dengan hati-hati, terutama dalam arrow function dan event listener, untuk menghindari bug yang tidak terduga! 🚀
*/



/*


*/



/*
*/


/*
*/
/*
*/
/*
*/

/*
*/
/*
*/
/*
*/
/*
*/
/*
*/