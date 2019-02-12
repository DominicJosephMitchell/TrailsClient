// index.component.js

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { trailsDelete } from '../../api'
import { trailsIndex } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'
import './IndexComponents.scss'


const TrailsIndex = props => {
  const Trails = props.trails.map((trail, index) => {
    const deleteTrail = () => {
      console.log(trail, props.user._id)
      trailsDelete(trail, props.user)
        .then(props.getAllTrails)
    }

    return (
      <div key={trail._id}>
        <div className="index-components-container">
          <h1><b>Trail Index</b></h1>
          <h4>Path: {trail.path}</h4>
          <h4>Town: {trail.town}</h4>
          <h4>State: {trail.state}</h4>
          <button onClick={deleteTrail} type="submit" className="btn btn-danger">
            Delete
          </button>
          {/* <div className="row">
            <Link to="/trails-update" className="btn btn-warning mx-3">
            Update
          </Link> */}
        </div>
      </div>
    )
  })
  return (
    <div>
      {Trails}
    </div>
  )
}

export default withRouter(TrailsIndex)
