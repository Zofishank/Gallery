const scrollContainer = document.querySelector(".gallery");
const back_btn = document.querySelector(".back_btn");
const next_btn = document.querySelector(".next_btn");

scrollContainer.addEventListener("wheel",(e)=>{
    e.preventDefault();
    console.log("e.target");
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "auto";


})

next_btn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})

back_btn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})