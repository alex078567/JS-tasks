/**
 * Замените for на while
 *
 * for (let i = 0; i < 3; i++) {
 * alert( `number ${i}!` );
 * }
 */

'use strict';
const n = 100;
const primeNumberPrinter = () => {
	nextNumber: for (let i = 2; i <= n; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j === 0) continue nextNumber;
		}
		console.log(i);
	}
};

primeNumberPrinter();
