const pre = document.querySelector("pre");
//const pre = document.getElementById("pre");

document.addEventListener('mousemove', (e) => {
    rotateElement(e, pre);
});

function rotateElement (event, element) {
    const x = event.clientX;
    const y = event.clientY;
    //console.log(x, y);

    // find the page middle
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // get offset from middle
    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;
    console.log(offsetX, offsetY);

    element.style.setProperty("--rotateX", -offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
};