

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// const areaOrPerimeter = function(l , w) {
//     return l == w ? l*w : 2*(l+w)
//   };





//You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
//As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// function reverse(str){
//     return str.split(" ").reverse().join(" ")
//   }






// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return (mpg * fuelLeft) >= distanceToPump
//   }








// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0

// unction sakuraFall(v) {
//     // your code here
//     let distToGround = 5 * 80; // distance from branch to ground = 400 centimeters
//     let time = 0;
    
//     if(v > 0){
//       time = distToGround / v;
//     }
    
//     return time;
//   }