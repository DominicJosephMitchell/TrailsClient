import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { viewTrails } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'

import './ViewTrails.scss'

class ViewTrails extends Component {
  constructor(props) {
    super(props)
    const { flash, history, setUser, cards } = this.props
    this.state = {
      trails: null
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  viewTrails = event => {
    event.preventDefault()

    const { card } = this.state

    viewTrails(this.state)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.trailInSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.trailInFailure, 'flash-error'))
  }

  render() {
    const { card } = this.state
    return (
      <div className="view-trails-container">
        <div className="view-trails-header">
          <legend>Greenwood Trail</legend>
        </div>
        <form className='auth-form' onSubmit={this.Map}>
          <button type="submit">Map</button>
        </form>
        <form className='auth-form' onSubmit={this.Information}>
          <button type="submit" >Information</button>
        </form>
      </div >
    )
  }
}

export default withRouter(ViewTrails)
