
//hamburger menu
console.log("Hello!");
const hamburger=document.getElementById('hamburger-button');
const nav=document.querySelector('.nav');

hamburger.addEventListener('click', function(){
    console.log('open hamburger');
    if(hamburger.classList.contains('open')){
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    }
    else{
        hamburger.classList.add('open');
        nav.classList.add('open');
    }
});

