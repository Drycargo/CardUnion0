var $selector = $("#language-selector");
var $video = $("#myVideo");
var $videoSource = $("#video-source");

function switchVideo(){
    var selected = $selector.val();
    var url = "../Video/Congrats/EVA26-" + selected + ".mp4";

    var $newVideo = $("<source/>", {
        id: "video-source",
        src: url,
        type: "video/mp4"
    })

    $newVideo.prependTo($video);
    $videoSource.remove();
    
    $video.trigger("load");

    playPause();
    
}