import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Projects from './components/Project/Project';


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
