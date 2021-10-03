function makeButton(textString) {
    return $("<button/>", {
        text: textString,
        class: "plus-score-button"
    })
}

class ScorePanel {
    constructor() {
        this.score = new Score(2, 0, false, false);
        this.$plusThree = makeButton("+3");
        this.$plusTwo = makeButton("+2");
        this.$plusOne = makeButton("+1");
    }

    getScore() {
        return this.score;
    }

    getPlusThree() {
        return this.$plusThree;
    }

    getPlusTwo() {
        return this.$plusTwo;
    }

    getPlusOne() {
        return this.$plusOne;
    }
}