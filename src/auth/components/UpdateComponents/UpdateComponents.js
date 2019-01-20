// update.component.js

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { trailsUpdate } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'

import './UpdateComponents.scss'

class TrailsUpdate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      path: '',
      town: '',
      state: '',
      id: ''
      // message: null
    }
  }

  componentDidMount() {
    console.log(this.props.trails)

    const firstTrailId = this.props.trails[0].id

    this.changeTrailData(firstTrailId)
  }

  changeTrailData = id => {
    const trail = this.props.trails.find(trail => String(trail.id) === String(id))
    this.setState({
      path: trail.path || '',
      town: trail.town || '',
      state: trail.state || '',
      id: trail.id
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target
    if (name === 'id') {
      this.changeTrailData(value)
    } else {
      this.setState({ [name]: value })
    }
  }

  clearForm = () => {
    this.setState(prevState => {
      const nextState = {}
      for (const key in prevState) {
        nextState[key] = ''
      }
      return nextState
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const data = { ...this.state }

    patchTrail(data, this.props.user)
      .then(res => res.ok ? res : new Error())
      .then(() => this.props.flash('Updated that Trail, Good Job', 'flash-success'))
      .then(this.clearForm)
      .then(this.props.getAllTrails)
      .catch(() => console.error('oh no got an error'))
  }
  render() {
    const SelectOptions = this.props.trails.map((trail, index) => {
      return <option key={index} value={trail.id}>{trail.path} (ID: {trail.id})</option>
    })

    return (
      <div className="create-updates-container">
        <div className="create-updates-header">
          <h3>Update Trail</h3> 
        </div>
        <form
          className="trail-form"
          onSubmit={this.handleFormSubmit}>
          <h3>Trails</h3>

          <label htmlFor="id">Id</label>
          <select
            name="id"
            onChange={this.handleInputChange}>
            {SelectOptions}
          </select>

          {/* <label htmlFor="path">Path</label>
          <input
            type="text"
            className="path"
            placeholder="Update Trails Name"
            value={this.state.path} onChange={this.handleInputChange}
          /> */}

          <label htmlFor="path">Path</label>
          <input
            name="path"
            value={this.state.path}
            onChange={this.handleInputChange} />

          <label htmlFor="town">Town</label>
          <input
            name="town"
            value={this.state.town}
            onChange={this.handleInputChange} />

          <label htmlFor="state">State</label>
          <input
            name="state"
            value={this.state.state}
            onChange={this.handleInputChange} />
          
          {/* <input type="submit" value="Create" className="btn btn-warning" /> */}
          <button type="submit">Update Trail</button>

        </form>
      </div>
    )
  }
}

export default withRouter(TrailsUpdate)
