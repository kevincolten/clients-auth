import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from './containers/Login';
import Clients from './containers/Clients';

class App extends React.Component {
  state = {
    loggedIn: !!localStorage.getItem('JWT_TOKEN')
  }

  logout = () => {
    localStorage.clear();
    this.setState({ loggedIn: false })
    window.location.href = '/'
  }

  render = () => {
    return (
      <BrowserRouter>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/clients/">Clients</Link>
        <br />
        <a href="#" onClick={this.logout}>Logout</a>
        <br/>

        <Route exact path="/" component={this.state.loggedIn ? Clients : Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/clients/" component={Clients} />
      </BrowserRouter>
    );
  }

}

export default App;
