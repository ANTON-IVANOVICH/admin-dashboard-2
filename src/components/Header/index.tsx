import { FC } from 'react';
import { Notifications, Search } from '@material-ui/icons'
import './header.scss';

const Header: FC = () => {
  return (
    <div className='header'>
      <h2>Overview</h2>
      <div className="header__right">
        <Search/>
        <Notifications/>
        <span className="header__right_username">Jones Ferdinand</span>
        <img 
          className='header__right_user_avatar' 
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" 
          alt="user avatar" 
        />
      </div>
    </div>
  );
};

export default Header;
