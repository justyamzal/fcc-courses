//----- FUNCTION DECLARATIONS vs EXPRESSIONS -----//

/*
Di JavaScript, ada dua cara utama untuk mendefinisikan fungsi:

*- Function Declaration → Fungsi yang dideklarasikan dengan kata kunci function di tingkat global atau lokal.

*- Function Expression → Fungsi yang disimpan dalam variabel atau dieksekusi langsung.
Contoh
*/

//Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
// console.log(greet("Alice"));  //Hello, Alice!


//-Function Expression (Anonymous)
const greetExpression = function(name) {
    return `Hi, ${name}!`;
};
// console.log(greetExpression("Bob"));     //Hi, Bob!

//-Function Expression (Arrow Function)
const greetArrow = (name) => `Hey, ${name}!`;
// console.log(greetArrow("Charlie")); //! Hey, Charlie!

/*
Perbedaan Utama:

!- Hoisting: Function Declaration bisa dipanggil sebelum dideklarasikan karena diangkat ke atas.

!- Function Expression harus dideklarasikan sebelum digunakan.
*/

//---------- HOISTING ----------//

/*
Hoisting adalah mekanisme JavaScript di mana deklarasi variabel dan fungsi dipindahkan ke atas sebelum kode dieksekusi.
*/

// console.log(hoistedFunction());  //! Berfungsi meskipun dipanggil sebelum deklarasi

function hoistedFunction(){
    return "Fungsi ini diangkat!";
}

//* Function Expression tidak bisa di hoist
// console.log(nonHoistedFunction());
const nonHoistedFunction = function() { //! Error: Cannot access before initialization
    return "ini tidak di hoist";
};

//---------  ARGUMENTS ----------//
/*
arguments adalah objek array-like yang tersedia dalam fungsi biasa untuk mengakses semua argumen yang dikirim.

Contoh
*/

function sumAll() {
    let total = 0;
    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
// console.log(sumAll(1, 2, 3, 4,)); //! 10
// Catatan: arguments hanya tersedia dalam function declaration, bukan arrow function.


//---------- THE REST OPERATOR (...) ----------// 
/*
Rest operator digunakan untuk mengumpulkan sisa argumen ke dalam array.

*/

function sumAllWithRest(...numbers) {
    return numbers.reduce((total,num) => total + num, 0);
}

// console.log(sumAllWithRest(1,2,3,4,5)); //! 15


//---------- DEFAULT PARAMETERS ----------// 
/*
Default parameters digunakan untuk memberikan nilai default ke parameter fungsi jika tidak diberikan.

Contoh
*/

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// console.log(greet()); // Hello, Guest!
// console.log(greet("Alice")); // Hello, Alice!



//---------- GETTER AND SETTERS ----------// 
/*
Digunakan untuk mengakses dan memperbarui properti dalam objek dengan cara yang lebih terkendali.

Contoh :
*/
const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name){
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
// console.log(person.fullName);
// person.fullName = "Alice Smith";
// console.log(person.fullName);



//---------- TRY AND CATCH ----------//
/*Digunakan untuk menangani error dalam kode.
*/
try {
    let result = 10 / 0;
    // console.log(result); //!Output: infinity
    throw new Error("Pembagian oleh nol");
} catch (error) {
    // console.error("Error: ",error.message);
} finally {
    // console.log("Selesai.")
}



//---------- LOCAL VS GLOBAL SCOPE ----------//
/* Variabel dapat memiliki cakupan global (bisa diakses di mana saja) atau lokal (hanya dalam fungsi atau blok).
Contoh*/

let globalVar = "Saya global!";
function testscope() {
    let localVar = "Saya lokal!";
    // console.log(globalVar); //! Output: Bisa diakses
    // console.log(localVar); //! Output: Bisa diakses disini
}

testscope();
// console.log(globalVar); //! Output: Bisa diakses
// console.log(localVar);  //! Output: Error: tidak diakses diluar fungsi




//---------- LET VS VAR ----------//
/*
- var : memiliki cakupan function scope dan dapat di hoist
- let :  memiliki cakupan block scope dan lebih aman digunakan.
*/
function testVar() {
    if(true) {
        var x = 10;
    }
    console.log(x);  //! Bisa diakses meskipun di dalam blok
} 
// testVar();

function testLet(){
    if(true) {
        let y = 20;
    }
    // console.log(y);  //! Error: y is not defined
}
// testLet();


//---------- The (this) KEYWORD ----------//
/*
this mengacu pada objek yang memanggil fungsi. Nilainya berubah tergantung pada konteksnya.

Contoh dalam Objek
*/

/*Contoh dalam Event Listener*/








/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/








/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
