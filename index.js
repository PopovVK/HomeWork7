const exchangeRate = 40;
let result = '';

for (let dollars = 10; dollars <= 100; dollars += 10) {
  const uah = dollars * exchangeRate;
  result += `${dollars} доларів = ${uah} гривень\n`;
}

alert(result);