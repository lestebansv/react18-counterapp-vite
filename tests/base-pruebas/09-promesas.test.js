import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe de retonar un héroe', (done) => {

        const id = 1;

        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            })
    });

    test('getHeroeByIdAsync debe de obtener un error si héroe no existe', (done) => {

        const id = 100;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBeFalsy();
                done();
            })
            .catch(error => {
                expect(error).toEqual(`No se pudo encontrar el héroe ${id}`);
                done();
            })
    });

})