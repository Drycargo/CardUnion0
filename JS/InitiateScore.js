window.onload = function() {
    makeHeader();
    makeContainPanel();
    implementScorePanels();
}

function makeContainPanel() {
    var $container = $("<div/>", {
        id: "score-panel-container",
        class: "panel-container",
        text: ""
    })

    $container.appendTo("body");
}