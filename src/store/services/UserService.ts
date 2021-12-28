import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { User } from '../../models/User';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['User'], // мгновенная подгрузка обновленных данных
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: () => ({
        url: '/users'
      }),
      providesTags: result => ['User'] //мгновенная подгрузка обновленных данных
    }),
    createUser: build.mutation<User, User>({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user
      }),
      invalidatesTags: ['User'] // мгновенная подгрузка обновленных данных
    }),
    updateUser: build.mutation<User, User>({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: 'PUT',
        body: user
      }),
      invalidatesTags: ['User']
    }),
    deleteUser: build.mutation<User, User>({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: 'DELETE',
        body: user
      }),
      invalidatesTags: ['User']
    }),
  })
})
