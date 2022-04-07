import {useState} from 'react'
import {Button,Modal} from 'react-bootstrap'

export default function Popup({show, handleClose}) {
  return (
    <>
     <Modal
        className="ms-5"
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Body>
          <p className="text-center" style={{color : "green"}}>
          I will not close if you click outside me. Don't even try to press
          escape key.
          </p>
        </Modal.Body>
      </Modal>
    </>
  )
}


