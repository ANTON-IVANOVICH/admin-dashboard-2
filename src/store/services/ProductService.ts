import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IProduct } from '../../models/IProduct';

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Product'], // мгновенная подгрузка обновленных данных
  endpoints: (build) => ({
    fetchAllProducts: build.query({
      query: () => '/products',
      providesTags: ['Product'] //мгновенная подгрузка обновленных данных
    }),
    createProduct: build.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: product
      }),
      invalidatesTags: ['Product'] // мгновенная подгрузка обновленных данных
    }),
    updateProduct: build.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: 'PUT',
        body: product
      }),
      invalidatesTags: ['Product']
    }),
    deleteProduct: build.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: 'DELETE',
        body: product
      }),
      invalidatesTags: ['Product']
    }),
  })
})
