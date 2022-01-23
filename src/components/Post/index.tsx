import { FC, useState } from 'react'
import { Delete, BorderColorSharp } from '@material-ui/icons';
import { IPost } from '../../models/IPost';
import './post.scss'

type Props = {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
};

const Post: FC<Props> = ({post, remove, update}) => {
  const [postObj, setPostObj] = useState(post);
  const [commonFlag, setCommonFlag] = useState(false);
  const [isUpdateAuthor, setIsUpdateAuthor] = useState(false);
  const [isUpdateTitle, setIsUpdateTitle] = useState(false);
  const [isUpdateBody, setIsUpdateBody] = useState(false);

  const handleUpdateClick = (ceilName: string) => {
    if (commonFlag === false) {
      setCommonFlag(true);
      if (ceilName === 'author') setIsUpdateAuthor(!isUpdateAuthor);
      if (ceilName === 'title') setIsUpdateTitle(!isUpdateTitle);
      if (ceilName === 'body') setIsUpdateBody(!isUpdateBody);
    } else {
      update(postObj);
      setCommonFlag(false);
      setIsUpdateAuthor(false);
      setIsUpdateTitle(false);
      setIsUpdateBody(false);
    };
  };

  const handleDelete = () => {
    remove(post);
  };

  return (
    <li className="post">
      <img className='post__img img' src={post.avatar} alt={post.author} />
      <h3 className="post__author author items">
        {
          isUpdateAuthor ?
            <input
              placeholder='author'
              className='post__changerInput'
              name='author'
              onChange={e => setPostObj({ ...postObj, [e.target.name]: e.target.value })}
            />
          :
            post.author
        }
        <button className='post__changerBtn' onClick={() => handleUpdateClick('author')}><BorderColorSharp/></button>
      </h3>
      <h4 className="post__title title items">
        {
          isUpdateTitle ?
            <input
              placeholder='title'
              className='post__changerInput'
              name='title'
              onChange={e => setPostObj({ ...postObj, [e.target.name]: e.target.value })}
            />
          :
            post.title
        }
        <button className='post__changerBtn' onClick={() => handleUpdateClick('title')}><BorderColorSharp/></button>
      </h4>
      <span className="post__body body items">
        {
          isUpdateBody ?
            <input
              placeholder='body'
              className='post__changerInput'
              name='body'
              onChange={e => setPostObj({ ...postObj, [e.target.name]: e.target.value })}
            />
          :
            post.body
        }
        <button className='post__changerBtn' onClick={() => handleUpdateClick('body')}><BorderColorSharp/></button>
      </span>
      <button className="post__btn delete" onClick={handleDelete}><Delete/></button>
    </li>
  );
};

export default Post;

// import React, { FC } from 'react'
// import { Delete } from '@material-ui/icons';
// import { IPost } from '../../models/IPost';
// import './post.scss'

// type Props = {
//   post: IPost;
//   remove: (post: IPost) => void;
//   update: (post: IPost) => void;
// }

// const Post: FC<Props> = ({post, remove, update}) => {
//   const { avatar, author, title, body } = post;

//   const inputCall = (e: React.MouseEvent) => {
//     const rootElement = e.currentTarget;
//     const input = document.createElement('input');
//     const btn = document.createElement('button');

//     btn.classList.add('post__changerBtn');
//     input.classList.add('post__changerInput');

//     btn.textContent = 'Править';

//     rootElement.innerHTML = '';
//     rootElement.append(input);
//     rootElement.append(btn);

//     btn.addEventListener('click', () => {
//       if (rootElement.classList.contains('author')) {
//         const author = input.value;
//         update({...post, author});
//       } else if (rootElement.classList.contains('title')) {
//         const title = input.value;
//         update({...post, title});
//       } else if (rootElement.classList.contains('body')) {
//         const body = input.value;
//         update({...post, body});
//       };
//     });
//   }

//   const handleDelete = () => {
//     remove(post)
//   }

//   return (
//     <li className="post">
//       <img className='post__img img' src={avatar} alt={title} />
//       <h3 className="post__author author" onDoubleClick={e => inputCall(e)}>{author}</h3>
//       <h4 className="post__title title" onDoubleClick={e => inputCall(e)}>{title}</h4>
//       <span className="post__body body" onDoubleClick={e => inputCall(e)}>{body}</span>
//       <button className="post__btn delete" onClick={handleDelete}><Delete/></button>
//     </li>
//   )
// }

// export default Post
