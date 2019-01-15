import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { trails } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'

import './Trails.scss'

class Trails extends Component {
    constructor(props) {
        super(props)
        const { flash, history, setUser, cards } = this.props
        this.state = {
            trails: null
        }
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    trails = event => {
        event.preventDefault()

        const { email, password } = this.state
        const { flash, history, setUser } = this.props


        trails(this.state)
            .then(res => res.ok ? res : new Error())
            .then(res => res.json())
            .then(res => setUser(res.user))
            .then(() => flash(messages.trailInSuccess, 'flash-success'))
            .then(() => history.push('/'))
            .catch(() => flash(messages.trailInFailure, 'flash-error'))
    }

    const trailsCreate = event => {
        event.preventDefault()
        const data = getFormFields(event.target)
        api.trailsCreate(data)
            .then(ui.bucketListCreateSuccess)
            .catch(ui.bucketListCreateFailure)
    }

    const trailsUpdate = event => {
        event.preventDefault()
        const data = getFormFields(event.target)
        api.trailsUpdate(data, data.bucketList.id)
            .then(ui.bucketListUpdateSuccess)
            .catch(ui.bucketListUpdateFailure)
    }

    const trailsDelete = event => {
        event.preventDefault()
        const data = $('#delete-task').val()
        api.trailsDelete(data)
            .then(ui.bucketListDeleteSuccess)
            .catch(ui.bucketListDeleteFailure)
    }

    const trailsIndex = event => {
        event.preventDefault()
        const data = getFormFields(event.target)
        api.bucketListIndex(data)
            .then(ui.bucketListIndexSuccess)
            .catch(ui.bucketListIndexFailure)
    }

    render() {
        const { card } = this.state
        return (
            <div className="view-trails-container">
                <div className="view-trails-header">
                    <legend>Greenwood Trail</legend>
                </div>
                <form className='auth-form' onSubmit={this.Map}>
                    <button type="submit">Map</button>
                </form>
                <form className='auth-form' onSubmit={this.Information}>
                    <button type="submit" >Information</button>
                </form>
                <form className='auth-form' onSubmit={this.CompletedTrail}>
                    <button type="submit" >Click if Finished Trail</button>
                </form>

            </div >
        )
    }
}

export default withRouter(ViewTrails)
