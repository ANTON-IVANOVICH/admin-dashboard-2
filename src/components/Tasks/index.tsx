import { FC } from 'react';
import { AddCircleOutlineOutlined } from '@material-ui/icons'
import './tasks.scss';

const Tasks: FC = () => {
  return (
    <div className='tasks'>
      <div className="tasks__top">
        <h3 className='tasks__top_header'>Tasks</h3>
        <a href="" className="tasks__top_link">View All</a>
      </div>
      <span className='tasks__date'>Today</span>
      <form className="tasks__form">
        <label htmlFor="" className='tasks__form_label'>
          <input type="text" className="tasks__form_input" placeholder='Create new task'/>
          <AddCircleOutlineOutlined/>
        </label>
      </form>
      <ul className="tasks__list">
        <li className="tasks__list_item">
          <input type="checkbox" className='tasks__list_item_input' />
          <span className='tasks__list_item_text'>Finish ticket update</span>
          <button className="tasks__list_item_btn">Urgent</button>
        </li>
        <li className="tasks__list_item">
          <input type="checkbox" className='tasks__list_item_input' />
          <span className='tasks__list_item_text'>Create new ticket example</span>
          <button className="tasks__list_item_btn">New</button>
        </li>
        <li className="tasks__list_item">
          <input type="checkbox" className='tasks__list_item_input'/>
          <span className='tasks__list_item_text'>Update ticket report</span>
          <button className="tasks__list_item_btn">Default</button>
        </li>
      </ul>
    </div>
  );
};

export default Tasks;
