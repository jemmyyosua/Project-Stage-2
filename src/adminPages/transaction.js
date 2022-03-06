import {Col, Row, Navbar ,Container, Image, Table, Dropdown} from 'react-bootstrap'
import { Link} from "react-router-dom";
import icon from '../assets/icon.png'
import iconProfile from '../assets/iconProfile.jpg'
import Drop from '../components/dropdownAction'
import DropAdmin from '../components/dropdownProfile'


function Transaction(){
    return (
        <>         
            <Container>
           
                    <div className="d-flex justify-content-between mt-4 mb-5">
                    <Col lg="3">
                        <Link to="/home"><Image src={icon} className="icon2"></Image></Link>
                    </Col>
                    
                    <Col lg="2" className="mt-1">
                        <div>             
                        <Image src={iconProfile} width="35%" roundedCircle></Image>
                        <DropAdmin/>
                        </div>
                    </Col> 
                    </div> 
            
                <Row>
                    <div className="">
                        <h5 className="fw-bold">Incoming Transaction</h5>
                        <Table responsive="lg" style={{border: 'white'}} striped bordered hover>
                            <thead style={{color: 'red'}}>
                            <tr>
                                <th>No</th>
                                <th>Users</th>
                                <th>Bukti Transfer</th>
                                <th>Remaining Active</th>
                                <th>Status User</th>
                                <th>Status Payment</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td><Drop/></td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Transaction