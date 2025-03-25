// 1) Funkce co vrací string, který odpovídá slovu ze stringInput na pozici dané wordIndex
function capitalizeWord(stringInput, wordIndex) {
  const words = stringInput.split(' ');  // rozdělíme text na slova
  const index = wordIndex - 1;  // protože indexování začíná od 0, ale zadáváme index od 1
  if (words[index]) {
    return words[index].toUpperCase();  // vrátí slovo velkými písmeny
  }
  return '';  // pokud slovo na dané pozici neexistuje, vrátí prázdný string
}

// 2) Funkce co přijme testScore a vrátí odpovídající známku
function transformScoreToGrade(testScore) {
  if (typeof testScore !== 'number' || testScore < 0 || testScore > 100) {
    return 'INVALID SCORE';  // pokud je testScore mimo rozsah nebo nevalidní hodnota
  }

  if (testScore <= 50) return 'F';
  if (testScore <= 60) return 'E';
  if (testScore <= 70) return 'D';
  if (testScore <= 80) return 'C';
  if (testScore <= 90) return 'B';
  return 'A';  // pro testScore 91-100
}

// 3) Funkce na výpočet faktoriálu
function factorial(factorialNumber) {
  if (typeof factorialNumber !== 'number' || factorialNumber < 0) {
    return undefined;  // nevalidní vstup
  }

  let result = 1;
  for (let i = 1; i <= factorialNumber; i++) {
    result *= i;  // součin všech čísel
  }
  return result;
}

// oblast volání funkcí

// 1)
const result1 = capitalizeWord("My cat is yellow?", 3);
console.log(result1);  // Očekává se: "IS"

// 2)
const result2 = transformScoreToGrade(75);
console.log(result2);  // Očekává se: "C"

// 3)
const result3 = factorial(5);
console.log(result3);  // Očekává se: 120

// do kódu níže nezasahujte

module.exports = {
  variant: "1A",
  capitalizeWord,
  transformScoreToGrade,
  factorial,
};

// do kódu níže nezasahujte

module.exports = {
  variant: "1A",
  capitalizeWord,
  transformScoreToGrade,
  factorial,
};
