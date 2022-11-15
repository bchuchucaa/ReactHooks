import { useState } from "react"
import { useForm } from "../hooks";

export const TodoAdd = ({ handleNewTodo }) => {
    const { description, onInputChange, onButtonReset } = useForm({
        description: ''
    })

    const handleTodo = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        handleNewTodo({
            id: new Date().getTime(),
            description: description,
            done: false,
        })
        onButtonReset();

    }

    return (
        <>
            <form onSubmit={handleTodo}>
                <input
                    type='text'
                    placeholder='Que hay que hacer'
                    className='form-control'
                    value={description}
                    name="description"
                    onChange={onInputChange} />
                <button type='submit'
                    className='btn btn-outline-danger mt-2'
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
