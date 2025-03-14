//---------- IF ELSE STATEMENS ---------- //

//* Ex 1: Buying Chocolate
let priceOfChocolate = 1.99;
let hasAmountInCash = 5;

const canBuyChocolate = hasAmountInCash >= priceOfChocolate;

if (canBuyChocolate) {
    // console.log("Enjoy your purchases");
} else {
    // console.log("Sorry you do not have enough money!");
}

//* Ex 2: Restaurant Schedule 
let hour = 15;

if (hour >= 6 && hour <= 12) {
    // console.log('Serving Breakingfast');
} else if (hour > 12 && hour <= 14) {
    // console.log("Serving Lunch");
} else {
    // console.log("Serving Dinner");
}

//! This called code block, makes code more readable and looks clean
let restaurantTime = 15;

if (restaurantTime >= 6.00 && restaurantTime <= 12.00 )
    // console.log('Serving Breakfast');
else if (restaurantTime > 12.00 && restaurantTime <= 14.00)
    // console.log('Serving lunch');
else 
    // console.log('Serving Dinner');
