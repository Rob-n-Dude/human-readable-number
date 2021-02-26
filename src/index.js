let nums = {
    0 : "zero",
    1 :	"one",	
    2 :	"two",	
    3 :	"three",
    4 : "four",	
    5 : "five",
    6 : "six",	
    7 : "seven",	
    8 : "eight",	
    9 : "nine",	
    10 : "ten",	
    11 : "eleven",
    12 : "twelve",
    13 : "thirteen",	
    14 : "fourteen",	
    15 : "fifteen",	
    16 : "sixteen",	
    17 : "seventeen",	
    18 : "eighteen",	
    19 : "nineteen"
}
let tens = {	
    2 : "twenty",	
    3 : "thirty",	
    4 : "forty",	
    5 : "fifty",	
    6 : "sixty",	
    7 : "seventy",	
    8 : "eighty",	
    9 : "ninety"
}

let hundred = "hundred"

module.exports = function toReadable (number) {
    if (number.toString().length == 3){
        huns = Math.floor(number/100)
        if (number % 100 == 0)
        {
            return ones_Read(huns) + " " + hundred 
        }

        return ones_Read(huns) + " " + hundred + " " + tens_Read(number%100)
    }  
        
    return tens_Read(number)   
  
}

function tens_Read (number){
    if (number < 20){
        return ones_Read(number)
    }
    else if(number%10 == 0)
    {
        return tens[Math.floor(number/10)]
    }
    
    else{
        return tens[Math.floor(number/10)] + " " + ones_Read(number%10)
    }
    
}

function ones_Read(num){
    return nums[num]
}


