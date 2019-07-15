import React, { Component } from 'react';
import TopNav from './Components/TopNav/TopNav'
import MainHeader from './Components/MainHeader/MainHeader'
// import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopNav />
        <MainHeader />
        {/* <About /> */}
        <Projects />
        <Experience />
        <Contact />
      </div>
      )
  }
}

export default App;
