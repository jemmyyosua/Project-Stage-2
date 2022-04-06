import {Row,Container, Table, Pagination, Col} from 'react-bootstrap'
import Drop from '../components/dropdownAction'
import NavbarAdmin from '../components/navbar-admin'

import {API} from '../api/api'
import {useQuery} from 'react-query'

function Transaction(){

    document.title = "Transaction"
    let api = API()

    let { data: transactions, refetch } = useQuery("transactionsCache", async () => {
        const config = {
        method: "GET",
        headers: {
            Authorization: "Basic " + localStorage.token,
        },
        }
        refetch()
        const response = await api.get("/transactions", config)
        return response.data
    })

    return (
        <>         
            <Container>
                <NavbarAdmin/>
                <Row>
                    <div className="mt-3">
                        <h5 className="fw-bold">Incoming Transaction</h5>
                        <Table responsive="lg" style={{border: 'white'}} striped bordered hover>
                            <thead style={{color: 'red'}}>
                            <tr>
                                <th>No</th>
                                <th>Users</th>
                                <th>Transfer Proof</th>
                                <th>Remaining Active</th>
                                <th>Status User</th>
                                <th>Status Payment</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {transactions?.map((item, index) => (
                            <tr>
                                <td><p className="fw-bold">{index + 1}</p></td>
                                <td><p className="fw-bold">{item.user.fullName}</p></td>
                                <td><p className="fw-bold">{item.transferProof}</p></td>
                                <td><p className="fw-bold">{item.remainingActive} / Hari</p></td>
                                <td>
                                {item.userStatus !== "Active" ? (
                                    <>
                                    <p className="fw-bold" style={{color:"red"}}>{item.userStatus}</p>
                                    </>
                                ) : (
                                    <>
                                     <p className="fw-bold" style={{color:"#34ba85"}}>{item.userStatus}</p>
                                    </>
                                )}
                                </td>
                                <td>{item.paymentStatus === "Approved"? (
                                    <>
                                    <p className="fw-bold" style={{color:"#12ca82"}}>{item.paymentStatus}</p>
                                    </>
                                ) : item.paymentStatus === "Pending" ?(
                                    <>
                                     <p className="fw-bold" style={{color:"#e8ac63"}}>{item.paymentStatus}</p>
                                    </>
                                )  : item.paymentStatus === "Cancel" ?(
                                    <>
                                     <p className="fw-bold" style={{color:"red"}}>{item.paymentStatus}</p>
                                    </>
                                ) : (
                                    <>
                                    </>
                                )}</td>
                                <td key={item.id}>
                                    <Drop index={item.id}/>
                                </td>
                            </tr>
                            ))}
                            </tbody>   
                        </Table>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Transaction
