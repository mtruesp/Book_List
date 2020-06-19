import React from 'react'
import ReactDom from 'react-dom'
import { Container, Col, Row } from 'react-bootstrap'

import List from '../List'
import Details from '../Details'

class App extends React.Component{

    onBookSelected(book){
        this.setState({bookSelected: book})
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col sm="6">
                        <List></List>
                    </Col>
                    <Col sm="6">
                        <Details></Details>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App