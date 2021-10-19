import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Doctor from './component/Doctor/Doctor';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Navbar from './component/Navbar/Navbar';
import Page404 from './component/page404/Page404';
import Registration from './component/Registration/Registration';
import ServiceDetail from './component/ServiceDetail/ServiceDetail';
import FirebaseAuth from './context/FirebaseAuth';
import PrivateRoute from './context/PrivateRoute';
import useServices from './hooks/useServices';


function App() {
  const post = useServices()
  
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
            <PrivateRoute path='/doctor'>
              <Doctor/>
            </PrivateRoute>
            <Route path='/login'>
              <Login/>
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/signup'>
              <Registration/>
            </Route>
            <Route path='/details/:id'>
              <ServiceDetail post ={post}/>
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
