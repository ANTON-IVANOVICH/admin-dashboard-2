import { FC } from 'react';
import Header from '../../components/Header';
import PostsTable from '../../components/PostsTable';
import './posts.scss';

const Posts: FC = () => {
  return (
    <div className='container'>
      <Header/>
      <PostsTable/>
    </div>
  )
}

export default Posts
