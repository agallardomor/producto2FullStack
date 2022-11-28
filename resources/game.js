const sock = io();


const getBoard = (canvas) => {
    const ctx = canvas.getContext('2d');
    const fillRect = (x, y, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 20, 20);
    }
    return {fillRect}
}

const getClickCoordinates = (element, ev) => {
    const{top, left} = element.getBoundingClientRect();
    const{ clientX, clientY} = ev;

    return {
        x: clientX - left, 
        y: clientY - top
    };


    
}




(() =>{
const canvas = document.querySelector('canvas');
const {fillRect} = getBoard(canvas);
const onClick = (e) => {
    const {x, y} = getClickCoordinates(canvas, e)
    fillRect(x, y, 'green');

}


fillRect(400,400,'green');
canvas.addEventListener('click', onClick);
})