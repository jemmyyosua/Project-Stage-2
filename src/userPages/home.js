import {Nav, Col, Row, Container, Image, Card} from 'react-bootstrap'
import {useState} from 'react'
import { Link} from "react-router-dom";
import icon from '../assets/icon.png'
import iconProfile from '../assets/iconProfile.jpg'
import { Icon } from '@iconify/react'
import homeTemplate from '../assets/homeTemplate.png'
import book from '../assets/book-1.png'
import Popup from '../components/PopupNotSubs';


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
                        <div className="ms-5 mt-3 mb-3">
                        <Link to="/home"><Image src={icon} className="icon2 ms-5 pointer"></Image></Link>
                        </div>
                        <div className="mb-4">
                            <Col lg="6" className="ms-5 mb-4">  
                                <Link to="/profile">
                                    <Image src={iconProfile} className="ms-5 iconProfile pointer"></Image>  
                                </Link>  
                            </Col>
                            <h5 className="text-center mt-4">Jemmy Yosua Alie</h5>
                            <p className="p1 text-center mt-3 fw-bolder" style={{color:"red"}}>Not Subscribed Yet</p>
                            <hr className="ms-5" />
                        </div>

                        <Col lg="5" className="ms-5 mb-4">
                            <Link to="/profile" className="text-decoration-none">                    
                                <p className="mt-1 pointer"><Icon className="me-1" icon="ant-design:user-outlined" width="33" height="33" /> Profile</p>
                            </Link>
                        </Col>

                       
                        <Col lg="5" className="ms-5 mb-5">
                            <Link to="/subscribe" className="text-decoration-none">        
                                <p className="mb-4 pointer"><Icon className="me-1" icon="uil:bill" width="33" height="33" /> Subscribe</p>
                            </Link>
                        </Col>
                        
                        <hr className="ms-5" />

                        <Col lg="5" className="ms-5">      
                            <p className="mt-4 ms-1 pointer"><Icon className="me-1" icon="ic:sharp-logout" color="#9c9c9c" width="33" height="33" /> Logout</p>
                        </Col>
                    </div>         
                </Nav>
        </Col>

        <Col lg="9">
            <Image src={homeTemplate} className="mt-3 ms-5 mb-2 pointer" width="85%" height="40%"></Image>
            <div className="ms-5"> 
                <h4 className="fw-bolder ms-3">List Book</h4> 
                <Popup/>
                <div className="d-flex flex-wrap">     
                    <Card border="light" className="me-5 text-center pointer" style={{ width: '7.3rem' }}>
                        <Link to="/home"><Image src={book} width="100%" height="180vh"></Image></Link>   
                            <div className="mt-1">
                                <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                </div>
                            <h6 className="fw-bold">Serangkai</h6>
                            <p className="p1">Valerie Patkar</p>  
                            <p className="p1 fw-bold" style={{marginBlockStart:"-10px"}}>1980</p>             
                    </Card>  
                </div>
            </div>      
        </Col>
     </Row>
    </Container>
    </>
    )
}


export default Home;

