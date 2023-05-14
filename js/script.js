'use strict';
const toTop = document.querySelector('.to-top');
console.log(toTop)
window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 400){
        toTop.classList.add('active');
    }else{
        toTop.classList.remove('active');
    }
});