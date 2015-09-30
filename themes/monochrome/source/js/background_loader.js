function Init() {
    background = document.getElementById('background');
    background.src =
        'http://lorempixel.com/g/' + 
        background.width + 
        '/' +
        background.height + 
        '/' + 
        'abstract/';
}

function Easel() {
    stage = new createjs.Stage("background");
    circle = new createjs.Shape();

    UpdateDimensions();

    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);

    stage.update();
}

function UpdatePicture() {
}

function UpdateDimensions() {
    stage.canvas.width = window.innerWidth;
    stage.canvas.height = window.innerHeight;
}