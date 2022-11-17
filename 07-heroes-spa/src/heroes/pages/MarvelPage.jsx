import { useReducer } from "react";
import { authReducer } from "../../auth/context/authReducer";
import { HeroList } from "../components/HeroList";

export const MarvelPage = () => {
    const publiser = 'Marvel Comics';

    return (
        <>
            <h1>Marvel Comics</h1>
            <hr />
            <HeroList publisher={publiser} />
        </>
    )
}
