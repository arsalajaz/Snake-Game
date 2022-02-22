let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');
let snake = [{
    x: 0,
    y: 0,
}]

let x = 0;
let y = 0;
let velocity = 5;
let switchSides = 'left';


document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowDown':
            switchSides = 'down'
            break;
        case 'ArrowUp':
            switchSides = 'up'
            break;
        case 'ArrowLeft':
            switchSides = 'left'
            break;
        case 'ArrowRight':
            switchSides = 'right'
            break;
        default:
            break;
    }
    console.log(switchSides);
})



function animate() {
    
    ctx.clearRect(x,y,50,50);

    if(x < 0) {
        switchSides = 'right';
    } else if(x == 950) {
        switchSides = 'left'
    } else if(y < 0) {
        switchSides = 'down'
    } else if(y == 450) {
        switchSides = 'up'
    }

    if(switchSides == 'left') {
        x -= velocity;
    } else if(switchSides == 'right') {
        x += velocity;
    } else if(switchSides == 'up') {
        y-= velocity;
    } else if(switchSides == 'down') {
        y += velocity;
    }
  
    

    ctx.fillRect(x, y, 50, 50);

    
    
    requestAnimationFrame(animate);
}

animate();
