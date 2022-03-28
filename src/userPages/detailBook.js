import {Col, Row, Stack ,Container, Image, Button} from 'react-bootstrap'
import Sidebar from '../components/navs'
import { Icon } from '@iconify/react'

import { useParams, useNavigate } from "react-router-dom"
import { useQuery, useMutation } from "react-query"
import {API} from '../api/api'
import { useState, useEffect } from 'react'


function DetailBook(){

    let { id } = useParams()
    let api = API()

     const [button, setButton] = useState(true)
     const navigate = useNavigate()

    // Fetching book data from database
    let { data: book, refetch } = useQuery("Cache", async () => {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
      }
      const response = await api.get("/book/" + id, config)
      return response.data
    })
  
    const readBook = () => navigate("/read-book/" + id)
    document.title = book?.title

    const addList = useMutation(async () => {
      try {
        // Get data from book
        const data = {
          idBook: book.id,
          idUser: book.user.id,
        }
  
        console.log(data)
  
        // Data body
        const body = JSON.stringify(data)
  
        // Configuration
        const config = {
          method: "POST",
          headers: {
            Authorization: "Basic " + localStorage.token,
            "Content-type": "application/json",
          },
          body,
        }
  
        // Insert transaction data
        const response = await api.post("/add-list", config)
        navigate("/profile")
      } catch (error) {
        console.log(error)
      }
    })

    let { data: userBook, refetch: userBookRefetch } = useQuery("userBookCache", async () => {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
      };
      const response = await api.get("/list-book", config);
      return response.data;
    })
   
    const checkList = async () => {
      await userBook.find(element => {
        if(element.id == id){
          setButton(false)
        }
      })
    }

  // const handleButton = () => {
  //   if (userBooks.idBook === id){
  //     setButton(true)
  //   } 
  // }
  // useEffect(() => {
  //   handleButton()
  // },[])
  

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

  useEffect(() => {
    checkList()
  },[])
    return (
    <>
    <Container fluid>
    <Row>
    <Col lg="3">
         <Sidebar name={user?.fullName} userStatus={user?.transaction[0].userStatus !== "Active" ?(
             <div>
                <p className="p1 text-center me-4 mt-3 fw-bolder" style={{color:"red"}}>Not Subcribed Yet</p>
             </div>
        ) : (
            <div>
              <p className="p1 text-center me-4 mt-3 fw-bolder" style={{color:"#00db25"}}>Subscribed</p>         
            </div> 
        )}/>     
    </Col>

        <Col lg="9">
            <Container>
                <Row className="mt-5">
                    <Col lg="3">
                            <Image src={book?.cover} width="90%" height="92%"></Image>
                    </Col>
                            
                    <Col lg="9">
                            <h2 className="fw-bold">{book?.title} <br /> <p className=" mt-1 p1 fw-normal">{book?.author}</p></h2>
                            <p className="mt-4 fw-bold">Publication date <br /> <p className="p1 fw-normal">{book?.publicationDate}</p></p>                          
                            <p className="fw-bold">Pages <br /> <p className=" mt-1 p1 fw-normal">{book?.pages}</p></p>
                            <p style={{color: 'red'}} className="fw-bold">ISBN<br /> <p className="mt-1 p1 fw-normal" style={{color: 'black'}}>{book?.ISBN}</p></p>
                    </Col>
                

                <Stack direction="vetical" gap={2} className="me-5">
                    <h5 className="fw-bold">About This Book</h5>
                    <p className="p1">{book?.about}</p>
                </Stack>
                
                <Stack direction="horizontal" gap={2} className="me-5" style={{position: "sticky", marginBlockStart: "210px"}}>
                <div className="ms-auto">
                  {button && 
                    <Button onClick={() => addList.mutate()} className="px-2 me-2" variant="danger" size="sm">
                        Add My List <Icon className="ms-1" icon="bi:bookmark" color="white" width="16" height="17" />
                    </Button>
                  }
                </div>
                <div>
                    <Button onClick={readBook} type="reset" className="px-2" variant="secondary" size="sm"  >
                      Read Book <Icon className="ms-1" icon="carbon:direction-straight-right" color="white" width="15" height="20" />      
                    </Button>            
                </div>
                </Stack>   
                </Row>           
           </Container>
        </Col>
     </Row>
    </Container>
    </>
    )
}


export default DetailBook

