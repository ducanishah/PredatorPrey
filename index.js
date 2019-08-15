document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keydown", runRound);
    window.myLine=new Chart(document.getElementById("canvas").getContext("2d"),config);
})
var roundHolder = {
    rounds: [
        { rabbits: 600, foxes: 50 }
    ]
}
var test = "hi";
function runRound() {
    let lastRound = roundHolder.rounds[roundHolder.rounds.length - 1]
    let remainingRabbits=lastRound.rabbits;
    let successfulFoxes=0;
    for (let i = 0; i < lastRound.foxes; i++) {
        let huntChance = (100*(9999/-remainingRabbits))+9999;
        let huntResults=tryHunt(huntChance);
        successfulFoxes+=huntResults;
        remainingRabbits-=huntResults*6;
    }
    
    let newRound = {
        rabbits: Math.floor((remainingRabbits * 2)),
        foxes: Math.floor((successfulFoxes*2))
    }
    console.log(newRound)
    roundHolder.rounds.push(newRound);

    config.data.labels.push(roundHolder.rounds.length-1);
    config.data.datasets[0].data.push(roundHolder.rounds[roundHolder.rounds.length-1].rabbits);
    config.data.datasets[1].data.push(roundHolder.rounds[roundHolder.rounds.length-1].foxes);
    window.myLine.update();



    
    let foxTotal=0;
    let rabbitTotal=0;
    for(let i=0;i<roundHolder.rounds.length;i++){
        foxTotal+=roundHolder.rounds[i].foxes;
        rabbitTotal+=roundHolder.rounds[i].rabbits;
    }
    console.log("foxavg",foxTotal/(roundHolder.rounds.length-1));
    console.log("rabbitavg",rabbitTotal/(roundHolder.rounds.length-1));

}

function tryHunt(huntChance) {
    let successfulHunts=0;
    if (Math.floor(Math.random() * 10001) <= huntChance) {
        successfulHunts++;
    }
    return successfulHunts;
}

function sixSigFigsDivisor(number){
    let divisor=1;
    while(number>999999){number*=1/10;divisor*=10;}
    return divisor
}