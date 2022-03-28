import {Dropdown, ButtonGroup, Button , Row, Form} from 'react-bootstrap'
import { API } from '../api/api'

import { useMutation, useQuery } from 'react-query'
import { useState, useEffect } from 'react'

function Drop(props){
  let api = API()

  // const [idUpdate, setIdUpdate] = useState(null)
  // const[idCancel , setIdCancel] = useState(null)
  const [form1, setForm1] = useState({
    transferProof: "",
    remainingActive: "",
    userStatus: "",
    paymentStatus: "",
  })

  const [form2, setForm2] = useState({
    transferProof: "",
    remainingActive: "",
    userStatus: "",
    paymentStatus: "",
  })
  
  useQuery("transactionCache", async () => {
    const config = {
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    }
    const response = await api.get(`/transaction/${props.index}`, config)
    setForm1({
      remainingActive: 30,
      userStatus: "Active",
      paymentStatus: "Approved",
      transferProof: response.data.transferProof,
    })

    setForm2({
      remainingActive: 0,
      userStatus: "Not Active",
      paymentStatus: "Cancel",
      transferProof: response.data.transferProof,
    })
  })

  const update =  useMutation(async (e) => {
    try {
      e.preventDefault()
        // Store data with FormData as object
        let formData =  new FormData()
        formData.set("transferProof", form1.transferProof)
        formData.set("remainingActive", form1.remainingActive)
        formData.set("userStatus", form1.userStatus)
        formData.set("paymentStatus", form1.paymentStatus)

        // Configuration
        const config = {
            method: "PATCH",
            headers: {
            Authorization: "Basic " + localStorage.token,
            },
            body: formData,
        }

    const response = await api.patch("/update-transaction/" + props.index, config)   
    console.log(props.index)  
    console.log(response) 

    } catch (error) {
      console.log(error)
    }
  })

  const cancel =  useMutation(async (e) => {
    try {
      e.preventDefault()
        // Store data with FormData as object
        let formData =  new FormData()
        formData.set("transferProof", form2.transferProof)
        formData.set("remainingActive", form2.remainingActive)
        formData.set("userStatus", form2.userStatus)
        formData.set("paymentStatus", form2.paymentStatus)

        // Configuration
        const config = {
            method: "PATCH",
            headers: {
            Authorization: "Basic " + localStorage.token,
            },
            body: formData,
        }

    await api.patch("/update-transaction/" + props.index, config)     

    } catch (error) {
      console.log(error)
    }
  })

  // const handleUpdate = 
  // const handleCancel = 

  const id = props.index

    return (
        <Dropdown as={ButtonGroup} key={props.id}> 
        <Dropdown.Toggle style={{color : 'black'}} align="end" split variant="outline-light"/>
      
        <Dropdown.Menu>
          <Dropdown.Item className="mb-2" style={{color : 'green', fontWeight: 'bold'}} onClick={(id) => update.mutate(id)}>
               Approved 
          </Dropdown.Item>

            <Row className="px-3">
              <hr/> 
            </Row>
        
          <Dropdown.Item  style={{color : 'red', fontWeight: 'bold'}} onClick={(e) => cancel.mutate(e)}>
              Cancel 
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      )
}

export default Drop