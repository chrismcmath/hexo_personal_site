function Init() {
    InitAnimatedBackground();
    UpdateLoremPixelImage();
}

function UpdateLoremPixelImage() {
    var loremPixel = document.getElementById('lorempixel');
    loremPixel.src =
        'http://lorempixel.com/g/' + 
        background.width + 
        '/' +
        background.height + 
        '/' + 
        'abstract/';
}
