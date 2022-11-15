import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setformState] = useState({
        username: 'strider',
        email: 'isra@gmail.com'
    })
    const { username, email } = formState;
    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setformState({
            ...formState,
            [name]: value
        })

    }


    useEffect(() => {
    }, [email])
    useEffect(() => {
    }, [formState])

    useEffect(() => {
    }, [])

    return (
        <>
            <h1>simple Form</h1>
            <hr />
            <input type=
                'text'
                className="form-control"
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange} />
            <input type=
                'email'
                className="form-control mt-2"
                placeholder='isragmail.com'
                name='email'
                value={email}
                onChange={onInputChange} />
            {
                (username === 'strider2') && <Message />
            }



        </>



    )
}
