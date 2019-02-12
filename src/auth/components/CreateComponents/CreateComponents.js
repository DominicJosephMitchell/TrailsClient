// create.component.js

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { trailsCreate } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'

import './CreateComponents.scss'

class TrailsCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      path: '',
      town: '',
      state: '',
    }
  }

  onPathChange = event => this.setState({ path: event.target.value })

  onTownChange = event => this.setState({ town: event.target.value })

  onStateChange = event => this.setState({ state: event.target.value })

  trailsCreate = event => {
    event.preventDefault()

    const { path, town, state } = this.state
    const { flash, history, user } = this.props
    
    trailsCreate(this.state, user)
      // .then(handleErrors)
      // .then(() => signIn(this.state))
      // .then(handleErrors)
      // .then(res => res.ok ? res : new Error())
      // .then(res => res.json())
      // .then(res => setUser(res.user))
      .then(() => flash(messages.signInSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.signInFailure, 'flash-error'))
  }

  render() {
    const { path, town, state, } = this.state

    return (
      <div className="create-components-container">
        <div className="create-components-header">
          <h3>Create Trails</h3>
        </div>
        <form className='auth-form-create-components' onSubmit={this.trailsCreate}>
          <h3>Trails</h3>
          <label htmlFor="Create Trail Name"></label>
          <input
            type="text"
            className="path"
            placeholder="Create Trails Name"
            value={path} onChange={this.onPathChange}
          />
          <label htmlFor="Create Trails Town"></label>
          <input
            type="text"
            className="town"
            placeholder="Create Trails Town"
            value={town} onChange={this.onTownChange}
          />
          <label htmlFor="Create Trails State"></label>
          <input
            type="text"
            className="state"
            placeholder="Create Trails State"
            value={state}
            onChange={this.onStateChange}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

export default withRouter(TrailsCreate)
