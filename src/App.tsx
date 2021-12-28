import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CreatePost from './pages/CreatePost';
import CreateProduct from './pages/CreateProduct';
import CreateUser from './pages/CreateUser';
import Home from './pages/Home';
import PostList from './pages/PostList';
import ProductList from './pages/ProductList';
import UserList from './pages/UserList';

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/products'>
        <ProductList/>
      </Route>
      <Route path='/createproduct'>
        <CreateProduct/>
      </Route>
      <Route path='/users'>
        <UserList/>
      </Route>
      <Route path='/createuser'>
        <CreateUser/>
      </Route>
      <Route path='/posts'>
        <PostList/>
      </Route>
      <Route path='/createpost'>
        <CreatePost/>
      </Route>
    </Router>
  );
};


export default App;
