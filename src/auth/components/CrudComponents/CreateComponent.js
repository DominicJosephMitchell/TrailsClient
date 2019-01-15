// create.component.js

import React, { Component } from 'react'

export default class Create extends Component {
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Business</h3>
        <form>
          <div className="form-group">
            <label>Add Trail Name:  </label>
            <input type="text" className="trail" />
          </div>
          <div className="form-group">
            <label>Add Town Name: </label>
            <input type="text" className="town" />
          </div>
          <div className="form-group">
            <label>Add State Name: </label>
            <input type="text" className="state" />
          </div>
          <div className="form-group">
            <input type="submit" value="Register Business" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}