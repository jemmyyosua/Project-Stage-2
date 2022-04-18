import { Link, useNavigate, useParams} from "react-router-dom"
import {Nav, Form, Col, Row, Container, Image, Button, Al} from 'react-bootstrap'
import icon from '../assets/icon.png'
import iconProfile from '../assets/iconProfile.png'
import wow from '../assets/wow.png'
import file from '../assets/file.png'
import { Icon } from '@iconify/react'
import Popup from "../components/PopupSubs"

import { UserContext } from "../context/userContext"
import { useContext, useState} from "react"
import {API} from '../api/api'
import {useQuery, useMutation} from 'react-query'


function Subscribe(){

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
  
    document.title = "Subscribe"
    const [state, dispatch] = useContext(UserContext)

    const navigate = useNavigate()

    const logout = () => {
        console.log(state)
        dispatch({
        type: "LOGOUT",
        })
        navigate("/landing", { replace: true })
    }

    let api = API()
    let { data: user } = useQuery("userCache", async () => {
        const config = {
        method: "GET",
        headers: {
            Authorization: "Basic " + localStorage.token,
        },
        }
        const response = await api.get("/user", config)
        return response.data
    })


    const [preview, setPreview] = useState(null) //For image preview
    const [form, setForm] = useState({
        transferProof : "",
        userStatus : "Not Active",
        paymentStatus : "Pending",
        remainingActive : 0
    }) 

    //Store product data
    // Handle change data on form
    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
        })

        // Create image url for preview
        if (e.target.type === "file") {
        let url = URL.createObjectURL(e.target.files[0])
        setPreview(url)
        }
    }

    const id = user?.transaction[0].id

    const handleSubmit = useMutation(async (e) => {
        try {
        e.preventDefault()

        // Store data with FormData as object
        let formData =  new FormData()
        formData.set("transferProof", form?.transferProof[0], form?.transferProof[0]?.name)
        formData.set("userStatus", form.userStatus)
        formData.set("paymentStatus", form.paymentStatus)
        formData.set("remainingActive", form.remainingActive)


        // Configuration
        const config = {
            method: "PATCH",
            headers: {
            Authorization: "Basic " + localStorage.token,
            },
            body: formData,
        }

        // Insert product data
        const response = await api.patch("/update-transaction/" + id , config)
        console.log(response)
        console.log(formData)

        if(response.status === "success") {
            setShow(true)        
        }
        
        } catch (error) {
        console.log(error)
        }
    })

    return (
        <>
    <Container fluid>
    <Row>
    <Col lg="3">
                <Nav defaultActiveKey="/" className="nav justify-content-center">
                    <div className="">
                        <div className="ms-5 mt-3 mb-3">
                        <Link to="/"><Image src={icon} className="icon2 ms-5 pointer"></Image></Link>
                        </div>
                        <div className="mb-4">
                            <div className="ms-2">
                                    <Col lg="7" className="ms-5 mb-3">  
                                        <Link to="/profile">
                                            <Image roundedCircle width="100px" src={iconProfile} className="ms-5 iconProfile pointer"></Image>  
                                        </Link>  
                                    </Col>
                                </div>
                            <h5 className="text-center me-4">{user?.fullName}</h5>
                            {user?.transaction[0].userStatus !== "Active" ? (
                                    <div>
                                         <p className="p1 text-center me-4 mt-3 fw-bolder" style={{color:"red"}}>Not Subscribed Yet</p>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="p1 text-center me-4 mt-3 fw-bolder" style={{color:"#00db25"}}>Subscribed</p>
                                    </div>
                            )}
                            <hr className="ms-5" />
                        </div>

                        <Col lg="5" className="ms-5 mb-4">
                            <Link to="/profile" className="text-decoration-none">                    
                                <p className="mt-1 pointer"><Icon className="me-1" icon="ant-design:user-outlined" width="33" height="33" /> Profile</p>
                            </Link>
                        </Col>

                       
                        <Col lg="5" className="ms-5 mb-5">
                            <Link to="/subscribe" className="text-decoration-none fw-bold">        
                                <p className="mb-4 pointer active-link"><Icon className="me-1" icon="uil:bill" width="33" height="33" /> Subscribe</p>
                            </Link>
                        </Col>
                        
                        <hr className="ms-5" />

                        <Col lg="5" className="ms-5"> 
                            <p onClick={logout} className="mt-4 ms-1 pointer"><Icon className="me-1" icon="ic:sharp-logout" color="#9c9c9c" width="33" height="33" /> Logout</p>
                        </Col>
                    </div>         
                </Nav>
        </Col>

        <Col lg="7">
               <div className="d-flex flex-column align-items-center mt-5">
                    <h3 className="fw-bold mt-5">Premium</h3>
                    <p className="">Pay now and access all the latest books from <Image src={wow}></Image></p>
                    <h6 className="fw-bold"><Image src={wow}></Image> : 0981312323</h6>
                    <Col lg="4">
                    <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                    <Form.Group className="mt-2 mb-3" controlId="formBasicEmail">
                        <Form.Control className="text-center py-1" type="text" placeholder="Input your account number" required/>
                        </Form.Group>

                        <Form.Group className="mt-2 mb-4" controlId="formBasicEmail">
                            <div class="input-blog-image-group">
                                <label for="input-blog-image">
                                <p>Attach proof of transfer</p>
                                <Image src={file} className=""></Image>
                                </label>
                                <input type="file" accept=".jpg, .jpeg, .png" id="input-blog-image" onChange={handleChange} name="transferProof" hidden />
                            </div>
                        </Form.Group>
                        {preview && (                    
                                <Image
                                className=""
                                src={preview}
                                style={{
                                    maxWidth: "290px",
                                    maxHeight: "290px",
                                    objectFit: "cover",
                                }}
                                alt="preview"
                                />
                            )}

                        <div className="d-grid mt-4 mb-3">
                        <Button type="submit" className="mt-2" variant="danger" size="md">
                            Send
                        </Button>
                        <Popup show={show} handleClose={handleClose} />
                        </div>
                    </Form>
                    </Col>
               </div>       
        </Col>
     </Row>
    </Container>
    </>
    )
}

export default Subscribe
