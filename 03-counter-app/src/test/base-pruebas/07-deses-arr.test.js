import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('pruebas en desestructuracion de arrays', () => {

    test('debe retornar un string y un numero', () => {
        const [letters, numeros] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numeros).toBe(123);

        expect(typeof letters).toBe('string');




    })
})
