const ones = ["one","two","three","four","five","six","seven","eight","nine"];
const teens = ["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const tens = ["ten","twenty","thirty","fourty","fifty","sixty","seventy","eigthty","ninety"];
var divTxt = document.getElementById("results");
var resultStr = "";

function getOnes(num){
    return ones[num-1];
}

function numToWords(num){
    var wordStr = "";
    numStr = num.toString().trim();
    var strLen = numStr.length;
    if (strLen === 1){
        wordStr = getOnes(num);
    } else if (strLen === 2){
        var firstdigit = numStr.substr(0,1);
        var seconddigit = numStr.substr(1);
        console.log("first digit: " + firstdigit);
        console.log("second digit: " + seconddigit);
        if (seconddigit === "0"){
            wordStr = tens[firstdigit-1];
        } else if (firstdigit === "1"){
            wordStr = teens[seconddigit-1];
        } else {
            wordStr = tens[firstdigit-1] + " " + getOnes(seconddigit); 
        }
    }
    // console.log("Word: " + wordStr);
    // document.getElementById("results").innerHTML = wordStr + "<br>";
    return wordStr;
}

for (var i = 1; i < 100; i++){
    
    resultStr += i + ": " + numToWords(i) + "<br>";
}
divTxt.innerHTML = resultStr;
