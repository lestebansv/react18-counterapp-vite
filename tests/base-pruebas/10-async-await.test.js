import { string } from 'prop-types';
import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 10-async-await', () => {

    test('getImagen debe de retornar una URL de la imagen', async () => {

        const url = await getImagen();
        expect(typeof url).toBe('string');
    })
})