
/*
var obj1 = new Object();

// console.log(obj1); // { }
console.dir(obj1);
*/

/*
var cat = new Object();

cat.color  = 'gray';
cat.age    = 2;
cat.weight = 1.5;

console.dir(cat); // { color: 'gray', age: 2, weight: 1.5 }
*/

/*
var dog = new Object();
dog.run = function() {
    console.log("Running...");
};
dog.eat = function() {
    console.log("Eating...");
};
dog.color = 'black';
dog.run();
dog.eat();
dog.color = 'white';
console.dir(dog);
*/

/*
var cat = { }
// console.dir(cat);

var dog = {
    color: 'gray',
    age: 2,
    run: function(){
        console.log("Running...");
    },
    eat: function(){
        console.log("Eating...");
    }
}
dog.run();
dog.color = 'white';
console.dir(dog);
*/


var cat = {};
// cat.color = 'black';
// cat.age   = 2;
cat['color'] = 'black';
cat['age'] = 2;
cat.run = function(){
    console.log("Cat is running...");
}

// console.dir(cat.color);
// console.dir(cat['color']);
// cat.run();
cat['run']();
