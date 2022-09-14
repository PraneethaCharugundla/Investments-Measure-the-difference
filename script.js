var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var checkButton = document.querySelector("#check-btn");
var outputBox =   document.querySelector("#outputbox");
checkButton.addEventListener("click",submitHandler);

 function submitHandler() {
   var ip = initialPrice.value;
   var qty = stocksQuantity.value;
   var curr = currentPrice.value;
   caluclateProfitAndLoss(ip , qty , curr);
 }


function caluclateProfitAndLoss(initial , quantity , current) { 

    if(initial > current) {
        var loss = (initial - current) * quantity ;
        var lossPercentage = (loss /initial) * 100 ;
        showOutput( `Hey the loss is ${loss} and the loss percentage is ${lossPercentage}%` );
        ChangeColorOfLoss() 

    }
    else if(initial < current) {

        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100 ;
        showOutput(`Hey the profit is ${profit} and the profit percentage is ${profitPercentage}%`);
        ChangeColorOfProfit()

    }else{
        showOutput("no pain no gain ");
        noPainNoGainBg()
    }

}
 function showOutput(message) {
    outputBox.innerHTML = message;
 }
 function ChangeColorOfProfit() {
    document.body.style.backgroundColor = "#fecaca";
}
function ChangeColorOfLoss() {
    document.body.style.backgroundColor = "#b10000";
}

function noPainNoGainBg() {
    document.body.style.backgroundColor = "#f3dec9";
}