function Init() {
    InitAnimatedBackground();
    UpdateLoremPixelImage();
}

function UpdateLoremPixelImage() {
    var loremPixel = document.getElementById('lorempixel');
    loremPixel.src =
        'http://lorempixel.com/g/' + 
        loremPixel.width + 
        '/' +
        loremPixel.height + 
        '/' + 
        'abstract/';
}
