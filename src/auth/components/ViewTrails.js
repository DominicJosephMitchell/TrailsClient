// import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

// import { viewTrails } from '../api'
// import messages from '../messages'
// import apiUrl from '../../apiConfig'

// import './ViewTrails.scss'

// const ViewTrails = ({ user }) => (
//   <header className="main-header">
//     <h1>Bicycle Trails of Southern New England</h1>
//     <nav>
//       {user && <span>Aloha !, {user.email}</span>}
//       {user ? authenticatedOptions : unauthenticatedOptions}
//       {alwaysOptions}
//     </nav>
//   </header>
// )

// const alwaysOptions = (
//   <React.Fragment>
//     <Link to="/"><img
//       src={require('./bikerBlackIsolated1.jpg')}
//       className='logo' />
//     </Link>
//   </React.Fragment>
// )

// class ViewTrails extends Component {
//   constructor() {
//     super()
//     const { flash, history, setUser } = this.props


//     this.state = {
//     <Card>
//     <ImageHeader imageSrc="http://via.placeholder.com/600x250" />
//     <CardHeader>Header</CardHeader>
//     <CardBody>Body</CardBody>
//     <CardFooter>Footer</CardFooter>
//     </Card> 
//     }
//   }

//     handleChange = event => this.setState({
//       [event.target.name]: event.target.value
//     })

//     viewTrails = event => {
//       event.preventDefault()

//     return ()
//     <div className="sign-up-container">
//         <div className="sign-up-header">
//             <h4>Yahoo !</h4>
//         </div>
//     </div>
//     <h3>Greenwodd Trail</h3>
//     placeholder = "Email"
//     <button type="submit" >Information</button >
//     <button type="submit">Map</button>
//     }
// }


// export default withRouter(ViewTrails)