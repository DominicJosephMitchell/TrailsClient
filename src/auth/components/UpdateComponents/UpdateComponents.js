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
    const firstTrailId = this.props.trails[0].id
    this.changeTrailData(firstTrailId)
  }

  changeTrailData = id => {
    const trail = this.props.trails.find(movie => String(movie.id) === String(id))
    this.setState({
      path: trail.path || '',
      town: trail.town || '',
      state: movie.state || '',
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
      .catch(() => console.error('oh no got an error'))
    // PatchTrail(data, this.props.user)
    //   .then(() => this.props.flash('Updated that Trail, Good Job', 'flash-success'))
    //   .then(this.clearForm)
    //   .then(this.props.getAllTrails)
    //   .catch(() => console.error('oh no got an error'))
  }

  // handleChange = event => this.setState({
  //   [event.target.name]: event.target.value
  // })

  // trailsUpdate = event => {
  //   event.preventDefault()

  //   const { user, token } = this.state
  //   const { flash, history, setUser } = this.props

  //   trailsUpdate(this.state)
  //     // .then(handleErrors)
  //     .then(res => res.ok ? res : new Error())
  //     .then(res => res.json())
  //     .then(res => setUser(res.user))
  //     .then(() => flash(messages.signInSuccess, 'flash-success'))
  //     .then(() => history.push('/'))
  //     .catch(() => flash(messages.signInFailure, 'flash-error'))
  // }

  render() {
    const { user, token } = this.state
    const SelectOptions = this.props.trails.map((trail, index) => {
      return <option key={index} value={trail.id}>{trail.path} (ID: {trail.id})</option>
    })

    return (
      <form
        className="trail-form"
        onSubmit={this.handleFormSubmit}>
        <h3>Update Movie</h3>

        <label htmlFor="id">Id</label>
        <select
          name="id"
          onChange={this.handleInputChange}>
          {SelectOptions}
        </select>

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

        <button type="submit">Update Trail</button>

      </form>
      // <form className='auth-form' onSubmit={this.updateRead}>
      //   <h3>Update Trails</h3>
      //   <div className="form-group">
      //     {/* <label>Update Trail Name:  </label> */}
      //     <input type="text" className="trail" placeholder="Update Trails Name"/>
      //   </div>
      //   <div className="form-group">
      //     {/* <label>Update Town Name: </label> */}
      //     <input type="text" className="town" placeholder="Update Town Name"/>
      //   </div>
      //   <div className="form-group">
      //     {/* <label>Update State Name: </label> */}
      //     <input type="text" className="state" placeholder="Update State Name" />
      //   </div>
      //   <div className="form-group">
      //     <input type="submit" value="Update" className="btn btn-warning" />
      //   </div>
      //   {/* <button type="submit">Update</button> */}
      // </form>
      // </div>
    )
  }
}

export default withRouter(TrailsUpdate)
