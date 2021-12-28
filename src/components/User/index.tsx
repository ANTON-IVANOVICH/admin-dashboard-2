import { FC } from 'react'
import { IUser } from '../../models/IUser';
import './user.scss'

type Props = {
  user: IUser;
  remove: (post: IUser) => void;
  update: (post: IUser) => void;
}

const User: FC<Props> = ({user, remove, update}) => {
  const { name, username, email } = user;

  const handleUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = 'I am updated name'
    const username = 'I am updated username'
    const email = 'I am updated email'
    update({...user, name, username, email})
  }

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    remove(user)
  }

  return (
    <li className='user'>
      <h3>{name}</h3>
      <h4>{username}</h4>
      <span>{email}</span>
      <button className='user__btn delete' onClick={handleDelete}>Delete</button>
      <button className='user__btn update' onClick={handleUpdate}>Update</button>
    </li>
  )
}

export default User
