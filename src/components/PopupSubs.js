import {useState} from 'react'
import {Nav, Col, Row, Container, Image, Button, Alert,  CloseButton} from 'react-bootstrap'



function Popup() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Col lg="8">
      <Alert className="ms-3" variant="success" onClose={() => setShow(false)} dismissible>
        <p className="p1">
        dasdas
        </p>
      </Alert>
      </Col>
    )
  }
  return <> </>

}

export default Popup
