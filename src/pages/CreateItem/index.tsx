import { FC, useState } from 'react'
import Header from '../../components/Header';
import { Post } from '../../models/Post';
import { Product } from '../../models/Product';
import { User } from '../../models/User';
import './createItem.scss';

const CreateItem: FC = () => {
  const [item, setItem] = useState({} as Post | User | Product);
  // const [createPost, { error, isLoading }] = postAPI.useCreatePostMutation();

  // const addNewItem = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   await createPost({ ...post, id: Math.floor(Math.random() * 1000) } as Post)
  //   setPost({ author: '', title: '', body: '', avatar: '' } as Post)
  // }

  // if (isLoading) return <h1>Loading...</h1>;

  // if (error) return <h1>Error!!!</h1>;

  return (
    <div className="container">
      <Header/>
      <div>Create item</div>
    </div>
    // <div className='container'>
    //   <Header/>
    //   <form className='createpost__form' onSubmit={addNewPost}>
    //     <input
    //       className='createpost__form_input'
    //       value={post.author}
    //       onChange={e => setPost({...post, author: e.target.value})}
    //       placeholder='author'
    //     />
    //     <input
    //       className='createpost__form_input'
    //       value={post.title}
    //       onChange={e => setPost({...post, title: e.target.value})}
    //       placeholder='title'
    //     />
    //     <input
    //       className='createpost__form_input'
    //       value={post.body}
    //       onChange={e => setPost({...post, body: e.target.value})}
    //       placeholder='body'
    //     />
    //     <input
    //       className='createpost__form_input'
    //       value={post.avatar}
    //       onChange={e => setPost({...post, avatar: e.target.value})}
    //       placeholder='avatar url'
    //     />
    //     <button className='createpost__form_btn'>Submit</button>
    //   </form>
    // </div>
  );
}

export default CreateItem
