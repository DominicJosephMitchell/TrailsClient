// delete.component.js

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { trailsDelete } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'

import './DeleteComponents.scss'

class TrailsDelete extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 1,
      // message: null
    }
  }

  trailsDelete = event => {
    event.preventDefault()

    const { trail, town, state } = this.state
    const { flash, history, user } = this.props
    console.log(user)

    trailsDelete(this.state, user)
    // .then(handleErrors)  
    // .then(res => res.ok ? res : new Error())
    // .then(res => res.json())
    // .then(res => setUser(res.user))
    // .then(() => flash(messages.signInSuccess, 'flash-success'))
    // .then(() => history.push('/'))
    // .catch(() => flash(messages.signInFailure, 'flash-error'))
  }

  render() {
    const { trail, town, state, } = this.state

    return (
      <div className="sign-up-container">
        <div className="sign-up-header">
          <div style={{ marginTop: 10 }}>
            <h3>Delete Trails</h3>
          </div>
          <form onSubmit={this.trailsDelete}>
            <div className="form-group">
              <label>Delete Trail Name:  </label>
              <input type="text"
                className="trail"
                value={trail}
                onChange={this.onTrailChange} />
            </div>
            <input type="submit" value="Delete" className="btn btn-primary" />
            <button type="submit">Delete</button>
          </form>
          {this.state.message && <span>{this.state.message}</span>}
        </div>
      </div>
    )
  }
}

export default withRouter(TrailsDelete)
