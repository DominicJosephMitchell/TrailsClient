// index.component.js

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { trailsDelete } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'


const TrailsIndex = props => {
  const Trails = props.trails.map((trail, index) => {
    const deleteTrail = () => {
      console.log(trail, props.user._id)
      trailsDelete(trail, props.user)
        .then(props.getAllTrails)
    }
    return (
      <div key={trail._id}>
        <h1><b>path</b>: {trail.path}</h1>
        <h1><b>town</b>: {trail.town}</h1>
        <h1><b>state</b>: {trail.state}</h1>
        <div className="row">
          {/* <Link to="/trails-update" className="btn btn-warning mx-3">
            Update
          </Link> */}
          <button onClick={deleteTrail} type="submit" className="btn btn-danger">
            Delete
          </button>
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
