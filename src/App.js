import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Navbar from './component/Navbar/Navbar';
import Page404 from './component/page404/Page404';
import Registration from './component/Registration/Registration';
import FirebaseAuth from './context/FirebaseAuth';


function App() {
  return (
    <FirebaseAuth>
      <Router>
        <Navbar/>
        <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/home'>
              <Home/>
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/signup'>
              <Registration/>
            </Route>
            <Route path='*'>
              <Page404/>
            </Route>

        </Switch>
      </Router>
    </FirebaseAuth>
    
  );
}

export default App;
