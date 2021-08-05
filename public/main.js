// Determines if the user has a set theme
function detectColorScheme() {
    //local storage is used to override OS theme settings
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "light"); // Default to light

        if (!window.matchMedia) {
            // matchMedia method not supported
            return false;
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            // OS theme setting detected as dark
            localStorage.setItem("theme", "dark");
        }
    }
}
detectColorScheme();

$(document).ready(function () {
    $("#send-mail").click(function () {
        var link =
            "mailto:kikelozano8@gmail.com" +
            "?subject=" +
            encodeURIComponent(document.getElementById("subject").value) +
            "&body=" +
            encodeURIComponent(document.getElementById("body").value);

        window.location.href = link;
    });

    // SCROLL UP BUTTON
    $("#scroll-up").click(function () {
        window.scrollTo(0, 0);
    });

    var oldValue = 0;
    window.addEventListener("scroll", function (e) {
        newValue = window.pageYOffset;

        if (oldValue - newValue < 0) {
            $("#scroll-up").show("fast", function () {
                // Animation complete.
            });
        } else if (oldValue - newValue > 0) {
            $("#scroll-up").hide("fast", function () {
                // Animation complete.
            });
        }

        // Update the old value
        oldValue = newValue;
    });

    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20 && localStorage.getItem("theme") == "light") {
            $(".navbar").addClass("nav-on-scroll");
        } else {
            $(".navbar").removeClass("nav-on-scroll");
        }
    });

    // DARK MODE
    if (localStorage.getItem("theme") == "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        $(".dark-mode-icon").attr("src", "icons/sun.svg");
    } else if (localStorage.getItem("theme") == "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        $(".dark-mode-icon").attr("src", "icons/moon.svg");
    }
    $(".dark-mode-icon").click(function () {
        if (localStorage.getItem("theme") == "dark") {
            localStorage.setItem("theme", "light");
            document.documentElement.setAttribute("data-theme", "light");
            $(".dark-mode-icon").attr("src", "icons/moon.svg");
        } else {
            localStorage.setItem("theme", "dark");
            document.documentElement.setAttribute("data-theme", "dark");
            $(".dark-mode-icon").attr("src", "icons/sun.svg");
        }
    });

    // CHANGE BETWEEN TABS IN QUALIFICATION
    $("#education-button").click(function () {
        $(".qualification-button").removeClass("qualification-active");
        $("#education-button").addClass("qualification-active");

        $(".qualification-content").removeClass("qualification-active");
        $("#education").addClass("qualification-active");
    });

    $("#work-button").click(function () {
        $(".qualification-button").removeClass("qualification-active");
        $("#work-button").addClass("qualification-active");

        $(".qualification-content").removeClass("qualification-active");
        $("#work").addClass("qualification-active");
    });

    $(".icon-menu").click(function () {
        console.log("HOLA");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Computer Scientist and Engineer", "Web Developer", "App Devoloper", "Data Analyst"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});
