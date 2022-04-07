import {Dropdown, ButtonGroup, Button , Row, Form} from 'react-bootstrap'
import { API } from '../api/api'

import { useMutation, useQuery } from 'react-query'
import { useState, useEffect } from 'react'

function Drop(props){
  let api = API()

  // const [idUpdate, setIdUpdate] = useState(null)
  // const[idCancel , setIdCancel] = useState(null)

  
  let { data: transaction } =useQuery("transactionCache", async () => {
    const config = {
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    }
    const response = await api.get(`/transaction/${props.index}`, config)
    return response.data
  })

  const update =  useMutation(async (e) => {
    try {
      e.preventDefault()
        // Store data with FormData as object
        let formData =  new FormData()
        formData.set("transferProof", transaction.transferProof)
        formData.set("remainingActive", 30)
        formData.set("userStatus", "Active")
        formData.set("paymentStatus", "Approved")

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
        formData.set("transferProof", transaction.transferProof)
        formData.set("remainingActive", 0)
        formData.set("userStatus", "Not Active")
        formData.set("paymentStatus", "Cancel")

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

  
  const handleCancel = (id) => cancel.mutate(id)
  const handleUpdate = (id) => update.mutate(id)

  useEffect(() =>{
    const handleUpdate = (id) => update.mutate(id)
    const handleCancel = (id) => cancel.mutate(id)
    handleUpdate()
    handleCancel()
  },[])

    return (
        <Dropdown as={ButtonGroup} key={props.id}> 
        <Dropdown.Toggle style={{color : 'black'}} align="end" split variant="outline-light"/>
      
        <Dropdown.Menu>
          <Dropdown.Item className="mb-2" style={{color : 'green', fontWeight: 'bold'}} onClick={handleUpdate}>
               Approved 
          </Dropdown.Item>

            <Row className="px-3">
              <hr/> 
            </Row>
        
          <Dropdown.Item  style={{color : 'red', fontWeight: 'bold'}} onClick={handleCancel}>
              Cancel 
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      )
}

export default Drop