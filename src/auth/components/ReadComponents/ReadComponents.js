// read.component.js

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { trailsRead } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'

// import './Read.scss'

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


  // export default class Read extends Component {

  render() {
    const { user, token } = this.state

    return (
      <div style={{ marginTop: 10 }}>
        <h3>Read Trails</h3>
        <form className='auth-form' onSubmit={this.trailsRead}>
          <div className="form-group">
            <label>Read Trail Name:  </label>
            <input type="text" className="trail" />
          </div>
          <div className="form-group">
            <label>Read Town Name: </label>
            <input type="text" className="town" />
          </div>
          <div className="form-group">
            <label>Read State Name: </label>
            <input type="text" className="state" />
          </div>
          <div className="form-group">
            <input type="submit" value="Read" className="btn btn-primary" />
          </div>
          <button type="submit">Read</button>
        </form>
      </div>
    )
  }
}

export default withRouter(TrailsRead)
