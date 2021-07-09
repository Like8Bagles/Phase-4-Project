import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Home from './containers/Home.js'
import Navigation from './components/Navigation'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  // const history = useHistory()

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" render={routerProps => <Signup {...routerProps} onSignup={onSignup} />} />
      </Switch>
    </div>
  );
}

export default App;
