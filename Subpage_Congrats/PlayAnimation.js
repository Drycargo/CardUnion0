var v = document.getElementById("myVideo");
var s = document.getElementById("sign");
var flag = document.getElementById("sign-flag");

function playPause() {
    if (v.paused) {
        flag.setAttribute("class", "pause-sign");
        v.style.opacity = "1";
        s.style.opacity = "0";
        s.style.transform = "scale(1.2)";
    } else {
        flag.setAttribute("class", "right-arrow");
        v.style.opacity = "0.8";
        s.style.opacity = "0.8";
        s.style.transform = "scale(1)";
    }
}

$("select").hover(function() {
    $("select").css("opacity", "1");
})

$("select").mouseout(function() {
    $("select").css("opacity", "0.8");
    $("#selection-panel").css("transform", "scale(1)");
})

$("option").hover(function() {
    $("select").css("opacity", "1");
})

$("select").mouseout(function() {
    $("select").css("opacity", "0.8");
})
