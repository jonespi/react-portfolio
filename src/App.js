import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TopNav from './Components/TopNav/TopNav'
import MainHeader from './Components/MainHeader/MainHeader'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import More from './Components/More/More'
import Contact from './Components/Contact/Contact'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopNav />
        <Route exact path='/' component={MainHeader} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/more' component={More} />
        <Route path='/contact' component={Contact} />
      </div>
      )
  }
}

export default App;
