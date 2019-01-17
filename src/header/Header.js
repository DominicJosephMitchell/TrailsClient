import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/create-components">Create Trail</Link>
    {/* <Link to="/read-components">Show Trail</Link> */}
    <Link to="/update-components">Update Trail</Link>
    {/* <Link to="/delete-components">Delete Trail</Link> */}
    <Link to="/index-components">Show Trails</Link>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/"><img
      src={require('./bikerBlackIsolated1.jpg')}
      className='logo' />
    </Link>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>Bicycle Trails of Southern New England</h1>
    <nav>
      { user && <span>Aloha !, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
