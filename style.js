
// enter btn even handler

var fbtn = document.getElementById("btn1");
fbtn.addEventListener( "click", function(){
    var log = document.getElementById("login");
    log.style.display = "none";
    var depo = document.getElementById("deposit");
    depo.style.display = "block"
})


// depbtn even handler

var dipB = document.getElementById("depositbtn");
dipB.addEventListener( "click", function(){
    var getNew = document.getElementById("dipAmount").value;
    var dipParse = parseFloat(getNew);


    // var currentValue = document.getElementById("depAdd").innerText;
    // var currentDeposit = parseFloat(currentValue);
    // var totaldeposit = dipParse + currentDeposit;
    // document.getElementById("depAdd").innerText = totaldeposit;
    getInputNumber("depAdd", dipParse);


    getInputNumber("balAdd", dipParse);
    // var currentBal = document.getElementById("balAdd").innerText;
    // var currentBale = parseFloat(currentBal);
    // var totalBalen = currentBale + dipParse;
    // document.getElementById("balAdd").innerText =totalBalen;

    document.getElementById("dipAmount").value = "";
})




function getInputNumber(id,inputNum2 ) {
    var currentBal = document.getElementById(id).innerText;
    var currentBale = parseFloat(currentBal);
    var totalBalen = currentBale + inputNum2;
    document.getElementById(id).innerText = totalBalen;
}

// function updateSpanText(id){
//     var currentBal = document.getElementById(id).innerText;
//     var currentBale = parseFloat(currentBal);
//     var totalBalen = currentBale + inputNum2;
//     document.getElementById(id).innerText =totalBalen;
// }




// withdraw even handler

document.getElementById("withbtn").addEventListener("click", function(){
    var inputNum1 = document.getElementById("withAmount").value;
    var inputNum2 = parseFloat(inputNum1)
    
    // var addNumber1 = document.getElementById("withAdd").innerText;
    // var conParse = parseFloat(addNumber1);
    // var totalBamance = conParse + inputNum2;
    // document.getElementById("withAdd").innerText = totalBamance;

    getInputNumber("withAdd", inputNum2)
    getInputNumber("balAdd", -1* inputNum2)

    // withDrar("balAdd", inputNum2) akdom niche function minus korar jnno nije krchilam

    // var currentBal = document.getElementById("balAdd").innerText;
    // var currentBale = parseFloat(currentBal);
    // var totalBalen = currentBale + inputNum2;
    // document.getElementById("balAdd").innerText =totalBalen;
    
    document.getElementById("withAmount").value = "";
})



// function withDrar(id, inputNum2){
//     var currentBal = document.getElementById(id).innerText;
//     var currentBale = parseFloat(currentBal);
//     var totalBalen = currentBale - inputNum2;
//     document.getElementById(id).innerText =totalBalen;
// }