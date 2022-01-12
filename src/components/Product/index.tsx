import React, { FC, useState } from 'react'
import { Delete } from '@material-ui/icons';
import { IProduct } from '../../models/IProduct';
import BorderColorSharp from '@material-ui/icons/BorderColorSharp';
import './product.scss'

type Props = {
  productItem: IProduct;
  remove: (product: IProduct) => void;
  update: (product: IProduct) => void;
}
//SHITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
const Product: FC<Props> = ({productItem, remove, update}) => {
  const [product, setProduct] = useState(productItem);
  const [isChange, setIsChange] = useState(false);

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [name]: value });
  };

  const handleDelete = () => {
    remove(product)
  };

  if (isChange) {
    return (
      <li className='product'>
        <input className='product__changerInput' placeholder='title' name='title' onChange={e => handleUpdate(e)}/>
        <input className='product__changerInput' placeholder='count' name='count' onChange={e => handleUpdate(e)}/>
        <input className='product__changerInput' placeholder='price' name='price' onChange={e => handleUpdate(e)}/>
        <button className='product__changerBtn' onClick={() => update(product)}><BorderColorSharp/></button>
      </li>
    )
  }
  
  return (
    <li className="product">
      <img className='product__img img' src={product.image} alt={product.title} />
      <h3 className="product__title title">{product.title}</h3>
      <h4 className="product__count count">{product.count}</h4>
      <span className="product__price price">{product.price}</span>
      <button className='product__btn update' onClick={() => setIsChange(true)}><BorderColorSharp/></button>
      <button className="product__btn delete" onClick={handleDelete}><Delete/></button>
    </li>
  );
};

export default Product;

// const inputCall = (e: React.MouseEvent) => {
//   const rootElement = e.currentTarget;
//   const input = document.createElement('input');
//   const btn = document.createElement('button');

//   btn.classList.add('product__changerBtn');
//   input.classList.add('product__changerInput');

//   btn.textContent = 'Править';

//   rootElement.innerHTML = '';
//   rootElement.append(input);
//   rootElement.append(btn);

//   if (rootElement.classList.contains('title')) {
//     btn.addEventListener('click', () => {
//       const title = input.value;
//       update({...product, title});
//     });
//   };

//   if (rootElement.classList.contains('count')) {
//     btn.addEventListener('click', () => {
//       const count = input.value;
//       update({...product, count});
//     });
//   };

//   if (rootElement.classList.contains('price')) {
//     btn.addEventListener('click', () => {
//       const price = input.value;
//       update({...product, price});
//     });
//   };
// }

// const handleDelete = () => {
//   remove(product)
// }

// const [product, setProduct] = useState(productItem);
// const [isChange, setIsChange] = useState(false);

// const handleUpdate = (e) => {
//   setIsChange(true)
// }

// if (isChange) {
//   return (
//     <>
//       <input className='product__changerInput' type="text" />
//       <button className='product__changerBtn'>Править</button>
//     </>
//   )
// }

// return (
//     <li className="product">
//       <img className='product__img img' src={image} alt={title} />
//       <h3 className="product__title title" onDoubleClick={e => inputCall(e)}>{title}</h3>
//       <h4 className="product__count count" onDoubleClick={e => inputCall(e)}>{count}</h4>
//       <span className="product__price price" onDoubleClick={e => inputCall(e)}>{price}</span>
//       <button className="product__btn delete" onClick={handleDelete}><Delete/></button>
//     </li>
//   )