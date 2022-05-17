let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);


    console.log('My Character is', world.character)
}

window.addEventListener("keydown", (e) => {
    e = e || window.event;
    if (e.keyCode === 38) {
        console.log('up arrow pressed')
        Keyboard.Up = true;
    } else if (e.keyCode === 40) {
        console.log('down arrow pressed')
        Keyboard.Down = true;
    } else if (e.keyCode === 37) {
        console.log('left arrow pressed')
        Keyboard.Left = true;
    } else if (e.keyCode === 39) {
        console.log('right arrow pressed')
        Keyboard.Right = true;
    }
});
window.addEventListener("keyup", (e) => {
    e = e || window.event;
    if (e.keyCode === 38) {
        console.log('up arrow not longer pressed')
        Keyboard.Up = false;
    } else if (e.keyCode === 40) {
        console.log('down arrow not longer pressed')
        Keyboard.Down = false;
    } else if (e.keyCode === 37) {
        console.log('left arrow not longer pressed')
        Keyboard.Left = false;
    } else if (e.keyCode === 39) {
        console.log('right arrow not longer pressed')
        Keyboard.Right = false;
    }
});


