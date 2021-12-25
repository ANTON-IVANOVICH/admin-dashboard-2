import React, { FC, useState } from 'react';
import Header from '../../components/Header'
import { Post } from '../../models/Post';
import { postAPI } from '../../services/PostService';
import './createPost.scss';

const CreatePost: FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [createPost, { data: posts, error, isLoading }] = postAPI.useCreatePostMutation();

  const addNewPost = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await createPost({ id: Math.floor(Math.random() * 1000), title, body } as Post)
    setTitle('');
    setBody('');
  }

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error!!!</h1>;

  return (
    <div className='container'>
      <Header/>
      <form>
        <input 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          placeholder='title'
        />
        <input 
          value={body} 
          onChange={e => setBody(e.target.value)} 
          placeholder='body'
        />
        <button onClick={addNewPost}>submit</button>
      </form>
      <ul>
      {
        posts && posts.map((post: Post) => 
          <li>{post.id} | {post.title} | {post.body}</li>
        )
      }
      </ul>
    </div>
  );
};

export default CreatePost;
