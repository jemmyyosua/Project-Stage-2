import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/style.css';
import Home from './userPages/home';
import LandingPage from './components/landingPage'
import Subscribe from './userPages/subscribe';
import Profile from './userPages/profile';
import DetailBook from './userPages/detailBook';

function App(){
    return  (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/subscribe" element={<Subscribe />}/>
                <Route exact path="/profile" element={<Profile />}/>
                <Route exact path="/detail-book" element={<DetailBook />}/>
            </Routes>
        </Router>
    )
}

export default App;
