$(function () {
    $.ajax({
        type: "Get",
        url: "JS/AudioInfo.json",
        success: function (data) {
            doConstruct(data);
        }
    })
})

function doConstruct(data) {
    for (const item of data) {
        var title = item.title;
        var display = item.display;

        //alert(title + display);
        
        //create panel
        var $panel = $('<div />', {
            class: "panel",
            name: title,
            text: display
        })

        //create scroll-panel with contents
        var $scrollPanel = $("<div/>", {
            class: "scroll-panel"
        })
        for (const audioEntry of item.contents) {
            var command = "playAudio(\'" + audioEntry.name + "\')";
            var $newButton = $('<button/>', {
                class: "av-display",
                name: audioEntry.name,
                text: audioEntry.content,
                onclick: command
            })

            $newButton.appendTo($scrollPanel);
            $("<br>").appendTo($scrollPanel);
        }
        

        $scrollPanel.appendTo($panel);

        $panel.appendTo($("#choice-panel-container"));
    }

}