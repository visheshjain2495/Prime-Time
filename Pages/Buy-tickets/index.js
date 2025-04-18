var numberOfTickets = 0;

$(".buy-btn").click(function() {
    $(this).closest('#morning-evening').hide();
});

$("#morning-buy").click(function() {
    $("#morning-show").removeClass("hidden").hide().fadeIn(400);
});

$("#evening-buy").click(function() {
    $("#evening-show").removeClass("hidden").hide().fadeIn(400);
});

$(".movie-back-btn-evening").click(()=>{
    $("#evening-show").addClass("hidden").show().fadeOut(400);
    setTimeout(()=>{
        $("#morning-evening").fadeIn(400);
    },400);    
});

$(".movie-back-btn-morning").click(()=>{
    $("#morning-show").addClass("hidden").show().fadeOut(400);
    setTimeout(()=>{
        $("#morning-evening").fadeIn(400);
    },400);    
});

$(".TheRedDress").click(()=>{
    window.open("https://youtu.be/oWchYG1ebO0?si=j0K2cKbSsXkQtMdF","_blank");
});

$(".Balanchine").click(()=>{
    window.open("https://youtu.be/fen7PUat34U?si=r84Ppl1HJ0r0E__S","_blank");
});

$("#evening-checkout-btn").click(()=>{
    $("#evening-show").addClass("hidden").show().fadeOut(400);
    $("#evening-checkout").removeClass("hidden").hide().fadeIn(400);
});

$(".evening-checkout-back-btn").click(()=>{
    $("#evening-checkout").addClass("hidden").show().fadeOut(400);
    setTimeout(()=>{
        $("#evening-show").fadeIn(400);
    },400);    
});

$("#morning-checkout-btn").click(()=>{
    $("#morning-show").addClass("hidden").show().fadeOut(400);
    $("#morning-checkout").removeClass("hidden").hide().fadeIn(400);
});

$(".morning-checkout-back-btn").click(()=>{
    $("#morning-checkout").addClass("hidden").show().fadeOut(400);
    setTimeout(()=>{
        $("#morning-show").fadeIn(400);
    },400);    
});

$(".person").on("click", function () {
    $(".person").removeClass("current-sel").removeAttr("data-selected");
    $(this).addClass("current-sel").attr("data-selected", "true");
    numberOfTickets = $(this).attr("id");
});