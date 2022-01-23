import { Delete } from '@material-ui/icons';
import { FC } from 'react';
import { ITodo } from '../../models/ITodo';
import './todo.scss';

type Props = {
  todo: ITodo;
  // remove: (post: IPost) => void;
  // update: (post: IPost) => void;
};

const Todo: FC<Props> = ({ todo }) => {

  return (
    <li className="todo">
      <h3 className="todo__author author items">{todo.user_id}</h3>
      <h4 className="todo__title title items">{todo.title}</h4>
      <span className="todo__body body items">{todo.status}</span>
      <button className="todo__btn delete"><Delete/></button>
    </li>
  );
};

export default Todo;

// import { FC, useState } from 'react'
// import { Delete, BorderColorSharp } from '@material-ui/icons';
// import { IPost } from '../../models/IPost';
// import './post.scss'

// type Props = {
//   post: IPost;
//   remove: (post: IPost) => void;
//   update: (post: IPost) => void;
// };

// const Post: FC<Props> = ({post, remove, update}) => {
  // const [postObj, setPostObj] = useState(post);
  // const [commonFlag, setCommonFlag] = useState(false);
  // const [isUpdateAuthor, setIsUpdateAuthor] = useState(false);
  // const [isUpdateTitle, setIsUpdateTitle] = useState(false);
  // const [isUpdateBody, setIsUpdateBody] = useState(false);

//   const handleUpdateClick = (ceilName: string) => {
//     if (commonFlag === false) {
//       setCommonFlag(true);
//       if (ceilName === 'author') setIsUpdateAuthor(!isUpdateAuthor);
//       if (ceilName === 'title') setIsUpdateTitle(!isUpdateTitle);
//       if (ceilName === 'body') setIsUpdateBody(!isUpdateBody);
//     } else {
//       update(postObj);
//       setCommonFlag(false);
//       setIsUpdateAuthor(false);
//       setIsUpdateTitle(false);
//       setIsUpdateBody(false);
//     };
//   };

//   const handleDelete = () => {
//     remove(post);
//   };

//   return (
    // <li className="post">
    //   <img className='post__img img' src={post.avatar} alt={post.author} />
    //   <h3 className="post__author author items">
    //     {
    //       isUpdateAuthor ?
    //         <input
    //           placeholder='author'
    //           className='post__changerInput'
    //           name='author'
    //           onChange={e => setPostObj({ ...postObj, [e.target.name]: e.target.value })}
    //         />
    //       :
    //         post.author
    //     }
    //     <button className='post__changerBtn' onClick={() => handleUpdateClick('author')}><BorderColorSharp/></button>
    //   </h3>
    //   <h4 className="post__title title items">
    //     {
    //       isUpdateTitle ?
    //         <input
    //           placeholder='title'
    //           className='post__changerInput'
    //           name='title'
    //           onChange={e => setPostObj({ ...postObj, [e.target.name]: e.target.value })}
    //         />
    //       :
    //         post.title
    //     }
    //     <button className='post__changerBtn' onClick={() => handleUpdateClick('title')}><BorderColorSharp/></button>
    //   </h4>
    //   <span className="post__body body items">
    //     {
    //       isUpdateBody ?
    //         <input
    //           placeholder='body'
    //           className='post__changerInput'
    //           name='body'
    //           onChange={e => setPostObj({ ...postObj, [e.target.name]: e.target.value })}
    //         />
    //       :
    //         post.body
    //     }
    //     <button className='post__changerBtn' onClick={() => handleUpdateClick('body')}><BorderColorSharp/></button>
    //   </span>
    //   <button className="post__btn delete" onClick={handleDelete}><Delete/></button>
    // </li>
//   );
// };

// export default Post;

// .items {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .post {
//   display: flex;
//   align-items: center;
//   padding: 20px;
//   margin-bottom: 20px;
//   border: 1px solid gray;
//   border-radius: 10px;

//   &__img {
//     margin-right: 20px;
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     object-fit: cover;
//   }

//   &__author {
//     margin-right: 50px;
//     cursor: pointer;
//   }

//   &__title {
//     margin-right: 50px;
//     cursor: pointer;
//   }

//   &__body {
//     margin-right: auto;
//     cursor: pointer;
//   }

//   &__btn {
//     border: none;
//     background-color: transparent;
//     cursor: pointer;
//   }

//   &__changerInput {
//     margin-right: 10px;
//     border-radius: 10px;
//     border-color: gray;
//   }

//   &__changerBtn {
//     margin-left: 10px;
//     cursor: pointer;
//     background-color: transparent;
//     border: none;
//   }
// }
