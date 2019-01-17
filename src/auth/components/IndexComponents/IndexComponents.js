// index.component.js

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { trailsDelete } from '../../api'
import messages from '../../messages'
import apiUrl from '../../../apiConfig'


const TrailsIndex = props => {
  const Trails = props.trails.map((trail, index) => {
    // console.log(trail)
    const deleteTrail = () => {
      console.log(trail, props.user._id)
      trailsDelete(trail, props.user)
        .then(props.getAllTrails)
    }
    return (
      <div key={trail._id}>
        <h3><b>path</b>: {trail.path}</h3>
        <h5><b>town</b>: {trail.town}</h5>
        <h5><b>state</b>: {trail.state}</h5>
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





// import './Index.scss'

// class TrailsIndex extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       trails: []
//     }
//   }


//   handleChange = event => this.setState({
//     [event.target.name]: event.target.value
//   })

//   trailsIndex = event => {
//     event.preventDefault()

//     const { user, token } = this.state
//     const { flash, history, setUser } = this.props

//     trailsIndex(this.state)
//       // .then(res => res.ok ? res : new Error())
//       // .then(res => res.json())
//       // .then(res => setUser(res.user))
//       .then(() => flash(messages.signInSuccess, 'flash-success'))
//       // .then(() => history.push('/'))
//       .catch(() => flash(messages.signInFailure, 'flash-error'))
//   }

//   render() {
//     const { user, token } = this.state

//     return (
//       <div style={{ marginTop: 10 }}>
//         <h3>Index Trails</h3>
//         <form className='auth-form' onSubmit={this.trailsIndex}>
//           <div className="form-group">
//             <label>Index Trail Name:  </label>
//             <input type="text" className="trail" />
//           </div>
//           <div className="form-group">
//             <label>Index Town Name: </label>
//             <input type="text" className="town" />
//           </div>
//           <div className="form-group">
//             <label>Index State Name: </label>
//             <input type="text" className="state" />
//           </div>
//           <div className="form-group">
//             <input type="submit" value="Index" className="btn btn-primary" />
//           </div>
//           <button type="submit">Index</button>
//         </form>
//       </div>
//     )
//   }
// }

// export default withRouter(TrailsIndex)
