const ones = ["one","two","three","four","five","six","seven","eight","nine"];
const teens = ["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const tens = ["ten","twenty","thirty","fourty","fifty","sixty","seventy","eigthty","ninety"];
var divTxt = document.getElementById("results");
var resultStr = "";

function getOnes(num){
    return ones[num-1];
}

function getTwoDigit(num){
    var tdStr = num.toString();
    var firstdigit = tdStr.substr(0,1);
    var seconddigit = tdStr.substr(1,1);
    var newStr = "";
    if (seconddigit === "0"){     
        newStr = tens[firstdigit-1];
    } else if (firstdigit === "1"){ 
        newStr = teens[seconddigit-1];
    } else { 
        newStr = tens[firstdigit-1] + " " + getOnes(seconddigit); 
    }
    return newStr;
}

function numToWords(num){
    var wordStr = "";
    numStr = num.toString().trim();
    var strLen = numStr.length;
    if (strLen === 1){
        wordStr = getOnes(num);
    } else if (strLen === 2){
        wordStr = getTwoDigit(num);
    } else if(strLen == 3) {
        var firstdigit = numStr.substr(0,1);
        var seconddigit = numStr.substr(1,1);
        var thirddigit = numStr.substr(2,1); 
        var twodigit = numStr.substr(1,2);
        if (seconddigit === "0" && thirddigit === "0"){
            wordStr = ones[firstdigit-1] + " hundred";
        } else if (seconddigit === "0"){
            wordStr = ones[firstdigit-1] + " hundred " + getOnes(thirddigit);
        } else {
            wordStr = ones[firstdigit-1] + " hundred " + getTwoDigit(twodigit);
        }

    }

    return wordStr;
}

for (var i = 1; i < 1000; i++){
    
    resultStr += i + ": " + numToWords(i) + "<br>";
}
divTxt.innerHTML = resultStr;
