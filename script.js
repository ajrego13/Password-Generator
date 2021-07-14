// DOM Elements
let resultEl = document.getElementById("pw"); 
let copyEl = document.getElementById("copy"); 
let lengthEl = document.getElementById("len"); 
let uppercaseEl= document.getElementById("upper"); 
let lowercaseEl = document.getElementById("lower"); 
let numberEl = document.getElementById("number"); 
let symbolsEl = document.getElementById("symbol"); 
let generateEl = document.getElementById("generate"); 

// Event listener function to get values of DOM elements to use for password
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value; 
  const hasLower = lowercaseEl.checked; 
  const hasUpper = uppercaseEl.checked; 
  const hasNumber = numberEl.checked; 
  const hasymbols = symbolsEl.checked; 

  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbols, 
    length
  ); 
}); 

//Generate password Function
function generatePassword(lower, upper, number, symbol, length) {
  // 1. init pw var 
  // 2. Filter out unchecked types
  // 3. loop over length call a generator function for each type 
  // 4. add final password to the pw var and return 

  let generatedPassword = " "; 
  const typesCount = lower + upper + number + symbol; 
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]); 
  //console.log("typesArr: ", typesArr); 
  if(typescount === 0) {
    return " "; 
  }
  for(let i = 0; i<length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = object.keys[funcName]();
    });
  }
  const finalPassword = generatedPassword.clice(0, length); 
  return finalPassword; 
}

// object variable to store values of random generator functions
const randomFunc = { 
  lower: getRandomLower, 
  upper: getRandomUpper, 
  number: getRandomNumber, 
  symbol: getRandomSymbol
}; 

console.log(randomFunc); 
// Genetator functions  charset refrence: https://net-comber.com/charset.html
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97)); 
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65)); 
} 

function getRandomNumber() { 
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function getRandomSymbol() {
  const symbols = "`!@#$%^&*(){}[]=/?"
  return symbols[Math.floor(Math.random() * symbols.length)]; 
}
