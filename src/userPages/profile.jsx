import { Link, useNavigate} from "react-router-dom";
import {Nav, Button, Col, Row, Container, Image, Card} from 'react-bootstrap'
import icon from '../assets/icon.png'
import iconProfile from '../assets/iconProfile.png'
import { Icon } from '@iconify/react'
import dateFormat from "dateformat"

import { UserContext } from "../context/userContext"
import { useContext, useEffect } from "react"
import {API} from '../api/api'
import {useQuery} from 'react-query'


function Profile(){

    document.title = "Profile"
    const [state, dispatch] = useContext(UserContext);
    const navigate = useNavigate()
  
    const logout = () => {
      console.log(state);
      dispatch({
        type: "LOGOUT",
      });
     navigate("/", { replace: true })
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
      

    return (
        <>
    <Container fluid>
    <Row>
    <Col lg="3">
                <Nav defaultActiveKey="/" className="nav justify-content-center">
                    <div className="">
                        <div className="ms-5 mt-3 mb-3">
                        <Link to="/home"><Image src={icon} className="icon2 ms-5 pointer"></Image></Link>
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
                            <Link to="/profile" className="text-decoration-none fw-bold">                    
                                <p className="mt-1 pointer active-link"><Icon className="me-1" icon="ant-design:user-outlined" width="33" height="33" /> Profile</p>
                            </Link>
                        </Col>

                       
                        <Col lg="5" className="ms-5 mb-5">
                            <Link to="/subscribe" className="text-decoration-none">        
                                <p className="mb-4 pointer"><Icon className="me-1" icon="uil:bill" width="33" height="33" /> Subscribe</p>
                            </Link>
                        </Col>
                        
                        <hr className="ms-5" />

                        <Col lg="5" className="ms-5"> 
                            <p onClick={logout} className="mt-4 ms-1 pointer"><Icon className="me-1" icon="ic:sharp-logout" color="#9c9c9c" width="33" height="33" /> Logout</p>
                        </Col>
                    </div>         
                </Nav>
        </Col>
        
        <Col lg="9">
            <div className="mt-4">
                <h3 className="fw-bold">Profile</h3>
                <Card border="light" className="me-5" style={{ width: '50rem', backgroundColor: '#ffd8d9'}}>
                    <Container>
                       <Row>
                           <Col lg="8">  
                                <Row  className="mt-4">
                                    <Col lg="1">
                                    <Icon className="mt-2" icon="entypo:mail" color="#9c9c9c" width="26" height="26" />  
                                    </Col>  
                                    <Col lg="11">    
                                    <p style={{ fontSize: '10pt'}} className="ms-2 fw-bolder">{user?.email} <br /> <p style={{ fontSize: '10pt'}} className="fw-normal">Email</p></p>   
                                    </Col>
                                </Row> 
                                <Row >
                                    <Col lg="1">
                                    <Icon className="mt-2" icon="ph:gender-intersex-bold" color="#9c9c9c" width="28" height="28" />  
                                    </Col>  
                                    <Col lg="11">    
                                    <p style={{ fontSize: '10pt'}} className="ms-2 fw-bolder">- <br /> <p style={{ fontSize: '10pt'}} className="fw-normal">Gender</p></p>   
                                    </Col>
                                </Row> 
                                <Row >
                                    <Col lg="1">
                                    <Icon className="mt-2" icon="carbon:phone-filled" color="#9c9c9c" width="25" height="25" />  
                                    </Col>  
                                    <Col lg="11">    
                                    <p style={{ fontSize: '10pt'}} className="ms-2 fw-bolder">- <br /> <p style={{ fontSize: '10pt'}} className="fw-normal">Mobile phone</p></p>   
                                    </Col>
                                </Row> 
                                <Row  className="mb-2">
                                    <Col lg="1">
                                    <Icon className="mt-2" icon="carbon:location-filled" color="#9c9c9c" width="25" height="25" /> 
                                    </Col>  
                                    <Col lg="11">    
                                    <p style={{ fontSize: '10pt'}} className="ms-2 fw-bolder">- <br /> <p style={{ fontSize: '10pt'}} className="fw-normal">Address</p></p>   
                                    </Col>
                                </Row> 
                                
                           </Col>
                                
                           <Col lg="4" >
                                <Image src={iconProfile} className="ms-5 mt-4" width="71%"></Image>
                                <Button className="px-5 ms-5 mt-3 mb-3" variant="danger" size="sm">
                                Edit Profile
                                </Button>
                           </Col>
                       </Row>
                       </Container>
                </Card>  
            </div>

            <div className="mt-4">
                <h3 className="fw-bold">My List Book</h3>
                {user?.transaction[0].userStatus !== "Active" ? (
                    <div>
                         <h4>Subscribe to read books</h4>
                    </div>
                    ) : (
                          
                    <div className="d-flex flex-wrap"> 
                    {userBook?.map((item, index) => (
                    <Card border="white" className="me-5 mt-4 text-center pointer" style={{ width: '7.3rem' }}>
                     <Link to={'/book/' + item.book.id  }className="text-decoration-none text-reset" key={index}>
                         <Image src={item.book.cover} fluid rounded style={{minHeight: "180px"}} alt={item.book.cover}/>
                             {/* <div className="mt-2 mb-1">
                                 <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                 <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                 <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                 <Icon icon="eva:star-fill" color="yellow" width="20" height="20" />
                                 </div> */}
                         <h6 className="fw-bold mt-2">{item.book.title}</h6>
                         <p className="p1">{item.book.author}</p>  
                         <p className="p1 fw-bold" style={{marginBlockStart:"-10px"}}>{dateFormat(item.publicationDate, "yyyy")}</p> 
                     </Link> 
                    </Card> 
                      ))} 
                    </div> 
                    )} 
            </div>
        </Col>
     </Row>
    </Container>
    </>
    )
}

export default Profile;
