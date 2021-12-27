import { FC } from 'react';
import Header from '../../components/Header';
import PostsList from '../../components/PostsList';
import './posts.scss';

const Posts: FC = () => {
  return (
    <div className='container'>
      <Header/>
      <PostsList/>
    </div>
  )
}

export default Posts
