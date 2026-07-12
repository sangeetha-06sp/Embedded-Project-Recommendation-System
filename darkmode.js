/* ==========================================
   EMBEDCRAFT - DARKMODE.JS
========================================== */

// Load saved theme when page opens
window.onload = function () {

    let savedTheme = localStorage.getItem("theme");

    if (savedTheme) {

        document.body.classList.add(savedTheme);

    } else {

        document.body.classList.add("dark-mode");

    }

};

// Toggle Theme
function toggleTheme() {

    if (document.body.classList.contains("dark-mode")) {

        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");

        localStorage.setItem("theme", "light-mode");

        document.getElementById("theme-btn").innerHTML =
            '<i class="bi bi-sun-fill"></i>';

    }

    else {

        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");

        localStorage.setItem("theme", "dark-mode");

        document.getElementById("theme-btn").innerHTML =
            '<i class="bi bi-moon-stars-fill"></i>';

    }

}