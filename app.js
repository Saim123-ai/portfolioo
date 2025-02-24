gsap.registerPlugin(ScrollTrigger);

const ball = document.querySelector(".ball");
const dot = document.querySelector(".dot");
document.addEventListener("mousemove", (e) => {
  gsap.to(".ball", {
    left: e.x - 200 + "px",
    top: e.y - 200 + "px",
    duration: 1,
    ease: "power2.out",
    // ease: "power2.inOut" // you can change the easing function as per your requirement
  });

  gsap.to(".dot", {
    left: e.x - 10 + "px",
    top: e.y - 10 + "px",
    duration: 1.3,
    ease: "power2.out",
    // ease: "power2.inOut" // you can change the easing function as per your requirement
  });
});

// 🔥 Navbar Drop-In
gsap.from("nav", {
  y: -150,
  duration: 1.5,
  opacity: 0,
  delay:3,
  ease: "elastic.out(1, 0.5)",
});

// 🔥 Hero Section (More Dynamic)
gsap.from(".main-preview-content h1", {
  opacity: 0,
  duration: 2,
  delay:2,
  ease: "power3.out",
});

gsap.from(".main-preview-content p", {
  x:-250,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
  delay: 2,
});

gsap.from(".main-preview-img img", {
  opacity: 0,
  rotateY: 180,
  scale: 0.5,
  clipPath: "inset(50% 50% 50% 50%)",
  duration: 1.8,
  ease: "back.out(2)",
  delay: 2,
});

// 🔥 Skill Section Animation (More Stylish)
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#skill",
    start: "top 70%",
    end: "30% 60%",
    scrub: 3,
  },
});

tl.from(".skill .skill-box", {
  y: 120,
  opacity: 0,
  duration: 1,
  skewX: 10,
  rotate: -5,
  stagger: 0.4,
  ease: "power2.out",
});

// 🔥 Project Section (Wave-Like Entrance)
gsap.from("#project .project-1", {
  x: -150, opacity: 0, duration: 2,
  rotate: -10, skewY: 5,
  ease: "power3.out",
  scrollTrigger: { trigger: "#project", start: "top 80%", end: "35% 50%", scrub: 2 }
});

gsap.from("#project .project-2", {
  y: 150, opacity: 0, duration: 2,
  rotate: 5, skewX: 8,
  ease: "power3.out",
  scrollTrigger: { trigger: "#project", start: "top 80%", end: "35% 50%", scrub: 2 }
});

gsap.from("#project .project-3", {
  x: 150, opacity: 0, duration: 2,
  rotate: 10, skewY: -5,
  ease: "power3.out",
  scrollTrigger: { trigger: "#project", start: "top 80%", end: "35% 50%", scrub: 2 }
});



const loader = document.querySelector(".loader")
setTimeout(function(){
  loader.style.top= "-100%";
},6500)


var typed = new Typed("#typed-text", {
  strings: ["Welcome to My Digital Showcase . My Work, My Passion"],
  typeSpeed: 70,  // Typing speed
  backSpeed: 50,  // Backspacing speed
  
});


const closeMenuBtn = document.querySelector(".close-icon"); 
const openMenuBtn = document.querySelector(".fa-bars"); 
const menuDiv = document.querySelector(".menu-div");
const menuLinks = document.querySelectorAll(".menu-div a"); // Select all links inside menu

openMenuBtn.addEventListener("click", () => {  
    menuDiv.classList.add("show"); // Show the menu
});

closeMenuBtn.addEventListener("click", () => {  
    menuDiv.classList.remove("show"); // Hide the menu
});

// Close menu when any link is clicked
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuDiv.classList.remove("show"); // Hide menu
    });
});
