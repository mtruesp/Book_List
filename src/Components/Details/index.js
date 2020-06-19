import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

const Info = (props) => {

    console.log(props)

    if(props.bookSelected != null){
        return(
            <Container>
                <Row>
                    <Col>Nombre: {props.bookSelected.name}</Col>
                    <Col>Autor: {props.bookSelected.author}</Col>
                </Row>
            </Container>
        )
    }
    else{
        return(
            <Container>
                Selecciona un libro
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bookSelected: state.bookSelected
    }
}

export default connect(mapStateToProps)(Info)