function finalPanel(panel) {    
    var $bt = $("<button/>", {
        text: "恭喜！",
        id: "congrats-video",
        onclick: "window.open(\"Subpage_Congrats/index.html\")"
    });
    
    $("<br>").appendTo(panel);
    $bt.appendTo(panel);
}