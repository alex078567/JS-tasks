/**
 *
 * Оба цикла выведут одинаковые значения или нет?
 * Да, в обоих случаях от 0 до 4.
 * Это связано с особенностями работы цикла "for"/
 */

'use strict';

console.log('prefix');
for (let i = 0; i < 5; i++) console.log(i);

console.log('postfix');
for (let i = 0; i < 5; i++) console.log(i);
