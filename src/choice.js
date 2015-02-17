/**
 * Created by FERRAND on 04/02/2015.
 */

function changePixelSize(){
    PIXEL_SIZE = $('#pixelSize').val();
    GRID_WIDTH = Math.floor(canvas.width/PIXEL_SIZE);
    GRID_HEIGHT = Math.floor(canvas.height/PIXEL_SIZE);
    initialiserGrille();
    resetCanvas();
}