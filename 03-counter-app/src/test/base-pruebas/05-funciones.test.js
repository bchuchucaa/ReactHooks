import { getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('05 funciones tests', () => {


    test('debe retornar el usuario activo', () => { 

        const name="Israel";
    const user = getUsuarioActivo(name);
    expect(user).toStrictEqual({
        uid:'ABC567',
        username: name
    })

     })
    
    
})
