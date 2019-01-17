// delete.component.js

// import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

// import { trailsDelete } from '../../api'
// import messages from '../../messages'
// import apiUrl from '../../../apiConfig'

// import './DeleteComponents.scss'

// const IndexComponents = props => {
//   const Trails = props.trails.map((trail, index) => {
//     // console.log(trail)
//     const deleteTrail = () => {
//       // console.log(trail.owner, props.user._id)
//       trailsDelete(trail, props.user)
//         .then(props.getAllTrails)
//     }
//     return (
//       <div key={trail._id}>
//         <h3><b>path</b>: {trail.path}</h3>
//         <h5><b>town</b>: {trail.town}</h5>
//         <h5><b>state</b>: {trail.state}</h5>
//         <div className="row">
//           {/*<Link to="/trail-update" className="btn btn-warning mx-3">
//             Update
//           </Link>*/}
//           <button onClick={deleteTrail} type="submit" className="btn btn-danger">
//             Delete
//           </button>
//         </div>
//       </div>
//     )
//   })
//   return (
//     <div>
//       {Trails}
//     </div>
//   )
// }

// export default withRouter(TrailsIndex)




// class TrailsDelete extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       id: 1,
//       // message: null
//     }
//   }

//   trailsDelete = event => {
//     event.preventDefault()

//     const { trail, town, state } = this.state
//     const { flash, history, user } = this.props
//     console.log(user)

//     trailsDelete(this.state, user)
//     // .then(handleErrors)  
//     // .then(res => res.ok ? res : new Error())
//     // .then(res => res.json())
//     // .then(res => setUser(res.user))
//     // .then(() => flash(messages.signInSuccess, 'flash-success'))
//     // .then(() => history.push('/'))
//     // .catch(() => flash(messages.signInFailure, 'flash-error'))
//   }

//   render() {
//     const { trail, town, state, } = this.state

//     return (
//             <input type="submit" value="Delete" className="btn btn-primary" />
//             <button type="submit">Delete</button>
//           </form>
//           {this.state.message && <span>{this.state.message}</span>}
//         </div>
//       </div>
//     )
//   }
// }

// export default withRouter(TrailsDelete)
