function implementScorePanels() {
    var team1 = new ScorePanel();
    var $team1Panel = compilePanel(team1, "team1");
    //$team1Panel.css("float", "left");

    var team2 = new ScorePanel();
    var $team2Panel = compilePanel(team2, "team2");
    //$team2Panel.css("float", "right");

    $team1Panel.appendTo("#score-panel-container");
    $team2Panel.appendTo("#score-panel-container");
    finalPanel("#score-panel-container");
}

function compilePanel(scorePanel, panelID) {
    var score = scorePanel.getScore();

    var $panel = $("<div/>", {
        class: "score-panel",
        id: panelID,
        sc: score
    });

    var $numContainer = $("<div/>", {
        class: "num-container",
        id: panelID + "Num",
        text: score.render()
    });

    $numContainer.appendTo($panel);

    scorePanel.getPlusThree().click(function() {
        score.addRank(3);
        $numContainer.text(score.render());
    })

    scorePanel.getPlusTwo().click(function() {
        score.addRank(2);
        $numContainer.text(score.render());
    })

    scorePanel.getPlusOne().click(function() {
        score.addRank(1);
        $numContainer.text(score.render());
    })

    scorePanel.getPlusThree().appendTo($panel);
    scorePanel.getPlusTwo().appendTo($panel);
    scorePanel.getPlusOne().appendTo($panel);

    return $panel;
}

function addFunctionToButton($button, command) {
    $button.attr("onClick", command);
}