import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">User Directory System</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/jobs" className="nav-link">Jobs</Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
    );

};