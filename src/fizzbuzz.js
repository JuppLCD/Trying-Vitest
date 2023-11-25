/* export function fizzbuzz(numero) {
	if (typeof numero !== 'number') throw new Error('La funcion esperaba un numero');
	if (Number.isNaN(numero)) throw new Error('La funcion esperaba un numero');

	if (numero % 15 == 0) return 'fizzbuzz';
	if (numero % 3 === 0) return 'fizz';
	if (numero % 5 === 0) return 'buzz';

	return numero;
} */

// Refactorizacion gracias a los tests
export function fizzbuzz(numero) {
	if (typeof numero !== 'number') throw new Error('La funcion esperaba un numero');
	if (Number.isNaN(numero)) throw new Error('La funcion esperaba un numero');

	const multiplos = { 3: 'fizz', 5: 'buzz' };

	let res = '';
	Object.entries(multiplos).forEach(([multiplo, texto]) => {
		if (numero % multiplo === 0) res += texto;
	});

	return res === '' ? numero : res;
}
