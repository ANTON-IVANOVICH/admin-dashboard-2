import { FC } from 'react'
import { IProduct } from '../../models/IProduct';
import './product.scss'

type Props = {
  product: IProduct;
  remove: (post: IProduct) => void;
  update: (post: IProduct) => void;
}

const Product: FC<Props> = ({product, remove, update}) => {
  const { title, image, count, price } = product;

  const handleUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
    const title = 'I am updated author'
    const image = 'I am updated title'
    const count = 'I am updated number'
    const price = 'I am updated number'
    update({...product, title, image, count, price})
  }

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    remove(product)
  }

  return (
    <li className='product'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h4>${price}</h4>
      <span>count: {count}</span>
      <button className='product__btn delete' onClick={handleDelete}>Delete</button>
      <button className='product__btn update' onClick={handleUpdate}>Update</button>
    </li>
  )
}

export default Product;

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
