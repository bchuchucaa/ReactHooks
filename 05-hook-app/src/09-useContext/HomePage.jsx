import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            <h1>Home Page <small>{user?.name}</small></h1>
            <hr />
            <pre>

            </pre>
            <button className='btn btn-primary' onClick={() => {
                setUser({
                    id: 123, name: 'ISRAEL', email: 'bchuchucaa@gmail.com'
                })
            }}>
                Establecer usuario
            </button>
        </>
    )
}
