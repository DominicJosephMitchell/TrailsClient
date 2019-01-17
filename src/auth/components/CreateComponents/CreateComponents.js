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
      // message: null
    }
  }

  onPathChange = event => this.setState({ path: event.target.value })

  onTownChange = event => this.setState({ town: event.target.value })

  onStateChange = event => this.setState({ state: event.target.value })

  trailsCreate = event => {
    event.preventDefault()

    const { path, town, state } = this.state
    const { flash, history, user } = this.props
    console.log(user)
    
    trailsCreate(this.state, user)
    // .then(handleErrors)  
    // .then(res => res.ok ? res : new Error())
    // .then(res => res.json())
    // .then(res => setUser(res.user))
    // .then(() => flash(messages.signInSuccess, 'flash-success'))
    // .then(() => history.push('/'))
    // .catch(() => flash(messages.signInFailure, 'flash-error'))
  }

  render() {
    const { path, town, state, } = this.state

    return (
      <div className="sign-up-container">
        <div className="sign-up-header">
          <div style={{ marginTop: 10 }}>
            <h3>Create Trails</h3>
          </div>
          <form className='auth-form' onSubmit={this.trailsCreate}>
            <div className="form-group">
              <label>Add Trail Name:  </label>
              <input type="text" className="path" value={path} onChange={this.onPathChange} />
            </div>
            <div className="form-group">
              <label>Add Town Name: </label>
              <input type="text" className="town" value={town} onChange={this.onTownChange}/>
            </div>
            <div className="form-group">
              <label>Add State Name: </label>
              <input type="text" className="state" value={state} onChange={this.onStateChange}/>
            </div>
            <div className="form-group">
              <input type="submit" value="Create" className="btn btn-primary" />
            </div>
            <button type="submit">Create</button>
          </form>
          {this.state.message && <span>{this.state.message}</span>}
        </div>
      </div>
    )
  }
}

export default withRouter(TrailsCreate)
