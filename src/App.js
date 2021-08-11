import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from'./components/Contact/Contact';
import { render } from '@testing-library/react';
import { Route, Switch, Redirect} from 'react-router-dom';


class  App extends Component{ 
render(){
  return (
    <div>
  <Route path='/home' render={(props) => (
            <Home {...props}/>
          )}/>
 <Route path='/about' render={(props) => (
            <About {...props}/>
          )}/>
    <Route path='/contact' render={(props) => (
            <Contact {...props}/>
          )}/>
    
    </div>
    );
  }
}

export default App;

