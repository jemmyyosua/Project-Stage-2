import {Col, Row,Container, Form, Button, FloatingLabel} from 'react-bootstrap'
import { Icon } from '@iconify/react'
import Navbar from '../components/navbar-admin'


function AddBook(){
    return (
        <>         
            <Container>
                <Navbar/>
                <Row>
                    <div className="">
                        <h5 className="mb-3 fw-bold">Add Book</h5>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Title"/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="date" placeholder="Publisher Date"/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Pages"/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Author"/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="ISBN"/>
                            </Form.Group>

                            <FloatingLabel className="mb-3" label="Comments">
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '10rem' }}
                                />
                            </FloatingLabel>

                            <Col lg="4">
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control type="file" />
                            </Form.Group>
                            </Col>
                            <div className="d-flex justify-content-end">
                            <Button  className="px-4 mb-4" variant="danger" type="submit">
                                Add Book <Icon className="ms-1 mb-1" icon="fluent:book-add-24-regular" color="white" width="25" height="25" />
                            </Button>
                            </div>
                        </Form>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default AddBook