import React, { FC, useState } from 'react'
import Header from '../../components/Header';
import { IProduct } from '../../models/IProduct';
import { productAPI } from '../../store/services/ProductService';
import './createProduct.scss';

const CreateProduct: FC = () => {
  const [product, setProduct] = useState({} as IProduct);
  const [createProduct, { isError, isLoading }] = productAPI.useCreateProductMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [name]: value })
  }

  const addNewProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product.title && product.count && product.price) {
      const id = new Date().getTime();
      await createProduct({ ...product, id } as IProduct)
      setProduct({ title: '', image: '', count: '', price: '' } as IProduct)
    }
  }

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error!!!</h1>;

  return (
    <div className="container">
      <Header/>
      <form className='createproduct' onSubmit={addNewProduct}>
        <input
          className='createproduct__input'
          name='title'
          onChange={e => handleChange(e)}
          placeholder='title'
        />
        <input
          className='createproduct__input'
          name='image'
          onChange={e => handleChange(e)}
          placeholder='image'
        />
        <input
          className='createproduct__input'
          name='count'
          onChange={e => handleChange(e)}
          placeholder='count'
        />
        <input
          className='createproduct__input'
          name='price'
          onChange={e => handleChange(e)}
          placeholder='price'
        />
        <button className='createproduct__btn'>Submit</button>
      </form>
    </div>
  );
}

export default CreateProduct
