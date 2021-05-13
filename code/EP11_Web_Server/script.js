
// console.log('Hello JavaScript');
// alert('Hello JavaScript');

let output = document.getElementById('counter');

let counter = 0;
setInterval(()=>{
    output.innerHTML = `Counter: ${++counter}`; //'Counter: ' + ++counter;
}, 500);
