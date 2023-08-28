let str = new String("vipin");
console.log(str)

let trimString = " vipin    gusain "
// console.log(trimString)
console.log(trimString.trim(0,8))
// console.log(str[3])
// console.log(str.charAt(4))
// console.log(str.slice(3,4))
// console.log(str.substring(0,2))


let url = "https://www.google%20.com"
// console.log(url.replace('%20',""))

let splitString = "Vipin-kumar-gusain"
// console.log(splitString.split(' - '))

const myString = "Every green bus drives fast"
const atWay = myString.at(-2);
// console.log(atWay);

let str1 = "Vipin";
let str2 = "gusain"

console.log(str1.concat(" ", str2))


const strSplit = 'The quick brown fox jumps over the lazy dog.';

const words = strSplit.split(' ');
// console.log(words[3]);
// Expected output: "fox"

const chars = strSplit.split('');
console.log(chars)
console.log(chars[8]);
// Expected output: "k"

const strCopy = strSplit.split();
// console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]