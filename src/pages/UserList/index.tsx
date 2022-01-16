import { Button } from '@material-ui/core'
import { FC } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import UserComponent from '../../components/User'
import { IUser } from '../../models/IUser'
import { userAPI } from '../../store/services/UserService'
import './userList.scss'

const UserList: FC = () => {
  const { data: users, isError, isLoading, refetch } = userAPI.useFetchAllUsersQuery('');
  const [deleteUser] = userAPI.useDeleteUserMutation();
  const [updateUser] = userAPI.useUpdateUserMutation();

  const handleUpdate = (user: IUser) => {
    updateUser(user)
  }

  const handleDelete = (user: IUser) => {
    deleteUser(user)
  }

  return (
    <>
      <Sidebar/>
      <div className="container">
        <Header/>
        {
          isLoading ? <h2>Loading...</h2> :
          isError ? <h2>Error!!!</h2> :
          <div className='userlist'>
            <h2>User List</h2>
            <ul className='userlist__list'>
              {
                users.map((user: IUser) => (
                  <UserComponent key={user.id} user={user} remove={handleDelete} update={handleUpdate}/>
                ))
              }
            </ul>
            <Button onClick={refetch} variant="contained">Refetch data</Button>
          </div>
        }
      </div>
    </>
  )
}

export default UserList
