
import React from 'react';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import './App.css';
import Article from "./components/Article";


const App = () => (
  <div>
    <NavBar />

    <SignUp />

    {/* <Landing/> */}
    <Article/>
  </div>
);

export default App;
