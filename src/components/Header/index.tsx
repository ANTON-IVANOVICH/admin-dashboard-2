import { FC } from 'react';
import { Notifications, Search } from '@material-ui/icons'
import './header.scss';
import { useLocation } from 'react-router-dom';

const Header: FC = () => {
  const { pathname } = useLocation();
  let title = 'Overview';

  switch (pathname) {
    case '/products':
      title = 'Products';
      break;
    case '/createproduct':
      title = 'Create Product';
      break;
    case '/posts':
      title = 'Posts';
      break;
    case '/createpost':
      title = 'Create Post';
      break;
    case '/users':
      title = 'Users';
      break;
    case '/createuser':
      title = 'Create User';
      break;
    default:
      title = 'Overview';
      break;
  }

  return (
    <div className='header'>
      <h2>{title}</h2>
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
