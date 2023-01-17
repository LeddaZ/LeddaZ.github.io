$(document).ready(function() {
    
    let hour = new Date().getHours();
    console.log(hour);
    if (hour >= 0 && hour < 6)
        $("#title").html("Good night");
    else if (hour >= 6 && hour < 12)
        $("#title").html("Good morning");
    else if (hour >= 12 && hour < 18)
        $("#title").html("Good afternoon");
    else if (hour >= 18 && hour <= 23)
        $("#title").html("Good evening");
    
})
