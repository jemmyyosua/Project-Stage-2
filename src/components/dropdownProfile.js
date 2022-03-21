import {Dropdown, Row, Image, Container } from 'react-bootstrap'
import { Link, useNavigate} from "react-router-dom"
import React from 'react'
import { Icon } from '@iconify/react'
import iconProfile from '../assets/iconProfile.jpg'

import { UserContext } from "../context/userContext"
import { useContext} from "react"


function DropAdmin(){
  const [state, dispatch] = useContext(UserContext);

    const navigate = useNavigate()
  
    const logout = () => {
      console.log(state);
      dispatch({
        type: "LOGOUT",
      });
     navigate("/", { replace: true })
    }


  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      
    </a>
  ))

return (
<Dropdown>
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
    <Image src={iconProfile} width="80%" roundedCircle></Image>
    </Dropdown.Toggle>

    <Dropdown.Menu align="end" className="mt-4">
      <Dropdown.Item eventKey="1"><Link className="text-reset text-decoration-none fw-bold" to="/add-book"><p><Icon className="me-1" icon="fluent:book-add-24-regular" color="#383838" width="25" height="25" /> Add Book</p></Link></Dropdown.Item>
      <Container>
      <Row>
      <Dropdown.Divider />
      </Row>
      </Container>
      <Dropdown.Item eventKey="2"><p onClick={logout} className="fw-bold pointer"><Icon className="me-1" icon="ic:sharp-logout" color="red" width="25" height="25" />Logout</p></Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)
}

export default DropAdmin