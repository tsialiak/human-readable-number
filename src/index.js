module.exports = function toReadable (number) {
    if (number === 0) return "zero";

    const numberArr = String(number).split("");

    if (numberArr.length === 1) {
        numberArr.unshift("0", "0");
    } else if (numberArr.length === 2) {
        numberArr.unshift("0");
    }

    const readableNumber = numberArr.reduce((acc, elem, index) => 
    acc + getStringByPosition(index, numberArr), "");

    return readableNumber.trim();
}

const getStringByPosition = (position, numberArr) => {
    switch (position) {
        case 0: 
            return (numberArr[0] !== "0") ? getStringNameNumber(numberArr[0]) + "hundred " : "";    
        case 1:
            return getStringNameTenthRank(numberArr);
        case 2:
            return (Number(numberArr[1]) >= 2 || Number(numberArr[1]) < 1) ?
                getStringNameNumber(numberArr[2]) :
                "";    
    }
}

const getStringNameTenthRank = (numberArr) => {
    switch (numberArr[1]) {
        case "0":
            return "";
        case "1":
            return (numberArr[2] === "0") ?
                "ten " :
                getStringNameTeenRank(numberArr[2]);
        case "2":
            return "twenty ";
        case "3":
            return "thirty ";
        case "4":
            return "forty ";
        case "5":
            return "fifty ";
        case "6":
            return "sixty ";
        case "7":
            return "seventy ";
        case "8":
            return "eighty ";
        case "9":
            return "ninety ";                                
    }
}

const getStringNameTeenRank = (number) => {
    switch (number) {
        case "0":
            return "";
        case "1":
            return "eleven ";
        case "2":
            return "twelve ";
        case "3":
            return "thirteen ";
        case "4":
            return "fourteen ";
        case "5":
            return "fifteen ";
        case "6":
            return "sixteen ";
        case "7":
            return "seventeen ";
        case "8":
            return "eighteen ";
        case "9":
            return "nineteen "; 
    }
}

const getStringNameNumber = (number) => {
    switch (number) {
        case "0":
            return "";
        case "1":
            return "one ";
        case "2":
            return "two ";
        case "3":
            return "three ";
        case "4":
            return "four ";
        case "5":
            return "five ";
        case "6":
            return "six ";
        case "7":
            return "seven ";
        case "8":
            return "eight ";
        case "9":
            return "nine ";                                
    }
}
