import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Users from './pages/Users';

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/users'>
        <Users/>
      </Route>
      <Route path='/posts'>
        <Posts/>
      </Route>
      <Route path='/createpost'>
        <CreatePost/>
      </Route>
    </Router>
  );
};


export default App;
