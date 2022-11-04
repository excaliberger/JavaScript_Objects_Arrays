console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;
    arr.forEach((number) => {
        sum += number;
    });
    return sum;
}
console.log(arraySum(numbers))


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {

}

book.title = "Holes";
book.pages = 272;
book.readCount = 3;

console.log(book);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

// function flipIndividualWords(str) {
//     let newString = "";
//     str.split(" ").forEach(word => {
//         for (let i = word.length - 1; i >= 0; i--) {
//             newString += word[i];
//         }
//         newString += " "; 
//     });
//     return newString;
// }

function flipIndividualWords(str) {
    let newString = "";
    str.split(" ").forEach(word => {
        let flippedWord = word.split("").reverse().join("");
        newString += flippedWord;
        newString += " ";
    });
    return newString;
}

console.log(flipIndividualWords(sentence));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function parseCSV(csvDataArg) {
    let parseSection = csvDataArg.split("\n");
    let parseLine = parseSection.map(section => { 
        return section.split(",");
    });
    let headerRow = parseLine.shift();
    let keyValueName = headerRow[0];
    let keyValueAge = headerRow[1];
    let newObj = parseLine.map(hobbit => {
        let hobbitLog = {
            [keyValueName]: hobbit[0],
            [keyValueAge]: hobbit[1],
        }
        return hobbitLog;
    }) 
    return newObj;
}

console.log(parseCSV(csvData))