import { FC, useState } from 'react'
import Header from '../../components/Header';
import { IPost } from '../../models/IPost';
import { postAPI } from '../../store/services/PostService';
import './createPost.scss';

const CreatePost: FC = () => {
  const [post, setPost] = useState({} as IPost);
  const [createPost, { isError, isLoading }] = postAPI.useCreatePostMutation();

  const addNewPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createPost({ ...post, id: Math.floor(Math.random() * 1000) } as IPost)
    setPost({ author: '', title: '', body: '', avatar: '' } as IPost)
  }

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error!!!</h1>;

  return (
    <div className="container">
      <Header/>
      <form className='createpost' onSubmit={addNewPost}>
        <input
          className='createpost__input'
          value={post.author}
          onChange={e => setPost({...post, author: e.target.value})}
          placeholder='author'
        />
        <input
          className='createpost__input'
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          placeholder='title'
        />
        <input
          className='createpost__input'
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          placeholder='body'
        />
        <input
          className='createpost__input'
          value={post.avatar}
          onChange={e => setPost({...post, avatar: e.target.value})}
          placeholder='avatar url'
        />
        <button className='createpost__btn'>Submit</button>
      </form>
    </div>
  );
}

export default CreatePost
