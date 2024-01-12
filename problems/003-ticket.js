/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    if (number.length !== 6) {
        return false;
    }
    const digits = number.split("").map(Number);
    const firstSum = digits.slice(0, 3).reduce((acc, val) => acc + val, 0);
    const secondSum = digits.slice(3).reduce((acc, val) => acc + val, 0);

    return firstSum === secondSum;
}

module.exports = checkTicket;
