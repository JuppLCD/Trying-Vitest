import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import ListaPost from '../../src/ListaPost';

const MAX_FETCHING_TIMEOUT = 1000;

describe('ListaPost', () => {
	beforeEach(() => {
		render(<ListaPost />);
	});

	afterEach(cleanup);

	it('Se renderiza titulo', () => {
		screen.getByText('Lista de Posts');
	});

	it('Se muestra que esta buscando contenido en backend', () => {
		screen.getByText('Cargando...');
	});

	it('Una vez cargado se muestra elementos', async () => {
		screen.getByText('Cargando...');
		expect(await screen.findAllByRole('listitem', undefined, { timeout: MAX_FETCHING_TIMEOUT })).toHaveLength(100);

		expect(screen.queryByText('Cargando...')).toBeNull();
	});
});
