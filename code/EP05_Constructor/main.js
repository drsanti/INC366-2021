
/**
 * 01 Function vs. Constructor Function
 */
/*
// Normal Function
function FunCat() {
    var color = "black";
    console.log(color);
}



// Constructor Function
function ConCat() {
    this.color = "black";
    console.log(this.color);
}

FunCat();
ConCat();

// console.log(FunCat)
// console.log(FunCat)

*/



/**
 * 02 Object Creation using new Operator
 */
/*
// Normal Function
function FunCat() {
    var color = "black";
    console.log(color);
}

// Constructor Function
function ConCat() {
    this.color = "black";
    console.log(this.color);
}

var cat1 = new FunCat();
var cat2 = new ConCat();
console.log(cat1);
console.log(cat2);
*/


/**
 * 03 Properties and Methods in Constructor
 */

 /*
// Constructor Function
function ConCat() {
    this.color = "black";
    this.age = 1.5;
    this.weight = 2.3;
    this.run = function(){
        console.log("Cat is running...");
    }
    this.getColor = function() {
        return "Cat color is " + this.color;
    }
}

var cat1 = new ConCat();
var cat2 = new ConCat();
console.log(cat1);
console.log(cat2);
*/


/*
function Cat(name, color, age){
    this.color = color;
    this.age   = age;
    this.name  = name;
    this.run = function(steps) {
        console.log(this.name + " is Running... " + steps);
    }
    this.sleep = function(minutes) {
        console.log(this.name + " is Sleeping... " + minutes);
    }
}

var cat1 = new Cat("RedCat", "red", 1.2);
var cat2 = new Cat("Snow", "white", 2.5);

cat1.run(230);
cat2.sleep(60);

*/

/**
 * 05 Example of Objects Creation using Constructor
 */

function Student(name) {
    this.name = name;
    this.doExam = function() {
        this.score = Math.random()*100;
    }
    this.reportScore = function() {
        return this.score;
    }
}

var students = [];
for( var i=0; i<10; i++) {
    var s = new Student("Student-" + i);
    students.push(s);
}

for( var i=0; i<students.length; i++) {
    var s = students[i];
    s.doExam();
}

students.forEach(function(s) {
    var score = s.reportScore();
    console.log(s.name + " : " + score.toFixed(2));
});
