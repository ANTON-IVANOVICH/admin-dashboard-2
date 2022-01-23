import React from "react";
import CreatePost from "../pages/CreatePost";
import CreateProduct from "../pages/CreateProduct";
import CreateUser from "../pages/CreateUser";
import Home from "../pages/Home";
import Login from '../pages/Login'
import PostList from "../pages/PostList";
import ProductList from "../pages/ProductList";
import Todos from "../pages/Todos";
import UserList from "../pages/UserList";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  HOME = '/',
  CREATE_USER = '/create-user',
  CREATE_PRODUCT = '/create-product',
  CREATE_POST = '/create-post',
  USERS = '/users',
  PRODUCTS = '/products',
  POSTS = '/posts',
  TODOS = '/todos',
}

export const publicRoutes: IRoute[] = [
  {path: RouteNames.LOGIN, exact: true, component: Login}
]

export const privateRoutes: IRoute[] = [
  {path: RouteNames.HOME, exact: true, component: Home},
  {path: RouteNames.CREATE_USER, exact: true, component: CreateUser},
  {path: RouteNames.CREATE_PRODUCT, exact: true, component: CreateProduct},
  {path: RouteNames.CREATE_POST, exact: true, component: CreatePost},
  {path: RouteNames.USERS, exact: true, component: UserList},
  {path: RouteNames.PRODUCTS, exact: true, component: ProductList},
  {path: RouteNames.POSTS, exact: true, component: PostList},
  {path: RouteNames.TODOS, exact: true, component: Todos},
]
