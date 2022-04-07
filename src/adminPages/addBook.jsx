import {Col, Row,Container, Form, Button, FloatingLabel, Image} from 'react-bootstrap'
import { Icon } from '@iconify/react'
import NavbarAdmin from '../components/navbar-admin'
import { useNavigate } from "react-router-dom"

import { API } from "../api/api"
import { useState } from "react"
import { useMutation } from "react-query"


export default function AddBook(){

  document.title = "Add Book"
  let api = API()
  const navigate = useNavigate()

  // const [categories, setCategories] = useState([]) //Store all category data
  const [preview, setPreview] = useState(null) //For image preview
  const [form, setForm] = useState({
    cover: "",
    title: "",
    about: "",
    pages	: "",
    author: "",
    publicationDate: "",
    ISBN: "",
    bookFile: ""
  }) 

  //Store product data
  // Handle change data on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    })

    console.log(form.rating)
    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0])
      setPreview(url)
    }
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      // Store data with FormData as object
      const formData = new FormData()
      formData.set("title", form.title)
      formData.set("publicationDate", form.publicationDate)
      formData.set("pages", form.pages)
      formData.set("author", form.author)
      formData.set("ISBN", form.ISBN)
      formData.set("about", form.about)
      formData.set("cover", form?.cover[0], form?.cover[0]?.name)
      formData.set("bookFile", form?.bookFile[0], form?.bookFile[0]?.name)

      // Configuration
      const config = {
        method: "POST",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
        body: formData,
      }

      // Insert product data
     const response = await api.post("/add-book", config)

     console.log(response)
     console.log(formData)

      navigate("/admin-transaction", { replace: true })
    } catch (error) {
      console.log(error)
    }
  })


    return (
        <>         
            <Container>
                <NavbarAdmin/>
                <Row>
                    <div className="">
                        <h5 className="mb-3 fw-bold">Add Book</h5>
                        <Form onSubmit={(e) => handleSubmit.mutate(e)} >
                            <Form.Group className="mb-3">
                                <Form.Control type="text" onChange={handleChange} name="title" placeholder="Title" required/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="date" onChange={handleChange} name="publicationDate" placeholder="Publisher Date" required/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="number" onChange={handleChange} name="pages" placeholder="Pages" pattern="[0-9]+" required/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" onChange={handleChange}  name="author" placeholder="Author" required/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="number" onChange={handleChange} name="ISBN" placeholder="ISBN" pattern="[0-9]+" required/>
                            </Form.Group>

                            <FloatingLabel className="mb-3" label="About Detail" >
                                <Form.Control
                                onChange={handleChange}
                                name="about"
                                as="textarea"
                                placeholder="About"
                                style={{ height: '10rem' }}
                                required
                                />
                            </FloatingLabel>

                            <Col lg="4">
                            {/* {preview && (                    
                                <Image
                                className="mb-3"
                                src={preview}
                                style={{
                                    maxWidth: "430px",
                                    maxHeight: "430px",
                                    objectFit: "cover",
                                }}
                                alt="preview"
                                />
                            )} */}
                            <Form.Group className="mb-3">
                                <Form.Control type="file" accept=".jpg, .jpeg, .png" onChange={handleChange} name="cover" required/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="file" accept=".epub"  onChange={handleChange} name="bookFile" required/>
                            </Form.Group>
                            </Col>
                            <div className="d-flex justify-content-end">
                            <Button type="submit" className="px-4 mb-4" variant="danger" >
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
