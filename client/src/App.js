import React from 'react';
import {Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Navbar from './components/Navbar';
import Jokes from './components/Jokes';
import './App.scss';

function App() {

  return (
    <div className="App">
      <Route
        path='/'
        render={props => {
          return <Navbar {...props}/>;
        }}
      />
      <Route
        exact path='/'
        render={props => {
          return <LoginForm {...props}/>;
        }}
      />
      <Route
        exact path='/register'
        render={props => {
          return <RegisterForm {...props}/>;
        }}
      />
      <Route 
      path='/jokes'
      render={props => {
        return <Jokes {...props}/>
      }}/>
    </div>
  );
}

export default App;
