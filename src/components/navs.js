import { Link} from "react-router-dom";
import {Navbar, Col, Image} from 'react-bootstrap'
import icon from '../assets/icon.png'
import iconProfile from '../assets/iconProfile.jpg'
import { Icon } from '@iconify/react'



function Sidebar(){
    return (
                <Navbar defaultActiveKey="/home" className="justify-content-center">
                    <div className="">
                        
                        <div className="ms-5 mt-3 mb-3">
                        <Link to="/home"><Image src={icon} className="icon2 ms-5 pointer"></Image></Link>
                        </div>
                        <div className="mb-4">
                        <div className="ms-2">
                            <Col lg="7" className="ms-5 mb-4">  
                                <Link to="/profile">
                                    <Image roundedCircle width="50%" src={iconProfile} className="ms-5 pointer"></Image>  
                                </Link>  
                            </Col>
                            </div>
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
                            <Link to="/" className="text-decoration-none">        
                                <p className="mt-4 ms-1 pointer"><Icon className="me-1" icon="ic:sharp-logout" color="#9c9c9c" width="33" height="33" /> Logout</p>
                            </Link>
                        </Col>
                    </div>         
                </Navbar>
    )
}

export default Sidebar;