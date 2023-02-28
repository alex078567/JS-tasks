'use strict';

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};
console.log(sumOfSalaries(salaries));

function sumOfSalaries(object) {
	let sum = 0;
	for (let key in object) {
		sum += object[key];
	}
	return sum;
}
