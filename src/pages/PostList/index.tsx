import { Button } from '@material-ui/core';
import { FC } from 'react'
import Header from '../../components/Header';
import PostComponent from '../../components/Post';
import Sidebar from '../../components/Sidebar';
import { IPost } from '../../models/IPost';
import { postAPI } from '../../store/services/PostService';
import './postList.scss'

const PostList: FC = () => {
  const { data: posts, isError, isLoading, refetch } = postAPI.useFetchAllPostsQuery('');
  const [deletePost] = postAPI.useDeletePostMutation();
  const [updatePost] = postAPI.useUpdatePostMutation();

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  const handleDelete = (post: IPost) => {
    deletePost(post)
  }

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>Error!!!</h2>;

  return (
    <>
      <Sidebar/>
      <div className="container">
        <Header/>
        <div className='postslist'>
          <h2>Post List</h2>
          <ul className='postslist__list'>
            {
              posts.map((post: IPost) => (
                <PostComponent key={post.id} post={post} remove={handleDelete} update={handleUpdate}/>
              ))
            }
          </ul>
          <Button onClick={refetch} variant="contained">Refetch data</Button>
        </div>
      </div>
    </>
  )
}

export default PostList

// import { FC } from 'react';
// import PostItem from '../PostItem';
// import { postAPI } from '../../services/PostService';
// import { Post } from '../../models/Post';
// import { Button } from '@material-ui/core';
// import './postsList.scss';

// const PostsList: FC = () => {
  // const { data: posts, isError, isLoading, refetch } = postAPI.useFetchAllUsersQuery('');
  // const [deletePost] = postAPI.useDeletePostMutation();
  // const [updatePost] = postAPI.useUpdatePostMutation();

  // const handleUpdate = (post: Post) => {
  //   updatePost(post)
  // }

  // const handleDelete = (post: Post) => {
  //   deletePost(post)
  // }

  // if (isLoading) return <h2>Loading...</h2>;

  // if (isError) return <h2>Error!!!</h2>;

//   return (
    // <div className='postslist'>
    //   <h2>Posts List</h2>
    //   <ul className='postslist__list'>
    //     {
    //       posts.map((post: Post) => (
    //         <PostItem key={post.id} post={post} remove={handleDelete} update={handleUpdate}/>
    //       ))
    //     }
    //   </ul>
    //   <Button onClick={refetch} variant="contained">Refetch data</Button>
    // </div>
//   );
// };

// export default PostsList;

