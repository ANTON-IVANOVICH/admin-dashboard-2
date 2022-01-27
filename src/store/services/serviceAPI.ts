import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPost } from '../../models/IPost';
import { IProduct } from '../../models/IProduct';
import { IUser } from '../../models/IUser';

export const serviceAPI = createApi({
    reducerPath: 'serviceAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Post', 'Product', 'User'],
    endpoints: (build) => ({
        fetchAllPosts: build.query({
            query: ({ page = '', limit = '' }) =>
                `/posts?_page=${page}&_limit=${limit}`,
            providesTags: ['Post'],
        }),
        fetchAllProducts: build.query({
            query: () => '/products',
            providesTags: ['Product'],
        }),
        fetchAllUsers: build.query({
            query: () => '/users',
            providesTags: ['User'],
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post,
            }),
            invalidatesTags: ['Post'],
        }),
        createProduct: build.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: '/products',
                method: 'POST',
                body: product,
            }),
            invalidatesTags: ['Product'],
        }),
        createUser: build.mutation<IUser, IUser>({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['User'],
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post,
            }),
            invalidatesTags: ['Post'],
        }),
        updateProduct: build.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: 'PUT',
                body: product,
            }),
            invalidatesTags: ['Product'],
        }),
        updateUser: build.mutation<IUser, IUser>({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'PUT',
                body: user,
            }),
            invalidatesTags: ['User'],
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
                body: post,
            }),
            invalidatesTags: ['Post'],
        }),
        deleteProduct: build.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: 'DELETE',
                body: product,
            }),
            invalidatesTags: ['Product'],
        }),
        deleteUser: build.mutation<IUser, IUser>({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'DELETE',
                body: user,
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const {
    useCreatePostMutation,
    useCreateProductMutation,
    useCreateUserMutation,
    useFetchAllPostsQuery,
    useFetchAllProductsQuery,
    useFetchAllUsersQuery,
    useDeletePostMutation,
    useDeleteProductMutation,
    useDeleteUserMutation,
    useUpdatePostMutation,
    useUpdateProductMutation,
    useUpdateUserMutation,
} = serviceAPI;
