// Main Variables
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const imgsContainer = document.querySelector(".slider__img-row");
const imgsArr = Array.from(document.querySelectorAll('.slider__img-row picture'));
const textContainer = document.querySelector(".slider__text-row");
const textArr = Array.from(document.querySelectorAll('.slider__text-item'));
let currentImg = 1;

const menuBtn = document.querySelector(".menu-icon");
const navElement = document.querySelector(".main-nav");
menuBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(navElement.classList.contains("main-nav--active")){
        menuBtn.querySelector("img").setAttribute("src", "./images/icon-hamburger.svg");
    }else{
        menuBtn.querySelector("img").setAttribute("src", "./images/icon-close.svg");
    }
    navElement.classList.toggle("main-nav--active");
    document.querySelector(".overlay").classList.toggle("overlay--active");
});
// let currentText = 1;

function slideToNext(imgEle, imgs, textEle, d){
    if(currentImg < imgs.length ){
        imgEle.style.transform = `translateX(calc(${currentImg} * -${d}px))`;
        textEle.style.transform = `translateX(calc(${currentImg} * -100%))`;
        currentImg++;
    }
}
function slideToPrev(imgEle, textEle, d){
    if(currentImg > 1 ){
        imgEle.style.transform = `translateX(calc(${currentImg - 2} * -${d}px))`;
        textEle.style.transform = `translateX(calc(${currentImg - 2} * -100%))`;
        currentImg--;
    }
}
// Begin Main Events
nextBtn.addEventListener("click", function(e){
    e.preventDefault();
    slideToNext(imgsContainer, imgsArr, textContainer, imgsContainer.querySelector("picture").clientWidth);
});
prevBtn.addEventListener("click", function(e){
    e.preventDefault();
    slideToPrev(imgsContainer, textContainer, imgsContainer.querySelector("picture").clientWidth);
});