import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { handleErrors, deleteCompletedTrail, createCompletedTrail } from './api'
import messages from '../trails/messages'

import './Card.scss'

const styles = theme => ({
    card: {
        marginBottom: 20,
        marginRight: 20,
        width: 280,
        textAlign: 'left'
    },
    actions: {
        display: 'flex',
    },
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
        marginRight: -8,
    },
    avatar: {
        backgroundColor: '#0275d8',
    },
})

class CardComponentCompletedTrails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            trailed: true,
            id: props.id
        }
        this.handleTrailClick = this.handleTrailClick.bind(this)
    }

    async handleTrailClick() {
        try {
            this.setState({ summitted: !this.state.trailed })
            if (this.state.trailed) {
                const id = this.state.id
                const user = this.props.user
                const response = await deleteCompletedTrail(user, id)
            } else {
                const id = this.state.id
                const user = this.props.user
                const response = await createCompletedTrail(user, id)
                const json = await response.json()
                const newId = json.completed_trail.id
                this.setState({ id: newId })
            }
        } catch (e) {
            const flash = this.props.flash
            flash(messages.addOrDeleteFail, 'flash-error')
        }
    }

    addDefaultSrc(ev) {
        ev.target.src = require('./mt.jpg')
    }

    render() {
        const { classes } = this.props
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Trail" className={classes.avatar}>
                            {this.props.name[0]}
                        </Avatar>
                    }
                    title={this.props.name}
                    subheader={this.props.state}
                />
                <CardMedia
                    component="img"
                    className="card-media"
                    onError={this.addDefaultSrc}
                    image={this.props.image ? this.props.image : require('./mt.jpg')}
                    title={this.props.title}
                />
                <CardContent>
                    <Typography component="p" style={{ textAlign: 'center' }}>
                        Elevation: {this.props.elevation}   |
            Level: {this.props.difficulty}
                    </Typography>
                </CardContent>
                <CardActions className="card-actions" disableActionSpacing>
                    <IconButton aria-label="Add to completed trails">
                        <img
                            onClick={this.handleTrailClick}
                            alt="trail"
                            className="trail-button"
                            title={this.state.trailed ? 'Click to unmark this trail as complete' : 'Click to mark this trail as complete'}
                            src={this.state.trailed ? require('./trailed.png') : require('./nottrailed.png')}>
                        </img>
                    </IconButton>
                    <Link to={this.state.trailed ? `/trails/${this.state.id}/show-completed-trail` : `/trails/${this.state.id}/show`} className="see-more" id={this.state.id} flash={this.props.flash}>See Stats</Link>
                </CardActions>

            </Card>
        )
    }
}

CardComponentCompletedTrails.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CardComponentCompletedTrails)