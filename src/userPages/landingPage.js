import icon from '../assets/icon.png'
import vector from '../assets/vector.png'
import {Row, Col, Button } from 'react-bootstrap'
import SignIn from '../PopupSubs.js/SignIn'
import SignUp from '../PopupSubs.js/SignUp'

function LandingPage(){
    return (
    <>
        <img className="img1" src={vector} alt="" />
        <Col className="ms-5" lg="7">
        <div className="col ms-5">
                <img className="icon mt-4" src={icon} alt="" />
                <p>Sign-up now and subscribe to enjoy all the cool 
                    <br/> and latest books - The best book rental service 
                    <br /> provider in Indonesia</p>
                <Col lg="8">
                    <Row className="mt-5">
                        <Col><SignUp/></Col>
                        <Col><SignIn/></Col>
                    </Row>   
                </Col> 
        </div>
        </Col>
   </>
    )
    
}

export default LandingPage;