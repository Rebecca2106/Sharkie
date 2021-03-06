let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    // console.log('My Character is', world.character)
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 38) {
        // console.log('up arrow pressed')
        keyboard.Up = true;
    } else if (e.keyCode == 40) {
        // console.log('down arrow pressed')
        keyboard.Down = true;
    } else if (e.keyCode == 37) {
        // console.log('left arrow pressed')
        keyboard.Left = true;
    } else if (e.keyCode == 39) {
        // console.log('right arrow pressed')
        keyboard.Right = true;
    } else if (e.keyCode == 32) {
        // console.log('space pressed')
        keyboard.Space = true;
    } else if (e.keyCode == 68) {
        keyboard.D = true;
        // console.log('D pressed')
    } else if (e.keyCode == 66) {
        keyboard.B = true;
        // console.log('B pressed')
    }


});
window.addEventListener("keyup", (e) => {
    keyboard.lastMove = new Date().getTime();
    if (e.keyCode == 38) {
        // console.log('up arrow not longer pressed')
        keyboard.Up = false;
    } else if (e.keyCode == 40) {
        // console.log('down arrow not longer pressed')
        keyboard.Down = false;
    } else if (e.keyCode == 37) {
        // console.log('left arrow not longer pressed')
        keyboard.Left = false;
    } else if (e.keyCode == 39) {
        // console.log('right arrow not longer pressed')
        keyboard.Right = false;
    } else if (e.keyCode == 32) {
        // console.log('space not longer pressed')
        keyboard.Space = false;
    } else if (e.keyCode == 68) {
        keyboard.D = false;
        // console.log('D not longer pressed')
    } else if (e.keyCode == 66) {
        keyboard.B = false;
        // console.log('B not longer pressed')
    }
});


