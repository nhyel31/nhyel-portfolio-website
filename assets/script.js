/* ================================
   PROFESSIONAL ROLE SLIDESHOW
================================ */

const roles = ['Web Developer', 'Graphic Designer', 'Admin Specialist'];
const textElement = document.getElementById('typed');

if(textElement){

let currentIndex = 0;

function changeRole(){

textElement.style.opacity = "0";

setTimeout(()=>{

currentIndex = (currentIndex + 1) % roles.length;
textElement.textContent = roles[currentIndex];

textElement.style.opacity = "1";

},500);

}

textElement.style.transition = "opacity 0.5s ease-in-out";

setInterval(changeRole,3000);

}


/* ================================
   SMOOTH SCROLL
================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

if(target){
target.scrollIntoView({behavior:"smooth"});
}

});

});


/* ================================
   MOBILE MENU
================================ */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){

menuToggle.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});

}


/* ================================
   BACK TO TOP BUTTON
================================ */

const backToTop = document.getElementById("backToTop");

if(backToTop){

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){
backToTop.classList.add("show");
}else{
backToTop.classList.remove("show");
}

});

backToTop.addEventListener("click",()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
});

}


/* ================================
   SCROLL PROGRESS BAR
================================ */

const progressBar = document.getElementById("scroll-progress");

if(progressBar){

window.addEventListener("scroll",()=>{

const scrollTop = document.documentElement.scrollTop;
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const scrolled = (scrollTop / height) * 100;

progressBar.style.width = scrolled + "%";

});

}


/* ================================
   LOADER
================================ */

window.addEventListener("load",()=>{

const loader = document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.opacity = "0";

setTimeout(()=>{
loader.style.display = "none";
},500);

},500);

}

});


/* ================================
   SCROLL REVEAL
================================ */

if("IntersectionObserver" in window){

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{threshold:0.15});

document.querySelectorAll("section").forEach((el)=>{

el.classList.add("hidden");
observer.observe(el);

});

}
