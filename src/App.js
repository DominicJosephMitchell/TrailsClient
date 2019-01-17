import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp/SignUp'
import SignIn from './auth/components/SignIn/SignIn'
import SignOut from './auth/components/SignOut/SignOut'
import ChangePassword from './auth/components/ChangePassword/ChangePassword'
// import ViewTrails from './auth/components/ViewTrails/ViewTrails'
// import Trails from './auth/components/Trails'
// import CrudComponents from './auth/components/CrudComponents/CrudComponents'
import TrailsCreate from './auth/components/CreateComponents'
import TrailsRead from './auth/components/ReadComponents'
import TrailsUpdate from './auth/components/UpdateComponents'
import TrailsDelete from './auth/components/DeleteComponents'
import TrailsIndex from './auth/components/IndexComponents'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

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
        <CrudComponents user={user} />
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
          {/* <Route path='/view-trails' render={() => (
            <ViewTrails flash={this.flash} user={user} />
          )} /> */}
          {/* <Route path='/trails-finished' render={() => (
            <ViewTrails flash={this.flash} user={user} />
          )} /> */}
          
          {/* CRUD */}
          {/* <Route user={user} path='/crud-components' render={() => (
            <CrudComponents flash={this.flash} user={user} />
          )} /> */}
          <Route user={user} path='/crud-components' render={() => (
            <TrailsCreate flash={this.flash} user={user} />
          )} />
          <Route path='/crud-components' render={() => (
            <TrailsDelete flash={this.flash} user={user} />
          )} />
          <Route path='/crud-components' render={() => (
            <TrailsIndex flash={this.flash} user={user} />
          )} />
          <Route path='/crud-components' render={() => (
            <TrailsRead flash={this.flash} user={user} />
          )} />
          <Route path='/crud-components' render={() => (
            <TrailsUpdate flash={this.flash} user={user} />
          )} />
          
        </main>
      </React.Fragment>
    )
  }
}

export default App


