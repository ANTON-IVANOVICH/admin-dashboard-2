import { FC, useRef } from 'react'
import Header from '../../components/Header';
import { IPost } from '../../models/IPost';
import { postAPI } from '../../store/services/PostService';
import './createPost.scss';

const CreatePost: FC = () => {
  const [createPost, { isError, isLoading }] = postAPI.useCreatePostMutation();
  const authorRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);

  const addNewPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (null !== authorRef.current && titleRef.current && bodyRef.current && authorRef.current) {
      const author = authorRef.current.value;
      const title = titleRef.current.value;
      const body = bodyRef.current.value;
      const avatar = authorRef.current.value;
      const id = new Date().getTime();
      await createPost({ id, author, title, body, avatar } as IPost);
    };
  };

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error!!!</h1>;

  return (
    <div className="container">
      <Header/>
      <form className='createpost' onSubmit={addNewPost}>
        <input
          className='createpost__input'
          name='author'
          ref={authorRef}
          placeholder='author'
        />
        <input
          className='createpost__input'
          name='title'
          ref={titleRef}
          placeholder='title'
        />
        <input
          className='createpost__input'
          name='body'
          ref={bodyRef}
          placeholder='body'
        />
        <input
          className='createpost__input'
          name='avatar'
          ref={avatarRef}
          placeholder='avatar url'
        />
        <button className='createpost__btn'>Submit</button>
      </form>
    </div>
  );
}

export default CreatePost