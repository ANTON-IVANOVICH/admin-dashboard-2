import React, { FC } from 'react'
import { Delete } from '@material-ui/icons';
import { IPost } from '../../models/IPost';
import './post.scss'

type Props = {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const Post: FC<Props> = ({post, remove, update}) => {
  const { avatar, author, title, body } = post;

  const inputCall = (e: React.MouseEvent) => {
    const rootElement = e.currentTarget;
    const input = document.createElement('input');
    const btn = document.createElement('button');

    btn.classList.add('post__changerBtn');
    input.classList.add('post__changerInput');

    btn.textContent = 'Править';

    rootElement.innerHTML = '';
    rootElement.append(input);
    rootElement.append(btn);

    btn.addEventListener('click', () => {
      if (rootElement.classList.contains('author')) {
        const author = input.value;
        update({...post, author});
      } else if (rootElement.classList.contains('title')) {
        const title = input.value;
        update({...post, title});
      } else if (rootElement.classList.contains('body')) {
        const body = input.value;
        update({...post, body});
      };
    });
  }

  const handleDelete = () => {
    remove(post)
  }

  return (
    <li className="post">
      <img className='post__img img' src={avatar} alt={title} />
      <h3 className="post__author author" onDoubleClick={e => inputCall(e)}>{author}</h3>
      <h4 className="post__title title" onDoubleClick={e => inputCall(e)}>{title}</h4>
      <span className="post__body body" onDoubleClick={e => inputCall(e)}>{body}</span>
      <button className="post__btn delete" onClick={handleDelete}><Delete/></button>
    </li>
  )
}

export default Post
