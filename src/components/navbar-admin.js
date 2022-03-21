import {Col, Image} from 'react-bootstrap'
import { Link} from "react-router-dom"
import DropAdmin from '../components/dropdownProfile'
import icon from '../assets/icon.png'


export default function Navbar() {
    return (
        <div className="d-flex justify-content-between mt-4 mb-5">
        <Col lg="3">
            <Link to="/admin-transaction"><Image src={icon} className="icon2"></Image></Link>
        </Col>
        
        <Col lg="1" className="mt-1">
            <div>             
            <DropAdmin/>
            </div>
        </Col> 
        </div> 
    )
}