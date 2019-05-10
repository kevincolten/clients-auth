import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Clients extends Component {
  state = {
    clients: [],
    loggedIn: !!localStorage.getItem('JWT_TOKEN')
  }

  componentDidMount = async () => {
    try {
      const clientResponse = await fetch('/api/clients', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('JWT_TOKEN')}`
        }
      })
      const clients = await clientResponse.json();
      this.setState({ clients: clients });
    } catch (error) {
      console.error(error)
    }

  }

  render() {
    if (!this.state.loggedIn) return <Redirect to="/login" />
    return (
      <div>
        <ul>
          {this.state.clients.map(client => <li>{client.name}</li>)}
        </ul>
      </div>
    )
  }
}
