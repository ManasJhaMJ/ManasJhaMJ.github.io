/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function theme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

VanillaTilt.init(document.querySelectorAll(".glassmorphic-card"), {
    max: 5,
    speed: 100,
    glare: true,
    "max-glare": 0.5,
});

VanillaTilt.init(document.querySelectorAll(".glassmorphic-card-mobile"), {
    max: 5,
    speed: 100,
    glare: true,
    "max-glare": 0.5,
});

ScrollReveal().reveal('.reveal', { delay: 400 });

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("nav").style.padding = "0.5rem 0rem";
        document.querySelector(".logo").style.height = "40px";
        document.querySelector(".logo").style.width = "40px";
        document.querySelector(".resume-btn").style.padding = "8px 12px";
        document.querySelector(".resume-btn").style.fontSize = "13px";

    } else {
        document.querySelector("nav").style.padding = "0.2rem 0rem";
        document.querySelector(".logo").style.height = "60px";
        document.querySelector(".logo").style.width = "60px";
        document.querySelector(".resume-btn").style.padding = "12px";
        document.querySelector(".resume-btn").style.fontSize = "16px";
    }
}

window.onscroll = function () { scrollFunction() };
