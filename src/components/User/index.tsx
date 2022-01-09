import React, { FC } from 'react'
import { Delete } from '@material-ui/icons';
import { IUser } from '../../models/IUser';
import './user.scss'

type Props = {
  user: IUser;
  remove: (user: IUser) => void;
  update: (user: IUser) => void;
}

const User: FC<Props> = ({user, remove, update}) => {
  const { name, avatar_url, username, email } = user;

  const inputCall = (e: React.MouseEvent) => {
    const rootElement = e.currentTarget;
    const input = document.createElement('input');
    const btn = document.createElement('button');

    btn.classList.add('user__changerBtn');
    input.classList.add('user__changerInput');

    btn.textContent = 'Править';

    rootElement.innerHTML = '';
    rootElement.append(input);
    rootElement.append(btn);

    if (rootElement.classList.contains('name')) {
      btn.addEventListener('click', () => {
        const name = input.value;
        update({...user, name});
      });
    };

    if (rootElement.classList.contains('username')) {
      btn.addEventListener('click', () => {
        const username = input.value;
        update({...user, username});
      });
    };

    if (rootElement.classList.contains('email')) {
      btn.addEventListener('click', () => {
        const email = input.value;
        update({...user, email});
      });
    };
  }

  const handleDelete = () => {
    remove(user)
  }

  return (
    <li className="user">
      <img className='user__img img' src={avatar_url} alt={username} />
      <h3 className="user__name name" onDoubleClick={e => inputCall(e)}>{name}</h3>
      <h4 className="user__username username" onDoubleClick={e => inputCall(e)}>{username}</h4>
      <span className="user__email email" onDoubleClick={e => inputCall(e)}>{email}</span>
      <button className="user__btn delete" onClick={handleDelete}><Delete/></button>
    </li>
  )
}

export default User
