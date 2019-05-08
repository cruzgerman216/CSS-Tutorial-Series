const PHONE = 38.99;
const PHONE_CHARGER = 11.99;
const PHONE_CASE = 7.99;
const PROTECTION_SCREEN = 2.99;
const TAX = 0.15;
var balance = 150;
var phones = 0;
var totalspent = 0;

function calculatorbudget(balance) {
  while (balance > 0) {
    phones++;
    totalspent +=
      PHONE + PHONE_CHARGER + PHONE_CASE + PROTECTION_SCREEN + PHONE * TAX;
    balance -=
      PHONE + PHONE_CHARGER + PHONE_CASE + PROTECTION_SCREEN + PHONE * TAX;
  }
  return "$" + String(Math.round(balance));
}
console.log(calculatorbudget(balance));
