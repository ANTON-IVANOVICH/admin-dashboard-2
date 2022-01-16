import { FC } from 'react';
import { Notifications, Search } from '@material-ui/icons'
import './header.scss';
import { useHistory, useLocation } from 'react-router-dom';
import { RouteNames } from '../../router';
import { useActions, useAppDispatch, useAppSelector } from '../../hooks/redux';
import { AuthActionCreators } from '../../store/reducers/auth/actionCreators';

const Header: FC = () => {
  // const { pathname } = useLocation();
  const router = useHistory();
  const { isAuth, user } = useAppSelector(state => state.authReducer);
  const {logout} = useActions();
  console.log(router);
  let title = 'Overview';

  switch (router.location.pathname) {
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
        <span className="header__right_username">{user.username}</span>
        <img
          className='header__right_user_avatar'
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="user avatar"
        />
        <button onClick={logout}>Выйти</button>
        {/* <button onClick={() => router.push(RouteNames.LOGIN)}>Выйти</button> */}
      </div>
    </div>
  );
};

export default Header;
