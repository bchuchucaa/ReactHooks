import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en template String ', () => { 

    test('get saludo debe retornar hola fernando', () => { 
        const name = 'israel';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
     })
 })