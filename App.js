import React from 'react'
import {BrowserRouter, router, routes, routes, Link} from 'raect-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App(){
  return(
    <router>
      <nav>
        <link to="/">Home</link>
        <link to="/Courses">Courses</link>
        <link to="/Contact">Contact</link>
      </nav>
      <routes>
        <route path='/' element={<Home/>}/>
        <route path='/Courses' element={<Courses/>}/>
        <route path='/Contact' element={<Contact/>}/>
      </routes>
    </router>
  );
}
export default App;