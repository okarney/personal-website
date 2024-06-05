import React from 'react';
//import react;
import './App.css';

import Homepage from './Components/Homepage';
import About from './Components/About';
import Projects from './Components/Projects';


import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
            <Router>
                <Routes>
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        path="/"
                        element={<Homepage />}
                    />
                    
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        path="/About"
                        element={<About />}
                    />

                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        path="/Projects"
                        element={<Projects />}
                    />
 
                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    {/* <Route
                        path="*"
                        element={<Navigate to="/" />}
                    /> */}
                </Routes>
            </Router>
        </>
  );
}

export default App;
