import {useState} from 'react'
import {Modal, Button, Image} from 'react-bootstrap'
import {Link } from "react-router-dom"
import book from '../assets/book-1.png'
import { Icon } from '@iconify/react'


export default function Popup() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  
  return (
    <>
        <Link to="/home" onClick={handleShow} className="text-decoration-none text-reset">
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


