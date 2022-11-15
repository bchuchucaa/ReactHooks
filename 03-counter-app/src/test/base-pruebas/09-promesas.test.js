import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas de 09-promesas', (done) => {

    test('getheroebyidAsync debe retornar un heroe', () => {
        const id = 1;
        getHeroeByIdAsync(1).then(heroe => {
            expect(heroe).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            //done();
        })
    })

    // test('getheroebyidAsync debe retornar un error si no existe heroe', () => {
    //     const id = 1;
    //     getHeroeByIdAsync(1).then((hero) => {
    //         expect(hero).toBeFalsy();
    //     }
    //     ).catch(error => {
    //         expect(error).toBe('No se puedo encontrar el heroe ' + id);
    //         done();
    //     })
    // })

})
