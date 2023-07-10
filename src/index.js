import './less/index.less'

// Your code goes here!
/**
 * 
 *  Create listeners of 10 types of events
 * * such as: 
 *  [x] `mouseover` [x] `mouseout` [x]`click` [x]`copy`
  * [x] `keydown` [x]`keyup`
  * [ ] `wheel`
  * [ ] `load`
  * [ ] `focus`
  * [ ] `resize`
  * [x] `scroll`
  * [ ] `select`
  * [x] `dblclick`
  * [x] `drag / drop`
  * 
  * Use preventDefault

* [ ] Find a usecase for preventDefault. For example, you could prevent a 
link from navigating when clicked, or to navigate somewhere surprising.
 */


const busImage = document.querySelector('.intro img');
busImage.addEventListener('mouseover', event => {
    busImage.style.filter = "invert(100%)";
    
})

busImage.addEventListener('mouseout', event => {
    busImage.style.filter = ""
})

const anotherPic = document.querySelector('.content-destination img')
anotherPic.addEventListener('mouseover', event => {
    anotherPic.style.filter = "invert(100%)";
    
})

anotherPic.addEventListener('mouseout', event => {
    anotherPic.style.filter = ""
})

const buttonList = document.querySelectorAll('.btn')
buttonList[0].addEventListener('click', event => {
    buttonList[0].style.backgroundColor = 'hotPink';
})
buttonList[1].addEventListener('click', event => {
    buttonList[1].style.backgroundColor = 'hotPink';
})
buttonList[2].addEventListener('click', event => {
    buttonList[2].style.backgroundColor = 'hotPink';
})

const navBarItem = document.querySelectorAll('.nav-link')
navBarItem[0].addEventListener('dblclick', event => {
    alert("Please wait. Page Under Construction");
    event.preventDefault();
})
navBarItem[1].addEventListener('dblclick', event => {
    alert("Please wait. Page Under Construction");
    event.preventDefault();
})
navBarItem[2].addEventListener('dblclick', event => {
    alert("Please wait. Page Under Construction");
    event.preventDefault();
})
navBarItem[3].addEventListener('dblclick', event => {
    alert("Contact Not Available");
    event.preventDefault();
})

document.addEventListener("copy", event => {
    alert("this page is Copyrighted--use content at own risk");
 })      


 document.addEventListener("keydown", event => {
    if(event.keyCode === 70) {
        document.body.style.backgroundColor = 'hotPink'
    }
 })

document.addEventListener("keyup", event => {
    if(event.keyCode === 74){
        document.body.style.backgroundColor = 'yellow'
    }
})

 const imageMap = document.querySelector('.content-section .img-content img');
 const imageVenice = document.querySelector('.inverse-content .img-content img');

 imageVenice.addEventListener("drag", event => {
    imageVenice.style.filter = "invert(100%)"
 })


 
 document.addEventListener("wheel", event => {
    document.body.style.color = 'teal'; 
    document.body.style.textShadow = "5px 5px 1px #ff0000";
 })

 document.addEventListener("scroll", event => {
    document.body.style.color = ""; 
    document.body.style.textShadow = "";
})