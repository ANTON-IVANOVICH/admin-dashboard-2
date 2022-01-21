import React, { FC, useEffect, useState } from 'react';
import { postAPI } from '../../store/services/PostService';
import { productAPI } from '../../store/services/ProductService';
import { userAPI } from '../../store/services/UserService';
import './cards.scss';

type Props = {
  setDataName: (dataName: string) => void;
};

const Cards: FC<Props> = ({ setDataName }) => {
  const [postCount, setPostCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const { data: postData } = postAPI.useFetchAllPostsQuery('');
  const { data: userData } = userAPI.useFetchAllUsersQuery('');
  const { data: productData  } = productAPI.useFetchAllProductsQuery('');

  const toggleActiveClass = (e: React.MouseEvent) => {
      if (e.currentTarget.firstChild?.textContent) {
      setDataName(e.currentTarget.firstChild.textContent.toLowerCase());
      document.querySelectorAll('.cards__articles').forEach(article => article.classList.remove('active'));
      e.currentTarget.classList.add('active');
    };
  };

  useEffect(() => {
    if (postData && userData && productData) {
      setPostCount(postData.length);
      setUserCount(userData.length);
      setProductCount(productData.length);
    };
  }, [postData, userData, productData]);

  return (
    <div className='cards'>
      <article className="cards__articles posts" onClick={e => toggleActiveClass(e)}>
        <h4 className='cards__articles_header'>Posts</h4>
        <span className="cards__articles_number">{postCount}</span>
      </article>
      <article className="cards__articles users active" onClick={e => toggleActiveClass(e)}>
        <h4 className='cards__articles_header'>Users</h4>
        <span className="cards__articles_number">{userCount}</span>
      </article>
      <article className="cards__articles products" onClick={e => toggleActiveClass(e)}>
        <h4 className='cards__articles_header'>Products</h4>
        <span className="cards__articles_number">{productCount}</span>
      </article>
      <article className="cards__articles" onClick={e => toggleActiveClass(e)}>
        <h4 className='cards__articles_header'>Other</h4>
        <span className="cards__articles_number">64</span>
      </article>
    </div>
  );
};

export default Cards;
