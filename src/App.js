import React, { Component } from "react";
import {Route, Switch, Link} from "react-router-dom";
import Login from "./Login"
import "./App.css";

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {page: ""};
  }

  changePage(newPage) {
    this.setState({page: newPage});
  }

  renderPage() {
    if(this.state.page === 'Login')
      return <Login />
  }



  render() {

    return (
      <div className="App">
        <nav>
          <Link to='/login' className="nav-item">Sign In/ Register</Link>
        </nav>
        <Switch>
          <Route exact path='/Login' component={Login} />
        </Switch>
        
        
        {this.renderPage()}
      </div>
    );

  }
  
}

export default App;
