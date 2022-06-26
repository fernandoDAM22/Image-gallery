/*Variables*/
const selectedImg = document.getElementById("selected-img");
const images = document.querySelectorAll(".gallery-img");
const box = document.getElementById("container");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("previous");
const btnClose = document.getElementById("close");
let index = 0;
/*Assing the eventListener to the images */
images.forEach(element => {
    element.addEventListener("click",open,false);
});
/*Assing the eventListener to the close button, in this case we use an anonymous function 
because the operation is very simple */
btnClose.addEventListener("click",()=>{
    box.style.display = 'none';
});
/**This function allows us open the selected image */
function open(e){
    box.style.display = 'flex';
    selectedImg.src = e.target.src;
    index = Array.from(images).indexOf(e.target);
}
/*Assing the eventListener to the next button */
btnNext.addEventListener("click",next);
/**This function allows us go to the next image */
function next(){
    if(index === images.length - 1){
        index = -1;
    }
    selectedImg.src = images[index + 1].src;
    index++;
}
/*Assing the eventListener to the previus button */
btnPrev.addEventListener("click",previous);
/**This function allows us go to the previous image */
function previous(){
    if(index === 0){
        index = images.length;
    } 
    selectedImg.src = images[index - 1].src;
    index--;
}
