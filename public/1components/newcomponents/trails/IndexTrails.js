import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, indexTrails } from '../../../trails/api'
import messages from '../../../trails/messages'
import apiUrl from '../../../../apiConfig'
import CardComponentAllTrails from '../../../card/cardAllTrails.js'
import CircularProgress from '@material-ui/core/CircularProgress'
import Loading from '../../../loadingicon/loading.js'

import '../../../App.scss'

class IndexTrails extends Component {
  constructor() {
    super()

    this.state = {
      trails: null
    }
  }

  async componentDidMount() {
    try {
      const { user } = this.props
      const response = await indexTrails(user)
      const json = await response.json()
      this.setState({ trails: json.trails })
    } catch (e) {
      const { flash } = this.props
      flash(messages.indexFail, 'flash-error')
    }
  }

  render() {
    if (this.state.trails) {
      const trailsList = this.state.trails.map((trail) =>
        <CardComponentAllTrails
          flash={this.props.flash}
          key={trail.id}
          id={trail.id}
          name={trail.name}
          state={trail.state}
          elevation={trail.elevation}
          difficulty={trail.difficulty}
          features={trail.features}
          image={trail.image}
          trailed={trail.completed_trails.filter(completed => completed.user.id === this.props.user.id).length === 1 ? true : false}
          trailId={trail.completed_trails.filter(completed => completed.user.id === this.props.user.id).length === 1 ? (trail.completed_trails.filter(completed => completed.user.id === this.props.user.id))[0].id : trail.id}
          user={this.props.user}
                />
            )
            return (
                <div className="container">{trailsList}</div>
            )
        } else {
            return (
                <Loading />
            )
        }
    }
}

export default withRouter(IndexTrails)