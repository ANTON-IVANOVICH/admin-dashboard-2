import { FC, useState } from 'react'
import { IPost } from '../../models/IPost';
import { postAPI } from '../../store/services/PostService';
import './createPost.scss';

const CreatePost: FC = () => {
  const [post, setPost] = useState({} as IPost);
  const [createPost, { isError, isLoading }] = postAPI.useCreatePostMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost({ ...post, [name]: value });
  };

  const addNewPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (post.title && post.author && post.body) {
      const id = new Date().getTime();
      createPost({ ...post, id });
      setPost({ title: '', author: '', body: '', avatar: '' } as IPost);
    };
  };

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error!!!</h1>;

  return (
    <form className='createpost' onSubmit={addNewPost}>
      <input
        className='createpost__input'
        name='author'
        onChange={e => handleChange(e)}
        placeholder='author'
      />
      <input
        className='createpost__input'
        name='title'
        onChange={e => handleChange(e)}
        placeholder='title'
      />
      <input
        className='createpost__input'
        name='body'
        onChange={e => handleChange(e)}
        placeholder='body'
      />
      <input
        className='createpost__input'
        name='avatar'
        onChange={e => handleChange(e)}
        placeholder='avatar url'
      />
      <button className='createpost__btn' type='submit'>Submit</button>
    </form>
  );
};

export default CreatePost;
