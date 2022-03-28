import {Col,Image} from 'react-bootstrap'
import { Link} from "react-router-dom"
import DropAdmin from '../components/dropdownProfile'
import icon from '../assets/icon.png'


export default function NavbarAdmin() {
    return (
        <>
            <div className="d-flex justify-content-between mt-4 mb-5">
                <Col lg="10">
                    <div><Link to="/admin-transaction"><Image src={icon} style={{width: "150px"}} className="icon2"></Image></Link></div>
                </Col>
                <Col lg="2">
                    <div className="ms-5"><DropAdmin/></div>
                </Col>
            </div>
        </>
    )
}