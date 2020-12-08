'use strict';

function DomElement(selector, width, height, bg, fontSize, text){
    this.newElement = function(){
        let div = document.createElement('div');
        div.textContent = 'hello';
        document.querySelector('body').append(div);
        if(selector === '.'){
            div.classList.add('block');
        } else if(selector === '#') {
            div.id = 'best';
        }
        div.textContent = text;
        div.style.width = width;
        div.style.height = height;
        div.style.background = bg;
        div.style.fontSize = fontSize;
    }

}

let obj = new DomElement('#', '200px', '200px', 'red', '25px', 'Hello world');

obj.newElement();
// git remote add origin https://github.com/Yuliya-1102/GloAcademy_lesson14.git