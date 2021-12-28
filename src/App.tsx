import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CreateItem from './pages/CreateItem';
import Home from './pages/Home';
import ItemList from './pages/ItemList';

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/products'>
        <ItemList/>
      </Route>
      <Route path='/createproduct'>
        <CreateItem/>
      </Route>
      <Route path='/users'>
        <ItemList/>
      </Route>
      <Route path='/createuser'>
        <CreateItem/>
      </Route>
      <Route path='/posts'>
        <ItemList/>
      </Route>
      <Route path='/createpost'>
        <CreateItem/>
      </Route>
    </Router>
  );
};


export default App;
