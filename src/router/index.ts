import React from "react";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  HOME = '/home',
}

export const publicRoutes: IRoute[] = [
  // {path: RouteNames.LOGIN, exact: true, component: Login}
]

export const privateRoutes: IRoute[] = [
  // {path: RouteNames.HOME, exact: true, component: Event}
]
