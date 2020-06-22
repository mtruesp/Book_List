import React from 'react'
import ReactDom from 'react-dom'
import { Container, Col, Row } from 'react-bootstrap'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import List from '../List'
import Details from '../Details'
import UserList from '../userList'

class App extends React.Component{

    onBookSelected(book){
        this.setState({bookSelected: book})
    }

    render(){
        return(
            <Container>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={List}></Route>
                        <Route path="/users" component={UserList}></Route>
                        <Link to="/"><button>lista</button></Link>
                        <Link to="/users">Users</Link>  
                    </div>
                </BrowserRouter>
                {/* <Row>
                    <Col sm="6">
                        <List></List>
                    </Col>
                    <Col sm="6">
                        <Details></Details>
                    </Col>
                </Row> */}
                {/* <UserList></UserList> */}
               
                

            </Container>
        )
    }
}

export default App