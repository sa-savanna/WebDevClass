import React, { Component } from 'react'
import User from './user'
import {Container,Button,Col,Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
class Hello extends Component {
    constructor(props){
        super(props)
        this.state= {
            number:0,
            posts:[],
            users:[],
            anything:'string',
            counter:0,
            show: false
        }
        // Do not use setState here!!!
    }


    // componentDidMount(){
    //     this.setState({
    //         number:5
    //     })
    // }

    // onChangeNumber(){
    //     this.setState({
    //         number:10
    //     })
    // }
    

    handleClick=()=>{
        this.setState({
            show:!this.state.show
        })
    }


    increase = ()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }

    decrease = ()=>{
        if(this.state.counter===0){
            this.setState({
                counter:0
            })
        }else{
            this.setState({
                counter:this.state.counter-1
            })
        }
    }

    render() {

        // this.onChangeNumber()

        return (
            <div>
               <Container>
                <Row>
                    <Col>
                    <h1>Hello world!</h1>
                <h1>{this.props.title.toUpperCase()}</h1>
                <h2>{this.props.shownumber}</h2>
                <h3>{this.props.numbers.toString()}</h3>


                {5 + 5}
                {1 + 1}
                {/* {alert('hello')} */}
                <hr></hr>
                {
                    this.props.posts.map((post, index) => (
                        <div key={index}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))
                }

                <hr></hr>

              It's from state:  {this.state.number}
              {this.state.anything}
              
            <p>Counter: {this.state.counter}</p>
            <Button color="danger" onClick={this.increase}>+</Button>
            <Button color="success" onClick={this.decrease}>-</Button>
                <User user='Admin'/>
            <Button onClick={this.handleClick}>{this.state.show ? 'ON' : 'OFF'}</Button>
            {console.log(this.state.show)}
                    </Col>
                </Row>
               </Container>
            </div>
        )
    }
}

export default Hello;
