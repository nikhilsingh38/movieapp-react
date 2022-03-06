import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div style={{display: 'flex', background: 'red', padding: '.5'}}>
            <h1>Movies App</h1>
            <h2 style={{marginLeft: '10rem', marginTop: '1.5rem'}}>Favourites</h2>
      </div>
    )
  }
}
