function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function finalSum(num) {
  let sum = 0;
  while (num >= 10) {
    sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return sum;
}

function isSpecialNumber(num, digitSet) {
  while (num > 0) {
    let digit = num % 10;
    if (!digitSet.has(digit)) {
      return false;
    }
    num = Math.floor(num / 10);
  }
  return true;
}

function factorialSum(array_length, arr) {
  let specialCount = 0;

  for (let num of arr) {
    // Step 1: Calculate final sum
    let finalSumValue = finalSum(num);

    // Step 2: Calculate factorial sum
    let factorialSumValue = factorial(finalSumValue);

    // Step 3: Create a set of digits in factorialSum
    let digitSet = new Set();
    let temp = factorialSumValue;
    while (temp > 0) {
      digitSet.add(temp % 10);
      temp = Math.floor(temp / 10);
    }

    // Step 4: Check if num is a special number
    if (isSpecialNumber(num, digitSet)) {
      specialCount++;
    }
  }

  return specialCount;
}

let arr = [111, 222, 333, 444];
console.log(factorialSum(arr.length, arr));