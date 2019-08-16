document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keydown", runRound);
    window.myLine = new Chart(document.getElementById("canvas").getContext("2d"), config);
})
var roundHolder = {
    rounds: [
        //first round
        { rabbits: 400, foxes: 300 }
    ]
}
var test = "hi";
function runRound() {
    let lastRound = roundHolder.rounds[roundHolder.rounds.length - 1]
    let remainingRabbits = lastRound.rabbits;
    let successfulFoxes = 0;
    //eacj fox hunts
    for (let i = 0; i < lastRound.foxes; i++) {
        //rational function for chance
        let huntChance = (100 * (9999 / -remainingRabbits)) + 9999;
        let huntResults = tryHunt(huntChance);
        successfulFoxes += huntResults;
        //2 rabbits a fox
        remainingRabbits -= huntResults * 2;
    }

    let newRound = {
        //logistic growth for rabbits, foxes just double
        rabbits: Math.floor(remainingRabbits * 4 * (1000 - remainingRabbits) / 1000),
        foxes: Math.floor((successfulFoxes * 2))
    }
    console.log(newRound)
    roundHolder.rounds.push(newRound);
    //add new data to chart
    config.data.labels.push(roundHolder.rounds.length - 1);
    config.data.datasets[0].data.push(roundHolder.rounds[roundHolder.rounds.length - 1].rabbits);
    config.data.datasets[1].data.push(roundHolder.rounds[roundHolder.rounds.length - 1].foxes);
    window.myLine.update();



    //average calculator
    // let foxTotal = 0;
    // let rabbitTotal = 0;
    // for (let i = 0; i < roundHolder.rounds.length; i++) {
    //     foxTotal += roundHolder.rounds[i].foxes;
    //     rabbitTotal += roundHolder.rounds[i].rabbits;
    // }
    // console.log("foxavg", foxTotal / (roundHolder.rounds.length - 1));
    // console.log("rabbitavg", rabbitTotal / (roundHolder.rounds.length - 1));

}

function tryHunt(huntChance) {
    let successfulHunts = 0;
    if (Math.floor(Math.random() * 10001) <= huntChance) {
        successfulHunts++;
    }
    return successfulHunts;
}

function sixSigFigsDivisor(number) {
    let divisor = 1;
    while (number > 999999) { number *= 1 / 10; divisor *= 10; }
    return divisor
}