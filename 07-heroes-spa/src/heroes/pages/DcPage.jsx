import { HeroList } from "../components"
import { getHeroesByPublisher } from "../helpers"

const publiser = 'DC Comics';
export const DcPage = () => {

    return (
        <>
            <h1>Dc Comics</h1>
            <hr />
            <HeroList publisher={publiser} />
        </>
    )
}
