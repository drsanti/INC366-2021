
const output = document.getElementById("output");

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        output.innerHTML = xhttp.responseText
    }
}

/** 1 */
// function adc_request(i) {
//     console.log("id: " + i);
//     xhttp.open("GET", "adc" + i, true);
//     xhttp.send();
// }

for(let i=0; i<4; i++) {
    document.getElementById("btn_adc" + i).addEventListener("click", ()=>{
        /** 1 */
        //adc_request(i);

        /** 2 */
        console.log("id: " + i);
        xhttp.open("GET", "adc" + i, true);
        xhttp.send();
    });
}
