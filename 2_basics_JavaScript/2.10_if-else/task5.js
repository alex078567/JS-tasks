/**
 * let message;
 * if (login == 'Сотрудник') {
 * message = 'Привет';
 * } else if (login == 'Директор') {
 * message = 'Здравствуйте';
 * } else if (login == '') {
 * message = 'Нет логина';
 * } else {
 * message = '';
 * }
 */
// переписать с использованием нескольких операторов '?'

'use strict';

const message =
	login == 'Сотрудник'
		? 'Привет'
		: login == 'Директор'
		? 'Здравствуйте'
		: login == ''
		? 'Нет логина'
		: '';
