import {Dropdown, ButtonGroup, Row, Container} from 'react-bootstrap'
import { Link} from "react-router-dom";
import { Icon } from '@iconify/react'

function DropAdmin(){
    return (
        <Dropdown as={ButtonGroup}> 
        <Dropdown.Toggle className="ms-2" split variant="white" id="dropdown-split-basic" />
      
        <Dropdown.Menu>
          <Dropdown.Item style={{color : 'black', }}><Link to="/add-book" className="text-decoration-none text-reset"><Icon className="ms-1 me-1" icon="bi:bookmark" color="#9c9c9c" width="20" height="20" /> Add Book</Link></Dropdown.Item>      
          <Container>
          <Row>
          <hr className="mt-3" />
          </Row>
          </Container>
          <Dropdown.Item style={{color : 'black', }}><Link to="/" className="text-decoration-none text-reset"><Icon className="ms-1 me-1" icon="ic:sharp-logout" color="#ff3045" width="20" height="20" />Logout</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      )
}

export default DropAdmin