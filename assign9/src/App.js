import React, {useState} from "react";
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

  const [loggedIn, setLoggedIn] = useState(false);

  const login = (username, password) => {
    console.log(username, password);

    try {

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"email": username, "password": password})
      };
          
      const URL = "/api/user/login";
      console.log(URL, username, password);

      fetch(URL, requestOptions)
          .then(response => {
              console.log(response);
              if (response.status === 200) {
                  setLoggedIn(true);
                  return response.json();
              }
              else {
                  setLoggedIn(false);

                  new Error();
              } 
          })
          .then(result => {
              console.log(result);  

          }).catch((error) => {
              setLoggedIn(false);
              console.error("Fetch API Call failed with an error " + error);
          });

    } catch (error) {
      console.error(error);
      setLoggedIn(false);
      console.log("error", error);
    }  

  }


  return (
    <div className="container-fluid">
      <Router>
        <div>
          <Navbar />
          <hr />

          <Routes>
            <Route path="/" element={<Home login={login} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobs" element={<Jobs />} />


          </Routes>
        </div>
      </Router>
    </div>
  

  );
};

export default App;