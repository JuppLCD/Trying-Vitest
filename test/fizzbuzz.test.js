import { describe, expect, it } from 'vitest';

import { fizzbuzz } from '../src/fizzbuzz';

describe('fizzbuzz', () => {
	// Este test pasa a ser redundante, ya que esta asumido y siendo testeado por los otros
	/* it('Deberia ser una funcion', () => {
		expect(typeof fizzbuzz).toBe('function');
	}); */

	it('Si no se envia un numero como parametro tira error', () => {
		expect(() => fizzbuzz()).toThrow();
	});

	it('Si no se envia un numero como parametro tira error con mensaje "La funcion esperaba un numero"', () => {
		expect(() => fizzbuzz()).toThrow('La funcion esperaba un numero');
	});

	it('Error si se envia NaN', () => {
		expect(() => fizzbuzz(NaN)).toThrow();
	});

	it('La funcion debe retornar 1 si le paso un 1', () => {
		expect(fizzbuzz(1)).toBe(1);
	});

	it('La funcion debe retornar 2 si le paso un 2', () => {
		expect(fizzbuzz(2)).toBe(2);
	});

	it('La funcion debe retornar "fizz" si le paso un 3', () => {
		expect(fizzbuzz(3)).toBe('fizz');
	});

	it('La funcion debe retornar "fizz" si le paso un multiplo de 3', () => {
		expect(fizzbuzz(3 * 2)).toBe('fizz');
		expect(fizzbuzz(3 * 3)).toBe('fizz');
		expect(fizzbuzz(3 * 4)).toBe('fizz');
	});

	it('La funcion debe retornar "buzz" si le paso un 5', () => {
		expect(fizzbuzz(5)).toBe('buzz');
	});

	it('La funcion debe retornar "buzz" si le paso un multiplo de 5', () => {
		expect(fizzbuzz(5 * 2)).toBe('buzz');
		expect(fizzbuzz(5 * 4)).toBe('buzz');
		expect(fizzbuzz(5 * 5)).toBe('buzz');
	});

	it('La funcion debe retornar "fizzbuzz" si le paso 15 (3 y 5)', () => {
		expect(fizzbuzz(15)).toBe('fizzbuzz');
	});

	it('La funcion debe retornar "fizzbuzz" si le paso un multiplo de 15 (3 y 5)', () => {
		expect(fizzbuzz(15 * 2)).toBe('fizzbuzz');
		expect(fizzbuzz(15 * 3)).toBe('fizzbuzz');
		expect(fizzbuzz(15 * 4)).toBe('fizzbuzz');
	});
});
