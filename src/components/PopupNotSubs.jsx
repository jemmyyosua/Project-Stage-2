import {Modal, Button, Image} from 'react-bootstrap'

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
          <p className="text-center" style={{color : "red"}}>
              Please make a payment to read the latest books
          </p>
        </Modal.Body>
      </Modal>
    </>
  )
}


