// index.component.js

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { trailsIndex } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'

// import './Index.scss'

class TrailsIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trails: []
    }
  }


  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  trailsIndex = event => {
    event.preventDefault()

    const { user, token } = this.state
    const { flash, history, setUser } = this.props

    trailsIndex(this.state)
      // .then(res => res.ok ? res : new Error())
      // .then(res => res.json())
      // .then(res => setUser(res.user))
      .then(() => flash(messages.signInSuccess, 'flash-success'))
      // .then(() => history.push('/'))
      .catch(() => flash(messages.signInFailure, 'flash-error'))
  }

  render() {
    const { user, token } = this.state

    return (
      <div style={{ marginTop: 10 }}>
        <h3>Index Trails</h3>
        <form className='auth-form' onSubmit={this.trailsIndex}>
          <div className="form-group">
            <label>Index Trail Name:  </label>
            <input type="text" className="trail" />
          </div>
          <div className="form-group">
            <label>Index Town Name: </label>
            <input type="text" className="town" />
          </div>
          <div className="form-group">
            <label>Index State Name: </label>
            <input type="text" className="state" />
          </div>
          <div className="form-group">
            <input type="submit" value="Index" className="btn btn-primary" />
          </div>
          <button type="submit">Index</button>
        </form>
      </div>
    )
  }
}

export default withRouter(TrailsIndex)
