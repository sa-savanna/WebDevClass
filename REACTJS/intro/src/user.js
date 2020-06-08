import React, { Component } from 'react'
import Login from './login'
import {Container,Button,Col,Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ''
class User extends Component {
    render() {
        return (
            <div>
                Welcome {this.props.user}!
                <Login/>
                <Container>
                    <Button color='danger'>Danger Button</Button>
                </Container>
            </div>
        )
    }
}

export default User;