// update.component.js

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import messages from '../../../messages'
import apiUrl from '../../../../apiConfig'
import { trailsUpdate } from '../../../api'

// import './Update.scss'

class TrailsUpdate extends Component {
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

  trailsUpdate = event => {
    event.preventDefault()

    const { user, token } = this.state
    const { flash, history, setUser } = this.props

    trailsUpdate(this.state)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.signInSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.signInFailure, 'flash-error'))
  }


  // export default class Update extends Component {

  render() {
    const { user, token } = this.state

    return (
      <div style={{ marginTop: 10 }}>
        <h3>Update Trails</h3>
        <form className='auth-form' onSubmit={this.updateRead}>
          <div className="form-group">
            <label>Update Trail Name:  </label>
            <input type="text" className="trail" />
          </div>
          <div className="form-group">
            <label>Update Town Name: </label>
            <input type="text" className="town" />
          </div>
          <div className="form-group">
            <label>Update State Name: </label>
            <input type="text" className="state" />
          </div>
          <div className="form-group">
            <input type="submit" value="Update" className="btn btn-primary" />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}

export default withRouter(TrailsUpdate)
