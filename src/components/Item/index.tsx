import { FC } from 'react'
import './item.scss'

const Item: FC = () => {
  return (
    <div>
      Item
    </div>
  )
}

export default Item

// import { FC } from 'react'
// import { Post } from '../../models/Post'
// import './postItem.scss';

// type Props = {
//   post: Post;
//   remove: (post: Post) => void;
//   update: (post: Post) => void;
// }

// const PostItem: FC<Props> = ({post, remove, update}) => {
//   const { avatar, author, title, body } = post;

//   const handleUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
//     const author = 'I am updated author'
//     const title = 'I am updated title'
//     const body = 'I am updated body'
//     update({...post, author, title, body})
//   }

//   const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
//     remove(post)
//   }

//   return (
//     <li className='postitem'>
//       <img src={avatar} alt={author} />
//       <h3>{author}</h3>
//       <h4>{title}</h4>
//       <span>{body}</span>
//       <button className='postitem__btn delete' onClick={handleDelete}>Delete</button>
//       <button className='postitem__btn update' onClick={handleUpdate}>Update</button>
//     </li>
//   )
// }

// export default PostItem
