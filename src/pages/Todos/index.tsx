import { FC } from 'react';
import Todo from '../../components/Todo';
import { ITodo } from '../../models/ITodo';
import { todoAPI } from '../../store/services/TodoService';
import { Button } from '@material-ui/core';
import './todos.scss';

const Todos: FC = () => {
  const { data, isError, isLoading, refetch } = todoAPI.useFetchAllTodosQuery('');
  const [deleteTodo] = todoAPI.useDeleteTodoMutation();
  const [updateTodo] = todoAPI.useUpdateTodoMutation();

  const handleUpdate = (todo: ITodo) => {
    updateTodo(todo);
  };

  const handleDelete = (todo: ITodo) => {
    deleteTodo(todo);
  };

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>Error!!!</h2>;

  const todos = data.data;

  return (
    <div className='todolist'>
      <h2>Todo List</h2>
      <ul className='todolist__list'>
        {
          todos.map((todo: ITodo) => (
            <Todo key={todo.id} todo={todo} remove={handleDelete} update={handleUpdate}/>
          ))
        }
      </ul>
      <Button onClick={refetch} variant="contained">Refetch data</Button>
    </div>
  );
};

export default Todos;

// import { Button } from '@material-ui/core';
// import { FC } from 'react'
// import PostComponent from '../../components/Post';
// import { IPost } from '../../models/IPost';
// import { postAPI } from '../../store/services/PostService';
// import './postList.scss'

// const PostList: FC = () => {
//   const { data: posts, isError, isLoading, refetch } = postAPI.useFetchAllPostsQuery('');
//   const [deletePost] = postAPI.useDeletePostMutation();
//   const [updatePost] = postAPI.useUpdatePostMutation();

  // const handleUpdate = (post: IPost) => {
  //   updatePost(post);
  // };

  // const handleDelete = (post: IPost) => {
  //   deletePost(post);
  // };

  // if (isLoading) return <h2>Loading...</h2>;

  // if (isError) return <h2>Error!!!</h2>;

//   return (
//     <div className='postslist'>
//       <h2>Post List</h2>
//       <ul className='postslist__list'>
//         {
          // posts.map((post: IPost) => (
          //   <PostComponent key={post.id} post={post} remove={handleDelete} update={handleUpdate}/>
          // ))
//         }
//       </ul>
      // <Button onClick={refetch} variant="contained">Refetch data</Button>
//     </div>
//   );
// };

// export default PostList;
