import {useState} from 'react'
import {Button,Modal} from 'react-bootstrap'



export default function Popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="mt-2" variant="danger" size="md">
        Send
      </Button>
    
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


