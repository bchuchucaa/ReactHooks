import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10);
    const incrementFather = useCallback(
        (value) => {
            setCounter((counter) => counter + value)
        },
        [],
    )

    const increment = () => {
        setCounter(counter + 1);
    }
    return (
        <>
            <h1>use callBack hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    )
}
