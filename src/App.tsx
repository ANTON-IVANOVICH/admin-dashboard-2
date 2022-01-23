import { FC, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useActions, useAppSelector } from './hooks/redux';
import { privateRoutes, publicRoutes, RouteNames } from './router';
import { IAuthUser } from './models/IUser';
import './app.scss';
// Лучше сделать отдельный компонент - AppRouter
const App: FC = () => {
  const {isAuth} = useAppSelector(state => state.authReducer);
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || ''), avatar: localStorage.getItem('avatar' || '') } as IAuthUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Router>
      {
        isAuth ?
        <>
          <Sidebar/>
            <div className="container">
              <Header/>
              <Switch>
                {privateRoutes.map(route => <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>)}
                <Redirect to={RouteNames.HOME}/>
              </Switch>
            </div>
        </>
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
