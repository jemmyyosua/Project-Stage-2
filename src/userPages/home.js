import {Col, Row, Container, Image, Card} from 'react-bootstrap'
import {useState} from 'react'
import { Link} from "react-router-dom";
import { Icon } from '@iconify/react'
import homeTemplate from '../assets/homeTemplate.png'
import book from '../assets/book-1.png'
import Popup from '../components/PopupNotSubs';
import Sidebar from '../components/navs';


function Home(){

    return (
    <>
    <Container fluid>
    <Row>
    <Col lg="3">
         <Sidebar/>   
    </Col>

        <Col lg="9">
            <Image src={homeTemplate} className="mt-3 ms-5 mb-2" width="85%" height="40%"></Image>
            <div className="ms-5"> 
                <h4 className="fw-bolder ms-3">List Book</h4> 
                <Popup/>
                <div className="d-flex flex-wrap">     
                    <Card border="light" className="me-5 text-center pointer" style={{ width: '7.3rem' }}>
                    <Link to="/detail-book" className="text-decoration-none text-reset">
                        <Image src={book} width="100%" height="180vh"></Image>  
                            <div className="mt-2 mb-1">
                                <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                </div>
                            <h6 className="fw-bold">Serangkai</h6>
                            <p className="p1">Valerie Patkar</p>  
                            <p className="p1 fw-bold" style={{marginBlockStart:"-10px"}}>1980</p> 
                    </Link>            
                    </Card>   
                </div>
            </div>      
        </Col>
     </Row>
    </Container>
    </>
    )
}


export default Home;

