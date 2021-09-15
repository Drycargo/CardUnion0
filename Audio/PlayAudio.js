var AudioPlayer = document.getElementById("audioPlayer");
var url = "../Audio/AudioInfo.json"
var request = new XMLHttpRequest();

initiate();

/*FUNCTION DEFINITIONS*/
function initiate() {
    AudioPlayer.pause();
    AudioPlayer.autoplay = false;
    AudioPlayer.loop = false;
    AudioPlayer.load();

    request.open("get", url);
    request.send(null);
    alert(request.status);
}

function playAudio(AudioName) {
    var RouteName = document.getElementsByName(AudioName);
    var targeted = RouteName[0];
    var url = "Audio/" + targeted.parentNode.parentNode.getAttribute("name") + "/" + targeted.getAttribute("name") + ".mp3";

    AudioPlayer.src = url;
    AudioPlayer.play();

}