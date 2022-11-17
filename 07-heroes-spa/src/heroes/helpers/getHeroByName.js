import { heroes } from "../data/heroes";

export const getHeroByName = (name = '') => {
    if (name === 0) return [];
    name = name.toLowerCase().trim();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))

}
