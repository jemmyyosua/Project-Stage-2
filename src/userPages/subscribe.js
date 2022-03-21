import { Link, useNavigate} from "react-router-dom";
import {Nav, Form, Button, Col, Row, Container, Image} from 'react-bootstrap'
import icon from '../assets/icon.png'
import iconProfile from '../assets/iconProfile.jpg'
import wow from '../assets/wow.png'
import file from '../assets/file.png'
import { Icon } from '@iconify/react'
import Popup from "../components/PopupSubs";

import { UserContext } from "../context/userContext"
import { useContext} from "react"


function Subscribe(){

    const [state, dispatch] = useContext(UserContext);

    const navigate = useNavigate()

    const logout = () => {
        console.log(state);
        dispatch({
        type: "LOGOUT",
        });
        navigate("/", { replace: true })
    }

    return (
        <>
    <Container fluid>
    <Row>
    <Col lg="3">
                <Nav defaultActiveKey="/home" className="nav justify-content-center">
                    <div className="">
                        <div className="ms-5 mt-3 mb-3">
                        <Link to="/home"><Image src={icon} className="icon2 ms-5 pointer"></Image></Link>
                        </div>
                        <div className="mb-4">
                            <div className="ms-2">
                                    <Col lg="7" className="ms-5 mb-3">  
                                        <Link to="/profile">
                                            <Image roundedCircle src={iconProfile} className="ms-5 iconProfile pointer"></Image>  
                                        </Link>  
                                    </Col>
                                </div>
                            <h5 className="text-center">Jemmy Yosua Alie</h5>
                            <p className="p1 text-center mt-3 fw-bolder" style={{color:"red"}}>Not Subscribed Yet</p>
                            <hr className="ms-5" />
                        </div>

                        <Col lg="5" className="ms-5 mb-4">
                            <Link to="/profile" className="text-decoration-none">                    
                                <p className="mt-1 pointer"><Icon className="me-1" icon="ant-design:user-outlined" width="33" height="33" /> Profile</p>
                            </Link>
                        </Col>

                       
                        <Col lg="5" className="ms-5 mb-5">
                            <Link to="/subscribe" className="text-decoration-none fw-bold">        
                                <p className="mb-4 pointer active-link"><Icon className="me-1" icon="uil:bill" width="33" height="33" /> Subscribe</p>
                            </Link>
                        </Col>
                        
                        <hr className="ms-5" />

                        <Col lg="5" className="ms-5"> 
                            <p onClick={logout} className="mt-4 ms-1 pointer"><Icon className="me-1" icon="ic:sharp-logout" color="#9c9c9c" width="33" height="33" /> Logout</p>
                        </Col>
                    </div>         
                </Nav>
        </Col>

        <Col lg="7">
               <div className="d-flex flex-column align-items-center mt-5">
                    <h3 className="fw-bold mt-5">Premium</h3>
                    <p className="">Pay now and access all the latest books from <Image src={wow}></Image></p>
                    <h6 className="fw-bold"><Image src={wow}></Image> : 0981312323</h6>
                    <Col lg="4">
                    <Form>
                    ` <Form.Group className="mt-2 mb-4" controlId="formBasicEmail">
                        <Form.Control className="text-center py-1" type="text" placeholder="Input your account number" required/>
                        </Form.Group>

                        <Form.Group className="mt-4 mb-4" controlId="formBasicEmail">
                            <div class="input-blog-image-group">
                                <label for="input-blog-image">
                                <p>Attach proof of transfer</p>
                                <Image src={file} className=""></Image>
                                </label>
                                <input type="file" id="input-blog-image" hidden />
                            </div>
                        </Form.Group>

                        <div className="d-grid mt-4 mb-3">
                            <Popup/>
                        </div>
                    </Form>
                    </Col>
               </div>       
        </Col>
     </Row>
    </Container>
    </>
    )
}

export default Subscribe