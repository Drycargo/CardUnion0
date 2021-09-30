function makeHeader(){

    //var $header=$("<header><span id='navigate'><br>--&nbsp<br>--&nbsp<br>--&nbsp</span><span><div id='header1'>在医院对面掼蛋</div><div id='header2'>以便随时就医</div></span></header>");
    var $header = $("<header>");
    var $navigate = createNavigate();
    var $title = $("<span><div id='header1'>在医院对面掼蛋</div><div id='header2'>以便随时就医</div></span>");

    $navigate.appendTo($header);
    $title.appendTo($header);

    $header.prependTo($("body"));

    makeNavigateMenu();
}

function createNavigate(){
    // state is true when navigate button is pressed down
    var $navContainer = $("<div/>", {
        id: "navContainer"
    })

    var $navigate = $("<span id = 'navigate'><br>--&nbsp<br>--&nbsp<br>--&nbsp</span>");
    $navigate.attr("onClick", 'expandNavigateMenu();');
    $navigate.attr("state", false);

    $navigate.appendTo($navContainer);
    /*
    $navigateMenu = makeNavigateMenu();

    $navigateMenu.appendTo($navigate);
    //$navigate.after($navigateMenu);
    */
    return $navContainer;
}

function makeNavigateMenu(){
    var $menu = $("<div/>", {
        id: "navigateMenu",
        hidden: true
    });

    var $item1 = makeNavItem("音效", "../Card.html");
    var $item2 = makeNavItem("掼蛋计分", "../Score.html");

    $item1.appendTo($menu);

    //NEEDS AUTOMATION
    $item2.css("top", "50px");
    $item2.appendTo($menu);

    $menu.appendTo("#navContainer");
}

function makeNavItem(name, link){
    return $("<span/>",{
        class: "navItem",
        text: name,
        onclick: "window.open(\'"+ link + "\')"
    });
}

function expandNavigateMenu(){
    var $navigate = $("#navigate");
    var $navigateMenu = $("#navigateMenu");

    if($navigate.attr("state") == "false"){
        $navigate.css({"background-color": "rgb(5, 5, 5)", 
        "box-shadow": "rgb(150, 150, 150) -2px -2px 1px inset"});

        $navigateMenu.attr("hidden", false);

        $navigate.attr("state", true);
    }
    else{
        $navigate.css({"background-color": "rgb(58, 58, 58)", 
        "box-shadow": "rgb(150, 150, 150) 0px 0px 0px inset"});

        $navigateMenu.attr("hidden", true);

        $navigate.attr("state", false);
    }
}
