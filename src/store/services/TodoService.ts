import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ITodo } from '../../models/ITodo';

const token =
    '99c714f784e98053cb9ccfe735d0cbc017368d22cf283efca42a94629fbc01ea';

export const todoAPI = createApi({
    reducerPath: 'todoAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://gorest.co.in/public/v1/' }),
    tagTypes: ['Todo'],
    endpoints: (build) => ({
        fetchAllTodos: build.query({
            query: () => '/todos',
            transformResponse: (response: { data: ITodo[] }) => response.data, //transform res inside
            providesTags: ['Todo'],
        }),
        createTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: `/todos?access-token=${token}`,
                method: 'POST',
                body: todo,
            }),
            invalidatesTags: ['Todo'],
        }),
        updateTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: `/todos/${todo.id}?access-token=${token}`,
                method: 'PUT',
                body: todo,
            }),
            invalidatesTags: ['Todo'],
        }),
        deleteTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: `/todos/${todo.id}?access-token=${token}`,
                method: 'DELETE',
                body: todo,
            }),
            invalidatesTags: ['Todo'],
        }),
    }),
});
