$(document).ready(function() {

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
        $("html").css("background-color", "#101010");
        $("*").not("a").css("color", "white");
        $("a").css("color", "rgb(0, 255, 85)");
        $("*").not("button").not("input[type=submit]").css("text-shadow", "2px 2px 2px black");
        $("input[type=submit]").css("color", "black");
        $("input[type=submit]").css("background-color", "white");
        $("input[type=text]").css("background-color", "white");
        $("input[type=text]").css("border-color", "white");
        $("input[type=text]").css("color", "black");
        $("input[type=text]").css("text-shadow", "none");
    } else {
        $("html").css("background-color", "rgb(230, 230, 230)");
        $("*").not("a").not("input[type=text]").css("color", "black");
        $("a").css("color", "rgb(0, 60, 20)");
        $("*").not("button").css("text-shadow", "none");
        $("input[type=submit]").css("color", "white");
        $("input[type=submit]").css("background-color", "#101010");
        $("input[type=text]").css("border-color", "#101010");
        $("input[type=text]").css("color", "white");
        $("input[type=text]").css("text-shadow", "none");
    }

})
