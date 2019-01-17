import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'
import Button from '@material-ui/core/Button'
import './SignIn.scss'

class SignIn extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  signIn = event => {
    event.preventDefault()

    const { email, password } = this.state
    const { flash, history, setUser } = this.props

    signIn(this.state)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.signInSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.signInFailure, 'flash-error'))
  }

  render() {
    const { email, password } = this.state

    return (
      <div className="sign-in-container">
        <div className="sign-in-header">
          <h4>The Journey Begins!</h4>
        </div>
        <form className='auth-form-sign-in' onSubmit={this.signIn}>
          <h3>Sign In</h3>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <Button variant="contained" type="sumbit" className="button">Change Password</Button>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn)