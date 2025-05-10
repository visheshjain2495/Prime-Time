$(document).ready(function() {
    $(".s-card1").click(function() {
        $("#film-types-section").addClass("hidden").show().fadeOut(400);
        setTimeout(() => {
            $("#s-film1").removeClass("hidden").hide().fadeIn(400);
        }, 400);
    });

    $(".main-back-btn").click(function(){
    $("#s-film1").addClass("hidden").show().fadeOut(400);
    setTimeout(()=>{
        $("#film-types-section").removeClass("hidden").hide().fadeIn(400);
        },400);    
    });

});