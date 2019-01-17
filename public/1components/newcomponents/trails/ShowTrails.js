import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, showTrail } from '../../../trails/api'
import messages from '../../../trails/messages'
import apiUrl from '../../../../apiConfig'
import '../trailsinfo.scss'
import Weather from '../Weather'
import Loading from '../../../loadingicon/loading.js'

class ShowTrail extends Component {
    constructor() {
        super()

        this.state = {
            trail: false
        }
    }

    async componentDidMount() {
        try {
            const { user, id } = this.props
            const response = await showTrail(user, id)
            const json = await response.json()
            this.setState({ trail: json.trail })
        } catch (e) {
            const { flash } = this.props
            flash('We\'\re having trouble displaying the data. Try again soon.', 'flash-error')
        }
    }

    render() {
        if (this.state.trail) {
            return (
                <div className="container-trail-info">
                    <div className="header-trail-info">
                        <h1>{this.state.trail.name} Trail</h1>
                        <h2>{this.state.trail.state}</h2>
                    </div>
                    <div className="stats">
                        <h3>Elevation: {this.state.trail.elevation} feet</h3>
                        <h3>Difficulty Level: {this.state.trail.difficulty}</h3>
                        <h3>Distance to end: {this.state.trail.distance_to_trail}</h3>
                        <h3>Features of this ride: {this.state.trail.features}</h3>
                    </div>
                    <Weather
                        trail={this.state.trail}
                        flash={this.props.flash}
                    />
                </div>
            )
        } else {
            return (
                <Loading />
            )
        }
    }
}

export default ShowTrail