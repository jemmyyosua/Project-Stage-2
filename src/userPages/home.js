import {Nav, Col, Row, Container, Image, Button, Alert} from 'react-bootstrap'
import {useState} from 'react'
import { Link} from "react-router-dom";
import icon from '../assets/icon.png'
import iconProfile from '../assets/iconProfile.jpg'
import { Icon } from '@iconify/react'
import homeTemplate from '../assets/homeTemplate.png'
import book from '../assets/book-1.png'
import Popup from '../components/PopupNotSubs';
import { render } from '@testing-library/react';

function Home(){

const [show, setShow] = useState(true);
const handleClose = () => setShow(false); 

    return (
    <>
    <Container fluid>
    <Row>
            <Col lg="3">
                <Nav defaultActiveKey="/home" className="nav justify-content-center">
                    <div className="">
                        <div className="ms-4 mt-3 mb-1">
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

                        <div className="d-flex ms-5 mb-5">
                           <Link to="/subscribe"> <Icon className="pointer" icon="uil:bill" color="#9c9c9c" width="33" height="33" /> </Link>      
                           <Link to="/subscribe" className="text-reset text-decoration-none fw-bolder" ><p className="mb-4 mt-1 ms-2 pointer">Subscribe</p></Link> 
                        </div>
                        <hr className="ms-5" />

                        <div className=" d-flex ms-5 mt-4">
                            <Icon className="pointer" icon="ic:sharp-logout" color="#9c9c9c" width="33" height="33" />
                            <p className="mt-1 ms-2 pointer">Logout</p>
                        </div>
                    </div>         
                </Nav>
        </Col>

        <Col lg="9">
            <Image src={homeTemplate} className="mt-3 ms-5 mb-2 pointer" width="85%" height="40%"></Image>
            <div className="ms-5"> 
                <h4 className="fw-bolder ms-3">List Book</h4> 
                <Popup/>
                <div className="d-flex flex-wrap">
                    <Col lg="2" className="">  
                    <div className=" d-flex flex-column align-items-center">
                    <Link to="/home"><Image src={book} width="85%" height="180vh"></Image></Link>
                    <div className="mt-1">
                        <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                        <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                        <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                        <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                        </div>
                    <h6 className="fw-bold">Serangkai</h6>
                    <p className="p1">Valerie Patkar</p>  
                    <p className="p1 fw-bold" style={{marginBlockStart:"-10px"}}>1980</p>    
                        </div>                           
                    </Col>
                </div>
            </div>      
        </Col>
     </Row>
    </Container>
    </>
    )
}

export default Home;
