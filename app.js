// Select container
const contextMenu = document.querySelector(".container");
// Select share sub-menu
const subMenu = document.querySelector(".share-menu")

// Right click event listener
document.addEventListener("contextmenu" , (event)=>{
    event.preventDefault();

    // Variables
    let x = event.offsetX;
    let y = event.offsetY;
    let winWidth = window.innerWidth; // Width of window
    let winHeight = window.innerHeight; // Height of window
    let cmWidth = contextMenu.offsetWidth; // Width of context menu
    let cmHeight = contextMenu.offsetHeight; // Width of context menu

    // If structure for X axis
    x = x > winWidth - cmWidth ? winWidth - cmWidth : x
    // If structure for Y axis
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y

    // If structure for sub-menu
    if(x > (winWidth - cmWidth - subMenu.offsetWidth)){
        subMenu.style.left = "-170px";
    }
    else{
        subMenu.style.left = "170px";
    }

    // Set the location of menu
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;


    contextMenu.style.visibility = "visible";
})

// Hide the menu by user's click
document.addEventListener("click" , ()=>{
    contextMenu.style.visibility = "hidden";
})