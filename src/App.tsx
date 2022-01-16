import { FC, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useActions, useAppSelector } from './hooks/redux';
import { IAuthUser } from './models/IUser';
import { privateRoutes, publicRoutes, RouteNames } from './router';

// Лучше сделать отдельный компонент - AppRouter

const App: FC = () => {
  const {isAuth} = useAppSelector(state => state.authReducer);
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IAuthUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Router>
      {
        isAuth ?
        <Switch>
          {privateRoutes.map(route => <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>)}
          <Redirect to={RouteNames.HOME}/>
        </Switch>
        :
        <Switch>
          {publicRoutes.map(route => <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>)}
          <Redirect to={RouteNames.LOGIN}/>
        </Switch>
      }
    </Router>
  );
};


export default App;
