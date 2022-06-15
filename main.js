var gameData = {
    DNA: 0,
    DNAPerClick: 1,
    DNAPerClickCost: 10
}
function getDNA() {
    gameData.DNA += gameData.DNAPerClick
    document.getElementById("DNACount").innerHTML = gameData.DNA + " DNA"
}

function buyDNAPerClick(){
    if(gameData.DNA >= gameData.DNAPerClickCost){
        gameData.DNA -= gameData.DNAPerClickCost
        gameData.DNAPerClick += 1
        gameData.DNAPerClickCost *= 2 
        document.getElementById("DNACount").innerHTML = gameData.DNA + " DNA"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Extractor (Currently Level " + gameData.DNAPerClick + ") Cost: " + gameData.DNAPerClickCost + " DNA"
    }
}

var mainGameLoop = window.setInterval(function() {
    getDNA()
}, 1000)
