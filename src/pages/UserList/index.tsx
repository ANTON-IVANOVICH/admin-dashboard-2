import { FC } from 'react';
import UserComponent from '../../components/User';
import { IUser } from '../../models/IUser';
import { Button } from '@material-ui/core';
import './userList.scss';
import {
    useFetchAllUsersQuery,
    useDeleteUserMutation,
    useUpdateUserMutation,
} from '../../store/services/serviceAPI';

const UserList: FC = () => {
    const {
        data: users,
        isError,
        isLoading,
        refetch,
    } = useFetchAllUsersQuery('');
    const [deleteUser] = useDeleteUserMutation();
    const [updateUser] = useUpdateUserMutation();

    const handleUpdate = (user: IUser) => {
        updateUser(user);
    };

    const handleDelete = (user: IUser) => {
        deleteUser(user);
    };

    return (
        <>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : isError ? (
                <h2>Error!!!</h2>
            ) : (
                <div className='userlist'>
                    <h2>User List</h2>
                    <ul className='userlist__list'>
                        {users.map((user: IUser) => (
                            <UserComponent
                                key={user.id}
                                user={user}
                                remove={handleDelete}
                                update={handleUpdate}
                            />
                        ))}
                    </ul>
                    <Button onClick={refetch} variant='contained'>
                        Refetch data
                    </Button>
                </div>
            )}
        </>
    );
};

export default UserList;
