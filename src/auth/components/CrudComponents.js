// CrudComponents.js
import React from 'react'
import { Link } from 'react-router-dom'

// import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import messages from '../messages'
import apiUrl from '../../apiConfig'

import './CrudComponents.scss'

const authenticatedOptionsSecond = (
  <React.Fragment>
    <Link to="/crud-components/create-components">Create</Link>
    <Link to="/crud-components/delete-components">Delete</Link>
    <Link to="/crud-components/index-components">Index</Link>
    <Link to="/crud-components/read-components">Read</Link>
    <Link to="/crud-components/update-components">Update</Link>
  </React.Fragment>
)


const Section = ({ user }) => (
  <section className="main-section">
    <h1>Trails of Southern New England</h1>
    <nav>
      { authenticatedOptionsSecond }
    </nav>
  </section>
)
export default Section
