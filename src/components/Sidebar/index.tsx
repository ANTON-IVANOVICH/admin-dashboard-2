import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AccountCircleOutlined, AssignmentOutlined, ConfirmationNumberOutlined, EmojiObjectsOutlined, InsertChartOutlined, LoyaltyOutlined, PeopleAltOutlined, SettingsOutlined } from '@material-ui/icons';
import './sidebar.scss';
// icons svg -sprite?

const Sidebar: FC = () => {
  return (
    <div className='sidebar'>
      <Link to='/' className="sidebar__logo">Admin</Link>
      <ul className="sidebar__list">
        <li className="sidebar__list_item">
          <InsertChartOutlined/>
          <Link to='/' className="sidebar__list_link">Overview</Link>
        </li>
        <li className="sidebar__list_item">
          <EmojiObjectsOutlined/>
          <Link to='/products' className="sidebar__list_link">Products</Link>
        </li>
        <li className="sidebar__list_item">
          <ConfirmationNumberOutlined/>
          <Link to='/create-product' className="sidebar__list_link">Create Product</Link>
        </li>
        <li className="sidebar__list_item">
          <PeopleAltOutlined/>
          <Link to='/users' className="sidebar__list_link">Users</Link>
        </li>
        <li className="sidebar__list_item">
          <AccountCircleOutlined/>
          <Link to='/create-user' className="sidebar__list_link">Create User</Link>
        </li>
        <li className="sidebar__list_item">
          <LoyaltyOutlined/>
          <Link to='/posts' className="sidebar__list_link">Posts</Link>
        </li>
        <li className="sidebar__list_item">
          <AssignmentOutlined/>
          <Link to='/create-post' className="sidebar__list_link">Create Post</Link>
        </li>
        <li className="sidebar__list_item">
          <SettingsOutlined/>
          <a className="sidebar__list_link">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
