import React, { Component } from 'react'
import {Container,Row,Col, Button} from 'reactstrap'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      users:[]
    }
  }

  addUser= (e)=>{

    e.preventDefault();

    const value = document.getElementById('myinput').value;

    let tempList = this.state.users;
    tempList.push(value)
    this.setState({users:tempList})

  }

  render() {
    return (
      <div>
        <Container>
          test
          <Row>
            <Col className="p-5">
              <input className="form-control" type="text" id="myinput"/>
              <Button onClick={this.addUser}>Add User</Button>
              {this.state.users.map((user,index)=>(
                <p key={index}>
                  username: {user} 
                  index: {index}
                </p>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default App