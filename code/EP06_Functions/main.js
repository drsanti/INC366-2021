/*
 * 1) Function
 */

 /*
function add(x, y)
{
    return x + y;
}

let a = add(20, 5);
console.log(a);

let b = 4;
let c = 10;
let d = add(b, c);
console.log(d);
*/



 /*
 * 2) Arrow Function
 */
// let add = (x, y) => x + y;
// let x = add(20, 56)
// console.log(x);


// let calc = (x, y) => {
//     let a = x*2;
//     let b = y+3;
//     return a + b;
// }
// let x = calc(1, 2);
// console.log(x);


// const print = (str) => console.log(str.toUpperCase())
// print("abcdEFG");





/*
 * 3) Callback Function
 */
// const tick = () => console.log("...");
// setInterval(tick, 3000);



/*
 * 4) Using Callback Function and Arrow Function
 */


let counter = 0;
// function tick() {
//     console.log(counter++);
// }
// setInterval(tick, 1000);

// setInterval(function () {
//     console.log(counter++);
// }, 1000);

setInterval( () => {
    console.log(counter++);
}, 1000);
