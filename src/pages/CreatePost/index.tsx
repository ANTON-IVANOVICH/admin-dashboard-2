import React, { FC, useState } from 'react';
import Header from '../../components/Header'
import { Post } from '../../models/Post';
import { postAPI } from '../../services/PostService';
import './createPost.scss';

const CreatePost: FC = () => {
  const [post, setPost] = useState({} as Post);
  const [createPost, { data: posts, error, isLoading }] = postAPI.useCreatePostMutation();

  const addNewPost = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await createPost({ ...post, id: Math.floor(Math.random() * 1000) } as Post)
    setPost({ author: '', title: '', body: '' } as Post)
  }

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error!!!</h1>;

  return (
    <div className='container'>
      <Header/>
      <form>
        <input
          value={post.author}
          onChange={e => setPost({...post, author: e.target.value})}
          placeholder='author'
        />
        <input
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          placeholder='title'
        />
        <input
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          placeholder='body'
        />
        <button onClick={addNewPost}>submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
