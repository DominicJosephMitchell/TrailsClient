import React from 'react'
import './Home.scss'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="hero-image"
        >
          <div className="heading">
            <h1>Bicycle Trails of Southern New England</h1>
            <h3>Manage your Rides</h3>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home