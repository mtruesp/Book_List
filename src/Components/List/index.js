import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { selectBook } from '../../actions'

const List = (props) => {  

    const nameRef = React.createRef()
    const authorRef = React.createRef()

    const handlerSummint = (event) => {
        event.preventDefault()
        let book = {
            name: nameRef.current.value,
            author: authorRef.current.value
        }

        // console.log('book', book)
        props.selectBook(book)
        
    }
    
    return(
        <Container>
            nombre
            <input ref={nameRef}></input>
            autor
            <input ref={authorRef}></input>
            <button onClick={handlerSummint}>Buscar</button>
            {/* {
                props.list.map((book, index) => {
                    return(
                        <Row key={index}>
                            <Col sm="6">
                                {book.name}
                            </Col>
                            <input ref={inputRef}></input>
                            <Col sm="6">
                                <Button onClick={ (book) => handlerSummint(book) }>Detalles</Button>
                            </Col>
                        </Row>
                    )
                })
            } */}
        </Container>
    )
}

const creacionDeProps = (state) => {
    return {
        list: state.list
    }
}

export default connect(creacionDeProps, { selectBook })(List)