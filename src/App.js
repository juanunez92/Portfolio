import './App.css';
import React from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Project';


function App() {
  return (
    <div>
    <Navbar/>  
    <AboutMe/>
    <Projects/>
    <Contact/>
    </div>
   
  );
}

export default App;
