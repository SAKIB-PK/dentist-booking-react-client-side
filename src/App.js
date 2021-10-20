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
import SpecialMsg from './component/SpecialMsg/SpecialMsg';
import FirebaseAuth from './context/FirebaseAuth';
import PrivateRoute from './context/PrivateRoute';
import useServices from './hooks/useServices';


function App() {
  const post = useServices()
  
  return (
    // context api wrap all the component
    <FirebaseAuth>
      <Router>
        {/* Navbar is default component */}
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
            <PrivateRoute path='/special'>
              <SpecialMsg />
            </PrivateRoute>
            <Route path='/signup'>
              <Registration/>
            </Route>
            <PrivateRoute path='/details/:id'>
              <ServiceDetail post ={post}/>
            </PrivateRoute>
            {/* 404 page show  */}
            <Route path='*'>
              <Page404/>
            </Route>

        </Switch>
      </Router>
    </FirebaseAuth>
    
  );
}

export default App;
