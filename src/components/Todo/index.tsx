import { FC, useState } from 'react';
import { Delete } from '@material-ui/icons';
import { BorderColorSharp } from '@mui/icons-material';
import { ITodo } from '../../models/ITodo';
import './todo.scss';

type Props = {
    todo: ITodo;
    remove: (todo: ITodo) => void;
    update: (todo: ITodo) => void;
};

const Todo: FC<Props> = ({ todo, remove, update }) => {
    const [todoObj, setTodoObj] = useState(todo);
    const [commonFlag, setCommonFlag] = useState(false);
    const [isUpdateUserID, setIsUpdateUserID] = useState(false);
    const [isUpdateTitle, setIsUpdateTitle] = useState(false);
    const [isUpdateStatus, setIsUpdateStatus] = useState(false);

    const handleUpdateClick = (ceilName: string) => {
        if (commonFlag === false) {
            setCommonFlag(true);
            if (ceilName === 'userID') setIsUpdateUserID(!isUpdateUserID);
            if (ceilName === 'title') setIsUpdateTitle(!isUpdateTitle);
            if (ceilName === 'status') setIsUpdateStatus(!isUpdateStatus);
        } else {
            update(todoObj);
            setCommonFlag(false);
            setIsUpdateUserID(false);
            setIsUpdateTitle(false);
            setIsUpdateStatus(false);
        }
    };

    const handleDelete = () => {
        remove(todo);
    };

    return (
        <li className='todo'>
            <h3 className='todo__title title items'>
                {isUpdateTitle ? (
                    <input
                        placeholder='title'
                        className='todo__changerInput'
                        name='title'
                        onChange={(e) =>
                            setTodoObj({
                                ...todoObj,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                ) : (
                    todo.title
                )}
                <button
                    className='todo__changerBtn'
                    onClick={() => handleUpdateClick('title')}
                >
                    <BorderColorSharp />
                </button>
            </h3>
            <span className='todo__status status items'>
                {isUpdateStatus ? (
                    <select
                        name='status'
                        className='todo__changerInput'
                        onChange={(e) =>
                            setTodoObj({
                                ...todoObj,
                                [e.target.name]: e.target.value,
                            })
                        }
                    >
                        <option value='pending'>pending</option>
                        <option value='completed'>completed</option>
                    </select>
                ) : (
                    todo.status
                )}
                <button
                    className='todo__changerBtn'
                    onClick={() => handleUpdateClick('status')}
                >
                    <BorderColorSharp />
                </button>
            </span>
            <button className='todo__btn delete' onClick={handleDelete}>
                <Delete />
            </button>
        </li>
    );
};

export default Todo;
