import React, { useRef, useState } from "react"
import { ReactReader } from "react-reader"
import {Image, Col, Container} from 'react-bootstrap'
import icon from '../assets/icon.png'

import { useParams} from "react-router-dom"
import { useQuery } from "react-query"
import {API} from '../api/api'


export const ReadBook = () => {
  const [page, setPage] = useState('')
  const renditionRef = useRef(null)
  const tocRef = useRef(null)
  const locationChanged = (epubcifi) => {
    if (renditionRef.current && tocRef.current) {
      const { displayed, href } = renditionRef.current.location.start
      const chapter = tocRef.current.find((item) => item.href === href)
      setPage(`Page ${displayed.page} of ${displayed.total} in chapter ${chapter ? chapter.label : 'n/a'}`)
    }
  }

  let { id } = useParams()
  let api = API()

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

  return (
    <>
    <div style={{backgroundColor: "#f2f2f2",  height: "100vh"}}>
    <Container>
    <Image src={icon} style={{width: "10%"}} className="icon2"/>
    <Col className="ms-5" lg="11">
    <div style={{ height: "80vh", position:"relative" , marginTop: "10px", marginBottom:"20px" }}>
        <ReactReader
          locationChanged={locationChanged}
          url={book?.bookFile}
          getRendition={(rendition) => renditionRef.current = rendition}
          tocChanged={toc => tocRef.current = toc}
          epubInitOptions={{
            openAs: 'epub'
          }}
        />
      </div>
      <div style={{ position: 'absolute', bottom: '2rem', right: '1rem', left: '1rem', textAlign: 'center', zIndex: 1, color:"red"}}>
        {page}
      </div>
    </Col>
    </Container>
    </div>
    </>
  )
}


