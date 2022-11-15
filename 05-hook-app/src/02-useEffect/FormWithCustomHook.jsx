import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {
    const { formState, onInputChange, username, email, password, onButtonReset } = useForm({
        username: '',
        email: '',
        password: ''
    });


    // const { username, email, password } = useForm;

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

            <input type=
                'password'
                className="form-control mt-2"
                placeholder='password'
                name='password'
                value={password}
                onChange={onInputChange} />

            <button onClick={onButtonReset} className='btn btn-primary mt-2'>Borrar</button>

        </>



    )
}
