import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('pruebas en importaicon o exportacion', () => {

    test('getHeroeById debe retornar un heroe por id', () => {
        const id = 100;
        const heroe = getHeroeById(id);
        //expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
        expect(heroe).toBeFalsy();


    })
})
test('getHeroebyOwner debe retornar 3 si es DC o 2 si es Marvel', () => {

    const heroeDC = getHeroesByOwner('DC');
    const heroeMarvel = getHeroesByOwner('Marvel');
    expect(heroeDC.length).toEqual(3);
    expect(heroeMarvel.length).toEqual(2);


})
