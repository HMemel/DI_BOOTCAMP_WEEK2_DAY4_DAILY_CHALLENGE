// Daily Challenge: Words In The Stars


function framedString (phrase) {
    let arr = phrase.split(", ")
    let longest = 0;

    for (w of arr) {
        if (w.length > longest) {
            longest = w.length
        }
    }
    let line = ""
    let something = ""
    for (i=0; i<longest+4; i++) {
        line += "*"
    }
    console.log(line)

    for (word of arr) {
        let numMarginR = longest +1 -word.length;
        rightSpaces = ""
        for (i=0; i<numMarginR; i++) {
            rightSpaces += " ";
        }
        console.log("* " + word + rightSpaces + "*")
    }
    console.log(line)
}

framedString("Hello, how, are, beauiful, you")


// OR

function turnToArray(str) {
    return str.split(",");
}

function longestWord(array) {

    let big = array[0];
    for (let i in array) {
        if (array[i].length > big.length) {
            big = array[i];
        }
    }
    return Number(big.length);
}

function space(word, length) {
    let total = Number(length) - Number(word);
    return "\xa0".repeat(total);
}

function frame(str) {
    str = turnToArray(str);
    big = longestWord(str);
    console.log("*".repeat(big+4));
    for (let i = 0; i < str.length; i++) {
        console.log(`* ${str[i]}${space(str[i].length, big)} *`)
    }
    console.log("*".repeat(big+4));
}

frame(prompt("Enter words separated by commas"));