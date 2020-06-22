import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import {connect} from 'react-redux'
import {getUsers} from '../../actions'


class UserList extends React.Component{

    componentDidMount(){
        this.props.getUsers()
    }

    render(){
        return(
            <Container>
                {
                    this.props.users.map((user) => {
                        return <Row key={user.id}>
                            <Col>
                                Name: { user.name }
                            </Col>
                            <Col>
                                Email: { user.email }
                            </Col>
                        </Row>
                    })
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {getUsers})(UserList)