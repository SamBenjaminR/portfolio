    // =========================
// DARK MODE + PERSISTENCE
// =========================

const toggle = document.getElementById("theme-toggle");

if (toggle) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        toggle.textContent = "☀️";
    }

    toggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            toggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            toggle.textContent = "🌙";
        }

    });

}


// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.pageYOffset > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.onclick = function () {

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    };

}


// =========================
// COPY EMAIL BUTTON
// =========================

const copyBtn = document.getElementById("copyEmail");

if (copyBtn) {

    copyBtn.addEventListener("click", () => {

        navigator.clipboard.writeText(
            "sambenjoshua@gmail.com"
        );

        copyBtn.innerText = "Copied ✓";

        setTimeout(() => {
            copyBtn.innerText = "Copy Email";
        }, 2000);

    });

}


// =========================
// SCROLL PROGRESS BAR
// =========================

window.addEventListener("scroll", () => {

    let scrollTop =
        document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar")
        .style.width = progress + "%";

});


// =========================
// SECTION REVEAL ANIMATION
// =========================

const sections =
document.querySelectorAll("section");

const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach((section) => {

    section.classList.add("hidden");
    observer.observe(section);

});


// =========================
// OPTIONAL: NAVBAR SHADOW
// =========================

const nav =
document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (!nav) return;

    if (window.scrollY > 50) {

        nav.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.08)";

    } else {

        nav.style.boxShadow = "none";

    }

});

if (topBtn) {
    if (window.pageYOffset > 300) {
        topBtn.classList.add("show-btn");
    } else {
        topBtn.classList.remove("show-btn");
    }
}


// const texts = [
    // "Java Developer",
    // "Software Engineer",
    // "Backend Devoloper",
    // "Problem Solver"
// ];

// let index = 0;
// let char = 0;

// function type(){

//     if(char < texts[index].length){

//         document.getElementById("typing").innerHTML +=
//         texts[index].charAt(char);

//         char++;

//         setTimeout(type,100);

//     }else{

//         setTimeout(erase,1500);

//     }
// }

// function erase(){

//     if(char > 0){

//         document.getElementById("typing").innerHTML =
//         texts[index].substring(0,char-1);

//         char--;

//         setTimeout(erase,50);

//     }else{

//         index++;

//         if(index >= texts.length){
//             index = 0;
//         }

//         setTimeout(type,300);
//     }
// }

// type();

const roles = [
     "Java Developer",
    "Software Engineer",
    "Backend Devoloper",
    "Problem Solver"
];

let roleIndex = 0;

const roleText =
document.getElementById("role-text");

setInterval(() => {

    roleText.style.opacity = "0";

    setTimeout(() => {

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

        roleText.textContent =
        roles[roleIndex];

        roleText.style.opacity = "1";

    }, 500);

}, 2500);

const navLinks =
document.querySelectorAll("nav a");

const allSections =
document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current = "";

    allSections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});


// =========================
// OPTIONAL: RESUME POPUP
// ========================

const resumeBtn =
document.getElementById("openResume");

const resumeModal =
document.getElementById("resumeModal");

const closeResume =
document.getElementById("closeResume");

if(
    resumeBtn &&
    resumeModal &&
    closeResume
){

    resumeBtn.addEventListener("click",()=>{

        resumeModal.style.display =
        "block";

    });

    closeResume.addEventListener("click",()=>{

        resumeModal.style.display =
        "none";

    });

}

// =========================
// LOADING SCREEN
// =========================

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 250);

    }, 250);

});

