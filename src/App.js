import React from 'react'
import './style.css'
import Profile from './components/Profile'
import Links from './components/Links';
import Technologies from './components/Technologies';
import Education from './components/Education';
import MyProjects from './components/MyProjects';


function App() {
  return (
    <div className='container'>
    <div className='contain'>
    <Profile />
    <Links />
    <Technologies />
    <Education />
    </div>
    <MyProjects />
    </div>
  );
}

export default App;
