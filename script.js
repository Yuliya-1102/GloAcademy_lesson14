'use strict';

function DomElement(width, height, bg, position){
    this.newElement = function(){
        let element  = document.createElement('div');
        element.classList.add('square');
        document.querySelector('body').append(element);
        element.style.width = width;
        element.style.height = height;
        element.style.background = bg;
        element.style.position = position;
    };
}

let obj = new DomElement('100px', '100px', 'red', 'absolute');
document.addEventListener("DOMContentLoaded", obj.newElement());

let square = document.querySelector('.square');
let styleSquare = document.querySelector('.square').style;

let keyBottomTop = 10;
let keyLeftRight = 10;

document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowUp'){
        keyBottomTop -= 10;
        styleSquare.top = keyBottomTop + "px";
    } else if(event.key === 'ArrowDown'){
        keyBottomTop += 10;
        styleSquare.top = keyBottomTop + "px";
    } else if(event.key === 'ArrowRight'){
        keyLeftRight += 10;
        styleSquare.left = keyLeftRight + "px";
    } else if(event.key === 'ArrowLeft'){
        keyLeftRight -= 10;
        styleSquare.left = keyLeftRight + "px";
    }
});