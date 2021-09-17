$(function () {
    $.ajax({
        type: "Get",
        url: "../../Video/Congrats/CongratsInfo.json",
        success: function (data) {
            doConstruct(data);
        }
    })
})

function doConstruct(data){
    var $selector = $("#language-selector");
    for (const item of data) {
        var language = item.language;
        var display = "(" + language + ")" + item.display;
        //alert(language+display);
        
        var $option = $("<option/>", {
            value: language,
            text: display,
            class: "language-option"
        });

        $option.appendTo($selector);
    }

    defaultSelection();
}

function defaultSelection(){
    var $selector = $("#language-selector");
    var $selections = $selector.children("option");
    for (var $option of $selections) {
        if($option.value=="Japanese"){
            $option.selected = true;
        } else{
            $option.selected = false;
        }
    }
}