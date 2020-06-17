import React from 'react'
import ReactDom from 'react-dom'
import { Container, Col, Row } from 'react-bootstrap'

import List from '../List'
import Details from '../Details.js'

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            list: [
                {
                    name: "Rayuela",
                    author: "Julio Cortazar"
                },
                {
                    name: "Nada",
                    author: "Jane Taller"
                },
                {
                    name: "Harry Potter",
                    author: "J.K. Rowling"
                }
            ],
            bookSelected: null
        }
    }

    onBookSelected(book){
        this.setState({bookSelected: book})
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col sm="6">
                        <List list={this.state.list} onBookSelected={(book) => this.onBookSelected(book)}></List>
                    </Col>
                    <Col sm="6">
                        <Details bookSelected={this.state.bookSelected}></Details>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App