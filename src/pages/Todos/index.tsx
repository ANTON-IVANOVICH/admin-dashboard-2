import { FC } from 'react';
import Todo from '../../components/Todo';
import CreateTodo from '../../components/CreateTodo';
import { ITodo } from '../../models/ITodo';
import { todoAPI } from '../../store/services/TodoService';
import { Button } from '@material-ui/core';
import './todos.scss';

const Todos: FC = () => {
    const {
        data: todos,
        isError,
        isLoading,
        refetch,
    } = todoAPI.useFetchAllTodosQuery('');
    const [deleteTodo] = todoAPI.useDeleteTodoMutation();
    const [updateTodo] = todoAPI.useUpdateTodoMutation();

    const handleUpdate = (todo: ITodo) => {
        updateTodo(todo);
    };

    const handleDelete = (todo: ITodo) => {
        deleteTodo(todo);
    };

    if (isLoading) return <h2>Loading...</h2>;

    if (isError) return <h2>Error!!!</h2>;

    return (
        <div className='todosPage'>
            <CreateTodo />
            <div className='todos__list'>
                <h2 className='todos__list_title'>Todo List</h2>
                <div className='todos__list_container'>
                    <ul className='todos__list_container_list'>
                        {todos?.map((todo: ITodo) => (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                remove={handleDelete}
                                update={handleUpdate}
                            />
                        ))}
                        <Button onClick={refetch} variant='contained'>
                            Refetch data
                        </Button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todos;
