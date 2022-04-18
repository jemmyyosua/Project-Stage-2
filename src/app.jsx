import { Routes, Route, useNavigate} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './css/style.css'
import LandingPage from './components/landingPage'
import Home from './userPages/home'
import Subscribe from './userPages/subscribe'
import Profile from './userPages/profile'
import DetailBook from './userPages/detailBook'
import Transaction from './adminPages/transaction'
import AddBook from './adminPages/addBook'
import {ReadBook} from './userPages/readBook'

import { UserContext } from "./context/userContext"
import { API } from "./api/api"
import {useState, useContext, useEffect } from "react"

export default function App(){ 
    let api = API()
    const navigate = useNavigate()
    const [state, dispatch] = useContext(UserContext)
  
    useEffect(() => {
      // Redirect Auth
      if (!state.isLogin) {
        navigate("/", {replace:true})
      } else {
        if (state.user.role === "admin") {
          navigate("/admin-transaction", {replace:true})
        } else if (state.user.role === "user") {
          navigate("/home", {replace:true})
        }
      }
    }, [state])
  
    const checkUser = async () => {
      try {
        const config = {
          method: "GET",
          headers: {
            Authorization: "Basic " + localStorage.token,
          },
        }
        const response = await api.get("/check-auth", config)
  
        // If the token incorrect
        if (response.status === "failed") {
          return dispatch({
            type: "AUTH_ERROR",
          })
        }
  
        // // Get user data
        let payload = response.data.user
        // // Get token from local storage
        payload.token = localStorage.token

        // // Send data to useContext
        dispatch({
          type: "USER_SUCCESS",
          payload,
        })
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      checkUser()
    }, [])
    
    return(
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/subscribe" element={<Subscribe />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/book/:id" element={<DetailBook />}/>
                <Route path="/read-book/:id" element={<ReadBook />} />
                <Route path="/admin-transaction" element={<Transaction />}/>
                <Route path="/add-book" element={<AddBook />}/>
            </Routes>
        )
}

