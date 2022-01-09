import React, { FC } from 'react'
import { Delete } from '@material-ui/icons';
import { IProduct } from '../../models/IProduct';
import './product.scss'

type Props = {
  product: IProduct;
  remove: (product: IProduct) => void;
  update: (product: IProduct) => void;
}

const Product: FC<Props> = ({product, remove, update}) => {
  const { title, image, count, price } = product;

  const inputCall = (e: React.MouseEvent) => {
    const rootElement = e.currentTarget;
    const input = document.createElement('input');
    const btn = document.createElement('button');

    btn.classList.add('product__changerBtn');
    input.classList.add('product__changerInput');

    btn.textContent = 'Править';

    rootElement.innerHTML = '';
    rootElement.append(input);
    rootElement.append(btn);

    if (rootElement.classList.contains('title')) {
      btn.addEventListener('click', () => {
        const title = input.value;
        update({...product, title});
      });
    };

    if (rootElement.classList.contains('count')) {
      btn.addEventListener('click', () => {
        const count = input.value;
        update({...product, count});
      });
    };

    if (rootElement.classList.contains('price')) {
      btn.addEventListener('click', () => {
        const price = input.value;
        update({...product, price});
      });
    };
  }

  const handleDelete = () => {
    remove(product)
  }

  return (
    <li className="product">
      <img className='product__img img' src={image} alt={title} />
      <h3 className="product__title title" onDoubleClick={e => inputCall(e)}>{title}</h3>
      <h4 className="product__count count" onDoubleClick={e => inputCall(e)}>Count: {count}</h4>
      <span className="product__price price" onDoubleClick={e => inputCall(e)}>${price}</span>
      <button className="product__btn delete" onClick={handleDelete}><Delete/></button>
    </li>
  )
}

export default Product
