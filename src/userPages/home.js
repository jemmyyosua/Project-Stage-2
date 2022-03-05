import {Nav, Col, Row, Container, Image, Card} from 'react-bootstrap'
import icon from '../assets/icon.png'
import iconProfile from '../assets/iconProfile.jpg'
import { Icon } from '@iconify/react'
import homeTemplate from '../assets/homeTemplate.png'
import book from '../assets/book-1.png'

function Home(){
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
                            <div className="ms-5">
                                <span className="ms-2">
                                    <Image src={iconProfile} className="iconProfile ms-5 pointer"></Image>
                                </span>
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
                            <Icon className="pointer" icon="uil:bill" color="#9c9c9c" width="33" height="33" />   
                            <p className="mt-1 ms-2 pointer">Subscribe</p>
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
            <Image src={homeTemplate} className="mt-3 ms-4 mb-2 pointer" width="90%" height="42%"></Image>

            <div className="ms-5">
                <h4 className="fw-bold">List Book</h4>
                <div className="d-flex flex-wrap">
                    <Col lg="2" className=" me-4">
                    <div className="me-5 mt-3 pointer">
                        <Image src={book} className="" width="120%" height="180vh"></Image> 
                        <div className="mt-2">
                        <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                        <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                        <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                        <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                        </div>
                        <p className="p1 fw-bold mt-1">1980</p> 
                        <h6 className="fw-bold" style={{marginBlockStart:"-10px"}}>Serangkai</h6>
                        <p className="p1">Valerie Patkar</p>  
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