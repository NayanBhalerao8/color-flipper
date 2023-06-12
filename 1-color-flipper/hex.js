// this are all hexadecimal digits
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
// example of hex color
// f15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = "#"
    // for setting the next five values of the hex code 
    for (let i=0; i<6; i++){
        // the below line will append the generated number to the hex color
        // for example first iteration will create #0
        // second ietaration will create #02
        // third will create #024
        // fourth will create #0245
        // fith will create #02457

        hexColor += hex[getRandomNumber()];
        console.log(hexColor);
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});


function getRandomNumber(){
    // multiplying with hex.length so that the numbers
   return Math.floor(Math.random() * hex.length);
}