import { FC, useState } from 'react'
import Header from '../../components/Header';
import { IProduct } from '../../models/IProduct';
import { productAPI } from '../../store/services/ProductService';
import './createProduct.scss';

const CreateProduct: FC = () => {
  const [product, setProduct] = useState({} as IProduct);
  const [createProduct, { isError, isLoading }] = productAPI.useCreateProductMutation();

  const addNewProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    await createProduct({ ...product, id } as IProduct)
    setProduct({ title: '', image: '', count: '', price: '' } as IProduct)
  }

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error!!!</h1>;

  return (
    <div className="container">
      <Header/>
      <form className='createproduct' onSubmit={addNewProduct}>
        <input
          className='createproduct__input'
          value={product.title}
          onChange={e => setProduct({...product, title: e.target.value})}
          placeholder='title'
        />
        <input
          className='createproduct__input'
          value={product.image}
          onChange={e => setProduct({...product, image: e.target.value})}
          placeholder='image'
        />
        <input
          className='createproduct__input'
          value={product.count}
          onChange={e => setProduct({...product, count: e.target.value})}
          placeholder='count'
        />
        <input
          className='createproduct__input'
          value={product.price}
          onChange={e => setProduct({...product, price: e.target.value})}
          placeholder='price'
        />
        <button className='createproduct__btn'>Submit</button>
      </form>
    </div>
  );
}

export default CreateProduct
