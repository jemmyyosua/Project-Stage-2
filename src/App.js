import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/style.css';
import LandingPage from './components/landingPage'
import Home from './userPages/home';
import Subscribe from './userPages/subscribe';
import Profile from './userPages/profile';
import DetailBook from './userPages/detailBook';
import Transaction from './adminPages/transaction';
import AddBook from './adminPages/addBook';

import { UserContext } from "./context/userContext";
import { API } from "./api/api";
import { useContext, useEffect } from "react";

function App(){ 
    let api = API()
    const [state, dispatch] = useContext(UserContext);
  
    useEffect(() => {
      // Redirect Auth
      if (!state.isLogin) {
        <Link to="/" />
      } else {
        if (state.user.role === "admin") {
            <Link to="/admin-transaction" />
          // history.push("/complain-admin");
        } else if (state.user.role === "user") {
            <Link to="/home" />
        }
      }
    }, [state]);
  
    const checkUser = async () => {
      try {
        const config = {
          method: "GET",
          headers: {
            Authorization: "Basic " + localStorage.token,
          },
        };
        const response = await api.get("/user", config);
  
        // If the token incorrect
        if (response.status === "failed") {
          return dispatch({
            type: "AUTH_ERROR",
          });
        }
  
        // // Get user data
        let payload = response.data.user;
        // // Get token from local storage
        payload.token = localStorage.token;
  
        // // Send data to useContext
        dispatch({
          type: "USER_SUCCESS",
          payload,
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      checkUser();
    }, []);
  

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/subscribe" element={<Subscribe />}/>
                <Route exact path="/profile" element={<Profile />}/>
                <Route exact path="/detail-book" element={<DetailBook />}/>
                <Route exact path="/admin-transaction" element={<Transaction />}/>
                <Route exact path="/add-book" element={<AddBook />}/>
            </Routes>
        </Router>
        )
}

export default App;
