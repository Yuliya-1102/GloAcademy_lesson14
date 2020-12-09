'use strict';

function DomElement(selector, width, height, bg, fontSize, text){
    this.newElement = function(){
       let element;
       if(selector[0] === '.'){
            element = document.createElement('div');
            element.classList.add(selector.slice(1));
            document.querySelector('body').append(element);
        } else if(selector[0] === '#'){
            element = document.createElement('p');
            element.id = selector.slice(1);
            document.querySelector('body').append(element);
        }
        element.textContent = text;
        element.style.width = width;
        element.style.height = height;
        element.style.background = bg;
        element.style.fontSize = fontSize;
    };
}

let obj = new DomElement('.block', '200px', '200px', 'red', '25px', 'Hello world');
let obj2 = new DomElement('#paragraph', '200px', '200px', 'yellow', '25px', 'Hello syn');

obj.newElement();
obj2.newElement();
// git remote add origin https://github.com/Yuliya-1102/GloAcademy_lesson14.git