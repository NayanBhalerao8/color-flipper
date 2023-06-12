// initialising the count
let count = 0;
// for hex coloer change
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener("click",function(e){
    const styles = e.currentTarget.classList;
    let hexColor = "#"
    if (styles.contains("decrease")){
        count--;
    }
    else if(styles.contains("increase")){
        count++;
    }
    else{
        count =0;
    }
    value.textContent = count;
    let hexcolor = "#";
    for(let i=0;i<6;i++){
        hexcolor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexcolor;
    })
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length );
}