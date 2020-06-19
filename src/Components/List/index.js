import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { selectBook } from '../../actions'

const List = (props) => {  
    console.log(props)
    return(
        <Container>
            {
                props.list.map((book, index) => {
                    return(
                        <Row key={index}>
                            <Col sm="6">
                                {book.name}
                            </Col>
                            <Col sm="6">
                                <Button onClick={() => props.selectBook(book) }>Detalles</Button>
                            </Col>
                        </Row>
                    )
                })
            }
        </Container>
    )
}

const creacionDeProps = (state) => {
    return {
        list: state.list
    }
}

export default connect(creacionDeProps, { selectBook })(List)