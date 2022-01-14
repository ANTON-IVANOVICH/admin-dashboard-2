import React, { FC, useEffect, useState } from 'react'
import { Delete, BorderColorSharp } from '@material-ui/icons';
import { IUser } from '../../models/IUser';
import './user.scss'

type Props = {
  user: IUser;
  remove: (user: IUser) => void;
  update: (user: IUser) => void;
}

const User: FC<Props> = ({user, remove, update}) => {
  const [userItem, setUserItem] = useState(user);

  const handleUpdateClick = () => {}

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rootEl = e.currentTarget.parentNode;
    const currentInput = e.currentTarget;
    console.log(currentInput);
    console.log(rootEl);
  };

  const handleDelete = () => {
    remove(userItem);
  };

  const { avatar_url, name, username, email } = userItem;

  return (
    <li className="user">
      <img className='user__img img' src={avatar_url} alt={username} />
      <h3 className="user__name name items">
        {name}<button className='user__changerBtn' onClick={handleUpdateClick}><BorderColorSharp/></button>
      </h3>
      <h4 className="user__username username items">
        {username}<button className='user__changerBtn' onClick={handleUpdateClick}><BorderColorSharp/></button>
      </h4>
      <span className="user__email email items">
        {email}<button className='user__changerBtn' onClick={handleUpdateClick}><BorderColorSharp/></button>
      </span>
      <button className="user__btn delete" onClick={handleDelete}><Delete/></button>
    </li>
  );
};

export default User;

{/* <li className="user">
<img className='user__img img' src={avatar_url} alt={username} />
<h3 className="user__name name">
  {isInputCall ? <input onChange={e => handleUpdate(e)}/> : <>{name}<button onClick={() => setIsInputCall(true)}><BorderColorSharp/></button></>}
</h3>
<h4 className="user__username username">
  {isInputCall ? <input onChange={e => handleUpdate(e)}/> : <>{username}<button onClick={() => setIsInputCall(true)}><BorderColorSharp/></button></>}
</h4>
<span className="user__email email">
  {isInputCall ? <input onChange={e => handleUpdate(e)}/> : <>{email}<button onClick={() => setIsInputCall(true)}><BorderColorSharp/></button></>}
</span>
<button className="user__btn delete" onClick={handleDelete}><Delete/></button>
</li> */}