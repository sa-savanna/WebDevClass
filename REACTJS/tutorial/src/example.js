import React, { Component } from 'react'

class Example extends Component {
    constructor(props) {
        super(props)
        this.state = null
        // this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (e) => {
        console.log(e.target.value)
    }

    // handleChange (e) {
    //     console.log(e.target.value)
    // }
    render() {
        return (
            <div>
                <input name="username" onChange={this.handleChange} />
            </div>
        )
    }
}

export default Example