import {Button, Form, CloseButton ,Modal, ModalHeader, Row, Col } from 'react-bootstrap';
import {React, useState} from 'react';

function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="px-5 btn-sign" variant="danger" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Row className="justify-content-end">
            <CloseButton onClick={handleClose} className="mb-2 me-3"/>
          </Row>
    
          <Row className="justify-content-center">
            <Col lg="10">
              <h1>Sign Up</h1>
              <Form>
                <Form.Group className="mt-4 mb-4" controlId="formBasicEmail">
                  <Form.Control className="py-2" type="email" placeholder="Email" required/>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Control className="py-2" type="password" placeholder="Password" required/>
                  </Form.Group>

                  <Form.Group className="mt-4 mb-4" controlId="formBasicEmail">
                  <Form.Control className="py-2" type="text" placeholder="Full Name" required/>
                  </Form.Group>
                  <div className="d-grid mt-4 mb-3">
                    <Button className="mt-2" variant="danger" size="lg">
                      Sign Up
                    </Button>
                  </div>
                <center>
                <p className="mb-4">Already have an account ? Klik Here</p>
                </center>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

 export default SignUp;