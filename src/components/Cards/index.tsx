import { FC, useEffect, useState } from 'react';
import { postAPI } from '../../store/services/PostService';
import { productAPI } from '../../store/services/ProductService';
import { userAPI } from '../../store/services/UserService';
import './cards.scss';

const Cards: FC = () => {
  const [posts, setPosts] = useState(0);
  const [users, setUsers] = useState(0);
  const [products, setProducts] = useState(0);
  const { data: postData } = postAPI.useFetchAllPostsQuery('');
  const { data: userData } = userAPI.useFetchAllUsersQuery('');
  const { data: productData  } = productAPI.useFetchAllProductsQuery('');

  useEffect(() => {
    if (postData && userData && productData) {
      setPosts(postData.length)
      setUsers(userData.length)
      setProducts(productData.length)

    }
  }, [postData, userData, productData]);

  return (
    <div className='cards'>
      <article className="cards__articles">
        <h4 className='cards__articles_header'>Posts</h4>
        <span className="cards__articles_number">{posts}</span>
      </article>
      <article className="cards__articles">
        <h4 className='cards__articles_header'>Users</h4>
        <span className="cards__articles_number">{users}</span>
      </article>
      <article className="cards__articles">
        <h4 className='cards__articles_header'>Products</h4>
        <span className="cards__articles_number">{products}</span>
      </article>
      <article className="cards__articles">
        <h4 className='cards__articles_header'>Other</h4>
        <span className="cards__articles_number">64</span>
      </article>
    </div>
  )
}

export default Cards
