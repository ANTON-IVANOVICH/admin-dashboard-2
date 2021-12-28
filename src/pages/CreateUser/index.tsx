import { FC, useState } from 'react'
import Header from '../../components/Header';
import { IUser } from '../../models/IUser';
import { userAPI } from '../../store/services/UserService';
import './createUser.scss';

const CreateUser: FC = () => {
  const [user, setUser] = useState({} as IUser);
  const [createUser, { isError, isLoading }] = userAPI.useCreateUserMutation();

  const addNewUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUser({ ...user, id: Math.floor(Math.random() * 1000) } as IUser)
    setUser({ name: '', username: '', email: '' } as IUser)
  }

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error!!!</h1>;

  return (
    <div className="container">
      <Header/>
      <form className='createuser' onSubmit={addNewUser}>
        <input
          className='createuser__input'
          value={user.name}
          onChange={e => setUser({...user, name: e.target.value})}
          placeholder='name'
        />
        <input
          className='createuser__input'
          value={user.username}
          onChange={e => setUser({...user, username: e.target.value})}
          placeholder='username'
        />
        <input
          className='createuser__input'
          value={user.email}
          onChange={e => setUser({...user, email: e.target.value})}
          placeholder='email'
        />
        <button className='createuser__btn'>Submit</button>
      </form>
    </div>
  );
}

export default CreateUser
