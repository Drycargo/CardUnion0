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
    for (var item of data) {
        var title = item.title;
        var display = item.display;
        alert(title + display);
        $('<div />', {
            class: "panel",
            name: title,
            text: display
        }).appendTo($("#choice-panel-container"))
    }

}