import React, { Component } from 'react'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import Homepage from './Homepage'
import About from './About'
import './index.css'
// import {MyCustomComponent as Homepage} from './MyCustomComponent'
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link> NavLink
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App