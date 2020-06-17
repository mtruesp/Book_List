import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

class List extends React.Component{
  

    render(){
        return(
            <Container>
                {
                    this.props.list.map((book, index) => {
                        return(
                            <Row key={index}>
                                <Col sm="6">
                                    {book.name}
                                </Col>
                                <Col sm="6">
                                    <Button onClick={() => this.props.onBookSelected(book)}>Detalles</Button>
                                </Col>
                            </Row>
                        )
                    })
                }
            </Container>
        )
    }
}

export default List