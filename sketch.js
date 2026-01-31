// Get references to canvas and its 2D drawing context
const canvas =document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const changeColor =document.getElementById("color");
const numberSize = document.getElementById("numberSize");
const backColor =document.getElementById("backColor");
const resetButton = document.getElementById("resetButton");
const reloadButton =document.getElementById("reloadButton");
const popupContainer = document.getElementById("popupContainer");
const popupButton = document.getElementById("popupButton");

// Function to draw a filled circle (dot) at given coordinates
function circleDot(x, y, color,size ){
ctx.beginPath();
ctx.arc(x, y, size, 0, Math.PI*2);
ctx.fillStyle = color;
ctx.fill();
};
// Draw a circle when the user clicks on the canvas
canvas.addEventListener("click", (event)=>{
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const colorSelect = changeColor.value;
    const chosenSize =Number(numberSize.value);

   circleDot(mouseX,mouseY,colorSelect,chosenSize);
});

// Change canvas border color when color picker changes
changeColor.addEventListener("change", ()=>{
    canvas.style.borderColor = changeColor.value;
});

// Change canvas background color when background picker changes
backColor.addEventListener("change", ()=>{
    canvas.style.backgroundColor = backColor.value;
});

// Initialize background color
 canvas.style.backgroundColor = backColor.value;

// Enable freehand drawing with mouse drag
let drawing = false;
     canvas.addEventListener("mousedown", ()=>{
 drawing = true;
});
     canvas.addEventListener("mouseup",()=>{
 drawing = false;
});

// Draw circles continuously while mouse moves and drawing is true
     canvas.addEventListener("mousemove", (event)=>{
 if(drawing){
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const colorSelect = changeColor.value;
    const chosenSize =Number( numberSize.value);
    
    circleDot(mouseX, mouseY, colorSelect, chosenSize);
 }
});
// Reset button clears canvas and restores background color
resetButton.addEventListener("click", ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.backgroundColor = backColor.value;
});
// Reload button refreshes the entire page
reloadButton.addEventListener("click", ()=>{
    location.reload();
});





