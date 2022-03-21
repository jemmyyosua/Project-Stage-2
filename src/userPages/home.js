import {Col, Row, Container, Image, Card} from 'react-bootstrap'
import homeTemplate from '../assets/homeTemplate.png'
import Popup from '../components/PopupNotSubs'
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
                <div className="d-flex flex-wrap">     
                    <Card border="white" className="me-5 text-center pointer" style={{ width: '7.3rem' }}>
                        <Popup/>
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

