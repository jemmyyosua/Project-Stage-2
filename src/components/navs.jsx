import { Link, useNavigate} from "react-router-dom";
import {Navbar, Col, Image} from 'react-bootstrap'
import icon from '../assets/icon.png'
import iconProfile from '../assets/iconProfile.png'
import { Icon } from '@iconify/react'

import { UserContext } from "../context/userContext"
import { useContext} from "react"


function Sidebar({name, userStatus}){
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
                <Navbar>
                    <div>  
                        <div className="ms-5 mt-3 mb-3">
                        <Link to="/"><Image src={icon} className="icon2 ms-5 pointer"></Image></Link>
                        </div>
                        <div className="mb-4">
                        <div className="ms-2">
                            <Col lg="1" className="ms-5 mb-4">  
                                <Link to="/profile">
                                    <Image roundedCircle width="100px" src={iconProfile} className="ms-5 pointer"></Image>  
                                </Link>  
                            </Col>
                            </div>
                            <h5 className="text-center me-4 mt-4">{name}</h5>
                                {userStatus}
                            <hr className="ms-5" />
                        </div>

                        <Col lg="5" className="ms-5 mb-4">
                            <Link to="/profile" className="text-decoration-none">                    
                                <p className="mt-1 pointer"><Icon className="me-1" icon="ant-design:user-outlined" width="33" height="33" /> Profile</p>
                            </Link>
                        </Col>

                       
                        <Col lg="5" className="ms-5 mb-5">
                            <Link to="/subscribe" className="text-decoration-none">        
                                <p className="mb-4 pointer"><Icon className="" icon="uil:bill" width="33" height="33" /> Subscribe</p>
                            </Link>
                        </Col>
                        
                        <hr className="ms-5" />

                        <Col lg="5" className="ms-5">         
                            <p onClick={logout} className="mt-4 ms-1 pointer"><Icon className="me-1" icon="ic:sharp-logout" color="#9c9c9c" width="33" height="33" /> Logout</p>
                        </Col>
                    </div>         
                </Navbar>
    )
}

export default Sidebar;
