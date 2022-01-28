import { Button } from '@material-ui/core';
import { FC, useState } from 'react';
import PostComponent from '../../components/Post';
import { IPost } from '../../models/IPost';
import {
    useDeletePostMutation,
    useFetchAllPostsQuery,
    useUpdatePostMutation,
} from '../../store/services/serviceAPI';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './postList.scss';

const PostList: FC = () => {
    const [initParameters, setInitParameters] = useState({ page: 1, limit: 4 });
    const {
        data: posts,
        isError,
        isLoading,
        refetch,
    } = useFetchAllPostsQuery(initParameters);
    const [deletePost] = useDeletePostMutation();
    const [updatePost] = useUpdatePostMutation();

    const handleUpdate = (post: IPost) => {
        updatePost(post);
    };

    const handleDelete = (post: IPost) => {
        deletePost(post);
    };

    if (isLoading) return <h2>Loading...</h2>;

    if (isError) return <h2>Error!!!</h2>;

    return (
        <div className='postslist'>
            <h2>Post List</h2>
            <ul className='postslist__list'>
                {posts.map((post: IPost) => (
                    <PostComponent
                        key={post.id}
                        post={post}
                        remove={handleDelete}
                        update={handleUpdate}
                    />
                ))}
            </ul>
            <div className='postslist__options'>
                <Button onClick={refetch} variant='contained'>
                    Refetch data
                </Button>
                <div className='postslist__options_pagination'>
                    <ArrowCircleLeftIcon
                        className='postslist__options_pagination_btns'
                        fontSize='large'
                        onClick={() =>
                            setInitParameters({
                                ...initParameters,
                                page:
                                    initParameters.page <= 1
                                        ? 1
                                        : initParameters.page - 1,
                            })
                        }
                    />
                    <ArrowCircleRightIcon
                        className='postslist__options_pagination_btns'
                        fontSize='large'
                        onClick={() =>
                            setInitParameters({
                                ...initParameters,
                                page: initParameters.page + 1,
                            })
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default PostList;

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
