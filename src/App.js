import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer'
import Home from './pages/Home'
const App=()=>{
  return<>
  <Router>
    <Navbar/>

  <Switch>
        <Route path="/" component={Home} />
  </Switch>
  
    <Footer />
  </Router>
  </>
}

export default App