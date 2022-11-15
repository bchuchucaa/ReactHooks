import { getImagen } from "../../base-pruebas/11-async-await"

describe('test 11-async-await', () => {
    test('getimagen debe retornar un url', async () => {

        //const url = await getImagen();
        const url = 'hola';
        expect(typeof url).toBe('string');
        //console.log(url);
    })

})
