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
    max: 12,
    speed: 200,
    glare: true,
    "max-glare": 0.5,
});

VanillaTilt.init(document.querySelectorAll(".glassmorphic-card-mobile"), {
    max: 20,
    speed: 200,
    glare: true,
    "max-glare": 0.7,
});