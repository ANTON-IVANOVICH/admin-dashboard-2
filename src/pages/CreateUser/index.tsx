import { FC, useState } from 'react'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { IUser } from '../../models/IUser';
import { userAPI } from '../../store/services/UserService';
import './createUser.scss';

const CreateUser: FC = () => {
  const [user, setUser] = useState({} as IUser);
  const [createUser, { isError, isLoading }] = userAPI.useCreateUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value })
  }

  const addNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.name && user.username && user.email) {
      const id = new Date().getTime();
      const registration = new Date();
      const getMoney = Math.floor(Math.random() * 100000);
      const lostMoney = Math.floor(Math.random() * 100000);
      await createUser({ ...user, id, registration, getMoney, lostMoney } as IUser)
      setUser({ name: '', username: '', email: '', avatar_url: '' } as IUser)
    }
  }

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error!!!</h1>;

  return (
    <>
      <Sidebar/>
      <div className="container">
        <Header/>
        <form className='createuser' onSubmit={addNewUser}>
          <input
            className='createuser__input'
            name='name'
            onChange={e => handleChange(e)}
            placeholder='name'
          />
          <input
            className='createuser__input'
            name='avatar_url'
            onChange={e => handleChange(e)}
            placeholder='avatar_url'
          />
          <input
            className='createuser__input'
            name='username'
            onChange={e => handleChange(e)}
            placeholder='username'
          />
          <input
            className='createuser__input'
            name='email'
            onChange={e => handleChange(e)}
            placeholder='email'
          />
          <button className='createuser__btn'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default CreateUser
