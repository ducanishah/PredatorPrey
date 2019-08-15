var config = {
    type: "line", data: {
        labels: [0],
        datasets: [{
            label: "rabbits",
            backgroundColor: "#eb4034",
            borderColor: "#eb4034",
            data: [roundHolder.rounds[0].rabbits],
            fill: false
        },
        {
            label: "foxes",
            backgroundColor: "#3036f0",
            borderColor: "#3036f0",
            data: [roundHolder.rounds[0].foxes],
            fill: false
        }]
    },
    options: {
        title: {
            display: true,
            text: "Rabbit and Fox population over time",
            fontSize: 36
        },
        scales: {
            xAxes:[{
                ticks:{fontSize:18},
                scaleLabel:{
                    display:true,
                    labelString:"generation",
                    fontSize:24
                }
            }],
            yAxes: [{
                ticks:{fontSize:18},
                scaleLabel: {
                    display: true,
                    labelString: "population",
                    fontSize:24
                }
            }]
        }
    }
}