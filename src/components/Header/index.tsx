import { FC, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useActions, useAppSelector } from '../../hooks/redux';
import { Notifications, Search } from '@material-ui/icons'
import './header.scss';

const Header: FC = () => {
  const [title, setTitle] = useState('Overview');
  const { pathname } = useLocation();
  const router = useHistory();
  const { user } = useAppSelector(state => state.authReducer);
  const { logout } = useActions();

  useEffect(() => {
    let title = pathname.replace('/', '').replace('-', ' ');
    setTitle(title);
  }, [pathname])

  return (
    <div className='header'>
      <h2 className='header__title'>{title || 'Overview'}</h2>
      <div className="header__right">
        <Search/>
        <Notifications/>
        <span className="header__right_username">{user.username}</span>
        <img
          className='header__right_user_avatar'
          src={user.avatar}
          alt="user avatar"
        />
        <button className='header__right_btn' onClick={logout}>Выйти</button>
      </div>
    </div>
  );
};

export default Header;
