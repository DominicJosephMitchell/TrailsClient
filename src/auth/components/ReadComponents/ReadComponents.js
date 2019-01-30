// read.component.js

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { trailsRead } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'

import './ReadComponents.scss'

class TrailsRead extends Component {
  constructor() {
    super()

    this.state = {
      trail: '',
      town: '',
      state: '',
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  trailsRead = event => {
    event.preventDefault()

    const { user, token } = this.state
    const { flash, history, setUser } = this.props

    trailsRead(this.state)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.signInSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.signInFailure, 'flash-error'))
  }

  render() {
    const { user, token } = this.state

    return (
      <div className="read-component-container">
        <div className="read-component-header">
          <h3>Read Trails</h3>
        </div>
        <form className='auth-form-read-component' onSubmit={this.trailsRead}>
          <h3></h3>
          <label htmlFor="Read Trail Name">Read Trail Name</label>
          <input
            type="text"
            className="trail" />
          <label htmlFor="Read Town Name" >Read Town Name</label>
          <input
            type="text"
            className="town" />
          <label htmlFor="Read State Name">Read State Name</label>
          <input
            type="text"
            className="state" />
          <input
            type="submit"
            value="Read"
            className="btn btn-primary" />
          <button type="submit">Read</button>
        </form>
      </div>
    )
  }
}

export default withRouter(TrailsRead)
