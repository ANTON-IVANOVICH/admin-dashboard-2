import React, { FC } from 'react';
import './tickets.scss';

const Tickets: FC = React.memo(() => {
  return (
    <div className='tickets'>
      <div className="tickets__top">
        <h3 className='tickets__top_header'>Unresolved tickets</h3>
        <a href='#' className="tickets__top_link">View details</a>
      </div>
      <span className='tickets__date'>Group: Support</span>
      <ul className="tickets__list">
        <li className="tickets__list_item">
          <span className="tickets__list_item_name">Waiting on Feature Request</span>
          <span className="tickets__list_item_summary">123</span>
        </li>
        <li className="tickets__list_item">
          <span className="tickets__list_item_name">Awaiting Customer Response</span>
          <span className="tickets__list_item_summary">2432</span>
        </li>
        <li className="tickets__list_item">
          <span className="tickets__list_item_name">Awaiting Developer Fix</span>
          <span className="tickets__list_item_summary">312</span>
        </li>
        <li className="tickets__list_item">
          <span className="tickets__list_item_name">Pending</span>
          <span className="tickets__list_item_summary">222</span>
        </li>
      </ul>
    </div>
  );
});

export default Tickets;
