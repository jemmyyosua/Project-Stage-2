import {Row,Container, Table} from 'react-bootstrap'
import { Link} from "react-router-dom";
import Drop from '../components/dropdownAction'
import Navbar from '../components/navbar-admin';

function Transaction(){
    return (
        <>         
            <Container>
                <Navbar/>
                <Row>
                    <div className="mt-3">
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