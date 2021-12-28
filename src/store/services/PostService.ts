import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IPost } from '../../models/IPost';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Post'], // мгновенная подгрузка обновленных данных
  endpoints: (build) => ({
    fetchAllPosts: build.query({
      query: () => '/posts',
      providesTags: ['Post'] //мгновенная подгрузка обновленных данных
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['Post'] // мгновенная подгрузка обновленных данных
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: ['Post']
    }),
    deletePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
        body: post
      }),
      invalidatesTags: ['Post']
    }),
  })
})
