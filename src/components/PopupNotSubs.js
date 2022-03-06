import {useState} from 'react'
import {Col, Alert} from 'react-bootstrap'
import { render } from '@testing-library/react';


function Popup() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div id="alert">
      <Col lg="11">
      <Alert className="" variant="danger" onClose={() => setShow(false)} dismissible>
        <h6 className=" mt-2">
        Please make a payment to read the latest book
        </h6>
      </Alert>
      </Col>
      </div>
    )
  }
  return <> </>
}

export default Popup

