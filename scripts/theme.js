$(document).ready(function () {

    const assetsPathDark = "./assets/logos/dark/";
    const assetsPathLight = "./assets/logos/light/";
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    const logos = ["github", "instagram", "telegram", "twitter", "youtube"];

    if (darkThemeMq.matches) {
        $("html").css("background-color", "#101010");
        $("*").not("a").css("color", "white");
        $("a").css("color", "rgb(0, 255, 85)");
        $("*").css("text-shadow", "2px 2px 2px black");
        for (let i = 0; i < logos.length; i++) {
            $('img[src="' + assetsPathLight + logos[i] + ".svg" + '"]').attr('src', assetsPathDark + logos[i] + ".svg");
        }
        $("img").css("filter", "drop-shadow(3px 3px 3px black)");
    } else {
        $("html").css("background-color", "rgb(230, 230, 230)");
        $("*").not("a").css("color", "black");
        $("a").css("color", "rgb(0, 60, 20)");
        $("*").css("text-shadow", "none");
        for (let i = 0; i < logos.length; i++) {
            $('img[src="' + assetsPathDark + logos[i] + ".svg" + '"]').attr('src', assetsPathLight + logos[i] + ".svg");
        }
        $("img").css("filter", "none");
    }

})
