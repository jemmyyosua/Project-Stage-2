import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/style.css';
import Home from './userPages/home';
import LandingPage from './userPages/landingPage';


function App(){
    return  (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/home" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App;
