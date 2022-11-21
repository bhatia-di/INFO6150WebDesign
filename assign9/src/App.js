import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { About } from "./App/About/About";
import { Contact } from "./App/Contact/Contact";
import { Home } from "./App/Home/Home";
import { Jobs } from "./App/Jobs/Jobs";
import { Navbar } from "./Navbar/Navbar";


const App = () => {


  return (
    <div className="container-fluid">
      <Router>
        <div>
          <Navbar />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobs" element={<Jobs />} />


          </Routes>
        </div>
      </Router>
      <h1>React application</h1>
    </div>
  

  );
};

export default App;