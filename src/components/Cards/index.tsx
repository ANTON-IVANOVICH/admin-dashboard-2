import React, { FC, useEffect, useState } from 'react';
import {
    useFetchAllPostsQuery,
    useFetchAllProductsQuery,
    useFetchAllUsersQuery,
} from '../../store/services/serviceAPI';
import { todoAPI } from '../../store/services/TodoService';
import './cards.scss';

type Props = {
    setDataName: (dataName: string) => void;
};

const Cards: FC<Props> = ({ setDataName }) => {
    const [postCount, setPostCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [productCount, setProductCount] = useState(0);
    const [todoCount, setTodoCount] = useState(0);
    const { data: postData } = useFetchAllPostsQuery({});
    const { data: userData } = useFetchAllUsersQuery({});
    const { data: productData } = useFetchAllProductsQuery({});
    const { data: todoData } = todoAPI.useFetchAllTodosQuery('');

    const toggleActiveClass = (e: React.MouseEvent) => {
        if (e.currentTarget.firstChild?.textContent) {
            setDataName(e.currentTarget.firstChild.textContent.toLowerCase());
            document
                .querySelectorAll('.cards__articles')
                .forEach((article) => article.classList.remove('active'));
            e.currentTarget.classList.add('active');
        }
    };

    useEffect(() => {
        if (postData && userData && productData && todoData) {
            setPostCount(postData.length);
            setUserCount(userData.length);
            setProductCount(productData.length);
            setTodoCount(todoData.length);
        }
    }, [postData, userData, productData, todoData]);

    return (
        <div className='cards'>
            <article
                className='cards__articles posts'
                onClick={(e) => toggleActiveClass(e)}
            >
                <h4 className='cards__articles_header'>Posts</h4>
                <span className='cards__articles_number'>{postCount}</span>
            </article>
            <article
                className='cards__articles users active'
                onClick={(e) => toggleActiveClass(e)}
            >
                <h4 className='cards__articles_header'>Users</h4>
                <span className='cards__articles_number'>{userCount}</span>
            </article>
            <article
                className='cards__articles products'
                onClick={(e) => toggleActiveClass(e)}
            >
                <h4 className='cards__articles_header'>Products</h4>
                <span className='cards__articles_number'>{productCount}</span>
            </article>
            <article
                className='cards__articles todos'
                onClick={(e) => toggleActiveClass(e)}
            >
                <h4 className='cards__articles_header'>Todos</h4>
                <span className='cards__articles_number'>{todoCount}</span>
            </article>
        </div>
    );
};

export default Cards;
