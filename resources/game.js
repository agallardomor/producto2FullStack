const sock = io();


const getBoard = (canvas, numCells = 20) => {

    const ctx = canvas.getContext('2d');

    const cellSize = Math.floor(canvas.width/numCells);

    const fillCell = (x, y, color) => {
        ctx.fillStyle = color;
        ctx.fillCell(x*cellSize, y*cellSize, cellSize, ce);
    }

    const drawGrid = () => {
        ctx.strokeStyle = '#333';
        ctx.beginPath();

        for(let i = 0; i < numCells + 1; i++){
           ctx.moveTo(i*cellSize, 0);
           ctx.lineTo(i*cellSize, cellSize*numCells); 

           ctx.moveTo(0, i*cellSize );
           ctx.lineTo(cellSize*numCells, i*cellSize ); 
        }
        
        ctx.stroke();


    }

    const clear = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const renderBoard = (board = []) => {
        board.forEach((row, y) => {
          row.forEach((color, x) => {
            color && fillCell(x, y, color);
          });
        });
      };

    const reset =(board) =>{
        clear();
        drawGrid();
        renderBoard(board)
    }

    const getCellCoordinates = (x, y) =>{
        return{
            x: Math.floor(x/cellSize),
            y: Math.floor(y/cellSize)
        };

    };




    return {fillCell, reset, getCellCoordinates}
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

const {fillCell, reset, getCellCoordinates} = getBoard(canvas);

const onClick = (e) => {
    const {x, y} = getClickCoordinates(canvas, e);
    sock.emit('turn', getCellCoordinates(x, y));
    
};


sock.on('board', reset);
sock.on('turn', ({x, y, color}) => fillCell(x, y, color));


fillRect(400,400,'green');
canvas.addEventListener('click', onClick);
})