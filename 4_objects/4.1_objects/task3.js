'use strict';

const user = {
	name: 'John',
};

// это будет работать?
/**
 * const делает невозможным изменение самой переменной,
 * здесь это ссылка на объект => содержимое менять можно.
 */
user.name = 'Pete';
