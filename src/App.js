import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp/SignUp'
import SignIn from './auth/components/SignIn/SignIn'
import SignOut from './auth/components/SignOut/SignOut'
import ChangePassword from './auth/components/ChangePassword/ChangePassword'
import TrailsCreate from './auth/components/CreateComponents/CreateComponents'
import TrailsRead from './auth/components/ReadComponents/ReadComponents'
import TrailsUpdate from './auth/components/UpdateComponents/UpdateComponents'
// import TrailsDelete from './auth/components/DeleteComponents/DeleteComponents'
import TrailsIndex from './auth/components/IndexComponents/IndexComponents'
import { trailsIndex } from './auth/api'
import messages from './auth/messages'


class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null,
      trails: []
    }
  }

  /*---------------Round Index Action-------------------*/
  getAllTrails = () => {
    trailsIndex(this.state.user)
      // .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      // .then(res => console.log(res.rounds))
      .then(
        res =>
          this.setState({
            trails: res.trails
          })
      )
      // .then(console.log(this.state.rounds))
      .then(() => this.flash(messages.showAllTrailsSuccess, 'flash-success'))
      // .then(() => history.push('/'))
      .catch(() => this.flash(messages.showAllTrailsFailure, 'flash-error'))
    // console.log(res)
  }

  setUser = user => this.setState({ user }, this.getAllTrails)

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}
       
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
          
          {/* CRUD */}
          <Route user={user} path='/create-components' render={() => (
            <TrailsCreate getAllTrails={this.getAllTrails} flash={this.flash} user={user} />
          )} />
          {/* <Route path='/delete-components' render={() => (
            <TrailsDelete flash={this.flash} user={user} />
          )} /> */}
          <Route path='/index-components' render={() => (
            <TrailsIndex getAllTrails={this.getAllTrails} trails={this.state.trails} flash={this.flash} user={user} />
          )} />
          <Route path='/read-components' render={() => (
            <TrailsRead flash={this.flash} user={user} />
          )} />
          <Route path='/update-components' render={() => (
            <TrailsUpdate trails={this.state.trails} flash={this.flash} user={user} />
          )} />
          
        </main>
      </React.Fragment>
    )
  }
}

export default App


