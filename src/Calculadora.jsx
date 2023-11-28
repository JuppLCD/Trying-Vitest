import { useState } from 'react';
import { evaluate } from 'mathjs';

export const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];

export const operaciones = ['+', '-', '*', '/'];
export const signoIgual = '=';

export default function Calculadora() {
	const [inputValue, setInputValue] = useState('');

	const createHandleClick = (caracter) => () => {
		setInputValue((prevCaracter) => prevCaracter.concat(caracter));
	};

	const realizarOperaciones = () => {
		// setInputValue((prevValue) => eval(prevValue)); // eval nunca es recomendado
		setInputValue((prevValue) => evaluate(prevValue));
	};

	return (
		<section>
			<h1>Calculadora</h1>

			<div>
				<input type='text' value={inputValue} readOnly />
				<ul>
					{rows.map((row, index) => (
						<ul role='row' key={index}>
							{row.map((numero) => (
								<button key={numero} onClick={createHandleClick(numero)}>
									{numero}
								</button>
							))}
						</ul>
					))}
				</ul>

				<ul>
					{operaciones.map((operacion) => (
						<button onClick={createHandleClick(operacion)} key={operacion}>
							{operacion}
						</button>
					))}
				</ul>

				<button onClick={realizarOperaciones}>{signoIgual}</button>
			</div>
		</section>
	);
}
