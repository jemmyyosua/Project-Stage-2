import {Col, Row, Container, Image, Card} from 'react-bootstrap'
import homeTemplate from '../assets/homeTemplate.png'
import Popup from '../components/PopupNotSubs'
import Sidebar from '../components/navs'
import {Link } from "react-router-dom"
import dateFormat from "dateformat"

import { useState } from 'react'
import {API} from '../api/api'
import {useQuery} from 'react-query'


export default function Home(){
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)  

    let api = API()
    document.title = "Home"

    // Fetching product data from database
    let { data: books, refetch } = useQuery("booksCache", async () => {
        const config = {
        method: "GET",
        headers: {
            Authorization: "Basic " + localStorage.token,
        },
        }
        const response = await api.get("/books", config)
        return response.data
    })

    let { data: user } = useQuery("userCache", async () => {
        const config = {
        method: "GET",
        headers: {
            Authorization: "Basic " + localStorage.token,
        },
        }
        const response = await api.get("/user", config)
        return response.data
    })

    console.log(user)

    return (
    <>
    <Container fluid>
    <Row>
    <Col lg="3">
        <Sidebar name={user?.fullName} userStatus={user?.transaction[0].userStatus !== "Active" ?(
            <div>
                 <p className="p1 text-center me-4 mt-3 fw-bolder" style={{color:"red"}}>Not Subcribed Yet</p>
            </div> 
        ) : (
            <div>
                <p className="p1 text-center me-4 mt-3 fw-bolder" style={{color:"#00db25"}}>Subscribed</p> 
         </div>
            
        )}/>   
    </Col>

        <Col lg="9">
            <Image src={homeTemplate} className="mt-3 ms-5 mb-2" width="85%" height="60%"></Image>
            <div className="ms-5"> 
                <h4 className="fw-lighter ms-3">List Book</h4> 
                {books?.length !== 0 ?(
                <div className="d-flex flex-wrap">
                {books?.map((item, index) => (
                <Card border="white" className="ms-3 me-5 text-center pointer" style={{ width: '7.3rem' }}>
                {user?.transaction[0].userStatus !== "Active" ? (
                        <div>
                            <Link to=""className="text-decoration-none text-reset" onClick={handleShow}>
                            <Image src={item.cover} fluid rounded style={{minHeight: "180px"}} alt={item.cover}></Image>  
                            {/* <div className="mt-2 mb-1">
                            <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                            <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                            <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                            <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                            </div> */}
                            <h6 className="fw-bold mt-2">{item.title}</h6>
                            <p className="p1">{item.author}</p>  
                            <p className="p1 fw-bold" style={{marginBlockStart:"-10px"}}>{dateFormat(item.publicationDate, "yyyy")}</p> 
                            </Link> 
                            <Popup show={show} handleClose={handleClose} />        
                        </div>   
                    ) : (
                        <div>
                         <Link to={'/book/' + item.id  }className="text-decoration-none text-reset" key={index}>
                            <Image src={item.cover} fluid rounded style={{minHeight: "180px"}} alt={item.cover}></Image>  
                                {/* <div className="mt-2 mb-1">
                                    <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                    <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                    <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                    <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                    </div> */}
                            <h6 className="fw-bold mt-2">{item.title}</h6>
                            <p className="p1">{item.author}</p>  
                            <p className="p1 fw-bold" style={{marginBlockStart:"-10px"}}>{dateFormat(item.publicationDate, "yyyy")}</p> 
                        </Link> 
                       </div>
                    )}
                </Card> 
                ))}            
                {/* <Popup show={show} handleClose={handleClose} /> */}
                </div>
                ) : (
                    <h2 className="ms-3 fw-bold fst-italic">Opps...No More Books</h2>
                )}
            </div>      
        </Col>
     </Row>
    </Container>
    </>
    )
}

