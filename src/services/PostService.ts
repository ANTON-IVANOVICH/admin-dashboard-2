import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Post } from '../models/Post';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Post'], // мгновенная подгрузка обновленных данных
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: () => ({
        url: '/posts'
      }),
      providesTags: result => ['Post'] //мгновенная подгрузка обновленных данных
    }),
    createPost: build.mutation<Post, Post>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['Post'] // мгновенная подгрузка обновленных данных
    }),
    updatePost: build.mutation<Post, Post>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: ['Post']
    }),
    deletePost: build.mutation<Post, Post>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
        body: post
      }),
      invalidatesTags: ['Post']
    }),
  })
})