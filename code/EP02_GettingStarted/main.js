
console.log("Hello, JS");

function generateData() {
    let rand_buffer = [];
    for(let i=0; i<10; i++) {
        rand_buffer[i] =   Math.random();
    }
    return rand_buffer;
}

function printData(data_array) {
    for(let i=0; i<data_array.length; i++) {
        console.log('data[' + i + ']: ' + data_array[i].toFixed(2));
    }
}

let data = generateData();
printData(data);
