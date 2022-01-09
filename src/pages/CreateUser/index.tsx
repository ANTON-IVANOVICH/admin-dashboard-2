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
    const id = Math.floor(Math.random() * 1000);
    const registration = new Date();
    const money = Math.floor(Math.random() * 100000);
    createUser({ ...user, id, registration, money } as IUser)
    setUser({ name: '', avatar_url: '', username: '', email: '' } as IUser)
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
          value={user.avatar_url}
          onChange={e => setUser({...user, avatar_url: e.target.value})}
          placeholder='avatar_url'
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
