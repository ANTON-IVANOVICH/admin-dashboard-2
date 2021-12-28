import { FC } from 'react'
import Header from '../../components/Header'
import './itemList.scss'

const ItemList: FC = () => {
  return (
    <div className="container">
      <Header/>
      <div>Item List</div>
    </div>
  )
}

export default ItemList

// import { FC } from 'react';
// import PostItem from '../PostItem';
// import { postAPI } from '../../services/PostService';
// import { Post } from '../../models/Post';
// import { Button } from '@material-ui/core';
// import './postsList.scss';

// const PostsList: FC = () => {
//   const { data: posts, isError, isLoading, refetch } = postAPI.useFetchAllUsersQuery('');
//   const [deletePost] = postAPI.useDeletePostMutation();
//   const [updatePost] = postAPI.useUpdatePostMutation();

//   const handleUpdate = (post: Post) => {
//     updatePost(post)
//   }

//   const handleDelete = (post: Post) => {
//     deletePost(post)
//   }

//   if (isLoading) return <h2>Loading...</h2>;

//   if (isError) return <h2>Error!!!</h2>;

//   return (
//     <div className='postslist'>
//       <h2>Posts List</h2>
//       <ul className='postslist__list'>
//         {
//           posts.map((post: Post) => (
//             <PostItem key={post.id} post={post} remove={handleDelete} update={handleUpdate}/>
//           ))
//         }
//       </ul>
//       <Button onClick={refetch} variant="contained">Refetch data</Button>
//     </div>
//   );
// };

// export default PostsList;

