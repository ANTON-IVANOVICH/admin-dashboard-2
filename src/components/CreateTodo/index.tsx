import React, { FC, useState } from 'react';
import { todoAPI } from '../../store/services/TodoService';
import { ITodo } from '../../models/ITodo';
import './createTodo.scss';

const CreateTodo: FC = () => {
    const [todo, setTodo] = useState({} as ITodo);
    const [createTodo, { isError, isLoading }] =
        todoAPI.useCreateTodoMutation();

    const handleChange = (
        e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        const name = e.target.name;
        const value = e.target.value;
        setTodo({ ...todo, [name]: value });
    };

    const addNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (todo.title) {
            const id = new Date().getTime();
            createTodo({ ...todo, id });
            setTodo({ title: '', status: '' } as ITodo);
        }
    };

    if (isLoading) return <h1>Loading...</h1>;

    if (isError) return <h1>Error!!!</h1>;

    return (
        <form className='createTodo' onSubmit={addNewTodo}>
            <h2>Create Todo</h2>
            <input
                className='createTodo__input'
                name='title'
                onChange={(e) => handleChange(e)}
                placeholder='title'
            />
            <select
                className='createTodo__select'
                name='status'
                onChange={handleChange}
            >
                <option value=''>Choose option</option>
                <option value='pending'>pending</option>
                <option value='completed'>completed</option>
            </select>
            <button className='createTodo__btn' type='submit'>
                Submit
            </button>
        </form>
    );
};

export default CreateTodo;
