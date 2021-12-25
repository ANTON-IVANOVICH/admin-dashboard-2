import { FC } from 'react';
import './cards.scss';

const Cards: FC = () => {
  return (
    <div className='cards'>
      <article className="cards__articles">
        <h4 className='cards__articles_header'>Unresolved</h4>
        <span className="cards__articles_number">60</span>
      </article>
      <article className="cards__articles">
        <h4 className='cards__articles_header'>Overdue</h4>
        <span className="cards__articles_number">16</span>
      </article>
      <article className="cards__articles">
        <h4 className='cards__articles_header'>Open</h4>
        <span className="cards__articles_number">43</span>
      </article>
      <article className="cards__articles">
        <h4 className='cards__articles_header'>On hold</h4>
        <span className="cards__articles_number">64</span>
      </article>
    </div>
  )
}

export default Cards
