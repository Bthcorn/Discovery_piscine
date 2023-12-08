var balloon = document.getElementById('myBalloon');
var maxSize = 420;
var currentSize = 200;
var color = ['red', 'green', 'blue'];
var colorIndex = 0;

function whenClick() {
    if (currentSize < maxSize) {
        currentSize += 10;
        balloon.style.width = currentSize + 'px';
        balloon.style.height = currentSize + 'px';
        balloon.style.backgroundColor = color[colorIndex];
        colorIndex = (colorIndex + 1) % color.length;
    } else {
        currentSize = 200;
        balloon.style.width = currentSize + 'px';
        balloon.style.height = currentSize + 'px';
        balloon.style.backgroundColor = 'red';
        colorIndex = 0;
    }
}

function whenMouseEnter() {
    currentSize -= 5;
    if (currentSize > 200) {
        balloon.style.width = currentSize + 'px';
        balloon.style.height = currentSize + 'px';
        colorIndex = (colorIndex - 1 + color.length) % color.length;
        balloon.style.backgroundColor = color[colorIndex];
    }
}

function whenMouseLeave() { 
    currentSize -= 5;
    if (currentSize > 200) {
        balloon.style.width = currentSize + 'px';
        balloon.style.height = currentSize + 'px';
        colorIndex = (colorIndex - 1 + color.length) % color.length;
        balloon.style.backgroundColor = color[colorIndex];
    }
}