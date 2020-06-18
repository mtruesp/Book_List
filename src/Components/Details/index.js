import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class Info extends React.Component{

    render(){
        {
            if(this.props.bookSelected != null){
                return(
                    <Container>
                        <Row>
                            <Col>Nombre: {this.props.bookSelected.name}</Col>
                            <Col>Autor: {this.props.bookSelected.author}</Col>
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

       
    }
}

export default Info