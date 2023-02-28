/**
 * Оба цикла выводят  одинаковые значения или нет?
 *
 * Первый от 1 до 4
 * Второй от 1 до 5
 */

'use strict';
console.log('prefix');
let i = 0;
while (++i < 5) console.log(i);
console.log('postfix');
i = 0;
while (i++ < 5) console.log(i);
