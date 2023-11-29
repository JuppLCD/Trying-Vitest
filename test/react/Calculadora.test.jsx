import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

// fireEvent no es recomendao para testear la ui, se suele utilizar la libreria user-event ya que simula el comportamiento del usuario
import { fireEvent } from '@testing-library/react';

import Calculadora, { operaciones, numeros, signoIgual } from '../../src/Calculadora';

describe('Calculadora', () => {
	// Esta funcion ejecuta la funcion que se le pase por parametro antes de cada test ("it", "test")
	beforeEach(() => {
		render(<Calculadora />); // Estoy renderizando antes de cada test el componente Calculadora, ya que lo estoy testeando y me ahorro escribir este render siempre
	});

	// Esta funcion ejecuta la funcion que se le pase por parametro luego de cada test ("it", "test")
	afterEach(cleanup); // cleanup es una funcion de testing-library, la cual limpia el falso dom

	it('Se renderiza el titulo del componente', () => {
		screen.getByText('Calculadora');
	});

	it('Se renderiza los numeros en la calculadora', () => {
		numeros.forEach((numero) => {
			screen.getByText(numero);
		});
	});

	it('Hay 4 filas', () => {
		const rows = screen.getAllByRole('row');

		expect(rows.length).toBe(4);
	});

	it('Se renderizan las 4 operaciones basicas', () => {
		operaciones.forEach((operacion) => {
			screen.getByText(operacion);
		});
	});

	it('Se renderiza el signo igual', () => {
		screen.getByText(signoIgual);
	});

	it('Se encuentra el input de texto', () => {
		screen.getByRole('textbox');
	});

	it('Al clickear un numero, este debe salir en el input', () => {
		const botonUno = screen.getByText('1');
		fireEvent.click(botonUno);

		const input = screen.getByRole('textbox');
		expect(input.value).toBe('1');
	});

	it('Al clickear varios numeros, estos deben salir en el input', () => {
		const botonUno = screen.getByText('1');
		fireEvent.click(botonUno);
		const botonDos = screen.getByText('2');
		fireEvent.click(botonDos);
		const botonTres = screen.getByText('3');
		fireEvent.click(botonTres);
		const botonCuatro = screen.getByText('4');
		fireEvent.click(botonCuatro);

		const input = screen.getByRole('textbox');
		expect(input.value).toBe('1234');
	});

	it('Al clickear numeros y operaciones, estos deben salir en el input', () => {
		const botonUno = screen.getByText('1');
		fireEvent.click(botonUno);

		const botonSuma = screen.getByText('+');
		fireEvent.click(botonSuma);

		fireEvent.click(botonUno);

		const input = screen.getByRole('textbox');
		expect(input.value).toBe('1+1');
	});

	it('Al apretar el signo igual, se debe mostrar el resultado de calcular lo escrito por el usuario en el input', () => {
		const botonUno = screen.getByText('1');
		fireEvent.click(botonUno);

		const botonSuma = screen.getByText('+');
		fireEvent.click(botonSuma);

		fireEvent.click(botonUno);

		const botonIgual = screen.getByText(signoIgual);
		fireEvent.click(botonIgual);

		const input = screen.getByRole('textbox');
		expect(input.value).toBe('2');
	});
});
