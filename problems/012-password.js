/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    if (password.length < 7) return false;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    return hasLowerCase && hasUpperCase && hasNumber;
}

module.exports = validatePassword;
