import {React, useState, useContext} from 'react'
import icon from '../assets/icon.png'
import vector from '../assets/vector.png'
import {Row, Col, Button } from 'react-bootstrap'
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
       <img className="img1" src={vector} alt="" width="100%" height="100%" />
        <Col className="ms-4" lg="7">
        <div className=" ms-5">
                <img className="icon mt-4" src={icon} alt="" />
                <p>Sign-up now and subscribe to enjoy all the cool 
                    <br/> and latest books - The best book rental service 
                    <br /> provider in Indonesia</p>
                <Col lg="8">
                    <Row className="mt-5">
                        <Col>
                        <Button className="px-5 btn-sign" variant="danger" onClick={handleSignUpShow}>
                            Sign Up
                        </Button>
                        <SignUp show={signUp} handleClose={handleSignUpClose}/>
                        </Col>
                        <Col>
                        <Button className="px-5 btn-sign" variant="secondary" onClick={handleSignInShow}>
                            Sign In
                        </Button>
                        <SignIn show={signIn} handleClose={handleSignInClose}/>
                        </Col>
                    </Row>   
                </Col> 
        </div>
        </Col>
   </>
    )
    
}

export default LandingPage;