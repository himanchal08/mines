const boxes = document.querySelectorAll(".gem");
const cashout = document.querySelector("#cash");

boxes.forEach(gem => {
    gem.addEventListener("click", () => {
        gem.style.backgroundColor = "green";
    });
    
});
function randomizeGemColor() {
    let ran = random(number);
    boxes[ran].style.backgroundColor = "red"; 
    
}

cashout.addEventListener("click", ()=>{
    alert("WON $281")
    boxes.forEach(gem => {
        gem.style.backgroundColor = "#606676"; 
    });
    randomizeGemColor();
});
let number = boxes.length;
function random(number) {
    const result = Math.floor((Math.random()*number));
    return result;
}
