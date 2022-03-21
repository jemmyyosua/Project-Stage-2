import {Col, Row, Stack ,Container, Image, Button} from 'react-bootstrap'
import Sidebar from '../components/navs';
import book from '../assets/book-2.png'
import { Icon } from '@iconify/react'


function DetailBook(){

    return (
    <>
    <Container fluid>
    <Row>
    <Col lg="3">
         <Sidebar/>   
    </Col>

        <Col lg="9">
            <Container>
                <Row className="mt-5">
                    <Col lg="3">
                            <Image src={book} width="90%" height="92%"></Image>
                    </Col>
                            
                    <Col lg="9">
                            <h2 className="fw-bold">Serangkai <br /> <p className=" mt-1 p1 fw-normal">Valerie Patkar</p></h2>
                            <p className="mt-4 fw-bold">Publication date <br /> <p className="p1 fw-normal">2019</p></p>                          
                            <p className="fw-bold">Pages <br /> <p className=" mt-1 p1 fw-normal">255</p></p>
                            <p style={{color: 'red'}} className="fw-bold">ISBN<br /> <p className="mt-1 p1 fw-normal" style={{color: 'black'}}>981233424672</p></p>
                    </Col>
                </Row>

                <Stack direction="vetical" gap={2} className="me-5">
                    <h5 className="fw-bold">About This Book</h5>
                    <p className="p1"> <p className="p1"> Pembunuhan bisa terjadi di mana saja, termasuk di sebuah kota kecil, terpencil, dan nyaris terlupakan di tengah pandemi Covid-19. 
                        Seorang mantan guru SMP ditemukan tewas tercekik di halaman rumahnya sendiri. Polisi tidak tahu apakah ini pembunuhan terencana, 
                        pembunuhan tak disengaja, atau aksi pencurian yang berakhir dengan pembunuhan.</p> <p className="p1" > Korban adalah guru yang disegani. Setelah pensiun 
                        pun, mantan murid-muridnya sering menghubunginya untuk meminta bantuan atau nasihat. Jadi, tentu saja para mantan muridnya, yang 
                        pulang ke kota itu demi menghadiri reuni, termasuk dalam daftar orang-orang yang dicurigai. Polisi kebingungan, dan si pembunuh 
                        lega karena identitasnya tidak akan pernah ketahuan.</p> Namun, ia tidak menyangka bahwa putri korban akan muncul bersama pamannya—seorang
                        mantan pesulap eksentrik—dan ikut menyelidiki apa yang sebenarnya terjadi dan mencari tahu siapa yang membunuh Kamio Eiichi.</p>
                </Stack>
                
                <Stack direction="horizontal" gap={2} className="me-5">
                <div className="ms-auto">
                    <Button className="px-2 me-2" variant="danger" size="sm">
                    Add My List <Icon className="ms-1" icon="bi:bookmark" color="white" width="16" height="17" />
                    </Button>
                </div>
                <div>
                    <Button className="px-2" variant="secondary" size="sm">
                    Read Book <Icon className="ms-1" icon="carbon:direction-straight-right" color="white" width="15" height="20" />
                    </Button>
                </div>
                </Stack>              
           </Container>
        </Col>
     </Row>
    </Container>
    </>
    )
}


export default DetailBook

