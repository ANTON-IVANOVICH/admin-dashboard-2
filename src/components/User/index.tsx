import React, { FC, useEffect, useState } from 'react'
import { Delete, BorderColorSharp } from '@material-ui/icons';
import { IUser } from '../../models/IUser';
import './user.scss'

type Props = {
  user: IUser;
  remove: (user: IUser) => void;
  update: (user: IUser) => void;
};

const User: FC<Props> = ({user, remove, update}) => {
  const [userObj, setUserObj] = useState(user);
  const [commonFlag, setCommonFlag] = useState(false);
  const [isUpdateName, setIsUpdateName] = useState(false);
  const [isUpdateUsername, setIsUpdateUsername] = useState(false);
  const [isUpdateEmail, setIsUpdateEmail] = useState(false);

  const handleUpdateClick = (ceilName: string) => {
    if (!commonFlag) {
      setCommonFlag(true);
      if (ceilName === 'name') setIsUpdateName(!isUpdateName);
      if (ceilName === 'username') setIsUpdateUsername(!isUpdateUsername);
      if (ceilName === 'email') setIsUpdateEmail(!isUpdateEmail);
    } else {
      update(userObj);
      setCommonFlag(false);
      setIsUpdateName(false);
      setIsUpdateUsername(false);
      setIsUpdateEmail(false);
    };
  };

  const handleDelete = () => {
    remove(user);
  };

  return (
    <li className="user">
      <img className='user__img img' src={user.avatar_url} alt={user.username} />
      <h3 className="user__name name items">
        {
          isUpdateName ?
          <input placeholder='name' className='user__changerInput' name='name' onChange={e => setUserObj({ ...userObj, [e.target.name]: e.target.value })} />
          :
          user.name
        }
        <button className='user__changerBtn' onClick={() => handleUpdateClick('name')}><BorderColorSharp/></button>
      </h3>
      <h4 className="user__username username items">
        {
          isUpdateUsername ?
          <input placeholder='username' className='user__changerInput' name='username' onChange={e => setUserObj({ ...userObj, [e.target.name]: e.target.value })} />
          :
          user.username
        }
        <button className='user__changerBtn' onClick={() => handleUpdateClick('username')}><BorderColorSharp/></button>
      </h4>
      <span className="user__email email items">
        {
          isUpdateEmail ?
          <input placeholder='email' className='user__changerInput' name='email' onChange={e => setUserObj({ ...userObj, [e.target.name]: e.target.value })} />
          :
          user.email
        }
        <button className='user__changerBtn' onClick={() => handleUpdateClick('email')}><BorderColorSharp/></button>
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

// <input placeholder={ceilName} className='user__changerInput' name={ceilName} onChange={e => setUserObj({ ...userObj, [ceilName]: e.target.value })} />
// setIsUpdate(!isUpdate);
// const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
// if (isUpdate) {
//   const rootEl = e.currentTarget.parentNode;
//   const currentInput = e.currentTarget;
//   console.log(currentInput);
//   console.log(rootEl);
// } else {
// }
