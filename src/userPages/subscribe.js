import { Link} from "react-router-dom";
import {Nav, Form, Button, Col, Row, Container, Image} from 'react-bootstrap'
import icon from '../assets/icon.png'
import iconProfile from '../assets/iconProfile.jpg'
import wow from '../assets/wow.png'
import file from '../assets/file.png'
import { Icon } from '@iconify/react'



function Subscribe(){
    return (
        <>
    <Container fluid>
    <Row>
            <Col lg="3">
                <Nav defaultActiveKey="/home" className="nav justify-content-center">
                    <div className="">
                        <div className="ms-5 mt-3 mb-3">
                           <Image src={icon} className="icon2 ms-5 pointer"></Image>
                        </div>
                        <div className="mb-4">
                            <div className="d-flex justify-content-center">   
                                    <Image src={iconProfile} className="iconProfile pointer"></Image>        
                            </div>
                            <h5 className="text-center mt-4">Jemmy Yosua Alie</h5>
                            <p className="p1 text-center mt-3 fw-bolder" style={{color:"red"}}>Not Subscribed Yet</p>
                            <hr className="ms-5" />
                        </div>

                        <Col lg="6">
                        <div className="d-flex ms-5 mb-4">
                            <Icon className="pointer" icon="ant-design:user-outlined" color="#9c9c9c" width="33" height="33" />
                            <p className="mt-1 ms-2 pointer">Profile</p>
                        </div>
                        </Col>

                       
                        <Col lg="5" className="ms-5 mb-5">
                            <Link to="/subscribe" className="active-link text-decoration-none">        
                                <p className="mb-4 text-reset fw-bolder"><Icon className="" icon="uil:bill" width="33" height="33" /> Subscribe</p>
                            </Link>
                        </Col>
                        
                        <hr className="ms-5" />

                        <div className=" d-flex ms-5 mt-4">
                            <Icon className="pointer" icon="ic:sharp-logout" color="#9c9c9c" width="33" height="33" />
                            <p className="mt-1 ms-2 pointer">Logout</p>
                        </div>
                    </div>         
                </Nav>
        </Col>

        <Col lg="9">
               <div className="d-flex flex-column align-items-center mt-5 me-5">
                    <h3 className="fw-bold mt-5">Premium</h3>
                    <p className="">Pay now and access all the latest books from <Image src={wow} className=""></Image></p>
                    <h6 className="fw-bold"><Image src={wow} className=""></Image> : 0981312323</h6>
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
                            <Button className="mt-2" variant="danger" size="md">
                                Send
                            </Button>
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