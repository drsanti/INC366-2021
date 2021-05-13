
function generateData() {
    let data = [];
    for(let i=0; i<10; i++) {
        data[i] = Math.random();
    }
    return data;
}

function printData(data) {
    for(let i=0; i<data.length; i++) {
        console.log(data[i]);
    }
}


let data = generateData();
printData(data);
