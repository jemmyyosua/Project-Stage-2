import {React, useState, useContext} from 'react'
import icon from '../assets/icon.png'
import vector from '../assets/vector.png'
import {Row, Col, Button, Container } from 'react-bootstrap'
import SignIn from './modalSignIn'
import SignUp from './modalSignUp'

import {UserContext} from '../context/userContext'

function LandingPage(){
    const [state] = useContext(UserContext)

    document.title = "Wow-App"

    const [signUp, setSignUp] = useState(false)
    const handleSignUpClose = () => setSignUp(false)
    const handleSignUpShow = () => setSignUp(true)

    const [signIn, setSignIn] = useState(false)
    const handleSignInClose = () => setSignIn(false)
    const handleSignInShow = () => setSignIn(true)
    

    return (
    <>
       <img className="img1" src={vector} alt="" style={{width : "100%", height : "100%" }} />
        <div className="containerLanding" style={{minWidth : "100%", minHeight : "100vh"}}>
        <Container>
                <img className="ms-3 mt-4" style={{minWidth : "20%", maxWidth : "90%"}} src={icon} alt="" />
                    <p className="ms-3" style={{marginTop : "-5%",width : "fit-content"}}>Sign-up now and subscribe to enjoy all the cool 
                    <br/> and latest books - The best book rental service 
                    <br /> provider in Indonesia</p>
                    <br />
                        <Button style={{fontOpticalSizing : "auto"}} className="px-5 ms-3 me-5 btn-sign" variant="danger" onClick={handleSignUpShow}>
                            Sign Up
                        </Button>
                        <SignUp show={signUp} handleClose={handleSignUpClose}/>
    
                        <Button className="px-5 ms-3 btn-sign" variant="secondary" onClick={handleSignInShow}>
                            Sign In
                        </Button>
                        <SignIn show={signIn} handleClose={handleSignInClose}/> 
        </Container>
        </div>
        
   </>
    )
    
}

export default LandingPage;
