import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp/SignUp'
import SignIn from './auth/components/SignIn/SignIn'
import SignOut from './auth/components/SignOut/SignOut'
import ChangePassword from './auth/components/ChangePassword/ChangePassword'
import ViewTrails from './auth/components/ViewTrails/ViewTrails'
// import Trails from './auth/components/Trails'

import Create from './auth/components/CrudComponents/CreateComponent'
import Read from './auth/components/CrudComponents/ReadComponent'
import Update from './auth/components/CrudComponents/UpdateComponent'
import Delete from './auth/components/CrudComponents/DeleteComponent'
import Index from './auth/components/CrudComponents/IndexComponent'

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
          <Route path='/view-trails' render={() => (
            <ViewTrails flash={this.flash} user={user} />
          )} />




          {/* <AuthenticatedRoute user={user} path='/trails' render={() => (
            <Trails flash={this.flash} user={user} />
          )} /> */}


          {/* <AuthenticatedRoute user={user} exact path='/trails/:id/show-trails-finished' render={(props) => (
            <ShowTrail flash={this.flash} user={user} id={props.match.params.id} />
          )} />
          <AuthenticatedRoute user={user} exact path='/trails-finished' render={() => (
            <TrailsFinished flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/trails' render={() => (
            <IndexTrails flash={this.flash} user={user} />
          )} /> */}


        </main>
      </React.Fragment>
    )
  }
}

export default App
